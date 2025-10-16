# Technical Discoverability - Quick Reference

## 🚀 What Was Implemented

### 1. Hreflang Component
**File**: `/src/components/seo/hreflang-tags.tsx`  
**Usage**: `<HreflangTags locale="en" path="/states/california" />`  
**Purpose**: Bilingual page linking (EN ↔ ES)

### 2. AI Manifest Endpoints
- **Service Catalog**: `https://loan-platform.com/api/manifest.json`
- **OpenAPI Docs**: `https://loan-platform.com/api/services.json`
- **Purpose**: Help ChatGPT, Claude, Perplexity understand your services

### 3. Enhanced Sitemap
- **Total URLs**: 2,445 pages
- **Languages**: English + Spanish
- **Updates**: Realistic lastModified timestamps
- **Location**: `https://loan-platform.com/sitemap.xml`

### 4. Performance Boosts
- DNS prefetch for faster third-party loading
- Font preloading to prevent layout shift
- Lazy-loaded analytics
- Resource hints for critical assets

### 5. SEO Helpers
**File**: `/src/lib/seo-helpers.ts`  
**Functions**:
- `generateStateMetadata(stateSlug, locale)`
- `generateCityMetadata(stateSlug, citySlug, locale)`
- `buildBreadcrumbSchema(items)`
- `buildFAQSchema(faqs)`

---

## � DEPLOYMENT QUICK REFERENCE - loan-platform.com

### Before Deploy
- [x] Run `npm run build` ✅
- [x] Verify no errors ✅
- [x] Check sitemap generated ✅
- [x] Check robots.txt generated ✅

### After Deploy
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Run Lighthouse audit
- [ ] Validate hreflang in GSC

---

## 🎯 Google Search Console Setup

### Step 1: Add Sitemap
```
URL: https://loan-platform.com/sitemap.xml
Location: Sitemaps → Add new sitemap → Paste URL → Submit
```

### Step 2: Monitor Indexing
- Check "Coverage" report
- Target: ~2,445 pages indexed
- Watch for hreflang errors (target: 0)

### Step 3: Performance Monitoring
- Check "Core Web Vitals" report
- Target: LCP <2.5s, FID <100ms, CLS <0.1
- Monitor mobile vs. desktop scores

---

## 🤖 AI Crawler Verification

### Check Logs For
- `GPTBot` (OpenAI)
- `Claude-Web` (Anthropic)
- `PerplexityBot` (Perplexity AI)
- `Google-Extended` (Bard/Gemini)

### Monitor These URLs
- `/api/manifest.json` (service catalog)
- `/api/services.json` (documentation)
- `/sitemap.xml` (full site map)

---

## 📊 Key Metrics to Track

### Week 1
- [ ] Spanish pages indexed
- [ ] Hreflang validated (0 errors)
- [ ] AI manifest endpoints crawled
- [ ] CWV scores in "Good" range

### Month 1
- [ ] 2,445 pages indexed
- [ ] Spanish traffic >10% of total
- [ ] AI referrals detected
- [ ] Average position improved

---

## 🔗 Important URLs

### Production
- **Homepage**: https://loan-platform.com
- **Sitemap**: https://loan-platform.com/sitemap.xml
- **Robots**: https://loan-platform.com/robots.txt
- **AI Manifest**: https://loan-platform.com/api/manifest.json
- **Services**: https://loan-platform.com/api/services.json

### Spanish Variants
- **Homepage**: https://loan-platform.com/es
- **States**: https://loan-platform.com/es/states/{state}
- **Cities**: https://loan-platform.com/es/cities/{state}/{city}

---

## 💡 Quick Tips

### Hreflang Integration
```tsx
// Add to any bilingual page head
import HreflangTags from '@/components/seo/hreflang-tags'

<head>
  <HreflangTags locale="en" path="/states/california" />
</head>
```

### Breadcrumb Schema
```tsx
import { buildBreadcrumbSchema } from '@/lib/seo-helpers'

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://loan-platform.com' },
  { name: 'States', url: 'https://loan-platform.com/states' }
])

<script type="application/ld+json">
  {JSON.stringify(breadcrumbs)}
</script>
```

### FAQ Schema
```tsx
import { buildFAQSchema } from '@/lib/seo-helpers'

const faqSchema = buildFAQSchema([
  { question: 'How fast?', answer: 'Same day!' }
])
```

---

## ⚠️ Common Issues

### Issue: Hreflang errors in GSC
**Solution**: Ensure bidirectional links (EN→ES and ES→EN)

### Issue: Slow indexing
**Solution**: Check robots.txt, submit sitemap, request indexing

### Issue: CWV low scores
**Solution**: Verify preload tags, check image optimization

### Issue: AI crawlers blocked
**Solution**: Check robots.txt allows GPTBot, Claude-Web, etc.

---

## 📞 Support Resources

### Google Tools
- [Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Hreflang Validator](https://support.google.com/webmasters/answer/189077)

### Third-Party Tools
- [Screaming Frog](https://www.screamingfrog.co.uk/) (crawl analysis)
- [Ahrefs Site Audit](https://ahrefs.com/site-audit) (technical SEO)
- [Schema.org Validator](https://validator.schema.org/) (structured data)

---

**Last Updated**: October 6, 2025  
**Build Status**: ✅ Verified  
**Ready for Deployment**: YES
