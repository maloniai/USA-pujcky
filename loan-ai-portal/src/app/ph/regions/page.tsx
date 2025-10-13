import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import StickyApplyButtonPH from '@/components/philippines/sticky-apply-button'
import { philippinesRegions } from '@/data/philippines-regions'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Philippines Regions – Personal Loans by Region | LoansAI',
  description: 'Explore personal loan offers in all administrative regions of the Philippines. Local regulations, licensed lenders, competitive rates.',
  keywords: 'loans philippines regions, ncr, central luzon, calabarzon, cebu, davao, visayas, mindanao',
  alternates: {
    canonical: 'https://loansai.com/ph/regions',
  },
}

export default function PhilippinesRegionsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Philippines Regions - Personal Loans',
    description: 'Personal loans in all administrative regions of the Philippines',
    url: 'https://loansai.com/ph/regions',
    breadcrumb: {
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
          name: 'Philippines',
          item: 'https://loansai.com/ph'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Regions',
          item: 'https://loansai.com/ph/regions'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-regions" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <PhilippinesNavigation />
      <StickyApplyButtonPH />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Philippines', url: '/ph' },
                { name: 'Regions', url: '/ph/regions' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personal Loans by Region in the Philippines
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore region-specific loan offers for each of the administrative regions. 
              Information about local regulations, available lenders, and average rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">35+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {philippinesRegions.map((region) => (
                <Link key={region.slug} href={`/ph/regions/${region.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition">
                        {region.name}
                      </CardTitle>
                      <p className="text-gray-600 mt-2">{region.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">👥</span>
                          <div>
                            <div className="font-semibold text-gray-900">Population</div>
                            <div className="text-gray-600">{region.population}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">💰</span>
                          <div>
                            <div className="font-semibold text-gray-900">Avg Loan</div>
                            <div className="text-gray-600">{region.avgLoanAmount}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">📊</span>
                          <div>
                            <div className="font-semibold text-gray-900">Avg Rate</div>
                            <div className="text-gray-600">{region.avgRate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">🏙️</span>
                          <div>
                            <div className="font-semibold text-gray-900">Major Cities</div>
                            <div className="text-gray-600">{region.majorCities.slice(0, 3).join(', ')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                        Explore region →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Region-Specific Info */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Why Region-Specific Information?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Local Offers</h3>
                  <p className="text-gray-700 text-sm">
                    Lenders may have different offers and terms depending on the region where you operate. 
                    Region-specific information helps you find the best local options.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Economic Context</h3>
                  <p className="text-gray-700 text-sm">
                    Each region has unique economic characteristics that influence the loan market - 
                    from average income to cost of living.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Access to Lenders</h3>
                  <p className="text-gray-700 text-sm">
                    Some lenders have a stronger presence in certain regions. Knowing these details 
                    increases your chances of approval.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Cities and Communities</h3>
                  <p className="text-gray-700 text-sm">
                    Explore city-specific loans within your region for even more detailed information 
                    tailored to your community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhilippinesFooter />
    </>
  )
}
