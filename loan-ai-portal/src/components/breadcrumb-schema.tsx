'use client'

/**
 * Breadcrumb Schema Component
 * Generates BreadcrumbList structured data for improved SEO and navigation
 * 
 * Benefits:
 * - Rich breadcrumb snippets in Google Search results
 * - Better site structure understanding by search engines
 * - Improved user navigation from search results
 * - AI search engines can better understand page hierarchy
 */

export interface BreadcrumbItem {
  name: string
  url: string
  position: number
}

/**
 * Predefined breadcrumb configurations for common page types
 */
export const breadcrumbConfigs = {
  // State page breadcrumbs: Home > States > [State Name]
  statePage: (stateName: string, stateSlug: string): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'States', url: '/states', position: 2 },
    { name: `${stateName} Personal Loans`, url: `/states/${stateSlug}`, position: 3 },
  ],

  // City page breadcrumbs: Home > States > [State] > [City]
  cityPage: (stateName: string, stateSlug: string, cityName: string, citySlug: string): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'States', url: '/states', position: 2 },
    { name: stateName, url: `/states/${stateSlug}`, position: 3 },
    { name: `${cityName} Personal Loans`, url: `/states/${stateSlug}/${citySlug}`, position: 4 },
  ],

  // About page breadcrumbs: Home > About
  aboutPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'About Us', url: '/about', position: 2 },
  ],

  // AI Matching page breadcrumbs: Home > AI Loan Matching
  aiMatchingPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'AI Loan Matching', url: '/ai-loan-matching', position: 2 },
  ],

  // Blog index breadcrumbs: Home > Blog
  blogPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Blog', url: '/blog', position: 2 },
  ],

  // FAQ page breadcrumbs: Home > FAQ
  faqPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'FAQ', url: '/faq', position: 2 },
  ],

  // Contact page breadcrumbs: Home > Contact
  contactPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Contact Us', url: '/contact', position: 2 },
  ],

  // Apply page breadcrumbs: Home > Apply
  applyPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Apply for Loan', url: '/apply', position: 2 },
  ],

  // Privacy page breadcrumbs: Home > Privacy Policy
  privacyPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Privacy Policy', url: '/privacy', position: 2 },
  ],

  // Terms page breadcrumbs: Home > Terms of Service
  termsPage: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Terms of Service', url: '/terms', position: 2 },
  ],

  // Blog post breadcrumbs: Home > Blog > [Post Title]
  blogPost: (postTitle: string, postSlug: string): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Blog', url: '/blog', position: 2 },
    { name: postTitle, url: `/blog/${postSlug}`, position: 3 },
  ],

  // Learn article breadcrumbs: Home > Learn > [Article Title]
  learnArticle: (articleTitle: string, articleSlug: string): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Learn', url: '/learn', position: 2 },
    { name: articleTitle, url: `/learn/${articleSlug}`, position: 3 },
  ],

  // Cities index page breadcrumbs: Home > Cities
  cities: (): BreadcrumbItem[] => [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Cities', url: '/cities', position: 2 },
  ],
}

/**
 * Helper function to generate state page breadcrumbs
 * Usage: <BreadcrumbSchema items={generateStateBreadcrumbs('California', 'california')} />
 */
export function generateStateBreadcrumbs(stateName: string, stateSlug: string): BreadcrumbItem[] {
  return breadcrumbConfigs.statePage(stateName, stateSlug)
}

/**
 * Helper function to generate city page breadcrumbs
 */
export function generateCityBreadcrumbs(
  stateName: string,
  stateSlug: string,
  cityName: string,
  citySlug: string
): BreadcrumbItem[] {
  return breadcrumbConfigs.cityPage(stateName, stateSlug, cityName, citySlug)
}

type BreadcrumbConfigKey =
  | 'cities'
  | 'states'
  | 'about'
  | 'faq'
  | 'contact'
  | 'apply'
  | 'privacy'
  | 'terms'
  | 'aiMatching'
  | 'blog'

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[]
  config?: BreadcrumbConfigKey
}

export function BreadcrumbSchema({ items, config }: BreadcrumbSchemaProps) {
  // If config is provided, use predefined configuration
  let breadcrumbItems = items
  if (config && !items) {
    switch (config) {
      case 'cities':
        breadcrumbItems = breadcrumbConfigs.cities()
        break
      case 'aiMatching':
        breadcrumbItems = breadcrumbConfigs.aiMatchingPage()
        break
      case 'about':
        breadcrumbItems = breadcrumbConfigs.aboutPage()
        break
      case 'faq':
        breadcrumbItems = breadcrumbConfigs.faqPage()
        break
      case 'contact':
        breadcrumbItems = breadcrumbConfigs.contactPage()
        break
      case 'apply':
        breadcrumbItems = breadcrumbConfigs.applyPage()
        break
      case 'blog':
        breadcrumbItems = breadcrumbConfigs.blogPage()
        break
      case 'privacy':
        breadcrumbItems = breadcrumbConfigs.privacyPage()
        break
      case 'terms':
        breadcrumbItems = breadcrumbConfigs.termsPage()
        break
      default:
        breadcrumbItems = []
    }
  }

  if (!breadcrumbItems || breadcrumbItems.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item) => ({
      '@type': 'ListItem',
      'position': item.position,
      'name': item.name,
      'item': `https://loan-platform.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
