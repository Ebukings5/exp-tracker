// /bank-service/routes/bankRoutes.js
const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Route to create a new transaction
router.post('/transactions', bankController.createTransaction);

// Route to initiate payment
router.post('/pay', bankController.initiatePayment);

// Route to verify payment
router.post('/verify', bankController.verifyPayment);

module.exports = router;
