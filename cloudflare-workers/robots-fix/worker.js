export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "saudivapes.com" && url.pathname === "/robots.txt") {
      return Response.redirect("https://saudivapes.com/ar/robots.txt", 301);
    }

    if (url.hostname === "saudivapes.com" && url.pathname === "/robots.txt/") {
      return Response.redirect("https://saudivapes.com/ar/robots.txt", 301);
    }

    return new Response("Not Found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  },
};
