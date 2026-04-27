export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const arabicPath = '/ar/سعر-فيب-السعودية';
    const encodedPath = '/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9';

    if (path !== arabicPath && path !== arabicPath + '/' && path !== encodedPath && path !== encodedPath + '/') {
      return fetch(request);
    }

    return new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta -->
  <title>سعر فيب السعودية 2026 — دليل أسعار الفيب والشيشة الإلكترونية</title>
  <meta name="description" content="دليل أسعار الفيب في السعودية 2026: تعرف على سعر السحبات الجاهزة، أجهزة الفيب، النكهات، والشيشة الإلكترونية. قائمة محدثة بأفضل العروض والتخفيضات." />
  <meta name="keywords" content="سعر فيب السعودية, كم سعر الفيب في السعودية, اسعار الشيشة الالكترونية, ارخص فيب السعودية, سعر سحبة جاهزة السعودية" />
  <link rel="canonical" href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <meta name="datePublished" content="2026-04-26T10:00:00+03:00" />
  <meta name="dateModified" content="2026-04-26T10:00:00+03:00" />

  <!-- Open Graph -->
  <meta property="og:title" content="سعر فيب السعودية 2026 — دليل أسعار الفيب والشيشة الإلكترونية" />
  <meta property="og:description" content="دليل أسعار الفيب في السعودية 2026: سعر السحبات الجاهزة، أجهزة الفيب، النكهات، والشيشة الإلكترونية." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" />
  <meta property="og:locale" content="ar_SA" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="سعر فيب السعودية 2026 — دليل أسعار الفيب" />
  <meta name="twitter:description" content="دليل أسعار الفيب في السعودية محدث 2026" />

  <!-- JSON-LD: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type":"Question","name":"كم سعر الفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"يتراوح سعر الفيب في السعودية بين 65 ريال للسحبات الجاهزة و 300+ ريال لأجهزة البودات المتطورة. السحبات الجاهزة تبدأ من 65 ريال وتصل إلى 150 ريال حسب عدد النفثات والماركة."}},
      {"@type":"Question","name":"كم سعر السحبة الجاهزة في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"أسعار السحبات الجاهزة في السعودية تبدأ من 65 ريال لموديلات 4000 نفثة وتصل إلى 150 ريال للموديلات المزودة بشاشة و 20000 نفثة."}},
      {"@type":"Question","name":"كم سعر جهاز الفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"أجهزة الفيب (Pod Systems) تتراوح أسعارها بين 99 ريال و 300+ ريال حسب الماركة والموديل. أجهزة المود المتطورة قد تصل إلى 500+ ريال."}},
      {"@type":"Question","name":"كم سعر نكهة الفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"نكهات السولت نيكوتين (30 مل) تتراوح بين 35-55 ريال. نكهات الفري بيس (60-100 مل) بين 45-80 ريال حسب الماركة والحجم."}},
      {"@type":"Question","name":"هل يوجد فيب بسعر رخيص في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"نعم، تتوفر خيارات اقتصادية مثل سحبات Vgod 4K (65 ريال) وسحبات فيقود (من 55 ريال). قسم عروض التصفية يقدم تخفيضات تصل إلى 50% على منتجات مختارة."}}
    ]
  }
  </script>

  <!-- JSON-LD: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://saudivapes.com/" },
      { "@type": "ListItem", "position": 2, "name": "أسعار الفيب", "item": "https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" }
    ]
  }
  </script>

  <!-- JSON-LD: Speakable -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".prose-wrap",".price-table-wrap",".faq-answer"] },
    "about": { "@type": "Thing", "name": "أسعار منتجات الفيب في السعودية" }
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" media="print" onload="this.media='all'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" /></noscript>

  <style>
    :root{--bg:#0a0a0f;--surface:#13131c;--surface2:#1c1c2e;--border:#2a2a40;--accent:#7c3aed;--accent2:#a855f7;--gold:#f59e0b;--green:#10b981;--text:#e8e8f0;--muted:#8b8ba8;--white:#fff;--radius:16px;--radius-sm:8px}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--text);font-family:'Cairo',sans-serif;line-height:1.8;font-size:16px;direction:rtl}

    .site-nav{position:sticky;top:0;z-index:100;background:rgba(10,10,15,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:14px 24px;display:flex;align-items:center;justify-content:space-between}
    .nav-logo{font-family:'Tajawal',sans-serif;font-weight:800;font-size:1.3rem;color:var(--white);text-decoration:none}
    .nav-logo span{color:var(--accent2)}
    .nav-links{display:flex;gap:20px;list-style:none}
    .nav-links a{color:var(--muted);text-decoration:none;font-size:0.9rem;transition:color 0.2s}
    .nav-links a:hover{color:var(--white)}
    .nav-cta{background:var(--accent);color:white;padding:8px 20px;border-radius:50px;text-decoration:none;font-size:0.88rem;font-weight:700;transition:background 0.2s}
    .nav-cta:hover{background:var(--accent2)}

    .hero{padding:80px 24px 40px;text-align:center;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(124,58,237,0.12) 0%,transparent 60%)}
    .hero h1{font-family:'Tajawal',sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:900;color:var(--white);margin-bottom:16px;line-height:1.3}
    .hero .sub{color:var(--muted);font-size:1rem;max-width:600px;margin:0 auto 8px}
    .hero .meta{color:var(--muted);font-size:0.85rem;margin-top:16px}
    .hero .meta a{color:var(--accent2);text-decoration:none}
    .hero .meta a:hover{text-decoration:underline}

    section{padding:60px 24px}
    .container{max-width:900px;margin:0 auto}

    .prose-wrap h2{font-family:'Tajawal',sans-serif;font-size:1.5rem;font-weight:800;color:var(--white);margin:40px 0 14px;padding-top:8px}
    .prose-wrap p{color:var(--muted);font-size:0.97rem;margin-bottom:16px;line-height:1.9}
    .prose-wrap p strong{color:var(--text)}

    .price-table-wrap{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin:20px 0}
    .price-table-wrap h3{padding:18px 20px;font-size:1.05rem;font-weight:700;color:var(--white);border-bottom:1px solid var(--border);background:rgba(124,58,237,0.08)}
    .price-table{width:100%;border-collapse:collapse}
    .price-table th{background:rgba(124,58,237,0.12);color:var(--accent2);font-size:0.82rem;font-weight:700;padding:12px 16px;text-align:right;border-bottom:1px solid var(--border)}
    .price-table td{padding:14px 16px;font-size:0.88rem;color:var(--text);border-bottom:1px solid rgba(255,255,255,0.04)}
    .price-table tr:last-child td{border-bottom:none}
    .price-table tr:hover td{background:rgba(255,255,255,0.02)}
    .price-table .price{font-weight:900;color:var(--gold);font-family:'Tajawal',sans-serif;font-size:1rem}
    .price-table .shop-link{display:inline-block;background:var(--accent);color:white;padding:4px 14px;border-radius:50px;text-decoration:none;font-size:0.78rem;font-weight:600;transition:background 0.2s}
    .price-table .shop-link:hover{background:var(--accent2)}
    .price-table .label-badge{display:inline-block;background:rgba(16,185,129,0.15);color:var(--green);font-size:0.7rem;padding:2px 8px;border-radius:50px;font-weight:700}
    .price-table .label-hot{background:rgba(239,68,68,0.15);color:#ef4444}

    .cat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:20px 0}
    .cat-card{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:22px;text-decoration:none;color:var(--text);transition:border-color 0.2s,transform 0.2s}
    .cat-card:hover{border-color:var(--accent);transform:translateY(-2px)}
    .cat-card .icon{font-size:2rem;margin-bottom:10px}
    .cat-card h3{font-size:1rem;font-weight:700;color:var(--white);margin-bottom:6px}
    .cat-card p{font-size:0.82rem;color:var(--muted);margin:0}
    .cat-card .range{color:var(--gold);font-weight:700;margin-top:8px;font-size:0.92rem}
    .cat-card .best-badge{display:inline-block;background:rgba(16,185,129,0.15);color:var(--green);font-size:0.7rem;padding:2px 8px;border-radius:50px;font-weight:700;margin-top:4px}

    .inline-cta{background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.06));border:1px solid rgba(124,58,237,0.25);border-radius:var(--radius);padding:24px;margin:28px 0;display:flex;align-items:center;gap:18px}
    .inline-cta .icon{font-size:2rem;flex-shrink:0}
    .inline-cta .txt h4{font-size:0.95rem;font-weight:700;color:var(--white);margin-bottom:4px}
    .inline-cta .txt p{font-size:0.82rem;color:var(--muted);margin:0}
    .inline-cta .btn{margin-right:auto;flex-shrink:0;background:var(--accent);color:white;padding:10px 20px;border-radius:50px;text-decoration:none;font-size:0.85rem;font-weight:700;white-space:nowrap;transition:background 0.2s}
    .inline-cta .btn:hover{background:var(--accent2);text-decoration:none}

    .faq-section{background:var(--surface)}
    .faq-list{list-style:none}
    .faq-item{border-bottom:1px solid var(--border)}
    .faq-question{width:100%;background:none;border:none;color:var(--white);font-family:'Cairo',sans-serif;font-size:0.95rem;font-weight:700;text-align:right;padding:18px 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px}
    .faq-question .faq-icon{color:var(--accent2);font-size:1.2rem;flex-shrink:0;transition:transform 0.2s}
    .faq-item.open .faq-icon{transform:rotate(45deg)}
    .faq-answer{display:none;color:var(--muted);font-size:0.9rem;padding-bottom:18px;line-height:1.7}
    .faq-item.open .faq-answer{display:block}

    .disclaimer{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:18px 20px;margin-bottom:28px;font-size:0.85rem;color:var(--muted)}
    .disclaimer strong{color:var(--gold)}

    .bottom-cta{text-align:center;padding:60px 24px;background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.06));border-top:1px solid rgba(124,58,237,0.15)}
    .bottom-cta h2{font-family:'Tajawal',sans-serif;font-size:1.6rem;font-weight:800;color:var(--white);margin-bottom:12px}
    .bottom-cta p{color:var(--muted);margin-bottom:24px}
    .btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:white;padding:14px 30px;border-radius:50px;text-decoration:none;font-weight:700;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 8px 30px rgba(124,58,237,0.35)}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(124,58,237,0.5)}

    .author-box{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:20px 24px;margin:28px 0}
    .author-box a{color:var(--accent2);text-decoration:none}

    footer{background:var(--surface);border-top:1px solid var(--border);padding:48px 24px 24px}
    .footer-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:40px}
    .footer-brand p{color:var(--muted);font-size:0.88rem;margin-top:12px;max-width:280px;line-height:1.65}
    .footer-col h4{color:var(--white);font-size:0.92rem;font-weight:700;margin-bottom:16px}
    .footer-col ul{list-style:none}
    .footer-col ul li{margin-bottom:10px}
    .footer-col ul li a{color:var(--muted);text-decoration:none;font-size:0.85rem;transition:color 0.2s}
    .footer-col ul li a:hover{color:var(--accent2)}
    .footer-bottom{max-width:1100px;margin:0 auto;padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--muted)}

    @media(max-width:768px){.nav-links{display:none}.cat-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr;gap:28px}.inline-cta{flex-direction:column;text-align:center}.inline-cta .btn{margin-right:0}}
  </style>
