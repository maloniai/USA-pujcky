# 🖼️ Image Quick Reference Card
## Loan AI Portal - Developer Cheat Sheet

---

## ⚡ Quick Start

```tsx
import { OptimizedImage } from '@/components/optimized-image'

// Basic usage - auto-enhanced alt text
<OptimizedImage
  src="/images/hero/approval-usa.webp"
  alt="Personal loan approval"
  width={800}
  height={600}
/>
```

---

## 📏 Common Sizes

| Type | Size | Priority | Use Case |
|------|------|----------|----------|
| Hero | 1920×1080 | Yes | Homepage banner |
| Feature | 800×600 | No | Services, benefits |
| Thumbnail | 400×300 | No | Blog previews |
| Icon | 200×200 | Varies | UI elements |
| Logo | 200×60 | Yes | Header/footer |
| State Map | 1000×600 | No | State pages |

---

## 🎯 Alt Text Formula

```
[Action] + "personal loan" + [Context] + "USA" + [Specifics]
```

**Examples**:
- "Fast personal loan approval USA - 2 minute application"
- "AI loan matching 200+ data points USA"
- "Personal loan rates comparison chart USA"
- "Personal loans in Texas USA - Best lenders"

---

## 🚀 Loading Strategy

```tsx
// ABOVE THE FOLD (Hero, Logo)
priority={true}  // No lazy loading

// BELOW THE FOLD (Everything else)
priority={false} // Lazy load (default)
```

---

## 📱 Responsive Sizes

```tsx
// Hero
sizes="100vw"

// Large content
sizes="(max-width: 1024px) 100vw, 1024px"

// Medium content
sizes="(max-width: 768px) 100vw, 768px"

// Thumbnail
sizes="(max-width: 640px) 50vw, 400px"
```

---

## 🎨 Quality Settings

```tsx
quality={100} // Logos, charts, text-heavy
quality={90}  // Hero images
quality={85}  // Standard photos (default)
quality={80}  // Thumbnails, backgrounds
```

---

## 📦 Using Predefined Metadata

```tsx
import { loanPortalImages, responsiveSizes } from '@/lib/image-seo'

<OptimizedImage
  {...loanPortalImages.heroApproval}
  src="/images/hero/approval.webp"
  sizes={responsiveSizes.hero}
/>
```

---

## 🏷️ File Naming

```
✅ personal-loan-approval-usa.webp
✅ ai-loan-matching-diagram.webp
✅ california-loan-rates-map.webp

❌ img001.webp
❌ photo.webp
❌ screenshot.webp
```

---

## 📁 Directory Structure

```
/public/images/
├── hero/        # Homepage banners
├── process/     # Application steps
├── people/      # Testimonials
├── ui/          # Icons, badges
├── education/   # Infographics
├── states/      # State-specific
└── logos/       # Brand assets
```

---

## ✅ Pre-Upload Checklist

- [ ] Descriptive filename with keywords
- [ ] Alt text has "USA" + "personal loan"
- [ ] Width & height specified
- [ ] Loading strategy set
- [ ] File size < 200KB
- [ ] Copyright cleared

---

## 🎯 SEO Keywords to Include

**Always Include**:
- "USA" or "United States" or state name
- "personal loan" or "loan matching"

**Often Include**:
- Fast, instant, quick, same-day
- AI, technology, matching
- Approved, approval, funding
- Secure, safe, protected
- Compare, rates, lenders

---

## 🔍 Common Patterns

### Hero Section
```tsx
<OptimizedImage
  src="/images/hero/hero-approval-usa.webp"
  alt="Fast personal loan approval USA"
  width={1920}
  height={1080}
  priority={true}
  sizes="100vw"
  quality={90}
/>
```

### Feature Grid
```tsx
<div className="grid grid-cols-3 gap-4">
  {features.map(f => (
    <OptimizedImage
      key={f.id}
      src={f.image}
      alt={f.altText}
      width={400}
      height={400}
      sizes="(max-width: 640px) 100vw, 400px"
    />
  ))}
</div>
```

### State Page
```tsx
<OptimizedImage
  src={`/images/states/${state}-personal-loans.webp`}
  alt={`Personal loans in ${state} USA - Compare lenders`}
  width={1000}
  height={600}
  sizes="(max-width: 1024px) 100vw, 1024px"
/>
```

### Background
```tsx
<div className="relative h-[500px]">
  <OptimizedImage
    src="/images/bg-texture.webp"
    alt=""
    fill={true}
    priority={false}
    sizes="100vw"
    className="opacity-20"
  />
</div>
```

---

## 🚫 Common Mistakes

❌ No alt text
❌ Generic alt text ("image", "photo")
❌ Missing width/height
❌ All images priority={true}
❌ No USA/state mention
❌ No "personal loan" keyword
❌ Huge file sizes (>500KB)
❌ Wrong format (BMP, TIFF)

---

## 📊 Performance Targets

- LCP: < 2.5s
- CLS: < 0.1
- File size: < 200KB photos
- File size: < 50KB UI elements

---

## 🔗 Quick Links

- **Full Docs**: `/public/images/README.md`
- **Examples**: `/src/lib/image-examples.tsx`
- **Component**: `/src/components/optimized-image.tsx`
- **Helpers**: `/src/lib/image-seo.ts`

---

## 💡 Pro Tips

1. **Always** test on mobile first
2. **Never** embed text in images
3. **Use** SVG for logos when possible
4. **Compress** before uploading
5. **Validate** with Lighthouse
6. **Monitor** in Search Console
7. **Update** alt text if content changes
8. **Include** state name for local SEO
9. **Add** title attribute for extra SEO
10. **Test** with screen readers

---

**Last Updated**: October 1, 2025  
**Quick Help**: maloni@outlook.com
