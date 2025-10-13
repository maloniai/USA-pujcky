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
import { getAustraliaRegionBySlug } from '@/data/australia-regions'
import { getAustraliaCityBySlug, australiaCities } from '@/data/australia-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  return australiaCities.map((city) => ({
    region: city.regionSlug,
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getAustraliaCityBySlug(params.city)
  const region = getAustraliaRegionBySlug(params.region)
  
  if (!city || !region) {
    return {
      title: 'City not found',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Loans in ${city.name}, ${region.name} – Compare ${currentYear}`,
    description: `${city.description} Average rate ${city.avgRate}. Compare offers from ${city.lenderCount}+ ASIC-licensed lenders in ${city.name}.`,
    keywords: `personal loans ${city.name}, credit ${city.name}, ${region.name}, comparison rate, lenders ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/au/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getAustraliaCityBySlug(params.city)
  const region = getAustraliaRegionBySlug(params.region)
  
  if (!city || !region || city.regionSlug !== params.region) {
    notFound()
  }

  const nearbyCities = city.nearbyCities
    .map((nearbySlug) => getAustraliaCityBySlug(nearbySlug.toLowerCase().replace(/\s+/g, '-')))
    .filter(Boolean)
    .slice(0, 6)

  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `What documents are required to apply for a loan in ${city.name}?`,
      answer: `In ${city.name}, typical required documents include: valid photo identification (driver's licence or passport), proof of income (payslips, bank statements), proof of address, details of existing debts, and employment verification. Some lenders may require additional documentation depending on the loan amount and purpose.`
    },
    {
      question: `What are the loan interest rates in ${city.name}?`,
      answer: `The average comparison rate in ${city.name} is approximately ${city.avgRate}. Actual rates typically range from 5.99% to 48% depending on the lender, your credit score, loan amount, and repayment term. Customers with excellent credit scores and security may qualify for lower rates. Always compare comparison rates between lenders to get the full cost picture.`
    },
    {
      question: `Can I get a loan online in ${city.name}?`,
      answer: `Yes! Most lenders in ${city.name} offer online applications with fast decisions. The process typically includes: completing a secure online form, submitting documents electronically, receiving a decision within 24-48 hours, and having funds transferred directly to your bank account. Online loans are convenient and often have faster approval times than traditional branches.`
    },
    {
      question: `How many lenders operate in ${city.name}?`,
      answer: `In ${city.name}, there are approximately ${city.lenderCount} licensed lenders available, including major banks, credit unions, non-bank institutions, and online lending platforms. Each offers different products and rates. Using a comparison platform like LoansAI helps you find the best offer for your situation.`
    },
    {
      question: `What loan types are popular in ${city.name}?`,
      answer: `The most sought-after loan types in ${city.name} are: ${city.topLoanTypes.join(', ')}. Each loan type has different terms, rates, and requirements. Some lenders specialize in specific loan types, so it's worth exploring options tailored to your needs.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${city.name}`,
    description: city.description,
    url: `https://loansai.com/au/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'State',
        name: region.name
      }
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
        name: 'Australia',
        item: 'https://loansai.com/au'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.name,
        item: `https://loansai.com/au/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: `https://loansai.com/au/${params.region}/${params.city}`
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
      <Script id="schema-city" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
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
            <Link href={`/au/${params.region}`} className="hover:text-blue-600">
              {region.name}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{city.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Loans in {city.name}, {region.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {city.description}
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

            {/* City Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.population}</div>
                  <div className="text-sm text-gray-600">Population</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgLoanAmount}</div>
                  <div className="text-sm text-gray-600">Avg. Loan</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgRate}</div>
                  <div className="text-sm text-gray-600">Avg. Rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.lenderCount}</div>
                  <div className="text-sm text-gray-600">Lenders</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Personal Loans in {city.name} – {currentYear} Guide</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a resident of {city.name}, you have access to {city.lenderCount} licensed 
                  lenders offering competitive rates starting from approximately {city.avgRate} comparison rate. 
                  Whether you need funds for {city.topLoanTypes[0]?.toLowerCase()}, 
                  {city.topLoanTypes[1]?.toLowerCase()}, or other purposes, local and national 
                  lenders provide flexible solutions tailored to your financial situation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our platform makes it easy to compare offers, understand local regulations, 
                  and find the best loan for your circumstances. All lenders are licensed by the 
                  Australian Securities and Investments Commission (ASIC) and comply with 
                  Australian consumer protection laws.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Loan Regulations in {city.name}</h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {region.regulations.slice(0, 8).map((regulation, index) => (
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

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions about Loans in {city.name}
            </h2>
            <AustraliaFAQ items={faqItems} />
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Loans Near You
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link 
                    key={nearbyCity?.slug} 
                    href={`/au/${nearbyCity?.regionSlug}/${nearbyCity?.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-blue-900 mb-1">{nearbyCity?.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{nearbyCity?.avgRate} avg. rate</p>
                        <p className="text-xs text-gray-500">{nearbyCity?.lenderCount} lenders</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the Best Loan Rates in {city.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare personalized offers from licensed lenders
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Apply Now
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Back Links */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
            <Link href={`/au/${params.region}`} className="text-blue-600 hover:underline">
              ← Back to {region.name} Loans
            </Link>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <Link href="/au" className="text-blue-600 hover:underline">
              Back to Australia Loans
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
