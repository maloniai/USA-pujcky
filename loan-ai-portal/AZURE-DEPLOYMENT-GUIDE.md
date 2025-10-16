# Azure Deployment Guide for Loan Platform
**Custom Domain:** https://loan-platform.com/  
**Deployment Date:** October 15, 2025  
**Platform:** Azure Static Web Apps / Azure App Service

---

## 📋 Pre-Deployment Checklist

### ✅ Configuration Updates Completed
- [x] Updated `sitemap.ts` baseUrl to `https://loan-platform.com`
- [ ] Update all hardcoded URLs in components (if any)
- [ ] Update environment variables for production
- [ ] Configure custom domain DNS records

---

## 🚀 Azure Deployment Options

### Option 1: Azure Static Web Apps (Recommended for Next.js Export)

**Advantages:**
- Free tier available (100 GB bandwidth/month)
- Automatic SSL/TLS certificates
- Built-in CI/CD with GitHub Actions
- Global CDN distribution
- Perfect for static exports

**Steps:**

1. **Create Azure Static Web App**
   ```bash
   az login
   az staticwebapp create \
     --name loan-platform \
     --resource-group loan-platform-rg \
     --source https://github.com/maloniai/USA-pujcky \
     --location "East US 2" \
     --branch master \
     --app-location "/" \
     --output-location "out" \
     --login-with-github
   ```

2. **Configure Custom Domain**
   - In Azure Portal → Static Web Apps → Custom domains
   - Add: `loan-platform.com` and `www.loan-platform.com`
   - Update DNS records (see DNS Configuration section below)

3. **Build Configuration** (already configured in `next.config.js`):
   - Output: `export` (static)
   - Output directory: `out`
   - Trailing slashes: enabled

### Option 2: Azure App Service

**Advantages:**
- More control over server configuration
- Support for server-side rendering (if needed later)
- Better for dynamic features

**Steps:**

1. **Create App Service**
   ```bash
   az webapp create \
     --name loan-platform \
     --resource-group loan-platform-rg \
     --plan loan-platform-plan \
     --runtime "NODE:18-lts"
   ```

2. **Deploy via GitHub Actions** (recommended)
   - Configure deployment workflow (see GitHub Actions section)

3. **Configure Custom Domain**
   - In Azure Portal → App Service → Custom domains
   - Add custom domain with SSL certificate

---

## 🌐 DNS Configuration

### Required DNS Records

**For Azure Static Web Apps:**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | [your-staticwebapp].azurestaticapps.net | 3600 |
| TXT   | @    | [verification-code]            | 3600 |
| ALIAS/ANAME | @ | [your-staticwebapp].azurestaticapps.net | 3600 |

**For Azure App Service:**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | loan-platform.azurewebsites.net | 3600 |
| TXT   | asuid | [custom-domain-verification-id] | 3600 |
| A     | @    | [app-service-ip]               | 3600 |

---

## 🗺️ **GOOGLE SEARCH CONSOLE - SITEMAP SUBMISSION**

### Primary Sitemap Index
Submit this **master sitemap** first — it references all country-specific sitemaps:

```
https://loan-platform.com/sitemap-index.xml
```

**Contains:** 15 country/region sitemaps

---

### Individual Country Sitemaps (Submit if targeting specific regions)

#### 🇺🇸 United States (LIVE)
```
https://loan-platform.com/sitemap-us.xml
```
- **URLs:** 1,275
- **Content:** 50 state pages + 400+ city pages + blog posts

#### 🇨🇦 Canada (LIVE - Bilingual EN/FR)
```
https://loan-platform.com/sitemap-ca.xml
```
- **URLs:** 96
- **Content:** 13 provinces + 73 cities (Tier 1: 51 EN + 22 legacy EN/FR)
- **Note:** Bilingual hreflang tags implemented

#### 🇨🇴 Colombia (LIVE - Spanish)
```
https://loan-platform.com/sitemap-co.xml
```
- **URLs:** 4
- **Content:** 5 regions + 32 departments + 39 cities (9 original + 30 Tier 1)

