import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NZNavigation from '@/components/new-zealand/nz-navigation'
import NZFooter from '@/components/new-zealand/nz-footer'
import { getNZCityBySlug, getNZRegionBySlug, allNZCities } from '@/data/nz-data'
import { Button } from '@/components/ui/button'

type Props = {
  params: { citySlug: string }
}

export async function generateStaticParams() {
  return allNZCities.map((city) => ({
    citySlug: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getNZCityBySlug(params.citySlug)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `Personal Loans in ${city.name} – New Zealand | LoansAI`,
    description: `Compare personal loans in ${city.name}, New Zealand. ${city.description} Find the best rates from FMA-licensed lenders.`,
    alternates: {
      canonical: `https://loansai.com/nz/cities/${params.citySlug}`,
    },
  }
}

export default function NZCityPage({ params }: Props) {
  const city = getNZCityBySlug(params.citySlug)

  if (!city) {
    notFound()
  }

  const region = getNZRegionBySlug(city.region)

  return (
    <>
      <NZNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              {' > '}
              <Link href="/nz" className="text-blue-600 hover:underline">New Zealand</Link>
              {' > '}
              {region && (
                <>
                  <Link href={`/nz/regions/${region.slug}`} className="text-blue-600 hover:underline">
                    {region.name}
                  </Link>
                  {' > '}
                </>
              )}
              <span className="text-gray-600">{city.name}</span>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Personal Loans in {city.name}
              </h1>
              {city.nameLocal && city.nameLocal !== city.name && (
                <p className="text-xl text-gray-600 mb-2 italic">{city.nameLocal}</p>
              )}
              <p className="text-xl text-gray-600 mb-6">
                {city.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {region && (
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">Region:</span> {region.name}
                  </div>
                )}
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold">Population:</span> {(city.population / 1000).toFixed(0)}K
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Compare Loan Offers in {city.name}?
              </h2>
              <p className="mb-6">
                Get personalized offers from FMA-licensed lenders serving {city.name}
              </p>
              <Link href="/nz/apply">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Information Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About Personal Loans in {city.name}
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Residents of {city.name} have access to a wide range of personal loan options from FMA-licensed lenders. 
                  Whether you need funds for home improvements, debt consolidation, vehicle purchase, or unexpected expenses, 
                  LoansAI helps you compare offers to find the best rates and terms.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Why Choose LoansAI in {city.name}?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Compare offers from multiple FMA-licensed lenders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Completely free service with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Fast approval process with 24-48 hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Secure application protected by bank-level encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Compliant with CCCFA and Privacy Act 2020</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NZFooter />
    </>
  )
}
