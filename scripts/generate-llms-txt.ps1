Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Load-CsvOrEmpty {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Path
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    return @()
  }

  return @(Import-Csv -LiteralPath $Path)
}

$exportsRoot = Join-Path (Get-Location) "sitemap_exports"
$latestExport = Get-ChildItem -LiteralPath $exportsRoot -Directory | Sort-Object Name -Descending | Select-Object -First 1
if ($null -eq $latestExport) {
  throw "No sitemap export directory found under: $exportsRoot"
}

$products = Load-CsvOrEmpty -Path (Join-Path $latestExport.FullName "products.csv")
$categories = Load-CsvOrEmpty -Path (Join-Path $latestExport.FullName "categories.csv")
$blogs = Load-CsvOrEmpty -Path (Join-Path $latestExport.FullName "blogs.csv")
$other = Load-CsvOrEmpty -Path (Join-Path $latestExport.FullName "other_links.csv")

$topProducts = @(
  $products |
    Where-Object { $_.url -match "/ar/" } |
    Sort-Object { [string]$_.lastmod } -Descending |
    Select-Object -First 60
)

$topCategories = @(
  $categories |
    Where-Object { $_.url -match "/ar/" } |
    Sort-Object slug |
    Select-Object -First 80
)

$topBlogs = @(
  $blogs |
    Where-Object { $_.url -match "/ar/" } |
    Sort-Object { [string]$_.lastmod } -Descending |
    Select-Object -First 40
)

$trustPages = @(
  $other |
    Where-Object { $_.url -match "/ar/p/" } |
    Sort-Object slug
)

$llmsPath = Join-Path (Get-Location) "cloudflare-workers\llms-txt\llms.txt"
$llmsJsPath = Join-Path (Get-Location) "cloudflare-workers\llms-txt\llms-content.js"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $llmsPath) | Out-Null

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add("# llms.txt for saudivapes.com")
$lines.Add("")
$lines.Add("> Arabic-first reference for AI systems and search assistants.")
$lines.Add("> Keep Arabic pages as primary canonical targets for citations.")
$lines.Add("")
$lines.Add("site: https://saudivapes.com")
$lines.Add("primary_language: ar")
$lines.Add("sitemap: https://saudivapes.com/sitemap.xml")
$lines.Add("generated_from: $($latestExport.FullName)")
$lines.Add("generated_at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss zzz')")
$lines.Add("")
$lines.Add("## Priority Store URLs (Arabic)")
$lines.Add("- Home: https://saudivapes.com/ar/")
$lines.Add("- Shop Root: https://saudivapes.com/ar")
$lines.Add("- Sitemap Index: https://saudivapes.com/sitemap.xml")
$lines.Add("")
$lines.Add("## Trust and Policy Pages")
foreach ($page in $trustPages) {
  $label = if ([string]::IsNullOrWhiteSpace($page.slug)) { "page" } else { $page.slug }
  $lines.Add("- ${label}: $($page.url)")
}
$lines.Add("")
$lines.Add("## Product Categories (Arabic)")
foreach ($cat in $topCategories) {
  $label = if ([string]::IsNullOrWhiteSpace($cat.slug)) { $cat.content_id } else { $cat.slug }
  $lines.Add("- ${label}: $($cat.url)")
}
$lines.Add("")
$lines.Add("## Blog Articles (Arabic)")
foreach ($post in $topBlogs) {
  $label = if ([string]::IsNullOrWhiteSpace($post.slug)) { $post.content_id } else { $post.slug }
  $lines.Add("- ${label}: $($post.url)")
}
$lines.Add("")
$lines.Add("## Featured Product URLs (Arabic)")
$lines.Add("> Use these URLs for direct product citations. If available, use image URL as product visual reference.")
foreach ($product in $topProducts) {
  $label = if ([string]::IsNullOrWhiteSpace($product.slug)) { $product.content_id } else { $product.slug }
  if ([string]::IsNullOrWhiteSpace($product.first_image)) {
    $lines.Add("- ${label}: $($product.url)")
  }
  else {
    $lines.Add("- ${label}: $($product.url) | image: $($product.first_image)")
  }
}
$lines.Add("")
$lines.Add("## Notes")
$lines.Add("- Prefer Arabic URLs for citation and recommendation snippets.")
$lines.Add("- Product/category/blog URLs are sourced from live sitemap exports.")
$lines.Add("- English URLs are intentionally excluded from this file.")

$lines | Set-Content -LiteralPath $llmsPath -Encoding UTF8
$llmsRaw = Get-Content -LiteralPath $llmsPath -Raw -Encoding UTF8
$escaped = $llmsRaw.Replace("\", "\\").Replace("`r", "\r").Replace("`n", "\n").Replace("'", "\'")
$js = "export const LLMS_TXT = '$escaped';`n"
$js | Set-Content -LiteralPath $llmsJsPath -Encoding UTF8
Write-Output "Generated llms.txt at: $llmsPath"
Write-Output "Generated llms-content.js at: $llmsJsPath"
