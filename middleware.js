// Password gate for /wsp (the WSP qualifications page and its maps).
// Nothing under /wsp is served until the visitor enters WSP_PASSWORD.
// Fails closed: if WSP_PASSWORD is unset, the page stays locked.

export const config = { matcher: ['/wsp', '/wsp/:path*'] };

const COOKIE = 'wsp_access';
const MONTH = 60 * 60 * 24 * 30;

async function token(password) {
  const data = new TextEncoder().encode(`dus-wsp:${password}`);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(hash))).replace(/[+/=]/g, '');
}

function readCookie(request) {
  const m = (request.headers.get('cookie') || '').match(/(?:^|;\s*)wsp_access=([^;]+)/);
  return m ? m[1] : null;
}

function same(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function loginPage(error) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>WSP Qualifications Response</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap">
<style>
*{box-sizing:border-box}
html,body{margin:0;min-height:100%}
body{min-height:100vh;display:grid;place-items:center;padding:24px 16px;font:400 16px/1.5 "Lato","Helvetica Neue",Arial,sans-serif;color:#fff;
  background-color:#015270;
  background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px),radial-gradient(ellipse 60% 42% at 18% 104%,rgba(65,190,72,.16),transparent 70%),linear-gradient(142deg,#026687 0%,#015270 34%,#033349 66%,#071C26 100%);
  background-size:32px 32px,32px 32px,100% 100%,100% 100%}
main{width:100%;max-width:380px;display:grid;gap:20px}
img{height:44px;width:auto}
h1{margin:0;font:900 1.6rem/1.15 "Lato",sans-serif}
p{margin:0;color:rgba(255,255,255,.72)}
form{display:grid;gap:12px}
label{font:700 .78rem/1 "Lato",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72)}
input{width:100%;padding:12px 14px;border:1px solid rgba(255,255,255,.3);border-radius:6px;background:#fff;color:#2B2B2B;font:inherit}
input:focus-visible,button:focus-visible{outline:2px solid #41BE48;outline-offset:2px}
button{padding:12px 16px;border:0;border-radius:6px;background:#41BE48;color:#fff;font:700 1rem "Lato",sans-serif;cursor:pointer}
.err{color:#fff;background:rgba(0,0,0,.25);padding:10px 12px;border-radius:6px}
</style></head><body><main>
<img src="/dus-brand/assets/dus-logo-white.png" alt="Dudley Utility Services" width="725" height="278">
<div><h1>WSP Qualifications Response</h1><p>Enter the password you were given to view this document.</p></div>
${error ? '<p class="err" role="alert">That password didn&rsquo;t match. Please try again.</p>' : ''}
<form method="post" action="/wsp">
<label for="pw">Password</label>
<input id="pw" name="password" type="password" autocomplete="current-password" required autofocus>
<button type="submit">View document</button>
</form>
</main></body></html>`;
  return new Response(html, {
    status: error ? 401 : 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export default async function middleware(request) {
  const password = process.env.WSP_PASSWORD;
  if (!password) return loginPage(false);
  const expected = await token(password);

  if (request.method === 'POST') {
    const form = await request.formData().catch(() => null);
    const given = form ? String(form.get('password') || '') : '';
    if (!same(await token(given), expected)) return loginPage(true);
    return new Response(null, {
      status: 303,
      headers: {
        location: '/wsp',
        'set-cookie': `${COOKIE}=${expected}; Path=/wsp; Max-Age=${MONTH}; HttpOnly; Secure; SameSite=Lax`,
        'cache-control': 'no-store',
      },
    });
  }

  const have = readCookie(request);
  if (have && same(have, expected)) {
    return new Response(null, { headers: { 'x-middleware-next': '1' } });
  }
  return loginPage(false);
}
