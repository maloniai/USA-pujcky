# Loan AI Portal

A Next.js application for AI-powered loan services with multi-language support and state-specific information.

## Features

- 🤖 AI-powered loan matching
- 🌍 Multi-language support (English/Spanish/Czech)
- 🏛️ State-specific and region-specific loan information
- 📱 Responsive design
- ⚡ Fast, modern UI with Tailwind CSS
- 🔒 Secure and compliant

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Deployment**: Azure Static Web Apps ready

## Project Structure

```
loan-ai-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # English homepage
│   │   ├── globals.css         # Global styles
│   │   ├── states/
│   │   │   └── page.tsx        # States listing
│   │   ├── es/                 # Spanish language routes
│   │   │   ├── layout.tsx      # Spanish layout
│   │   │   └── page.tsx        # Spanish homepage
│   │   └── cz/                 # Czech language routes
│   │       ├── layout.tsx      # Czech layout
│   │       ├── page.tsx        # Czech homepage
│   │       └── kraje/          # Czech regions
│   │           ├── page.tsx    # Regions listing
│   │           └── liberecky-kraj/  # Liberecký kraj region
│   │               ├── page.tsx     # Region overview
│   │               └── [city]/      # 26 city pages
│   ├── components/
│   │   └── ui/                 # Reusable UI components
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── data/               # Data files
│           └── liberecky-kraj.ts  # City data
├── public/                     # Static assets
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

This creates an optimized production build with static export enabled for Azure Static Web Apps deployment.

## Deployment to Azure

This application is configured for deployment to Azure Static Web Apps with:

- Static export enabled (`output: 'export'` in next.config.js)
- Optimized for Azure hosting
- GitHub Actions workflow ready
- Multi-language routing support

### Quick Deploy

1. Push to GitHub repository
2. Connect to Azure Static Web Apps
3. Configure build settings:
   - **App location**: `/`
   - **Output location**: `out`
   - **Build command**: `npm run build`

## Multi-Language Support

The application supports:
- **English**: `/` (default)
- **Spanish**: `/es/*`
- **Czech**: `/cz/*`
  - Czech Regional Pages: `/cz/kraje/*`
  - Liberecký kraj: `/cz/kraje/liberecky-kraj/*`
  - 26 city pages in Liberecký kraj with SEO-optimized content

Additional languages can be added by creating new route folders under `src/app/`.

## License

Private - All rights reserved.