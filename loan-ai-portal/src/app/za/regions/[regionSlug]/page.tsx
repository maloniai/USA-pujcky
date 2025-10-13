import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ZANavigation from '@/components/south-africa/za-navigation'
import ZAFooter from '@/components/south-africa/za-footer'
import ZAStickyApplyButton from '@/components/south-africa/za-sticky-apply-button'
import { getZARegionBySlug, southAfricaRegions, regionDisplayNames } from '@/data/za-data'
import Script from 'next/script'

interface RegionPageProps {
  params: {
    regionSlug: string
  }
}

export async function generateStaticParams() {
  return southAfricaRegions.map((region) => ({
    regionSlug: region.slug,
  }))
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const region = getZARegionBySlug(params.regionSlug)
  
  if (!region) {
    return {
      title: 'Region Not Found',
    }
  }

  const displayName = regionDisplayNames[region.slug] || region.name
  
  return {
    title: `Loans in ${displayName} – Compare 2025`,
    description: `Find the best personal loan offers in ${displayName}, South Africa. Compare rates from NCR-registered lenders across ${region.cities.length} cities. Fast approval, transparent terms.`,
    keywords: `${displayName} loans, personal loans ${region.capital}, loans in ${displayName}, NCR lenders ${displayName}`,
    openGraph: {
      title: `Personal Loans in ${displayName}, South Africa`,
      description: `Compare personal loan offers from NCR-registered lenders across ${displayName}. ${region.cities.length} cities covered.`,
      url: `https://loansai.com/za/regions/${region.slug}`,
    },
    alternates: {
      canonical: `https://loansai.com/za/regions/${region.slug}`,
    },
  }
}

export default function ZARegionPage({ params }: RegionPageProps) {
  const region = getZARegionBySlug(params.regionSlug)

  if (!region) {
    notFound()
  }

  const displayName = regionDisplayNames[region.slug] || region.name

  // Schema.org structured data
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
        name: 'South Africa',
        item: 'https://loansai.com/za'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: displayName,
        item: `https://loansai.com/za/regions/${region.slug}`
      }
    ]
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Personal Loans in ${displayName}`,
    description: region.description,
    url: `https://loansai.com/za/regions/${region.slug}`,
    about: {
      '@type': 'FinancialService',
      name: `Loans in ${displayName}`,
      areaServed: {
        '@type': 'State',
        name: displayName
      }
    }
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-collection" type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </Script>

      <ZANavigation />
      <ZAStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>›</span>
              <Link href="/za" className="hover:text-blue-600">South Africa</Link>
              <span>›</span>
              <span className="text-gray-900 font-semibold">{displayName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loans in {displayName}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {region.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/za/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </Link>
              <Link href="/za">
                <Button size="lg" variant="outline">
                  ← Back to South Africa
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Region Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {region.cities.length}
                  </div>
                  <div className="text-gray-600">Cities Covered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(region.population / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-gray-600">Population</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {region.capital}
                  </div>
                  <div className="text-gray-600">Provincial Capital</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cities in Region */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
              Cities in {displayName}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select a city to view local loan offers and lender availability
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.cities.map((city) => (
                <Link 
                  key={city.slug}
                  href={`/za/cities/${city.slug}`}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">
                        {city.name}
                      </CardTitle>
                      {city.nameLocal && city.nameLocal !== city.name && (
                        <p className="text-sm text-gray-500 italic">{city.nameLocal}</p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">
                        {city.description}
                      </p>
                      <div className="text-xs text-gray-500 mb-3">
                        Population: {(city.population / 1000).toFixed(0)}K
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        View Loan Options →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Information */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              About Loans in {displayName}
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                {displayName} is home to {(region.population / 1000000).toFixed(1)} million residents 
                and offers a diverse range of lending options from NCR-registered financial institutions. 
                {region.mapDescription}
              </p>
              <p>
                Whether you're in {region.capital} or any of the {region.cities.length} cities we cover, 
                you have access to competitive personal loan products from both traditional banks and 
                modern online lenders. Our AI-powered platform helps you compare offers and find the 
                best rates for your specific situation.
              </p>
              <p>
                All lenders operating in {displayName} must comply with the National Credit Act and 
                be registered with the National Credit Regulator. This ensures you receive fair treatment, 
                transparent pricing, and proper assessment of your affordability before any credit is granted.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Find Your Perfect Loan in {displayName}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare offers from NCR-registered lenders in your area. Fast, secure, and completely free.
            </p>
            <Link href="/za/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply Now - Free Service
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <ZAFooter />
    </>
  )
}
