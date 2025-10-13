import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'
import NewZealandDisclosure from '@/components/newzealand/newzealand-disclosure'
import NewZealandFAQ, { type FAQItem } from '@/components/newzealand/newzealand-faq'
import StickyApplyButton from '@/components/newzealand/sticky-apply-button'
import { getAllCitySlugs, getCityBySlug, getNearbyCities } from '@/data/newzealand-cities'
import { getRegionBySlug } from '@/data/newzealand-regions'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map(({ region, city }) => ({
    region,
    city,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.region, params.city)
  
  if (!city) {
    return {
      title: 'City not found',
    }
  }

  // Title ≤60 chars
  const title = `Loans in ${city.name}, ${city.region} – Compare 2025`
  
  // Meta description 120-155 chars
  const description = `Compare personal loans in ${city.name}. Rates from ${city.avgRate}, ${city.lenderCount}+ FMA-licensed lenders. Apply online and get offers fast.`

  return {
    title,
    description,
    keywords: `loans ${city.name}, personal loans ${city.name}, lenders ${city.name}, loans in ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://loansai.com/nz/cities/${params.region}/${params.city}`,
    },
    alternates: {
      canonical: `https://loansai.com/nz/cities/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.region, params.city)
  const region = getRegionBySlug(params.region)
  
  if (!city || !region) {
    notFound()
  }

  const nearbyCities = getNearbyCities(params.city, 4)

  // FAQ items (3-5 Q/A, city/country-specific, factual, evergreen)
  const faqItems: FAQItem[] = [
    {
      question: `What interest rates can I get in ${city.name}?`,
      answer: `In ${city.name}, average interest rates are approximately ${city.avgRate}, but can range from 5% to 50% depending on the lender and your profile. Secured loans or customers with credit scores above ${city.avgCreditScore} may qualify for more favorable rates. We recommend comparing offers from multiple lenders to find the best rate for your circumstances.`
    },
    {
      question: `How many licensed lenders operate in ${city.name}?`,
      answer: `In ${city.name}, you have access to ${city.lenderCount}+ FMA-licensed lenders, including major banks, credit unions, and online lending platforms. Each lender has their own eligibility criteria and service packages, which is why comparing offers is essential to find the most suitable solution for your needs.`
    },
    {
      question: `What is the average loan amount in ${city.name}?`,
      answer: `The average personal loan amount in ${city.name} is ${city.avgLoanAmount}, reflecting the local cost of living and average income. Available amounts range from NZ$1,000 to ${city.avgLoanAmount.replace(/[^\d]/g, '') + '0,000'} or more, depending on your income, expenses, and the lender's affordability assessment. Your exact eligible amount will be determined after evaluation of your financial profile.`
    },
    {
      question: `Can I get a loan in ${city.name} if I have a low credit score?`,
      answer: `Yes, there are lenders in ${city.name} who work with borrowers having credit scores lower than the average of ${city.avgCreditScore}. However, these typically come with higher interest rates and lower amounts. Under CCCFA, lenders must assess your current ability to repay, not just your credit score. To improve your chances and terms, ensure you have stable income, complete documentation, and consider factors that demonstrate your financial responsibility.`
    },
    {
      question: `How long does it take to receive funds after approval in ${city.name}?`,
      answer: `Timeline depends on the lender: online platforms can transfer funds within 24-48 hours after approval, while traditional banks in ${city.name} may take 3-7 business days. Funds are transferred directly to your bank account. To speed up the process, ensure all documentation is complete and accurate when applying.`
    }
  ]

  // Schema.org JSON-LD
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${city.name}`,
    description: city.description,
    url: `https://loansai.com/nz/cities/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: region.name
      }
    },
    availableLanguage: 'en',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI New Zealand'
    }
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
        name: 'New Zealand',
        item: 'https://loansai.com/nz'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cities',
        item: 'https://loansai.com/nz/cities'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/nz/regions/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: city.name,
        item: `https://loansai.com/nz/cities/${params.region}/${params.city}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `LoansAI - ${city.name}`,
    description: `Loan comparison platform in ${city.name}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: region.name,
      addressCountry: 'NZ'
    },
    areaServed: city.name
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Loan Offers ${city.name}`,
    itemListElement: city.topLoanTypes.map((type, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LoanOrCredit',
        name: type,
        loanType: type
      },
      position: index + 1
    }))
  }

  return (
    <>
      {/* Structured Data - Schema JSON-LD */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <NewZealandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs - Internal Linking: Up to Region */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/nz" className="hover:text-blue-600">New Zealand</Link>
              <span className="mx-2">›</span>
              <Link href="/nz/cities" className="hover:text-blue-600">Cities</Link>
              <span className="mx-2">›</span>
              <Link href={`/nz/regions/${params.region}`} className="hover:text-blue-600">{region.name}</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* H1 as specified */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {city.name}, {region.name}
            </h1>
            
            {/* Intro paragraph: 80-120 words, unique per city, loan types available, regulation context, typical ranges */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {city.description} With a population of {city.population}, {city.name} offers access to {city.lenderCount}+ 
              FMA-licensed lenders who provide various loan types: {city.topLoanTypes.join(', ')}. 
              Average interest rates start from {city.avgRate}, with average loan amounts of {city.avgLoanAmount}. 
              All lenders comply with CCCFA 2003 responsible lending requirements and FMA regulations, ensuring 
              transparency and consumer protection. The average credit score in {city.name} is {city.avgCreditScore}, 
              but options exist for all credit profiles. Lenders must assess your ability to repay without hardship 
              before approval.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href={`/nz/regions/${params.region}`}>
                <Button size="lg" variant="outline">
                  View {region.name}
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.lenderCount}+</div>
                <div className="text-xs text-gray-600">Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                <div className="text-xs text-gray-600">Avg Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgLoanAmount}</div>
                <div className="text-xs text-gray-600">Avg Loan</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgCreditScore}</div>
                <div className="text-xs text-gray-600">Avg Credit Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations Snippet: 5-8 bullets - caps, licensing entity, key borrower protections */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Regulations and protections in {city.name}
              </h2>
              <p className="text-gray-700 mb-6">
                Loans in {city.name} are subject to the same strict national regulations as throughout 
                New Zealand, ensuring consumer protection and responsible lending practices.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>⚖️</span>
                  Key borrower protections:
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>CCCFA 2003 compliance</strong> - All lenders must follow responsible lending principles
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>FMA regulation</strong> - Financial Markets Authority supervises all lenders
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Affordability assessment mandatory</strong> - Lenders must verify you can repay without hardship
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Complete transparency</strong> - Full disclosure of all costs required before signing
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Hardship assistance</strong> - Right to request assistance if circumstances change
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Financial Service Providers Register</strong> - All lenders must be registered
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Privacy Act 2020 protection</strong> - Your personal data is protected by law
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">
                      <strong>Fair Trading Act compliance</strong> - Protection against misleading conduct
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types Available */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Types of loans available in {city.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {city.topLoanTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">
                      {index === 0 ? '💰' : index === 1 ? '🏠' : '🎓'}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
                    <p className="text-sm text-gray-600">
                      Available from licensed lenders in {city.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section: 3-5 Q/A, city/country-specific, factual, evergreen */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandFAQ items={faqItems} title={`Frequently asked questions about loans in ${city.name}`} />
          </div>
        </section>

        {/* Internal Links: Lateral - Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Loans in nearby cities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      href={`/nz/cities/${nearbyCity.regionSlug}/${nearbyCity.slug}`}
                      className="bg-white rounded-lg p-4 hover:shadow-lg transition text-center"
                    >
                      <div className="text-2xl mb-2">🏙️</div>
                      <div className="font-semibold text-gray-900 mb-1">{nearbyCity.name}</div>
                      <div className="text-sm text-gray-600">{nearbyCity.avgRate}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Disclosure Block */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to apply for a loan in {city.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compare offers from {city.lenderCount}+ licensed lenders and find the best solution for you.
              </p>
              <Link href="/nz/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Start Your Application Now
                  </span>
                </Button>
              </Link>
              <p className="mt-6 text-sm opacity-75">
                No impact on credit score • Response in 24-48 hours • 100% secure
              </p>
            </div>
          </div>
        </section>
      </main>

      <NewZealandFooter />
    </>
  )
}
