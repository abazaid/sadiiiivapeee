param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$workersRoot = Join-Path $root "cloudflare-workers"
$sourceTemplatePath = Join-Path $workersRoot "riyadh-vape-landing/template.html"
$sourceWorkerPath = Join-Path $workersRoot "riyadh-vape-landing/worker.js"
$productsCsvPath = Join-Path $root "sitemap_exports/2026-04-22_22-35-07/products.csv"

$sourceTemplate = Get-Content -Raw -LiteralPath $sourceTemplatePath
$sourceWorker = Get-Content -Raw -LiteralPath $sourceWorkerPath
$products = Import-Csv -LiteralPath $productsCsvPath

$cityConfigs = @(
  @{
    city = "جدة"; slug = "متجر-فيب-جدة"; worker = "jeddah-vape-landing";
    ids = @("p1003808179","p1011911492","p1012616640","p1017745808","p1007044466","p1007427717");
    compareRows = @(
      @("Mazaj x Elfbar Lowit 5500","5,500","650mAh","٨٥ ر","ثبات النكهة"),
      @("Eonsmoke Stik Cool Mint","جاهزة","مباشر","٦٥ ر","سريع"),
      @("Mazaj Diamond 5000","5,000","500mAh","٧٥ ر","استخدام يومي"),
      @("Nasty Crystal 5K","5,000","500mAh","٨٠ ر","نكهة باردة"),
      @("Geek Bar Pulse 15K","15,000","شحن","١٢٠ ر","الأوفر")
    );
    reviews = @(
      @("★★★★★","طلبت Lowit 5500 ووصل بنفس اليوم في جدة. الكود الأصلي اشتغل مباشرة والنكهة ثابتة.","راكان السلمي","ر","جدة - أبريل 2026"),
      @("★★★★★","جربت كاليبرن G4 مع نكهة مانجو آيس. الأداء ممتاز والتوصيل كان أسرع من المتوقع.","ليان العتيبي","ل","جدة - مارس 2026"),
      @("★★★★☆","أخذت MiniFit S مع نكهة زلزلة آيس. الطلب مرتب وخدمة المتجر محترفة.","بدر الحازمي","ب","جدة - فبراير 2026")
    )
  },
  @{
    city = "الشرقية"; slug = "متجر-فيب-الشرقية"; worker = "eastern-vape-landing";
    ids = @("p1008234041","p1000204390","p1007435691","p101135151","p1011173063","p101447083");
    compareRows = @(
      @("Puffmi Spearmint 1500","1,500","جاهزة","٥٥ ر","خفيفة"),
      @("DPS Xtra 6000","6,000","650mAh","٨٥ ر","للمبتدئ"),
      @("Mazaj Infinity 4500","4,500","جاهزة","٧٠ ر","سعر مناسب"),
      @("Nasty Crystal 5K","5,000","500mAh","٨٠ ر","فاكهية"),
      @("Vozol Vista 20000","20,000","شاشة","١٥٠ ر","استخدام ثقيل")
    );
    reviews = @(
      @("★★★★★","في الشرقية طلبت DPS Xtra 6000 ووصل سريع. المنتج أصلي والنكهة واضحة.","تركي الغامدي","ت","الشرقية - أبريل 2026"),
      @("★★★★★","فابريسو تارجيت 80 ممتاز مع النكهات الحرة. فرق واضح بالجودة عن الخيارات التقليد.","مها الدوسري","م","الشرقية - مارس 2026"),
      @("★★★★☆","اشتريت Wenax H1 مع Jam Monster. التوصيل جيد والتغليف ممتاز.","سلمان اليامي","س","الشرقية - فبراير 2026")
    )
  },
  @{
    city = "مكة"; slug = "متجر-فيب-مكة"; worker = "makkah-vape-landing";
    ids = @("p101933501","p1012753341","p1010902585","p100297103","p1018140551","p1011040056");
    compareRows = @(
      @("Nasty Crystal 5K","5,000","500mAh","٨٠ ر","نكهة خوخ"),
      @("Mazaj Infinity 4500","4,500","جاهزة","٧٠ ر","سريع"),
      @("Mazaj x Elfbar Lowit 5500","5,500","650mAh","٨٥ ر","متوازن"),
      @("Randm Tornado 7000","7,000","1000mAh","٩٠ ر","بخار أوضح"),
      @("Vozol Vista 20000","20,000","شاشة","١٥٠ ر","للمستخدم المتقدم")
    );
    reviews = @(
      @("★★★★★","طلبت Nasty Crystal 5K داخل مكة ووصل بسرعة. كل شيء مطابق والوصف دقيق.","فهد الكناني","ف","مكة - أبريل 2026"),
      @("★★★★★","Vaporesso Gen S مع Cloud Nurdz طلع خيار ممتاز. الأداء ثابت طوال اليوم.","نجلاء القرشي","ن","مكة - مارس 2026"),
      @("★★★★☆","بودات نوفو 2 مع سمارت رمان آيس كانت ممتازة. خدمة ما بعد البيع متعاونة.","زياد الزهراني","ز","مكة - فبراير 2026")
    )
  },
  @{
    city = "المدينة المنورة"; slug = "متجر-فيب-المدينة-المنورة"; worker = "madinah-vape-landing";
    ids = @("p1007842752","p101933501","p1017745808","p1012616640","p1017233230","p1011818354");
    compareRows = @(
      @("Mazaj Diamond 5000","5,000","500mAh","٧٥ ر","متوازن"),
      @("Nasty Crystal 5K","5,000","500mAh","٨٠ ر","فاكهي"),
      @("Eonsmoke Stik Cool Mint","جاهزة","مباشر","٦٥ ر","نعناع بارد"),
      @("Mazaj Infinity 4500","4,500","جاهزة","٧٠ ر","طلب سريع"),
      @("Geek Bar Pulse 15K","15,000","شحن","١٢٠ ر","الأوفر")
    );
    reviews = @(
      @("★★★★★","في المدينة المنورة طلبت Mazaj Diamond 5000 ووصل بنفس اليوم. التغليف ممتاز.","أنس الحربي","أ","المدينة المنورة - أبريل 2026"),
      @("★★★★★","كاليبرن G4 مع ميجا كولا آيس أعطاني تجربة ممتازة ونكهة ثابتة.","شذى العمري","ش","المدينة المنورة - مارس 2026"),
      @("★★★★☆","MiniFit S مع نكهة ميلو ميلون خيار موفق. الشحن سريع والخدمة محترفة.","مروان البلوي","م","المدينة المنورة - فبراير 2026")
    )
  }
)

