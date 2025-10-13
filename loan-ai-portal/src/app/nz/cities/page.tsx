import type { Metadata } from 'next'
import Link from 'next/link'
import { getNZMetadata } from '@/lib/seo'
import { nzRegions, getAllNZCities } from '@/data/nz-regions'
import { NZBreadcrumbs } from '@/components/nz/breadcrumbs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DisclosureBlock } from '@/components/nz/disclosure-block'

export const metadata: Metadata = getNZMetadata({
  title: 'Personal Loans by City | Compare Rates in 75+ NZ Cities',
  description: 'Browse personal loan options by city in New Zealand. Compare licensed lenders across 75+ cities from Auckland to Invercargill.',
  path: '/nz/cities',
})

export default function NZCitiesPage() {
  const allCities = getAllNZCities()

  // Group cities by region for display
  const regionsSorted = [...nzRegions].sort((a, b) => b.population - a.population)

  return (
    <>
      {/* Breadcrumbs */}
      <NZBreadcrumbs
        items={[
          { name: 'Cities', href: '/nz/cities' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personal Loans by City
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find licensed lenders and compare loan rates in over 75 cities across New Zealand. CCCFA-compliant options for every location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 w-full sm:w-auto">
                  Apply Now →
                </Button>
              </Link>
              <Link href="/nz/regions">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Browse by Region
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{allCities.length}</div>
              <div className="text-sm text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">16</div>
              <div className="text-sm text-gray-600">Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5M</div>
              <div className="text-sm text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">7.95%</div>
              <div className="text-sm text-gray-600">Rates from</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              All {allCities.length} Cities
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              Click on any city to explore local loan options and licensed lenders.
            </p>

            <div className="space-y-12">
              {regionsSorted.map((region) => (
                <div key={region.slug}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {region.name} Region
                      </h3>
                      <p className="text-sm text-gray-600">
                        {region.population.toLocaleString()} residents • {region.cities.length} cities
                      </p>
                    </div>
                    <Link
                      href={`/nz/regions/${region.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Region →
                    </Link>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {region.cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/nz/cities/${region.slug}/${city.slug}`}
                        className="group"
                      >
                        <Card className="p-4 h-full hover:shadow-md hover:border-blue-500 transition-all">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {city.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                Compare rates
                              </p>
                            </div>
                            <svg
                              className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Compare Loan Options?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Apply online and receive offers from multiple licensed lenders in minutes. All lenders comply with CCCFA 2003 for your protection.
            </p>
            <Link href="/nz/apply">
              <Button size="lg" className="text-lg px-8">
                Apply for a Loan →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclosure Block */}
      <DisclosureBlock />
    </>
  )
}
