# New Zealand Hub Implementation Guide

## 🎯 Overview

Complete guide to implementing the New Zealand loan comparison hub with SEO optimization, following the US hub structure.

---

## ✅ Completed Files

1. **`/src/data/nz-regions.ts`** ✅
   - 16 NZ regions with population data
   - 75+ featured cities across all regions
   - Helper functions for data access

2. **`/src/data/nz-translations.ts`** ✅
   - CCCFA 2003 regulations
   - Commerce Commission guidelines  
   - Region-specific FAQs (Auckland, Wellington, Christchurch)
   - NZ lender information
   - Disclosure and warning text in NZD

---

## 📋 Remaining Implementation Tasks

### 1. SEO Metadata (HIGH PRIORITY)

**File:** `/src/lib/seo.ts`

Add NZ hub SEO configuration:

```typescript
export const nzHubSEO = {
  title: 'Compare Personal Loans NZ 2025 – AI-Powered',
  description: 'Compare 20+ licensed NZ lenders. CCCFA-compliant rates from 7.95% p.a. Instant online approval for personal loans NZD 2,000-70,000. Auckland, Wellington, Christchurch.',
  keywords: 'personal loans nz, nz loans, new zealand loans, harmoney, lending crowd, bad credit loans nz'
}

export function generateNZCityMetadata(city: string, region: string, year: number = 2025) {
  return {
    title: `Loans in ${city}, ${region} – Compare ${year}`,
    description: `Compare personal loans in ${city}, ${region}. Licensed NZ lenders from 7.95% p.a. Fast online approval. CCCFA-compliant. Apply today.`,
    keywords: `loans ${city}, personal loans ${city}, ${city} ${region} loans, loans near me`
  }
}

export function generateNZRegionMetadata(region: string, year: number = 2025) {
  return {
    title: `${region} Personal Loans – Compare Rates ${year}`,
    description: `Compare personal loan rates in ${region}. 15+ licensed lenders. CCCFA-compliant. Online approval. Rates from 7.95% p.a.`,
    keywords: `${region} loans, personal loans ${region}, ${region} lenders`
  }
}
```

### 2. NZ Hub Homepage

**File:** `/src/app/nz/page.tsx`

**Structure:**
- Hero section with NZ flag, title "Compare Personal Loans in New Zealand"
- Stats: 16 regions, 75+ cities, 20+ lenders, CCCFA-compliant
- Apply form (RoundSky widget or custom)
- Regulation summary (CCCFA 2003, Commerce Commission)
- Featured regions grid (Auckland, Wellington, Canterbury, Waikato, Bay of Plenty, Otago)
- How it works section
- Loan types (Personal, Debt Consolidation, Car, Bad Credit, Medical, Home Improvement)
- Featured lenders (Harmoney, ANZ, ASB, Lending Crowd, Finance Direct)
- FAQ section (5-6 questions)
- CTA: "Find Your Loan" sticky button
- Disclosure block
- JSON-LD: Organization, FAQPage, FinancialService

**SEO Focus:**
- Title: "Compare Personal Loans NZ 2025 – AI-Powered | Loan Platform"
- H1: "Compare Personal Loans in New Zealand"
- Meta: 150 chars with "CCCFA-compliant", "from 7.95% p.a.", "Auckland, Wellington"
- Internal links: All 16 regions, Apply page, About
- Image alt tags: "New Zealand personal loans comparison"

### 3. NZ Apply Page

**File:** `/src/app/nz/apply/page.tsx`

**Structure:**
- Title: "Apply for a Personal Loan in New Zealand"
- Apply form (integrated with RoundSky or partner)
- "Why Apply Through Us" section
- CCCFA responsible lending notice
- Representative example in NZD
- Security badges (SSL, FSPR registered partners)
- FAQ: How long does approval take? What documents needed?
- Sticky "Complete Application" button
- Disclosure: affiliate earnings, licensed lenders only

**SEO:**
- Title: "Apply for Personal Loan NZ – Fast Online Approval 2025"
- H1: "Apply for Your Personal Loan"
- Schema: FinancialService, HowTo

### 4. Regions Index Page

**File:** `/src/app/nz/regions/page.tsx`

**Structure:**
- Title: "Personal Loans by Region in New Zealand"
- Interactive map or grid of all 16 regions
- Each region card shows:
  - Region name + capital
  - Population
  - Average income
  - Number of cities covered
  - Link to region page
- Search/filter functionality
- Internal links to all region pages
- FAQ: Why does region matter? Are rates different by region?

**SEO:**
- Title: "NZ Personal Loans by Region – 16 Regions Covered"
- H1: "Personal Loans by Region"
- Internal links: All 16 regions

