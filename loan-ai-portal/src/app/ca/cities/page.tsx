import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'
import { caProvinces } from '@/data/ca-provinces'
import CANavigation from '@/components/canada/ca-navigation'
import CAFooter from '@/components/canada/ca-footer'
import CAStickyApplyButton from '@/components/canada/ca-sticky-apply-button'

export const metadata: Metadata = {
  title: 'Personal Loans by City in Canada – Compare Local Lenders',
  description: 'Find personal loans in 70+ Canadian cities coast to coast.',
  alternates: {
    canonical: 'https://loan-platform.com/ca/cities',
  },
}

export default function CACitiesPage() {
  const allCities = getAllCanadianCitiesTier1()
  
  const citiesByProvince = caProvinces.map(province => ({
    province,
    cities: allCities
      .filter(city => city.province === province.slug)
      .sort((a, b) => (b.populationNumber || 0) - (a.populationNumber || 0))
  })).filter(group => group.cities.length > 0)

  return (
    <>
      <CANavigation />
      <CAStickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Personal Loans by City in Canada</h1>
        <p className="text-lg text-gray-600 mb-12">
          Compare licensed lenders in {allCities.length}+ Canadian cities
        </p>

        {citiesByProvince.map(({ province, cities }) => (
          <section key={province.slug} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-blue-900">{province.name}</h2>
              <Link href={`/ca/regions/${province.slug}`} className="text-blue-600 hover:underline">
                View Province →
              </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ca/cities/${province.slug}/${city.slug}`}
                  className="p-4 border rounded hover:shadow bg-white"
                >
                  <div className="font-semibold text-gray-900">{city.name}</div>
                  <div className="text-sm text-gray-600">{city.provinceAbbr}</div>
                  {city.population && (
                    <div className="text-xs text-gray-500 mt-1">
                      Pop: {city.population.toLocaleString()}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 text-center">
          <Link href="/ca">
            <Button variant="outline">Back to Canada Hub</Button>
          </Link>
        </div>
      </div>
    </main>
    
    <CAFooter />
    </>
  )
}
