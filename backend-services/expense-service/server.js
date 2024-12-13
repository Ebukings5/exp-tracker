const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const expenseRoutes = require('./routes/expenses');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5006;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/expenses', expenseRoutes);

// Start endpoint
app.get('/', (req, res) => {
  res.send('Expense Service is up and running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Expense Service running on http://localhost:${PORT}`);
});