### 5. Region Detail Pages

**File:** `/src/app/nz/regions/[region]/page.tsx`

**Dynamic route for 16 regions**

**Structure per region:**
- Breadcrumb: Home > NZ > Regions > [Region Name]
- H1: "Personal Loans in [Region Name]"
- Intro paragraph (80-120 words):
  - Region overview
  - Economic profile
  - Typical loan uses in this region
  - Major cities covered
- Stats box:
  - Population
  - Average income
  - Number of cities
  - Featured lenders serving the region
- Regulation section:
  - CCCFA compliance
  - Commerce Commission protections
  - Regional economic considerations
- Cities in this region:
  - Grid of all cities with links
  - "Loans in [City]" for each
- Featured lenders:
  - 3-5 lenders with presence in region
  - Rates, loan ranges, features
- FAQ section (3-5 Q&As specific to region)
- CTA: "Compare Loans in [Region]" button
- Internal links:
  - Up: Back to all regions
  - Lateral: Nearby regions
  - Down: All cities in this region
- Disclosure block
- JSON-LD: BreadcrumbList, FAQPage, FinancialService

**Example for Auckland:**
```
Title: Auckland Personal Loans – Compare Rates 2025
H1: Personal Loans in Auckland
Intro: Auckland is New Zealand's largest city with 1.7 million residents and the nation's economic hub. Personal loans in Auckland range from NZD 2,000 to NZD 70,000 with rates starting at 7.95% p.a. Auckland borrowers typically apply for debt consolidation, home improvements, or medical expenses. Higher living costs mean lenders conduct strict affordability assessments under CCCFA requirements.

Stats:
- Population: 1.7M
- Average Income: NZD 85,000
- Cities: 6 (Auckland CBD, North Shore, Manukau, Waitakere, Papakura, Franklin)
- Lenders: 20+ (All major banks plus online lenders)

Cities: [Links to 6 city pages]

FAQ:
Q: Are loan requirements stricter in Auckland?
A: Lending criteria are nationwide under CCCFA, but Auckland's higher cost of living means lenders assess affordability more carefully...
```

### 6. Cities Index Page

**File:** `/src/app/nz/cities/page.tsx`

**Structure:**
- Title: "Personal Loans by City in New Zealand"
- Search bar: "Find loans in your city"
- Alphabetical list of all 75+ cities
- Group by region or alphabetically
- Popular cities highlighted (Auckland, Wellington, Christchurch, Hamilton, Tauranga, Dunedin)
- FAQ: How does my city affect my loan? Same rates nationwide?

**SEO:**
- Title: "NZ Personal Loans by City – 75+ Cities Covered"
- H1: "Personal Loans by City"
- Internal links: All cities

### 7. City Detail Pages

**File:** `/src/app/nz/cities/[region]/[city]/page.tsx`

**Dynamic route for 75+ cities**

**Structure per city:**
- Breadcrumb: Home > NZ > Regions > [Region] > [City]
- Title: "Loans in [City], [Region] – Compare 2025" (≤60 chars)
- H1: "Loans in [City], [Region]"
- Meta description (120-155 chars): "Compare personal loans in [City], [Region]. Licensed NZ lenders from 7.95% p.a. Fast approval. CCCFA-compliant. Apply today."

- Intro paragraph (80-120 words) - UNIQUE per city:
  - City population/characteristics
  - Common loan uses in this city
  - Local economic context
  - Typical loan ranges
  - Example: "Tauranga is New Zealand's 5th largest city with 158,000 residents in the Bay of Plenty region. As a retirement destination and horticultural center, personal loans in Tauranga typically range from NZD 5,000 to NZD 50,000. Common purposes include home improvements, car loans, and medical expenses. Tauranga borrowers benefit from competitive rates starting at 7.95% p.a. from licensed lenders compliant with CCCFA regulations."

- Local regulations (5-8 bullets):
  - CCCFA 2003 responsible lending requirements
  - Commerce Commission consumer protections
  - 5-day cooling-off period
  - Affordability assessment required
  - Full fee disclosure mandatory
  - Hardship provisions available
  - Licensed lenders only (FSPR registered)
  - Credit bureau checks (Centrix, Equifax, illion)

- How to apply section:
  - 1. Complete online form (3 minutes)
  - 2. Receive instant decision
  - 3. Verify identity (RealMe or documents)
  - 4. Sign contract electronically
  - 5. Receive funds (1-2 business days)

- Loan options in [City]:
  - Personal loans: NZD 2,000 - NZD 70,000
  - Debt consolidation: From 8.95% p.a.
  - Car loans: From 6.95% p.a.
  - Bad credit loans: Available from 19.95% p.a.

