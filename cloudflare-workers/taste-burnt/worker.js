export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/taste-burnt" || path === "/taste-burnt/") {
      const html = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>طعم الفيب المحروق: الأسباب والحل العملي 2026</title>
  <meta name="description" content="تعرف على أسباب طعم الفيب المحروق وكيف تحله بسرعة: الكويل، البرايم، إعدادات الواط، ونوع النكهة المناسبة. دليل عملي للمستخدم في السعودية." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://saudivapes.com/taste-burnt" />
  <style>
    body{margin:0;font-family:"Segoe UI",Tahoma,Arial,sans-serif;background:#fff;color:#111;line-height:1.9}
    .w{max-width:920px;margin:auto;padding:20px} h1{font-size:clamp(26px,4vw,38px);margin:10px 0}
    h2{margin-top:22px} .toc{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px}
    .note{background:#ecfeff;border:1px solid #bae6fd;border-radius:10px;padding:12px}
  </style>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"لماذا يظهر طعم محروق رغم أن الكويل جديد؟","acceptedAnswer":{"@type":"Answer","text":"غالبًا لم يتم برايم الكويل بشكل صحيح. ضع قطرات سائل على القطن وانتظر 5-10 دقائق قبل أول سحبة."}},
    {"@type":"Question","name":"ما إعداد الواط المناسب لتجنب الاحتراق؟","acceptedAnswer":{"@type":"Answer","text":"ابدأ من أقل واط موصى به على الكويل وارفع تدريجيًا. رفع الواط مباشرة يسبب احتراق القطن سريعًا."}},
    {"@type":"Question","name":"هل نوع النكهة يؤثر على عمر الكويل؟","acceptedAnswer":{"@type":"Answer","text":"نعم. النكهات الثقيلة أو عالية التحلية قد تسرّع تراكم الرواسب على الكويل وتقلل عمره."}}
  ]}
  </script>
</head>
<body>
  <main class="w">
    <h1>ليش طعم الفيب محروق؟</h1>
    <p>إذا ظهر طعم محروق (Burnt Hit)، فالمشكلة غالبًا من الكويل أو طريقة الاستخدام، وليس من الجهاز كاملًا.</p>

    <section class="toc">
      <h2>خلاصة سريعة</h2>
      <ul>
        <li>تأكد أن الخزان فيه سائل كافي.</li>
        <li>برايم الكويل الجديد قبل الاستخدام.</li>
        <li>خفض الواط وجرّب تدريجيًا.</li>
        <li>غيّر الكويل إذا استمر الطعم المحروق.</li>
      </ul>
    </section>

    <h2>1) انخفاض مستوى السائل</h2>
    <p>عند نزول السائل أسفل فتحات القطن، يبدأ القطن بالجفاف ويظهر الطعم المحروق. الحل: عبّئ السائل قبل ما يوصل للمستوى المنخفض.</p>

    <h2>2) عدم برايم الكويل</h2>
    <p>الكويل الجديد يحتاج تشريب أولي. ضع قطرات من السائل على القطن، عبّئ الخزان، وانتظر عدة دقائق قبل السحب.</p>

    <h2>3) واط أعلى من قدرة الكويل</h2>
    <p>تشغيل واط مرتفع يحرق القطن بسرعة. التزم بالمدى المكتوب على الكويل وابدأ من الحد الأدنى.</p>

    <h2>4) عمر الكويل انتهى</h2>
    <p>إذا الطعم المحروق مستمر رغم كل شيء، استبدل الكويل. هذا غالبًا الحل النهائي.</p>

    <section class="note">
      <strong>روابط مفيدة:</strong>
      <ul>
        <li><a href="https://saudivapes.com/ar/كويلات/c1945541157">تصفح الكويلات</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">نكهات سولت مناسبة للأجهزة الصغيرة</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات فري بيس للأجهزة الأكبر</a></li>
      </ul>
    </section>
  </main>
</body>
</html>`;
      return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=3600" } });
    }
    return fetch(request);
  }
};
