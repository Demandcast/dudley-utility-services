// Emails Jenny when a reviewer leaves a comment, so nobody has to keep
// checking the page. Sends through Resend (https://resend.com).
//
// Env: RESEND_API_KEY (no key = no email; comments still save),
//      NOTIFY_EMAIL (defaults to jenny@demandcast.co),
//      NOTIFY_FROM (defaults to Resend's shared sender, which can only
//      deliver to the Resend account owner's address until a domain is verified).

const esc = (s) =>
  String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

async function notifyComment(req, comment) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const url = req.headers.referer || `https://${host}`;
  const site = host.replace(/^www\./, '');
  const html = `
    <p><strong>${esc(comment.email)}</strong> commented on <a href="${esc(url)}">${esc(url)}</a></p>
    ${comment.quote ? `<blockquote style="border-left:3px solid #ccc;margin:0;padding:4px 12px;color:#555">${esc(comment.quote)}</blockquote>` : ''}
    <p style="white-space:pre-wrap">${esc(comment.body)}</p>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || 'Review comments <onboarding@resend.dev>',
        to: [process.env.NOTIFY_EMAIL || 'jenny@demandcast.co'],
        subject: `New review comment on ${site}`,
        html,
      }),
    });
    if (!res.ok) console.error('notify failed', res.status, await res.text());
  } catch (e) {
    console.error('notify failed', e);
  }
}

module.exports = { notifyComment };
