# Loan AI Portal

A Next.js application for AI-powered loan services with multi-language support and state-specific information.

## Features

- 🤖 AI-powered loan matching
- 🌍 Multi-country support (USA, Canada, Czech Republic, and expanding to 40+ countries)
- 🗺️ Global landing page for easy country selection
- 🏛️ State/Province-specific loan information
- 📱 Responsive design
- ⚡ Fast, modern UI with Tailwind CSS
- 🔒 Secure and compliant
- 🌐 Multi-language support

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
│   │   ├── global/
│   │   │   └── page.tsx        # Global country selector page
│   │   ├── usa/
│   │   │   └── page.tsx        # USA country page
│   │   ├── ca/
│   │   │   └── page.tsx        # Canada country page
│   │   ├── cz/
│   │   │   └── page.tsx        # Czech Republic country page
│   │   ├── states/
│   │   │   └── page.tsx        # States listing
│   │   └── es/                 # Spanish language routes
│   │       ├── layout.tsx      # Spanish layout
│   │       └── page.tsx        # Spanish homepage
│   ├── components/
│   │   └── ui/                 # Reusable UI components
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts            # Utility functions
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

## Multi-Country & Multi-Language Support

### Country Pages

The application supports multiple countries, each with their own dedicated page:

- **Global Page**: `/global` - Main landing page listing all available countries
- **USA**: `/usa` - United States loan services (all 50 states)
- **Canada**: `/ca` - Canadian loan services (all provinces and territories)
- **Czech Republic**: `/cz` - Czech loan services (all regions, in Czech language)

**Expanding to 40+ countries** including UK, Germany, France, Spain, Italy, and more.

### Language Support

- **English**: `/` (default), `/usa`, `/ca`
- **Spanish**: `/es/*`
- **Czech**: `/cz`
- **French**: `/ca/fr` (planned for Canada)

Additional languages can be added by creating new route folders under `src/app/`.

### Navigation

- All country pages include a "Back to All Countries" link to the global page
- The main homepage includes a prominent "🌍 View All Countries" button
- Each country page is SEO-optimized with proper metadata

## License

Private - All rights reserved.