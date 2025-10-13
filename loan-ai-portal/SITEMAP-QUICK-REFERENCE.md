# 🚀 Quick Reference: Testing Your Sitemaps

## ✅ All Sitemaps Are Working!

### How to Test (Use `curl` not direct URLs)

```bash
# ✅ CORRECT - Use curl to fetch sitemaps
curl http://localhost:3001/sitemap-index.xml
curl http://localhost:3001/sitemap-us.xml
curl http://localhost:3001/sitemap-ca.xml

# ❌ WRONG - Don't run URLs as commands
http://localhost:3001/sitemap-index.xml  # This fails!
```

---

## 📋 Quick Test Commands

### View Sitemap Index
```bash
curl http://localhost:3001/sitemap-index.xml
```

### View First 50 Lines of US Sitemap
```bash
curl http://localhost:3001/sitemap-us.xml | head -50
```

### Count URLs in Each Sitemap
```bash
curl -s http://localhost:3001/sitemap-us.xml | grep -c "<loc>"
curl -s http://localhost:3001/sitemap-ca.xml | grep -c "<loc>"
curl -s http://localhost:3001/sitemap-pl.xml | grep -c "<loc>"
```

### Test All Countries at Once
```bash
for country in us ca cz ro co mx kz vn pl es za au nz ph global; do
  count=$(curl -s http://localhost:3001/sitemap-$country.xml | grep -c '<loc>')
  echo "$country: $count URLs"
done
```

---

## 🌍 All Available Sitemaps

| Sitemap | URL | Expected URLs |
|---------|-----|---------------|
| **Index** | `/sitemap-index.xml` | Lists all 15 sitemaps |
| 🇺🇸 US | `/sitemap-us.xml` | ~1,275 |
| 🇨🇦 Canada | `/sitemap-ca.xml` | ~96 |
| 🇨🇿 Czech | `/sitemap-cz.xml` | ~60 |
| 🇷🇴 Romania | `/sitemap-ro.xml` | ~4 |
| 🇨🇴 Colombia | `/sitemap-co.xml` | ~4 |
| 🇲🇽 Mexico | `/sitemap-mx.xml` | ~4 |
| 🇰🇿 Kazakhstan | `/sitemap-kz.xml` | ~69 |
| 🇻🇳 Vietnam | `/sitemap-vn.xml` | ~4 |
| 🇵🇱 Poland | `/sitemap-pl.xml` | ~4 |
| 🇪🇸 Spain | `/sitemap-es.xml` | ~4 |
| 🇿🇦 South Africa | `/sitemap-za.xml` | ~52 |
| 🇦🇺 Australia | `/sitemap-au.xml` | ~4 |
| 🇳🇿 New Zealand | `/sitemap-nz.xml` | ~4 |
| 🇵🇭 Philippines | `/sitemap-ph.xml` | ~4 |
| 🌍 Global | `/sitemap-global.xml` | ~8 |

---

## ✅ Test Results

All sitemaps tested and working! Total: **~1,600 URLs**

Ready for deployment to Google Search Console!
