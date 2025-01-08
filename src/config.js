require('dotenv').config();

module.exports = {
  solanaRpcUrl: process.env.SOLANA_RPC_URL,
  walletPrivateKey: process.env.WALLET_PRIVATE_KEY,
  port: process.env.PORT || 3000,
};
