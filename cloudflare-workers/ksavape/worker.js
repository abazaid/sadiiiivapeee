export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/ksavape" || path === "/ksavape/") {
      const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>KSA Vape | متجر فيب السعودية للأجهزة والنكهات الأصلية</title>
  <meta name="description" content="KSA Vape من Saudi Vape: صفحة هبوط مركزة لأفضل أجهزة الفيب، السحبات، ونكهات السولت والفري بيس مع روابط شراء مباشرة وشحن سريع." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://saudivapes.com/ksavape" />
  <style>
    body{margin:0;font-family:"Segoe UI",Tahoma,Arial,sans-serif;background:#f8fafc;color:#0f172a;line-height:1.8}
    .w{max-width:1050px;margin:auto;padding:18px}.hero{background:linear-gradient(135deg,#111827,#1f2937);color:#fff;border-radius:16px;padding:24px}
    .box{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-top:12px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.card{border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background:#fff}
    .card img{width:100%;aspect-ratio:1/1;object-fit:cover}.b{padding:10px}.btn{display:inline-block;background:#0284c7;color:#fff;text-decoration:none;padding:8px 10px;border-radius:8px;font-weight:700}
  </style>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"KSA Vape","url":"https://saudivapes.com/ksavape"}</script>
</head>
<body>
<main class="w">
  <section class="hero"><h1>KSA Vape: متجر فيب السعودية</h1><p>دليل سريع لاختيار المنتج الصحيح حسب طريقة السحب ونوع الجهاز.</p></section>
  <section class="box"><h2>روابط أساسية</h2><ul>
    <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة شيشة إلكترونية</a></li>
    <li><a href="https://saudivapes.com/ar/بودات-pods/c640187172">بودات</a></li>
    <li><a href="https://saudivapes.com/ar/كويلات/c1945541157">كويلات</a></li>
    <li><a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">نكهات سولت</a></li>
    <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات فيب شيشة</a></li>
  </ul></section>
  <section class="box"><h2>اختيارات شائعة</h2><div class="grid">
    <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/26fc26a4-e291-4f53-9518-c42a225fa3af-1000x993-xES9UxY0L9jCvY1O0QZRNxQEhHsFhHvaPr1pzQxs.png" alt="Nasty Hooqa"/><div class="b"><h3>Nasty Hooqa 10K</h3><a class="btn" href="https://saudivapes.com/ar/شيشة-جاهزة-ناستي-هوكا-10000-موشة-nasty-hooqa-dtl-10k-puff/p645932327">عرض</a></div></article>
    <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/906211d8-9c45-4868-a536-a8b4b8cec295-1000x1000-lQQyvT8gUX8gab2xslDXcMfgPT337M8xf3pOJFTW.jpg" alt="Nasty 5K"/><div class="b"><h3>Nasty Crystal 5K</h3><a class="btn" href="https://saudivapes.com/ar/سحبة-كريستال-5k-ناستي-5000-موشة-خوخ-بارد-nasty-5k-crystal-5000-puff-disposable-peach-ice/p101933501">عرض</a></div></article>
    <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/b0fd2f45-16db-43f6-bffb-69a77d89828a-1000x1000-n7NzTBIl5mdQqrW8UmlciZjzFUOZVgQiOV9jU853.jpg" alt="VCT"/><div class="b"><h3>VCT 120ml</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-في-سي-تي-فانيلا-كسترد-توباكو-120-مل-ripe-vapes-vct/p1470083208">عرض</a></div></article>
  </div></section>
</main>
</body>
</html>`;
      return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=3600" } });
    }
    return fetch(request);
  }
};
