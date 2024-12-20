const express = require('express');
const { getBanks } = require('../controllers/bankController');
const { listBanks } = require('../controllers/paystackController');

const router = express.Router();

router.get('/', getBanks);
router.get('/paystack', listBanks);

module.exports = router;
