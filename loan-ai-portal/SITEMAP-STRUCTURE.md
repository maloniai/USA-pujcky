# 🗺️ Sitemap Structure - Loan Platform

## Overview

The site uses a **sitemap index architecture** for better organization and SEO management across 7 countries.

## Sitemap Files

### Primary Sitemap (Recommended)
- **`sitemap-index.xml`** - Master index that references all country sitemaps
  - URL: https://loan-platform.com/sitemap-index.xml
  - **Submit this to Google Search Console!**

### Country-Specific Sitemaps

Each country has its own sitemap for better organization:

| Country | Sitemap | Approx. URLs | Priority |
|---------|---------|--------------|----------|
| 🇺🇸 United States | `sitemap-us.xml` | ~1,200 | Highest |
| 🇦🇺 Australia | `sitemap-au.xml` | ~260 | High |
| 🇨🇦 Canada | `sitemap-ca.xml` | ~200 | High |
| 🇨🇿 Czech Republic | `sitemap-cz.xml` | ~650 | Medium |
| 🇰🇿 Kazakhstan | `sitemap-kz.xml` | ~250 | Medium |
| 🇨🇴 Colombia | `sitemap-co.xml` | ~110 | Medium |
| 🇿🇦 South Africa | `sitemap-za.xml` | ~110 | Medium |

### Legacy Sitemap
- **`sitemap.xml`** - Unified sitemap containing all URLs (backup)
  - URL: https://loan-platform.com/sitemap.xml
  - Contains: All 3,314+ URLs in one file
  - Status: Maintained for backward compatibility

## What Each Country Sitemap Contains

### 🇺🇸 US Sitemap (`sitemap-us.xml`)
- Homepage (EN + ES)
- 50 state pages (EN + ES) = 100 URLs
- 400+ city pages
- Blog posts (~50 articles)
- Legal pages (privacy, terms, etc.)
- Apply page and other conversion pages

### 🇦🇺 Australia Sitemap (`sitemap-au.xml`)
- Australia hub page
- 8 state/territory pages
- 165 city pages
- Regional pages (regions, cities indexes)
- Legal and informational pages

### 🇨🇦 Canada Sitemap (`sitemap-ca.xml`)
- Canada hub (EN + FR) = 2 URLs
- 13 province/territory pages (EN + FR) = 26 URLs
- 73 Tier 1 city pages (EN + FR) = 146 URLs
- Regional indexes and legal pages

### 🇨🇿 Czech Republic Sitemap (`sitemap-cz.xml`)
- Czech hub page
- 14 region pages
- 600+ city pages across all regions
- Apply and legal pages

### 🇰🇿 Kazakhstan Sitemap (`sitemap-kz.xml`)
- Kazakhstan hub page
- 17 region pages
- 180+ city pages
- Apply and legal pages

### 🇨🇴 Colombia Sitemap (`sitemap-co.xml`)
- Colombia hub page
- 5 macro-region pages
- 32 department pages
- 30+ Tier 1 city pages
- Legal pages (Spanish)

### 🇿🇦 South Africa Sitemap (`sitemap-za.xml`)
- South Africa hub page
- 9 province pages
- 50+ city pages
- Apply and legal pages

## Robots.txt Configuration

The `robots.txt` file references both sitemaps:

```txt
Sitemap: https://loan-platform.com/sitemap-index.xml
Sitemap: https://loan-platform.com/sitemap.xml
```

This ensures search engines can discover all pages whether they use the index or the legacy unified sitemap.

## Google Search Console Submission

### Recommended Approach: Submit Sitemap Index

1. Go to Google Search Console
2. Navigate to: Sitemaps
3. Add new sitemap: `sitemap-index.xml`
4. Click Submit

**Benefits:**
- Cleaner organization
- Better country-specific tracking
- Easier to identify indexing issues per country
- Scales well for future growth

### Alternative: Submit Individual Country Sitemaps

If you want granular control:

1. Submit each country sitemap separately:
   - `sitemap-us.xml`
   - `sitemap-au.xml`
   - `sitemap-ca.xml`
   - etc.

**Benefits:**
- Per-country indexing metrics
- Can prioritize specific countries
- Easier debugging per market

### Legacy Approach: Submit Unified Sitemap

Submit: `sitemap.xml`

**Note:** This works but doesn't provide country-level organization.

## Technical Details

### Generation Method
- Built using Next.js API routes
- Each sitemap is a TypeScript route handler in `src/app/sitemap-{country}.xml/route.ts`
- Dynamically generated at build time
- Cached for 1 hour (`Cache-Control: max-age=3600`)

