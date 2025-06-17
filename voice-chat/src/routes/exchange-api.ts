import express from 'express';
import { exchangeApiService } from '../services/exchange-api';

const router = express.Router();

// Get available symbols for an exchange
router.get('/symbols', async (req, res) => {
  try {
    const { exchange } = req.query;
    
    if (!exchange || typeof exchange !== 'string') {
      return res.status(400).json({ error: 'Exchange parameter is required' });
    }

    const symbols = await exchangeApiService.getSymbols(exchange);
    res.json({ symbols });
  } catch (error) {
    console.error('Error fetching symbols:', error);
    res.status(500).json({ error: 'Failed to fetch symbols' });
  }
});

// Get current price for a symbol on an exchange
router.get('/price', async (req, res) => {
  try {
    const { exchange, symbol } = req.query;
    
    if (!exchange || typeof exchange !== 'string') {
      return res.status(400).json({ error: 'Exchange parameter is required' });
    }
    
    if (!symbol || typeof symbol !== 'string') {
      return res.status(400).json({ error: 'Symbol parameter is required' });
    }

    const price = await exchangeApiService.getPrice(exchange, symbol);
    res.json(price);
  } catch (error) {
    console.error('Error fetching price:', error);
    res.status(500).json({ error: 'Failed to fetch price' });
  }
});

export default router; 