# Personal Finance Risk Dashboard

A Next.js app that showcases risk profiles for Savings, Bonds, Index Funds, and Crypto, with Tailwind and shadcn-style UI components.

## Features

- 📊 **Risk Analysis** - View detailed risk profiles for 4 investment products
- 📈 **Projected Returns** - Calculate potential returns with interactive time horizon slider
- 🎨 **Polished UI** - Modern fintech design with Tailwind CSS + shadcn/ui
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Responsive** - Optimized for mobile, tablet, and desktop

## Getting Started

1) Install dependencies:

```bash
npm install
```

2) Run the development server:

```bash
npm run dev
```

3) Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui inspired (Button, Card, Badge, Slider)
- **Icons**: Radix UI
- **Theme**: Custom dark/light mode with localStorage persistence
- **TypeScript**: Full type safety

## Project Structure

```
app/
├── page.tsx                 # Overview page
├── savings/page.tsx         # Savings product page
├── bonds/page.tsx           # Bonds product page
├── index-funds/page.tsx     # Index Funds product page
├── crypto/page.tsx          # Crypto product page
└── layout.tsx               # Root layout with theme provider

components/
├── product-risk-page.tsx    # Reusable product page component
├── theme-provider.tsx       # Theme context provider
├── theme-toggle.tsx         # Dark/light mode toggle button
└── ui/                      # UI component library
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
