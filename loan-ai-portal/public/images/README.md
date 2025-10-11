# Image Assets - Loan AI Portal

## Image Optimization Guidelines

All images for Loan AI Portal should follow these standards for optimal SEO and performance.

### Format Requirements
- **Primary Format**: WebP (for modern browsers)
- **Fallback Format**: JPEG/PNG (automatic fallback via Next.js)
- **Quality**: 85% for photos, 100% for logos/icons
- **Compression**: Use tools like Squoosh, ImageOptim, or TinyPNG

### File Naming Convention
Use descriptive, SEO-friendly filenames:
- ✅ `personal-loan-approval-usa.webp`
- ✅ `ai-loan-matching-process-diagram.webp`
- ✅ `happy-customer-testimonial-texas.webp`
- ❌ `img001.webp`
- ❌ `photo.webp`

### Image Sizes

#### Hero Images (Homepage, Landing Pages)
- **Desktop**: 1920x1080px (16:9)
- **Tablet**: 1200x630px
- **Mobile**: 800x600px
- **Alt**: Must include "USA" and "personal loans"

#### Feature Images (Services, Benefits)
- **Size**: 800x600px (4:3)
- **Use Cases**: AI matching, application process, approval steps

#### Thumbnails (Blog Posts, Articles)
- **Size**: 400x300px
- **Use Cases**: Article previews, related content

#### Icons & Logos
- **Size**: 200x200px (1:1 square)
- **Format**: SVG preferred, PNG with transparency as fallback

#### State Maps
- **Size**: 1000x600px
- **Alt**: "Personal loans in [State Name] USA - Lenders & Rates"

### Alt Text Guidelines

Every image MUST have descriptive alt text that includes:
1. **Primary keyword**: "personal loan", "loan matching", etc.
2. **Location**: "USA", "United States", or specific state
3. **Context**: What the image shows

**Examples**:
```html
<!-- Good -->
<img alt="Fast personal loan approval process USA - 2 minute application" />
<img alt="AI loan matching technology analyzing 200+ data points USA" />
<img alt="Personal loan calculator showing monthly payments USA" />
<img alt="Personal loans available in Texas USA - Compare rates" />

<!-- Bad -->
<img alt="approval" />
<img alt="image1" />
<img alt="loan" />
```

### Lazy Loading

- **Above-the-fold images**: `priority={true}` (no lazy loading)
- **Below-the-fold images**: `loading="lazy"` (default)
- **Hero images**: Always use priority
- **Footer images**: Always lazy load

### Responsive Sizes

Use the `sizes` prop for responsive images:

```tsx
// Small content image
sizes="(max-width: 640px) 100vw, 640px"

// Medium feature image
sizes="(max-width: 768px) 100vw, 768px"

// Large hero image
sizes="100vw"

// Thumbnail
sizes="(max-width: 640px) 50vw, 400px"
```

## Image Categories

### 1. Hero Images (`/public/images/hero/`)
- Homepage hero
- Landing page heroes
- Campaign banners
- **Priority**: Yes (above fold)

### 2. Process Images (`/public/images/process/`)
- Application steps
- AI matching visualization
- Approval workflow
- Funding timeline

### 3. People Images (`/public/images/people/`)
- Customer testimonials
- Team photos
- Success stories
- **Note**: Ensure diversity, include releases

### 4. UI Elements (`/public/images/ui/`)
- Icons (security, speed, approval)
- Badges (ratings, certifications)
- Decorative elements

### 5. Educational (`/public/images/education/`)
- Infographics
- Charts (credit scores, rates)
- Comparison tables
- How-to diagrams

### 6. Geographic (`/public/images/states/`)
- USA map
- Individual state images
- City skylines (if needed)

### 7. Logos (`/public/images/logos/`)
- Company logo (multiple sizes)
- Partner lender logos
- Certification badges
- Social media icons

## WebP Conversion

### Using Command Line (ImageMagick)
```bash
# Single file
convert input.jpg -quality 85 output.webp

# Batch conversion
for file in *.jpg; do
  convert "$file" -quality 85 "${file%.jpg}.webp"
done
```

### Using Online Tools
- **Squoosh**: https://squoosh.app
- **CloudConvert**: https://cloudconvert.com
- **TinyPNG**: https://tinypng.com

### Using Next.js
Next.js automatically converts images to WebP when using the `<Image>` component. No manual conversion needed!

## Image SEO Checklist

Before uploading any image:
- [ ] Descriptive filename (dash-separated, lowercase)
- [ ] Alt text includes "USA" and "personal loan" keywords
- [ ] Title attribute for additional context
- [ ] Optimized file size (<200KB for photos, <50KB for UI)
- [ ] Appropriate dimensions for use case
- [ ] WebP format (or will be converted by Next.js)
- [ ] Loading strategy defined (priority vs lazy)
- [ ] Responsive sizes configured

## Performance Targets

- **Largest Contentful Paint (LCP)**: <2.5s
- **First Contentful Paint (FCP)**: <1.8s
- **Cumulative Layout Shift (CLS)**: <0.1

All images should have explicit `width` and `height` to prevent layout shift.

## Accessibility

- All decorative images should have empty alt: `alt=""`
- All meaningful images MUST have descriptive alt text
- Complex images (charts, infographics) should have detailed descriptions in nearby text
- Icons should have ARIA labels

## Copyright & Licensing

- **Stock Photos**: Only use licensed images (Unsplash, Pexels, Shutterstock)
- **Custom Graphics**: Created in-house or commissioned
- **Lender Logos**: Ensure permission for use
- **Attribution**: Add if required by license

## Image Schema (JSON-LD)

For important images, include ImageObject schema:

```json
{
  "@type": "ImageObject",
  "@id": "https://loan-ai-portal.com/images/hero/hero-approval.webp",
  "url": "https://loan-ai-portal.com/images/hero/hero-approval.webp",
  "width": 1920,
  "height": 1080,
  "caption": "Fast personal loan approval USA",
  "name": "Personal Loan Approval Process",
  "inLanguage": "en-US"
}
```

## Tools & Resources

- **Optimization**: Squoosh, ImageOptim, TinyPNG
- **Editing**: Photoshop, GIMP, Canva
- **Stock Photos**: Unsplash, Pexels, Unsplash
- **Testing**: Google PageSpeed Insights, Lighthouse
- **Schema Validation**: Google Rich Results Test

---

**Last Updated**: October 1, 2025  
**Maintained by**: Loan AI Portal Development Team  
**Contact**: maloni@outlook.com
