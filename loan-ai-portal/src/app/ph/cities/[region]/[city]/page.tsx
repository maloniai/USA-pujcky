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
import { getRegionBySlug } from '@/data/philippines-regions'
import { getCityBySlug, getAllCitySlugs } from '@/data/philippines-cities'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((item) => ({
    region: item.region,
    city: item.city,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.region, params.city)
  const region = getRegionBySlug(params.region)
  
  if (!city || !region) {
    return {
      title: 'City not found',
    }
  }

  const currentYear = new Date().getFullYear()
  
  return {
    title: `Loans in ${city.name}, ${region.name} – Compare ${currentYear}`,
    description: `${city.description} Average rate ${city.avgRate}, ${city.lenderCount}+ licensed lenders in ${city.name}. Fast approval, transparent rates.`,
    keywords: `loans ${city.name}, pautang ${city.nameTl}, ${region.name} loans, personal loans ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/ph/cities/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.region, params.city)
  const region = getRegionBySlug(params.region)
  
  if (!city || !region) {
    notFound()
  }

  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `What types of loans are available in ${city.name}?`,
      answer: `In ${city.name}, you can access various loan types including personal loans, salary loans, business loans, home loans, and educational loans. ${city.lenderCount}+ licensed lenders operate in ${city.name}, offering competitive rates averaging ${city.avgRate}. Each lender has specific criteria and loan products suited to different needs.`
    },
    {
      question: `How do I qualify for a loan in ${city.name}?`,
      answer: `To qualify for a loan in ${city.name}, you typically need: valid Philippine ID, proof of income (employment certificate, payslips, or business documents), bank statements (3-6 months), proof of residence in ${city.name} or ${region.name}, and good credit standing. Requirements may vary by lender and loan amount. Having stable employment or business income significantly improves your chances.`
    },
    {
      question: `Are interest rates different in ${city.name} compared to other cities?`,
      answer: `Interest rates in ${city.name} average around ${city.avgRate}, which may vary slightly from other cities in ${region.name} or the Philippines. Rates depend on factors like lender competition, local economic conditions, your creditworthiness, loan amount, and repayment term. Metro Manila typically has more competitive rates due to higher lender concentration, but ${city.name} offers good options from BSP-licensed institutions.`
    },
    {
      question: `Can I apply for a loan online if I live in ${city.name}?`,
      answer: `Yes! Many BSP-licensed lenders offer online loan applications for residents of ${city.name}. You can complete the entire process digitally - from application to fund disbursement. Online lenders typically offer faster approval (24-48 hours) compared to traditional banks. Just ensure you have digital copies of your documents and a bank account for fund transfer.`
    },
    {
      question: `What should I know about regulations for loans in ${city.name}?`,
      answer: `Loans in ${city.name} are regulated by BSP under the same national framework. All lenders must comply with: Truth in Lending Act (RA 3765) for full disclosure, Lending Company Regulation Act (RA 9474) for licensing, Financial Consumer Protection Act (RA 11765) for your rights, and Data Privacy Act (RA 10173) for data protection. You have the right to clear information, fair treatment, and to file complaints with BSP or SEC if needed.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${city.name}, ${region.name}`,
    description: city.description,
    url: `https://loansai.com/ph/cities/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: region.name
      }
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
        name: 'Cities',
        item: 'https://loansai.com/ph/cities'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/ph/regions/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: city.name,
        item: `https://loansai.com/ph/cities/${params.region}/${params.city}`
      }
    ]
  }

  return (
    <>
      <Script id="schema-city" type="application/ld+json">
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
                { name: region.name, url: `/ph/regions/${params.region}` },
                { name: city.name, url: `/ph/cities/${params.region}/${params.city}` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {region.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {city.name}, {region.name}
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {city.description} With a population of {city.population}, {city.name} offers access to 
              {city.lenderCount}+ BSP-licensed lenders with average loan amounts of {city.avgLoanAmount} 
              and rates around {city.avgRate}. Whether you need a personal loan, business loan, or 
              emergency funds, find the best options tailored for residents of {city.name}.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ph/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply for Loan
                  </span>
                </Button>
              </Link>
              <Link href={`/ph/regions/${params.region}`}>
                <Button size="lg" variant="outline">
                  Back to {region.name}
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.lenderCount}+</div>
                <div className="text-xs text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                <div className="text-xs text-gray-600">Avg Interest Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgLoanAmount}</div>
                <div className="text-xs text-gray-600">Avg Loan Amount</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.population}</div>
                <div className="text-xs text-gray-600">Population</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Content */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Personal Loans in {city.name} – Your Complete Guide
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Looking for a personal loan in {city.name}? You're in the right place. As one of the major 
                cities in {region.name}, {city.name} has a robust financial services sector with numerous 
                BSP-licensed and SEC-registered lenders offering competitive loan products.
              </p>
              <p className="mb-4">
                The loan market in {city.name} caters to various needs - from personal expenses and debt 
                consolidation to business expansion and emergency situations. With {city.lenderCount}+ active 
                lenders in the area, residents benefit from competitive rates and flexible terms.
              </p>
              <p>
                All lenders operating in {city.name} must comply with Philippine lending regulations, 
                including the Truth in Lending Act (RA 3765), Lending Company Regulation Act (RA 9474), 
                and Financial Consumer Protection Act (RA 11765), ensuring you receive fair treatment 
                and transparent information.
              </p>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Key Lending Regulations in {city.name}
              </h2>
              <p className="text-gray-700 mb-6">
                As part of {region.name}, all lenders in {city.name} must comply with BSP regulations 
                and national consumer protection laws:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {region.regulations.slice(0, 8).map((reg, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600">
                  <strong>Important:</strong> Always verify that your lender is licensed by BSP or registered 
                  with SEC. You can check the official lists on their websites. Never work with unlicensed lenders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        {city.nearbyCities && city.nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Loans Near You – Other Cities in {region.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {city.nearbyCities.slice(0, 6).map((nearbySlug) => {
                  const nearbyCity = getCityBySlug(params.region, nearbySlug)
                  if (!nearbyCity) return null
                  
                  return (
                    <Link
                      key={nearbySlug}
                      href={`/ph/cities/${params.region}/${nearbySlug}`}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition"
                    >
                      <div className="text-2xl mb-2">🏙️</div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {nearbyCity.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        Avg: {nearbyCity.avgLoanAmount}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <PhilippinesFAQ 
              items={faqItems} 
              title={`Frequently Asked Questions about Loans in ${city.name}`} 
            />
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
                Ready to Get a Loan in {city.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compare offers from {city.lenderCount}+ licensed lenders and find the best rate for you.
              </p>
              <Link href="/ph/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Start Your Application
                  </span>
                </Button>
              </Link>
              <p className="mt-6 text-sm opacity-75">
                Free comparison • No obligation • Fast approval
              </p>
            </div>
          </div>
        </section>
      </main>

      <PhilippinesFooter />
    </>
  )
}
