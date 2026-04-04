// pages/api/about.js
// REST API: GET /api/about  →  returns all about-us content from MySQL

import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const [statsRows]      = await pool.execute('SELECT * FROM about_stats ORDER BY sort_order ASC');
    const [valuesRows]     = await pool.execute('SELECT * FROM about_values ORDER BY sort_order ASC');
    const [timelineRows]   = await pool.execute('SELECT * FROM about_timeline ORDER BY year ASC');
    const [leaderRows]     = await pool.execute('SELECT * FROM about_leadership ORDER BY sort_order ASC');
    const [certRows]       = await pool.execute('SELECT * FROM about_certifications ORDER BY sort_order ASC');
    const [contentRows]    = await pool.execute('SELECT * FROM about_content LIMIT 1');

    return res.status(200).json({
      content:       contentRows[0] || {},
      stats:         statsRows,
      values:        valuesRows,
      timeline:      timelineRows,
      leadership:    leaderRows,
      certifications: certRows,
    });
  } catch (err) {
    console.error('DB Error:', err);
    return res.status(500).json({ error: 'Failed to fetch about us data' });
  }
}
