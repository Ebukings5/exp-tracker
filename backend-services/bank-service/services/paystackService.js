const axios = require('axios');

const PAYSACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

const paystack = axios.create({
    baseURL: 'https://api.paystack.co',
    headers: {
        Authorization: `Bearer ${PAYSACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
    },
});

module.exports = paystack;