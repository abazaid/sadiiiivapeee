export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const matched = path === '/ar/blog/author/1210468642' ||
                    path === '/ar/blog/author/1210468642/' ||
                    path === '/blog/author/1210468642' ||
                    path === '/blog/author/1210468642/' ||
                    path.startsWith('/ar/blog/author/1210468642?') ||
                    path.startsWith('/blog/author/1210468642?');

    if (!matched) return fetch(request);

    return new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>فريق سعودي فيب — خبراء منتجات الفيب والشيشة الإلكترونية في السعودية</title>
  <meta name="description" content="فريق التحرير والدعم الفني في سعودي فيب — متخصصون في منتجات الفيب، الشيشة الإلكترونية، النكهات، وأجهزة البودات. خبرة تمتد لسنوات في السوق السعودي." />
  <link rel="canonical" href="https://saudivapes.com/ar/blog/author/1210468642" />
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/blog/author/1210468642" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/blog/author/1210468642" />

  <meta property="og:title" content="فريق سعودي فيب — خبراء الفيب في السعودية" />
  <meta property="og:description" content="فريق متخصص في منتجات الفيب والشيشة الإلكترونية — خبرة في اختيار المنتجات، النكهات، وأجهزة البودات." />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://saudivapes.com/ar/blog/author/1210468642" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" />
  <meta property="og:locale" content="ar_SA" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="فريق سعودي فيب — خبراء الفيب" />
  <meta name="twitter:description" content="خبراء منتجات الفيب والشيشة الإلكترونية في السعودية" />

  <!-- Person Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://saudivapes.com/#person",
    "name": "فريق سعودي فيب",
    "alternateName": "Saudi Vape Team",
    "description": "فريق متخصص في منتجات الفيب والشيشة الإلكترونية في السعودية. خبرة عملية في اختيار الأجهزة، النكهات، وإرشاد العملاء لأفضل المنتجات المناسبة لاحتياجاتهم.",
    "knowsAbout": [
      "أجهزة الفيب",
      "شيشة إلكترونية",
      "نيكوتين سالت",
      "نكهات فيب",
      "سحبات جاهزة",
      "أجهزة بودات",
      "كويلات فيب",
      "بطاريات فيب",
      "منتجات التبغ البديلة",
      "regulations KSA vaping"
    ],
    "worksFor": {
      "@type": "Organization",
      "@id": "https://saudivapes.com/#organization",
      "name": "فيب السعودية",
      "url": "https://saudivapes.com"
    },
    "sameAs": [
      "https://www.instagram.com/saudivapes/",
      "https://x.com/saudivapes"
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://saudivapes.com/" },
      { "@type": "ListItem", "position": 2, "name": "فريق سعودي فيب", "item": "https://saudivapes.com/ar/blog/author/1210468642" }
    ]
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
    .nav-cta{background:var(--accent);color:#fff;padding:8px 20px;border-radius:50px;text-decoration:none;font-size:0.88rem;font-weight:700;transition:background 0.2s}
    .nav-cta:hover{background:var(--accent2)}

    .hero{text-align:center;padding:80px 24px 40px;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(124,58,237,0.12) 0%,transparent 60%)}
    .avatar{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:900;color:#fff;margin:0 auto 20px;font-family:'Tajawal',sans-serif;border:3px solid rgba(168,85,247,0.3)}
    .hero h1{font-family:'Tajawal',sans-serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:900;color:var(--white);margin-bottom:8px}
    .hero .title{color:var(--accent2);font-weight:700;font-size:1rem;margin-bottom:16px}
    .hero .badge{display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);color:var(--green);padding:6px 16px;border-radius:50px;font-size:0.82rem;font-weight:600}
    .hero .badge .dot{width:6px;height:6px;background:var(--green);border-radius:50%}

    section{padding:60px 24px}
    .container{max-width:860px;margin:0 auto}

    .bio-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:32px;margin-bottom:32px}
    .bio-card h2{font-family:'Tajawal',sans-serif;font-size:1.3rem;font-weight:800;color:var(--white);margin-bottom:16px}
    .bio-card p{color:var(--muted);font-size:0.97rem;line-height:1.9;margin-bottom:14px}
    .bio-card p:last-child{margin-bottom:0}
    .bio-card p strong{color:var(--text)}

    .expertise-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:24px 0}
    .expertise-item{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:18px 16px;text-align:center;transition:border-color 0.2s}
    .expertise-item:hover{border-color:rgba(124,58,237,0.4)}
    .expertise-item .icon{font-size:1.8rem;margin-bottom:8px}
    .expertise-item h4{font-size:0.88rem;font-weight:700;color:var(--white);margin-bottom:4px}
    .expertise-item p{font-size:0.78rem;color:var(--muted);margin:0}

    .articles-section{background:var(--surface)}
    .articles-section h2{font-family:'Tajawal',sans-serif;font-size:1.3rem;font-weight:800;color:var(--white);margin-bottom:8px}
    .articles-section .sub{color:var(--muted);font-size:0.9rem;margin-bottom:24px}
    .article-card{display:flex;gap:20px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:22px;margin-bottom:14px;text-decoration:none;color:var(--text);transition:border-color 0.2s,transform 0.2s}
    .article-card:hover{border-color:var(--accent);transform:translateY(-2px)}
    .article-icon{flex-shrink:0;width:44px;height:44px;background:linear-gradient(135deg,rgba(124,58,237,0.2),rgba(168,85,247,0.1));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem}
    .article-info h3{font-size:0.95rem;font-weight:700;color:var(--white);margin-bottom:4px}
    .article-info p{font-size:0.82rem;color:var(--muted);margin:0;line-height:1.6}
    .article-info .meta{font-size:0.75rem;color:var(--accent2);margin-top:4px}

    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}
    .stat-card{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:20px;text-align:center}
    .stat-number{font-family:'Tajawal',sans-serif;font-size:1.8rem;font-weight:900;color:var(--white)}
    .stat-number span{color:var(--accent2)}
    .stat-label{font-size:0.82rem;color:var(--muted);margin-top:4px}

    .cta-section{text-align:center;padding:60px 24px;background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.06));border-top:1px solid rgba(124,58,237,0.15)}
    .cta-section h2{font-family:'Tajawal',sans-serif;font-size:1.5rem;font-weight:800;color:var(--white);margin-bottom:12px}
    .cta-section p{color:var(--muted);margin-bottom:24px}
    .btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;padding:14px 30px;border-radius:50px;text-decoration:none;font-weight:700;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 8px 30px rgba(124,58,237,0.35)}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(124,58,237,0.5)}
    .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--text);padding:14px 26px;border-radius:50px;text-decoration:none;font-weight:600;border:1px solid var(--border);transition:border-color 0.2s;margin-right:12px}
    .btn-outline:hover{border-color:var(--accent2);color:var(--accent2)}

    footer{background:var(--surface);border-top:1px solid var(--border);padding:48px 24px 24px}
    .footer-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:40px}
    .footer-brand p{color:var(--muted);font-size:0.88rem;margin-top:12px;max-width:280px;line-height:1.65}
    .footer-col h4{color:var(--white);font-size:0.92rem;font-weight:700;margin-bottom:16px}
    .footer-col ul{list-style:none}
    .footer-col ul li{margin-bottom:10px}
    .footer-col ul li a{color:var(--muted);text-decoration:none;font-size:0.85rem;transition:color 0.2s}
    .footer-col ul li a:hover{color:var(--accent2)}
    .footer-bottom{max-width:1100px;margin:0 auto;padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--muted)}

    @media(max-width:768px){.nav-links{display:none}.expertise-grid{grid-template-columns:repeat(2,1fr)}.stats-row{grid-template-columns:1fr}.article-card{flex-direction:column}.footer-grid{grid-template-columns:1fr;gap:28px}}
  </style>
