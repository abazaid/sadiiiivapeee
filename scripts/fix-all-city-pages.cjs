const fs = require('fs');
const path = require('path');

const workersDir = 'C:/xampp/htdocs/saudivape/cloudflare-workers';

const cityConfigs = [
  {
    dir: 'riyadh-vape-landing',
    city: 'الرياض',
    cityUrl: 'متجر-فيب-الرياض',
    cityEn: 'Riyadh',
    lat: 24.7136,
    lng: 46.6753,
    deliveryAreas: ['جميع أحياء الرياض']
  },
  {
    dir: 'jeddah-vape-landing',
    city: 'جدة',
    cityUrl: 'متجر-فيب-جدة',
    cityEn: 'Jeddah',
    lat: 21.4858,
    lng: 39.1925,
    deliveryAreas: ['جميع أحياء جدة']
  },
  {
    dir: 'eastern-vape-landing',
    city: 'الشرقية',
    cityUrl: 'متجر-فيب-الشرقية',
    cityEn: 'Eastern Province',
    lat: 26.4207,
    lng: 50.0888,
    deliveryAreas: ['المنطقة الشرقية']
  },
  {
    dir: 'makkah-vape-landing',
    city: 'مكة',
    cityUrl: 'متجر-فيب-مكة',
    cityEn: 'Makkah',
    lat: 21.3891,
    lng: 39.8579,
    deliveryAreas: ['جميع أحياء مكة']
  },
  {
    dir: 'madinah-vape-landing',
    city: 'المدينة المنورة',
    cityUrl: 'متجر-فيب-المدينة-المنورة',
    cityEn: 'Madinah',
    lat: 24.5247,
    lng: 39.5692,
    deliveryAreas: ['جميع أحياء المدينة المنورة']
  },
  {
    dir: 'qurayyat-vape-landing',
    city: 'القريات',
    cityUrl: 'متجر-فيب-القريات',
    cityEn: 'Qurayyat',
    lat: 31.3318,
    lng: 37.3428,
    deliveryAreas: ['القريات']
  }
];

function encodeUrlPath(str) {
  return str.split('/').map(s => encodeURIComponent(s)).join('/');
}

