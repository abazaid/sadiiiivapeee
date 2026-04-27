export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const arabicPath = '/ar/شحن-فيب-السعودية';
    const encodedPath = '/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9';

    if (path !== arabicPath && path !== arabicPath + '/' && path !== encodedPath && path !== encodedPath + '/') {
      return fetch(request);
    }

    return new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>شحن فيب السعودية 2026 — دليل الشحن والتوصيل لجميع المدن</title>
  <meta name="description" content="دليل شحن فيب السعودية: تعرف على مدة التوصيل، رسوم الشحن، وطرق الدفع. نوصل لجميع مدن المملكة — الرياض، جدة، الدمام، مكة، المدينة. شحن مجاني للطلبات فوق 500 ريال." />
  <meta name="keywords" content="شحن فيب السعودية, توصيل فيب السعودية, شحن منتجات الفيب, فيب توصيل منزل, متجر فيب السعودية, توصيل سحبات جاهزة, شحن الكتروني السعودية" />
  <link rel="canonical" href="https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <meta name="datePublished" content="2026-04-26T10:00:00+03:00" />
  <meta name="dateModified" content="2026-04-26T10:00:00+03:00" />

  <meta property="og:title" content="شحن فيب السعودية 2026 — دليل الشحن والتوصيل" />
  <meta property="og:description" content="أوقات التوصيل، رسوم الشحن، وطرق الدفع لكل مدن المملكة. شحن مجاني للطلبات فوق 500 ريال." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" />
  <meta property="og:locale" content="ar_SA" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="شحن فيب السعودية — دليل التوصيل" />
  <meta name="twitter:description" content="كل ما تريد معرفته عن شحن وتوصيل الفيب في السعودية" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type":"Question","name":"كم يستغرق شحن الفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"تختلف مدة شحن الفيب في السعودية حسب المدينة: الرياض — توصيل نفس اليوم خلال 3-5 ساعات. جدة، الدمام، مكة، المدينة — 24-48 ساعة. باقي مدن المملكة — 24-72 ساعة حسب المنطقة."}},
      {"@type":"Question","name":"كم رسوم شحن الفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"رسوم شحن الفيب في السعودية تبدأ من 25 ريال للطلبات العادية. الشحن مجاني للطلبات التي تتجاوز 500 ريال. توصيل الرياض مجاني أحياناً في العروض الخاصة."}},
      {"@type":"Question","name":"هل الشحن مجاني للفيب في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"نعم، الشحن مجاني لجميع مدن المملكة للطلبات التي تتجاوز قيمتها 500 ريال سعودي. للطلبات الأقل من 500 ريال، توجد رسوم شحن رمزية حسب المنطقة."}},
      {"@type":"Question","name":"هل يوصلون الفيب إلى المنزل في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"نعم، نوصل الفيب إلى باب منزلك في جميع مدن المملكة. داخل الرياض نوفر توصيل نفس اليوم خلال 3-5 ساعات مع خدمة الدفع عند الاستلام."}},
      {"@type":"Question","name":"ما هي طرق الدفع المتاحة عند شحن الفيب؟","acceptedAnswer":{"@type":"Answer","text":"طرق الدفع المتاحة: مدى (Mada) — للسعوديين والمقيمين. Apple Pay. بطاقات الائتمان (Visa, Mastercard). الدفع عند الاستلام (لطلبات الرياض). تقسيط عبر تمارا وتابي."}},
      {"@type":"Question","name":"هل يمكن تتبع شحنة الفيب؟","acceptedAnswer":{"@type":"Answer","text":"نعم، بعد تأكيد الشحن ترسل لك رسالة واتساب وإيميل برابط تتبع مباشر. يمكنك متابعة حالتها في أي وقت من خلال لوحة الطلبات في موقعنا."}},
      {"@type":"Question","name":"كيف يتم تغليف منتجات الفيب للشحن؟","acceptedAnswer":{"@type":"Answer","text":"تغلف جميع منتجات الفيب بعناية في صناديق كرتون متينة مع مواد حماية داخلية. التغليف محكم ولا يظهر محتوى الطرد من الخارج لضمان الخصوصية."}},
      {"@type":"Question","name":"هل يشحن الفيب لجميع مدن السعودية؟","acceptedAnswer":{"@type":"Answer","text":"نعم، نشحن الفيب لجميع مدن المملكة العربية السعودية: الرياض، جدة، الدمام، الخبر، مكة المكرمة، المدينة المنورة، أبها، تبوك، بريدة، حائل، نجران، جازان، والقصيم."}}
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://saudivapes.com/" },
      { "@type": "ListItem", "position": 2, "name": "شحن فيب السعودية", "item": "https://saudivapes.com/ar/%D8%B4%D8%AD%D9%86-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" }
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
    body{background:var(--bg);color:var(--text);font-family:'Cairo',sans-serif;line-height:1.8;font-size:16px}
    .site-nav{position:sticky;top:0;z-index:100;background:rgba(10,10,15,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:14px 24px;display:flex;align-items:center;justify-content:space-between}
    .nav-logo{font-family:'Tajawal',sans-serif;font-weight:800;font-size:1.3rem;color:var(--white);text-decoration:none}
    .nav-logo span{color:var(--accent2)}
    .nav-links{display:flex;gap:20px;list-style:none}
    .nav-links a{color:var(--muted);text-decoration:none;font-size:0.9rem;transition:color 0.2s}
    .nav-links a:hover{color:var(--white)}
    .nav-cta{background:var(--accent);color:#fff;padding:8px 20px;border-radius:50px;text-decoration:none;font-size:0.88rem;font-weight:700;transition:background 0.2s}
    .nav-cta:hover{background:var(--accent2)}

    .hero{text-align:center;padding:80px 24px 40px;background:radial-gradient(ellipse 60% 50% at 50% 30%,rgba(124,58,237,0.12) 0%,transparent 60%)}
    .hero-icon{font-size:3rem;margin-bottom:12px}
    .hero h1{font-family:'Tajawal',sans-serif;font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:900;color:var(--white);margin-bottom:12px}
    .hero .subtitle{color:var(--muted);font-size:1rem;max-width:600px;margin:0 auto 16px}
    .hero .badge{display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);color:var(--green);padding:6px 16px;border-radius:50px;font-size:0.82rem;font-weight:600}
    .hero .badge .dot{width:6px;height:6px;background:var(--green);border-radius:50%}
    .hero .meta{margin-top:16px;color:var(--muted);font-size:0.85rem}
    .hero .meta a{color:var(--accent2);text-decoration:none}

    section{padding:60px 24px}
    .container{max-width:860px;margin:0 auto}

    .content-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:36px;margin-bottom:24px}
    .content-card h2{font-family:'Tajawal',sans-serif;font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:16px;display:flex;align-items:center;gap:10px}
    .content-card h3{font-family:'Tajawal',sans-serif;font-size:1.1rem;font-weight:700;color:var(--white);margin:20px 0 10px}
    .content-card p{color:var(--muted);font-size:0.95rem;line-height:1.9;margin-bottom:14px}
    .content-card ul, .content-card ol{color:var(--muted);padding-right:20px;margin-bottom:14px;line-height:2}
    .content-card li{margin-bottom:6px}
    .content-card li strong{color:var(--text)}

    .info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}
    .info-item{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:22px 16px;text-align:center}
    .info-item .num{font-family:'Tajawal',sans-serif;font-size:1.6rem;font-weight:900;color:var(--accent2)}
    .info-item .label{font-size:0.85rem;color:var(--muted);margin-top:4px}

    .city-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
    .city-item{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px 12px;text-align:center;font-size:0.9rem;color:var(--text);font-weight:600}
    .city-item .time{font-size:0.78rem;color:var(--green);font-weight:400;display:block;margin-top:2px}

    .highlight-box{background:linear-gradient(135deg,rgba(124,58,237,0.1),rgba(168,85,247,0.05));border:1px solid rgba(124,58,237,0.25);border-radius:var(--radius-sm);padding:20px;margin:20px 0}
    .highlight-box p{color:var(--text);font-size:0.95rem;margin:0}

    .payment-flex{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0}
    .payment-chip{background:var(--surface2);border:1px solid var(--border);border-radius:50px;padding:8px 18px;font-size:0.85rem;color:var(--text);font-weight:600}

    .steps{list-style:none;padding:0}
    .steps li{padding:16px 20px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:10px;display:flex;align-items:center;gap:14px}
    .step-num{width:32px;height:32px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.85rem;flex-shrink:0}

    .faq-list{list-style:none;padding:0}
    .faq-item{border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:10px;overflow:hidden}
    .faq-question{width:100%;padding:16px 20px;background:var(--surface2);border:none;color:var(--text);font-family:'Cairo',sans-serif;font-size:0.95rem;font-weight:700;cursor:pointer;display:flex;justify-content:space-between;align-items:center;text-align:right;transition:background 0.2s}
    .faq-question:hover{background:rgba(124,58,237,0.1)}
    .faq-icon{font-size:1.2rem;color:var(--accent2);transition:transform 0.3s;flex-shrink:0;margin-right:12px}
    .faq-question[aria-expanded="true"] .faq-icon{transform:rotate(45deg)}
    .faq-answer{padding:0 20px;max-height:0;overflow:hidden;transition:max-height 0.3s,padding 0.3s;color:var(--muted);font-size:0.9rem;line-height:1.8}
    .faq-item.active .faq-answer{max-height:300px;padding:16px 20px}

    .cta-section{text-align:center;padding:60px 24px;background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.06));border-top:1px solid rgba(124,58,237,0.15)}
    .cta-section h2{font-family:'Tajawal',sans-serif;font-size:1.5rem;font-weight:800;color:var(--white);margin-bottom:12px}
    .cta-section p{color:var(--muted);margin-bottom:24px}
    .btn-primary{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;padding:14px 30px;border-radius:50px;text-decoration:none;font-weight:700;transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 8px 30px rgba(124,58,237,0.35)}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(124,58,237,0.5)}
    .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--text);padding:14px 26px;border-radius:50px;text-decoration:none;font-weight:600;border:1px solid var(--border);transition:border-color 0.2s;margin-right:12px}
    .btn-outline:hover{border-color:var(--accent2);color:var(--accent2)}

    .compare-table{width:100%;border-collapse:collapse;margin:20px 0;font-size:0.9rem}
    .compare-table th{background:var(--surface2);color:var(--text);padding:12px 14px;text-align:center;font-weight:700;border:1px solid var(--border)}
    .compare-table td{padding:10px 14px;text-align:center;border:1px solid var(--border);color:var(--muted)}
    .compare-table tr:nth-child(even) td{background:rgba(255,255,255,0.02)}
    .compare-table .highlight{color:var(--green);font-weight:700}

    footer{background:var(--surface);border-top:1px solid var(--border);padding:48px 24px 24px}
    .footer-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px;margin-bottom:40px}
    .footer-brand p{color:var(--muted);font-size:0.88rem;margin-top:12px;max-width:280px;line-height:1.65}
    .footer-col h4{color:var(--white);font-size:0.92rem;font-weight:700;margin-bottom:16px}
    .footer-col ul{list-style:none}
    .footer-col ul li{margin-bottom:10px}
    .footer-col ul li a{color:var(--muted);text-decoration:none;font-size:0.85rem;transition:color 0.2s}
    .footer-col ul li a:hover{color:var(--accent2)}
    .footer-bottom{max-width:1100px;margin:0 auto;padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--muted)}

    @media(max-width:768px){.nav-links{display:none}.info-grid{grid-template-columns:1fr}.city-grid{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:1fr;gap:28px}.compare-table{font-size:0.78rem}.content-card{padding:24px}}
  </style>
