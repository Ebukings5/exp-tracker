const Expense = require('../models/expenseModel');

// Get all expenses
exports.getAllExpenses = (req, res) => {
  Expense.getAllExpenses((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get expense by ID
exports.getExpenseById = (req, res) => {
  Expense.getExpenseById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Expense not found' });
    res.json(results[0]);
  });
};

// Add new expense
exports.addExpense = (req, res) => {
  const newExpense = req.body;
  Expense.addExpense(newExpense, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, ...newExpense });
  });
};

// Update expense
exports.updateExpense = (req, res) => {
  const updatedExpense = req.body;
  Expense.updateExpense(req.params.id, updatedExpense, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Expense updated successfully' });
  });
};

// Delete expense
exports.deleteExpense = (req, res) => {
  Expense.deleteExpense(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Expense deleted successfully' });
  });
};