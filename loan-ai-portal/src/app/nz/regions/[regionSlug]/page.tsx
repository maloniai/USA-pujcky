import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NZNavigation from '@/components/new-zealand/nz-navigation'
import NZFooter from '@/components/new-zealand/nz-footer'
import { getNZRegionBySlug, newZealandRegions } from '@/data/nz-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Props = {
  params: { regionSlug: string }
}

export async function generateStaticParams() {
  return newZealandRegions.map((region) => ({
    regionSlug: region.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = getNZRegionBySlug(params.regionSlug)
  
  if (!region) {
    return {
      title: 'Region Not Found',
    }
  }

  return {
    title: `Personal Loans in ${region.name} – New Zealand | LoansAI`,
    description: `Compare personal loans in ${region.name}, New Zealand. ${region.description} Find the best rates from FMA-licensed lenders.`,
    alternates: {
      canonical: `https://loansai.com/nz/regions/${params.regionSlug}`,
    },
  }
}

export default function NZRegionPage({ params }: Props) {
  const region = getNZRegionBySlug(params.regionSlug)

  if (!region) {
    notFound()
  }

  return (
    <>
      <NZNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              {' > '}
              <Link href="/nz" className="text-blue-600 hover:underline">New Zealand</Link>
              {' > '}
              <span className="text-gray-600">{region.name}</span>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Personal Loans in {region.name}
              </h1>
              {region.nameLocal && region.nameLocal !== region.name && (
                <p className="text-xl text-gray-600 mb-2 italic">{region.nameLocal}</p>
              )}
              <p className="text-xl text-gray-600 mb-6">
                {region.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold">Capital:</span> {region.capital}
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold">Population:</span> {(region.population / 1000).toFixed(0)}K
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold">Cities:</span> {region.cities.length}
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Compare Loan Offers in {region.name}?
              </h2>
              <p className="mb-6">
                Get personalized offers from FMA-licensed lenders in minutes
              </p>
              <Link href="/nz/apply">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Cities in Region */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cities in {region.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/nz/cities/${city.slug}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">{city.name}</CardTitle>
                        {city.nameLocal && city.nameLocal !== city.name && (
                          <p className="text-sm text-gray-500 italic">{city.nameLocal}</p>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">
                          {city.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Population: {(city.population / 1000).toFixed(0)}K
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <NZFooter />
    </>
  )
}
