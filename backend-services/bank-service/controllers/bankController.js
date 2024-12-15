// /bank-service/controllers/bankController.js
const db = require('../config/db');
const paystack = require('../services/paystack');
const admin = require('../config/firebase');

// Create a transaction record in the database
const createTransaction = (req, res) => {
  const { user_id, amount, description } = req.body;

  const query = `INSERT INTO transactions (user_id, amount, description) VALUES (?, ?, ?)`;
  db.query(query, [user_id, amount, description], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Transaction created', transaction_id: results.insertId });
  });
};

// Initiate payment using Paystack
const initiatePayment = (req, res) => {
  const { email, amount } = req.body;

  paystack.initiatePayment(email, amount)
    .then((response) => {
      res.status(200).json({ message: 'Payment initiated', data: response });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error initiating payment' });
    });
};

// Verify payment after successful transaction
const verifyPayment = (req, res) => {
  const { reference } = req.body;

  paystack.verifyPayment(reference)
    .then((response) => {
      res.status(200).json({ message: 'Payment verified', data: response });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error verifying payment' });
    });
};

// Push notification to Firebase
const sendNotification = (message) => {
  const payload = {
    notification: {
      title: 'Bank Service Notification',
      body: message,
    },
  };

  admin.messaging().sendToTopic('bank_service', payload)
    .then((response) => {
      console.log('Notification sent successfully', response);
    })
    .catch((error) => {
      console.error('Error sending notification', error);
    });
};

module.exports = { createTransaction, initiatePayment, verifyPayment, sendNotification };