#### 🇦🇺 Australia (LIVE)
```
https://loan-platform.com/sitemap-au.xml
```
- **URLs:** 4
- **Content:** 8 states/territories + 165 cities

#### 🇨🇿 Czech Republic (LIVE)
```
https://loan-platform.com/sitemap-cz.xml
```
- **URLs:** 60
- **Content:** 14 regions + 600+ cities across all regions

#### 🇰🇿 Kazakhstan (Under Development)
```
https://loan-platform.com/sitemap-kz.xml
```
- **URLs:** 69
- **Content:** 17 regions + 180+ cities

#### 🇿🇦 South Africa (Under Development)
```
https://loan-platform.com/sitemap-za.xml
```
- **URLs:** 52
- **Content:** 9 provinces + 50+ cities

#### 🇪🇸 Spain (Under Development)
```
https://loan-platform.com/sitemap-es.xml
```
- **URLs:** 4
- **Content:** Spanish-localized content

#### 🌍 Other Countries (Planned)
```
https://loan-platform.com/sitemap-mx.xml  (Mexico - 4 URLs)
https://loan-platform.com/sitemap-ro.xml  (Romania - 4 URLs)
https://loan-platform.com/sitemap-vn.xml  (Vietnam - 4 URLs)
https://loan-platform.com/sitemap-pl.xml  (Poland - 4 URLs)
https://loan-platform.com/sitemap-nz.xml  (New Zealand - 4 URLs)
https://loan-platform.com/sitemap-ph.xml  (Philippines - 4 URLs)
```

#### 🌐 Global Pages
```
https://loan-platform.com/sitemap-global.xml
```
- **URLs:** 8
- **Content:** Homepage, about, privacy, terms, legal pages

#### 📄 Main Sitemap (All Pages)
```
https://loan-platform.com/sitemap.xml
```
- **URLs:** 1,554
- **Content:** Complete sitemap of all pages (backup/fallback)

---

## 📊 Sitemap Statistics Summary

| Country/Region      | Sitemap File           | URL Count | Status              |
|---------------------|------------------------|-----------|---------------------|
| **United States**   | sitemap-us.xml         | 1,275     | ✅ LIVE             |
| **Canada (EN/FR)**  | sitemap-ca.xml         | 96        | ✅ LIVE (Bilingual) |
| **Australia**       | sitemap-au.xml         | 4         | ✅ LIVE             |
| **Colombia (ES)**   | sitemap-co.xml         | 4         | ✅ LIVE             |
| **Czech Republic**  | sitemap-cz.xml         | 60        | ✅ LIVE             |
| Kazakhstan          | sitemap-kz.xml         | 69        | 🚧 Development      |
| South Africa        | sitemap-za.xml         | 52        | 🚧 Development      |
| Spain               | sitemap-es.xml         | 4         | 🚧 Development      |
| Mexico              | sitemap-mx.xml         | 4         | 📋 Planned          |
| Romania             | sitemap-ro.xml         | 4         | 📋 Planned          |
| Vietnam             | sitemap-vn.xml         | 4         | 📋 Planned          |
| Poland              | sitemap-pl.xml         | 4         | 📋 Planned          |
| New Zealand         | sitemap-nz.xml         | 4         | 📋 Planned          |
| Philippines         | sitemap-ph.xml         | 4         | 📋 Planned          |
| Global              | sitemap-global.xml     | 8         | ✅ LIVE             |
| **TOTAL (Main)**    | **sitemap.xml**        | **1,554** | ✅ **ALL PAGES**    |
| **MASTER INDEX**    | **sitemap-index.xml**  | **15 sitemaps** | ✅ **SUBMIT FIRST** |

---

## 🔍 Google Search Console Setup Guide

### Step 1: Add Property
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "Domain" property type
4. Enter: `loan-platform.com`
5. Verify ownership via DNS TXT record

