/**
 * Image Optimization Implementation Guide
 * Loan AI Portal - USA Personal Loans
 * 
 * This file demonstrates how to use optimized images throughout the application
 */

import { OptimizedImage } from '@/components/optimized-image'
import { loanPortalImages, responsiveSizes } from '@/lib/image-seo'

/**
 * EXAMPLE 1: Hero Image (Above the Fold - Priority Loading)
 */
export function HeroSection() {
  return (
    <section className="hero">
      <OptimizedImage
        src="/images/hero/personal-loan-approval-usa.webp"
        alt={loanPortalImages.heroApproval.alt}
        width={loanPortalImages.heroApproval.width}
        height={loanPortalImages.heroApproval.height}
        priority={true} // No lazy loading for hero images
        sizes={responsiveSizes.hero}
        quality={90} // Higher quality for hero
        className="w-full h-auto"
      />
    </section>
  )
}

/**
 * EXAMPLE 2: Feature Image (Below the Fold - Lazy Loading)
 */
export function AIMatchingFeature() {
  return (
    <div className="feature">
      <OptimizedImage
        src="/images/process/ai-loan-matching-usa.webp"
        alt={loanPortalImages.aiMatching.alt}
        width={loanPortalImages.aiMatching.width}
        height={loanPortalImages.aiMatching.height}
        priority={false} // Lazy load (default)
        sizes={responsiveSizes.large}
        className="rounded-lg shadow-lg"
      />
    </div>
  )
}

/**
 * EXAMPLE 3: Responsive Grid of Images
 */
export function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <OptimizedImage
        src="/images/ui/fast-approval-icon-usa.webp"
        alt="Fast 2 minute personal loan approval USA"
        width={400}
        height={400}
        sizes={responsiveSizes.thumbnail}
      />
      <OptimizedImage
        src="/images/ui/secure-data-icon-usa.webp"
        alt={loanPortalImages.secureData.alt}
        width={400}
        height={400}
        sizes={responsiveSizes.thumbnail}
      />
      <OptimizedImage
        src="/images/ui/best-rates-icon-usa.webp"
        alt="Compare best personal loan rates from 100+ lenders USA"
        width={400}
        height={400}
        sizes={responsiveSizes.thumbnail}
      />
    </div>
  )
}

/**
 * EXAMPLE 4: State-Specific Image
 */
export function StatePageImage({ stateName }: { stateName: string }) {
  return (
    <OptimizedImage
      src={`/images/states/${stateName.toLowerCase()}-personal-loans.webp`}
      alt={`Personal loans in ${stateName} USA - Compare lenders and rates`}
      width={1000}
      height={600}
      sizes={responsiveSizes.large}
      className="w-full"
    />
  )
}

/**
 * EXAMPLE 5: Background Image with Fill
 */
export function HeroWithBackground() {
  return (
    <div className="relative h-[500px] w-full">
      <OptimizedImage
        src="/images/hero/loan-application-background-usa.webp"
        alt="Personal loan application process background USA"
        fill={true} // Uses object-fit: cover
        priority={true}
        sizes="100vw"
        className="z-0"
      />
      <div className="relative z-10">
        <h1>Get Your Personal Loan Today</h1>
      </div>
    </div>
  )
}

/**
 * EXAMPLE 6: Blog Post Thumbnail
 */
export function BlogThumbnail({ imageUrl, title }: { imageUrl: string; title: string }) {
  return (
    <OptimizedImage
      src={imageUrl}
      alt={`${title} - Personal loans guide USA`}
      width={400}
      height={300}
      sizes={responsiveSizes.thumbnail}
      quality={80}
    />
  )
}

/**
 * EXAMPLE 7: Customer Testimonial Photo
 */
export function TestimonialPhoto({ customerName, state }: { customerName: string; state: string }) {
  return (
    <OptimizedImage
      src={`/images/people/testimonial-${customerName.toLowerCase().replace(' ', '-')}.webp`}
      alt={`${customerName} from ${state} - Personal loan success story USA`}
      width={200}
      height={200}
      sizes="200px"
      className="rounded-full"
    />
  )
}

/**
 * EXAMPLE 8: Logo (SVG preferred, but WebP fallback)
 */
export function CompanyLogo() {
  return (
    <OptimizedImage
      src="/images/logos/loan-ai-portal-logo.webp"
      alt="Loan AI Portal - USA personal loans AI matching platform"
      width={200}
      height={60}
      priority={true} // Logo is usually above fold
      quality={100} // Logos need high quality
    />
  )
}

/**
 * EXAMPLE 9: Infographic (Educational Content)
 */
export function CreditScoreChart() {
  return (
    <OptimizedImage
      src="/images/education/credit-score-ranges-usa.webp"
      alt="Credit score ranges 580-850 personal loan approval rates USA infographic"
      width={800}
      height={600}
      sizes={responsiveSizes.large}
      quality={90} // Charts need clarity
    />
  )
}

/**
 * EXAMPLE 10: Mobile App Screenshot
 */
export function MobileAppScreenshot() {
  return (
    <OptimizedImage
      src="/images/ui/mobile-app-personal-loan-usa.webp"
      alt={loanPortalImages.mobileApp.alt}
      width={400}
      height={800}
      sizes={responsiveSizes.small}
    />
  )
}

/**
 * Best Practices Summary:
 * 
 * 1. ✅ Always use descriptive alt text with "USA" and "personal loan" keywords
 * 2. ✅ Set priority={true} for above-the-fold images
 * 3. ✅ Use lazy loading (default) for below-the-fold images
 * 4. ✅ Specify width and height to prevent layout shift
 * 5. ✅ Use appropriate sizes for responsive images
 * 6. ✅ Quality: 85-90 for photos, 100 for logos/charts
 * 7. ✅ WebP format (Next.js handles conversion)
 * 8. ✅ Include location in alt text (USA, state, city)
 * 9. ✅ Use semantic filenames (dashes, lowercase, descriptive)
 * 10. ✅ Test with Lighthouse for performance
 */
