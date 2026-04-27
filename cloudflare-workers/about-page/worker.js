export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);
    const decodedPath = decodeURIComponent(url.pathname);

    const routes = [
      '/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86',
      '/%D9%85%D9%86-%D9%86%D8%AD%D9%86',
      '/ar/من-نحن',
      '/من-نحن',
      '/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86/page-1006707947',
      '/%D9%85%D9%86-%D9%86%D8%AD%D9%86/page-1006707947',
      '/ar/من-نحن/page-1006707947',
      '/من-نحن/page-1006707947'
    ];

    if (routes.includes(path) || path.startsWith('/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86') || path.startsWith('/ar/من-نحن')) {
      return new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta -->
  <title>من نحن | فيب السعودية — متجر فيب موثوق منذ 2021</title>
  <meta name="description" content="فيب السعودية (Saudi Vape) — متجر إلكتروني سعودي متخصص في بيع أجهزة الفيب والشيشة الإلكترونية والنكهات. تأسس 2021 في الرياض، نوفر 5,800+ منتج أصلي مع شحن لجميع مدن المملكة." />
  <link rel="canonical" href="https://saudivapes.com/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86/page-1006707947" />
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86/page-1006707947" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86/page-1006707947" />

  <!-- Open Graph -->
  <meta property="og:title" content="من نحن | فيب السعودية — متجر فيب موثوق منذ 2021" />
  <meta property="og:description" content="فيب السعودية — أول متجر إلكتروني سعودي للفيب والشيشة الإلكترونية. 5,800+ منتج أصلي، شحن لكل المملكة." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://saudivapes.com/ar/%D9%85%D9%86-%D9%86%D8%AD%D9%86" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" />
  <meta property="og:locale" content="ar_SA" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="من نحن | فيب السعودية" />
  <meta name="twitter:description" content="أول متجر سعودي للفيب والشيشة الإلكترونية — تأسس 2021" />

  <!-- JSON-LD Schema: AboutPage + Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "من نحن — فيب السعودية",
    "description": "نبذة عن متجر فيب السعودية الإلكتروني",
    "datePublished": "2026-04-26",
    "dateModified": "2026-04-26",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://saudivapes.com/#organization",
      "name": "فيب السعودية",
      "alternateName": "Saudi Vape",
      "url": "https://saudivapes.com",
      "logo": "https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png",
      "foundingDate": "2021",
      "foundingLocation": "الرياض، المملكة العربية السعودية",
      "description": "أكبر متجر إلكتروني للشيشة الإلكترونية والفيب في المملكة العربية السعودية",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressRegion": "منطقة الرياض",
        "addressCountry": "SA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966542906276",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://www.instagram.com/saudivapes/",
        "https://x.com/saudivapes"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 2,
        "maxValue": 10
      },
      "knowsAbout": ["منتجات الفيب", "شيشة إلكترونية", "نيكوتين سالت", "نكهات فيب", "أجهزة فيب"],
      "areaServed": {
        "@type": "Country",
        "name": "المملكة العربية السعودية"
      }
    }
  }
  </script>

  <!-- JSON-LD Schema: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://saudivapes.com/" },
      { "@type": "ListItem", "position": 2, "name": "من نحن", "item": "https://saudivapes.com/ar/من-نحن" }
    ]
  }
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" media="print" onload="this.media='all'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;800&display=swap" /></noscript>

  <style>
    :root {
      --bg: #0a0a0f;
      --surface: #13131c;
      --surface2: #1c1c2e;
      --border: #2a2a40;
      --accent: #7c3aed;
      --accent2: #a855f7;
      --gold: #f59e0b;
      --green: #10b981;
      --text: #e8e8f0;
      --muted: #8b8ba8;
      --white: #ffffff;
      --radius: 16px;
      --radius-sm: 8px;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Cairo', sans-serif;
      line-height: 1.8;
      font-size: 16px;
      direction: rtl;
    }

    .site-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(10,10,15,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      font-family: 'Tajawal', sans-serif;
      font-weight: 800;
      font-size: 1.3rem;
      color: var(--white);
      text-decoration: none;
    }
    .nav-logo span { color: var(--accent2); }
    .nav-links { display: flex; gap: 20px; list-style: none; }
    .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
    .nav-links a:hover { color: var(--white); }
    .nav-cta {
      background: var(--accent);
      color: white;
      padding: 8px 20px;
      border-radius: 50px;
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 700;
      transition: background 0.2s;
    }
    .nav-cta:hover { background: var(--accent2); }

    .page-header {
      text-align: center;
      padding: 80px 24px 40px;
      background:
        radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 60%);
    }
    .page-header h1 {
      font-family: 'Tajawal', sans-serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      color: var(--white);
      margin-bottom: 16px;
    }
    .page-header p {
      color: var(--muted);
      font-size: 1.05rem;
      max-width: 600px;
      margin: 0 auto;
    }

    section { padding: 60px 24px; }
    .container { max-width: 820px; margin: 0 auto; }

    .about-section { background: var(--bg); }
    .about-section h2 {
      font-family: 'Tajawal', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--white);
      margin: 40px 0 16px;
    }
    .about-section h2:first-of-type { margin-top: 0; }
    .about-section h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--accent2);
      margin: 28px 0 10px;
    }
    .about-section p {
      color: var(--muted);
      font-size: 0.97rem;
      margin-bottom: 16px;
      line-height: 1.9;
    }
    .about-section p strong { color: var(--text); }
    .about-section ul {
      list-style: none;
      margin: 0 0 16px;
      padding: 0;
    }
    .about-section ul li {
      color: var(--muted);
      font-size: 0.95rem;
      padding: 6px 20px 6px 0;
      position: relative;
    }
    .about-section ul li::before {
      content: '◆';
      position: absolute;
      right: 0;
      color: var(--accent2);
      font-size: 0.6rem;
      top: 10px;
    }

    .about-section table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      overflow: hidden;
    }
    .about-section table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--border);
      font-size: 0.9rem;
      color: var(--text);
    }
    .about-section table tr:last-child td { border-bottom: none; }
    .about-section table td:first-child {
      font-weight: 700;
      color: var(--white);
      white-space: nowrap;
      width: 140px;
      background: var(--surface2);
    }
    .about-section table td:last-child { color: var(--muted); }

    .team-list {
      display: grid;
      gap: 16px;
      margin: 20px 0;
    }
    .team-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 18px 20px;
    }
    .team-item strong {
      color: var(--white);
      display: block;
      margin-bottom: 4px;
    }
    .team-item span {
      color: var(--muted);
      font-size: 0.9rem;
    }

    .author-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 20px 24px;
      margin: 24px 0;
    }
    .author-box a {
      color: var(--accent2);
      text-decoration: none;
    }
    .author-box a:hover { text-decoration: underline; }

    .contact-section { background: var(--surface); }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-top: 24px;
    }
    .contact-card {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 20px;
      text-align: center;
      text-decoration: none;
      color: var(--text);
      transition: border-color 0.2s;
    }
    .contact-card:hover { border-color: var(--accent); }
    .contact-card .icon { font-size: 1.8rem; margin-bottom: 8px; }
    .contact-card .label { font-size: 0.78rem; color: var(--muted); margin-bottom: 4px; }
    .contact-card .value { font-weight: 700; color: var(--white); font-size: 0.95rem; }

    .bottom-cta {
      text-align: center;
      padding: 60px 24px;
      background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06));
      border-top: 1px solid rgba(124,58,237,0.15);
    }
    .bottom-cta h2 {
      font-family: 'Tajawal', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--white);
      margin-bottom: 12px;
    }
    .bottom-cta p { color: var(--muted); margin-bottom: 24px; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color: white;
      padding: 14px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 8px 30px rgba(124,58,237,0.35);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(124,58,237,0.5); }

    footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
      padding: 40px 24px 20px;
      text-align: center;
    }
    footer p { color: var(--muted); font-size: 0.82rem; }

    @media (max-width: 600px) {
      .nav-links { display: none; }
      .contact-grid { grid-template-columns: 1fr; }
      .about-section table td:first-child { width: 100px; font-size: 0.82rem; }
    }
  </style>
