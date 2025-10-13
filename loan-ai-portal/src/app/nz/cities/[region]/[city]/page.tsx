import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { generateNZCityMetadata, generatePageMetadata } from '@/lib/seo'
import { nzRegions, getNZRegionBySlug, getAllNZCities, type NZCity, type NZRegion } from '@/data/nz-regions'
import { nzFAQs, nzLenders, nzLoanTypes, nzRegulations } from '@/data/nz-translations'
import { NZBreadcrumbs, type BreadcrumbItem } from '@/components/nz/breadcrumbs'
import { NearbyCities, type NearbyCityItem } from '@/components/nz/nearby-cities'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DisclosureBlock } from '@/components/nz/disclosure-block'

interface CityPageProps {
  params: {
    region: string
    city: string
  }
}

// Generate static params for all cities
export async function generateStaticParams() {
  const params: { region: string; city: string }[] = []
  
  nzRegions.forEach((region) => {
    region.cities.forEach((city) => {
      params.push({
        region: region.slug,
        city: city.slug,
      })
    })
  })
  
  return params
}

// Generate metadata for each city
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const region = getNZRegionBySlug(params.region)
  if (!region) {
    return { title: 'City Not Found' }
  }

  const city = region.cities.find((c) => c.slug === params.city)
  if (!city) {
    return { title: 'City Not Found' }
  }

  const seoData = generateNZCityMetadata(city.name, region.name)
  return generatePageMetadata(seoData)
}

// Helper function to get nearby cities (same region or adjacent)
function getNearbyCities(currentCity: NZCity, currentRegion: NZRegion): NearbyCityItem[] {
  const nearby: NearbyCityItem[] = []
  
  // Add other cities from same region (up to 5)
  const sameRegionCities = currentRegion.cities
    .filter((city) => city.slug !== currentCity.slug)
    .slice(0, 5)
    .map((city) => ({
      name: city.name,
      region: currentRegion.name,
      slug: city.slug,
      regionSlug: currentRegion.slug,
    }))
  
  nearby.push(...sameRegionCities)
  
  // If we have less than 6 cities, add from other regions
  if (nearby.length < 6) {
    const otherRegions = nzRegions
      .filter((r) => r.slug !== currentRegion.slug)
      .sort((a, b) => b.population - a.population)
      .slice(0, 2)
    
    otherRegions.forEach((region) => {
      if (nearby.length < 6 && region.cities.length > 0) {
        nearby.push({
          name: region.cities[0].name,
          region: region.name,
          slug: region.cities[0].slug,
          regionSlug: region.slug,
        })
      }
    })
  }
  
  return nearby.slice(0, 6)
}

export default function CityPage({ params }: CityPageProps) {
  const region = getNZRegionBySlug(params.region)
  if (!region) {
    notFound()
  }

  const city = region.cities.find((c) => c.slug === params.city)
  if (!city) {
    notFound()
  }

  const nearbyCities = getNearbyCities(city, region)
  const year = new Date().getFullYear()

  // Get regional FAQs if available
  const regionalFAQKey = region.name.toLowerCase().replace(/\s+/g, '') as keyof typeof nzFAQs.regional
  const regionalFAQs = nzFAQs.regional[regionalFAQKey] || []
  const cityFAQs = regionalFAQs.length > 0 ? regionalFAQs.slice(0, 3) : nzFAQs.general.slice(0, 4)

  return (
    <>
      {/* Breadcrumbs */}
      <NZBreadcrumbs
        items={[
          { name: 'Regions', href: '/nz/regions' },
          { name: region.name, href: `/nz/regions/${region.slug}` },
          { name: city.name, href: `/nz/cities/${region.slug}/${city.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href={`/nz/regions/${region.slug}`}
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to {region.name} Region
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Personal Loans in {city.name}
            </h1>

            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Compare licensed personal loan providers in {city.name}, {region.name}. Find competitive rates, CCCFA-compliant lenders, and responsible lending options for {city.name} residents.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Apply Now →
                </Button>
              </Link>
              <Link href="#city-lenders">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Compare Lenders
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl font-bold">7.95%</div>
                <div className="text-sm text-blue-200">Interest from</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl font-bold">24-48h</div>
                <div className="text-sm text-blue-200">Fast approval</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-200">CCCFA compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the City - Unique intro content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Personal Loans for {city.name} Residents
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>{city.name}</strong> is located in the {region.name} region of New Zealand, home to {region.population.toLocaleString()} residents. Whether you're a long-time resident or new to {city.name}, accessing personal loans has never been easier with our network of licensed, FSPR-registered lenders.
              </p>
              
              <p className="leading-relaxed">
                {city.name} residents can compare personal loan offers from multiple licensed lenders in one place. All featured lenders comply with the Credit Contracts and Consumer Finance Act 2003 (CCCFA), ensuring you receive transparent pricing, responsible lending assessments, and legal protections.
              </p>

              <p className="leading-relaxed">
                From debt consolidation to car loans, home improvements to emergency expenses, {city.name} borrowers have access to competitive rates starting from 7.95% p.a. The online application process takes minutes, and many lenders offer fast approval times of 24-48 hours.
              </p>
            </div>

            {/* Local Lending Stats */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-4">
                Why Choose Licensed Lenders in {city.name}?
              </h3>
              <ul className="space-y-3">
                {nzRegulations.keyPoints.slice(0, 5).map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-blue-900">
                    <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Available */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Loan Types Available in {city.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nzLoanTypes.map((loanType) => (
                <Card key={loanType.type} className="p-6 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {loanType.type}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    {loanType.interestRange}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {loanType.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/nz/apply">
                <Button size="lg">Compare All Loan Types →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <section id="city-lenders" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Licensed Lenders Serving {city.name}
            </h2>
            <p className="text-gray-600 mb-10 text-center">
              All lenders are FSPR-registered and comply with CCCFA 2003
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nzLenders.map((lender) => (
                <Card key={lender.name} className="p-6 border-2 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lender.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {lender.rates}
                    </span>
                    <span className="text-sm text-gray-600">p.a.</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {lender.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/nz/apply">
                    <Button className="w-full">View Offer</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              FAQs: Personal Loans in {city.name}
            </h2>

            <div className="space-y-6">
              {cityFAQs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Need personalized advice?</p>
              <Link href="/nz/contact">
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <NearbyCities cities={nearbyCities} currentCity={city.name} />

      {/* Disclosure Block */}
      <DisclosureBlock />
    </>
  )
}
