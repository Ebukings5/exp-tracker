const express = require('express');
const router = express.Router();
const {
  getAllExpenses,
  getExpenseById,
  addExpense,
  updateExpense,
  deleteExpense,
} = require('../controllers/expensesController');

// Get all expenses
router.get('/', getAllExpenses);

// Get expense by ID
router.get('/:id', getExpenseById);

// Add a new expense
router.post('/', addExpense);

// Update an expense by ID
router.put('/:id', updateExpense);

// Delete an expense by ID
router.delete('/:id', deleteExpense);

module.exports = router;