</head>
<body>

<nav class="site-nav">
  <a href="https://saudivapes.com/ar" class="nav-logo">Saudi <span>Vape</span></a>
  <ul class="nav-links">
    <li><a href="https://saudivapes.com/ar">الرئيسية</a></li>
    <li><a href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9">دليل الأسعار</a></li>
    <li><a href="https://saudivapes.com/ar/%D8%B3%D8%AD%D8%A8%D8%A7%D8%AA-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D9%85%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9/c2053520858">سحبات</a></li>
    <li><a href="https://saudivapes.com/ar/%D9%86%D9%83%D9%87%D8%A7%D8%AA-%D9%81%D9%8A%D8%A8-%D8%B4%D9%8A%D8%B4%D8%A9/c681123545">نكهات</a></li>
  </ul>
  <a href="https://saudivapes.com/ar" class="nav-cta">تسوق الآن</a>
</nav>

<header class="hero">
  <div class="hero-icon">🚚</div>
  <h1>شحن فيب السعودية 2026 — دليل التوصيل والشحن الكامل</h1>
  <p class="subtitle">كل ما تحتاج معرفته عن شحن فيب السعودية: مدة التوصيل، رسوم الشحن، طرق الدفع، والمدن المشمولة. نوصل لجميع مدن المملكة.</p>
  <div class="badge"><span class="dot"></span> شحن سريع وآمن — تغليف محكم وخصوصية تامة</div>
  <p class="meta" style="margin-top:16px;color:var(--muted);font-size:0.85rem">📅 آخر تحديث: 26 أبريل 2026 · ✍️ <a href="https://saudivapes.com/ar/blog/author/1210468642" style="color:var(--accent2);text-decoration:none">فريق سعودي فيب</a></p>
