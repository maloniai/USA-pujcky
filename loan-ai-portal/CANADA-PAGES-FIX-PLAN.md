# Canada Pages Fix Plan

## Problem Summary

Canada pages were using `searchParams.lang` for bilingual support, which is incompatible with Next.js static export (`output: 'export'`).

### Error Message:
```
Route /ca/cities/[region]/[city]/ with `dynamic = "error"` couldn't be rendered 
statically because it used `searchParams.lang`
```

### Root Cause:
In Next.js static export mode, you cannot use dynamic runtime features like `searchParams`. All pages must be pre-rendered at build time.

---

## Recommended Solution: Separate Route Approach

### Architecture:

```
/ca/                          → English Canada hub
/ca/cities/ontario/toronto/   → English city page
/ca/regions/ontario/          → English region page

/fr/canada/                   → French Canada hub
/fr/canada/ontario/toronto/   → French city page
/fr/canada/ontario/           → French region page
```

### Benefits:
1. ✅ Fully static - no dynamic parameters
2. ✅ SEO-friendly - clear language in URL
3. ✅ Google can index both versions separately
4. ✅ Proper hreflang implementation possible
5. ✅ Works with static export

### Implementation Steps:

#### 1. Create English Routes (Keep /ca/)

```typescript
// src/app/ca/page.tsx
export default function CAHubPage() {
  const lang = 'en'
  // ... rest of English content
}

// src/app/ca/cities/[region]/[city]/page.tsx
export default function CACityPage({ params }) {
  const lang = 'en'
  // ... rest of English content
}
```

#### 2. Create French Routes (New /fr/canada/)

```typescript
// src/app/fr/canada/page.tsx
export default function FRCanadaHubPage() {
  const lang = 'fr'
  // ... rest of French content
}

// src/app/fr/canada/[region]/[city]/page.tsx
export default function FRCanadaCityPage({ params }) {
  const lang = 'fr'
  // ... rest of French content
}
```

#### 3. Update Metadata with Alternates

```typescript
// English version (src/app/ca/cities/[region]/[city]/page.tsx)
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Loans in ${cityName}, ${regionName}`,
    description: englishDescription,
    alternates: {
      canonical: `https://loan-platform.com/ca/cities/${params.region}/${params.city}`,
      languages: {
        'en-CA': `https://loan-platform.com/ca/cities/${params.region}/${params.city}`,
        'fr-CA': `https://loan-platform.com/fr/canada/${params.region}/${params.city}`,
      },
    },
  }
}

