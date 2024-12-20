const paystack = require('../services/paystackService');

exports.listBanks = async (req, res) => {
  try {
    const response = await paystack.get('/bank');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banks from Paystack' });
  }
};
