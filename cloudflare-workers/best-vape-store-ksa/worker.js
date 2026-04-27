export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/best-vape-store-ksa" || path === "/best-vape-store-ksa/") {
      const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>أفضل متجر فيب في السعودية | Saudi Vape</title>
  <meta name="description" content="صفحة أفضل متجر فيب في السعودية: أجهزة أصلية، نكهات موثوقة، سحبات جاهزة، وروابط مباشرة لأهم التصنيفات داخل متجر Saudi Vape." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://saudivapes.com/best-vape-store-ksa" />
  <style>
    body{margin:0;font-family:"Segoe UI",Tahoma,Arial,sans-serif;background:#f8fafc;color:#0f172a;line-height:1.8}
    .w{max-width:1050px;margin:auto;padding:18px}.hero{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;border-radius:16px;padding:24px}
    .box{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-top:12px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
    .card{border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:#fff}.card img{width:100%;aspect-ratio:1/1;object-fit:cover}.b{padding:10px}
    .btn{display:inline-block;background:#0284c7;color:#fff;text-decoration:none;padding:8px 10px;border-radius:8px;font-weight:700}
  </style>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"كيف أختار متجر فيب موثوق في السعودية؟","acceptedAnswer":{"@type":"Answer","text":"اختَر متجرًا يقدّم صفحات منتجات واضحة، تصنيفات منظمة، وسياسات شحن واسترجاع معلنة بوضوح."}},
    {"@type":"Question","name":"ما أهم تصنيفات الشراء للمستخدم الجديد؟","acceptedAnswer":{"@type":"Answer","text":"غالبًا يبدأ المستخدم بقسم السحبات الجاهزة أو البودات، ثم ينتقل للأجهزة والنكهات حسب نمط الاستخدام."}}
  ]}</script>
</head>
<body>
<main class="w">
  <section class="hero">
    <h1>أفضل متجر فيب في السعودية</h1>
    <p>Saudi Vape يقدم لك مسار شراء واضح: ابدأ بالتصنيف المناسب، قارن المنتجات، ثم اطلب مباشرة من صفحات موثقة.</p>
  </section>

  <section class="box">
    <h2>ابدأ من هذه الأقسام</h2>
    <ul>
      <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
      <li><a href="https://saudivapes.com/ar/شيشة-جاهزة-لمرة-واحدة/c1413700827">شيشة جاهزة</a></li>
      <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة شيشة إلكترونية</a></li>
      <li><a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">نكهات سولت</a></li>
      <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات فيب شيشة</a></li>
    </ul>
  </section>

  <section class="box">
    <h2>منتجات مقترحة ذات طلب عالٍ</h2>
    <div class="grid">
      <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/26fc26a4-e291-4f53-9518-c42a225fa3af-1000x993-xES9UxY0L9jCvY1O0QZRNxQEhHsFhHvaPr1pzQxs.png" alt="Hooqa 10K"/><div class="b"><h3>Nasty Hooqa 10K</h3><a class="btn" href="https://saudivapes.com/ar/شيشة-جاهزة-ناستي-هوكا-10000-موشة-nasty-hooqa-dtl-10k-puff/p645932327">عرض المنتج</a></div></article>
      <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/7ced1d66-e385-46c8-8fec-6d94a66516cb-1000x1000-k41f2hpeodTArXdySqomlRATOMyUVv5ew6DNMi3D.png" alt="Nasty Salt"/><div class="b"><h3>Nasty Slow Blow Salt</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-سولت-ناستي-أناناس-ليمون-nasty-slow-blow-salt-30-مل/p1256883931">عرض المنتج</a></div></article>
      <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/b0fd2f45-16db-43f6-bffb-69a77d89828a-1000x1000-n7NzTBIl5mdQqrW8UmlciZjzFUOZVgQiOV9jU853.jpg" alt="VCT"/><div class="b"><h3>Ripe VCT 120ml</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-في-سي-تي-فانيلا-كسترد-توباكو-120-مل-ripe-vapes-vct/p1470083208">عرض المنتج</a></div></article>
    </div>
  </section>
</main>
</body>
</html>`;
      return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=3600" } });
    }
    return fetch(request);
  }
};
