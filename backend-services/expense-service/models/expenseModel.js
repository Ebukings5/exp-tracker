const db = require('../config/db');

// Get All Expenses
exports.getAllExpenses = (callback) => {
  db.query('SELECT * FROM expenses', callback);
};

// Get Expense by ID
exports.getExpenseById = (id, callback) => {
  db.query('SELECT * FROM expenses WHERE id = ?', [id], callback);
};

// Add New Expense
exports.addExpense = (expense, callback) => {
  db.query('INSERT INTO expenses SET ?', expense, callback);
};

// Update Expense
exports.updateExpense = (id, expense, callback) => {
  db.query('UPDATE expenses SET ? WHERE id = ?', [expense, id], callback);
};

// Delete Expense
exports.deleteExpense = (id, callback) => {
  db.query('DELETE FROM expenses WHERE id = ?', [id], callback);
};