### Step 2: Submit Sitemaps (Priority Order)

#### **CRITICAL - Submit First:**
```
sitemap-index.xml
```
This is the **master sitemap** that references all 15 country-specific sitemaps.

#### **HIGH PRIORITY - Submit for Live Countries:**
```
sitemap-us.xml      (USA - 1,275 URLs)
sitemap-ca.xml      (Canada - 96 URLs, bilingual)
sitemap-au.xml      (Australia - 4 URLs)
sitemap-co.xml      (Colombia - 4 URLs)
sitemap-cz.xml      (Czech Republic - 60 URLs)
```

#### **MEDIUM PRIORITY - Development Countries:**
```
sitemap-kz.xml      (Kazakhstan - 69 URLs)
sitemap-za.xml      (South Africa - 52 URLs)
sitemap-es.xml      (Spain - 4 URLs)
```

#### **LOW PRIORITY - Planned Countries:**
```
sitemap-mx.xml      (Mexico)
sitemap-ro.xml      (Romania)
sitemap-vn.xml      (Vietnam)
sitemap-pl.xml      (Poland)
sitemap-nz.xml      (New Zealand)
sitemap-ph.xml      (Philippines)
```

#### **BACKUP (Optional):**
```
sitemap.xml         (All 1,554 URLs in one file)
sitemap-global.xml  (8 global pages)
```

### Step 3: Configure International Targeting

For each country with significant content:

1. **USA:** Search Console → Settings → International Targeting
   - Country: United States
   - Language: English (en)

2. **Canada (Bilingual):**
   - Country: Canada
   - Languages: English (en-CA), French (fr-CA)
   - Note: Hreflang tags implemented in pages

3. **Australia:**
   - Country: Australia
   - Language: English (en-AU)

4. **Colombia:**
   - Country: Colombia
   - Language: Spanish (es-CO)

5. **Czech Republic:**
   - Country: Czech Republic
   - Language: Czech (cs)

### Step 4: Monitor Indexing

**Weekly (First Month):**
- Check "Coverage" report for errors
- Monitor "Index Coverage" for new pages
- Review "Sitemaps" status (submitted vs indexed)

**Expected Indexing Timeline:**
- Week 1: 10-20% of URLs indexed
- Week 2: 30-50% of URLs indexed
- Week 4: 60-80% of URLs indexed
- Month 3: 90%+ of URLs indexed

**Priority Indexing Order (Expected):**
1. Homepage & main hubs (Week 1)
2. State/province pages (Week 1-2)
3. Major city pages (Week 2-3)
4. Smaller city pages (Week 3-4+)
5. Blog posts & supporting pages (Week 2-4+)

### Step 5: Set Up Alerts

Enable email notifications for:
- Critical indexing issues
- Manual actions
- Security issues
- Mobile usability problems

---

## 🎯 SEO Optimization Post-Deployment

### 1. Robots.txt Configuration

Create/verify `/public/robots.txt`:

```txt
# Production robots.txt for loan-platform.com

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://loan-platform.com/sitemap-index.xml
Sitemap: https://loan-platform.com/sitemap.xml
Sitemap: https://loan-platform.com/sitemap-us.xml
Sitemap: https://loan-platform.com/sitemap-ca.xml
Sitemap: https://loan-platform.com/sitemap-au.xml
Sitemap: https://loan-platform.com/sitemap-co.xml
Sitemap: https://loan-platform.com/sitemap-cz.xml

# Block admin areas (if any)
Disallow: /api/
Disallow: /admin/

# Crawl-delay for heavy bots (optional)
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

### 2. Core Web Vitals Optimization

**Current Configuration:**
- Static export (fast loading)
- Image optimization disabled (use CDN or enable for production)
- SWC minification enabled
- Tree shaking enabled
- Compression enabled

**Post-Deployment Actions:**
- Monitor Core Web Vitals in GSC
- Test with PageSpeed Insights: https://pagespeed.web.dev/
- Target scores: 90+ on mobile, 95+ on desktop

### 3. Structured Data Validation

**Before Indexing:**
1. Test with Google Rich Results Test:
   - https://search.google.com/test/rich-results

2. Test sample pages:
   ```
   https://loan-platform.com/
   https://loan-platform.com/ca/
   https://loan-platform.com/ca/cities/ontario/toronto/
   https://loan-platform.com/au/
   https://loan-platform.com/co/
   ```

3. Verify schemas present:
   - ✅ Organization schema
   - ✅ BreadcrumbList schema
   - ✅ FAQPage schema
   - ✅ FinancialService schema

### 4. Hreflang Validation (Bilingual Pages)

**Canada EN ↔ FR Pages:**

Test with: https://technicalseo.com/tools/hreflang/

Sample pairs to validate:
```
EN: https://loan-platform.com/ca/cities/ontario/toronto/
FR: https://loan-platform.com/fr/canada/ontario/toronto/

