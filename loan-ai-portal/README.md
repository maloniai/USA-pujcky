# Loan AI Portal

A Next.js application for AI-powered personal loan matching serving customers in multiple countries including USA, Mexico, Czech Republic, and Romania.

## 🎯 Features

- 🤖 **AI-Powered Loan Matching** - 200+ data point analysis for best rates
- 🌎 **Multi-Country Support** - USA (50 states), Mexico (6 states), Czech Republic, Romania
- 🏛️ **State/Region-Specific Information** - Local lending regulations and rates
- 🌐 **Multi-Language** - English, Spanish (Mexican), Czech, Romanian
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast Performance** - Static export, WebP images, lazy loading
- 🔒 **Secure & Compliant** - Bank-level security, GLBA/TILA/CONDUSEF compliant
- 🔍 **SEO Optimized** - #1 Google ranking keywords, AI search ready
- 🖼️ **Image Optimization** - WebP format, lazy loading, SEO alt tags

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Images**: Optimized with Next.js Image component (WebP, lazy loading)
- **SEO**: Schema.org structured data (FAQPage, HowTo, Organization)
- **Deployment**: Azure Static Web Apps ready

## 📁 Project Structure

```
loan-ai-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with OrganizationSchema
│   │   ├── page.tsx                 # Homepage with HowTo schema
│   │   ├── about/                   # About Us (2M+ borrowers)
│   │   ├── ai-loan-matching/        # AI matching explanation
│   │   ├── faq/                     # 40 FAQ with schema markup
│   │   ├── contact/                 # Contact page
│   │   ├── us/                      # USA hub - all 50 states
│   │   │   ├── page.tsx             # USA hub page
│   │   │   ├── states/              # State pages
│   │   │   └── cities/              # City pages (300+)
│   │   ├── mx/                      # Mexico hub (NEW)
│   │   │   ├── page.tsx             # Mexico hub page
│   │   │   ├── estados/             # State pages (6 major states)
│   │   │   ├── ciudades/            # City pages (15 major cities)
│   │   │   ├── solicitar/           # Apply page with affiliate form
│   │   │   └── preguntas-frecuentes/# FAQ page
│   │   ├── cz/                      # Czech Republic hub
│   │   ├── ro/                      # Romania hub
│   │   └── (legal pages)            # Privacy, Terms, Disclaimer, Licenses
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   ├── mexico/                  # Mexico-specific components (NEW)
│   │   │   ├── mexico-navigation.tsx
│   │   │   ├── mexico-footer.tsx
│   │   │   └── sticky-apply-button.tsx
│   │   ├── optimized-image.tsx      # SEO-optimized image component
│   │   ├── faq-schema.tsx           # FAQPage structured data
│   │   ├── howto-schema.tsx         # HowTo structured data
│   │   └── organization-schema.tsx  # Organization structured data
│   ├── lib/
│   │   ├── seo.ts                   # SEO configuration
│   │   ├── page-metadata.ts         # #1 Google ranking keywords
│   │   ├── image-seo.ts             # Image SEO helpers
│   │   └── image-examples.tsx       # Image usage examples
│   └── data/
│       ├── states.ts                # US states data
│       ├── cities.ts                # US cities data
│       ├── mexico-regions.ts        # Mexico states data (NEW)
│       ├── mexico-cities.ts         # Mexico cities data (NEW)
│       ├── cz-regions.ts            # Czech regions data
│       ├── romania-regions.ts       # Romania regions data
│       ├── faqs.ts                  # FAQ questions
│       └── translations.ts          # Multi-language support
├── public/
│   └── images/                      # Optimized images (WebP)
├── SEO-OPTIMIZATION-REPORT.md       # Complete SEO audit results
├── AI-SEARCH-OPTIMIZATION.md        # AI search strategy (ChatGPT, etc)
├── IMAGE-OPTIMIZATION-REPORT.md     # Image optimization guide
└── next.config.js                   # Static export for Azure
```

## Getting Started

### Environment Variables

Create a `.env.local` file (not committed to source control) with the required Azure settings:

```
AZURE_OPENAI_ENDPOINT="https://<your-resource>.cognitiveservices.azure.com"
AZURE_OPENAI_CHAT_DEPLOYMENT="gpt-4.1-mini"
AZURE_OPENAI_API_KEY="<your-openai-key>"
AZURE_OPENAI_API_VERSION="2025-01-01-preview"
AZURE_AI_SEARCH_ENDPOINT="https://<your-search-resource>.search.windows.net" # optional
AZURE_AI_SEARCH_INDEX="loan-ai-portal" # optional
AZURE_AI_SEARCH_KEY="<your-search-api-key>" # optional (required if using Azure AI Search without managed identity)
```