function Get-ProductById([string]$id) {
  $item = $products | Where-Object { $_.content_id -eq $id } | Select-Object -First 1
  if (-not $item) { throw "Missing product id: $id" }
  return $item
}

function Normalize-Name([string]$slug) {
  $txt = ($slug -replace "-", " ").Trim()
  if ($txt.Length -gt 78) { return $txt.Substring(0,78).Trim() + "..." }
  return $txt
}

function BuildProductsHtml([string[]]$ids) {
  $records = $ids | ForEach-Object { Get-ProductById $_ }
  $cards = New-Object System.Collections.Generic.List[string]
  for ($i = 0; $i -lt $records.Count; $i++) {
    $r = $records[$i]
    $cat = if ($i -lt 2) { "disposable" } elseif ($i -lt 4) { "devices" } else { "flavors" }
    $badge = ""
    if ($cat -eq "disposable" -and $i -eq 0) { $badge = '<span class="badge-hot">🔥 سحبة جاهزة</span>' }
    elseif ($cat -eq "disposable") { $badge = '<span class="badge-new">✨ سحبة جديدة</span>' }
    elseif ($cat -eq "devices" -and $i -eq 2) { $badge = '<span class="badge-new">⚡ جهاز</span>' }

    $tags = if ($cat -eq "disposable") {
      @("<span class=""spec-tag"">جاهزة</span>","<span class=""spec-tag"">سولت</span>","<span class=""spec-tag"">استخدام مباشر</span>")
    } elseif ($cat -eq "devices") {
      @("<span class=""spec-tag"">جهاز فيب</span>","<span class=""spec-tag"">قابل للشحن</span>","<span class=""spec-tag"">استخدام يومي</span>")
    } else {
      @("<span class=""spec-tag"">نكهة فيب</span>","<span class=""spec-tag"">جودة أصلية</span>","<span class=""spec-tag"">متوافقة</span>")
    }
    $desc = if ($cat -eq "disposable") {
      "خيار مناسب للاستخدام السريع اليومي. نكهة ثابتة وسهولة كاملة بدون إعدادات."
    } elseif ($cat -eq "devices") {
      "مناسب للمستخدم الذي يريد تحكم أعلى وأداء ثابت مع تكلفة أفضل على المدى الطويل."
    } else {
      "نكهة متوازنة مناسبة للاستخدام اليومي مع أجهزة الفيب المتوافقة."
    }
    $cta = if ($cat -eq "flavors") { "تصفح" } else { "اطلب الآن" }
    $title = Normalize-Name $r.slug

    $card = @"
      <article class="product-card" data-category="$cat">
        <div class="product-img">
          $badge
          <img src="$($r.first_image)" alt="$title" width="1000" height="1000" loading="lazy" decoding="async">
        </div>
        <div class="product-body">
          <div class="product-brand">Saudi Vape</div>
          <h3 class="product-name">$title</h3>
          <div class="product-specs">
            $($tags -join "`n            ")
          </div>
          <p style="font-size:0.82rem;color:var(--muted);margin-bottom:14px;">$desc</p>
          <div class="product-footer">
            <div class="product-price">تحقق من السعر <small>/ داخل المنتج</small></div>
            <a href="$($r.url)" class="btn-add">$cta</a>
          </div>
        </div>
      </article>
"@
    $cards.Add($card)
  }
  return @"
    <div class="products-grid" id="products-grid">

$($cards -join "`n")
    </div>
"@
}

