export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/nasty" || path === "/nasty/") {
      const to = new URL(url);
      to.pathname = encodeURI("/ar/nasty");
      return Response.redirect(to.toString(), 301);
    }

    if (path === "/ar/nasty" || path === "/ar/nasty/") {
      const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>أفضل نكهات ناستي في السعودية | سولت وفري بيس وسحبات Nasty</title>
  <meta name="description" content="اكتشف أفضل نكهات ناستي في السعودية حسب نوع الاستخدام: ناستي سولت، ناستي فري بيس، وسحبات ناستي الجاهزة. منتجات أصلية وروابط شراء مباشرة من Saudi Vape." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://saudivapes.com/ar/nasty" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="أفضل نكهات ناستي في السعودية" />
  <meta property="og:description" content="ترشيحات ناستي الأكثر طلبًا: سولت، فري بيس، وسحبات جاهزة مع روابط مباشرة." />
  <meta property="og:url" content="https://saudivapes.com/ar/nasty" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/26fc26a4-e291-4f53-9518-c42a225fa3af-1000x993-xES9UxY0L9jCvY1O0QZRNxQEhHsFhHvaPr1pzQxs.png" />
  <style>
    :root{--bg:#f8fafc;--card:#fff;--txt:#0f172a;--muted:#475569;--line:#e2e8f0;--pri:#0284c7;--hero:#0b1220}
    *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--txt);font-family:"Segoe UI",Tahoma,Arial,sans-serif;line-height:1.85}
    .container{max-width:1120px;margin:auto;padding:18px}
    .hero{background:linear-gradient(135deg,var(--hero),#1e293b);color:#fff;border-radius:18px;padding:26px;margin-bottom:14px}
    h1{margin:0 0 8px;font-size:clamp(26px,4vw,40px)} .hero p{margin:0;color:#cbd5e1}
    .box{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin:12px 0}
    .box h2{margin:0 0 10px;font-size:22px}
    .muted{color:var(--muted)}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
    .card{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
    .card img{width:100%;aspect-ratio:1/1;object-fit:cover;background:#f1f5f9}
    .card .b{padding:10px;display:flex;flex-direction:column;gap:8px}
    .card h3{margin:0;font-size:15px;line-height:1.6}
    .btn{display:inline-block;text-decoration:none;background:var(--pri);color:#fff;padding:8px 10px;border-radius:9px;font-weight:700;text-align:center}
    .links a{color:#0369a1;text-decoration:none;font-weight:700}.links a:hover{text-decoration:underline}
    .faq h3{margin:10px 0 4px;font-size:18px}
  </style>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"CollectionPage",
    "name":"أفضل نكهات ناستي في السعودية",
    "url":"https://saudivapes.com/ar/nasty",
    "about":{"@type":"Brand","name":"Nasty"}
  }
  </script>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"ما أفضل نكهة ناستي سولت للمبتدئين؟","acceptedAnswer":{"@type":"Answer","text":"أفضل بداية غالبًا تكون مع نكهات فاكهية واضحة مثل Trap Queen أو Slow Blow لأن تقبلها أسهل للمستخدم الجديد."}},
      {"@type":"Question","name":"ما الفرق بين ناستي سولت وناستي فري بيس؟","acceptedAnswer":{"@type":"Answer","text":"ناستي سولت مناسب لأجهزة البود الصغيرة وسحب MTL. ناستي فري بيس مناسب للأجهزة الأكبر وسحب أوسع وبخار أعلى."}},
      {"@type":"Question","name":"ما أشهر سحبات ناستي الجاهزة حاليًا؟","acceptedAnswer":{"@type":"Answer","text":"من الخيارات المطلوبة عادة Nasty Hooqa 10K وCrystal 5K بنكهات مثل الخوخ البارد والعنب وكش مان مانجو."}},
      {"@type":"Question","name":"كيف أختار نكهة ناستي مناسبة لجهازي؟","acceptedAnswer":{"@type":"Answer","text":"حدد نوع جهازك أولًا ثم اختر نوع السائل الموافق له. البودات تحتاج غالبًا سولت، بينما الأجهزة الأكبر تناسبها نكهات الفري بيس."}}
    ]
  }
  </script>
</head>
<body>
  <main class="container">
    <section class="hero">
      <h1>أفضل نكهات ناستي في السعودية</h1>
      <p>إذا تبحث عن نكهة ناستي أصلية بطعم ثابت وجودة واضحة، هذه الصفحة تجمع لك الخيارات الأكثر طلبًا حسب نوع الاستخدام والجهاز.</p>
    </section>

    <section class="box">
      <h2>أفضل نكهات ناستي سولت</h2>
      <p class="muted">مناسبة لأجهزة البود والسحب الضيق (MTL) وتلبي الاستخدام اليومي بشكل عملي.</p>
      <div class="grid">
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/7ced1d66-e385-46c8-8fec-6d94a66516cb-1000x1000-k41f2hpeodTArXdySqomlRATOMyUVv5ew6DNMi3D.png" alt="ناستي سولت سلو بلو" /><div class="b"><h3>ناستي سولت Slow Blow (أناناس + ليمون)</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-سولت-ناستي-أناناس-ليمون-nasty-slow-blow-salt-30-مل/p1256883931">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/2cb0d780-7225-4b39-989a-93936306b16a-1000x1000-Yt4OcJfX4ygeFH3NaTBJ84fyjRfE8ePOGlV2l7Hv.png" alt="ناستي سولت تراب كوين" /><div class="b"><h3>ناستي سولت Trap Queen High Mint</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-سولت-ناستي-فراولة-بارد-nasty-trap-queen-high-mint-salt/p810020696">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/54778153-c7cc-48ab-b5d1-8d7275b06422-1000x1000-hBo2yNZelRAALzsoITLP0nP3ssDbKO7PR5S1webl.jpg" alt="ناستي سولت مانجو موز" /><div class="b"><h3>ناستي سولت Mango Banana Cush Man</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-سولت-ناستي-مانجو-موز-nasty-mango-banana-cush-man/p726409849">عرض المنتج</a></div></article>
      </div>
    </section>

    <section class="box">
      <h2>أفضل نكهات ناستي فري بيس</h2>
      <p class="muted">مناسبة لأجهزة الشيشة الإلكترونية والسحب الأوسع (DTL) لعشاق البخار الكثيف.</p>
      <div class="grid">
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/3af3e265-a0fa-4d32-aa79-a525338a778a-1000x1000-UNpsFr65HqUXPR9Defx8t0Q7Lv60vDYxqC9K4M4o.jpg" alt="ناستي فري بيس مانجو" /><div class="b"><h3>ناستي فري بيس Mango Cush Man</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-فيب-ناستي-مانجو-المنعشة-nasty-mango-cush-man-vape/p1367456383">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/52223783-5f4a-4e16-92a5-8439ebc71299-1000x995-BgefwvpiypryE2SYIBtKdLotICKV5SPEUEJVzuny.png" alt="ناستي فري بيس تراب كوين" /><div class="b"><h3>ناستي فري بيس Trap Queen</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-فيب-ناستي-فراولة-nasty-juice-trap-queen/p110706481">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/824e6c72-c432-4b0a-8261-d2e859b8ccae-1000x1000-xUJEnUNWxQv9HxxmyhGbBRau7shcUKeBsOEThNTa.jpg" alt="ناستي شيشة تفاحتين" /><div class="b"><h3>ناستي شيشة Double Apple 60ml</h3><a class="btn" href="https://saudivapes.com/ar/نكهة-فيب-ناستي-شيشة-تفاحتين-nasty-shisha-double-apple-60ml/p1535066692">عرض المنتج</a></div></article>
      </div>
    </section>

    <section class="box">
      <h2>أفضل سحبات ناستي الجاهزة</h2>
      <p class="muted">خيار سريع بدون إعدادات، مناسب للتنقل أو التجربة الأولى.</p>
      <div class="grid">
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/26fc26a4-e291-4f53-9518-c42a225fa3af-1000x993-xES9UxY0L9jCvY1O0QZRNxQEhHsFhHvaPr1pzQxs.png" alt="Hooqa 10K" /><div class="b"><h3>شيشة جاهزة ناستي Hooqa 10K</h3><a class="btn" href="https://saudivapes.com/ar/شيشة-جاهزة-ناستي-هوكا-10000-موشة-nasty-hooqa-dtl-10k-puff/p645932327">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/906211d8-9c45-4868-a536-a8b4b8cec295-1000x1000-lQQyvT8gUX8gab2xslDXcMfgPT337M8xf3pOJFTW.jpg" alt="ناستي كريستال خوخ" /><div class="b"><h3>Nasty Crystal 5K خوخ بارد</h3><a class="btn" href="https://saudivapes.com/ar/سحبة-كريستال-5k-ناستي-5000-موشة-خوخ-بارد-nasty-5k-crystal-5000-puff-disposable-peach-ice/p101933501">عرض المنتج</a></div></article>
        <article class="card"><img loading="lazy" src="https://cdn.salla.sa/jbXEY/bbc722aa-3754-4110-843c-4dc83390c259-1000x1000-VWEdtrxDK2K3WWKfdEpCeTVdboOFa1mebM4GjQO0.jpg" alt="ناستي كش مان مانجو" /><div class="b"><h3>Nasty Fix Go 3000 كش مان مانجو</h3><a class="btn" href="https://saudivapes.com/ar/ناستي-3000-فوكس-فيكس-جو-كش-مان-مانجو-nasty-fix-go-3000-cushman-mango/p1281222224">عرض المنتج</a></div></article>
      </div>
    </section>

    <section class="box links">
      <h2>روابط مفيدة قبل الشراء</h2>
      <ul>
        <li><a href="https://saudivapes.com/ar/ناستي-nasty/brand-767860619">جميع منتجات براند ناستي</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">تصفح كل نكهات السولت</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">تصفح نكهات الفري بيس</a></li>
        <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">تصفح السحبات الجاهزة</a></li>
      </ul>
    </section>

    <section class="box faq">
      <h2>الأسئلة الشائعة حول نكهات ناستي</h2>
      <h3>هل ناستي مناسب للمبتدئ؟</h3>
      <p>نعم، خاصة النكهات الفاكهية الواضحة، مع اختيار نوع النيكوتين المناسب للجهاز.</p>
      <h3>كيف أضمن اختيار صحيح من أول مرة؟</h3>
      <p>حدّد نوع جهازك أولًا، ثم اختر بين السولت أو الفري بيس. بهذه الطريقة تقل احتمالية شراء نكهة غير مناسبة.</p>
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