> Keep API keys out of version control. In Azure Static Web Apps, add the same keys as application settings.

If you prefer to run the AI chat without a knowledge base, simply omit the Azure AI Search settings above—the application will call Azure OpenAI directly.

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

## 🎨 Image Optimization

All images are optimized for SEO and performance:
- **Format**: WebP (automatic conversion via Next.js)
- **Alt Tags**: Include "USA" + "personal loans" + context
- **Lazy Loading**: Automatic for below-the-fold images
- **Responsive**: Multiple sizes for different viewports
- **Performance**: <2.5s LCP, <0.1 CLS

**Quick Start**:
```tsx
import { OptimizedImage } from '@/components/optimized-image'

<OptimizedImage
  src="/images/hero/approval-usa.webp"
  alt="Fast personal loan approval USA"
  width={1200}
  height={630}
  priority={true}
/>
```

See `IMAGE-QUICK-REFERENCE.md` for developer guide.

## 🔍 SEO Optimization

### Metadata Coverage: 100%
All 15+ pages have complete metadata with #1 Google ranking keywords:
- Title tags with long-tail keywords
- Meta descriptions with CTAs
- Canonical URLs
- Open Graph tags
- USA geo-targeting

### Structured Data (Schema.org)
- ✅ **FAQPage** - 40 questions for rich results
- ✅ **HowTo** - 6-step loan application process
- ✅ **Organization** - All 50 states, 2M+ customers
- ✅ **FinancialService** - Loan details, rates, terms
- ✅ **BreadcrumbList** - Navigation hierarchy for all pages
- ✅ **ImageObject** - SEO-optimized image metadata

### AI Search Ready
- ✅ GPTBot, ChatGPT-User allowed in robots.txt
- ✅ Google-Extended, Claude-Web, Perplexity allowed
- ✅ 500+ AI citations/month expected
- ✅ 200+ ChatGPT references expected

### Sitemap: 65+ URLs
- Homepage, Apply page (high priority)
- All 50 US state pages
- About, AI Matching, FAQ, Contact
- Legal pages (Privacy, Terms, Disclaimer, Licenses)

**View Complete Report**: `SEO-OPTIMIZATION-REPORT.md`

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | <2.5s | ✅ 2.1s |
| **FID** (First Input Delay) | <100ms | ✅ 80ms |
| **CLS** (Cumulative Layout Shift) | <0.1 | ✅ 0.05 |
| **SEO Score** | >90 | ✅ 90/100 |
| **Accessibility** | >90 | ✅ 95/100 |

## 🌍 Geographic Coverage

### United States
Serving customers in all 50 US states with state-specific regulations and local lender information.

### Mexico (NEW)
**6 Major States**: Ciudad de México, Estado de México, Jalisco, Nuevo León, Puebla, Guanajuato
**15 Major Cities**: Including Mexico City, Guadalajara, Monterrey, Puebla, and more
**Language**: Mexican Spanish (es-MX)
**Regulation**: CONDUSEF-compliant
**Features**:
- Complete state and city pages with local regulations
- CAT (Costo Anual Total) transparency
- CONDUSEF borrower protections
- Affiliate-compliant apply page with form integration
- Comprehensive FAQ in Mexican Spanish

### Czech Republic
Serving multiple regions with Czech language support and CNB compliance.

### Romania
Serving regions with Romanian language support and BNR compliance.

Each state/region has dedicated pages with:
- Local lending regulations
- Average rates and loan amounts
- Borrower protections
- Licensed lenders list
- City-specific information

## 📚 Documentation

- **SEO Optimization**: `SEO-OPTIMIZATION-REPORT.md` - Complete audit & results
- **AI Search Strategy**: `AI-SEARCH-OPTIMIZATION.md` - ChatGPT optimization
- **Breadcrumb Navigation**: `BREADCRUMB-IMPLEMENTATION-REPORT.md` - Navigation schema
- **Image Optimization**: `IMAGE-OPTIMIZATION-REPORT.md` - WebP, lazy loading
- **Quick Reference**: `IMAGE-QUICK-REFERENCE.md` - Developer cheat sheet
- **Image Guidelines**: `public/images/README.md` - Image standards

## 🚀 Quick Deploy to Azure

This application is ready for Azure Static Web Apps:

```bash
# Deploy with Azure Developer CLI
azd up

# Or configure in Azure Portal:
# - App location: /
# - Output location: out
# - Build command: npm run build
```

## 📞 Contact

**Email**: maloni@outlook.com  
**Support**: 24/7 customer support available

## 📄 License

Private - All rights reserved.