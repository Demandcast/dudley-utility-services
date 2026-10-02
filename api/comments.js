const { neon } = require('@neondatabase/serverless');
const { getSession, readJson } = require('./_lib');
const { notifyComment } = require('./_notify');

const sql = neon(process.env.DATABASE_URL);

module.exports = async (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(401).json({ error: 'sign in' });

  if (req.method === 'GET') {
    const page = String(req.query.page || '');
    if (!page) return res.status(400).json({ error: 'page required' });
    const rows = await sql`
      SELECT id, page, email, quote, prefix, suffix, body, resolved, created_at
      FROM review_comments WHERE page = ${page} ORDER BY created_at ASC`;
    return res.status(200).json({ comments: rows, me: session.email });
  }

  if (req.method === 'POST') {
    const { page, quote, prefix, suffix, body } = await readJson(req);
    if (!page || !body || String(body).length > 5000) return res.status(400).json({ error: 'bad input' });
    const rows = await sql`
      INSERT INTO review_comments (page, email, quote, prefix, suffix, body)
      VALUES (${page}, ${session.email}, ${quote || null}, ${prefix || null}, ${suffix || null}, ${body})
      RETURNING id, page, email, quote, prefix, suffix, body, resolved, created_at`;
    await notifyComment(req, rows[0]);
    return res.status(200).json({ comment: rows[0] });
  }

  if (req.method === 'PATCH') {
    const { id, resolved } = await readJson(req);
    if (!id) return res.status(400).json({ error: 'id required' });
    await sql`UPDATE review_comments SET resolved = ${Boolean(resolved)} WHERE id = ${id}`;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'DELETE') {
    const { id } = await readJson(req);
    if (!id) return res.status(400).json({ error: 'id required' });
    await sql`DELETE FROM review_comments WHERE id = ${id} AND email = ${session.email}`;
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'method' });
};
