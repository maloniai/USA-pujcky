import type { Metadata } from 'next'
import Link from 'next/link'
import { getNZMetadata } from '@/lib/seo'
import { nzRegions } from '@/data/nz-regions'
import { NZBreadcrumbs } from '@/components/nz/breadcrumbs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DisclosureBlock } from '@/components/nz/disclosure-block'

export const metadata: Metadata = getNZMetadata({
  title: 'Personal Loans by Region | Compare All 16 NZ Regions',
  description: 'Browse personal loan options by region in New Zealand. Compare licensed lenders across all 16 regions from Auckland to Southland.',
  path: '/nz/regions',
})

export default function NZRegionsPage() {
  // Sort regions by population (largest first)
  const sortedRegions = [...nzRegions].sort((a, b) => b.population - a.population)

  return (
    <>
      {/* Breadcrumbs */}
      <NZBreadcrumbs
        items={[
          { name: 'Regions', href: '/nz/regions' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personal Loans by Region
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore licensed lenders and loan options across all 16 regions of New Zealand. Find regional rates, local lenders, and CCCFA-compliant options.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">16</div>
                <div className="text-sm text-blue-200">Regions</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">75+</div>
                <div className="text-sm text-blue-200">Cities</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">5M</div>
                <div className="text-sm text-blue-200">Population</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-blue-200">CCCFA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  All 16 New Zealand Regions
                </h2>
                <p className="text-gray-600">
                  Click on any region to explore city-specific loan options and local lenders.
                </p>
              </div>
              <Link href="/nz/cities">
                <Button variant="outline">
                  Browse All Cities →
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/nz/regions/${region.slug}`}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-blue-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {region.name}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {region.population.toLocaleString()} residents
                      </div>
                    </div>
                    <svg
                      className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {region.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      {region.cities.length} {region.cities.length === 1 ? 'city' : 'cities'}
                    </div>
                    <div className="text-sm font-medium text-blue-600">
                      View loan options →
                    </div>
                  </div>

                  {/* Show top cities */}
                  {region.cities.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">Top cities:</div>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.slice(0, 3).map((city) => (
                          <span
                            key={city.slug}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {city.name}
                          </span>
                        ))}
                        {region.cities.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{region.cities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nationwide Coverage
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our network of licensed lenders serves all 16 regions of New Zealand, from the subtropical north to the alpine south. Whether you're in a major city or rural area, compare loan options tailored to your region.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mb-3">🏙️</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Urban Centers</h3>
                <p className="text-sm text-gray-600">
                  Major cities like Auckland, Wellington, and Christchurch with extensive lender networks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mb-3">🌄</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Regional Cities</h3>
                <p className="text-sm text-gray-600">
                  Mid-sized cities like Hamilton, Tauranga, and Dunedin with local and national lenders.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-4xl mb-3">🏡</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Rural Areas</h3>
                <p className="text-sm text-gray-600">
                  Smaller towns and rural communities served by online lenders and regional banks.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/nz/apply">
                <Button size="lg" className="text-lg px-8">
                  Apply for a Loan →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Block */}
      <DisclosureBlock />
    </>
  )
}
