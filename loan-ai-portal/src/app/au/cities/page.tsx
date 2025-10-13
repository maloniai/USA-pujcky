import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import StickyApplyButton from '@/components/australia/sticky-apply-button'
import { australiaCities } from '@/data/australia-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans by City - Australia | LoansAI',
  description: 'Compare personal loans across major Australian cities. City-specific lenders, rates, and local market insights.',
  alternates: {
    canonical: 'https://loansai.com/au/cities',
  },
}

export default function AustraliaCitiesPage() {
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
        name: 'Australia',
        item: 'https://loansai.com/au'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cities',
        item: 'https://loansai.com/au/cities'
      }
    ]
  }

  // Group cities by state
  const citiesByState = australiaCities.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = []
    }
    acc[city.state].push(city)
    return acc
  }, {} as Record<string, typeof australiaCities>)

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <AustraliaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personal Loans by City
              </h1>
              <p className="text-xl opacity-90">
                Explore personal loan options in major Australian cities. Find local lenders, average rates, and city-specific insights.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/au" className="hover:text-blue-600">Australia</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Cities</span>
            </nav>
          </div>
        </div>

        {/* Cities by State */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {Object.entries(citiesByState).map(([state, cities]) => (
              <div key={state} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-blue-900">
                    {state}
                  </h2>
                  <Link href={`/au/regions/${cities[0].stateSlug}`}>
                    <Button variant="outline">
                      View State Details
                    </Button>
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Card key={city.slug} className="hover:shadow-lg transition-all h-full hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-900">
                          {city.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                          {city.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <p className="flex items-center gap-2">
                            <span>👥</span>
                            <span><strong>Population:</strong> {city.population}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>💰</span>
                            <span><strong>Avg Loan:</strong> {city.avgLoanAmount}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>📊</span>
                            <span><strong>Avg Rate:</strong> {city.avgRate}</span>
                          </p>
                        </div>
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-600 mb-2">
                            <strong>Popular Lenders:</strong>
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {city.popularLenders.slice(0, 3).map((lender) => (
                              <span key={lender} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {lender}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Why City-Specific Loan Information Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">💰 Cost of Living</h3>
                  <p className="text-gray-700 text-sm">
                    Loan amounts and approval criteria often reflect local cost of living. Sydney and Melbourne typically see higher loan amounts than regional cities.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🏦 Local Lenders</h3>
                  <p className="text-gray-700 text-sm">
                    Many cities have local credit unions and regional banks offering competitive rates alongside national lenders.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📊 Market Conditions</h3>
                  <p className="text-gray-700 text-sm">
                    Local economic conditions, employment rates, and property markets influence loan availability and interest rates.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🎯 Targeted Offers</h3>
                  <p className="text-gray-700 text-sm">
                    Some lenders offer special promotions or products designed specifically for residents of certain cities or regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Find the Best Loan in Your City
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Get personalized offers from lenders available in your area
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Apply Now - Free & Fast
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
