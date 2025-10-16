import Link from 'next/link'

interface CABreadcrumbItem {
  name: string
  nameFr?: string
  href: string
}

interface CABreadcrumbsProps {
  items: CABreadcrumbItem[]
  lang?: 'en' | 'fr'
}

export default function CABreadcrumbs({ items, lang = 'en' }: CABreadcrumbsProps) {
  const homeText = lang === 'fr' ? 'Accueil' : 'Home'
  const canadaText = lang === 'fr' ? 'Canada' : 'Canada'

  // Build full path including home and Canada
  const fullPath = [
    { name: homeText, nameFr: 'Accueil', href: '/' },
    { name: canadaText, nameFr: 'Canada', href: '/ca' },
    ...items,
  ]

  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullPath.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: lang === 'fr' && item.nameFr ? item.nameFr : item.name,
      item: `https://loan-platform.com${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          {fullPath.map((item, index) => {
            const isLast = index === fullPath.length - 1
            const displayName = lang === 'fr' && item.nameFr ? item.nameFr : item.name

            return (
              <li key={item.href} className="flex items-center gap-2">
                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {displayName}
                    </Link>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <span className="text-gray-900 font-medium">{displayName}</span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
