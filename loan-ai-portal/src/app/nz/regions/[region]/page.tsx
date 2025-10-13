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
import { getAllRegionSlugs, getRegionBySlug } from '@/data/newzealand-regions'
import { getCitiesByRegion } from '@/data/newzealand-cities'
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

  // Title ≤60 chars
  const title = `Loans in ${region.name} – Compare 2025`
  
  // Meta description 120-155 chars
  const description = `Compare personal loans in ${region.name}. Rates from ${region.avgRate}, ${region.majorCities.length}+ cities covered. FMA-licensed lenders. Apply online now.`

  return {
    title,
    description,
    keywords: `loans ${region.name}, personal loans ${region.name}, ${region.name} lenders, compare loans ${region.name}`,
    openGraph: {
      title,
      description,
      url: `https://loansai.com/nz/regions/${params.region}`,
    },
    alternates: {
      canonical: `https://loansai.com/nz/regions/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.region)

  // FAQ items (3-5 Q/A, region-specific, factual, evergreen)
  const faqItems: FAQItem[] = [
    {
      question: `What are typical interest rates for loans in ${region.name}?`,
      answer: `In ${region.name}, average interest rates are approximately ${region.avgRate}, but can vary between 5% and 50% depending on the lender and your profile. Secured loans or customers with good credit history may receive more favorable rates. The actual rate you receive will depend on your credit assessment under CCCFA requirements.`
    },
    {
      question: `How many licensed lenders operate in ${region.name}?`,
      answer: `Residents of ${region.name} have access to numerous FMA-licensed lenders, including major banks, credit unions, and online lending platforms. All lenders must be registered with the Financial Service Providers Register and comply with CCCFA responsible lending obligations. Compare multiple offers to find the best terms.`
    },
    {
      question: `What is the average loan amount in ${region.name}?`,
      answer: `The average personal loan amount in ${region.name} is ${region.avgLoanAmount}, reflecting the local cost of living and typical borrower needs. Loan amounts typically range from NZ$1,000 to ${region.maxLoanAmount} or more, depending on your income, expenses, and the lender's assessment of your ability to repay without hardship.`
    },
    {
      question: `Can I get a loan in ${region.name} if I have impaired credit?`,
      answer: `Yes, some lenders in ${region.name} work with borrowers who have less-than-perfect credit history. Under CCCFA, lenders must assess your current ability to repay, not just your credit score. However, loans for those with impaired credit typically come with higher interest rates. Working to improve your credit score and demonstrating stable income will help you access better terms.`
    },
    {
      question: `What protections do I have as a borrower in ${region.name}?`,
      answer: `As a borrower in ${region.name}, you're protected by the CCCFA 2003, which requires lenders to assess your ability to repay without hardship, provide clear disclosure of all costs, and offer hardship assistance if your circumstances change. You can complain to the Banking Ombudsman or FMA if needed. All lenders must follow responsible lending principles and Fair Trading Act requirements.`
    }
  ]

  // Schema.org JSON-LD
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${region.name}`,
    description: region.description,
    url: `https://loansai.com/nz/regions/${params.region}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: region.name
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
        name: 'Regions',
        item: 'https://loansai.com/nz/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/nz/regions/${params.region}`
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

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Loan Offers ${region.name}`,
    itemListElement: region.topLoanTypes.map((type, index) => ({
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
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <NewZealandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/nz" className="hover:text-blue-600">New Zealand</Link>
              <span className="mx-2">›</span>
              <Link href="/nz/regions" className="hover:text-blue-600">Regions</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">{region.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* H1 as specified */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {region.name}
            </h1>
            
            {/* Intro paragraph: 80-120 words, unique per region */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {region.description} With a population of {region.population}, {region.name} offers access 
              to numerous FMA-licensed lenders who provide diverse loan types: {region.topLoanTypes.join(', ')}. 
              Average interest rates start from {region.avgRate}, with average loan amounts of {region.avgLoanAmount}. 
              Maximum available loan amounts reach {region.maxLoanAmount}. All lenders comply with CCCFA 2003 
              responsible lending requirements and FMA regulations, ensuring transparency and borrower protection. 
              The region includes major cities like {region.majorCities.slice(0, 3).join(', ')}.
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
              <Link href="/nz/regions">
                <Button size="lg" variant="outline">
                  View All Regions
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

        {/* Local Regulations Snippet: 5-8 bullets */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Regulations and protections in {region.name}
              </h2>
              <p className="text-gray-700 mb-6">
                Loans in {region.name} are subject to the same strict national regulations as throughout 
                New Zealand, ensuring consumer protection and responsible lending practices.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span>⚖️</span>
                  Key borrower protections:
                </h3>
                <ul className="space-y-3">
                  {region.regulations.map((regulation, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                      <span className="text-gray-700">{regulation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types Available */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Types of loans available in {region.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {region.topLoanTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">
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

        {/* Cities in Region */}
        {cities.length > 0 && (
          <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Major cities in {region.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/nz/cities/${city.regionSlug}/${city.slug}`}
                      className="bg-white rounded-lg p-4 hover:shadow-lg transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🏙️</div>
                        <div>
                          <div className="font-semibold text-gray-900">{city.name}</div>
                          <div className="text-sm text-gray-600">{city.avgRate}</div>
                        </div>
                      </div>
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
            <NewZealandFAQ items={faqItems} title={`Frequently asked questions about loans in ${region.name}`} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to apply for a loan in {region.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Compare offers from licensed lenders and find the best solution for you.
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
