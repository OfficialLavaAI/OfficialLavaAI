const express = require('express');
const router = express.Router();
const { processAIRequest } = require('../services/aiService');

router.post('/process', async (req, res) => {
  try {
    const data = req.body;
    const response = await processAIRequest(data);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
