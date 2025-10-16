import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import AUBreadcrumbs from '@/components/australia/au-breadcrumbs'
import { australiaStates } from '@/data/au-regions'

export const metadata: Metadata = {
  title: 'Australian States & Territories - Compare Loans | 2025',
  description: 'Explore personal loan options across all 8 Australian states and territories. Find ASIC-regulated lenders in NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.',
  keywords: 'Australian states loans, territory loans, ASIC regulated lenders, state by state loans',
}

export default function AUStatesPage() {
  const totalCities = australiaStates.reduce((sum, state) => sum + state.cities.length, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <AUBreadcrumbs
          items={[
            { label: 'States & Territories', href: '/au/states' },
          ]}
        />

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Australian States & Territories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Compare personal loans from ASIC-regulated lenders across all 8 Australian states and territories. 
            Find competitive rates and terms tailored to your local area.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">States & Territories</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalCities}</div>
            <div className="text-gray-600">Cities Covered</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5.99%+</div>
            <div className="text-gray-600">Starting Rates</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">ASIC Regulated</div>
          </Card>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {australiaStates.map((state) => (
            <Link key={state.slug} href={`/au/states/${state.slug}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{state.name}</h2>
                    <p className="text-sm text-gray-500">{state.abbreviation}</p>
                  </div>
                  <span className="text-3xl">{state.emoji}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-semibold">{state.population}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cities:</span>
                    <span className="font-semibold">{state.cities.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capital:</span>
                    <span className="font-semibold">{state.capital}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {state.description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500 mb-2">Top Cities:</div>
                  <div className="flex flex-wrap gap-2">
                    {state.cities.slice(0, 3).map((city) => (
                      <span key={city.name} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">
                  View {state.name} Loans →
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Coverage Information */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">90%+</div>
              <p className="text-gray-700">
                Coverage of Australia's population across major metropolitan and regional centres
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700">
                All featured lenders hold current ASIC registration and comply with NCCP Act
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-700">
                Online applications available around the clock from anywhere in Australia
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
