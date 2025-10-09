/**
 * Hreflang Tags Component
 * 
 * Generates proper hreflang alternate links for bilingual pages (en/es)
 * Ensures Google understands language/region targeting and prevents duplicate content issues
 * 
 * Features:
 * - Self-referencing canonical with hreflang
 * - x-default directive pointing to English version
 * - Proper locale codes (en-US, es-US)
 * - Absolute URLs for all alternates
 */

interface HreflangTagsProps {
  /** Current page locale */
  locale: 'en' | 'es'
  /** Path without locale prefix (e.g., '/states/california' or '/') */
  path?: string
  /** Override canonical URL if needed */
  canonicalOverride?: string
  /** Toggle Spanish alternates when localized content isn’t available */
  includeSpanish?: boolean
}

export default function HreflangTags({
  locale,
  path = '/',
  canonicalOverride,
  includeSpanish = true,
}: HreflangTagsProps) {
  const baseUrl = 'https://loan-platform.com'
  
  // Normalize path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Build URLs
  const enUrl = canonicalOverride || `${baseUrl}${normalizedPath}`
  const esUrl = `${baseUrl}/es${normalizedPath}`
  
  // Current canonical is based on locale
  const canonical = locale === 'es' ? esUrl : enUrl
  
  return (
    <>
      {/* Canonical - self-referencing */}
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="en-US" href={enUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      {includeSpanish && (
        <>
          <link rel="alternate" hrefLang="es-US" href={esUrl} />
          <link rel="alternate" hrefLang="es" href={esUrl} />
        </>
      )}
      
      {/* x-default points to English as primary */}
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  )
}
