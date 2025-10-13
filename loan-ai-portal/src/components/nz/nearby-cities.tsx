import Link from 'next/link'
import { Card } from '@/components/ui/card'

export interface NearbyCityItem {
  name: string
  region: string
  slug: string
  regionSlug: string
  distance?: string
}

interface NearbyCitiesProps {
  cities: NearbyCityItem[]
  currentCity?: string
}

export function NearbyCities({ cities, currentCity }: NearbyCitiesProps) {
  if (cities.length === 0) return null

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Nearby Cities in New Zealand
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={`${city.regionSlug}-${city.slug}`}
              href={`/nz/cities/${city.regionSlug}/${city.slug}`}
              className="group"
            >
              <Card className="p-4 h-full transition-all hover:shadow-lg hover:border-blue-500">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {city.region} Region
                    </p>
                    {city.distance && (
                      <p className="text-xs text-gray-500 mt-1">
                        {city.distance}
                      </p>
                    )}
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
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
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Compare personal loan rates
                </p>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link
            href="/nz/cities"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View All New Zealand Cities
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
