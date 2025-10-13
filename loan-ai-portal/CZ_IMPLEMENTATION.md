# Czech Republic (CZ) Section - Implementation Guide

## Overview

The Czech Republic section (`/cz`) provides localized loan comparison services for Czech customers. It includes regional guides, city-specific pages, and an AI-powered loan application system.

## Structure

### Main Pages

1. **CZ Hub** (`/cz/page.tsx`)
   - Main landing page for Czech customers
   - Overview of all 14 Czech regions
   - Links to regional guides and cities
   - FAQ section with structured data
   - AI-powered loan matching form

2. **Apply Page** (`/cz/zadost/page.tsx`)
   - Czech loan application page
   - Embedded Volsor loan form (iframe)
   - Comprehensive FAQ and benefit sections
   - Optimized for conversions

### Regional Pages

Currently implemented regions (4 out of 14):
- Praha (Prague) - `/cz/regions/praha`
- Středočeský kraj - `/cz/regions/stredocesky`
- Jihočeský kraj - `/cz/regions/jihocesky`
- Plzeňský kraj - `/cz/regions/plzensky`

Each region page includes:
- Regional overview and statistics
- Licensed lenders
- City guides
- Local regulations
- Contact information

### City Pages

Dynamic city pages available for:
- Praha districts (Praha 1-22)
- Jihočeský cities (České Budějovice, Tábor, Písek, etc.)
- Středočeský cities (Kladno, Mladá Boleslav, Příbram, etc.)
- Plzeňský cities (Plzeň, Klatovy, Tachov, etc.)

City pages are generated dynamically using the pattern:
`/cz/regions/{region-code}/{city-slug}`

## Data Files

All region and city data is stored in `/src/data/`:
- `cz-regions.ts` - Master list of all 14 regions
- `cz-prague.ts` - Prague region and district data
- `cz-jihocesky.ts` - Jihočeský region and city data
- `cz-stredocesky.ts` - Středočeský region and city data
- `cz-plzensky.ts` - Plzeňský region and city data

## Remaining Work

### Regions Not Yet Implemented (10)

The following regions have data in `cz-regions.ts` but no dedicated pages yet:

1. **Karlovarský kraj** (karlovarsky)
   - Capital: Karlovy Vary
   - Featured cities: Karlovy Vary, Cheb, Sokolov

2. **Ústecký kraj** (ustecky)
   - Capital: Ústí nad Labem
   - Featured cities: Ústí nad Labem, Most, Děčín

3. **Liberecký kraj** (liberecky)
   - Capital: Liberec
   - Featured cities: Liberec, Jablonec nad Nisou, Česká Lípa

4. **Královéhradecký kraj** (kralovehradecky)
   - Capital: Hradec Králové
   - Featured cities: Hradec Králové, Trutnov, Náchod

5. **Pardubický kraj** (pardubicky)
   - Capital: Pardubice
   - Featured cities: Pardubice, Chrudim, Svitavy

6. **Kraj Vysočina** (vysocina)
   - Capital: Jihlava
   - Featured cities: Jihlava, Třebíč, Havlíčkův Brod

7. **Jihomoravský kraj** (jihomoravsky)
   - Capital: Brno
   - Featured cities: Brno, Znojmo, Hodonín

8. **Olomoucký kraj** (olomoucky)
   - Capital: Olomouc
   - Featured cities: Olomouc, Přerov, Šumperk

9. **Zlínský kraj** (zlinsky)
   - Capital: Zlín
   - Featured cities: Zlín, Uherské Hradiště, Vsetín

10. **Moravskoslezský kraj** (moravskoslezsky)
    - Capital: Ostrava
    - Featured cities: Ostrava, Opava, Frýdek-Místek

### How to Add a New Region

To implement a new region:

1. Create data file: `/src/data/cz-{region-code}.ts`
   - Use `cz-plzensky.ts` as a template
   - Define region content and city seeds
   - Export city content array and helper functions

