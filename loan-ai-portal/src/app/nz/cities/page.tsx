import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'
import StickyApplyButton from '@/components/newzealand/sticky-apply-button'
import { newzealandCities, getCitiesByPopulation } from '@/data/newzealand-cities'
import { newzealandRegions } from '@/data/newzealand-regions'

export const metadata: Metadata = {
  title: 'Loans by City in New Zealand – Compare 2025',
  description: 'Explore personal loan options in major cities across New Zealand. Find local lenders, compare rates, and discover city-specific loan information.',
  keywords: 'new zealand cities, loans by city, local lenders, FMA licensed, city loans nz',
  alternates: {
    canonical: 'https://loansai.com/nz/cities',
  },
}

export default function CitiesPage() {
  const sortedCities = getCitiesByPopulation()

  // Group cities by region
  const citiesByRegion = newzealandRegions.map(region => ({
    region,
    cities: sortedCities.filter(city => city.regionSlug === region.slug)
  })).filter(group => group.cities.length > 0)

  return (
    <>
      <NewZealandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans by City in New Zealand
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Explore personal loan options in major cities across New Zealand. Each city has unique 
              lending markets and local lender availability. Find information specific to your city.
            </p>

            {citiesByRegion.map(({ region, cities }) => (
              <div key={region.slug} className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  {region.name} Region
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link key={city.slug} href={`/nz/cities/${city.regionSlug}/${city.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition">
                            {city.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                              <span>👥</span>
                              <span>{city.population}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <span>💰</span>
                              <span>Avg: {city.avgLoanAmount}</span>
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
                          <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View details →
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 text-center">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply for a Loan
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <NewZealandFooter />
    </>
  )
}
