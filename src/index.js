const express = require('express');
const config = require('./config');
const aiRoutes = require('./routes/ai');
const blockchainRoutes = require('./routes/blockchain');

const app = express();

app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);
app.use('/api/blockchain', blockchainRoutes);

app.listen(config.port, () => {
  console.log(`LavaAI is running on port ${config.port}`);
});