- FAQ (3-5 Q&A) - City/region-specific where possible:
  - Q: What credit score do I need for a loan in [City]?
  - Q: How quickly can I get a loan in [City]?
  - Q: Which lenders serve [City]?
  - Q: Are there local [City] lenders?
  - Q: What documents do I need?

- Lenders serving [City]:
  - List 5-8 lenders with presence in the region
  - Include: Name, loan range, rates, features
  - "Apply Now" button for each

- Internal links:
  - **Up**: "Back to [Region] Loans"
  - **Lateral**: "Loans near you" with 3-6 nearby cities
  - **Related**: "Compare All NZ Loans", "Apply for a Loan"

- Disclosure block:
  - Affiliate disclosure
  - Representative example (NZD)
  - Warning about borrowing costs
  - Links to: Commerce Commission, Sorted.org.nz, MoneyTalks

- Sticky "Apply Now" button (fixed bottom on mobile, sidebar on desktop)

- JSON-LD Schema:
  - FinancialService
  - FAQPage
  - BreadcrumbList
  - OfferCatalog (list of loan products)

**Example for Christchurch:**
```
Title: Loans in Christchurch, Canterbury – Compare 2025
Meta: Compare personal loans in Christchurch, Canterbury. Licensed NZ lenders from 7.95% p.a. Fast online approval. CCCFA-compliant. Apply today.

H1: Loans in Christchurch, Canterbury

Intro: Christchurch is New Zealand's third-largest city with 380,000 residents, serving as the South Island's economic hub. Following the 2011 earthquake rebuild, personal loans in Christchurch are commonly used for home improvements, renovations, and debt consolidation. Loan amounts typically range from NZD 5,000 to NZD 50,000 with rates starting at 7.95% p.a. Christchurch's lower cost of living compared to Auckland can improve affordability assessments under CCCFA regulations.

[Continue with structure above...]

Nearby Cities:
- Timaru (130 km south)
- Ashburton (85 km south)
- Rangiora (30 km north)
- Kaiapoi (20 km north)
- Rolleston (20 km west)
```

### 8. NZ Layout

**File:** `/src/app/nz/layout.tsx`

**Structure:**
- NZ-specific navigation:
  - Logo + "New Zealand" indicator
  - Links: Home, Regions, Cities, Apply, About, Contact
  - Language selector (English only for NZ, but prepare for future)
- Sticky header with "Apply Now" CTA
- Main content area
- Footer:
  - About Us
  - Resources (Commerce Commission, FMA, Sorted.org.nz, MoneyTalks)
  - Legal (Privacy, Terms, Disclosures)
  - Social links
  - Copyright + FSPR disclosure
  - Trust badges

### 9. Additional Pages

**Files to create:**

- `/src/app/nz/privacy/page.tsx` - Privacy Policy (NZ-specific, Privacy Act 2020)
- `/src/app/nz/terms/page.tsx` - Terms of Service
- `/src/app/nz/disclosures/page.tsx` - Affiliate disclosures, CCCFA compliance
- `/src/app/nz/about/page.tsx` - About the platform
- `/src/app/nz/contact/page.tsx` - Contact form
- `/src/app/nz/responsible-lending/page.tsx` - CCCFA responsible lending guide

### 10. Update Sitemap

**File:** `/src/app/sitemap-nz.xml/route.ts`

Replace placeholder with full sitemap:

```typescript
import { NextResponse } from 'next/server'
import { nzRegions, getAllNZCities } from '@/data/nz-regions'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()

  let urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- NZ Homepage -->
  <url>
    <loc>${baseUrl}/nz</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- NZ Apply -->
  <url>
    <loc>${baseUrl}/nz/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- NZ Regions Index -->
  <url>
    <loc>${baseUrl}/nz/regions</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- NZ Cities Index -->
  <url>
    <loc>${baseUrl}/nz/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`

  // Add all 16 regions
  nzRegions.forEach(region => {
    urls += `  <url>
    <loc>${baseUrl}/nz/regions/${region.slug}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all cities (75+)
  const allCities = getAllNZCities()
  allCities.forEach(({ city, regionSlug }) => {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')
    urls += `  <url>
    <loc>${baseUrl}/nz/cities/${regionSlug}/${citySlug}</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`
  })

  // Add legal pages
  const legalPages = ['privacy', 'terms', 'disclosures', 'about', 'contact', 'responsible-lending']
  legalPages.forEach(page => {
    urls += `  <url>
    <loc>${baseUrl}/nz/${page}</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
`
  })

  urls += `</urlset>`

  return new NextResponse(urls, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
```

---

## 🎨 Component Requirements

### Sticky Apply Button

Create `/src/components/nz/sticky-apply-button.tsx`:

```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function StickyApplyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-700 p-4 shadow-lg md:bottom-auto md:top-20 md:left-auto md:right-8 md:w-auto md:rounded-lg">
      <Link
        href="/nz/apply"
        className="block w-full text-center px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors md:w-auto"
      >
        Apply Now
      </Link>
    </div>
  )
}
```

### NZ Footer

Create `/src/components/nz/footer.tsx` with:
- Commerce Commission link
- FMA link
- Sorted.org.nz
- MoneyTalks helpline
- FSPR registration notice
- Social links
- Legal links

---

## 📊 Expected URL Structure

After implementation, you'll have approximately **100+ URLs**:

```
/nz                          (Homepage)
/nz/apply                    (Apply page)
/nz/regions                  (16 regions index)
/nz/regions/auckland         (16 region pages)
/nz/regions/wellington
... (14 more)
/nz/cities                   (Cities index)
/nz/cities/auckland/auckland-cbd     (75+ city pages)
/nz/cities/auckland/north-shore
/nz/cities/wellington/wellington
/nz/cities/canterbury/christchurch
... (70+ more)
/nz/privacy
/nz/terms
/nz/disclosures
/nz/about
/nz/contact
/nz/responsible-lending
```

**Total:** ~100 pages for New Zealand hub

---

## ✅ Testing Checklist

Before deployment:

1. **SEO Verification:**
   - [ ] All titles ≤60 characters
   - [ ] All meta descriptions 120-155 characters
   - [ ] H1 tags unique per page
   - [ ] Alt tags on all images
   - [ ] Internal linking complete
   - [ ] Breadcrumbs working
   - [ ] JSON-LD schema on all pages

2. **Content Quality:**
   - [ ] Unique content per city (no duplicates)
   - [ ] NZ-specific regulations accurate
   - [ ] Rates in NZD
   - [ ] Local lender information correct
   - [ ] FAQ answers factual and helpful

3. **Functionality:**
   - [ ] Sticky apply button works
   - [ ] Forms submit correctly
   - [ ] All internal links working
   - [ ] Navigation menus correct
   - [ ] Mobile responsive
   - [ ] Page load speed <3 seconds

4. **Compliance:**
   - [ ] Affiliate disclosure on all pages
   - [ ] Representative example in NZD
   - [ ] CCCFA warnings present
   - [ ] No misleading claims
   - [ ] Licensed lenders only

5. **Build & Deploy:**
   - [ ] `npm run build` completes
   - [ ] Sitemap generates all URLs
   - [ ] No build errors
   - [ ] Deploy to production
   - [ ] Verify all pages live
   - [ ] Submit sitemap to GSC

---

## 📈 SEO Strategy

### Target Keywords:

**Primary:**
- personal loans nz
- loans new zealand
- nz loans
- harmoney
- lending crowd

**Regional:**
- auckland personal loans
- wellington loans
- christchurch loans
- hamilton loans

**Long-tail:**
- personal loans bad credit nz
- debt consolidation nz
- fast loans nz
- online loans new zealand

### Internal Linking Strategy:

1. **Hub → Regions**: Homepage links to all 16 regions
2. **Regions → Cities**: Each region page links to all its cities
3. **Cities → Related**: Each city links to 3-6 nearby cities
4. **Bottom-up**: All pages link back to parent (breadcrumbs)
5. **Lateral**: Related loan types, apply page

### Content Uniqueness:

- **Homepage**: General NZ overview
- **Region pages**: Regional economic context
- **City pages**: Local characteristics, population, common uses

Each city page needs 80-120 words of UNIQUE intro text based on:
- City population
- Economic profile (tourism, agriculture, industry)
- Cost of living
- Common loan purposes
- Local features

---

## 🚀 Deployment Plan

1. Create all files listed above
2. Test locally: `npm run dev`
3. Fix any TypeScript errors
4. Build: `npm run build`
5. Review build output (should see ~100 pages)
6. Deploy: `./scripts/deploy.sh YOUR_TOKEN`
7. Wait 5 minutes for propagation
8. Test production URLs
9. Submit sitemap to Google Search Console
10. Monitor indexing progress

---

## 📝 Documentation Updates Needed

Create `/loan-ai-portal/NZ-HUB-IMPLEMENTATION.md` with:
- Overview of NZ hub
- File structure
- URL patterns
- SEO strategy
- Maintenance notes

---

**Status:** Ready for implementation
**Estimated Time:** 8-12 hours for full implementation
**Pages Created:** ~100 pages
**Total URLs in Sitemap:** ~100 URLs

Let me know when you're ready to proceed with specific sections!