</head>
<body>

<nav class="site-nav">
  <a href="https://saudivapes.com/ar" class="nav-logo">Saudi <span>Vape</span></a>
  <ul class="nav-links">
    <li><a href="https://saudivapes.com/ar">الرئيسية</a></li>
    <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
    <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة</a></li>
    <li><a href="https://saudivapes.com/ar/عروض-تصفية/c390558684">عروض</a></li>
  </ul>
  <a href="https://saudivapes.com/ar" class="nav-cta">تسوق الآن</a>
</nav>

<header class="hero">
  <h1>سعر فيب السعودية 2026<br/>دليل الأسعار الشامل</h1>
  <p class="sub">تعرف على أسعار الفيب والشيشة الإلكترونية في السعودية — من السحبات الجاهزة إلى أجهزة البودات والنكهات.</p>
  <p class="meta">📅 آخر تحديث: 26 أبريل 2026 · ✍️ <a href="https://saudivapes.com/ar/blog/author/1210468642">فريق سعودي فيب</a></p>
</header>

<section>
  <div class="container">
    <div class="prose-wrap">

      <div class="disclaimer">
        <strong>تنويه:</strong> الأسعار في هذا الدليل تقريبية وتحديث مستمر. قد تختلف الأسعار الفعلية حسب العروض والتخفيضات. تحقق من صفحة المنتج للحصول على السعر الدقيق.
      </div>

      <p>يبحث الكثير عن <strong>سعر الفيب في السعودية</strong> قبل الشراء، وهنا نقدم لك دليلًا محدثًا بجميع فئات المنتجات — من السحبات الجاهزة رخيصة الثمن إلى أجهزة البودات الاحترافية — مع روابط شراء مباشرة. سواء كنت مبتدئًا تسأل <strong>كم سعر الفيب في السعودية</strong> أو محترفًا تبحث عن أفضل عروض النكهات، هذا الدليل يغطي كل ما تحتاج.</p>

      <!-- Category Cards -->
      <h2>نظرة سريعة على الأسعار حسب الفئة</h2>
      <p>متوسط الأسعار في سوق الفيب السعودي (أبريل 2026):</p>

      <div class="cat-grid">
        <a class="cat-card" href="https://saudivapes.com/ar/شيشة-مزاج-ام-باور-20000-سحبة-mazaj-m-power-dtl/p1407214528">
          <div class="icon">💨</div>
          <h3>مزاج إم باور 20000</h3>
          <p>السحبة الجاهزة الأكثر مبيعاً — 20000 نفثة، DTL، نكهات متعددة</p>
          <div class="range">٨٦ ر.س</div>
          <span class="best-badge">🏆 الأكثر مبيعاً</span>
        </a>
        <a class="cat-card" href="https://saudivapes.com/ar/سحبة-وينكس-كيو-تو-من-جيك-فيب-geekvape-wenax-q2/p1272529607">
          <div class="icon">⚡</div>
          <h3>Geekvape Wenax Q2</h3>
          <p>أفضل جهاز بود مبيعاً — شاشة OLED، 30W، 1000mAh، تصميم أنيق</p>
          <div class="range">٨٧ ر.س</div>
          <span class="best-badge">🏆 الأكثر مبيعاً</span>
        </a>
        <a class="cat-card" href="https://saudivapes.com/ar/نكهة-سولت-السيجار-الكوبي-كوبانو-الاكثر-مبيعا-بني-البني-السيجار-الكو-بي-cubano-vgod-brown/p1736228754">
          <div class="icon">🍇</div>
          <h3>VGOD Cubano Brown</h3>
          <p>أفضل نكهة سولت مبيعاً — سيجار كوبي، 30 مل، 20/50mg نيكوتين</p>
          <div class="range">٦٥ ر.س</div>
          <span class="best-badge">🏆 الأكثر مبيعاً</span>
        </a>
        <a class="cat-card" href="https://saudivapes.com/ar/نكهة-vct-في-سي-تي-من-ripe-vapes-أفضل-نكهة-فانيلا-وتوباكو/p470234006">
          <div class="icon">🌿</div>
          <h3>Ripe Vapes VCT</h3>
          <p>أفضل نكهة توباكو مبيعاً — فانيلا كسترد توباكو، نكهة أسطورية</p>
          <div class="range">٦٥ ر.س</div>
          <span class="best-badge">🏆 الأكثر مبيعاً</span>
        </a>
      </div>

      <!-- Price Table: Disposable -->
      <div class="price-table-wrap">
        <h3>💨 سعر السحبات الجاهزة في السعودية</h3>
        <table class="price-table">
          <thead><tr><th>المنتج</th><th>النفثات</th><th>النكهات</th><th>السعر التقريبي</th><th></th></tr></thead>
          <tbody>
            <tr><td>مزاج إم باور 20000 <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>20,000</td><td>خوخ، عنب، فراولة</td><td><span class="price">٨٦ ر.س</span></td><td><a href="https://saudivapes.com/ar/شيشة-مزاج-ام-باور-20000-سحبة-mazaj-m-power-dtl/p1407214528" class="shop-link">تسوق</a></td></tr>
            <tr><td>مزاج قراند 22K <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>22,000</td><td>متعددة</td><td><span class="price">٨٦ ر.س</span></td><td><a href="https://saudivapes.com/ar/شيشه-جاهزه-مزاج-قراند-22k-الف-موشة-mazaj-grand-22000/p195148026" class="shop-link">تسوق</a></td></tr>
            <tr><td>مزاج انفينيتي X 9000</td><td>9,000</td><td>متعددة</td><td><span class="price">٧٧ ر.س</span></td><td><a href="https://saudivapes.com/ar/مزاج-9000-انفينيتي-اكس-9000-موش-mazaj-infinity-x-9000-puff/p2035469290" class="shop-link">تسوق</a></td></tr>
            <tr><td>Ager SQ 14000 <span class="label-badge">اقتصادية</span></td><td>14,000</td><td>عنب، خوخ، فراولة</td><td><span class="price">٧٤ ر.س</span></td><td><a href="https://saudivapes.com/ar/سحبة-اجير-14000-اس-كيو-ager-sq-14000-puffs/p556776799" class="shop-link">تسوق</a></td></tr>
            <tr><td>Ager SQ 22000 <span class="label-badge">قيمة ممتازة</span></td><td>22,000</td><td>متعددة</td><td><span class="price">٧٤ ر.س</span></td><td><a href="https://saudivapes.com/ar/شيشة-اجير-اس-كيو-22000-موشة-ager-sq-22000-puffs-shisha/p721632669" class="shop-link">تسوق</a></td></tr>
            <tr><td>سحبة E8 <span class="label-badge">الأقل سعراً</span></td><td>800</td><td>نكهات متعددة</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/سحبة-سيجارة-e8-عرض-الاكثر-مبيعا/p724624581" class="shop-link">تسوق</a></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Price Table: Pod Devices -->
      <div class="price-table-wrap">
        <h3>⚡ سعر أجهزة الفيب (بودات) في السعودية</h3>
        <table class="price-table">
          <thead><tr><th>الجهاز</th><th>الميزة</th><th>البطارية</th><th>السعر التقريبي</th><th></th></tr></thead>
          <tbody>
            <tr><td>Geekvape Wenax Q2 <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>شاشة OLED، 30W</td><td>1000mAh</td><td><span class="price">٨٧ ر.س</span></td><td><a href="https://saudivapes.com/ar/سحبة-وينكس-كيو-تو-من-جيك-فيب-geekvape-wenax-q2/p1272529607" class="shop-link">تسوق</a></td></tr>
            <tr><td>OXVA XLIM GO 2 <span class="label-badge">خفيف وصغير</span></td><td>30W، سحبة MTL</td><td>900mAh</td><td><span class="price">٨٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/سحبة-اوكسفا-اكسلم-جو-2-oxva-xlim-go-2-pod-kit-30w/p510864365" class="shop-link">تسوق</a></td></tr>
            <tr><td>VOOPOO DORIC GALAXY <span class="label-hot">🔥 مطور</span></td><td>شاشة، 30W، فيش</td><td>1200mAh</td><td><span class="price">١٧٦ ر.س</span></td><td><a href="https://saudivapes.com/ar/جهاز-سحبة-فوبو-دوريك-جالاكسي-voopoo-doric-galaxy/p151001531" class="shop-link">تسوق</a></td></tr>
            <tr><td>VOOPOO VINCI E120 <span class="label-badge">احترافي</span></td><td>120W، شاشة كبيرة</td><td>2000mAh</td><td><span class="price">١٧٦ ر.س</span></td><td><a href="https://saudivapes.com/ar/جهاز-فينشي-اي-120-من-شركة-فوبو-voopoo-vinci-e120/p1281355681" class="shop-link">تسوق</a></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Price Table: Flavors -->
      <div class="price-table-wrap">
        <h3>🍇 سعر نكهات الفيب في السعودية</h3>
        <table class="price-table">
          <thead><tr><th>النوع</th><th>الحجم</th><th>التركيز</th><th>السعر التقريبي</th><th></th></tr></thead>
          <tbody>
            <tr><td>VGOD Cubano Brown Salt <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>30 مل</td><td>20/50mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-سولت-السيجار-الكوبي-كوبانو-الاكثر-مبيعا-بني-البني-السيجار-الكو-بي-cubano-vgod-brown/p1736228754" class="shop-link">تسوق</a></td></tr>
            <tr><td>VGOD Dry Tobacco Salt</td><td>30 مل</td><td>20/50mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-سولت-فيقود-دراي-التوباكو-الجافة-بدون-إضافات-ممتازة-للمدخنين-dry-tobacco-vgod/p362254481" class="shop-link">تسوق</a></td></tr>
            <tr><td>Ripe Vapes VCT Salt <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>30 مل</td><td>20/50mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-vct-في-سي-تي-من-ripe-vapes-أفضل-نكهة-فانيلا-وتوباكو/p470234006" class="shop-link">تسوق</a></td></tr>
            <tr><td>MEGA MINT Salt <span class="label-hot">🔥 الأفضل</span></td><td>30 مل</td><td>20/50mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-ميجا-نعناع-سولت-نيكوتين-mega-mint-salt/p1503922638" class="shop-link">تسوق</a></td></tr>
            <tr><td>Sam Vapes Mango Crush Frozen</td><td>60 مل</td><td>0/3/6mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-سام-فيب-مانجو-كروش-ايس-sam-vapes-mango-crush-frozen-60ml/p1594923293" class="shop-link">تسوق</a></td></tr>
            <tr><td>Ripe Vapes VCT Freebase <span class="label-badge">الأكثر مبيعاً</span></td><td>60 مل</td><td>3/6mg</td><td><span class="price">٦٥ ر.س</span></td><td><a href="https://saudivapes.com/ar/نكهة-فيب-توباكو-فانيلا-في-سي-تي-ripe-vapes-vct-vanilla-custard-tobacco/p58530527" class="shop-link">تسوق</a></td></tr>
          </tbody>
        </table>
      </div>

      <!-- Shisha -->
      <div class="price-table-wrap">
        <h3>🌿 سعر الشيشة الإلكترونية في السعودية</h3>
        <table class="price-table">
          <thead><tr><th>المنتج</th><th>النوع</th><th>السعر التقريبي</th><th></th></tr></thead>
          <tbody>
            <tr><td>VOOPOO DRAG 5 <span class="label-badge">🏆 الأكثر مبيعاً</span></td><td>177W مود متطور</td><td><span class="price">٢١٧ ر.س</span></td><td><a href="https://saudivapes.com/ar/حهاز-شيشة-دراق-5-من-فوبو-voopoo-drag-5-177w/p1516973452" class="shop-link">تسوق</a></td></tr>
            <tr><td>VOOPOO ARGUS MT <span class="label-badge">الأفضل فئة</span></td><td>شيشة متوسطة 80W</td><td><span class="price">٢٠٨ ر.س</span></td><td><a href="https://saudivapes.com/ar/جهاز-شيشة-ارجوس-ام-تي-من-فوبو-voopoo-argus-mt-kit/p1647662791" class="shop-link">تسوق</a></td></tr>
            <tr><td>Vaporesso GTX ONE PRO <span class="label-badge">ممتاز</span></td><td>شيشة 50W مدمجة</td><td><span class="price">١٣٧ ر.س</span></td><td><a href="https://saudivapes.com/ar/جهاز-شيشة-فابريسو-جي-تي-اكس-ون-برو-vaporesso-gtx-one-pro/p670489661" class="shop-link">تسوق</a></td></tr>
          </tbody>
        </table>
      </div>

      <div class="inline-cta">
        <div class="icon">🛒</div>
        <div class="txt">
          <h4>تصفح جميع المنتجات والأسعار</h4>
          <p>أكثر من 5,800 منتج — شحن سريع لجميع مدن المملكة</p>
        </div>
        <a href="https://saudivapes.com/ar" class="btn">تسوق الآن</a>
      </div>

      <h2>كيف تختار المنتج المناسب لميزانيتك؟</h2>

      <p><strong>ميزانية أقل من 100 ريال:</strong> اختر سحبة جاهزة مثل Vgod 4K (65 ريال) أو Mazaj Lowit 5500 (75 ريال). تمنحك من 4,000 إلى 5,500 نفثة، وتدوم من 3 إلى 7 أيام حسب الاستخدام. مثالية للتجربة الأولى أو كمستخدم خفيف.</p>
      <p><strong>ميزانية 100-200 ريال:</strong> لديك خياران: إما سحبة جاهزة متطورة مثل Vozol Vista 20000 (150 ريال) تدوم أسبوعين، أو جهاز بود مثل Wenax S-C (99 ريال) + نكهة سولت (35-55 ريال). الجهاز أوفر على المدى الطويل لأنك تشتري النكهة فقط بعد ذلك.</p>
      <p><strong>ميزانية 200-500 ريال:</strong> يمكنك شراء جهاز بود متطور (XROS 4 Nano، Vinci) مع نكهات متعددة وملحقات. هذا الخيار هو الأكثر اقتصادية للمستخدم اليومي — تكلفة التشغيل الشهرية أقل بكثير من السحبات الجاهزة.</p>

      <h2>أسئلة شائعة عن أسعار الفيب في السعودية</h2>

      <div class="faq-section" style="background:none;padding:0">
        <ul class="faq-list">
          <li class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
              كم سعر الفيب في السعودية؟
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">يتراوح سعر الفيب في السعودية بين 65 ريال للسحبات الجاهزة و 300+ ريال لأجهزة البودات المتطورة. السحبات الجاهزة تبدأ من 65 ريال وتصل إلى 150 ريال حسب عدد النفثات والماركة. أجهزة البودات (القابلة لإعادة التعبئة) تتراوح بين 99 ريال و 300 ريال.</div>
          </li>
          <li class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
              كم سعر السحبة الجاهزة في السعودية 2026؟
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">أسعار السحبات الجاهزة في السعودية 2026 تبدأ من 65 ريال لموديلات 4000 نفثة (مثل Vgod 4K) وتصل إلى 150 ريال للموديلات المزودة بشاشة و 20000 نفثة (مثل Vozol Vista). المتوسط العام هو 75-120 ريال للسحبة متوسطة العدد.</div>
          </li>
          <li class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
              هل يوجد فيب رخيص في السعودية؟
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">نعم، تتوفر خيارات اقتصادية مثل سحبات Vgod 4K (65 ريال) وسحبات فيقود (من 55 ريال). يمكنك أيضاً زيارة قسم عروض التصفية الذي يقدم تخفيضات تصل إلى 50% على منتجات مختارة. أجهزة البودات للمبتدئين تبدأ من 99 ريال.</div>
          </li>
          <li class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
              كم سعر نكهة الفيب في السعودية؟
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">نكهات السولت نيكوتين (30 مل) تتراوح بين 35 و 55 ريال حسب الماركة. نكهات الفري بيس (60-100 مل) تتراوح بين 45 و 80 ريال. بعض النكهات المميزة أو المستوردة قد تصل إلى 100 ريال.</div>
          </li>
          <li class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
              هل سعر جهاز الفيب أغلى من السحبات الجاهزة؟
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">الجهاز أغلى في الشراء الأولي (99-300+ ريال) لكنه أوفر بكثير على المدى الطويل. شراء نكهة 30 مل (35-55 ريال) تعادل 5-10 سحبات جاهزة من حيث عدد النفثات. وفرك الشهري يصل إلى 40-60% مقارنة بالسحبات الجاهزة.</div>
          </li>
        </ul>
      </div>

      <div class="author-box">
        <strong style="color:var(--accent2)">✍️ فريق التحرير</strong>
        <p style="margin:8px 0 0">هذا الدليل من إعداد فريق <strong>فيب السعودية</strong>. يتم تحديث الأسعار بشكل دوري لتعكس أحدث العروض والتخفيضات. تصفح <a href="https://saudivapes.com/ar">المتجر</a> للأسعار الفعلية.</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══ BOTTOM CTA ═══ -->
