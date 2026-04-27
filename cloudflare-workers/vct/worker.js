export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/vct" || path.startsWith("/vct/")) {
      const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>نكهة VCT الأصلية في السعودية | فيب السعودية Saudi Vape</title>
  <meta name="description" content="تسوّق نكهة VCT الأصلية من Ripe Vapes داخل السعودية. خيارات متعددة من VCT سولت وفري بيس مع شحن سريع وروابط مباشرة للمنتجات الأصلية." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://saudivapes.com/vct" />
  <meta property="og:type" content="product" />
  <meta property="og:title" content="نكهة VCT الأصلية في السعودية" />
  <meta property="og:description" content="دليل سريع لاختيار VCT المناسب + روابط شراء مباشرة من Saudi Vape." />
  <meta property="og:url" content="https://saudivapes.com/vct" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/b0fd2f45-16db-43f6-bffb-69a77d89828a-1000x1000-n7NzTBIl5mdQqrW8UmlciZjzFUOZVgQiOV9jU853.jpg" />
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      line-height: 1.8;
      color: #111827;
      background: #f8fafc;
    }
    .wrap { max-width: 1080px; margin: 0 auto; padding: 24px 16px 48px; }
    .hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #fff;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 20px;
    }
    .hero h1 { margin: 0 0 8px; font-size: clamp(26px, 4vw, 38px); }
    .hero p { margin: 0; color: #cbd5e1; }
    .quick {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 20px;
    }
    .quick ul { margin: 0; padding-inline-start: 18px; }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }
    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      background: #f1f5f9;
    }
    .card .body { padding: 12px; }
    .card h2 { font-size: 16px; margin: 0 0 8px; }
    .btn {
      display: inline-block;
      background: #0ea5e9;
      color: #fff;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 10px;
      font-weight: 700;
    }
    .section {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .section h2 { margin-top: 0; font-size: 20px; }
    .faq h3 { margin-bottom: 6px; font-size: 18px; }
    .links a { color: #0369a1; text-decoration: none; font-weight: 700; }
    .links a:hover { text-decoration: underline; }
  </style>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "نكهة VCT الأصلية في السعودية",
    "url": "https://saudivapes.com/vct",
    "description": "صفحة هبوط لمنتجات نكهة VCT الأصلية من متجر Saudi Vape"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي نكهة VCT؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCT اختصار لمزيج Vanilla Custard Tobacco. تجمع بين التوباكو الناعم مع الكسترد والفانيلا بطابع متوازن للاستخدام اليومي."
        }
      },
      {
        "@type": "Question",
        "name": "ما الفرق بين VCT سولت وVCT فري بيس؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VCT سولت مناسب غالبًا لأجهزة السحبة والبودات بتركيز نيكوتين أعلى. VCT فري بيس مناسب أكثر لأجهزة الشيشة الإلكترونية مع بخار أكبر."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أختار منتج VCT المناسب لي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "إذا تستخدم بود أو جهاز صغير اختر نسخة السولت. إذا تستخدم جهاز فيب أكبر وتفضّل سحب واسع اختر نسخة الفري بيس 120 مل."
        }
      },
      {
        "@type": "Question",
        "name": "هل منتجات VCT في هذه الصفحة أصلية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، الروابط في الصفحة تحول مباشرة إلى صفحات المنتجات داخل متجر Saudi Vape مع صور المنتج الأصلية وتفاصيله."
        }
      }
    ]
  }
  </script>
