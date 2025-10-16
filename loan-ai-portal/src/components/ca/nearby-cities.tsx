import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface NearbyCityItem {
  name: string
  nameFr?: string
  slug: string
  regionSlug: string
}

interface CANearbyCitiesProps {
  cities: NearbyCityItem[]
  currentCity?: string
  lang?: 'en' | 'fr'
}

export default function CANearbyCities({ cities, currentCity, lang = 'en' }: CANearbyCitiesProps) {
  const title = lang === 'fr' ? 'Villes voisines' : 'Nearby Cities'
  const viewAllText = lang === 'fr' ? 'Voir toutes les villes' : 'View All Cities'
  const loansText = lang === 'fr' ? 'Prêts à' : 'Loans in'

  // Filter out current city if provided
  const filteredCities = currentCity
    ? cities.filter((city) => city.name !== currentCity)
    : cities

  // Show maximum 6 cities
  const displayCities = filteredCities.slice(0, 6)

  if (displayCities.length === 0) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayCities.map((city) => {
            const displayName = lang === 'fr' && city.nameFr ? city.nameFr : city.name
            return (
              <Card key={city.slug} className="p-6 hover:shadow-lg transition-shadow">
                <Link
                  href={`/ca/cities/${city.regionSlug}/${city.slug}`}
                  className="block"
                >
                  <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700 mb-2">
                    {displayName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {loansText} {displayName}
                  </p>
                </Link>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
          <Link
            href="/ca/cities"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  )
}
