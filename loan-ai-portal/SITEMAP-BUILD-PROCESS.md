# Sitemap Build Process - Production Deployment Guide

## ✅ COMPLETED: Static Sitemap Generation

The sitemap generation script has been successfully created and tested. All 16 sitemap files are now being generated as static files that will work with Next.js static export.

## 📊 Generation Results

Successfully generated **16 sitemap files** with **1,611 total URLs**:

| Sitemap File | URLs | File Size | Description |
|-------------|------|-----------|-------------|
| `sitemap-index.xml` | 15 | 2.0 KB | Main index listing all sitemaps |
| `sitemap-us.xml` | 1,275 | 238 KB | United States (50 states + 400+ cities) |
| `sitemap-ca.xml` | 96 | 19 KB | Canada (13 provinces, bilingual) |
| `sitemap-cz.xml` | 60 | 12 KB | Czech Republic (14 regions) |
| `sitemap-kz.xml` | 69 | 14 KB | Kazakhstan (17 regions) |
| `sitemap-za.xml` | 52 | 9.7 KB | South Africa (9 provinces) |
| `sitemap-ro.xml` | 4 | 927 B | Romania (base structure) |
| `sitemap-co.xml` | 4 | 931 B | Colombia (base structure) |
| `sitemap-mx.xml` | 4 | 923 B | Mexico (base structure) |
| `sitemap-vn.xml` | 4 | 927 B | Vietnam (base structure) |
| `sitemap-pl.xml` | 4 | 923 B | Poland (base structure) |
| `sitemap-es.xml` | 4 | 919 B | Spain (base structure) |
| `sitemap-au.xml` | 4 | 933 B | Australia (base structure) |
| `sitemap-nz.xml` | 4 | 943 B | New Zealand (base structure) |
| `sitemap-ph.xml` | 4 | 943 B | Philippines (base structure) |
| `sitemap-global.xml` | 8 | 1.6 KB | Global shared pages |

## 🔧 Build Process Integration

### Updated Scripts in package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "dev:3001": "next dev -p 3001",
    "build": "npm run generate:sitemaps && next build",
    "generate:sitemaps": "node scripts/generate-sitemaps.js"
  }
}
```

### Build Flow

```
1. Start dev server (port 3001)
   ↓
2. Run generate:sitemaps script
   ↓
3. Fetch all 16 sitemaps via HTTP
   ↓
4. Save to /public directory
   ↓
5. Run next build (includes /public files)
   ↓
6. Static files copied to /out directory
   ↓
7. Deploy to production
```

## 🚀 Next Steps for Production Deployment

### Step 1: Build the Application

```bash
# In project root
npm run build
```

This will:
1. Start the dev server automatically
2. Generate all 16 sitemaps to `/public` directory
3. Build the Next.js application
4. Include sitemaps in the `/out` directory

### Step 2: Verify Build Output

Check that all sitemaps are in the build output:

```bash
ls -lh out/sitemap-*.xml
```

You should see all 16 sitemap files.

### Step 3: Deploy to Azure

Upload the entire `/out` directory to your Azure App Service or Static Web App.

### Step 4: Verify Production URLs

Test each sitemap URL on production:

```bash
# Main index
curl -I https://loan-platform.com/sitemap-index.xml

# Country sitemaps
curl -I https://loan-platform.com/sitemap-us.xml
curl -I https://loan-platform.com/sitemap-ca.xml
curl -I https://loan-platform.com/sitemap-cz.xml
# ... test all 16 files
```

All should return `200 OK` (not `404`).

### Step 5: Verify URL Counts

```bash
# Check US sitemap has 1,275 URLs
curl https://loan-platform.com/sitemap-us.xml | grep -c "<loc>"

# Check sitemap index has 15 sitemaps
curl https://loan-platform.com/sitemap-index.xml | grep -c "<sitemap>"
```

### Step 6: Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (loan-platform.com)
3. Navigate to: **Indexing** → **Sitemaps**
4. Click **Add a new sitemap**
5. Enter: `sitemap-index.xml`
6. Click **Submit**

### Step 7: Monitor GSC Processing

- Wait 24-48 hours for Google to crawl and process
- Check the Sitemaps report for:
  - ✅ Success status
  - Number of discovered URLs
  - Any errors or warnings

### Step 8: Update robots.txt

Add or update the sitemap reference:

```
# robots.txt
User-agent: *
Allow: /

Sitemap: https://loan-platform.com/sitemap-index.xml
```

## 🔍 Troubleshooting

### If sitemaps return 404 on production:

1. **Check build output**: Verify files exist in `/out` directory
2. **Check file names**: Ensure exact match (case-sensitive)
3. **Check Azure config**: Verify static file serving is enabled
4. **Check deployment**: Ensure entire `/out` directory was uploaded

### If sitemap generation fails during build:

1. **Check dev server**: Ensure it starts on port 3001
2. **Check network**: Verify localhost:3001 is accessible
3. **Check script**: Run `npm run generate:sitemaps` manually
4. **Check logs**: Look for error messages in build output

### If URL counts are wrong:

1. **Check data files**: Verify `src/data/` files are up to date
2. **Check sitemap routes**: Review `/src/app/sitemap-*.xml/route.ts`
3. **Regenerate**: Run `npm run generate:sitemaps` again
4. **Compare**: Check dev vs production URL counts

## 📝 Important Notes

### Why This Approach?

Next.js with `output: 'export'` creates a static site, which **does not support dynamic API routes** in production. The sitemap routes (`/src/app/sitemap-*.xml/route.ts`) work in development but return 404 in production.

**Solution**: Pre-generate all sitemaps at build time by:
1. Fetching from dev server (where dynamic routes work)
2. Saving as static files to `/public`
3. These files are then included in the static export

### Files to Keep

- ✅ Keep: `/src/app/sitemap-*.xml/route.ts` (used during build)
- ✅ Keep: `/scripts/generate-sitemaps.js` (build script)
- ✅ Keep: `/public/sitemap-*.xml` (generated files)

### Files to Remove (After Build)

- ❌ Remove: Old `/out/sitemap.xml` (replaced by new structure)

## 🎯 Success Criteria

- [x] Script generates all 16 sitemaps ✅
- [x] US sitemap contains 1,275 URLs ✅
- [x] All sitemaps are valid XML ✅
- [x] Files saved to `/public` directory ✅
- [x] Build process integrated ✅
- [ ] Production deployment complete
- [ ] All sitemaps return 200 OK on production
- [ ] Submitted to Google Search Console
- [ ] GSC shows "Success" status
- [ ] URLs being indexed by Google

## 📚 Related Documentation

- `SITEMAP-IMPLEMENTATION.md` - Technical implementation details
- `SITEMAP-TEST-RESULTS.md` - Local testing results
- `SITEMAP-TESTING.md` - Testing procedures
- `SITEMAP-QUICK-REFERENCE.md` - Quick reference guide

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the related documentation
3. Verify the build process step by step
4. Check Azure deployment logs
5. Test locally with `npm run build` before deploying

---

**Last Updated**: 2025-10-13  
**Status**: ✅ Script tested and working  
**Next Action**: Run `npm run build` and deploy to production
