import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import StickyApplyButton from '@/components/canada/sticky-apply-button'
import { canadianCities } from '@/data/ca-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Canadian Cities - Personal Loan Information by City',
  description: 'Find personal loan options and licensed lenders in 200+ Canadian cities. Local lending information for major metropolitan areas and smaller communities.',
  keywords: 'canadian cities, city loans, local lenders, urban loans, metropolitan lending',
  openGraph: {
    title: 'Canadian Cities - Local Loan Information',
    description: 'City-specific personal loan information across Canada.',
    url: 'https://loansai.com/ca/cities',
    siteName: 'LoansAI Canada',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ca/cities',
  },
}

export default function CanadaCitiesPage() {
  // Group cities by province
  const citiesByProvince = canadianCities.reduce((acc, city) => {
    if (!acc[city.provinceAbbr]) {
      acc[city.provinceAbbr] = []
    }
    acc[city.provinceAbbr].push(city)
    return acc
  }, {} as Record<string, typeof canadianCities>)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Canada',
        item: 'https://loansai.com/ca'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cities',
        item: 'https://loansai.com/ca/cities'
      }
    ]
  }

  // Major cities for featured section
  const majorCities = canadianCities.filter(c => c.isMajorMetro).slice(0, 12)

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <CanadaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">Cities</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Canadian Cities Loan Directory
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find personal loan information for 200+ Canadian cities. Compare rates from licensed lenders in your local area.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
                <div className="text-sm text-gray-600">Provinces & Territories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">39M</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
            </div>

            {/* Major Metropolitan Areas */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Major Metropolitan Areas</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {majorCities.map((city) => (
                  <Link key={city.slug} href={`/ca/cities/${city.slug}`}>
                    <Card className="hover:shadow-xl transition-all h-full cursor-pointer group border-2 hover:border-blue-400">
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition">
                          {city.name}
                          <div className="text-sm text-gray-500 font-normal mt-1">
                            {city.provinceAbbr} • {city.population}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{city.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>💰</span>
                            <span><strong>Loan Range:</strong> {city.loanRange}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <span>📊</span>
                            <span><strong>Avg Rate:</strong> {city.avgRate}</span>
                          </div>
                          {city.isProvincialCapital && (
                            <div className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                              Provincial Capital
                            </div>
                          )}
                        </div>
                        <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                          Explore {city.name} →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cities by Province */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Cities by Province</h2>
              <div className="space-y-6">
                {Object.entries(citiesByProvince).map(([provinceAbbr, cities]) => (
                  <div key={provinceAbbr} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">{provinceAbbr}</span>
                      <span className="text-sm text-gray-500 font-normal">
                        ({cities.length} {cities.length === 1 ? 'city' : 'cities'})
                      </span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {cities.slice(0, 15).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/ca/cities/${city.slug}`}
                          className="text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition"
                        >
                          {city.name}
                        </Link>
                      ))}
                      {cities.length > 15 && (
                        <Link
                          href={`/ca/regions/${cities[0].province}`}
                          className="text-sm text-blue-600 hover:text-blue-700 font-semibold p-2 rounded transition"
                        >
                          View all {cities.length} cities →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Find Loans in Your City</h2>
              <p className="text-lg mb-6 opacity-90">
                Compare personalized offers from licensed lenders in your area
              </p>
              <Link href="/ca/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Apply Now - Free & Fast
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
