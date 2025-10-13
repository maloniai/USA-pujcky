import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ZANavigation from '@/components/south-africa/za-navigation'
import ZAFooter from '@/components/south-africa/za-footer'
import ZADisclosure from '@/components/south-africa/za-disclosure'
import ZAFAQ from '@/components/south-africa/za-faq'
import ZAStickyApplyButton from '@/components/south-africa/za-sticky-apply-button'
import { getZACityBySlug, getNearbyCities, getZARegionBySlug, allZACities, regionDisplayNames } from '@/data/za-data'
import Script from 'next/script'

interface CityPageProps {
  params: {
    citySlug: string
  }
}

export async function generateStaticParams() {
  return allZACities.map((city) => ({
    citySlug: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getZACityBySlug(params.citySlug)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  const region = getZARegionBySlug(city.region)
  const regionName = region ? (regionDisplayNames[region.slug] || region.name) : city.region
  const year = new Date().getFullYear()
  
  return {
    title: `Loans in ${city.name}, ${regionName} – Compare ${year}`,
    description: `Compare personal loans in ${city.name}, ${regionName}. Find the best rates from NCR-registered lenders. Fast approval, transparent terms. ${city.description}`,
    keywords: `${city.name} loans, personal loans ${city.name}, ${regionName} loans, NCR lenders ${city.name}, loans in ${city.name}`,
    openGraph: {
      title: `Personal Loans in ${city.name}, ${regionName}`,
      description: `Get the best personal loan offers in ${city.name}. Compare rates from NCR-registered lenders.`,
      url: `https://loansai.com/za/cities/${city.slug}`,
    },
    alternates: {
      canonical: `https://loansai.com/za/cities/${city.slug}`,
    },
  }
}

export default function ZACityPage({ params }: CityPageProps) {
  const city = getZACityBySlug(params.citySlug)

  if (!city) {
    notFound()
  }

  const region = getZARegionBySlug(city.region)
  const regionName = region ? (regionDisplayNames[region.slug] || region.name) : city.region
  const nearbyCities = getNearbyCities(city.slug, 5)
  const year = new Date().getFullYear()

  // City-specific FAQ
  const cityFAQs = [
    {
      question: `What are the typical loan amounts available in ${city.name}?`,
      answer: `In ${city.name}, personal loan amounts typically range from R1,000 to R250,000, depending on your income, credit score, and affordability assessment. Most NCR-registered lenders in ${regionName} offer flexible loan amounts tailored to your financial situation. Banks may offer larger amounts for customers with excellent credit, while online lenders may specialize in smaller, short-term loans.`
    },
    {
      question: `How long does loan approval take in ${city.name}?`,
      answer: `Online lenders serving ${city.name} can provide pre-approval within hours and final approval within 24-48 hours if all documentation is complete. Traditional banks in ${regionName} typically take 3-7 business days. Factors affecting approval time include completeness of your application, accuracy of information, credit checks, and employer verification. Using our platform, you can compare multiple lenders simultaneously to speed up the process.`
    },
    {
      question: `What interest rates can I expect for personal loans in ${city.name}?`,
      answer: `Interest rates in ${city.name} vary based on your credit profile and the lender. Typical ranges are: Excellent credit (750+): 10-15% per annum; Good credit (650-749): 15-20% per annum; Fair credit (600-649): 20-25% per annum; Poor credit (below 600): 25-28% per annum. These rates comply with National Credit Act regulations. Banks typically offer prime rate plus a margin, while non-bank lenders may charge higher rates but offer more flexible terms.`
    },
    {
      question: `Are there local lenders specific to ${city.name} or ${regionName}?`,
      answer: `While major national banks and online lenders serve ${city.name}, there may also be regional financial cooperatives and community-based lenders operating in ${regionName}. All lenders must be NCR-registered regardless of size. Some lenders specialize in specific sectors prevalent in ${city.name}, such as ${city.description.includes('mining') ? 'mining employees' : city.description.includes('agricultural') ? 'agricultural workers' : 'local businesses and employees'}. Our platform connects you with both national and regional lenders offering competitive rates.`
    },
    {
      question: `What documents do I need to apply for a loan in ${city.name}?`,
      answer: `To apply for a personal loan in ${city.name}, you typically need: valid South African ID document or passport, proof of residence in ${city.name} (utility bill not older than 3 months), proof of income (latest 3 months payslips or bank statements), recent bank statements (3-6 months), and employment verification. Self-employed applicants may need additional documents like tax returns or financial statements. Having all documents ready ensures faster processing.`
    }
  ]

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
        name: regionName,
        item: `https://loansai.com/za/regions/${city.region}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://loansai.com/za/cities/${city.slug}`
      }
    ]
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${city.name}`,
    description: city.description,
    url: `https://loansai.com/za/cities/${city.slug}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'State',
        name: regionName
      }
    },
    availableLanguage: ['en', 'af', 'zu'],
    serviceType: 'Personal Loan Comparison',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityFAQs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Loan Offers in ${city.name}`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: 'Personal Loan',
          amount: {
            '@type': 'MonetaryAmount',
            currency: 'ZAR',
            minValue: 1000,
            maxValue: 250000
          },
          loanTerm: {
            '@type': 'QuantitativeValue',
            value: 6,
            maxValue: 60,
            unitCode: 'MON'
          }
        }
      }
    ]
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
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
              <Link href={`/za/regions/${city.region}`} className="hover:text-blue-600">
                {regionName}
              </Link>
              <span>›</span>
              <span className="text-gray-900 font-semibold">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loans in {city.name}, {regionName}
            </h1>
            {city.nameLocal && city.nameLocal !== city.name && (
              <p className="text-xl text-gray-500 italic mb-4">{city.nameLocal}</p>
            )}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {city.description} Compare personal loan offers from NCR-registered lenders serving {city.name}. 
              Get competitive rates, transparent terms, and fast approval. Whether you need funds for debt consolidation, 
              home improvements, education, or unexpected expenses, find the right loan for your needs in {city.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/za/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now - Free
                  </span>
                </Button>
              </Link>
              <Link href={`/za/regions/${city.region}`}>
                <Button size="lg" variant="outline">
                  ← Back to {regionName}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* City Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(city.population / 1000).toFixed(0)}K
                  </div>
                  <div className="text-gray-600">Residents</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">NCR-Registered Lenders</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24-48h
                  </div>
                  <div className="text-gray-600">Typical Approval Time</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Loan Regulations in {city.name}
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  Key Borrower Protections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Interest Rate Regulation:</strong> All lenders in {city.name} must comply with NCA interest rate caps. Maximum rates are determined by the Minister of Trade and Industry and reviewed regularly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Initiation Fee Cap:</strong> Maximum R1,140 + 10% of loan amount above R1,000 (capped at R150 for loans under R10,000). This prevents excessive upfront charges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Monthly Service Fee:</strong> Capped at R60 per month regardless of loan size. No hidden fees allowed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>NCR Registration:</strong> All credit providers in {city.name} must be registered with the National Credit Regulator. Check registration at ncr.org.za.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Affordability Assessment:</strong> Lenders must assess your ability to repay before approving any loan. This protects you from over-indebtedness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Early Settlement Rights:</strong> You can pay off your loan early with maximum penalty of 3 months' interest. Many lenders charge less or no penalty.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>POPIA Compliance:</strong> Your personal information is protected under the Protection of Personal Information Act. Lenders must secure your data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Credit Bureau Reporting:</strong> All credit agreements are reported to credit bureaus (TransUnion, Experian, Compuscan, XDS). Maintain good payment history.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Options */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
              Available Loan Types in {city.name}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Find the right loan product for your situation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">💵</span>
                    Personal Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    R1,000 - R250,000 | 6-60 months | 10-28% p.a. Unsecured loans for any purpose. 
                    No collateral required. Popular in {city.name} for debt consolidation and emergencies.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Apply Now →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">⚡</span>
                    Payday Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    R500 - R8,000 | 1-6 months | Quick approval. Short-term credit for {city.name} residents. 
                    Higher rates but very fast funding. NCR-regulated.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Fast Cash →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🏠</span>
                    Consolidation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Combine multiple debts into one payment. Lower monthly cost, simplified finances. 
                    Popular solution in {city.name} for managing multiple accounts.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Consolidate Debt →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ZAFAQ items={cityFAQs} />

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
                Loans Near You
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Also serving these nearby cities in {regionName}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/za/cities/${nearbyCity.slug}`}
                    className="bg-white rounded-lg p-4 hover:shadow-md transition-all hover:border-blue-400 border border-gray-200 text-center"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{nearbyCity.name}</h3>
                    <p className="text-xs text-gray-500">
                      {(nearbyCity.population / 1000).toFixed(0)}K residents
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Get Your Best Loan Offer in {city.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare personalized offers from NCR-registered lenders. Free service, secure process, fast approval.
            </p>
            <Link href="/za/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Start Application Now
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              No credit score impact to check rates • 100% free • 5-minute application
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <ZADisclosure />
        </div>
      </main>

      <ZAFooter />
    </>
  )
}
