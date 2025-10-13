import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import AustraliaDisclosure from '@/components/australia/australia-disclosure'
import StickyApplyButton from '@/components/australia/sticky-apply-button'
import { australiaRegions, type AustraliaRegionInfo } from '@/data/australia-regions'
import { australiaCities } from '@/data/australia-cities'
import Script from 'next/script'

interface RegionPageProps {
  params: {
    region: string
  }
}

export async function generateStaticParams() {
  return australiaRegions.map((region) => ({
    region: region.slug,
  }))
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const region = australiaRegions.find((r) => r.slug === params.region)
  
  if (!region) {
    return {
      title: 'Region Not Found',
    }
  }

  return {
    title: `Personal Loans in ${region.name} (${region.abbreviation}) - Australia | LoansAI`,
    description: `${region.description} Compare loans from ASIC-licensed lenders in ${region.name}. Average rate: ${region.avgRate}`,
    alternates: {
      canonical: `https://loansai.com/au/regions/${region.slug}`,
    },
  }
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = australiaRegions.find((r) => r.slug === params.region)

  if (!region) {
    notFound()
  }

  const regionCities = australiaCities.filter((city) => city.stateSlug === region.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Australia',
        item: 'https://loansai.com/au'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'States',
        item: 'https://loansai.com/au/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/au/regions/${region.slug}`
      }
    ]
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <AustraliaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {region.abbreviation}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personal Loans in {region.name}
              </h1>
              <p className="text-xl opacity-90 mb-6">
                {region.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/au/apply">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    Apply for Loan
                  </Button>
                </Link>
                <Link href="/au/regions">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View All States
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/au" className="hover:text-blue-600">Australia</Link>
              <span className="mx-2">/</span>
              <Link href="/au/regions" className="hover:text-blue-600">States</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{region.name}</span>
            </nav>
          </div>
        </div>

        {/* Stats */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.avgLoanAmount}</div>
                <div className="text-sm text-gray-600">Average Loan Amount</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.avgRate}</div>
                <div className="text-sm text-gray-600">Average Interest Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.maxLoanAmount}</div>
                <div className="text-sm text-gray-600">Maximum Loan Amount</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Loan Regulations in {region.name}
              </h2>
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {region.regulations.map((regulation, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{regulation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Popular Loan Types in {region.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {region.topLoanTypes.map((loanType, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{loanType}</h3>
                  <p className="text-sm text-gray-600">
                    Popular choice among {region.name} residents
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Cities */}
        {regionCities.length > 0 && (
          <section className="bg-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Major Cities in {region.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionCities.map((city) => (
                    <Card key={city.slug} className="hover:shadow-lg transition">
                      <CardHeader>
                        <CardTitle className="text-xl">{city.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <p className="flex items-center gap-2">
                            <span>👥</span>
                            <span>{city.population} residents</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>💰</span>
                            <span>Avg: {city.avgLoanAmount}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span>📊</span>
                            <span>Rate: {city.avgRate}</span>
                          </p>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {city.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/au/cities">
                    <Button variant="outline" size="lg">
                      View All Cities
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Loan Offers in {region.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare personalized offers from ASIC-licensed lenders available in {region.name}
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply Now - Free & Fast
              </Button>
            </Link>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <AustraliaDisclosure />
          </div>
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
