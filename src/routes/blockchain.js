const express = require('express');
const router = express.Router();
const { interactWithBlockchain } = require('../services/blockchainService');

router.post('/interact', async (req, res) => {
  try {
    const data = req.body;
    const response = await interactWithBlockchain(data);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
