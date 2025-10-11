# 🌐 Custom Domain Setup - Quick Guide

**Domain**: loan-platform.com  
**Azure App**: mango-field-03aa94410.2.azurestaticapps.net  
**Status**: ⏳ Configuration Required

---

## 🎯 Why You Need This

Right now your sitemap says:
```
https://loan-platform.com ← These URLs don't work yet!
```

But your actual site is:
```
https://mango-field-03aa94410.2.azurestaticapps.net ← This works
```

**Google will try to crawl `loan-platform.com` but get errors because the domain doesn't point to your Azure app.**

---

## ⚡ Quick Setup (2 Options)

### Option 1: Azure Portal (Easiest)

**Step 1**: Go to Azure Portal
1. Visit: https://portal.azure.com
2. Sign in with your Azure account
3. Search for: "Static Web Apps"
4. Click on your app: **mango-field-03aa94410**

**Step 2**: Add Custom Domain
1. In left menu, click: **Custom domains**
2. Click: **+ Add**
3. Enter: `loan-platform.com`
4. Select: **Custom domain on other DNS** (or Azure DNS if using)
5. Click: **Next**

**Step 3**: Get DNS Instructions
Azure will show you exactly what DNS records to create:
- **ALIAS/ANAME** record (for root domain)
- **CNAME** record (for www subdomain)
- **TXT** record (for verification)

**Step 4**: Add DNS Records
1. Log into your domain registrar (where you bought loan-platform.com)
2. Go to DNS settings
3. Add the records Azure told you
4. Save changes

**Step 5**: Verify in Azure
1. Wait 5-10 minutes
2. Click: **Validate** in Azure portal
3. If successful, click: **Add**

---

### Option 2: Manual DNS Setup (Advanced)

If you know how to configure DNS, add these records:

#### Root Domain (loan-platform.com)
```
Type: ALIAS or ANAME
Name: @ (or leave blank)
Value: mango-field-03aa94410.2.azurestaticapps.net
TTL: 3600
```

⚠️ **Note**: If your DNS provider doesn't support ALIAS/ANAME:
- Use **A records** instead
- Get the IP addresses from Azure portal
- Add multiple A records for redundancy

#### WWW Subdomain (www.loan-platform.com)
```
Type: CNAME
Name: www
Value: mango-field-03aa94410.2.azurestaticapps.net
TTL: 3600
```

#### Verification TXT Record
```
Type: TXT
Name: asuid.loan-platform
Value: [Get from Azure - unique per app]
TTL: 3600
```

**To get the TXT value**:
1. Azure Portal → Your Static Web App
2. Custom domains → Add custom domain
3. Copy the verification TXT value shown

---

## 🕐 DNS Propagation Timeline

After adding DNS records:

**5-30 minutes**: DNS propagation starts  
**1-4 hours**: Most users can access the domain  
**24-48 hours**: Full global propagation  

**Check propagation**: https://dnschecker.org
- Enter: `loan-platform.com`
- See if it resolves to Azure IP/domain

---

## ✅ Verification Steps

### Test 1: Check DNS Resolution
```bash
# On Mac/Linux
nslookup loan-platform.com

# Expected result:
# Should show Azure Static Web App IP or CNAME
```

### Test 2: Access Website
```bash
curl -I https://loan-platform.com/

# Expected: HTTP/2 200
# If you get connection error: DNS not propagated yet
```

### Test 3: Access Sitemap
```bash
curl https://loan-platform.com/sitemap.xml

# Expected: XML sitemap with 455 URLs
```