</head>
<body>

<nav class="site-nav">
  <a href="https://saudivapes.com/ar" class="nav-logo">Saudi <span>Vape</span></a>
  <ul class="nav-links">
    <li><a href="https://saudivapes.com/ar">الرئيسية</a></li>
    <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
    <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة</a></li>
    <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات</a></li>
  </ul>
  <a href="https://saudivapes.com/ar" class="nav-cta">تسوق الآن</a>
</nav>

<header class="hero">
  <div class="avatar">س.ف</div>
  <h1>فريق سعودي فيب</h1>
  <p class="title">خبراء منتجات الفيب والشيشة الإلكترونية</p>
  <div class="badge"><span class="dot"></span> فريق معتمد — خبرة في السوق السعودي</div>
</header>

<section>
  <div class="container">

    <div class="bio-card">
      <h2>نبذة عن الفريق</h2>
      <p>فريق <strong>سعودي فيب</strong> هو مجموعة من الخبراء المتخصصين في مجال منتجات الفيب والشيشة الإلكترونية في المملكة العربية السعودية. يجمع الفريق بين الخبرة التقنية والمعرفة العملية بكل ما يتعلق بأجهزة الفيب، السحبات الجاهزة، النكهات، والملحقات.</p>
      <p>هدفنا الأساسي هو تقديم محتوى دقيق ومفيد يساعد المستهلك السعودي على اختيار المنتج الأنسب لاحتياجاته، مع التركيز على الأصالة والجودة والتجربة المضمونة. كل توصياتنا مبنية على اختبارات عملية ومعرفة معمقة بمنتجات التبغ البديلة ولوائح الهيئة العامة للغذاء والدواء.</p>
      <p>نعمل عن كثب مع الموزعين المعتمدين وأبرز العلامات التجارية العالمية في عالم الفيب لنضمن لعملائنا أحدث المنتجات وأكثرها جودة في السوق السعودي.</p>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-number"><span>+</span>١٠٠</div>
        <div class="stat-label">منتج تم اختباره وتقييمه</div>
      </div>
      <div class="stat-card">
        <div class="stat-number"><span>+</span>٥٠٠٠</div>
        <div class="stat-label">عميل خدمناهم في السعودية</div>
      </div>
      <div class="stat-card">
        <div class="stat-number"><span>+</span>٥</div>
        <div class="stat-label">سنوات خبرة في سوق الفيب</div>
      </div>
    </div>

    <h2 style="font-family:'Tajawal',sans-serif;font-size:1.3rem;font-weight:800;color:var(--white);margin-bottom:16px">مجالات الخبرة</h2>

    <div class="expertise-grid">
      <div class="expertise-item">
        <div class="icon">💨</div>
        <h4>السحبات الجاهزة</h4>
        <p>تقييم واختيار أفضل السحبات من حيث الأداء والنكهة وعدد النفثات</p>
      </div>
      <div class="expertise-item">
        <div class="icon">⚡</div>
        <h4>أجهزة البودات</h4>
        <p>خبرة في جميع أجهزة البودات القابلة لإعادة التعبئة ومقارنة الأداء</p>
      </div>
      <div class="expertise-item">
        <div class="icon">🍇</div>
        <h4>النكهات والسوائل</h4>
        <p>تقييم نكهات السولت والفري بيس ومطابقتها للأجهزة المناسبة</p>
      </div>
      <div class="expertise-item">
        <div class="icon">🌿</div>
        <h4>الشيشة الإلكترونية</h4>
        <p>خبرة في أجهزة الشيشة الإلكترونية بأنواعها المختلفة</p>
      </div>
      <div class="expertise-item">
        <div class="icon">🔧</div>
        <h4>الملحقات والكويلات</h4>
        <p>إرشاد حول الكويلات والبطاريات وقطع الغيار</p>
      </div>
      <div class="expertise-item">
        <div class="icon">📋</div>
        <h4>اللوائح والتنظيم</h4>
        <p>متابعة أنظمة هيئة الغذاء والدواء واشتراطات البيع في السعودية</p>
      </div>
    </div>

  </div>