for (const config of cityConfigs) {
  const templatePath = path.join(workersDir, config.dir, 'template.html');
  let html = fs.readFileSync(templatePath, 'utf8');

  // 1. Add hreflang tags after canonical
  const encodedUrl = encodeUrlPath(config.cityUrl);
  const canonical = `<link rel="canonical" href="https://saudivapes.com/ar/${config.cityUrl}" />`;
  const hreflangBlock = `${canonical}
  <link rel="alternate" hreflang="ar" href="https://saudivapes.com/ar/${encodedUrl}" />
  <link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar/${encodedUrl}" />
  <meta name="datePublished" content="2026-01-15T10:00:00+03:00" />
  <meta name="dateModified" content="2026-04-25T10:00:00+03:00" />`;

  if (html.includes(canonical)) {
    html = html.replace(canonical, hreflangBlock);
  }

  // 2. Fix Store → LocalBusiness + Store
  const storePattern = `"@type": "Store"`;
  const localBusiness = `"@type": ["LocalBusiness", "Store"]`;
  if (html.includes(storePattern)) {
    html = html.replace(storePattern, localBusiness);
  }

  // 3. Fix url to point to specific page
  const oldUrl = `"url": "https://saudivapes.com"`;
  const newUrl = `"url": "https://saudivapes.com/ar/${encodedUrl}"`;
  if (html.includes(oldUrl)) {
    html = html.replace(oldUrl, newUrl);
  }

  // 4. Add geo coordinates after address (before areaServed)
  const geoBlock = `    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ${config.lat},
      "longitude": ${config.lng}
    },`;
  const areaServedPattern = `    "areaServed": {`;
  if (html.includes(areaServedPattern) && !html.includes('"geo"')) {
    html = html.replace(areaServedPattern, `${geoBlock}\n    ${areaServedPattern}`);
  }

  // 5. Fix sameAs to include WhatsApp
  const sameAsEnd = `"https://x.com/saudivapes"`;
  const sameAsFixed = `"https://x.com/saudivapes",
    "https://wa.me/966542906276"`;
  if (html.includes(sameAsEnd) && !html.includes('wa.me')) {
    html = html.replace(sameAsEnd, sameAsFixed);
  }

  // 6. Change 48 hours to 7 days in return policy FAQ
  html = html.replace(/48 ساعة/g, '7 أيام');

  // 7. Add Person schema before closing </head>
  const personSchema = `
  <!-- JSON-LD Schema: Person (Author) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://saudivapes.com/#person",
    "name": "SAIF",
    "url": "https://saudivapes.com/ar/blog/author/1210468642",
    "jobTitle": "محرر محتوى متخصص في منتجات الفيب",
    "worksFor": {
      "@id": "https://saudivapes.com/#organization"
    },
    "knowsAbout": [
      "Vaping products",
      "Electronic shisha devices",
      "Nicotine salts",
      "Disposable vapes",
      "Vape flavors and e-liquids",
      "Vape coils and pods",
      "Saudi Arabia vaping regulations"
    ],
    "sameAs": [
      "https://www.instagram.com/saudivapes/"
    ]
  }
  </script>

  <!-- JSON-LD Schema: AggregateRating -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://saudivapes.com/#store",
    "name": "فيب السعودية - متجر ${config.city}",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1500",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  </script>

  <!-- JSON-LD Schema: SpeakableSpecification -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://saudivapes.com/ar/${encodedUrl}",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".prose-wrap",
        ".guide-text",
        ".faq-answer",
        ".compare-section"
      ]
    }
  }
  </script>`;

  if (!html.includes('"@type": "Person"')) {
    html = html.replace('</head>', `${personSchema}\n</head>`);
  }

  // 8. Add author credit at bottom before closing body
  const authorCredit = `
  <!-- Author credit -->
  <p style="text-align: center; color: #666; font-size: 0.85rem; padding: 20px; margin-top: 20px; border-top: 1px solid #eee;">
    هذا المحتوى كتب بواسطة <strong>فريق التحرير</strong> في فيب السعودية — آخر تحديث: 25 أبريل 2026
  </p>`;

  if (!html.includes('فريق التحرير')) {
    html = html.replace('</body>', `${authorCredit}\n</body>`);
  }

  // Write updated template
  fs.writeFileSync(templatePath, html, 'utf8');

  // Regenerate worker.js matching the existing CF Worker pattern (atob + TextDecoder, no Buffer)
  const htmlBase64 = Buffer.from(html, 'utf8').toString('base64');
  const canonicalPath = `/ar/${config.cityUrl}`;
  const legacyPath = `/${config.cityUrl}`;

  const workerJs = `const HTML_BASE64 = "${htmlBase64}";
const CANONICAL_PATH = "/ar/${config.cityUrl}";
const LEGACY_PATH = "/${config.cityUrl}";

function decodeBase64Utf8(base64Text) {
  const bin = atob(base64Text);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

const HTML = decodeBase64Utf8(HTML_BASE64);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === LEGACY_PATH || path === \`\${LEGACY_PATH}/\`) {
      const to = new URL(url.toString());
      to.pathname = encodeURI(CANONICAL_PATH);
      return Response.redirect(to.toString(), 301);
    }

    if (path === CANONICAL_PATH || path === \`\${CANONICAL_PATH}/\`) {
      return new Response(HTML, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    return fetch(request);
  },
};
`;

  const workerPath = path.join(workersDir, config.dir, 'worker.js');
  fs.writeFileSync(workerPath, workerJs, 'utf8');

  const templateSizeKB = Math.round(html.length / 1024);
  const workerSizeKB = Math.round(Buffer.byteLength(workerJs, 'utf8') / 1024);
  console.log(`✓ ${config.dir}: template=${templateSizeKB}KB, worker=${workerSizeKB}KB`);
}

console.log('\nDone! All city pages updated.');