EN: https://loan-platform.com/ca/cities/quebec/montreal/
FR: https://loan-platform.com/fr/canada/quebec/montreal/
```

**Expected Tags:**
```html
<link rel="alternate" hreflang="en-CA" href="https://loan-platform.com/ca/cities/ontario/toronto/" />
<link rel="alternate" hreflang="fr-CA" href="https://loan-platform.com/fr/canada/ontario/toronto/" />
<link rel="alternate" hreflang="x-default" href="https://loan-platform.com/ca/cities/ontario/toronto/" />
```

---

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Property name: Loan Platform
   - Time zone: Your primary market
   - Currency: USD (or multi-currency)

2. **Add Tracking Code**
   Update `src/app/layout.tsx` with GA4 tracking ID:
   ```typescript
   export const GA_TRACKING_ID = 'G-XXXXXXXXXX'
   ```

3. **Set Up Goals:**
   - Apply Now clicks (conversion)
   - State/City page views
   - Time on site
   - Scroll depth

### Microsoft Clarity (Optional)

Free heatmap and session recording:
```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
</script>
```

---

## 🔒 Security Configuration

### 1. Environment Variables (Azure)

Set in Azure Portal → Configuration → Application Settings:

```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://loan-platform.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Security Headers

Add to Azure App Service → Configuration → General Settings → Startup Command:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        }
      ]
    }
  ]
}
```

### 3. SSL/TLS Certificate

- Azure automatically provisions free SSL certificates for custom domains
- Verify HTTPS redirect is enabled
- Test with: https://www.ssllabs.com/ssltest/

---

## 🚀 Deployment Commands

### Build Production Version

```bash
# Navigate to project directory
cd /workspaces/codespaces-blank/loan-ai-portal

# Install dependencies
npm install

# Build for production
npm run build

# Output directory: ./out (1,554 static HTML files)
```

### Deploy to Azure (Manual)

```bash
# Login to Azure
az login

# Deploy static files
az staticwebapp deploy \
  --name loan-platform \
  --resource-group loan-platform-rg \
  --source ./out \
  --no-wait

# Or via SWA CLI
npx @azure/static-web-apps-cli deploy ./out \
  --deployment-token $AZURE_STATIC_WEB_APPS_API_TOKEN
```

### Deploy via GitHub Actions (Recommended)

Create `.github/workflows/azure-deploy.yml`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - master
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - master

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build Next.js site
        run: npm run build
        env:
          NODE_ENV: production

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "out"
```

---

## ✅ Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Verify custom domain resolves: https://loan-platform.com
- [ ] Test SSL certificate: https://www.ssllabs.com/ssltest/
- [ ] Check all live country hubs load:
  - [ ] https://loan-platform.com/ (Homepage)
  - [ ] https://loan-platform.com/ca/ (Canada)
  - [ ] https://loan-platform.com/au/ (Australia)
  - [ ] https://loan-platform.com/co/ (Colombia)
  - [ ] https://loan-platform.com/cz/ (Czech Republic)
