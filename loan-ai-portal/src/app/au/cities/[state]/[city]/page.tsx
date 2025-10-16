import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Card, CardContent } from '@/components/ui/card'
import AUBreadcrumbs from '@/components/australia/au-breadcrumbs'
import AUNearbyCities from '@/components/australia/au-nearby-cities'
import AUDisclosureBlock from '@/components/australia/au-disclosure-block'
import { getAllAUCities, getCityBySlug, getAUStateBySlug, getNearbyCities, type AUCity, type AUState } from '@/data/au-regions'

interface Props {
  params: { state: string; city: string }
}

export async function generateStaticParams() {
  const allCities = getAllAUCities()
  return allCities.map((city) => ({
    state: city.stateSlug,
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const allCities = getAllAUCities()
  const city = allCities.find(
    (c) => c.stateSlug === params.state && c.slug === params.city
  )

  if (!city) {
    return { title: 'City Not Found' }
  }

  const state = getAUStateBySlug(params.state)

  return {
    title: `Loans in ${city.name}, ${state?.abbreviation} - Compare 2025`,
    description: `Find competitive personal loan rates in ${city.name}, ${state?.name}. Compare ASIC-regulated lenders. Population ${city.population.toLocaleString()}. Apply online today.`,
    keywords: `${city.name} loans, personal loans ${city.name}, ${state?.abbreviation} loans, ASIC regulated lenders`,
  }
}

export default function AUCityPage({ params }: Props) {
  const allCities = getAllAUCities()
  const city = allCities.find(
    (c) => c.stateSlug === params.state && c.slug === params.city
  )

  if (!city) {
    notFound()
  }

  const state = getAUStateBySlug(params.state)
  if (!state) {
    notFound()
  }

  // Find nearby cities (same state, different city, max 6)
  const nearbyCities = allCities
    .filter((c) => c.stateSlug === params.state && c.slug !== params.city)
    .slice(0, 6)

  // Generate unique regulations for each city
  const localRegulations = [
    `All lenders operating in ${city.name} must hold a valid Australian Credit Licence (ACL) issued by the Australian Securities and Investments Commission (ASIC).`,
    `${city.name} borrowers are protected under the National Consumer Credit Protection Act 2009, which requires lenders to assess your ability to repay before approving loans.`,
    `Personal loan interest rates in ${city.name} must be clearly disclosed as a comparison rate, including all fees and charges, allowing you to compare true borrowing costs.`,
    `${city.name} residents have the right to hardship assistance if financial circumstances change. Contact your lender early if you're experiencing difficulty making repayments.`,
    `ASIC regulates lending practices in ${city.name}, ensuring lenders provide clear information about loan terms, fees, and your cooling-off rights under Australian Consumer Law.`,
    `${city.name} borrowers can lodge complaints with the Australian Financial Complaints Authority (AFCA) if disputes with lenders cannot be resolved directly.`,
    `Responsible lending obligations require ${city.name} lenders to verify your income, expenses, and existing debts before approving a personal loan application.`,
  ]

  // Generate unique FAQs for each city
  const cityFAQs = [
    {
      question: `What personal loan amounts are available in ${city.name}?`,
      answer: `${city.name} residents can typically borrow between $2,000 and $75,000 through ASIC-licensed lenders. The exact amount depends on your income, existing commitments, and credit history. With a median income of $${city.medianIncome.toLocaleString()} in ${city.name}, most applicants qualify for loans between $5,000 and $30,000. Larger amounts may require additional security or guarantor.`
    },
    {
      question: `How quickly can I get a loan in ${city.name}?`,
      answer: `Most ${city.name} lenders provide initial approval decisions within 24 hours for straightforward applications. Once approved, funds can be deposited into your ${city.name} bank account within 1-3 business days. Some online lenders offer same-day approval for applicants with strong credit profiles. Processing times may vary during peak periods or if additional verification is required.`
    },
    {
      question: `Do ${city.name} lenders check credit history?`,
      answer: `Yes, all ASIC-regulated lenders in ${city.name} conduct credit checks as part of responsible lending obligations. They'll review your Equifax, Experian, or illion credit file to assess your borrowing history and repayment behaviour. ${city.name} residents with good credit (scores above 650) typically access the best rates, while those with impaired credit may still qualify but at higher rates.`
    },
    {
      question: `What industries do ${city.name} lenders prefer?`,
      answer: `${city.name} lenders assess income stability rather than specific industries. However, given ${city.name}'s economy focuses on ${city.topIndustries.join(', ').toLowerCase()}, lenders are familiar with employment patterns in these sectors. Permanent full-time employees generally receive faster approval, while casual workers, contractors, and self-employed ${city.name} residents may need additional income verification.`
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data - Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Loan-Platform.com',
            legalName: 'Maloni s.r.o.',
            url: 'https://loan-platform.com',
            logo: 'https://loan-platform.com/logo.png',
            description: 'Compare ASIC-regulated personal loan providers across Australia. Licensed credit comparison service helping Australians find competitive loan rates.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'CZ',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              availableLanguage: ['English'],
            },
            sameAs: [
              'https://www.linkedin.com/in/rostislav-sikora-09126a2b/',
            ],
          }),
        }}
      />

      {/* Structured Data - FinancialService Schema */}
      <Script
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: `Personal Loans in ${city.name}, ${state.abbreviation}`,
            description: `Compare ASIC-regulated personal loan providers in ${city.name}, ${state.name}. Find competitive rates from licensed lenders serving ${city.name} residents.`,
            url: `https://loan-platform.com/au/cities/${state.slug}/${city.slug}`,
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: state.name,
                containedInPlace: {
                  '@type': 'Country',
                  name: 'Australia',
                },
              },
            },
            provider: {
              '@type': 'Organization',
              name: 'Loan-Platform.com',
              url: 'https://loan-platform.com',
            },
            serviceType: 'Personal Loan Comparison',
            featureList: [
              'ASIC-regulated lenders only',
              'Compare rates from multiple providers',
              'Fast online applications',
              'Transparent comparison rates',
              'Consumer protection guaranteed',
            ],
            termsOfService: 'https://loan-platform.com/au/terms',
          }),
        }}
      />

      {/* Structured Data - LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `https://loan-platform.com/au/cities/${state.slug}/${city.slug}#localbusiness`,
            name: `Personal Loans ${city.name}`,
            description: `ASIC-regulated personal loan comparison service for ${city.name}, ${state.abbreviation} residents.`,
            url: `https://loan-platform.com/au/cities/${state.slug}/${city.slug}`,
            telephone: '+61-placeholder',
            address: {
              '@type': 'PostalAddress',
              addressLocality: city.name,
              addressRegion: state.abbreviation,
              addressCountry: 'AU',
            },
            geo: {
              '@type': 'GeoCoordinates',
              addressCountry: 'AU',
            },
            priceRange: '$2,000 - $75,000',
            currenciesAccepted: 'AUD',
            paymentAccepted: 'Bank Transfer',
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
          }),
        }}
      />

      {/* Structured Data - OfferCatalog Schema */}
      <Script
        id="offer-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'OfferCatalog',
            name: `Personal Loan Offers in ${city.name}`,
            description: `Compare personal loan offers from ASIC-regulated lenders in ${city.name}, ${state.name}.`,
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'LoanOrCredit',
                  name: 'Personal Loan',
                  description: 'Unsecured personal loan for any purpose',
                  loanType: 'Personal Loan',
                  currency: 'AUD',
                  amount: {
                    '@type': 'MonetaryAmount',
                    minValue: 2000,
                    maxValue: 75000,
                    currency: 'AUD',
                  },
                },
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 5.99,
                  priceCurrency: 'AUD',
                  unitText: 'per annum',
                },
                availableAtOrFrom: {
                  '@type': 'Place',
                  name: city.name,
                },
                eligibleRegion: {
                  '@type': 'State',
                  name: state.name,
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'LoanOrCredit',
                  name: 'Car Loan',
                  description: 'Vehicle financing for new and used cars',
                  loanType: 'Auto Loan',
                  currency: 'AUD',
                  amount: {
                    '@type': 'MonetaryAmount',
                    minValue: 5000,
                    maxValue: 150000,
                    currency: 'AUD',
                  },
                },
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 6.49,
                  priceCurrency: 'AUD',
                  unitText: 'per annum',
                },
                availableAtOrFrom: {
                  '@type': 'Place',
                  name: city.name,
                },
                eligibleRegion: {
                  '@type': 'State',
                  name: state.name,
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'LoanOrCredit',
                  name: 'Debt Consolidation Loan',
                  description: 'Combine multiple debts into one manageable payment',
                  loanType: 'Debt Consolidation',
                  currency: 'AUD',
                  amount: {
                    '@type': 'MonetaryAmount',
                    minValue: 5000,
                    maxValue: 50000,
                    currency: 'AUD',
                  },
                },
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 7.99,
                  priceCurrency: 'AUD',
                  unitText: 'per annum',
                },
                availableAtOrFrom: {
                  '@type': 'Place',
                  name: city.name,
                },
                eligibleRegion: {
                  '@type': 'State',
                  name: state.name,
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'LoanOrCredit',
                  name: 'Home Improvement Loan',
                  description: 'Financing for renovations and home upgrades',
                  loanType: 'Home Improvement',
                  currency: 'AUD',
                  amount: {
                    '@type': 'MonetaryAmount',
                    minValue: 3000,
                    maxValue: 60000,
                    currency: 'AUD',
                  },
                },
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 6.99,
                  priceCurrency: 'AUD',
                  unitText: 'per annum',
                },
                availableAtOrFrom: {
                  '@type': 'Place',
                  name: city.name,
                },
                eligibleRegion: {
                  '@type': 'State',
                  name: state.name,
                },
              },
            ],
          }),
        }}
      />

      {/* Structured Data - FAQPage Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: cityFAQs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <AUBreadcrumbs
          items={[
            { label: 'States & Territories', href: '/au/states' },
            { label: state.name, href: `/au/states/${state.slug}` },
            { label: city.name, href: `/au/cities/${state.slug}/${city.slug}` },
          ]}
        />

        {/* Hero */}
        <header className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Personal Loans in {city.name}
              </h1>
              <p className="text-xl text-gray-600">
                {state.name} • Population {city.population.toLocaleString()} • 
                Median Income ${city.medianIncome.toLocaleString()}
              </p>
            </div>
            <span className="text-5xl">{state.emoji}</span>
          </div>
        </header>

        {/* About Loans in City */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Borrowing in {city.name}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {city.description}
          </p>
        </Card>

        {/* Why Choose Regulated Lenders */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose ASIC-Regulated Lenders in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consumer Protection
                </h3>
                <p className="text-gray-700">
                  {city.name} borrowers are protected by the NCCP Act, ensuring responsible lending practices 
                  and clear disclosure of all loan terms and costs before you commit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Rates
                </h3>
                <p className="text-gray-700">
                  All {city.name} lenders must display comparison rates including fees and charges, 
                  allowing you to accurately compare total borrowing costs across different offers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dispute Resolution
                </h3>
                <p className="text-gray-700">
                  If issues arise with your {city.name} lender, you can escalate complaints to AFCA, 
                  Australia's independent financial complaints authority, at no cost to you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Responsible Lending
                </h3>
                <p className="text-gray-700">
                  {city.name} lenders must verify you can afford repayments without substantial hardship, 
                  protecting you from unsuitable loans that could worsen your financial situation.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Local Regulations */}
        <Card className="p-8 mb-8 bg-blue-50 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Lending Regulations in {city.name}
          </h2>
          <div className="space-y-4">
            {localRegulations.map((regulation, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{regulation}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Loan Types Available */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Loan Types Available in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Loans</h3>
              <p className="text-gray-700 text-sm mb-3">
                Unsecured loans from $2,000 to $75,000 for any purpose. No asset required as security.
              </p>
              <div className="text-sm text-blue-600 font-medium">Rates from 5.99% p.a.</div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Car Loans</h3>
              <p className="text-gray-700 text-sm mb-3">
                Finance new or used vehicles purchased in or around {city.name}. Fixed rates available.
              </p>
              <div className="text-sm text-green-600 font-medium">Rates from 6.49% p.a.</div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Debt Consolidation</h3>
              <p className="text-gray-700 text-sm mb-3">
                Combine multiple debts into one manageable repayment with potentially lower rates.
              </p>
              <div className="text-sm text-purple-600 font-medium">Rates from 7.99% p.a.</div>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-white rounded-lg border border-orange-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Improvement</h3>
              <p className="text-gray-700 text-sm mb-3">
                Fund renovations or repairs to your {city.name} property with flexible loan terms.
              </p>
              <div className="text-sm text-orange-600 font-medium">Rates from 6.99% p.a.</div>
            </div>

            <div className="p-5 bg-gradient-to-br from-pink-50 to-white rounded-lg border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Loans</h3>
              <p className="text-gray-700 text-sm mb-3">
                Finance medical procedures, dental work, or health expenses with fixed repayments.
              </p>
              <div className="text-sm text-pink-600 font-medium">Rates from 8.49% p.a.</div>
            </div>

            <div className="p-5 bg-gradient-to-br from-yellow-50 to-white rounded-lg border border-yellow-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bad Credit Loans</h3>
              <p className="text-gray-700 text-sm mb-3">
                Options for {city.name} residents with impaired credit history. Higher rates apply.
              </p>
              <div className="text-sm text-yellow-600 font-medium">Rates from 12.99% p.a.</div>
            </div>
          </div>
        </Card>

        {/* City Economic Profile */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {city.name} Economic Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Population</div>
              <div className="text-3xl font-bold text-blue-600">{city.population.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-2">Residents in {city.name}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Median Income</div>
              <div className="text-3xl font-bold text-green-600">${city.medianIncome.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-2">Annual household income</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Key Industries</div>
              <div className="text-lg font-bold text-purple-600">{city.topIndustries[0]}</div>
              <p className="text-xs text-gray-500 mt-2">{city.topIndustries.slice(1).join(', ')}</p>
            </div>
          </div>
        </Card>

        {/* FAQs */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {city.name} Loan FAQs
          </h2>
          <div className="space-y-6">
            {cityFAQs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Loans Near {city.name}
            </h2>
            <AUNearbyCities cities={nearbyCities} currentCity={city.name} />
          </div>
        )}

        {/* Disclosure */}
        <AUDisclosureBlock />

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/au/states/${state.slug}`} className="text-blue-600 hover:text-blue-700">
            ← Back to {state.name} Loans
          </Link>
          <Link href="/au/cities" className="text-blue-600 hover:text-blue-700">
            ← All Australian Cities
          </Link>
          <Link href="/au" className="text-blue-600 hover:text-blue-700">
            ← Australia Home
          </Link>
        </div>
      </div>
    </div>
  )
}
