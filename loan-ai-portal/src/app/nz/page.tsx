import type { Metadata } from 'next'
import Link from 'next/link'
import { nzHubSEO, generatePageMetadata } from '@/lib/seo'
import { nzRegions } from '@/data/nz-regions'
import { nzLenders, nzFAQs, nzRegulations } from '@/data/nz-translations'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DisclosureBlock } from '@/components/nz/disclosure-block'

export const metadata: Metadata = generatePageMetadata(nzHubSEO)

export default function NZHomePage() {
  // Get featured regions (top 6 by population)
  const featuredRegions = [...nzRegions]
    .sort((a, b) => b.population - a.population)
    .slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full text-sm mb-6">
              <span>🇳🇿</span>
              <span>CCCFA 2003 Compliant • Licensed NZ Lenders</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Compare Personal Loans in New Zealand
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Find licensed lenders across 16 regions with transparent rates, responsible lending practices, and AI-powered matching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto">
                  Apply Now →
                </Button>
              </Link>
              <Link href="/nz/regions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Browse by Region
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">16</div>
                <div className="text-sm text-blue-200">Regions</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">75+</div>
                <div className="text-sm text-blue-200">Cities</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">7.95%</div>
                <div className="text-sm text-blue-200">Rates from</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-blue-200">CCCFA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CCCFA Regulations Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {nzRegulations.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  All lenders on this platform comply with New Zealand&apos;s consumer finance laws and regulations.
                </p>
                <ul className="space-y-3">
                  {nzRegulations.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/nz/responsible-lending"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more about CCCFA regulations
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Explore Loans by Region
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find personal loan options in your region. Compare licensed lenders, rates, and terms across New Zealand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/nz/regions/${region.slug}`}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:border-blue-500">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {region.name}
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {region.population.toLocaleString()} residents
                    </span>
                    <span className="text-blue-600 font-medium">
                      {region.cities.length} cities
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/nz/regions">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All 16 Regions →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Licensed NZ Lenders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare offers from FSPR-registered lenders committed to responsible lending under CCCFA 2003.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nzLenders.map((lender) => (
              <Card key={lender.name} className="p-6 border-2 hover:border-blue-500 transition-all">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lender.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {lender.rates}
                    </span>
                    <span className="text-sm text-gray-600">p.a.</span>
                  </div>
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
                <Link href="/nz/apply" className="block">
                  <Button className="w-full">View Offer</Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/nz/apply">
              <Button size="lg" className="text-lg px-8">
                Compare All Lenders →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {nzFAQs.general.map((faq, index) => (
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
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link href="/nz/contact">
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure Block */}
      <DisclosureBlock />
    </>
  )
}
