import Script from 'next/script'

interface CollectionItem {
  name: string
  url: string
  description?: string
}

interface CollectionPageSchemaProps {
  name: string
  description: string
  url: string
  items?: CollectionItem[]
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

/**
 * CollectionPage Schema Component
 * 
 * Provides structured data for hub pages (country hubs, region indexes, city indexes)
 * to help search engines understand the page hierarchy and content organization.
 * 
 * @see https://schema.org/CollectionPage
 */
export function CollectionPageSchema({
  name,
  description,
  url,
  items,
  breadcrumbs,
}: CollectionPageSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    ...(items && items.length > 0 && {
      hasPart: items.map((item) => ({
        '@type': 'WebPage',
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
      })),
    }),
    ...(breadcrumbs && breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
    }),
  }

  return (
    <Script
      id={`collection-page-schema-${url.replace(/[^a-z0-9]/gi, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

/**
 * Example Usage:
 * 
 * // US States Hub
 * <CollectionPageSchema
 *   name="Personal Loans by State - United States"
 *   description="Compare personal loan regulations, rates, and lenders across all 50 U.S. states"
 *   url="https://loansai.com/us/states"
 *   items={usStates.map(state => ({
 *     name: state.name,
 *     url: `https://loansai.com/us/states/${state.slug}`,
 *     description: `Personal loans in ${state.name}`
 *   }))}
 *   breadcrumbs={[
 *     { name: 'Home', url: 'https://loansai.com' },
 *     { name: 'United States', url: 'https://loansai.com/us' },
 *     { name: 'States', url: 'https://loansai.com/us/states' }
 *   ]}
 * />
 */