<section class="bottom-cta">
  <h2>تصفح الأسعار الفعلية الآن</h2>
  <p>أكثر من 5,800 منتج — أسعار محدثة — شحن لكل السعودية</p>
  <a href="https://saudivapes.com/ar" class="btn-primary">🛒 تسوق الآن</a>
  <p style="margin-top:14px;font-size:0.85rem;color:var(--muted)">🚚 تعرف على <a href="https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" style="color:var(--accent2)">سياسة الشحن والتوصيل</a> — نوصل لكل مدن المملكة
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="https://saudivapes.com/ar" class="nav-logo" style="font-size:1.5rem">Saudi <span>Vape</span></a>
      <p>متجر إلكتروني سعودي للفيب والشيشة الإلكترونية والنكهات الأصلية — تأسس 2021 في الرياض.</p>
    </div>
    <div class="footer-col">
      <h4>المنتجات</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
        <li><a href="https://saudivapes.com/ar/بودات-pods/c640187172">أجهزة بودات</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات فيب</a></li>
        <li><a href="https://saudivapes.com/ar/عروض-تصفية/c390558684">عروض وتخفيضات</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>المتجر</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/من-نحن">عن المتجر</a></li>
        <li><a href="https://saudivapes.com/ar/blog/author/1210468642">كاتب المحتوى</a></li>
        <li><a href="https://wa.me/966542906276">تواصل معنا</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Saudi Vape</span>
    <span>الرياض، المملكة العربية السعودية</span>
  </div>
</footer>

<script>
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => { el.classList.remove('open'); el.querySelector('.faq-question').setAttribute('aria-expanded','false'); });
    if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
  }
</script>

</body>
</html>`, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=3600',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin',
      },
    });
  }
};
