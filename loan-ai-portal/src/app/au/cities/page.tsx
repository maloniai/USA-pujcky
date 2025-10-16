import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import AUBreadcrumbs from '@/components/australia/au-breadcrumbs'
import { australiaStates, cityToSlug, getAllAUCities } from '@/data/au-regions'

export const metadata: Metadata = {
  title: 'Australian Cities - Personal Loans by Location | 2025',
  description: 'Compare personal loans across 165+ Australian cities. Find ASIC-regulated lenders in your local area from Sydney to Perth, Melbourne to Brisbane.',
  keywords: 'Australian city loans, local lenders, city by city loans, ASIC regulated',
}

export default function AUCitiesPage() {
  const allCities = getAllAUCities()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <AUBreadcrumbs
          items={[
            { label: 'Cities', href: '/au/cities' },
          ]}
        />

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Personal Loans by Australian City
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Find competitive loan rates from ASIC-regulated lenders in your local area. 
            Browse {allCities.length} cities across all states and territories.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{allCities.length}</div>
            <div className="text-gray-600">Cities Covered</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">90%+</div>
            <div className="text-gray-600">Population Coverage</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5.99%+</div>
            <div className="text-gray-600">Starting Rates</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">ASIC Licensed</div>
          </Card>
        </div>

        {/* Cities by State */}
        {australiaStates.map((state) => (
          <div key={state.slug} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{state.emoji}</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {state.name}
                </h2>
                <p className="text-gray-600">
                  {state.cities.length} cities • {state.population}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {state.cities.map((city) => (
                <Link
                  key={city.name}
                  href={`/au/cities/${state.slug}/${cityToSlug(city.name)}`}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow h-full group">
                    <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                      {city.name}
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div>Pop. {city.population.toLocaleString()}</div>
                      <div>Median: ${city.medianIncome.toLocaleString()}</div>
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-2">
                      {city.description}
                    </p>
                    <div className="mt-3 text-blue-600 text-sm font-medium">
                      View Loans →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Coverage Info */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-white mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Australian Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Urban</div>
              <p className="text-gray-700">
                100% coverage of major metropolitan areas including all capital cities
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Regional</div>
              <p className="text-gray-700">
                Extensive coverage of regional centres and coastal communities
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Remote</div>
              <p className="text-gray-700">
                Selected coverage in remote areas including mining towns
              </p>
            </div>
          </div>
        </Card>

        {/* Back Link */}
        <div className="mt-8">
          <Link href="/au" className="text-blue-600 hover:text-blue-700">
            ← Back to Australia Home
          </Link>
        </div>
      </div>
    </div>
  )
}
