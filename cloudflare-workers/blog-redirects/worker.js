// blog-redirects Worker — handles /ar/blog/* traffic + sitemap + admin + CMS auth
//
// Responsibilities:
// 1. Redirect old Salla blog URLs to new clean slugs
// 2. GitHub OAuth proxy for Decap CMS admin login
// 3. Proxy remaining requests (blog, sitemap, admin) to Astro Pages

const PAGES_URL = 'https://master.astro-blog-aav.pages.dev';

const GITHUB_OAUTH = 'https://github.com/login/oauth';

const SLUG_MAP = {
  'الشيشة-الكترونية-دليل-شامل-لأنواع-ومميزات-أفضل-الأجهزة': 'الشيشة-الكترونية-دليل-شامل',
  'افضل-شيشة-الكترونية-لعام-2025-قائمة-أفضل-7-أجهزة-في-السعودية': 'افضل-شيشة-الكترونية-2025',
  'أفضل-سحبة-سيجارة-في-2025': 'أفضل-سحبة-سيجارة-2025',
  'أفضل-سحبة-جاهزة-استخدام-مرة-واحدة-في-السعودية': 'أفضل-سحبة-جاهزة-في-السعودية',
};

function redirect(location, status = 301) {
  return new Response(null, {
    status,
    headers: {
      Location: location,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleAuth(url, env) {
  // POST /auth — exchange code for access token (Decap CMS popup flow)
  const code = url.searchParams.get('code');
  if (!code) {
    return jsonResponse({ error: 'Missing code' }, 400);
  }

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return jsonResponse({ error: 'missing_github_oauth_env' }, 500);
  }

  const tokenResponse = await fetch(`${GITHUB_OAUTH}/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await tokenResponse.json();

  if (data.access_token) {
    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Authorizing...</title></head>
<body><p>Authorization successful. This window will close automatically.</p>
<script>
(function() {
  function receiveMessage(e) {
    if (e.data === 'authorizing:cms' && e.source && e.source.postMessage) {
      e.source.postMessage('authorization:cms:success:${data.access_token}', e.origin);
      window.close();
    }
  }
  window.addEventListener('message', receiveMessage, false);
  if (window.opener) {
    window.opener.postMessage('authorizing:cms', '*');
  }
})();
<\/script></body></html>`;
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  return jsonResponse({ error: 'token_exchange_failed', details: data }, 400);
}

async function handleAuthCallback(url) {
  const code = url.searchParams.get('code');
  if (!code) {
    return jsonResponse({ error: 'Missing code' }, 400);
  }

  // Redirect to the /ar/admin/auth handler with the code
  const authUrl = new URL(url);
  authUrl.pathname = '/ar/admin/auth';
  return redirect(authUrl.toString(), 302);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    // --- /blog-vape/ and /ar/blog-vape redirect to Arabic blog ---
    if (path === '/blog-vape' || path.startsWith('/blog-vape/') ||
        path === '/ar/blog-vape' || path.startsWith('/ar/blog-vape/')) {
      return redirect('https://saudivapes.com/ar/blog');
    }

    // --- Blog redirects ---

    // 1. Handle old Salla tag URLs: /ar/blog/{tag-name}/tag-{numeric-id}
    const sallaTagPattern = /^\/ar\/blog\/([^\/]+)\/tag-\d+(\/.*)?$/;
    const sallaTagMatch = path.match(sallaTagPattern);
    if (sallaTagMatch) {
      const tagName = sallaTagMatch[1];
      return redirect(`https://saudivapes.com/ar/blog/tag/${encodeURIComponent(tagName)}`);
    }

    // 3. Handle old Salla blog URLs: /ar/blog/{old-slug}/a-{numeric-id}
    const sallaPattern = /^\/ar\/blog\/([^\/]+)\/a-\d+(\/.*)?$/;
    const sallaMatch = path.match(sallaPattern);
    if (sallaMatch) {
      const oldSlug = sallaMatch[1];
      const newSlug = SLUG_MAP[oldSlug] || oldSlug;
      return redirect(`https://saudivapes.com/ar/blog/${newSlug}`);
    }

    // --- CMS Auth (under /ar/admin/auth to share the existing /ar/admin/* route) ---

    // 4a. GET /ar/admin/auth — redirect to GitHub OAuth authorization
    if (path === '/ar/admin/auth' && request.method === 'GET') {
      const clientId = env.GITHUB_CLIENT_ID;
      if (!clientId) return jsonResponse({ error: 'missing_github_client_id' }, 500);

      const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: 'https://saudivapes.com/ar/admin/auth/callback',
        scope: url.searchParams.get('scope') || 'repo,user',
        state: url.searchParams.get('state') || 'cms-auth',
      });
      return Response.redirect(`${GITHUB_OAUTH}/authorize?${params}`, 302);
    }

    // 4b. POST /ar/admin/auth — exchange authorization code for token (Decap CMS popup flow)
    if (path === '/ar/admin/auth' && request.method === 'POST') {
      return handleAuth(url, env);
    }

    // 4c. GET /ar/admin/auth/callback — GitHub redirects here after authorization
    if (path === '/ar/admin/auth/callback') {
      return handleAuthCallback(url);
    }

    // 5. Proxy to Cloudflare Pages deployment (blog, sitemap, admin, etc.)
    const pagesUrl = `${PAGES_URL}${url.pathname}${url.search}`;
    let response = await fetch(pagesUrl, {
      method: request.method,
      headers: request.headers,
      redirect: 'manual',
    });

    // Handle Pages directory redirects internally (e.g., /ar/blog → /ar/blog/ auto-redirect)
    if (response.status >= 301 && response.status <= 303) {
      const location = new URL(response.headers.get('Location'), pagesUrl);
      response = await fetch(location, {
        method: request.method,
        headers: request.headers,
        redirect: 'manual',
      });
    }

    const newHeaders = new Headers(response.headers);
    newHeaders.delete('x-robots-tag');
    if (!newHeaders.has('Access-Control-Allow-Origin')) {
      newHeaders.set('Access-Control-Allow-Origin', '*');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