</head>
<body>

<!-- ═══ NAV ═══ -->
<nav class="site-nav" role="navigation" aria-label="القائمة الرئيسية">
  <a href="https://saudivapes.com/ar" class="nav-logo">Saudi <span>Vape</span></a>
  <ul class="nav-links">
    <li><a href="https://saudivapes.com/ar">الرئيسية</a></li>
    <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
    <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة</a></li>
    <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات</a></li>
  </ul>
  <a href="https://saudivapes.com/ar" class="nav-cta">تسوق الآن</a>
</nav>

<!-- ═══ HEADER ═══ -->
<header class="page-header">
  <h1>من نحن — فيب السعودية</h1>
  <p>أول متجر إلكتروني سعودي متخصص في بيع منتجات الفيب والشيشة الإلكترونية. تأسس 2021 في الرياض.</p>
</header>

<!-- ═══ ABOUT CONTENT ═══ -->
<section class="about-section">
  <div class="container">

    <p><strong>فيب السعودية (Saudi Vape)</strong> هو أول متجر إلكتروني سعودي متخصص في بيع منتجات الفيب والشيشة الإلكترونية في الرياض. نحن نقدم أكثر من 5,800 منتج من أشهر الماركات العالمية مثل فوبو (Voopoo)، جيك فيب (Geekvape)، فابوريسو (Vaporesso)، فايڤ قود (Fygood)، ناستي (Nasty)، وخلافه.</p>

    <h2>قصتنا</h2>
    <p>تأسس متجر فيب السعودية في عام <strong>2021</strong> في <strong>الرياض</strong>، انطلاقاً من شغف حقيقي بعالم الفيب ورغبة في توفير منتجات أصلية وعالية الجودة لعشاق الفيب في المملكة. بدأنا كفريق صغير متخصص يبحث عن حلول لتوفير منتجات فيب موثوقة بأسعار منافسة، وسرعان ما أصبحنا وجهة رئيسية لآلاف العملاء في جميع مدن المملكة.</p>

    <p>ما يميز قصتنا هو أننا <strong>لسنا مجرد موزعين</strong> — بل نختبر كل منتج نبيعة ونتأكد من جودته قبل أن يصل إليك. خبرتنا المباشرة مع المنتجات تجعلنا قادرين على تقديم نصائح دقيقة لعملائنا حول أفضل الأجهزة والنكهات المناسبة لاحتياجاتهم.</p>

    <h2>مهمتنا</h2>
    <p>تقديم تجربة شراء آمنة وموثوقة لمنتجات الفيب الأصلية في المملكة العربية السعودية، مع توعية المستخدمين حول الاستخدام الآمن والمسؤول للفيب كبديل للتدخين التقليدي.</p>

    <h2>لماذا فيب السعودية؟</h2>

    <h3>منتجات أصلية 100%</h3>
    <p>جميع المنتجات في متجرنا أصلية ومضمونة. نوفر كود تحقق مع كل منتج للتأكد من أصالته. نشتري مباشرة من الموزعين المعتمدين والعلامات التجارية الرسمية.</p>

    <h3>خبرة حقيقية</h3>
    <p>فريقنا يمتلك خبرة عملية مع جميع المنتجات التي نبيعها. نختبر الأجهزة ونتذوق النكهات قبل أن نعرضها للبيع. هذا يعني أن نصائحنا مبنية على تجربة حقيقية وليس مجرد معلومات من الكتالوج.</p>

    <h3>أكبر تشكيلة في السعودية</h3>
    <p>أكثر من 5,800 منتج من 30+ تصنيف مختلف — من أجهزة الشيشة الإلكترونية إلى السحبات الجاهزة، النكهات، البودات، الكويلات، والملحقات. نوفر أكثر من 200 نكهة مختلفة تناسب جميع الأذواق.</p>

    <h3>شحن سريع لجميع المملكة</h3>
    <ul>
      <li><strong>التوصيل السريع:</strong> 4-8 ساعات</li>
      <li><strong>باقي مدن السعودية:</strong> شحن خلال 24-72 ساعة</li>
      <li><strong>الشحن مجاني</strong> للطلبات فوق 500 ريال سعودي</li>
    </ul>

    <h3>خدمة عملاء على مدار الساعة</h3>
    <p>فريق الدعم الفني متاح 24 ساعة طوال أيام الأسبوع عبر واتساب <strong>+966542906276</strong> للإجابة على استفساراتك ومساعدتك في اختيار المنتج المناسب.</p>

    <h2>فريقنا</h2>
    <p>فريق فيب السعودية يتكون من مجموعة من الشباب السعودي المتحمس لعالم الفيب، يجمع بين الخبرة التقنية في الأجهزة والإلكترونية والمعرفة العميقة بمكونات النكهات وأنواع النيكوتين. كل عضو في فريقنا هو مستخدم فعلي للفيب ويفهم احتياجات عملائنا عن قرب.</p>

    <div class="team-list">
      <div class="team-item">
        <strong>أحمد — المؤسس والمدير التنفيذي</strong>
        <span>خبرة 6+ سنوات في سوق الفيب السعودي، مسؤول عن اختيار المنتجات وضمان الجودة.</span>
      </div>
      <div class="team-item">
        <strong>محمد — مدير خدمة العملاء</strong>
        <span>متاح يومياً للإجابة على استفسارات العملاء وتقديم توصيات مخصصة.</span>
      </div>
      <div class="team-item">
        <strong>فريق المشتريات</strong>
        <span>يتواصلون مباشرة مع الموزعين المعتمدين والعلامات التجارية العالمية لتوفير أحدث المنتجات.</span>
      </div>
      <div class="team-item">
        <strong>فريق التحرير</strong>
        <span>متخصصون في كتابة المحتوى التقني ومراجعات المنتجات باللغة العربية.</span>
      </div>
    </div>

    <p>نحرص على التدريب المستمر والتعرف على أحدث المنتجات والتقنيات في عالم الفيب لنقدم لعملائنا أفضل التوصيات المحدثة.</p>

    <h2>التزامنا بالجودة والأصالة</h2>
    <p>نحن ندرك أن الثقة هي أساس أي علاقة مع عملائنا. لذلك:</p>
    <ul>
      <li>جميع المنتجات أصلية مع كود تحقق يمكنك التأكد منه مباشرة</li>
      <li>نوفر ضمان على جميع الأجهزة ضد عيوب الصناعة</li>
      <li>سياسة إبدال واسترجاع مرنة خلال 7 أيام للمنتجات المختومة</li>
      <li>نوصللك المنتج في تغليف محكم لضمان وصوله بحالة ممتازة</li>
    </ul>

    <h2>معلومات المتجر</h2>
    <table>
      <tr><td><strong>المقر الرئيسي</strong></td><td>الرياض، المملكة العربية السعودية</td></tr>
      <tr><td><strong>سنة التأسيس</strong></td><td>2021</td></tr>
      <tr><td><strong>عدد المنتجات</strong></td><td>أكثر من 5,800 منتج</td></tr>
      <tr><td><strong>طرق الدفع</strong></td><td>مدى، Apple Pay، فيزا، ماستركارد، تمارا، تابي، الدفع عند الاستلام</td></tr>
      <tr><td><strong>الشحن</strong></td><td>جميع مدن المملكة العربية السعودية</td></tr>
      <tr><td><strong>الهاتف</strong></td><td>+966542906276</td></tr>
      <tr><td><strong>البريد الإلكتروني</strong></td><td>info@saudivapes.com</td></tr>
    </table>

    <div class="author-box">
      <strong style="color: var(--accent2);">✍️ عضو فريق التحرير</strong>
      <p style="margin: 8px 0 0;">محتوى هذا المتجر يُكتب ويُحرر بواسطة فريق التحرير في فيب السعودية، وهم متخصصون في منتجات الفيب والشيشة الإلكترونية بخبرة تمتد لسنوات في هذا المجال. يمكنك الاطلاع على ملف كاتب المحتوى <a href="https://saudivapes.com/ar/blog/author/1210468642">من هنا</a>.</p>
    </div>

  </div>
