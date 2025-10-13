# 🚀 Quick Deployment Guide - Using Deployment Token

## Prerequisites

✅ Build completed: `npm run build` (already done!)  
✅ 16 sitemap files in `/out` directory (verified!)  
✅ Azure Static Web Apps deployment token

---

## 🔑 Get Your Deployment Token

1. **Go to Azure Portal**: https://portal.azure.com
2. **Navigate to**: Your Static Web App resource
3. **Click**: Settings → **Configuration**
4. **Copy**: The **Deployment token** value (long string starting with `eyJ...`)

---

## 📤 Deploy Now (3 Methods)

### Method 1: Using Deployment Script (EASIEST)

```bash
# From project root
./scripts/deploy.sh YOUR_DEPLOYMENT_TOKEN_HERE
```

**OR with environment variable:**
```bash
export AZURE_DEPLOYMENT_TOKEN='your-token-here'
./scripts/deploy.sh
```

### Method 2: Using SWA CLI Directly

```bash
# Install SWA CLI (if not installed)
npm install -g @azure/static-web-apps-cli

# Deploy from project root (important!)
swa deploy ./out --deployment-token YOUR_TOKEN_HERE --env production
```

### Method 3: Using Curl (Zip Upload)

```bash
# Create zip file
cd out
zip -r ../deploy.zip .

# Upload to Azure
curl -X POST \
  -H "Content-Type: application/zip" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  --data-binary @../deploy.zip \
  https://YOUR_APP_NAME.azurestaticapps.net/api/zipdeploy
```

---

## ✅ After Deployment (2-5 minutes)

### Test Your Sitemaps

Open in browser or use curl:

```bash
# Main sitemap index
curl -I https://loan-platform.com/sitemap-index.xml

# Should return: HTTP/1.1 200 OK

# Test US sitemap (largest)
curl -I https://loan-platform.com/sitemap-us.xml

# Test a few others
curl -I https://loan-platform.com/sitemap-ca.xml
curl -I https://loan-platform.com/sitemap-cz.xml
curl -I https://loan-platform.com/sitemap-global.xml
```

**✅ All should return `200 OK` (no more 404!)**

### Verify URL Counts

```bash
# US sitemap should have 1,275 URLs
curl -s https://loan-platform.com/sitemap-us.xml | grep -c "<loc>"

# Sitemap index should list 15 sitemaps
curl -s https://loan-platform.com/sitemap-index.xml | grep -c "<sitemap>"
```

---

## 🎯 Submit to Google Search Console

1. Go to: https://search.google.com/search-console
2. Select property: **loan-platform.com**
3. Navigate to: **Indexing** → **Sitemaps**
4. Click: **Add a new sitemap**
5. Enter: `sitemap-index.xml`
6. Click: **Submit**

**Expected results (within 24-48 hours):**
- ✅ Status: Success
- ✅ Discovered URLs: ~1,600
- ✅ Submitted URLs being indexed

---

## 🔄 Future Deployments

Every time you want to deploy:

```bash
# 1. Build (regenerates sitemaps automatically)
npm run build

# 2. Deploy
./scripts/deploy.sh YOUR_TOKEN

# Done! ✨
```

---

## 🆘 Troubleshooting

### "swa: command not found"
```bash
npm install -g @azure/static-web-apps-cli
```

### Still getting 404 after deployment
1. Wait 5 minutes (Azure CDN cache)
2. Try with cache bypass: `?v=2`
3. Check Azure deployment logs in Portal

### Deployment token invalid
1. Verify token is complete (very long string)
2. Get fresh token from Azure Portal
3. Ensure no extra spaces or quotes

### Missing sitemaps in deployment
1. Verify files exist: `ls -la out/sitemap-*.xml`
2. Rebuild if needed: `npm run build`
3. Check you're deploying from `/out` directory

---

## 📊 What You're Deploying

- **Total files**: 1,000+ HTML pages + assets
- **Sitemap files**: 16 XML files
- **Total URLs in sitemaps**: 1,611 URLs
- **Largest sitemap**: sitemap-us.xml (1,275 URLs, 238 KB)
- **Markets covered**: 14 countries

---

## ✅ Success Checklist

- [ ] Deployment token obtained from Azure Portal
- [ ] Deployment command executed successfully
- [ ] Waited 2-5 minutes for propagation
- [ ] Tested sitemap-index.xml (returns 200 OK)
- [ ] Tested sitemap-us.xml (returns 200 OK)
- [ ] Verified URL counts are correct
- [ ] Submitted to Google Search Console
- [ ] Monitoring GSC for indexing progress

---

**Ready to deploy?**

```bash
./scripts/deploy.sh YOUR_DEPLOYMENT_TOKEN_HERE
```

🚀 **Your sitemaps will be live in 5 minutes!**
