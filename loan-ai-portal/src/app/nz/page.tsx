import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'
import NewZealandDisclosure from '@/components/newzealand/newzealand-disclosure'
import NewZealandFAQ from '@/components/newzealand/newzealand-faq'
import StickyApplyButton from '@/components/newzealand/sticky-apply-button'
import { newzealandRegions } from '@/data/newzealand-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Loans in New Zealand 2025 – Compare Licensed Lenders',
  description: 'Compare personal loans from licensed lenders in New Zealand. Competitive rates, fast approval, complete transparency. Find the best loan offers across all regions.',
  keywords: 'personal loans new zealand, loans nz, FMA regulated, compare loans, interest rates, fast loans, online loans new zealand',
  openGraph: {
    title: 'Personal Loans New Zealand – Compare Licensed Lender Offers',
    description: 'Loan comparison platform in New Zealand. Licensed lenders, complete transparency, assistance in English.',
    url: 'https://loansai.com/nz',
    siteName: 'LoansAI New Zealand',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/nz',
  },
}

const faqItems = [
  {
    question: 'What is the CCCFA and how does it protect borrowers?',
    answer: 'The Credit Contracts and Consumer Finance Act 2003 (CCCFA) is New Zealand\'s primary consumer credit legislation. It requires lenders to assess your ability to repay without hardship, provide clear disclosure of all costs, and follow responsible lending practices. The FMA (Financial Markets Authority) supervises compliance. You have rights to request hardship assistance if your circumstances change.'
  },
  {
    question: 'How quickly can I receive funds after approval?',
    answer: 'Timeline depends on the lender and verification complexity. Online loans can be approved within 24-48 hours with funds transferred directly to your bank account. Traditional bank loans may take 3-7 business days. Complete and accurate documentation speeds up the process significantly.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Generally you need: valid photo ID (driver license or passport), proof of income (payslips, bank statements for the last 3-6 months, IRD documentation if self-employed), proof of address, and details of your expenses. Some lenders may require additional documentation depending on the loan amount and your circumstances.'
  },
  {
    question: 'Can I get a loan with bad credit history?',
    answer: 'Yes, there are lenders who offer loans to people with less favorable credit history, though typically at higher interest rates and lower amounts. Under CCCFA, all lenders must assess affordability rather than just credit score. Working to improve your credit score by paying existing debts on time and maintaining responsible financial behavior will help. Some lenders focus more on current income and affordability.'
  },
  {
    question: 'What are my rights as a borrower in New Zealand?',
    answer: 'You have the right to: clear information before signing, assessment of your ability to repay, transparent disclosure of all costs including interest and fees, request hardship assistance if circumstances change, complain to the lender and escalate to Banking Ombudsman or FMA if needed, and protection under the CCCFA and Fair Trading Act. All lenders must follow responsible lending principles.'
  }
]

export default function NewZealandHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI New Zealand - Personal Loan Comparison',
    description: 'Personal loan comparison platform in New Zealand with FMA-regulated licensed lenders',
    url: 'https://loansai.com/nz',
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand'
    },
    availableLanguage: 'en',
    serviceType: 'Personal Loan Comparison',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
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
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <NewZealandNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇳🇿 Licensed and regulated by FMA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in New Zealand
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from 30+ licensed lenders regulated by the FMA. 
              Complete transparency, competitive rates, fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/nz/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/nz/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explore Regions
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">16</div>
                <div className="text-sm text-gray-600">Regions Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">5M</div>
                <div className="text-sm text-gray-600">Population Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete the application</h3>
                <p className="text-gray-600">
                  Fill out the online form in 2-3 minutes with basic information about yourself and the loan you need.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare offers</h3>
                <p className="text-gray-600">
                  Receive personalized offers from multiple lenders. Compare rates, terms and choose the best one.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receive the funds</h3>
                <p className="text-gray-600">
                  After approval, funds are transferred directly to your bank account, usually within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explore loans by region
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Specific information about loans, regulations and lenders for each development region in New Zealand.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newzealandRegions.slice(0, 8).map((region) => (
                <Link key={region.slug} href={`/nz/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition">
                        {region.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span>{region.population} population</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Avg: {region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span>Rate: {region.avgRate}</span>
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
            <div className="text-center mt-8">
              <Link href="/nz/regions">
                <Button variant="outline" size="lg">
                  View all regions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Key regulations in New Zealand
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Consumer protection
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>CCCFA 2003 responsible lending requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Affordability assessment mandatory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Right to hardship assistance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Complete cost transparency required</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Licensing and supervision
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Regulated by FMA (Financial Markets Authority)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Financial Service Providers Register required</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Fair Trading Act compliance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Privacy Act 2020 data protection</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.fma.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit FMA website for more information ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to compare loan offers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Complete the application in 2 minutes and receive personalized offers from licensed lenders.
            </p>
            <Link href="/nz/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Start Now - It's Free
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              No impact on credit score • Fast response • 100% free
            </p>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Popular cities for loans
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Auckland City', 'Wellington City', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 
                'Palmerston North', 'Napier', 'Rotorua', 'New Plymouth', 'Nelson City', 'Queenstown'].map((city) => (
                <Link
                  key={city}
                  href={`/nz/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/nz/cities">
                <Button variant="outline" size="lg">
                  View all cities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandDisclosure />
          </div>
        </section>
      </main>

      <NewZealandFooter />
    </>
  )
}
