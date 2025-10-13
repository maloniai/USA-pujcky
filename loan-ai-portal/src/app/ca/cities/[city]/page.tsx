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
import { canadianCities, getCityBySlug } from '@/data/ca-cities'
import { getProvinceBySlug } from '@/data/ca-provinces'
import Script from 'next/script'

type Props = {
  params: { city: string }
}

export async function generateStaticParams() {
  return canadianCities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `Personal Loans in ${city.name}, ${city.provinceAbbr} - Compare Licensed Lenders`,
    description: `${city.description} Find the best personal loan rates in ${city.name}. ${city.loanRange} available from licensed lenders.`,
    keywords: `${city.name} loans, personal loans ${city.name}, ${city.name} ${city.provinceAbbr} lenders, loans in ${city.name}`,
    openGraph: {
      title: `Personal Loans in ${city.name}, ${city.provinceAbbr}`,
      description: city.description,
      url: `https://loansai.com/ca/cities/${city.slug}`,
      siteName: 'LoansAI Canada',
      locale: 'en_CA',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/ca/cities/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    notFound()
  }

  const province = getProvinceBySlug(city.province)
  
  if (!province) {
    notFound()
  }

  // Get nearby cities
  const nearbyCitiesData = city.nearbyCities
    .map(slug => getCityBySlug(slug))
    .filter(Boolean) as typeof canadianCities

  // FAQ items
  const faqItems = [
    {
      question: `What are the average loan rates in ${city.name}?`,
      answer: `In ${city.name}, personal loan rates typically range from ${city.avgRate}. The actual rate you receive depends on your credit score, income, loan amount, and the lender you choose. Licensed lenders in ${city.name} must comply with federal and provincial regulations, including the 60% APR maximum interest rate.`
    },
    {
      question: `How much can I borrow in ${city.name}, ${city.provinceAbbr}?`,
      answer: `In ${city.name}, personal loans typically range from ${city.loanRange}. The exact amount you qualify for depends on your income, credit history, debt-to-income ratio, and the lender's criteria. Some lenders may offer higher amounts for borrowers with excellent credit and stable income.`
    },
    {
      question: `Are there local lenders in ${city.name}?`,
      answer: `Yes, ${city.name} has a variety of lending options including national banks, local credit unions, and online lenders licensed to operate in ${province.name}. ${city.keyFeatures[0] || 'Multiple lenders are available to serve residents.'} You can compare offers from multiple sources to find the best rates and terms.`
    },
    {
      question: `How quickly can I get a loan in ${city.name}?`,
      answer: `In ${city.name}, online lenders can often provide approval decisions within 24-48 hours, with funds deposited in 1-3 business days. Traditional banks and credit unions may take 3-7 business days for the full process. Emergency or same-day loans are available from some lenders but may have higher rates.`
    },
    {
      question: `What do I need to apply for a loan in ${city.name}?`,
      answer: `To apply for a personal loan in ${city.name}, you'll typically need: valid government ID, proof of ${province.name} residency, Social Insurance Number, proof of income (pay stubs or tax returns), bank account information, and employment details. Having these documents ready speeds up the application process.`
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
        name: 'Cities',
        item: 'https://loansai.com/ca/cities'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://loansai.com/ca/cities/${city.slug}`
      }
    ]
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `LoansAI - ${city.name}`,
    description: `Personal loan comparison service in ${city.name}, ${province.name}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.provinceAbbr,
      addressCountry: 'CA'
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'State',
        name: province.name
      }
    }
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
      <Script id="schema-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
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
                <li><Link href="/ca/cities" className="hover:text-blue-600">Cities</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">{city.name}</li>
              </ol>
            </nav>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>📍</span>
                <span>{city.name}, {city.provinceAbbr}</span>
                {city.isProvincialCapital && (
                  <>
                    <span>•</span>
                    <span>Provincial Capital</span>
                  </>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Personal Loans in {city.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {city.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ca/apply">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                    Apply Now in {city.name}
                  </Button>
                </Link>
                <Link href={`/ca/regions/${province.slug}`}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                    View {province.name} Info
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                <div className="text-sm text-gray-600">Average Rate</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.loanRange}</div>
                <div className="text-sm text-gray-600">Loan Range</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{province.abbreviation}</div>
                <div className="text-sm text-gray-600">Province</div>
              </div>
            </div>

            {/* Local Features */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Loan Features in {city.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>✨</span>
                    Local Benefits
                  </h3>
                  <ul className="space-y-3">
                    {city.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🏛️</span>
                    {province.name} Regulations
                  </h3>
                  <ul className="space-y-3">
                    {province.keyRegulations.slice(0, 4).map((regulation, index) => (
                      <li key={index} className="flex gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>{regulation}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href={`/ca/regions/${province.slug}`} className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                      View all {province.name} regulations →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Nearby Cities */}
            {nearbyCitiesData.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Nearby Cities
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {nearbyCitiesData.map((nearbyCity) => (
                    <Link key={nearbyCity.slug} href={`/ca/cities/${nearbyCity.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                        <CardHeader>
                          <CardTitle className="text-base group-hover:text-blue-600 transition">
                            {nearbyCity.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="flex items-center gap-1">
                              <span>👥</span>
                              <span>{nearbyCity.population}</span>
                            </p>
                            <p className="flex items-center gap-1">
                              <span>📊</span>
                              <span>{nearbyCity.avgRate}</span>
                            </p>
                          </div>
                          <div className="mt-3 text-blue-600 text-xs font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View →
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Loan in {city.name}
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Compare personalized offers from licensed lenders serving {city.name} and {province.name}
                </p>
                <Link href="/ca/apply">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                    Apply Now - Free & Secure
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-75">
                  No impact on credit score • Fast approval • Licensed lenders only
                </p>
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
