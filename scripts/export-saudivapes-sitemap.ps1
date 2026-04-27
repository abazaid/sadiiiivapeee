Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-XmlDocumentFromUrl {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  $tempFile = Join-Path $env:TEMP ("saudivapes-sitemap-" + [guid]::NewGuid().ToString() + ".xml")
  try {
    & curl.exe -s -L --compressed --max-time 120 $Url -o $tempFile | Out-Null
    if (-not (Test-Path -LiteralPath $tempFile)) {
      throw "Could not download sitemap file: $Url"
    }

    $raw = Get-Content -LiteralPath $tempFile -Raw -Encoding UTF8
    return [xml]$raw
  }
  finally {
    if (Test-Path -LiteralPath $tempFile) {
      Remove-Item -LiteralPath $tempFile -Force
    }
  }
}

function Get-LinkType {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  if ($Url -match "/blog/" -or $Url -match "/a-\d+$") { return "blog" }
  if ($Url -match "/p\d+$") { return "product" }
  if ($Url -match "/c\d+$") { return "category" }
  if ($Url -match "/brand/" -or $Url -match "/brands/" -or $Url -match "/br\d+$") { return "brand" }
  return "other"
}

function Get-LanguageFromUrl {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  if ($Url -match "/ar/") { return "ar" }
  if ($Url -match "/en/") { return "en" }
  return "unknown"
}

function Get-ContentId {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  if ($Url -match "/(p\d+|c\d+|a-\d+|br\d+)$") {
    return $matches[1]
  }
  return ""
}

function Get-Slug {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url,
    [Parameter(Mandatory = $true)]
    [string]$Type
  )

  $path = ([uri]$Url).AbsolutePath
  $decoded = [System.Uri]::UnescapeDataString($path).Trim("/")
  if ([string]::IsNullOrWhiteSpace($decoded)) {
    return ""
  }

  $segments = $decoded.Split("/")
  if ($segments.Count -lt 2) {
    return $decoded
  }

  if ($Type -in @("product", "category", "blog", "brand")) {
    return $segments[$segments.Count - 2]
  }

  return $segments[$segments.Count - 1]
}

$indexUrl = "https://saudivapes.com/sitemap.xml"
$exportRoot = Join-Path (Get-Location) "sitemap_exports"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$exportDir = Join-Path $exportRoot $timestamp
New-Item -ItemType Directory -Path $exportDir -Force | Out-Null

$indexXml = Get-XmlDocumentFromUrl -Url $indexUrl
$nsIndex = New-Object System.Xml.XmlNamespaceManager($indexXml.NameTable)
$nsIndex.AddNamespace("sm", "http://www.sitemaps.org/schemas/sitemap/0.9")
$sitemapLocNodes = $indexXml.SelectNodes("//sm:sitemap/sm:loc", $nsIndex)

$sitemapUrls = @()
foreach ($node in $sitemapLocNodes) {
  $sitemapUrls += $node.InnerText.Trim()
}

$records = New-Object System.Collections.Generic.List[object]

foreach ($sitemapUrl in $sitemapUrls) {
  $doc = Get-XmlDocumentFromUrl -Url $sitemapUrl
  $ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
  $ns.AddNamespace("sm", "http://www.sitemaps.org/schemas/sitemap/0.9")
  $ns.AddNamespace("img", "http://www.google.com/schemas/sitemap-image/1.1")

  $urlNodes = $doc.SelectNodes("//sm:url", $ns)
  foreach ($urlNode in $urlNodes) {
    $locNode = $urlNode.SelectSingleNode("sm:loc", $ns)
    if ($null -eq $locNode) {
      continue
    }

    $url = $locNode.InnerText.Trim()
    $lastmodNode = $urlNode.SelectSingleNode("sm:lastmod", $ns)
    $lastmod = if ($null -ne $lastmodNode) { $lastmodNode.InnerText.Trim() } else { "" }

    $imageNodes = $urlNode.SelectNodes("img:image/img:loc", $ns)
    $images = @()
    foreach ($img in $imageNodes) {
      $images += $img.InnerText.Trim()
    }

    $type = Get-LinkType -Url $url
    $record = [PSCustomObject]@{
      type = $type
      language = Get-LanguageFromUrl -Url $url
      content_id = Get-ContentId -Url $url
      slug = Get-Slug -Url $url -Type $type
      url = $url
      lastmod = $lastmod
      image_count = $images.Count
      first_image = if ($images.Count -gt 0) { $images[0] } else { "" }
      all_images = if ($images.Count -gt 0) { $images -join " | " } else { "" }
      source_sitemap = $sitemapUrl
    }

    $records.Add($record)
  }
}

$records = $records | Sort-Object type, language, content_id, url

$allPath = Join-Path $exportDir "all_links.csv"
$productPath = Join-Path $exportDir "products.csv"
$categoryPath = Join-Path $exportDir "categories.csv"
$brandPath = Join-Path $exportDir "brands.csv"
$blogPath = Join-Path $exportDir "blogs.csv"
$otherPath = Join-Path $exportDir "other_links.csv"
$summaryPath = Join-Path $exportDir "summary.txt"

$records | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $allPath
$records | Where-Object { $_.type -eq "product" } | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $productPath
$records | Where-Object { $_.type -eq "category" } | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $categoryPath
$records | Where-Object { $_.type -eq "brand" } | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $brandPath
$records | Where-Object { $_.type -eq "blog" } | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $blogPath
$records | Where-Object { $_.type -eq "other" } | Export-Csv -NoTypeInformation -Encoding UTF8 -Path $otherPath

$summaryLines = @()
$summaryLines += "Source index: $indexUrl"
$summaryLines += "Generated at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss zzz')"
$summaryLines += "Total links: $($records.Count)"
$summaryLines += "Products: $(@($records | Where-Object { $_.type -eq 'product' }).Count)"
$summaryLines += "Categories: $(@($records | Where-Object { $_.type -eq 'category' }).Count)"
$summaryLines += "Brands: $(@($records | Where-Object { $_.type -eq 'brand' }).Count)"
$summaryLines += "Blogs: $(@($records | Where-Object { $_.type -eq 'blog' }).Count)"
$summaryLines += "Other: $(@($records | Where-Object { $_.type -eq 'other' }).Count)"
$summaryLines += ""
$summaryLines += "Export folder: $exportDir"
$summaryLines | Set-Content -LiteralPath $summaryPath -Encoding UTF8

Write-Output "Done. Export folder:"
Write-Output $exportDir
Get-Content -LiteralPath $summaryPath
