import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { generateNZRegionMetadata, generatePageMetadata } from '@/lib/seo'
import { nzRegions, getNZRegionBySlug, type NZRegion } from '@/data/nz-regions'
import { nzFAQs, nzLenders } from '@/data/nz-translations'
import { NZBreadcrumbs } from '@/components/nz/breadcrumbs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DisclosureBlock } from '@/components/nz/disclosure-block'

interface RegionPageProps {
  params: {
    region: string
  }
}

// Generate static params for all regions
export async function generateStaticParams() {
  return nzRegions.map((region) => ({
    region: region.slug,
  }))
}

// Generate metadata for each region
export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const region = getNZRegionBySlug(params.region)
  if (!region) {
    return {
      title: 'Region Not Found',
    }
  }

  const seoData = generateNZRegionMetadata(region.name)
  return generatePageMetadata(seoData)
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getNZRegionBySlug(params.region)

  if (!region) {
    notFound()
  }

  // Get regional FAQs if available
  const regionalFAQKey = region.name.toLowerCase().replace(/\s+/g, '') as keyof typeof nzFAQs.regional
  const regionalFAQs = nzFAQs.regional[regionalFAQKey] || []

  return (
    <>
      {/* Breadcrumbs */}
      <NZBreadcrumbs
        items={[
          { name: 'Regions', href: '/nz/regions' },
          { name: region.name, href: `/nz/regions/${region.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/nz/regions"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Regions
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personal Loans in {region.name}
            </h1>

            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {region.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 w-full sm:w-auto">
                  Apply Now →
                </Button>
              </Link>
              <Link href={`#${region.slug}-cities`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View {region.cities.length} Cities
                </Button>
              </Link>
            </div>

            {/* Region Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold">
                  {region.population.toLocaleString()}
                </div>
                <div className="text-sm text-blue-200">Population</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold">{region.cities.length}</div>
                <div className="text-sm text-blue-200">Cities & Towns</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold">7.95%</div>
                <div className="text-sm text-blue-200">Rates from</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Region */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About {region.name} Region
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                {region.description}
              </p>
              <p className="leading-relaxed">
                With a population of {region.population.toLocaleString()} residents, {region.name} is served by numerous licensed lenders offering personal loans, debt consolidation, car loans, and more. All lenders in this region comply with the Credit Contracts and Consumer Finance Act 2003 (CCCFA) and are registered with the Financial Service Providers Register (FSPR).
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Local Population
                </h3>
                <p className="text-2xl font-bold text-blue-900">
                  {region.population.toLocaleString()}
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Cities Covered
                </h3>
                <p className="text-2xl font-bold text-blue-900">{region.cities.length}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Compliance
                </h3>
                <p className="text-sm font-semibold text-blue-900">100% CCCFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities in Region */}
      <section id={`${region.slug}-cities`} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Cities & Towns in {region.name}
            </h2>
            <p className="text-gray-600 mb-8">
              Explore personal loan options in each city within {region.name} region.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {region.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/nz/cities/${region.slug}/${city.slug}`}
                  className="group"
                >
                  <Card className="p-5 h-full hover:shadow-lg hover:border-blue-500 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Compare loan rates
                        </p>
                      </div>
                      <svg
                        className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Licensed Lenders Serving {region.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {nzLenders.slice(0, 4).map((lender) => (
                <Card key={lender.name} className="p-6 border-2 hover:border-blue-500 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{lender.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {lender.rates} <span className="text-sm text-gray-600">p.a.</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {lender.features.slice(0, 3).map((feature, index) => (
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

            <div className="mt-8 text-center">
              <Link href="/nz/apply">
                <Button size="lg">Compare All Lenders →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {(nzFAQs.general.length > 0 || regionalFAQs.length > 0) && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                FAQs: Personal Loans in {region.name}
              </h2>

              <div className="space-y-6">
                {/* Regional FAQs first if available */}
                {regionalFAQs.map((faq, index) => (
                  <Card key={`regional-${index}`} className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}

                {/* Then general FAQs */}
                {nzFAQs.general.slice(0, 3).map((faq, index) => (
                  <Card key={`general-${index}`} className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Disclosure Block */}
      <DisclosureBlock />
    </>
  )
}