</head>
<body>
  <main class="wrap">
    <section class="hero">
      <h1>نكهة VCT الأصلية في السعودية</h1>
      <p>صفحة مركزة لمنتجات VCT الأكثر طلبًا مع روابط مباشرة للشراء من متجر Saudi Vape.</p>
    </section>

    <section class="quick">
      <ul>
        <li>التركيز الأساسي: توباكو + فانيلا + كسترد.</li>
        <li>متوفر بنسخ سولت وفري بيس حسب جهازك.</li>
        <li>روابط الشراء في هذه الصفحة مباشرة من متجرنا.</li>
        <li>مناسب للمستخدم الذي يريد طعم توباكو ناعم بدون حدّة عالية.</li>
      </ul>
    </section>

    <section class="cards" aria-label="منتجات VCT">
      <article class="card">
        <img loading="lazy" src="https://cdn.salla.sa/jbXEY/b0fd2f45-16db-43f6-bffb-69a77d89828a-1000x1000-n7NzTBIl5mdQqrW8UmlciZjzFUOZVgQiOV9jU853.jpg" alt="VCT 120ml Ripe Vapes" />
        <div class="body">
          <h2>VCT فانيلا كسترد توباكو 120 مل</h2>
          <a class="btn" href="https://saudivapes.com/ar/نكهة-في-سي-تي-فانيلا-كسترد-توباكو-120-مل-ripe-vapes-vct/p1470083208">عرض المنتج</a>
        </div>
      </article>
      <article class="card">
        <img loading="lazy" src="https://cdn.salla.sa/jbXEY/f12ef23c-6a60-486a-8654-5a0fafcfb31a-1000x1000-VFfhcQTQlkrVCzWGJckVdXQkF3yveKtasI0BikVK.png" alt="Ripe Vapes VCT Vanilla Custard Tobacco" />
        <div class="body">
          <h2>VCT توباكو فانيلا - Ripe Vapes</h2>
          <a class="btn" href="https://saudivapes.com/ar/نكهة-فيب-توباكو-فانيلا-في-سي-تي-ripe-vapes-vct-vanilla-custard-tobacco/p58530527">عرض المنتج</a>
        </div>
      </article>
      <article class="card">
        <img loading="lazy" src="https://cdn.salla.sa/jbXEY/65729a2a-b433-4fa5-bd1c-0b6f278d5923-1000x1000-hnDdwNJSYCjAcOCD5cuYR3KFKIJpEeuORhpvK7pK.png" alt="VCT من Ripe Vapes" />
        <div class="body">
          <h2>نكهة VCT من Ripe Vapes</h2>
          <a class="btn" href="https://saudivapes.com/ar/نكهة-vct-في-سي-تي-من-ripe-vapes-أفضل-نكهة-فانيلا-وتوباكو/p470234006">عرض المنتج</a>
        </div>
      </article>
      <article class="card">
        <img loading="lazy" src="https://cdn.salla.sa/jbXEY/60ca5e2d-18cf-4ebb-bc68-a4b4f67583f2-1000x1000-T58ZfTz20HxJSyGueTddJYVU6GPvLr2sxKfmX5gX.jpg" alt="سحبة VCT جاهزة 3000" />
        <div class="body">
          <h2>سحبة VCT جاهزة 3000 موشة</h2>
          <a class="btn" href="https://saudivapes.com/ar/سحبة-جاهزة-في-سي-تي-فانيلا-كسترد-توباكو-3000-موشة-vct-disposable-3000-puffs/p889682679">عرض المنتج</a>
        </div>
      </article>
    </section>

    <section class="section links">
      <h2>روابط داخلية مرتبطة باختيار VCT</h2>
      <p>
        قبل الطلب، حدّد نوع جهازك أولًا: 
        <a href="https://saudivapes.com/ar/سحبة-سيجارة-vape-pen/c856338910">سحبة سيجارة</a>،
        <a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة شيشة إلكترونية</a>،
        <a href="https://saudivapes.com/ar/بودات-pods/c640187172">بودات</a>.
      </p>
      <p>
        ولو هدفك نكهات مشابهة، تصفّح:
        <a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">نكهات السولت</a>
        و<a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات الفيب شيشة</a>.
      </p>
    </section>

    <section class="section faq">
      <h2>الأسئلة الشائعة حول نكهة VCT</h2>

      <h3>هل VCT مناسب للمبتدئين؟</h3>
      <p>نعم إذا كنت تفضل نكهة توباكو ناعمة بطابع حلو خفيف. النسخ السولت تكون أسهل غالبًا للمستخدم الجديد.</p>

      <h3>كم يدوم سائل VCT عادة؟</h3>
      <p>يعتمد على استهلاكك اليومي ونوع الجهاز. المستخدم المتوسط يستهلك الزجاجة بشكل أسرع مع الأجهزة عالية السحب.</p>

      <h3>ما أفضل خيار: VCT سولت أم فري بيس؟</h3>
      <p>اختَر السولت للسحب الضيق والبودات، والفري بيس للأجهزة الأكبر وبخار أعلى.</p>

      <h3>هل تتوفر خيارات VCT على شكل سحبة جاهزة؟</h3>
      <p>نعم، يوجد خيارات سحبات جاهزة بطابع VCT، وروابطها مضافة في بطاقات المنتجات بالأعلى.</p>
    </section>
  </main>
</body>
</html>`;

      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=3600"
        }
      });
    }

    return fetch(request);
  }
};
