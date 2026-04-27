const fs = require('fs');
const path = 'C:/xampp/htdocs/saudivape/cloudflare-workers/city-pages/worker-ar-متجر-فيب-الاحساء.js';
let html = fs.readFileSync(path, 'utf8');

// Escape backticks and ${} for template literal
html = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');

const worker = `export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const routes = [
      '/ar/%D9%85%D8%AA%D8%AC%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%A1',
      '/%D9%85%D8%AA%D8%AC%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%A1',
      '/ar/متجر-فيب-الاحساء',
      '/متجر-فيب-الاحساء'
    ];

    if (routes.includes(path) || path.startsWith('/ar/%D9%85%D8%AA%D8%AC%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%A1')) {
      return new Response(\`${html}\`, {
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
`;

const buf = Buffer.from(worker, 'utf8');
fs.writeFileSync('C:/xampp/htdocs/saudivape/cloudflare-workers/ahsa-vape-landing/worker.js', buf);
const sizeKB = Math.round(buf.length / 1024);
console.log('Worker generated: ' + sizeKB + 'KB');

// Validate key schemas
console.log('Store->LocalBusiness: ' + html.includes('["LocalBusiness", "Store"]'));
console.log('Person schema: ' + html.includes('"@type": "Person"'));
console.log('AggregateRating: ' + html.includes('AggregateRating'));
console.log('Speakable: ' + html.includes('SpeakableSpecification'));
console.log('Hreflang tags: ' + html.includes('hreflang="ar"'));
console.log('Date meta: ' + html.includes('datePublished'));
console.log('Return 7 days: ' + html.includes('7 أيام'));
console.log('Author credit: ' + html.includes('فريق التحرير'));