### Update Frequency
- Sitemaps regenerate on every build
- `lastmod` dates reflect actual content changes
- Build triggers: code deploy, content updates

### Performance
- All sitemaps are statically generated
- Served directly from CDN (Azure Static Web Apps)
- No server-side processing required
- Fast response times (<100ms)

### URL Limits
- Google supports up to 50,000 URLs per sitemap
- Current largest sitemap: US (~1,200 URLs)
- Well below limits - room for 10x growth

## Monitoring

### What to Track

1. **Indexing Status**
   - Submitted URLs vs. Indexed URLs per country
   - Coverage issues and errors
   - Index bloat (duplicate content)

2. **Performance**
   - Crawl stats per sitemap
   - Fetch errors
   - Response times

3. **Growth**
   - New URLs added per deploy
   - Indexing velocity (URLs indexed per week)
   - Country-level coverage percentage

### Expected Timeline

- **Week 1:** 10-20% indexed (~330-660 URLs)
- **Week 4:** 60-80% indexed (~2,000-2,650 URLs)
- **Month 3:** 90%+ indexed (~3,000+ URLs)

## Maintenance

### When to Update Sitemaps

Sitemaps automatically update on every build. Manual updates needed for:

1. **New Country Launch**
   - Create new `sitemap-{country}.xml` route
   - Add to `sitemap-index.xml`
   - Update this documentation

2. **Major Content Changes**
   - New page types (e.g., loan calculators)
   - URL structure changes
   - Large batch of new cities/regions

3. **Performance Issues**
   - If a sitemap exceeds 10,000 URLs
   - Consider splitting into sub-sitemaps (e.g., `sitemap-us-states.xml`, `sitemap-us-cities.xml`)

### Best Practices

✅ **DO:**
- Keep sitemap-index.xml as the primary submission
- Monitor indexing per country
- Update lastmod dates accurately
- Set appropriate priorities (hub=1.0, cities=0.7, legal=0.5)
- Use changefreq that reflects actual update frequency

❌ **DON'T:**
- Don't include redirect URLs
- Don't include non-canonical URLs
- Don't include noindex pages
- Don't set all priorities to 1.0
- Don't update lastmod without actual changes

## File Locations

### Source Files
```
src/app/
├── sitemap-index.xml/
│   └── route.ts          # Master sitemap index
├── sitemap-us.xml/
│   └── route.ts          # US-specific sitemap
├── sitemap-au.xml/
│   └── route.ts          # Australia sitemap
├── sitemap-ca.xml/
│   └── route.ts          # Canada sitemap
├── sitemap-co.xml/
│   └── route.ts          # Colombia sitemap
├── sitemap-cz.xml/
│   └── route.ts          # Czech Republic sitemap
├── sitemap-kz.xml/
│   └── route.ts          # Kazakhstan sitemap
├── sitemap-za.xml/
│   └── route.ts          # South Africa sitemap
└── sitemap.xml/
    └── route.ts          # Legacy unified sitemap
```

### Built Output
```
out/
├── sitemap-index.xml     # 1KB - References all country sitemaps
├── sitemap-us.xml        # 246KB - Largest (400+ cities)
├── sitemap-au.xml        # 22KB
├── sitemap-ca.xml        # 72KB
├── sitemap-co.xml        # 15KB
├── sitemap-cz.xml        # 12KB
├── sitemap-kz.xml        # 13KB
├── sitemap-za.xml        # 10KB
└── sitemap.xml           # 349KB - All URLs combined
```

## Troubleshooting

### Issue: "Sitemap not found"
**Solution:** Rebuild the project - sitemaps are generated at build time.

### Issue: "URLs not appearing in sitemap"
**Solution:** Check the source route file - ensure data is being fetched correctly.

### Issue: "Sitemap too large"
**Solution:** Split into sub-sitemaps (e.g., by state within US).

### Issue: "Indexing is slow"
**Solution:** 
1. Submit individual country sitemaps
2. Request indexing for priority pages
3. Build backlinks to hub pages

## Future Enhancements

### Planned
- [ ] Add image sitemaps for blog posts
- [ ] Add video sitemaps when video content is added
- [ ] Create news sitemaps for time-sensitive content
- [ ] Add hreflang annotations in sitemaps for multilingual pages

### Under Consideration
- [ ] Split US sitemap by state (50 state sitemaps)
- [ ] Add mobile-specific sitemaps
- [ ] Implement sitemap compression (gzip)

---

**Last Updated:** October 16, 2025  
**Total URLs:** 3,314+  
**Sitemaps:** 9 (8 country-specific + 1 index)  
**Primary Submission:** `sitemap-index.xml`
