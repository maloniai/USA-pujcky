import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import StickyApplyButton from '@/components/australia/sticky-apply-button'
import { australiaRegions } from '@/data/australia-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans by State & Territory - Australia | LoansAI',
  description: 'Compare personal loans across all Australian states and territories. State-specific regulations, rates, and licensed lenders.',
  alternates: {
    canonical: 'https://loansai.com/au/regions',
  },
}

export default function AustraliaRegionsPage() {
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
        name: 'States & Territories',
        item: 'https://loansai.com/au/regions'
      }
    ]
  }

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
                Personal Loans by State & Territory
              </h1>
              <p className="text-xl opacity-90">
                Explore personal loan options, regulations, and licensed lenders specific to each Australian state and territory.
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
              <span className="text-gray-900">States & Territories</span>
            </nav>
          </div>
        </div>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {australiaRegions.map((region) => (
                <Link key={region.slug} href={`/au/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-all h-full cursor-pointer group hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition">
                          {region.name}
                        </CardTitle>
                        <span className="text-2xl">{region.abbreviation === 'NSW' ? '🌊' : region.abbreviation === 'VIC' ? '🏛️' : region.abbreviation === 'QLD' ? '☀️' : region.abbreviation === 'WA' ? '⛏️' : region.abbreviation === 'SA' ? '🍷' : region.abbreviation === 'ACT' ? '🏛️' : region.abbreviation === 'TAS' ? '🏔️' : '🦘'}</span>
                      </div>
                      <p className="text-sm text-gray-600 font-normal">
                        {region.abbreviation}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {region.description}
                      </p>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span><strong>Population:</strong> {region.population}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span><strong>Avg Loan:</strong> {region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span><strong>Avg Rate:</strong> {region.avgRate}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>🏆</span>
                          <span><strong>Max Loan:</strong> {region.maxLoanAmount}</span>
                        </p>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-2">
                          <strong>Major Cities:</strong>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {region.majorCities.slice(0, 3).map((city) => (
                            <span key={city} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View {region.name} details →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Why Choose State-Specific Loan Information?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📍 Local Market Insights</h3>
                  <p className="text-gray-700 text-sm">
                    Each state has unique economic conditions, employment patterns, and cost of living factors that influence loan availability and rates.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">🏦 Available Lenders</h3>
                  <p className="text-gray-700 text-sm">
                    Discover which national banks, regional banks, credit unions, and online lenders operate in your state.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">⚖️ State Regulations</h3>
                  <p className="text-gray-700 text-sm">
                    While federal NCCP Act applies nationally, some states have additional consumer protections and specific lending requirements.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">💡 Loan Type Trends</h3>
                  <p className="text-gray-700 text-sm">
                    Learn about popular loan types in your state, from debt consolidation to home improvement and vehicle financing.
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
              Ready to Compare Loans?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Get personalized loan offers from licensed lenders in your state
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
