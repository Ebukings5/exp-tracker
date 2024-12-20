const db = require('../utils/db');

exports.getBanks = (req, res) => {
  db.query('SELECT * FROM banks', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch banks' });
    }
    res.json(results);
  });
};