function BuildCompareHtml([object[]]$rows) {
  $trs = $rows | ForEach-Object {
@"
              <tr>
                <td>$($_[0])</td>
                <td>$($_[1])</td>
                <td>$($_[2])</td>
                <td>$($_[3])</td>
                <td><span class="best-badge">$($_[4])</span></td>
              </tr>
"@
  }
  return @"
            <tbody>
$($trs -join "`n")
            </tbody>
"@
}

function BuildReviewsHtml([object[]]$reviews) {
  $items = $reviews | ForEach-Object {
@"
      <div class="review-card">
        <div class="stars">$($_[0])</div>
        <p class="review-text">$($_[1])</p>
        <div class="reviewer">
          <div class="reviewer-avatar">$($_[3])</div>
          <div>
            <div class="reviewer-name">$($_[2])</div>
            <div class="reviewer-date">$($_[4])</div>
          </div>
        </div>
      </div>
"@
  }
  return @"
    <div class="reviews-grid">
$($items -join "`n")
    </div>
"@
}

foreach ($cfg in $cityConfigs) {
  $html = $sourceTemplate
  $html = $html -replace "متجر-فيب-الرياض", $cfg.slug
  $html = $html -replace "الرياض", $cfg.city

  $productsHtml = BuildProductsHtml $cfg.ids
  $compareHtml = BuildCompareHtml $cfg.compareRows
  $reviewsHtml = BuildReviewsHtml $cfg.reviews

  $html = [regex]::Replace(
    $html,
    '(?s)<!-- DYNAMIC_PRODUCTS_START -->\s*<div class="products-grid" id="products-grid">.*?</div>\s*<!-- DYNAMIC_PRODUCTS_END -->',
    "<!-- DYNAMIC_PRODUCTS_START -->`n$productsHtml`n    <!-- DYNAMIC_PRODUCTS_END -->"
  )
  $html = [regex]::Replace(
    $html,
    '(?s)<!-- DYNAMIC_COMPARE_TBODY_START -->\s*<tbody>.*?</tbody>\s*<!-- DYNAMIC_COMPARE_TBODY_END -->',
    "<!-- DYNAMIC_COMPARE_TBODY_START -->`n$compareHtml`n            <!-- DYNAMIC_COMPARE_TBODY_END -->"
  )
  $html = [regex]::Replace(
    $html,
    '(?s)<!-- DYNAMIC_REVIEWS_START -->\s*<div class="reviews-grid">.*?</div>\s*<!-- DYNAMIC_REVIEWS_END -->',
    "<!-- DYNAMIC_REVIEWS_START -->`n$reviewsHtml`n    <!-- DYNAMIC_REVIEWS_END -->"
  )

  $htmlBase64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($html))

  $workerJs = $sourceWorker
  $workerJs = [regex]::Replace($workerJs, 'const HTML_BASE64 = "[^"]*";', ('const HTML_BASE64 = "' + $htmlBase64 + '";'))
  $workerJs = $workerJs -replace 'const CANONICAL_PATH = "/ar/[^"]+";', ('const CANONICAL_PATH = "/ar/' + $cfg.slug + '";')
  $workerJs = $workerJs -replace 'const LEGACY_PATH = "/[^"]+";', ('const LEGACY_PATH = "/' + $cfg.slug + '";')

  $wranglerToml = @"
name = "$($cfg.worker)"
main = "worker.js"
compatibility_date = "2026-04-23"

routes = [
  { pattern = "saudivapes.com/ar/$($cfg.slug)*", zone_name = "saudivapes.com" },
  { pattern = "saudivapes.com/$($cfg.slug)*", zone_name = "saudivapes.com" }
]
"@

  $workerDir = Join-Path $workersRoot $cfg.worker
  New-Item -ItemType Directory -Path $workerDir -Force | Out-Null
  Set-Content -LiteralPath (Join-Path $workerDir "template.html") -Value $html -Encoding UTF8
  Set-Content -LiteralPath (Join-Path $workerDir "worker.js") -Value $workerJs -Encoding UTF8
  Set-Content -LiteralPath (Join-Path $workerDir "wrangler.toml") -Value $wranglerToml -Encoding UTF8
}

Write-Output "Generated city workers successfully."
