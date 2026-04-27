export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    if (path === "/blog-vape" || path.startsWith("/blog-vape/")) {
      const location = `https://saudivapes.com/ar${url.search}`;
      return new Response(null, {
        status: 301,
        headers: {
          Location: location,
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    return fetch(request);
  },
};
