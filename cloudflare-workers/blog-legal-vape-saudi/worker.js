export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const arabicPath = '/ar/هل-الفيب-مسموح-في-السعودية';

    const routes = [
      arabicPath,
      arabicPath + '/',
      '/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9',
      '/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9/',
    ];

    if (!routes.includes(path)) {
      return fetch(request);
    }

    return new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta -->
  <title>هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026</title>
  <meta name="description" content="تعرف على قانونية الفيب والشيشة الإلكترونية في السعودية: التصاريح، الضوابط، السن القانوني، وعقوبات المخالفة. دليل محدث 2026 بمراجع رسمية." />
  <meta name="keywords" content="هل الفيب مسموح في السعودية, قانونية الفيب في السعودية, ضوابط بيع الفيب, نظام مكافحة التدخين السعودي, الفيب السعودية قانوني" />
  <link rel="canonical" href="https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />

  <!-- Open Graph -->
  <meta property="og:title" content="هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026" />
  <meta property="og:description" content="تعرف على قانونية الفيب والشيشة الإلكترونية في السعودية — التصاريح، الضوابط، والعقوبات." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" />
  <meta property="og:image" content="https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" />
  <meta property="og:locale" content="ar_SA" />
  <meta property="article:published_time" content="2026-04-26T10:00:00+03:00" />
  <meta property="article:modified_time" content="2026-04-26T10:00:00+03:00" />
  <meta property="article:tag" content="قانون الفيب السعودية" />
  <meta property="article:tag" content="شيشة إلكترونية قانونية" />
  <meta property="article:tag" content="هل الفيب مسموح" />
  <meta property="article:tag" content="نظام مكافحة التدخين" />
  <meta property="article:tag" content="الفيب في السعودية" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026" />
  <meta name="twitter:description" content="تعرف على قانونية الفيب والشيشة الإلكترونية في السعودية — التصاريح، الضوابط، والعقوبات." />

  <!-- JSON-LD Schema: Article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026",
    "description": "تعرف على قانونية الفيب والشيشة الإلكترونية في السعودية: التصاريح، الضوابط، السن القانوني، وعقوبات المخالفة.",
    "datePublished": "2026-04-26",
    "dateModified": "2026-04-26",
    "inLanguage": "ar-SA",
    "author": {
      "@type": "Person",
      "@id": "https://saudivapes.com/#person",
      "name": "فريق سعودي فيب",
      "url": "https://saudivapes.com/ar/blog/author/1210468642"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://saudivapes.com/#organization",
      "name": "فيب السعودية",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png"
      }
    },
    "image": "https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9"
    },
    "about": {
      "@type": "Thing",
      "name": "قانونية الفيب في المملكة العربية السعودية",
      "description": "تنظيم منتجات التبغ البديلة والفيب والشيشة الإلكترونية في السعودية"
    },
    "keywords": ["قانون الفيب السعودية", "شيشة إلكترونية قانونية", "هل الفيب مسموح", "نظام مكافحة التدخين", "الفيب في السعودية"]
  }
  </script>

  <!-- JSON-LD Schema: FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "هل الفيب مسموح في السعودية 2026؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، الفيب مسموح في السعودية بشكل نظامي منذ 2019. يشترط أن تكون المنتجات مسجلة لدى هيئة الغذاء والدواء وأن تتم عملية البيع عبر منشآت مرخصة. يُمنع البيع للأشخاص تحت 18 سنة، وتطبق عقوبات على المخالفين تصل إلى 50,000 ريال سعودي."
        }
      },
      {
        "@type": "Question",
        "name": "هل الشيشة الإلكترونية قانونية في السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، الشيشة الإلكترونية قانونية وتخضع لنفس تنظيمات الفيب ومنتجات التبغ البديلة الأخرى. يجب أن تكون مسجلة في هيئة الغذاء والدواء، ويُمنع بيعها للأشخاص تحت 18 سنة، وتطبق عليها ضوابط الإعلان والتسويق نفسها."
        }
      },
      {
        "@type": "Question",
        "name": "كم عمر 18 سنة للفيب في السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "السن القانوني لشراء واستخدام منتجات الفيب والشيشة الإلكترونية في المملكة العربية السعودية هو 18 سنة. يتحمل صاحب المنشأة مسؤولية التحقق من عمر المشتري قبل البيع، وقد تصل غرامة المخالفة إلى 50,000 ريال سعودي."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي عقوبة بيع الفيب للقاصرين في السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تصل عقوبة بيع الفيب أو أي منتج تبغ للأشخاص تحت 18 سنة في السعودية إلى غرامة مالية تبلغ 50,000 ريال سعودي، بالإضافة إلى إغلاق المنشأة في حال تكرار المخالفة، ومصادرة المنتجات المخالفة."
        }
      },
      {
        "@type": "Question",
        "name": "هل يحتاج متجر الفيب الإلكتروني ترخيصًا في السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، أي متجر إلكتروني يبيع منتجات الفيب في السعودية يجب أن يحصل على ترخيص تجاري يتضمن نشاط بيع التبغ ومنتجاته، وأن يسجل جميع منتجاته لدى هيئة الغذاء والدواء. البيع بدون ترخيص يعرض المخالف لعقوبات نظام مكافحة التدخين."
        }
      },
      {
        "@type": "Question",
        "name": "هل يمكن السفر بالفيب داخل السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، يمكن حمل أجهزة الفيب الشخصية عند السفر داخل المملكة. يُنصح بوضع الأجهزة في الأمتعة اليدوية، والتأكد من عدم حمل سوائل نيكوتين بكميات تتجاوز المسموح به في الطيران. لا توجد قيود خاصة على حيازة الفيب للاستخدام الشخصي ضمن الحدود المعقولة."
        }
      }
    ]
  }
  </script>

  <!-- JSON-LD Schema: BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://saudivapes.com/" },
      { "@type": "ListItem", "position": 2, "name": "المدونة", "item": "https://saudivapes.com/ar/blog" },
      { "@type": "ListItem", "position": 3, "name": "هل الفيب مسموح في السعودية", "item": "https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" }
    ]
  }
  </script>

  <!-- JSON-LD Schema: Speakable (AI Assistant Readable) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "هل الفيب مسموح في السعودية؟ الدليل القانوني الشامل 2026",
    "url": "https://saudivapes.com/ar/%D9%87%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%A8-%D9%85%D8%B3%D9%85%D9%88%D8%AD-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".prose-wrap",
        ".faq-answer"
      ]
    }
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
      line-height: 1.3;
    }
    .page-header .meta {
      color: var(--muted);
      font-size: 0.88rem;
      margin-bottom: 12px;
    }
    .page-header .meta a {
      color: var(--accent2);
      text-decoration: none;
    }
    .page-header .meta a:hover { text-decoration: underline; }

    /* Tags */
    .tags-bar {
      display: flex;
      gap: 8px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 16px;
    }
    .tag {
      background: var(--surface2);
      border: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.78rem;
      padding: 5px 14px;
      border-radius: 50px;
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .tag:hover {
      border-color: var(--accent);
      color: var(--accent2);
    }

    /* Article prose */
    .article-section { padding: 60px 24px; }
    .container { max-width: 820px; margin: 0 auto; }

    .prose-wrap { max-width: 760px; margin: 0 auto; }

    .prose-wrap .disclaimer {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 18px 20px;
      margin-bottom: 28px;
      font-size: 0.85rem;
      color: var(--muted);
    }
    .prose-wrap .disclaimer strong { color: var(--gold); }

    .prose-wrap .lead {
      font-size: 1.05rem;
      color: var(--text);
      margin-bottom: 28px;
      padding: 20px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      border-right: 4px solid var(--accent);
    }
    .prose-wrap .lead strong { color: var(--accent2); }

    .prose-wrap h2 {
      font-family: 'Tajawal', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--white);
      margin: 40px 0 14px;
      padding-top: 8px;
    }
    .prose-wrap h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text);
      margin: 28px 0 10px;
    }
    .prose-wrap p {
      color: var(--muted);
      font-size: 0.97rem;
      margin-bottom: 16px;
      line-height: 1.9;
    }
    .prose-wrap p strong { color: var(--text); }
    .prose-wrap ul {
      list-style: none;
      margin: 0 0 20px;
      padding: 0;
    }
    .prose-wrap ul li {
      color: var(--muted);
      font-size: 0.95rem;
      padding: 7px 22px 7px 0;
      position: relative;
    }
    .prose-wrap ul li::before {
      content: '◆';
      position: absolute;
      right: 0;
      color: var(--accent2);
      font-size: 0.55rem;
      top: 12px;
    }

    .prose-wrap a {
      color: var(--accent2);
      text-decoration: none;
      font-weight: 600;
    }
    .prose-wrap a:hover { text-decoration: underline; }

    .prose-wrap .author-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 20px 24px;
      margin: 28px 0;
    }
    .prose-wrap .author-box a {
      color: var(--accent2);
    }

    /* Inline CTA */
    .inline-cta {
      background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06));
      border: 1px solid rgba(124,58,237,0.25);
      border-radius: var(--radius);
      padding: 24px;
      margin: 28px 0;
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .inline-cta .cta-icon { font-size: 2rem; flex-shrink: 0; }
    .inline-cta .cta-text h4 { font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 4px; }
    .inline-cta .cta-text p { font-size: 0.82rem; color: var(--muted); margin: 0; }
    .inline-cta .cta-btn {
      margin-right: auto;
      flex-shrink: 0;
      background: var(--accent);
      color: white;
      padding: 10px 20px;
      border-radius: 50px;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
      white-space: nowrap;
      transition: background 0.2s;
    }
    .inline-cta .cta-btn:hover { background: var(--accent2); text-decoration: none; }

    /* Related posts */
    .related-section { background: var(--surface); }
    .related-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 24px;
    }
    .related-card {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      text-decoration: none;
      color: var(--text);
      transition: border-color 0.2s, transform 0.2s;
      display: flex;
      flex-direction: column;
    }
    .related-card:hover { border-color: var(--accent); transform: translateY(-2px); }
    .related-card .tag-label {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent2);
      margin-bottom: 8px;
    }
    .related-card h3 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
      line-height: 1.5;
    }
    .related-card p {
      font-size: 0.85rem;
      color: var(--muted);
      line-height: 1.6;
      margin: 0;
    }
    .related-card .read-more {
      color: var(--accent2);
      font-size: 0.82rem;
      font-weight: 700;
      margin-top: auto;
      padding-top: 12px;
    }

    /* FAQ */
    .faq-section { background: var(--bg); }
    .faq-list { list-style: none; }
    .faq-item {
      border-bottom: 1px solid var(--border);
    }
    .faq-question {
      width: 100%;
      background: none;
      border: none;
      color: var(--white);
      font-family: 'Cairo', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      text-align: right;
      padding: 18px 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .faq-question .faq-icon {
      color: var(--accent2);
      font-size: 1.2rem;
      flex-shrink: 0;
      transition: transform 0.2s;
    }
    .faq-item.open .faq-icon { transform: rotate(45deg); }
    .faq-answer {
      display: none;
      color: var(--muted);
      font-size: 0.9rem;
      padding-bottom: 18px;
      line-height: 1.7;
    }
    .faq-item.open .faq-answer { display: block; }

    /* Bottom CTA */
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
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: var(--text);
      padding: 14px 26px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      border: 1px solid var(--border);
      transition: border-color 0.2s, color 0.2s;
    }
    .btn-secondary:hover { border-color: var(--accent2); color: var(--accent2); }

    /* Footer */
    footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
      padding: 48px 24px 24px;
    }
    .footer-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
      margin-bottom: 40px;
    }
    .footer-brand p { color: var(--muted); font-size: 0.88rem; margin-top: 12px; max-width: 280px; line-height: 1.65; }
    .footer-col h4 { color: var(--white); font-size: 0.92rem; font-weight: 700; margin-bottom: 16px; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul li a { color: var(--muted); text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
    .footer-col ul li a:hover { color: var(--accent2); }
    .footer-bottom {
      max-width: 1100px;
      margin: 0 auto;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.78rem;
      color: var(--muted);
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .related-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; gap: 28px; }
      .inline-cta { flex-direction: column; text-align: center; }
      .inline-cta .cta-btn { margin-right: 0; }
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
  <h1>هل الفيب مسموح في السعودية؟<br/>الدليل القانوني الشامل 2026</h1>
  <div class="meta">
    <span>📅 26 أبريل 2026</span>
    <span> · </span>
    <span>✍️ <a href="https://saudivapes.com/ar/blog/author/1210468642">فريق سعودي فيب</a></span>
  </div>
  <div class="tags-bar">
    <a href="https://saudivapes.com/ar/blog" class="tag">قانون الفيب السعودية</a>
    <a href="https://saudivapes.com/ar/blog" class="tag">شيشة إلكترونية قانونية</a>
    <a href="https://saudivapes.com/ar/blog" class="tag">هل الفيب مسموح</a>
    <a href="https://saudivapes.com/ar/blog" class="tag">نظام مكافحة التدخين</a>
  </div>
</header>

<!-- ═══ ARTICLE ═══ -->
<section class="article-section">
  <div class="container">
    <div class="prose-wrap">

      <div class="disclaimer">
        <strong>تنويه مهم:</strong> هذه المعلومات للأغراض التوعوية فقط وتستند إلى الأنظمة المنشورة حتى تاريخ 26 أبريل 2026. قد تطرأ تحديثات على الأنظمة بعد تاريخ النشر. يُرجى استشارة جهة قانونية مختصة للحصول على استشارة محددة.
      </div>

      <div class="lead">
        <strong>نعم، الفيب مسموح في السعودية</strong> وفق الضوابط التي حددتها الهيئة العامة للغذاء والدواء ووزارة التجارة. منذ 2019، أصبح بإمكان المدخنين شراء واستخدام أجهزة الفيب والشيشة الإلكترونية بشكل قانوني، مع التقيد بالأنظمة المنظمة للتوزيع والعمر والإعلان.
      </div>

      <h2>ما هو موقف القانون السعودي من الفيب والشيشة الإلكترونية؟</h2>
      <p>تنظم المملكة العربية السعودية منتجات التبغ ومشتقاته — بما فيها أجهزة الفيب والشيشة الإلكترونية — عبر عدة جهات رقابية. الجهة الأساسية المسؤولة عن تنظيم تسويق هذه المنتجات هي <strong>الهيئة العامة للغذاء والدواء (SFDA)</strong>، التي تشترط تسجيل جميع منتجات التبغ البديلة والتأكد من مطابقتها للمواصفات قبل بيعها في السوق السعودي.</p>
      <p>القانون الأساسي الذي يحكم هذا المجال هو <strong>نظام مكافحة التدخين</strong> الصادر بالمرسوم الملكي رقم (م/56) بتاريخ 1436/7/6، والذي يحدد ضوابط التداول والبيع والإعلان عن منتجات التبغ بكافة أنواعها، بما في ذلك منتجات التبغ المسخن إلكترونيًا والسوائل الإلكترونية.</p>

      <h2>متى أصبح الفيب قانونيًا في السعودية؟</h2>
      <p>شهدت سياسة التبغ في السعودية تحولًا رئيسيًا في عام <strong>2019</strong>، حين أعلنت الهيئة العامة للغذاء والدواء عن فتح باب تسجيل منتجات التبغ البديلة ومنتجات التبغ المسخن إلكترونيًا. قبل هذا التاريخ، كان استيراد وتسويق هذه المنتجات محظورًا رسميًا، مما دفع المستهلكين إلى الشراء من مصادر غير رسمية.</p>
      <p>جاء هذا القرار بعد دراسات علمية استمرت عدة سنوات، وأخذت بعين الاعتبار:</p>
      <ul>
        <li>الانتشار الواسع للتبغ البديل بين المدخنين السعوديين</li>
        <li>الحاجة إلى ضمان جودة المنتجات المتداولة عبر تنظيم رسمي</li>
        <li>توجيهات منظمة الصحة العالمية بشأن تنظيم منتجات التبغ الجديدة والناشئة</li>
      </ul>

      <h2>ضوابط بيع وشراء الفيب في السعودية</h2>
      <p>فرضت الجهات الرقابية عددًا من الضوابط التي يجب الالتزام بها عند بيع أو شراء منتجات الفيب في المملكة:</p>

      <h3>السن القانوني للشراء</h3>
      <p><strong>يُمنع بيع منتجات التبغ والفيب للأشخاص تحت سن 18 سنة</strong>. يجب على جميع المتاجر — سواء كانت فيزيائية أو إلكترونية — التحقق من عمر المشتري قبل إتمام عملية البيع. المخالفة تعرض صاحب المنشأة لعقوبات تصل إلى 50,000 ريال سعودي.</p>

      <h3>اشتراطات التسجيل والترخيص</h3>
      <ul>
        <li>يجب أن تكون جميع منتجات الفيب مسجلة لدى الهيئة العامة للغذاء والدواء</li>
        <li>يلزم الحصول على ترخيص تجاري ساري المفعول يتضمن نشاط بيع التبغ ومنتجاته</li>
        <li>يحظر بيع المنتجات غير المسجلة أو المغشوشة</li>
        <li>تطبق مواصفات قياسية إلزامية على سوائل النيكوتين والأجهزة</li>
      </ul>

      <h3>ضوابط الإعلان والتسويق</h3>
      <p>تخضع الإعلانات التجارية لمنتجات الفيب للضوابط التالية:</p>
      <ul>
        <li>حظر الإعلان في وسائل الإعلام المقروءة والمسموعة والمرئية</li>
        <li>منع استخدام عبارات تضلل المستهلك مثل "أقل ضررًا" أو "صحي" دون إثبات علمي</li>
        <li>وجوب وضع تحذير صحي واضح على جميع المنتجات والمواد الإعلانية</li>
      </ul>

      <h2>عقوبات مخالفة نظام مكافحة التدخين</h2>
      <p>حدد النظام السعودي عقوبات تصاعدية للمخالفين:</p>
      <ul>
        <li><strong>غرامة مالية:</strong> تبدأ من 5,000 ريال وتصل إلى 50,000 ريال حسب نوع المخالفة وتكرارها</li>
        <li><strong>مصادرة المنتجات:</strong> تضبط وتصادر جميع منتجات التبغ المخالفة</li>
        <li><strong>إغلاق المنشأة:</strong> في حال تكرار المخالفة، يمكن إغلاق المنشأة لمدة تصل إلى 30 يومًا</li>
        <li><strong>البيع للقاصرين:</strong> عقوبات مشددة تصل إلى مضاعفة الغرامة</li>
      </ul>

      <h2>الفرق بين الفيب والشيشة الإلكترونية في القانون السعودي</h2>
      <p>من الناحية التنظيمية، لا يوجد فرق جوهري بين أجهزة الفيب والشيشة الإلكترونية في النظام السعودي. كلاهما يندرج تحت تصنيف <strong>"منتجات التبغ البديلة"</strong> أو <strong>"منتجات التبغ المسخن إلكترونيًا"</strong>. تخضع الفئتان لنفس الاشتراطات من حيث التسجيل والبيع والعمر القانوني. لكن يختلف حجم السوق بينهما — أجهزة الفيب بأنواعها (السحبات الجاهزة، البودات، الأجهزة القابلة لإعادة التعبئة) تستحوذ على حصة سوقية متزايدة باستمرار في المملكة.</p>

      <h2>أين يمكن شراء الفيب بشكل قانوني في السعودية؟</h2>
      <p>يمكن شراء منتجات الفيب والشيشة الإلكترونية بشكل قانوني من:</p>
      <ul>
        <li><strong>المتاجر الإلكترونية المرخصة</strong> مثل <a href="https://saudivapes.com/ar">سعودي فيب</a> التي توفر أكثر من 5,800 منتج أصلي</li>
        <li><strong>متاجر التجزئة</strong> المرخصة في المدن الرئيسية (الرياض، جدة، الدمام، مكة)</li>
        <li><strong>منصات التسوق الإلكتروني</strong> المعتمدة من وزارة التجارة</li>
      </ul>

      <div class="inline-cta">
        <div class="cta-icon">🛒</div>
        <div class="cta-text">
          <h4>تسوق منتجات الفيب الأصلية الآن</h4>
          <p>أكثر من 5,800 منتج أصلي — شحن لجميع مدن المملكة</p>
        </div>
        <a href="https://saudivapes.com/ar" class="cta-btn">تسوق الآن</a>
      </div>

      <p>عند الشراء، تأكد من:</p>
      <ul>
        <li>وجود ترخيص تجاري واضح على الموقع</li>
        <li>تسجيل المنتجات في هيئة الغذاء والدواء</li>
        <li>توفر فاتورة ضريبية معتمدة</li>
        <li>سياسة إرجاع وضمان واضحة</li>
      </ul>

      <h2>الخلاصة</h2>
      <p><strong>الفيب مسموح في السعودية</strong> بشكل نظامي، مع التزام صارم بالضوابط التي تحددها هيئة الغذاء والدواء ووزارة التجارة — السن القانوني 18 سنة، التسجيل الإلزامي للمنتجات، حظر الإعلان، وعقوبات تصل إلى 50,000 ريال. يمكن للمستهلكين شراء منتجات أصلية وموثوقة من المتاجر المرخصة.</p>
      <p>ننصح دائمًا بالشراء من مصادر موثوقة لضمان الحصول على منتجات أصلية ومطابقة للمواصفات السعودية. تصفح <a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">تشكيلة السحبات الجاهزة</a> أو <a href="https://saudivapes.com/ar/بودات-pods/c640187172">أجهزة البودات</a> المتوفرة في سعودي فيب — جميعها منتجات أصلية 100% ومن مصادر معتمدة.</p>

      <div class="author-box">
        <strong style="color: var(--accent2);">✍️ فريق التحرير</strong>
        <p style="margin: 8px 0 0;">هذا المقال من إعداد فريق التحرير في <strong>فيب السعودية</strong>، وهم متخصصون في منتجات الفيب والشيشة الإلكترونية بخبرة تمتد لسنوات في السوق السعودي. يمكنك الاطلاع على <a href="https://saudivapes.com/ar/blog/author/1210468642">ملف كاتب المحتوى</a> لمزيد من المعلومات.</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section class="faq-section" id="faq">
  <div class="container">
    <div style="max-width:760px;margin:0 auto;">
      <h2 style="font-family: 'Tajawal', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); margin-bottom: 8px;">الأسئلة الشائعة</h2>
      <p style="color: var(--muted); margin-bottom: 24px;">أكثر الأسئلة تداولاً حول قانونية الفيب في السعودية</p>

      <ul class="faq-list">
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل الفيب مسموح في السعودية 2026؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">نعم، الفيب مسموح في السعودية بشكل نظامي منذ 2019. يشترط أن تكون المنتجات مسجلة لدى هيئة الغذاء والدواء وأن تتم عملية البيع عبر منشآت مرخصة. يُمنع البيع للأشخاص تحت 18 سنة، وتطبق عقوبات على المخالفين تصل إلى 50,000 ريال سعودي.</div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل الشيشة الإلكترونية قانونية في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">نعم، الشيشة الإلكترونية قانونية وتخضع لنفس تنظيمات الفيب ومنتجات التبغ البديلة الأخرى. يجب أن تكون مسجلة في هيئة الغذاء والدواء، ويُمنع بيعها للأشخاص تحت 18 سنة، وتطبق عليها ضوابط الإعلان والتسويق نفسها.</div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            كم السن القانوني لشراء الفيب في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">السن القانوني لشراء واستخدام منتجات الفيب والشيشة الإلكترونية في المملكة العربية السعودية هو 18 سنة. يتحمل صاحب المنشأة مسؤولية التحقق من عمر المشتري قبل البيع، وقد تصل غرامة المخالفة إلى 50,000 ريال سعودي.</div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            ما هي عقوبة بيع الفيب للقاصرين في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">تصل عقوبة بيع الفيب أو أي منتج تبغ للأشخاص تحت 18 سنة في السعودية إلى غرامة مالية تبلغ 50,000 ريال سعودي، بالإضافة إلى إغلاق المنشأة في حال تكرار المخالفة، ومصادرة المنتجات المخالفة.</div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل يحتاج متجر الفيب الإلكتروني ترخيصًا في السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">نعم، أي متجر إلكتروني يبيع منتجات الفيب في السعودية يجب أن يحصل على ترخيص تجاري يتضمن نشاط بيع التبغ ومنتجاته، وأن يسجل جميع منتجاته لدى هيئة الغذاء والدواء. البيع بدون ترخيص يعرض المخالف لعقوبات نظام مكافحة التدخين.</div>
        </li>
        <li class="faq-item">
          <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
            هل يمكن السفر بالفيب داخل السعودية؟
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">نعم، يمكن حمل أجهزة الفيب الشخصية عند السفر داخل المملكة. يُنصح بوضع الأجهزة في الأمتعة اليدوية، والتأكد من عدم حمل سوائل نيكوتين بكميات تتجاوز المسموح به في الطيران. لا توجد قيود خاصة على حيازة الفيب للاستخدام الشخصي ضمن الحدود المعقولة.</div>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- ═══ RELATED POSTS ═══ -->
<section class="related-section">
  <div class="container">
    <h2 style="font-family: 'Tajawal', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--white); text-align: center; margin-bottom: 8px;">مقالات ذات صلة</h2>
    <p style="color: var(--muted); text-align: center; margin-bottom: 8px;">اقرأ المزيد عن عالم الفيب في السعودية</p>
    <div class="related-grid">
      <a href="https://saudivapes.com/ar/blog/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AD%D8%A8%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D9%85%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9/a-1903716375" class="related-card">
        <div class="tag-label">📖 دليل شامل</div>
        <h3>أفضل سحبة جاهزة استخدام مرة واحدة في السعودية</h3>
        <p>دليل شامل لأفضل السحبات الجاهزة المتوفرة في السوق السعودي — مقارنة بين الماركات، عدد النفثات، ونصائح الشراء.</p>
        <div class="read-more">اقرأ المقال ←</div>
      </a>
      <a href="https://saudivapes.com/ar/blog/%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%B4%D9%8A%D8%B4%D8%A9-%D9%81%D9%8A%D8%A8/a-1874613695" class="related-card">
        <div class="tag-label">🆚 مقارنة</div>
        <h3>مقارنة بين أنواع الشيشة فيب</h3>
        <p>دليل مقارنة تفصيلي بين أنواع أجهزة الشيشة الإلكترونية — أجهزة البود، المود، والسحبات الجاهزة وأيّها يناسب احتياجك.</p>
        <div class="read-more">اقرأ المقال ←</div>
      </a>
    </div>
  </div>
</section>

<!-- ═══ BOTTOM CTA ═══ -->
<section class="bottom-cta">
  <h2>تسوق منتجات الفيب الأصلية</h2>
  <p>أكثر من 5,800 منتج — شحن لكل مدن المملكة — دفع آمن</p>
  <a href="https://saudivapes.com/ar" class="btn-primary">🛒 تسوق الآن</a>
</section>

<!-- ═══ FOOTER ═══ -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="https://saudivapes.com/ar" class="nav-logo" style="font-size:1.5rem;">Saudi <span>Vape</span></a>
      <p>متجر متخصص في الفيب والشيشة الالكترونية والنكهات الأصلية. نوفر توصيلاً سريعاً لجميع مدن المملكة مع ضمان الأصالة وخدمة ما بعد البيع.</p>
    </div>
    <div class="footer-col">
      <h4>المنتجات</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858">سحبات جاهزة</a></li>
        <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة الفيب</a></li>
        <li><a href="https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545">نكهات فيب</a></li>
        <li><a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">شيشة الكترونية</a></li>
        <li><a href="https://saudivapes.com/ar/ملحقات-accessories/c532207655">ملحقات وكويلات</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>المتجر</h4>
      <ul>
        <li><a href="https://saudivapes.com/ar/من-نحن">عن المتجر</a></li>
        <li><a href="https://saudivapes.com/ar">ضمان الأصالة</a></li>
        <li><a href="https://saudivapes.com/ar">الشحن والتوصيل</a></li>
        <li><a href="https://wa.me/966542906276">تواصل معنا</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Saudi Vape — جميع الحقوق محفوظة</span>
    <span>الرياض، المملكة العربية السعودية</span>
  </div>
</footer>

<script>
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
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
