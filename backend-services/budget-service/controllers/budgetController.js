const db = require('../config/db');

// Get all budgets
exports.getAllBudgets = (req, res) => {
  db.query('SELECT * FROM budgets', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

// Get a budget by ID
exports.getBudgetById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM budgets WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.json(results[0]);
  });
};

// Add a new budget
exports.addBudget = (req, res) => {
  const { user_id, amount, category, start_date, end_date } = req.body;
  if (!user_id || !amount || !category || !start_date || !end_date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.query(
    'INSERT INTO budgets (user_id, amount, category, start_date, end_date) VALUES (?, ?, ?, ?, ?)',
    [user_id, amount, category, start_date, end_date],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Budget added successfully', budgetId: results.insertId });
    }
  );
};

// Update a budget by ID
exports.updateBudget = (req, res) => {
  const { id } = req.params;
  const { amount, category, start_date, end_date } = req.body;

  db.query(
    'UPDATE budgets SET amount = ?, category = ?, start_date = ?, end_date = ? WHERE id = ?',
    [amount, category, start_date, end_date, id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Budget updated successfully' });
    }
  );
};

// Delete a budget by ID
exports.deleteBudget = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM budgets WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Budget deleted successfully' });
  });
};