### Test 4: Check in Browser
1. Open browser
2. Visit: https://loan-platform.com
3. Expected: Your loan platform homepage loads
4. Check: URL stays as `loan-platform.com` (doesn't redirect)

---

## 🚨 Common Issues & Solutions

### Issue 1: "ALIAS/ANAME not supported"

**Problem**: Some DNS providers don't support ALIAS records

**Solutions**:
- **Option A**: Use CNAME for root (some providers allow this)
- **Option B**: Use A records with Azure IPs
- **Option C**: Switch DNS to Azure DNS or Cloudflare

**Get Azure IPs**:
1. Azure Portal → Static Web App
2. Custom domains → View IP addresses
3. Add each IP as an A record

### Issue 2: "Domain verification failed"

**Problem**: Azure can't verify you own the domain

**Solution**:
1. Double-check TXT record is correct
2. Make sure TXT record name is: `asuid.loan-platform`
3. Wait 10-15 minutes for DNS propagation
4. Try verification again
5. Check for typos in TXT value

### Issue 3: "SSL certificate error"

**Problem**: HTTPS not working on custom domain

**Solution**:
1. Azure automatically provisions SSL (takes 5-10 minutes)
2. If still broken after 1 hour, remove and re-add domain
3. Check if domain has CAA records blocking certificate
4. Wait up to 24 hours for full certificate deployment

### Issue 4: "Still showing Azure URL"

**Problem**: Visiting loan-platform.com redirects to mango-field-03aa...

**Solution**:
1. This is normal during DNS propagation
2. Wait 24-48 hours for full propagation
3. Clear browser cache
4. Try incognito/private browsing mode

---

## 📋 Post-Configuration Checklist

After custom domain is working:

### Immediate (Same Day)
- [ ] Website accessible at https://loan-platform.com
- [ ] SSL certificate working (green padlock)
- [ ] Sitemap accessible: https://loan-platform.com/sitemap.xml
- [ ] Robots.txt accessible: https://loan-platform.com/robots.txt
- [ ] Test 5-10 random pages work

### Next Day
- [ ] Re-submit sitemap to Google Search Console
- [ ] Property verified for loan-platform.com
- [ ] 0 errors in sitemap (455 URLs discovered)
- [ ] Request indexing for 10 priority pages
- [ ] Check crawl errors (should be none)

### Week 1
- [ ] 100-200 pages indexed
- [ ] No DNS errors in Search Console
- [ ] Core Web Vitals showing "Good"
- [ ] Schema markup detected
- [ ] First organic traffic

---

## 🎯 DNS Provider Guides

### Common DNS Providers

**GoDaddy**:
1. Log in → My Products → Domains
2. Click domain → Manage DNS
3. Add CNAME/ALIAS records
4. Save and wait 10-60 minutes

**Namecheap**:
1. Domain List → Manage
2. Advanced DNS tab
3. Add new records
4. Save, wait 30 minutes

**Cloudflare**:
1. Select domain
2. DNS tab
3. Add records
4. Orange cloud OFF for CNAME (for now)
5. Save changes (instant)

**Google Domains**:
1. My domains → Manage
2. DNS → Custom records
3. Add records
4. Save, wait 15-30 minutes

**Route53 (AWS)**:
1. Hosted zones → Select domain
2. Create record set
3. Add ALIAS to Azure
4. Save

---

## 💡 Pro Tips

### Tip 1: Test Before Google
Don't submit to Google Search Console until:
- ✅ Domain works in browser
- ✅ SSL certificate active
- ✅ All pages load correctly
- ✅ DNS propagation complete (24-48 hours)

### Tip 2: Use WWW Redirect
Configure Azure to redirect:
- `www.loan-platform.com` → `loan-platform.com`
- This helps SEO (single canonical domain)

### Tip 3: Monitor Uptime
After custom domain setup:
- Use uptime monitoring (e.g., UptimeRobot)
- Get alerts if domain goes down
- Monitor SSL certificate expiry

### Tip 4: Backup Azure URL
Keep the Azure URL as backup:
- `mango-field-03aa94410.2.azurestaticapps.net`
- If custom domain breaks, you can still access site
- Useful for testing and debugging

---

## 📞 Get Help

### Azure Support
- Portal: https://portal.azure.com → Support
- Docs: https://learn.microsoft.com/azure/static-web-apps/custom-domain
- Community: https://stackoverflow.com/questions/tagged/azure-static-web-apps

### DNS Help
- Check propagation: https://dnschecker.org
- DNS lookup: https://mxtoolbox.com/SuperTool.aspx
- Validate DNS: https://www.whatsmydns.net

### SSL Certificate Issues
- Test SSL: https://www.ssllabs.com/ssltest/
- Check certificate: https://www.sslshopper.com/ssl-checker.html

---

## 🎉 Success Criteria

### ✅ Domain Configured Correctly When:
1. https://loan-platform.com loads your site
2. SSL certificate shows green padlock
3. Sitemap accessible at /sitemap.xml
4. No redirect to Azure URL
5. All pages work correctly
6. DNS checker shows correct records
7. Google Search Console accepts sitemap

---

## 🚀 After Domain Works

**Next Steps**:
1. ✅ Re-submit sitemap: `https://loan-platform.com/sitemap.xml`
2. ✅ Request indexing for key pages
3. ✅ Monitor indexing progress
4. ✅ Wait 7-14 days for results

**Expected Results** (30 days):
- 📈 All 455 pages indexed
- ⭐ Star ratings visible
- 🎯 100+ top 10 rankings
- 💰 +200% organic traffic

---

**Status**: ⏳ **AWAITING CUSTOM DOMAIN CONFIGURATION**  
**Next Action**: Add DNS records for `loan-platform.com`  
**Timeline**: 1-48 hours for DNS propagation  
**Priority**: 🚨 **CRITICAL** (Required for Google indexing)

---

**Created**: October 2, 2025 09:45 GMT  
**Azure App**: mango-field-03aa94410.2.azurestaticapps.net  
**Target Domain**: loan-platform.com  
**Sitemap**: ✅ Ready (uses loan-platform.com URLs)
