# Tradely Voice Trading Bot

A high-performance, voice-operated trading bot that uses the bland.ai platform to facilitate Over-the-Counter (OTC) digital asset trades. This system simulates an interaction with an OTC desk, where users can place orders through a voice conversation.

## Features

- Voice-operated trading interface
- Real-time exchange data integration
- Interactive conversation flow
- Support for multiple exchanges (OKX, Bybit, Deribit, Binance)
- Real-time market price updates
- Order simulation and confirmation
- Modern, neon-themed UI with dynamic 3D background

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **3D Graphics**: Three.js
- **Styling**: Tailwind CSS, CSS Modules
- **Voice Integration**: Bland.ai API
- **Exchange APIs**: OKX, Bybit, Deribit, Binance
- **Authentication**: Supabase Auth

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/theperiperi/tradely.git
   cd tradely
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   BLAND_AI_API_KEY=your_bland_ai_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tradely/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
└── package.json       # Project dependencies
```

## Features in Detail

### Voice Trading Interface
- Start/Stop conversation with the trading bot
- Real-time voice interaction
- Natural conversation flow
- Order placement simulation

### Exchange Integration
- Support for multiple exchanges:
  - OKX
  - Bybit
  - Deribit
  - Binance
- Real-time symbol list fetching
- Current market price updates
- Order simulation

### Conversation Flow
1. Exchange Selection
2. Symbol Identification
3. Price Presentation
4. Order Placement
5. Order Confirmation

### Modern UI
- Dynamic 3D wireframe background using Three.js
- Neon-themed design elements
- Responsive layout for all screen sizes
- Smooth animations and transitions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Blandly for voice agent
- Three.js for 3D graphics
- Next.js team for the amazing framework

