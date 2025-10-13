import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import PhilippinesDisclosure from '@/components/philippines/philippines-disclosure'
import PhilippinesFAQ, { type FAQItem } from '@/components/philippines/philippines-faq'
import StickyApplyButtonPH from '@/components/philippines/sticky-apply-button'
import { philippinesRegions, getAllRegionSlugs, getRegionBySlug } from '@/data/philippines-regions'
import { philippinesCities, getCitiesByRegion } from '@/data/philippines-cities'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Region not found',
    }
  }

  return {
    title: `Loans in ${region.name} – Compare 2025 | LoansAI`,
    description: `${region.description} Average rates ${region.avgRate}, BSP-licensed lenders, personalized offers in ${region.name}.`,
    keywords: `loans ${region.name}, pautang ${region.nameTl}, rates ${region.name}, lenders ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/ph/regions/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `What are the average interest rates in ${region.name}?`,
      answer: `Average interest rates in ${region.name} are approximately ${region.avgRate}, but can vary between 12% and 35% APR depending on the lender, loan amount, duration, and your credit profile. Loans with collateral or for clients with high credit scores may have lower rates.`
    },
    {
      question: `How many licensed lenders are available in ${region.name}?`,
      answer: `In ${region.name} you have access to over 30 BSP-licensed and supervised lenders, including banks, non-bank financial institutions, and online lending platforms. Each lender has different criteria and offers, which is why comparison is essential.`
    },
    {
      question: `Can I get a loan in ${region.name} if I don't live in the capital city?`,
      answer: `Yes, most lenders in ${region.name} offer loans to all residents of the region, regardless of city. Some online lenders offer services throughout the Philippines. What's important is that you have stable income and valid documents.`
    },
    {
      question: `What is the maximum amount I can borrow in ${region.name}?`,
      answer: `The maximum amount available in ${region.name} is approximately ${region.maxLoanAmount}, but the exact amount depends on your income, credit history, and each lender's policy. Some banks may offer larger amounts for clients with high creditworthiness.`
    },
    {
      question: `How long does the approval process take in ${region.name}?`,
      answer: `The approval process varies: online loans can be approved in 24-48 hours, while traditional banks may take 3-7 business days. Duration depends on verification complexity and completeness of your documentation.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${region.name}`,
    description: region.description,
    url: `https://loansai.com/ph/regions/${params.region}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: region.name
    },
    availableLanguage: ['en', 'tl']
  }

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
        name: 'Philippines',
        item: 'https://loansai.com/ph'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Regions',
        item: 'https://loansai.com/ph/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/ph/regions/${params.region}`
      }
    ]
  }

  return (
    <>
      <Script id="schema-region" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <PhilippinesNavigation />
      <StickyApplyButtonPH />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Philippines', url: '/ph' },
                { name: 'Regions', url: '/ph/regions' },
                { name: region.name, url: `/ph/regions/${params.region}` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {region.name}, Philippines
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {region.description} With a population of {region.population}, {region.name} offers access to 
              diverse credit options from BSP-licensed lenders. Average loan amount is {region.avgLoanAmount} 
              with average rates of {region.avgRate}. Explore offers tailored to your specific needs in {region.name}.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ph/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="#cities">
                <Button size="lg" variant="outline">
                  View Cities
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.population}</div>
                <div className="text-xs text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgRate}</div>
                <div className="text-xs text-gray-600">Avg Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgLoanAmount}</div>
                <div className="text-xs text-gray-600">Avg Loan</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.maxLoanAmount}</div>
                <div className="text-xs text-gray-600">Max Loan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Regulations and Protections in {region.name}
              </h2>
              <p className="text-gray-700 mb-6">
                Loans in {region.name} are regulated by the Bangko Sentral ng Pilipinas (BSP) and must 
                comply with the same national consumer protection standards as the rest of the country.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">Key Regulations:</h3>
                <ul className="space-y-3">
                  {region.regulations.map((reg, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Popular Loan Types in {region.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {region.topLoanTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">
                      {index === 0 ? '💰' : index === 1 ? '🏠' : '🎓'}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
                    <p className="text-sm text-gray-600">
                      Available from licensed lenders in {region.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        {cities.length > 0 && (
          <section id="cities" className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Loans in Cities of {region.name}
                </h2>
                <p className="text-gray-700 mb-8">
                  Explore specific offers for major cities in {region.name}. Each city has 
                  local characteristics that may influence loan offers.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link 
                      key={city.slug} 
                      href={`/ph/cities/${params.region}/${city.slug}`}
                    >
                      <Card className="h-full hover:shadow-xl transition cursor-pointer group">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-3">
                            {city.name}
                          </h3>
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
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <PhilippinesFAQ items={faqItems} title={`Frequently Asked Questions about Loans in ${region.name}`} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <PhilippinesDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find the Best Loan in {region.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compare offers from licensed lenders and choose the best option for you.
              </p>
              <Link href="/ph/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PhilippinesFooter />
    </>
  )
}