// French version (src/app/fr/canada/[region]/[city]/page.tsx)
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Prêts à ${cityName}, ${regionName}`,
    description: frenchDescription,
    alternates: {
      canonical: `https://loan-platform.com/fr/canada/${params.region}/${params.city}`,
      languages: {
        'en-CA': `https://loan-platform.com/ca/cities/${params.region}/${params.city}`,
        'fr-CA': `https://loan-platform.com/fr/canada/${params.region}/${params.city}`,
      },
    },
  }
}
```

#### 4. Add Language Switcher Component

```typescript
// src/components/ca/language-switcher.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CALanguageSwitcher({ lang }: { lang: 'en' | 'fr' }) {
  const pathname = usePathname()
  
  // Convert /ca/cities/... to /fr/canada/... and vice versa
  const altPath = lang === 'en' 
    ? pathname.replace('/fr/canada', '/ca')
    : pathname.replace('/ca', '/fr/canada')
  
  return (
    <Link href={altPath} className="language-switch">
      {lang === 'en' ? 'Français' : 'English'}
    </Link>
  )
}
```

#### 5. Update Sitemap

```typescript
// src/app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = []
  
  // Add English Canada pages
  caRegions.forEach(region => {
    urls.push({
      url: `${baseUrl}/ca/regions/${region.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
    
    region.cities.forEach(city => {
      urls.push({
        url: `${baseUrl}/ca/cities/${region.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })
  
  // Add French Canada pages
  caRegions.forEach(region => {
    urls.push({
      url: `${baseUrl}/fr/canada/${region.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
    
    region.cities.forEach(city => {
      urls.push({
        url: `${baseUrl}/fr/canada/${region.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })
  
  return urls
}
```

#### 6. Add Middleware for Auto-Detection (Optional)

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Only handle /ca root
  if (pathname === '/ca') {
    const acceptLanguage = request.headers.get('accept-language') || ''
    
    // If user prefers French, redirect to French version
    if (acceptLanguage.toLowerCase().includes('fr')) {
      return NextResponse.redirect(new URL('/fr/canada', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/ca',
}
```

---

## Alternative Solution: Static Pre-generation of Both Languages

### Architecture:

Generate both language versions as separate static pages:

```
/ca/cities/ontario/toronto/          → English version
/ca/cities/ontario/toronto/index-fr/ → French version (alternative)
```

### Implementation:

```typescript
// src/app/ca/cities/[region]/[city]/page.tsx
export async function generateStaticParams() {
  const params: Array<{ region: string; city: string }> = []
  
  caRegions.forEach(region => {
    region.cities.forEach(city => {
      // Generate English version
      params.push({
        region: region.slug,
        city: city.slug,
      })
    })
  })
  
  return params
}

export default function CACityPage({ params }) {
  // Always English on /ca/ routes
  const lang = 'en'
  
  // Load city data
  const region = getCARegionBySlug(params.region)
  const city = region?.cities.find(c => c.slug === params.city)
  
  return (
    <div>
      {/* Render English content */}
      <h1>Loans in {city.name}, {region.name}</h1>
      {/* ... */}
    </div>
  )
}
```

**Cons**: 
- Doesn't provide proper French URLs
- Poor SEO for French content
- Confusing for users

**Not recommended** - Use separate routes instead.

---

## File Structure

### Current (Removed):
```
src/app/ca/
  ├── page.tsx
  ├── about/page.tsx
  ├── apply/page.tsx
  ├── cities/
  │   ├── page.tsx
  │   └── [region]/[city]/page.tsx
  ├── regions/
  │   ├── page.tsx
  │   └── [region]/page.tsx
  └── ...
```

### Recommended New Structure:
```
src/app/
├── ca/                          # English Canada
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── apply/page.tsx
│   ├── cities/
│   │   ├── page.tsx
│   │   └── [region]/[city]/page.tsx
│   └── regions/
│       ├── page.tsx
│       └── [region]/page.tsx
│
└── fr/
    └── canada/                  # French Canada
        ├── page.tsx
        ├── a-propos/page.tsx
        ├── demande/page.tsx
        ├── villes/
        │   ├── page.tsx
        │   └── [region]/[city]/page.tsx
        └── regions/
            ├── page.tsx
            └── [region]/page.tsx
```

---

## Shared Components & Data

Keep bilingual data in shared files:

```typescript
// src/data/ca-regions.ts
export const caRegions = [
  {
    slug: 'ontario',
    name: 'Ontario',
    nameFr: 'Ontario',
    description: 'Canada\'s most populous province...',
    descriptionFr: 'La province la plus peuplée du Canada...',
    cities: [
      {
        slug: 'toronto',
        name: 'Toronto',
        nameFr: 'Toronto',
        description: 'Major financial hub...',
        descriptionFr: 'Principal centre financier...',
      },
      // ...
    ],
  },
  // ...
]
```

---

## Implementation Checklist

### Phase 1: English Routes (Keep /ca/)
- [ ] Remove searchParams from all /ca/ pages
- [ ] Set lang = 'en' hardcoded
- [ ] Update metadata to include alternates
- [ ] Test build completes successfully

### Phase 2: French Routes (Create /fr/canada/)
- [ ] Create /fr/canada/ directory structure
- [ ] Copy page structures from /ca/
- [ ] Set lang = 'fr' hardcoded
- [ ] Use French slug names where appropriate
- [ ] Update metadata with alternates

### Phase 3: Components
- [ ] Create shared CABreadcrumbs component
- [ ] Create CALanguageSwitcher component
- [ ] Create CADisclosureBlock component
- [ ] Create CANearbyCities component
- [ ] Ensure all accept lang prop

### Phase 4: SEO
- [ ] Update sitemap.ts with both routes
- [ ] Verify hreflang tags in metadata
- [ ] Add canonical URLs
- [ ] Test with Google Rich Results tool

### Phase 5: Testing
- [ ] Build completes without errors
- [ ] All pages render correctly
- [ ] Language switcher works
- [ ] Breadcrumbs show correct language
- [ ] Metadata includes alternates
- [ ] Sitemap includes all URLs

### Phase 6: Deploy
- [ ] Run build
- [ ] Verify output in /out/
- [ ] Deploy to Azure
- [ ] Test production URLs
- [ ] Submit to Google Search Console

---

## Expected Results

### Pages Generated:
- **English** (/ca/): ~96 pages
  - 1 hub page
  - 13 province pages
  - 73 city pages
  - 9 utility pages

- **French** (/fr/canada/): ~96 pages
  - 1 hub page
  - 13 province pages
  - 73 city pages
  - 9 utility pages

**Total**: ~192 Canada pages (double current count)

### SEO Benefits:
- ✅ Proper hreflang implementation
- ✅ Language-specific URLs
- ✅ Better indexing in Google.ca
- ✅ Clear user experience
- ✅ Bilingual sitemap

---

## Timeline Estimate

- **Phase 1** (English cleanup): 2-3 hours
- **Phase 2** (French routes): 4-5 hours
- **Phase 3** (Components): 2-3 hours
- **Phase 4** (SEO): 1-2 hours
- **Phase 5** (Testing): 1-2 hours
- **Phase 6** (Deploy): 1 hour

**Total**: 11-16 hours of development work

---

## Priority: HIGH

Canada represents a significant market opportunity with bilingual requirements. Proper implementation will:
1. Improve SEO for both languages
2. Provide better user experience
3. Comply with Canadian bilingual expectations
4. Enable proper analytics tracking by language

**Recommended Start Date**: Immediately after this deployment stabilizes
