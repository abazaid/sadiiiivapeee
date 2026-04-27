// CMS Auth Worker — GitHub OAuth proxy for Decap CMS
// Handles /auth and /auth/* for the admin panel login flow

const GITHUB_OAUTH = 'https://github.com/login/oauth';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // GET /auth — redirect to GitHub for authorization
    if (path === '/auth' && request.method === 'GET') {
      const redirectUri = `https://saudivapes.com/auth/callback`;
      const clientId = env.GITHUB_CLIENT_ID;
      if (!clientId) return new Response('Missing GITHUB_CLIENT_ID', { status: 500 });

      const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: 'repo,user',
        state: url.searchParams.get('state') || 'cms-auth',
      });
      return Response.redirect(`${GITHUB_OAUTH}/authorize?${params}`, 302);
    }

    // GET /auth/callback — exchange code for token, return HTML to Decap CMS
    if (path === '/auth/callback' && request.method === 'GET') {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');

      if (!code) {
        return new Response('Missing code parameter', { status: 400 });
      }

      // Exchange code for access token
      const clientId = env.GITHUB_CLIENT_ID;
      const clientSecret = env.GITHUB_CLIENT_SECRET;
      if (!clientId || !clientSecret) {
        return new Response('Missing GitHub OAuth environment variables', { status: 500 });
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
          state,
        }),
      });

      const tokenData = await tokenResponse.json();
      const token = tokenData.access_token;

      if (!token) {
        return new Response(
          `Failed to get token: ${JSON.stringify(tokenData)}`,
          { status: 400 },
        );
      }

      // Return HTML page that sends token back to Decap CMS via postMessage
      const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authorizing...</title>
</head>
<body>
  <p>Authorization successful. This window will close automatically.</p>
  <script>
    (function() {
      function receiveMessage(e) {
        if (e.data === 'authorizing:cms' && e.source && e.source.postMessage) {
          e.source.postMessage('authorization:cms:success:${token}', e.origin);
          window.close();
        }
      }
      window.addEventListener('message', receiveMessage, false);
      if (window.opener) {
        window.opener.postMessage('authorizing:cms', '*');
      }
    })();
  </script>
</body>
</html>`;

      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
