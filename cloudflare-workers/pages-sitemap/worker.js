const URLS = [
  "https://saudivapes.com/فيب",
  "https://saudivapes.com/vct",
  "https://saudivapes.com/ar/nasty",
  "https://saudivapes.com/فيب-السعودية",
  "https://saudivapes.com/ksavape",
  "https://saudivapes.com/taste-burnt",
  "https://saudivapes.com/best-vape-store-ksa",
  "https://saudivapes.com/ar/متجر-فيب-الرياض",
  "https://saudivapes.com/ar/متجر-فيب-القريات",
  "https://saudivapes.com/ar/متجر-فيب-جدة",
  "https://saudivapes.com/ar/متجر-فيب-الشرقية",
  "https://saudivapes.com/ar/متجر-فيب-مكة",
  "https://saudivapes.com/ar/متجر-فيب-المدينة-المنورة",
  "https://saudivapes.com/ar/شراء-فيب-السعودية",
  "https://saudivapes.com/ar/about-saudi-vape",
  "https://saudivapes.com/ar/editorial-policy",
  "https://saudivapes.com/ar/blog/author/1210468642",
  "https://saudivapes.com/ar/%D9%85%D8%AA%D8%AC%D8%B1-%D9%81%D9%8A%D8%A8-%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%A1"
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const items = URLS.map((url) => {
    return [
      "  <url>",
      `    <loc>${escapeXml(url)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "    <changefreq>weekly</changefreq>",
      "    <priority>0.8</priority>",
      "  </url>",
    ].join("\n");
  }).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    items,
    '</urlset>'
  ].join("\n");
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "");

    if (path === "/ar/sitemaps/pages.xml") {
      return new Response(buildSitemap(), {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=1800",
        },
      });
    }

    return fetch(request);
  },
};
