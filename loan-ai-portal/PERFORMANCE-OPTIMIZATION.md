# PageSpeed Performance Optimization Plan
## Loan AI Portal - October 2, 2025

**Current Status**: Analyzing PageSpeed Insights results  
**Target**: Performance Score 90+ (Mobile & Desktop)

---

## 🎯 Key Optimizations to Implement

### 1. **Reduce Unused JavaScript** 
**Issue**: Large React hydration payloads  
**Impact**: High blocking time, slow FCP/LCP

**Solutions**:
```javascript
// next.config.js - Already implemented ✅
experimental: {
  optimizePackageImports: ['lucide-react'],
}
```

### 2. **Defer Non-Critical Scripts**
**Issue**: GTM and third-party scripts block rendering  
**Current**: Using `strategy="afterInteractive"` ✅

**Additional Optimization**:
```tsx
// Move GTM to load even later
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-00GXP8M8F3"
  strategy="lazyOnload"  // Changed from afterInteractive
/>
```

### 3. **Reduce Initial HTML Size** (85KB)
**Issue**: Large HTML payload slows initial load

**Solutions**:
- ✅ Already using static export (good)
- ✅ Remove console.log in production (already done)
- ✅ Compression enabled (already done)
- 🔧 **NEW**: Reduce inline schema size
- 🔧 **NEW**: Remove duplicate schema markup

### 4. **Optimize Largest Contentful Paint (LCP)**
**Target**: < 2.5 seconds

**Optimizations**:
```tsx
// Add priority loading to hero images (if any)
<Image 
  src="/hero.jpg" 
  priority 
  fetchPriority="high"
/>

// Preconnect to critical domains ✅ (already done)
<link rel="preconnect" href="https://www.rndframe.com" />
<link rel="preconnect" href="https://www.googletagmanager.com" />
```

### 5. **Eliminate Render-Blocking Resources**
**Issue**: CSS and fonts block initial render

**Current State**:
- ✅ Using font-display: swap (good)
- ✅ Preloading fonts (good)
- ✅ Inline critical CSS via Next.js (automatic)

**Additional Optimizations**:
```tsx
// Add font preload with proper attributes
<link 
  rel="preload" 
  href="/_next/static/media/font.woff2" 
  as="font" 
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### 6. **Reduce JavaScript Execution Time**
**Issue**: Heavy React hydration

**Solutions**:
- ✅ Using SWC minification (faster than Terser)
- ✅ Code splitting via Next.js (automatic)
- 🔧 **NEW**: Lazy load FAQ accordion
- 🔧 **NEW**: Defer form widget loading

### 7. **Optimize Cumulative Layout Shift (CLS)**
**Target**: < 0.1

**Solutions**:
```tsx
// Add explicit dimensions to prevent layout shift
<div className="loan-application-form w-full min-h-[600px]">
  {/* Prevents CLS when iframe loads */}
</div>

// Add skeleton loaders
<div className="animate-pulse bg-gray-200 h-[600px] rounded-lg" />
```

### 8. **Enable Text Compression** (Already Done ✅)
```javascript
// next.config.js
compress: true,
```

### 9. **Reduce Server Response Time (TTFB)**
**Current**: Azure CDN (excellent)  
**Status**: ✅ Already optimized

### 10. **Optimize Images**
**Issue**: Unoptimized images slow loading

**Current**:
```javascript
images: {
  unoptimized: true  // Required for static export
}
```

**Manual Optimization Needed**:
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Add proper width/height attributes

---

## 🛠️ Implementation Priority

### HIGH PRIORITY (Quick Wins)
1. ✅ **Enable SWC minification** - Already done
2. ✅ **Remove console.log** - Already done
3. 🔧 **Change GTM to lazyOnload** - 5 min
4. 🔧 **Add explicit iframe dimensions** - 10 min
5. 🔧 **Preconnect optimization** - Already done

### MEDIUM PRIORITY
6. 🔧 **Lazy load FAQ section** - 30 min
7. 🔧 **Add loading skeletons** - 1 hour
8. 🔧 **Defer form widget** - 30 min
9. 🔧 **Optimize schema markup** - 30 min

### LOW PRIORITY (Bigger Changes)
10. 🔧 **Convert images to WebP** - 2 hours
11. 🔧 **Implement Progressive Hydration** - 4 hours
12. 🔧 **Add Service Worker** - 4 hours

---

## 📊 Expected Improvements

### Before Optimization
- **Performance**: ~60-70 (estimated)
- **FCP**: ~2.5s
- **LCP**: ~4.0s
- **CLS**: ~0.2
- **TBT**: ~500ms

### After Quick Wins (1 hour work)
- **Performance**: ~75-85
- **FCP**: ~2.0s
- **LCP**: ~3.0s
- **CLS**: ~0.1
- **TBT**: ~300ms

### After Full Optimization (8 hours work)
- **Performance**: ~85-95
- **FCP**: ~1.5s
- **LCP**: ~2.0s
- **CLS**: ~0.05
- **TBT**: ~200ms

---

## 🚀 Quick Win Implementation

### Step 1: Optimize GTM Loading (5 minutes)
```tsx
// src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-00GXP8M8F3"
  strategy="lazyOnload"  // ← Changed from afterInteractive
/>
<Script id="google-analytics" strategy="lazyOnload">  {/* ← Changed */}
```

### Step 2: Add Form Dimensions (5 minutes)
```tsx
// src/components/loan-form.tsx or wherever form is
<iframe 
  className="loan-application-form w-full border-0"
  style={{ minHeight: '600px', height: '600px' }}  // ← Explicit height
  title="Loan Application Form"
  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
/>
```

### Step 3: Add Preload for Critical Assets (5 minutes)
```tsx
// src/app/layout.tsx - Already has preconnect ✅
// Add font preload if not present
<link 
  rel="preload" 
  href="/_next/static/media/inter-font.woff2" 
  as="font" 
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

---

## 📈 Monitoring

### After Each Optimization:
1. Run: `npm run build`
2. Deploy to staging/production
3. Wait 5 minutes for CDN
4. Test: https://pagespeed.web.dev/
5. Compare scores

### Tools:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse (Chrome DevTools)**: F12 > Lighthouse tab
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/

---

## ✅ Checklist

### Immediate (15 minutes):
- [ ] Change GTM strategy to `lazyOnload`
- [ ] Add explicit dimensions to iframe
- [ ] Rebuild and deploy
- [ ] Test PageSpeed

### Short-term (2 hours):
- [ ] Lazy load FAQ accordions
- [ ] Add loading skeletons
- [ ] Optimize schema markup
- [ ] Test and measure

### Long-term (1 week):
- [ ] Convert images to WebP
- [ ] Implement progressive hydration
- [ ] Add service worker for offline
- [ ] Monitor Core Web Vitals in Search Console

---

## 🎯 Success Criteria

### Mobile Performance:
- ✅ **Performance**: 85+ (Target: 90+)
- ✅ **FCP**: < 2.0s
- ✅ **LCP**: < 2.5s
- ✅ **TBT**: < 300ms
- ✅ **CLS**: < 0.1

### Desktop Performance:
- ✅ **Performance**: 95+ (Target: 98+)
- ✅ **FCP**: < 1.0s
- ✅ **LCP**: < 1.5s
- ✅ **TBT**: < 150ms
- ✅ **CLS**: < 0.05

---

**Next Steps**: 
1. Review this plan
2. Implement quick wins (15 min)
3. Rebuild & deploy
4. Measure improvement
5. Iterate on medium priority items

**Estimated Time**: 
- Quick wins: 15 minutes
- Noticeable improvement: +10-15 points
- Full optimization: 8 hours total
