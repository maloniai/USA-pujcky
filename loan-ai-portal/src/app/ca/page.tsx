import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { caProvinces } from '@/data/ca-provinces'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'
import CANavigation from '@/components/canada/ca-navigation'
import CAFooter from '@/components/canada/ca-footer'
import CAStickyApplyButton from '@/components/canada/ca-sticky-apply-button'

export const metadata: Metadata = {
  title: 'Personal Loans Canada 2025 – Compare FCAC-Compliant Lenders',
  description: 'Compare personal loans from FCAC-licensed lenders across Canada.',
  alternates: {
    canonical: 'https://loan-platform.com/ca',
  },
}

export default function CanadaHubPage() {
  const topCities = getAllCanadianCitiesTier1().slice(0, 12)

  return (
    <>
      <CANavigation />
      <CAStickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Personal Loans Canada</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Provinces & Territories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caProvinces.map((province) => (
              <Card key={province.slug}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/ca/regions/${province.slug}`} className="text-blue-900 hover:text-blue-700">
                      {province.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{province.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Popular Cities</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/ca/cities/${city.province}/${city.slug}`}
                className="p-4 border rounded hover:shadow bg-white"
              >
                <div className="font-semibold text-gray-900">{city.name}</div>
                <div className="text-sm text-gray-600">{city.provinceAbbr}</div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link href="/ca/apply">
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>
    </main>
    
    <CAFooter />
    </>
  )
}
