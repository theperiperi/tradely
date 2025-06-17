export async function fetchSymbols(exchange: string): Promise<string[]> {
  switch (exchange.toLowerCase()) {
    case "okx": {
      const res = await fetch("https://www.okx.com/api/v5/public/instruments?instType=SPOT");
      const data = await res.json();
      return data.data.map((item: any) => item.instId);
    }
    case "bybit": {
      const res = await fetch("https://api.bybit.com/v5/market/instruments-info?category=spot");
      const data = await res.json();
      return data.result.list.map((item: any) => item.symbol);
    }
    case "deribit": {
      const res = await fetch("https://www.deribit.com/api/v2/public/get_instruments?currency=all&kind=spot");
      const data = await res.json();
      return data.result.map((item: any) => item.instrument_name);
    }
    case "binance": {
      const res = await fetch("https://api.binance.com/api/v3/exchangeInfo");
      const data = await res.json();
      return data.symbols.filter((s: any) => s.status === "TRADING").map((s: any) => s.symbol);
    }
    default:
      throw new Error("Unsupported exchange");
  }
}

export async function fetchCurrentPrice(exchange: string, symbol: string): Promise<number> {
  switch (exchange.toLowerCase()) {
    case "okx": {
      const res = await fetch(`https://www.okx.com/api/v5/market/ticker?instId=${symbol}`);
      const data = await res.json();
      return parseFloat(data.data[0].last);
    }
    case "bybit": {
      const res = await fetch(`https://api.bybit.com/v5/market/tickers?category=spot&symbol=${symbol}`);
      const data = await res.json();
      return parseFloat(data.result.list[0].lastPrice);
    }
    case "deribit": {
      const res = await fetch(`https://www.deribit.com/api/v2/public/ticker?instrument_name=${symbol}`);
      const data = await res.json();
      return parseFloat(data.result.last_price);
    }
    case "binance": {
      const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      const data = await res.json();
      return parseFloat(data.price);
    }
    default:
      throw new Error("Unsupported exchange");
  }
} 