// Open positions from the Paycor Recruiting ATOM feed.
//
// Dudley Land and DUS share one Paycor Recruiting instance, so the feed
// carries every Dudley job. This endpoint returns only the DUS roles
// (department "Utilities" in Paycor). HR adds, edits, and closes jobs in
// Paycor; the careers page picks the change up within the cache window.
//
// Env overrides (all optional):
//   PAYCOR_FEED_URL    full feed URL; point at services.newtonsoftware.com
//                      to read the Paycor sandbox instead of production
//   PAYCOR_DEPARTMENT  department to keep (default "Utilities")

const CLIENT_ID = '8a7883d08afcf3b0018b676ba35c277e';
const FEED_URL = process.env.PAYCOR_FEED_URL ||
  `https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=${CLIENT_ID}`;
const DEPARTMENT = process.env.PAYCOR_DEPARTMENT || 'Utilities';

function decode(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function tag(entry, name) {
  const m = entry.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]).trim() : '';
}

// Paycor's posting HTML comes from a rich-text editor. Keep structure and
// emphasis, drop attributes, scripts, styles, and empty spacer blocks.
const ALLOWED = new Set(['p', 'div', 'br', 'ul', 'ol', 'li', 'b', 'strong', 'i', 'em', 'u', 'h3', 'h4']);

function sanitize(html) {
  return html
    .replace(/<(script|style|iframe|object)[\s\S]*?<\/\1>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?([a-z0-9]+)[^>]*>/gi, (t, name) => {
      const n = name.toLowerCase();
      if (!ALLOWED.has(n)) return '';
      return t.startsWith('</') ? `</${n}>` : (n === 'br' ? '<br>' : `<${n}>`);
    })
    .replace(/<(div|p)>(\s|&nbsp;| |<br>)*<\/\1>/gi, '')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

function parse(xml) {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  return entries.map((e) => ({
    id: tag(e, 'id'),
    title: tag(e, 'title'),
    department: tag(e, 'newton:department'),
    city: tag(e, 'newton:location'),
    state: tag(e, 'newton:state'),
    remote: tag(e, 'newton:remotetype'),
    published: tag(e, 'published'),
    updated: tag(e, 'updated'),
    body: sanitize(tag(e, 'summary')),
  }));
}

module.exports = async (req, res) => {
  try {
    const r = await fetch(FEED_URL, { headers: { Accept: 'application/atom+xml' } });
    if (!r.ok) throw new Error(`feed ${r.status}`);
    const xml = await r.text();
    if (!xml.includes('<feed')) throw new Error('not an atom feed');
    const jobs = parse(xml)
      .filter((j) => j.department.toLowerCase() === DEPARTMENT.toLowerCase())
      .sort((a, b) => (b.published || '').localeCompare(a.published || ''));
    // Paycor recommends refreshing at least every 5 minutes.
    res.setHeader('Cache-Control', 'public, s-maxage=240, stale-while-revalidate=600');
    return res.status(200).json({ jobs });
  } catch (err) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json({ jobs: [], error: 'feed unavailable' });
  }
};
