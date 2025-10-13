import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import AustraliaDisclosure from '@/components/australia/australia-disclosure'
import AustraliaFAQ, { type FAQItem } from '@/components/australia/australia-faq'
import StickyApplyButton from '@/components/australia/sticky-apply-button'
import { australiaRegions, getAustraliaRegionBySlug, getAllAustraliaRegionSlugs } from '@/data/australia-regions'
import { australiaCities, getAustraliaCitiesByRegion } from '@/data/australia-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllAustraliaRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getAustraliaRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'State not found',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Loans in ${region.name} – Compare ${currentYear}`,
    description: `${region.description} Average rates ${region.avgRate}, ASIC-licensed lenders, personalized offers in ${region.name}.`,
    keywords: `personal loans ${region.name}, credit ${region.name}, loan rates ${region.name}, lenders ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/au/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getAustraliaRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getAustraliaCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `What are the average interest rates in ${region.name}?`,
      answer: `Average interest rates in ${region.name} are approximately ${region.avgRate}, but can range from 5.99% to 48% comparison rate depending on the lender, loan amount, term, and your credit profile. Secured loans or customers with excellent credit scores may qualify for lower rates.`
    },
    {
      question: `How many licensed lenders are available in ${region.name}?`,
      answer: `In ${region.name}, you have access to over 40 ASIC-licensed and regulated lenders, including major banks, non-bank financial institutions, credit unions, and online lending platforms. Each lender has different criteria and offerings, which is why comparison is crucial.`
    },
    {
      question: `Can I get a loan in ${region.name} if I don't live in the capital city?`,
      answer: `Yes, most lenders in ${region.name} offer loans to all residents regardless of which city or town you live in. Many online lenders serve customers across Australia. What matters most is having stable income and valid documentation.`
    },
    {
      question: `What is the maximum amount I can borrow in ${region.name}?`,
      answer: `The maximum available amount in ${region.name} is typically up to ${region.maxLoanAmount}, but the exact amount depends on your income, credit history, and each lender's policy. Some banks may offer higher amounts to customers with excellent creditworthiness.`
    },
    {
      question: `How long does the approval process take in ${region.name}?`,
      answer: `The approval process varies: online loans can be approved within 24-48 hours, while traditional bank loans may take 3-7 business days. The timeline depends on verification complexity and the completeness of your documentation.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${region.name}`,
    description: region.description,
    url: `https://loansai.com/au/${params.region}`,
    areaServed: {
      '@type': 'State',
      name: region.name
    },
    availableLanguage: 'en'
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
        name: 'Australia',
        item: 'https://loansai.com/au'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: region.name,
        item: `https://loansai.com/au/${params.region}`
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

      <AustraliaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/au" className="hover:text-blue-600">
              Australia
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{region.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Loans in {region.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {region.description}
              </p>
              <Link href="/au/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{region.avgRate}</div>
                <div className="text-sm text-gray-600">Avg. Rate</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{region.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{cities.length}</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{region.maxLoanAmount}</div>
                <div className="text-sm text-gray-600">Max Loan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Personal Loans in {region.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {region.description} With access to over 40 ASIC-licensed lenders, residents of {region.name} can 
                  compare personal loans ranging from AU$2,000 to {region.maxLoanAmount}. Whether you're looking for 
                  debt consolidation, home improvement, vehicle purchase, or emergency funding, our platform helps you 
                  find competitive rates tailored to your financial situation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The typical loan amount in {region.name} is {region.avgLoanAmount}, with average rates around {region.avgRate}. 
                  However, your actual rate will depend on factors including your credit score, income stability, loan amount, 
                  and chosen repayment term. All lenders in our network are regulated by ASIC and must comply with responsible 
                  lending obligations under the National Consumer Credit Protection Act.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulations */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{region.name} Loan Regulations</h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {region.regulations.map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>{regulation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cities in Region */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Loan Options by City in {region.name}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Compare loan offers in major cities across {region.name}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/au/${params.region}/${city.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{city.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {city.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{city.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg. rate:</span>
                          <span className="font-semibold text-blue-600">{city.avgRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lenders:</span>
                          <span className="font-semibold">{city.lenderCount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Popular Loan Types in {region.name}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {region.topLoanTypes.map((loanType, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">{loanType}</h3>
                    <p className="text-sm text-gray-600">
                      Available from multiple licensed lenders with competitive rates and flexible terms.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions about Loans in {region.name}
            </h2>
            <AustraliaFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find the Best Loan Rates in {region.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare personalized offers from ASIC-licensed lenders in seconds
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Start Your Application
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Free comparison • No credit score impact • 100% online
            </p>
          </div>
        </section>

        {/* Back to Australia Hub */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Link href="/au" className="text-blue-600 hover:underline inline-flex items-center gap-2">
              ← Back to Australia Loans
            </Link>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <AustraliaDisclosure />
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
