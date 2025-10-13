# Sitemap Testing Guide

## Quick Test Commands

Once the dev server is running (`npm run dev`), test each sitemap:

```bash
# Test Sitemap Index
curl http://localhost:3001/sitemap-index.xml

# Test Individual Country Sitemaps
curl http://localhost:3001/sitemap-us.xml
curl http://localhost:3001/sitemap-ca.xml
curl http://localhost:3001/sitemap-cz.xml
curl http://localhost:3001/sitemap-ro.xml
curl http://localhost:3001/sitemap-co.xml
curl http://localhost:3001/sitemap-mx.xml
curl http://localhost:3001/sitemap-kz.xml
curl http://localhost:3001/sitemap-vn.xml
curl http://localhost:3001/sitemap-pl.xml
curl http://localhost:3001/sitemap-es.xml
curl http://localhost:3001/sitemap-za.xml
curl http://localhost:3001/sitemap-au.xml
curl http://localhost:3001/sitemap-nz.xml
curl http://localhost:3001/sitemap-ph.xml
curl http://localhost:3001/sitemap-global.xml
```

## Validate XML Structure

```bash
# Check if XML is well-formed
curl http://localhost:3001/sitemap-us.xml | xmllint --noout -

# Count URLs in a sitemap
curl http://localhost:3001/sitemap-us.xml | grep -c "<loc>"

# View first 50 lines
curl http://localhost:3001/sitemap-us.xml | head -50
```

## Production Testing

Once deployed to production:

```bash
# Test all sitemaps
curl https://loansai.com/sitemap-index.xml
curl https://loansai.com/sitemap-us.xml
# ... etc
```

## Verify in Google Search Console

1. Go to: https://search.google.com/search-console
2. Navigate to: Sitemaps
3. Submit: `https://loansai.com/sitemap-index.xml`
4. Wait 24-48 hours for Google to process
5. Check for errors in GSC Sitemap report
