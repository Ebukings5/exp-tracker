// /bank-service/services/paystack.js
const Paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);

// Function to make a payment request
const initiatePayment = (email, amount) => {
  return new Promise((resolve, reject) => {
    const payload = {
      email,
      amount: amount * 100,  // Paystack expects the amount in kobo (100 kobo = 1 Naira)
    };

    Paystack.transaction.initialize(payload, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

// Verify the payment after the transaction
const verifyPayment = (reference) => {
  return new Promise((resolve, reject) => {
    Paystack.transaction.verify(reference, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = { initiatePayment, verifyPayment };