</section>

<!-- ═══ CONTACT ═══ -->
<section class="contact-section">
  <div class="container" style="text-align:center;">
    <h2 style="font-family: 'Tajawal', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white);">تواصل معنا</h2>
    <p style="color: var(--muted); margin-top: 8px;">نحن نحب التواصل مع عملائنا!</p>
    <div class="contact-grid">
      <a href="https://saudivapes.com" class="contact-card">
        <div class="icon">🌐</div>
        <div class="label">الموقع الإلكتروني</div>
        <div class="value">saudivapes.com</div>
      </a>
      <a href="https://wa.me/966542906276" class="contact-card">
        <div class="icon">💬</div>
        <div class="label">واتساب</div>
        <div class="value">+966542906276</div>
      </a>
      <a href="https://www.instagram.com/saudivapes/" class="contact-card">
        <div class="icon">📸</div>
        <div class="label">انستغرام</div>
        <div class="value">@saudivapes</div>
      </a>
      <a href="https://x.com/saudivapes" class="contact-card">
        <div class="icon">🐦</div>
        <div class="label">تويتر (X)</div>
        <div class="value">@saudivapes</div>
      </a>
    </div>
  </div>
</section>

<!-- ═══ BOTTOM CTA ═══ -->
<section class="bottom-cta">
  <h2>تصفح المتجر الآن</h2>
  <p>أكثر من 5,800 منتج أصلي — شحن لكل مدن المملكة</p>
  <a href="https://saudivapes.com/ar" class="btn-primary">🛒 تسوق الآن</a>
</section>

<!-- ═══ FOOTER ═══ -->
<footer>
  <p>© 2026 Saudi Vape — جميع الحقوق محفوظة</p>
  <p style="margin-top: 4px;">الرياض، المملكة العربية السعودية</p>
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

    return fetch(request);
  },
};