</section>

<section class="articles-section">
  <div class="container">
    <h2>المقالات والأدلة</h2>
    <p class="sub">مواضيع وأدلة من إعداد فريق سعودي فيب لمساعدتك في اختيار المنتج الأنسب</p>

    <a class="article-card" href="https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9">
      <div class="article-icon">📋</div>
      <div class="article-info">
        <h3>هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026</h3>
        <p>دليلك الكامل لفهم قانونية الفيب والشيشة الإلكترونية في السعودية — التصاريح، الضوابط، والعقوبات.</p>
        <div class="meta">٢٦ أبريل ٢٠٢٦ · دليل قانوني</div>
      </div>
    </a>

    <a class="article-card" href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9">
      <div class="article-icon">💰</div>
      <div class="article-info">
        <h3>سعر فيب السعودية 2026 — دليل أسعار الفيب والشيشة الإلكترونية</h3>
        <p>دليل أسعار شامل للسحبات الجاهزة وأجهزة البودات والنكهات مع نصائح لاختيار المنتج المناسب لميزانيتك.</p>
        <div class="meta">٢٦ أبريل ٢٠٢٦ · دليل أسعار</div>
      </div>
    </a>

    <a class="article-card" href="https://saudivapes.com/ar/blog/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AD%D8%A8%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D9%85%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9/a-1903716375">
      <div class="article-icon">💨</div>
      <div class="article-info">
        <h3>أفضل سحبة جاهزة استخدام مرة واحدة في السعودية</h3>
        <p>دليل شامل لأفضل السحبات الجاهزة — مقارنة بين الماركات من حيث عدد النفثات والنكهات والسعر.</p>
        <div class="meta">دليل شامل</div>
      </div>
    </a>

    <a class="article-card" href="https://saudivapes.com/ar/blog/%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%B4%D9%8A%D8%B4%D8%A9-%D9%81%D9%8A%D8%A8/a-1874613695">
      <div class="article-icon">🆚</div>
      <div class="article-info">
        <h3>مقارنة بين أنواع الشيشة فيب</h3>
        <p>مقارنة تفصيلية بين أنواع أجهزة الشيشة الإلكترونية: أجهزة البود والمود والسحبات الجاهزة.</p>
        <div class="meta">مقارنة</div>
      </div>
    </a>

  </div>
</section>

<section class="cta-section">
  <h2>تحتاج استشارة أو مساعدة في الاختيار؟</h2>
  <p>فريقنا متاح على واتساب لمساعدتك في اختيار المنتج المناسب — رد خلال دقائق</p>
  <div>
    <a href="https://wa.me/966542906276" class="btn-primary">💬 تواصل مع الفريق</a>
    <a href="https://saudivapes.com/ar" class="btn-outline">🛒 تصفح المتجر</a>
  </div>
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
      <h4>الدعم</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/من-نحن">عن المتجر</a></li>
        <li><a href="https://wa.me/966542906276">تواصل معنا</a></li>
        <li><a href="https://saudivapes.com/ar/blog/author/1210468642">فريق الخبراء</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Saudi Vape</span>
    <span>الرياض، المملكة العربية السعودية</span>
  </div>
</footer>

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
