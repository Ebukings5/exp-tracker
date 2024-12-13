const express = require('express');
const cors = require('cors');
require('dotenv').config();

const budgetRoutes = require('./routes/budgets');

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/budgets', budgetRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Budget service' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Budget service running on http://localhost:${PORT}`);
});
