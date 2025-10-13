import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import StickyApplyButtonPH from '@/components/philippines/sticky-apply-button'
import { philippinesCities } from '@/data/philippines-cities'
import { philippinesRegions } from '@/data/philippines-regions'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Philippines Cities – Personal Loans by City | LoansAI',
  description: 'Explore personal loan offers in major cities across the Philippines. Local lenders, competitive rates, fast approval.',
  keywords: 'loans philippines cities, manila, cebu, davao, quezon city, makati, personal loans',
  alternates: {
    canonical: 'https://loansai.com/ph/cities',
  },
}

export default function PhilippinesCitiesPage() {
  // Group cities by region
  const citiesByRegion = philippinesRegions.map(region => ({
    region,
    cities: philippinesCities.filter(city => city.region === region.slug)
  })).filter(group => group.cities.length > 0)

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Philippines Cities - Personal Loans',
    description: 'Personal loans in major cities across the Philippines',
    url: 'https://loansai.com/ph/cities',
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
          name: 'Cities',
          item: 'https://loansai.com/ph/cities'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-cities" type="application/ld+json">
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
                { name: 'Cities', url: '/ph/cities' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personal Loans by City in the Philippines
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find the best loan offers in your city. Explore local lenders, rates, and terms 
              specific to major cities across the Philippines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">35+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities by Region */}
        {citiesByRegion.map(({ region, cities }) => (
          <section key={region.slug} className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {region.name}
                  </h2>
                  <p className="text-gray-600 mt-1">{cities.length} cities available</p>
                </div>
                <Link 
                  href={`/ph/regions/${region.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  View region →
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/ph/cities/${city.region}/${city.slug}`}
                  >
                    <Card className="h-full hover:shadow-xl transition cursor-pointer group">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-3">
                          {city.name}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <p className="flex items-center gap-2">
                            <span>👥</span>
                            <span>{city.population} population</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>💰</span>
                            <span>Avg loan: {city.avgLoanAmount}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>📊</span>
                            <span>Rate: {city.avgRate}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>🏦</span>
                            <span>{city.lenderCount}+ lenders</span>
                          </p>
                        </div>
                        <div className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View details →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why City-Specific Info */}
        <section className="bg-white py-12 mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Why City-Specific Loan Information?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Local Lender Presence</h3>
                  <p className="text-gray-700 text-sm">
                    Different cities have varying concentrations of lenders. Some lenders operate primarily 
                    in specific cities, offering specialized products for local residents.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Economic Factors</h3>
                  <p className="text-gray-700 text-sm">
                    Each city has unique economic characteristics - income levels, cost of living, and 
                    employment rates - that influence loan availability and terms.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Better Matching</h3>
                  <p className="text-gray-700 text-sm">
                    City-specific information helps us match you with lenders who are most active in your 
                    area, increasing your chances of approval and better rates.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Community Insights</h3>
                  <p className="text-gray-700 text-sm">
                    Local information includes insights about typical loan amounts, popular loan types, 
                    and what residents in your city commonly use loans for.
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