2. Create region page: `/src/app/cz/regions/{region-code}/page.tsx`
   - Copy from existing region page
   - Update imports to use new data file
   - Adjust affiliate IDs and campaign names

3. Create city dynamic route: `/src/app/cz/regions/{region-code}/[city]/page.tsx`
   - Copy from existing region's city page
   - Update imports to use new city data

4. Update published regions in `/src/app/cz/page.tsx`:
   ```typescript
   const publishedRegionSlugs = new Set([
     'praha', 'stredocesky', 'jihocesky', 'plzensky',
     'your-new-region' // Add here
   ])
   ```

5. Add to sitemap in `/src/app/sitemap.ts`:
   ```typescript
   import { yourRegionCityContent } from '@/data/cz-your-region'
   
   // Add to czCityUrls array
   ...yourRegionCityContent.map(city => ({
     url: `${baseUrl}/cz/regions/your-region/${city.slug}`,
     lastModified: twoWeeksAgo,
     changeFrequency: 'weekly' as const,
     priority: 0.7,
   }))
   ```

## SEO Optimizations

The CZ section includes comprehensive SEO features:

### Structured Data
- Organization schema (locale: 'cs')
- FAQ schema on hub and apply pages
- Breadcrumb schema on all pages
- City and region-specific structured data

### Meta Tags
- Optimized titles and descriptions in Czech
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs

### Sitemap
All CZ pages are included in `sitemap.xml`:
- Hub page: `/cz`
- Apply page: `/cz/zadost`
- All region pages
- All city pages (Praha districts, regional cities)

### Robots.txt
- AI crawlers (GPTBot, Claude, etc.) have full access
- No crawl delays for premium search engines
- Proper disallow rules for admin/private areas

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for accessibility and AI comprehension
- Role attributes for lists and navigation
- Semantic sections and articles

## Localization

### Footer
The Czech footer (`locale="cs"`) includes:
- Czech regions and cities (not USA)
- Localized company information
- ČNB compliance information
- Czech legal disclosures

Translation data: `/src/data/translations.ts` (cs locale)

### Navigation
Czech navigation includes:
- Proper Czech labels
- Links to Czech regional pages
- Apply button links to `/cz/zadost`

### Content
All content is in Czech (cs_CZ):
- Professional financial terminology
- ČNB regulatory references
- RPSN (Annual Percentage Rate) terminology
- Czech legal requirements

## Volsor Integration

The apply page and regional pages use Volsor embedded forms:

```typescript
<VolsorLoanForm
  product="personal"
  country="cs"
  affiliate={9000}  // Base CZ affiliate ID
  campaign="cz-apply-page"
  partnerName="Volsor"
  theme="old_styled"
/>
```

Different regions use different affiliate IDs:
- General CZ: 9000
- Středočeský: 9200
- Jihočeský: 9300
- Plzeňský: 9400

## Testing

Before deploying changes:

1. **Build test**: Ensure all pages build without errors
   ```bash
   npm run build
   ```

2. **Link check**: Verify all internal links work
   - Region cards on hub page
   - City links on region pages
   - Footer links

3. **SEO validation**: Check structured data
   - Use Google Rich Results Test
   - Validate FAQ schema
   - Check breadcrumb markup

4. **Mobile responsiveness**: Test on various devices

## Performance Considerations

- Lazy load Volsor scripts
- Optimize images with `next/image`
- Static generation where possible
- Minimize JavaScript bundle size
- Use incremental static regeneration for city pages

## Compliance

All CZ pages must comply with:
- Czech consumer credit law (zákon č. 257/2016 Sb.)
- ČNB (Czech National Bank) regulations
- GDPR requirements
- Lead generation disclosure requirements

## Future Enhancements

Potential improvements:
1. Add all 10 remaining regions
2. Create more city pages (currently ~150, potential for 700+)
3. Add Czech blog content
4. Implement user reviews and ratings
5. Add comparison tables with live RPSN data
6. Create Czech-language AI chat widget
7. Add mortgage (hypotéky) section
8. Implement business loan (podnikatelské úvěry) section
