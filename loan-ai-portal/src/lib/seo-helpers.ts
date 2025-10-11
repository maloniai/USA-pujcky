/**
 * SEO Helper Utilities
 * 
 * Centralized functions for generating consistent SEO metadata
 * across English and Spanish routes with proper hreflang handling
 */

export interface LocalizedSEOConfig {
  path: string
  locale: 'en' | 'es'
  title: string
  description: string
  keywords?: string[]
}

/**
 * Generate metadata for state pages with hreflang
 */
export function generateStateMetadata(stateSlug: string, locale: 'en' | 'es' = 'en') {
  const baseUrl = 'https://loan-platform.com'
  const enPath = `/states/${stateSlug}`
  const esPath = `/es/states/${stateSlug}`
  
  return {
    canonicalUrl: locale === 'es' ? `${baseUrl}${esPath}` : `${baseUrl}${enPath}`,
    alternateLanguages: {
      'en': `${baseUrl}${enPath}`,
      'es': `${baseUrl}${esPath}`,
      'en-US': `${baseUrl}${enPath}`,
      'es-US': `${baseUrl}${esPath}`,
      'x-default': `${baseUrl}${enPath}`,
    },
    locale: locale === 'es' ? 'es_US' : 'en_US',
    alternateLocales: locale === 'es' ? ['en_US'] : ['es_US'],
  }
}

/**
 * Generate metadata for city pages with hreflang
 */
export function generateCityMetadata(
  stateSlug: string, 
  citySlug: string, 
  locale: 'en' | 'es' = 'en'
) {
  const baseUrl = 'https://loan-platform.com'
  const enPath = `/cities/${stateSlug}/${citySlug}`
  const esPath = `/es/cities/${stateSlug}/${citySlug}`
  
  return {
    canonicalUrl: locale === 'es' ? `${baseUrl}${esPath}` : `${baseUrl}${enPath}`,
    alternateLanguages: {
      'en': `${baseUrl}${enPath}`,
      'es': `${baseUrl}${esPath}`,
      'en-US': `${baseUrl}${enPath}`,
      'es-US': `${baseUrl}${esPath}`,
      'x-default': `${baseUrl}${enPath}`,
    },
    locale: locale === 'es' ? 'es_US' : 'en_US',
    alternateLocales: locale === 'es' ? ['en_US'] : ['es_US'],
  }
}

/**
 * Generate metadata for learn/blog pages with hreflang
 */
export function generateLearnMetadata(slug: string, locale: 'en' | 'es' = 'en') {
  const baseUrl = 'https://loan-platform.com'
  const enPath = `/learn/${slug}`
  const esPath = `/es/learn/${slug}`
  
  return {
    canonicalUrl: locale === 'es' ? `${baseUrl}${esPath}` : `${baseUrl}${enPath}`,
    alternateLanguages: {
      'en': `${baseUrl}${enPath}`,
      'es': `${baseUrl}${esPath}`,
      'en-US': `${baseUrl}${enPath}`,
      'es-US': `${baseUrl}${esPath}`,
      'x-default': `${baseUrl}${enPath}`,
    },
    locale: locale === 'es' ? 'es_US' : 'en_US',
    alternateLocales: locale === 'es' ? ['en_US'] : ['es_US'],
  }
}

/**
 * Generate generic page metadata with hreflang for any path
 */
export function generatePageMetadataWithLocale(
  path: string,
  locale: 'en' | 'es' = 'en'
) {
  const baseUrl = 'https://loan-platform.com'
  const enPath = path.startsWith('/') ? path : `/${path}`
  const esPath = locale === 'es' && !path.startsWith('/es') ? `/es${enPath}` : enPath
  
  const canonicalPath = locale === 'es' ? esPath : enPath
  
  return {
    canonicalUrl: `${baseUrl}${canonicalPath}`,
    alternateLanguages: {
      'en': `${baseUrl}${enPath}`,
      'es': `${baseUrl}${esPath}`,
      'en-US': `${baseUrl}${enPath}`,
      'es-US': `${baseUrl}${esPath}`,
      'x-default': `${baseUrl}${enPath}`,
    },
    locale: locale === 'es' ? 'es_US' : 'en_US',
    alternateLocales: locale === 'es' ? ['en_US'] : ['es_US'],
  }
}

/**
 * Build structured breadcrumb JSON-LD
 */
export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Build FAQ schema JSON-LD
 */
export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