</header>

<section>
  <div class="container">

    <div class="info-grid">
      <div class="info-item">
        <div class="num">3-5</div>
        <div class="label">ساعات توصيل الرياض</div>
      </div>
      <div class="info-item">
        <div class="num">24-72</div>
        <div class="label">ساعة شحن للمدن</div>
      </div>
      <div class="info-item">
        <div class="num">500</div>
        <div class="label">ريال حد الطلب المجاني</div>
      </div>
    </div>

    <div class="content-card">
      <h2>كيف يعمل شحن الفيب في السعودية؟</h2>
      <p>شحن منتجات الفيب في السعودية يتم عبر شركات شحن موثوقة ومتخصصة. نوفر <strong>شحن فيب السعودية</strong> لجميع المناطق الإدارية الثلاث عشرة. عملية الشحن بسيطة: تختار المنتجات من متجرنا، تحدد عنوان التوصيل، نجهز الطلب ونغلفه بعناية، ثم نشحنه خلال 24 ساعة من تأكيد الطلب.</p>
      <p>في <strong>سعودي فيب</strong> نحرص على أن تكون تجربة الشراء مريحة وآمنة. جميع منتجات الفيب تغلف بصناديق خاصة مع مواد حماية، ولا يظهر من الخارج محتوى الطرد. الشحن يتم بالتعاون مع سمسا إكسبرس وفيدكس وشركات الشحن المحلية.</p>

      <div class="highlight-box">
        <p>🚀 <strong>توصيل نفس اليوم في الرياض:</strong> الطلبات قبل الساعة 4 عصراً تصل خلال 3-5 ساعات. متاح الدفع عند الاستلام.</p>
      </div>

      <h3>خطوات الشحن</h3>
      <ol class="steps">
        <li><span class="step-num">١</span> تقدم بطلبك عبر الموقع — اختر المنتجات وأضفها للسلة</li>
        <li><span class="step-num">٢</span> أدخل عنوان التوصيل — حدد مدينتك وحيّك بالتفصيل</li>
        <li><span class="step-num">٣</span> اختر طريقة الدفع — مدى، Apple Pay، تقسيط، أو عند الاستلام</li>
        <li><span class="step-num">٤</span> نجهز الطلب ويغلف خلال 2-4 ساعات</li>
        <li><span class="step-num">٥</span> تشحن الشحنة وتصلك رسالة تأكيد مع رابط تتبع</li>
        <li><span class="step-num">٦</span> تستلم طلبك — نضمن وصول المنتجات بحالة ممتازة</li>
      </ol>
    </div>

    <div class="content-card">
      <h2>مدة التوصيل حسب المنطقة</h2>
      <p>مدة <strong>شحن فيب السعودية</strong> تختلف حسب قرب أو بعد مدينتك من مركز الشحن في الرياض. نحرص على أن يكون التوصيل في أسرع وقت ممكن:</p>

      <table class="compare-table">
        <thead>
          <tr><th>المنطقة</th><th>المدة التقريبية</th><th>نوع التوصيل</th></tr>
        </thead>
        <tbody>
          <tr><td>الرياض</td><td class="highlight">3-5 ساعات</td><td>توصيل داخلي</td></tr>
          <tr><td>جدة</td><td class="highlight">24-48 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>الدمام / الخبر</td><td class="highlight">24-48 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>مكة المكرمة</td><td>24-48 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>المدينة المنورة</td><td>24-48 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>بريدة / القصيم</td><td>24-48 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>أبها</td><td>24-72 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>تبوك</td><td>24-72 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>حائل</td><td>24-72 ساعة</td><td>شحن سريع</td></tr>
          <tr><td>نجران / جازان</td><td>48-72 ساعة</td><td>شحن سريع</td></tr>
        </tbody>
      </table>
    </div>

    <div class="content-card">
      <h2>رسوم الشحن في السعودية</h2>
      <p>رسوم <strong>شحن فيب السعودية</strong> شفافة ولا توجد رسوم خفية:</p>
      <ul>
        <li><strong>شحن مجاني</strong> — للطلبات التي تتجاوز ٥٠٠ ريال سعودي لجميع مدن المملكة</li>
        <li><strong>الشحن العادي</strong> — يبدأ من ٢٥ ريال للطلبات الأقل من ٥٠٠ ريال</li>
        <li><strong>توصيل الرياض</strong> — مجاني أحياناً في العروض الخاصة والتخفيضات الموسمية</li>
        <li><strong>الاستلام المباشر</strong> — متاح عند التنسيق مع فريق الدعم عبر واتساب</li>
      </ul>

      <div class="highlight-box">
        <p>💡 نصيحة: اجمع طلبك ليصل إلى 500 ريال واستفد من الشحن المجاني. تصفح <a href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" style="color:var(--accent2)">دليل أسعار الفيب</a> لتخطط لمشترياتك.</p>
      </div>
    </div>

    <div class="content-card">
      <h2>طرق الدفع المتاحة</h2>
      <p>ندعم مجموعة متنوعة من طرق الدفع لتغطي جميع شرائح العملاء في السعودية:</p>

      <div class="payment-flex">
        <span class="payment-chip">مدى (Mada)</span>
        <span class="payment-chip">Apple Pay</span>
        <span class="payment-chip">Visa</span>
        <span class="payment-chip">Mastercard</span>
        <span class="payment-chip">الدفع عند الاستلام</span>
        <span class="payment-chip">تمارا (تقسيط)</span>
        <span class="payment-chip">تابي (تقسيط)</span>
      </div>

      <p><strong>ملاحظات مهمة:</strong></p>
      <ul>
        <li>الدفع عند الاستلام متاح فقط لطلبات توصيل الرياض حاليًا</li>
        <li>خارج الرياض، الدفع يتم عبر مدى، Apple Pay، أو بطاقات الائتمان</li>
        <li>التقسيط عبر تمارا وتابي متاح للجميع — ادفع على 3 أو 4 دفعات بدون فوائد</li>
        <li>جميع المعاملات مشفرة وآمنة بالكامل</li>
      </ul>
    </div>

    <div class="content-card">
      <h2>المدن التي نغطيها بالتوصيل</h2>
      <p>خدمة <strong>شحن فيب السعودية</strong> تغطي جميع مدن المملكة العربية السعودية. سواء كنت في الرياض، جدة، الدمام، أو أي مدينة أخرى — نوصل طلبك حتى باب منزلك.</p>

      <div class="city-grid">
        <div class="city-item">الرياض <span class="time">توصيل 3-5 ساعات</span></div>
        <div class="city-item">جدة <span class="time">24-48 ساعة</span></div>
        <div class="city-item">الدمام <span class="time">24-48 ساعة</span></div>
        <div class="city-item">الخبر <span class="time">24-48 ساعة</span></div>
        <div class="city-item">مكة المكرمة <span class="time">24-48 ساعة</span></div>
        <div class="city-item">المدينة المنورة <span class="time">24-48 ساعة</span></div>
        <div class="city-item">أبها <span class="time">24-72 ساعة</span></div>
        <div class="city-item">تبوك <span class="time">24-72 ساعة</span></div>
        <div class="city-item">بريدة <span class="time">24-48 ساعة</span></div>
        <div class="city-item">حائل <span class="time">24-72 ساعة</span></div>
        <div class="city-item">نجران <span class="time">48-72 ساعة</span></div>
        <div class="city-item">جازان <span class="time">48-72 ساعة</span></div>
      </div>
      <p style="margin-top:16px;font-size:0.85rem;color:var(--muted)">لا تظهر مدينتك؟ تواصل معنا عبر واتساب ونتأكد من توصيل طلبك.</p>
    </div>

    <div class="content-card">
      <h2>التغليف والخصوصية</h2>
      <p>نولي خصوصية عملائنا اهتماماً كبيراً. جميع طلبات <strong>شحن الفيب في السعودية</strong> تغلف بصناديق كرتون متينة لا تظهر محتواها من الخارج. نستخدم مواد حماية داخلية لضمان وصول المنتجات بحالة ممتازة.</p>
      <ul>
        <li>تغليف محكم — لا يظهر اسم المتجر أو المنتجات على الصندوق الخارجي</li>
        <li>حماية ضد الصدمات — فقاعات هوائية ومواد توسيد داخلية</li>
        <li>مناسب للشحن — جميع المنتجات تغلف حسب معايير شركات الشحن</li>
        <li>فحص الجودة — نفحص كل منتج قبل التغليف والشحن</li>
      </ul>
    </div>

    <div class="content-card">
      <h2>كيفية تتبع طلبك</h2>
      <p>بعد شحن طلبك، يصلك إشعار عبر واتساب وإيميل يحتوي على:</p>
      <ul>
        <li>رقم الشحنة — تستخدمه لتتبع الطلب في موقع شركة الشحن</li>
        <li>رابط تتبع مباشر — يوصلك لصفحة تتبع الشحنة المحدثة</li>
        <li>الوقت المتوقع للتسليم — بناءً على مدينتك وشركة الشحن</li>
      </ul>
      <p>يمكنك أيضاً متابعة حالة طلبك من خلال لوحة الطلبات في موقع سعودي فيب، أو التواصل مع فريق الدعم عبر واتساب للاستفسار عن أي طلب.</p>
    </div>

    <div class="content-card">
      <h2>الأسئلة الشائعة عن شحن فيب السعودية</h2>

      <ul class="faq-list">
        <li class="faq-item active">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="true">
            كم يستغرق شحن الفيب في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            تختلف المدة حسب مدينتك: الرياض — 3-5 ساعات (توصيل نفس اليوم). جدة، الدمام، مكة، المدينة — 24-48 ساعة. باقي مدن المملكة مثل أبها وتبوك وحائل — 24-72 ساعة. الطلبات تستغرق أقصى تقدير 72 ساعة للوصول لأي مدينة في السعودية.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            كم رسوم شحن الفيب؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            رسوم الشحن تبدأ من 25 ريال للطلبات العادية. الشحن مجاني تماماً للطلبات التي تتجاوز 500 ريال سعودي لجميع مدن المملكة. لا توجد رسوم مخفية أو إضافات — ما تراه في السلة هو ما تدفعه.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل الشحن مجاني للفيب في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            نعم، نوفر شحن مجاني لجميع مدن المملكة للطلبات التي تتجاوز 500 ريال سعودي. هذه الخدمة متاحة لجميع المنتجات: السحبات الجاهزة، أجهزة البودات، النكهات، والشيشة الإلكترونية. للطلبات الأقل، رسوم الشحن رمزية وتبدأ من 25 ريال.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل يوصلون الفيب إلى المنزل؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            نوصّل جميع طلبات الفيب إلى باب منزلك في أي مدينة سعودية. داخل الرياض الخدمة أسرع — نوفر توصيلاً خلال 3-5 ساعات من تأكيد الطلب مع خيار الدفع عند الاستلام. لباقي المدن، يستلمها مندوب الشحن ويوصلها لعنوانك.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            ما هي طرق الدفع المتاحة عند شحن الفيب؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            ندعم ٧ طرق دفع: مدى (للسعوديين والمقيمين)، Apple Pay، فيزا، ماستركارد، الدفع عند الاستلام (الرياض)، تقسيط تمارا، وتقسيط تابي. جميع المعاملات مشفرة وآمنة بالكامل ولا نشارك بيانات الدفع مع أي طرف ثالث.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل يمكن تتبع شحنة الفيب؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            نعم، فور شحن طلبك ترسل لك رسالة واتساب وإيميل تحتوي على رقم الشحنة ورابط التتبع المباشر. من خلال الرابط تقدر تشوف حالة الشحنة في أي وقت — من التجهيز إلى التوصيل. أيضاً تقدر تتواصل مع فريق الدعم للاستفسار.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            كيف يتم تغليف منتجات الفيب للشحن؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            التغليف يتم بعناية فائقة: كل منتج يلف بمواد حماية (فقاعات هوائية ورغوة حماية)، ثم يوضع في صندوق كرتون متين. الصندوق الخارجي لا يظهر محتواه — لا اسم المتجر ولا نوع المنتجات. نحرص على أن يصل طلبك بحالة ممتازة وكأنه刚从 المتجر.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل يشحن الفيب لجميع مدن السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            نغطي جميع مدن المملكة العربية السعودية: الرياض، جدة، الدمام، الخبر، مكة المكرمة، المدينة المنورة، أبها، تبوك، بريدة، حائل، نجران، جازان، والقصيم. حتى لو كنت في مدينة صغيرة أو ضاحية — تواصل معنا ونتأكد من إمكانية الشحن.
          </div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            كم أقل مدة لشحن الفيب خارج الرياض؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            أقل مدة لشحن الفيب خارج الرياض هي 24 ساعة وتشمل المدن الرئيسية: جدة، الدمام، الخبر، مكة، المدينة، بريدة. باقي المدن تستغرق 48-72 ساعة حسب بعدها وخدمات الشحن المتاحة. كل الطلبات تشحن خلال 24 ساعة من تأكيد الطلب.
          </div>
        </li>
      </ul>
    </div>

  </div>