- [ ] Submit sitemap-index.xml to Google Search Console
- [ ] Submit priority country sitemaps (US, CA, AU, CO, CZ)
- [ ] Verify robots.txt accessible: https://loan-platform.com/robots.txt
- [ ] Test sample city pages (5-10 pages per country)
- [ ] Check button fixes (Apply Now + Compare Lenders)

### Week 1

- [ ] Monitor Google Search Console indexing progress
- [ ] Check for crawl errors in GSC
- [ ] Verify Core Web Vitals scores (90+ mobile)
- [ ] Test Rich Results with Google tool (5-10 sample pages)
- [ ] Validate hreflang tags for Canadian bilingual pages
- [ ] Set up Google Analytics goals and tracking
- [ ] Review Azure resource costs and usage

### Week 2-4

- [ ] Monitor indexing rate (target: 60-80% by week 4)
- [ ] Check for manual actions or penalties in GSC
- [ ] Review organic search traffic in GA4
- [ ] Test mobile usability across devices
- [ ] Optimize slow-loading pages (if any)
- [ ] Submit additional country sitemaps as content is ready

### Monthly

- [ ] Review sitemap submission status
- [ ] Check indexing coverage (target: 90%+ by month 3)
- [ ] Analyze top-performing pages
- [ ] Update content based on search queries
- [ ] Monitor Core Web Vitals trends
- [ ] Review Azure costs and optimize if needed

---

## 📞 Support & Troubleshooting

### Common Issues

**Issue 1: Sitemap 404 Error**
- **Cause:** Static files not deployed correctly
- **Fix:** Verify `out/` directory contains sitemap*.xml files before deployment

**Issue 2: Slow Indexing**
- **Cause:** Low crawl budget or quality issues
- **Fix:** 
  - Request indexing for priority pages in GSC
  - Ensure internal linking is strong
  - Add more external backlinks

**Issue 3: Hreflang Errors (Canada)**
- **Cause:** Missing or incorrect bidirectional links
- **Fix:** Validate with hreflang testing tool, ensure EN ↔ FR pairs match

**Issue 4: Core Web Vitals Below 90**
- **Cause:** Large images, unoptimized code
- **Fix:**
  - Enable Next.js Image optimization
  - Use Azure CDN for static assets
  - Lazy load below-the-fold content

### Azure Support

- **Portal:** https://portal.azure.com
- **Documentation:** https://learn.microsoft.com/azure/static-web-apps/
- **Pricing:** https://azure.microsoft.com/pricing/details/app-service/static/

---

## 📊 Expected Traffic Growth (Post-Launch)

### Month 1
- **Indexing:** 60-80% of pages
- **Organic Traffic:** 100-500 visits/month
- **Top Countries:** USA (60%), Canada (20%), Australia (10%), Colombia (10%)

### Month 3
- **Indexing:** 90%+ of pages
- **Organic Traffic:** 1,000-3,000 visits/month
- **Featured Snippets:** 5-10 FAQs ranking
- **Local Searches:** Strong city-level visibility

### Month 6
- **Indexing:** 95%+ of pages
- **Organic Traffic:** 3,000-10,000 visits/month
- **Quebec Traffic:** +40-60% from French content
- **Brand Searches:** Increasing direct searches for "loan-platform"

---

## 🎉 Summary

**Total Pages to Index:** 1,554  
**Total Sitemaps:** 16 (1 master index + 15 country-specific)  
**Priority Sitemaps:** 6 (index + US, CA, AU, CO, CZ)  
**Custom Domain:** https://loan-platform.com  
**Deployment Platform:** Azure Static Web Apps (recommended)  

**Next Steps:**
1. ✅ Update sitemap.ts domain (DONE)
2. Deploy to Azure Static Web Apps
3. Configure custom domain DNS
4. Submit sitemap-index.xml to Google Search Console
5. Monitor indexing for 30 days
6. Optimize based on GSC data

---

**Document Version:** 1.0  
**Last Updated:** October 15, 2025  
**Maintained By:** Loan Platform Team
