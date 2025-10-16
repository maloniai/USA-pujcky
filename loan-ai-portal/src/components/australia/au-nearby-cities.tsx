import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { AUCity } from '@/data/au-regions'

interface AUNearbyCitiesProps {
  cities: AUCity[]
  currentCity?: string
  title?: string
  className?: string
}

export default function AUNearbyCities({ 
  cities, 
  currentCity, 
  title = 'Loans in Nearby Cities',
  className = '' 
}: AUNearbyCitiesProps) {
  // Filter out current city if specified
  const displayCities = currentCity 
    ? cities.filter(city => city.name !== currentCity)
    : cities

  if (displayCities.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-blue-600" />
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCities.map((city) => (
          <Link
            key={city.slug}
            href={`/au/cities/${city.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
              {city.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{city.state}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Pop: {(city.population / 1000).toFixed(0)}k</span>
              <span>Median: ${(city.medianIncome / 1000).toFixed(0)}k</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