</section>

<div class="container" style="padding:0 24px">
    <div class="content-card" style="background:var(--surface2);padding:24px">
      <p style="margin:0;font-size:0.95rem;color:var(--muted)"><strong style="color:var(--accent2)">✍️ فريق التحرير</strong> — هذا الدليل من إعداد فريق التحرير في <strong>فيب السعودية</strong>، وهم متخصصون في منتجات الفيب والشيشة الإلكترونية بخبرة تمتد لسنوات في السوق السعودي. المحتوى مستند إلى سياسات الشحن الفعلية للمتجر وتجارب العملاء. يمكنك الاطلاع على <a href="https://saudivapes.com/ar/blog/author/1210468642" style="color:var(--accent2)">ملف فريق الخبراء</a> لمزيد من المعلومات.</p>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2>جهّز طلبك الآن واستفد من الشحن المجاني</h2>
  <p>اطلب الآن واصد المنتجات الأصلية لأي مكان في السعودية — شحن مجاني للطلبات فوق 500 ريال</p>
  <div>
    <a href="https://saudivapes.com/ar" class="btn-primary">تسوق الآن</a>
    <a href="https://saudivapes.com/ar/%D8%B3%D8%B9%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" class="btn-outline">دليل الأسعار</a>
  </div>
</section>

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="https://saudivapes.com/ar" class="nav-logo" style="font-size:1.5rem">Saudi <span>Vape</span></a>
      <p>متجر إلكتروني سعودي للفيب والشيشة الإلكترونية والنكهات الأصلية — تأسس 2021 في الرياض. نوصل لجميع مدن المملكة.</p>
    </div>
    <div class="footer-col">
      <h4>المنتجات</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/%D8%B3%D8%AD%D8%A8%D8%A7%D8%AA-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D9%85%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9/c2053520858">سحبات جاهزة</a></li>
        <li><a href="https://saudivapes.com/ar/%D8%A8%D9%88%D8%AF%D8%A7%D8%AA-pods/c640187172">أجهزة بودات</a></li>
        <li><a href="https://saudivapes.com/ar/%D9%86%D9%83%D9%87%D8%A7%D8%AA-%D9%81%D9%8A%D8%A8-%D8%B4%D9%8A%D8%B4%D8%A9/c681123545">نكهات فيب</a></li>
        <li><a href="https://saudivapes.com/ar/%D8%B9%D8%B1%D9%88%D8%B6-%D8%AA%D8%B5%D9%81%D9%8A%D8%A9/c390558684">عروض وتخفيضات</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>الدعم</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86">عن المتجر</a></li>
        <li><a href="https://wa.me/966542906276">تواصل معنا</a></li>
        <li><a href="https://saudivapes.com/ar/redirect/pages/166609908">سياسة الشحن</a></li>
        <li><a href="https://saudivapes.com/ar/blog/author/1210468642">فريق الخبراء</a></li>
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
  const item = btn.parentElement;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  item.classList.toggle('active');
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
