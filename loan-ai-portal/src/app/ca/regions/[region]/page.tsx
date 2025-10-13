import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import CanadaDisclosure from '@/components/canada/canada-disclosure'
import CanadaFAQ from '@/components/canada/canada-faq'
import StickyApplyButton from '@/components/canada/sticky-apply-button'
import { caProvinces, getProvinceBySlug } from '@/data/ca-provinces'
import { canadianCities } from '@/data/ca-cities'
import Script from 'next/script'

type Props = {
  params: { region: string }
}

export async function generateStaticParams() {
  return caProvinces.map((province) => ({
    region: province.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const province = getProvinceBySlug(params.region)
  
  if (!province) {
    return {
      title: 'Province Not Found',
    }
  }

  return {
    title: `Personal Loans in ${province.name} - Licensed Lenders & Rates`,
    description: `${province.description} Compare offers from licensed lenders in ${province.name}. ${province.loanAmountRange} available. Regulated by ${province.regulator}.`,
    keywords: `${province.name} loans, personal loans ${province.abbreviation}, ${province.name} lenders, ${province.capital} loans`,
    openGraph: {
      title: `Personal Loans in ${province.name}, Canada`,
      description: province.description,
      url: `https://loansai.com/ca/regions/${province.slug}`,
      siteName: 'LoansAI Canada',
      locale: 'en_CA',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/ca/regions/${province.slug}`,
    },
  }
}

export default function ProvinceRegionPage({ params }: Props) {
  const province = getProvinceBySlug(params.region)
  
  if (!province) {
    notFound()
  }

  // Get cities in this province
  const provinceCities = canadianCities.filter(city => city.province === province.slug)

  // FAQ items
  const faqItems = [
    {
      question: `What are the interest rate limits for loans in ${province.name}?`,
      answer: `In ${province.name}, personal loans are subject to the federal Criminal Code limit of 60% APR. ${province.interestRateCap ? `Additionally, ${province.name} has specific regulations: ${province.interestRateCap}.` : ''} Always verify the total cost of borrowing (APR) before accepting any loan offer.`
    },
    {
      question: `Who regulates lenders in ${province.name}?`,
      answer: `Lenders in ${province.name} are regulated by ${province.regulator}. All licensed lenders must comply with provincial regulations and federal laws. You can verify a lender's license status through the ${province.regulator} website.`
    },
    {
      question: `What loan amounts are available in ${province.name}?`,
      answer: `In ${province.name}, personal loan amounts typically range from ${province.loanAmountRange}. The actual amount you qualify for depends on your income, credit history, and the lender's criteria.`
    },
    {
      question: `How long does it take to get approved for a loan in ${province.name}?`,
      answer: `Online lenders in ${province.name} can often provide pre-approval decisions within 24-48 hours. Traditional banks may take 3-7 business days. Once approved, funds are typically deposited within 1-3 business days.`
    },
    {
      question: `What are my rights as a borrower in ${province.name}?`,
      answer: `As a borrower in ${province.name}, you have the right to clear disclosure of all loan terms and costs, protection against unfair lending practices, and the ability to file complaints with ${province.regulator}. ${province.keyRegulations[0] || 'Provincial consumer protection laws apply to all loans.'}`
    }
  ]

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
        name: 'Canada',
        item: 'https://loansai.com/ca'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Provinces',
        item: 'https://loansai.com/ca/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: province.name,
        item: `https://loansai.com/ca/regions/${province.slug}`
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

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <CanadaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li><Link href="/ca/regions" className="hover:text-blue-600">Provinces</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">{province.name}</li>
              </ol>
            </nav>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {province.abbreviation} • Population: {province.population}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Personal Loans in {province.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {province.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ca/apply">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                    Apply Now in {province.name}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{province.avgRate}</div>
                <div className="text-sm text-gray-600">Average Interest Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{province.maxLoanAmount}</div>
                <div className="text-sm text-gray-600">Max Loan Amount</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{province.cityCount}+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{province.population}</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
            </div>

            {/* Provincial Regulations */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Lending Regulations in {province.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>⚖️</span>
                    Key Regulations
                  </h3>
                  <ul className="space-y-3">
                    {province.keyRegulations.map((regulation, index) => (
                      <li key={index} className="flex gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{regulation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🛡️</span>
                    Borrower Protections
                  </h3>
                  <ul className="space-y-3">
                    {province.borrowerProtections.map((protection, index) => (
                      <li key={index} className="flex gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{protection}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Provincial Regulator:</strong> {province.regulator}
                  <br />
                  <a href={province.regulatorUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Visit {province.regulator} website ↗
                  </a>
                </p>
              </div>
            </section>

            {/* Featured Cities */}
            {provinceCities.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Featured Cities in {province.name}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {province.featuredCities.slice(0, 6).map((cityName) => {
                    const city = provinceCities.find(c => c.name === cityName)
                    return city ? (
                      <Link key={city.slug} href={`/ca/cities/${city.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-blue-600 transition">
                              {city.name}
                              {city.isProvincialCapital && (
                                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Capital</span>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm text-gray-600">
                              <p className="flex items-center gap-2">
                                <span>👥</span>
                                <span>{city.population}</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span>💰</span>
                                <span>{city.avgRate}</span>
                              </p>
                            </div>
                            <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              View {city.name} →
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ) : null
                  })}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Apply for a Loan in {province.name}?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Get personalized offers from licensed lenders in {province.name}
                </p>
                <Link href="/ca/apply">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    Start Your Application
                  </Button>
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <CanadaFAQ items={faqItems} />
            </section>

            {/* Disclosure */}
            <section className="mb-8">
              <CanadaDisclosure />
            </section>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
