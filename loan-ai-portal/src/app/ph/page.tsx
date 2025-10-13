import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import PhilippinesDisclosure from '@/components/philippines/philippines-disclosure'
import PhilippinesFAQ from '@/components/philippines/philippines-faq'
import StickyApplyButtonPH from '@/components/philippines/sticky-apply-button'
import { philippinesRegions } from '@/data/philippines-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Loans in Philippines 2025 – Compare Licensed BSP Lenders',
  description: 'Compare personal loans from BSP-licensed lenders in the Philippines. Competitive rates, fast approval, complete transparency. Find the best offers across all regions.',
  keywords: 'personal loans philippines, pautang, BSP, loan comparison, interest rates, quick loans, online loans philippines',
  openGraph: {
    title: 'Personal Loans Philippines – Compare Licensed Lenders',
    description: 'Loan comparison platform in the Philippines. BSP-licensed lenders, complete transparency, assistance in Tagalog and English.',
    url: 'https://loansai.com/ph',
    siteName: 'LoansAI Philippines',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ph',
  },
}

const faqItems = [
  {
    question: 'What is APR and how is it calculated?',
    answer: 'APR (Annual Percentage Rate) represents the total cost of the loan expressed as an annual percentage. It includes the interest rate, fees, and all other costs related to the loan. In the Philippines, the BSP regulates lending practices to ensure fair lending. APR helps you compare offers from different lenders based on the actual total cost.'
  },
  {
    question: 'How quickly can I receive funds after approval?',
    answer: 'The timeline depends on the lender and verification complexity. Online loans can be approved in 24-48 hours with funds deposited directly to your bank account. Traditional bank loans may take 3-7 business days. Complete and accurate documentation speeds up the process.'
  },
  {
    question: 'What documents are needed to apply for a personal loan?',
    answer: 'Generally you need: valid government-issued ID (passport, driver\'s license, or national ID), proof of income (certificate of employment, payslips for employees, or ITR/financial statements for self-employed), bank statements (last 3-6 months), proof of billing/residence, and completed application form. Some lenders may require additional documents based on the loan amount.'
  },
  {
    question: 'Can I get a loan with bad credit history?',
    answer: 'Yes, some lenders offer loans to individuals with less favorable credit history, but typically with higher interest rates and smaller loan amounts. It\'s important to improve your credit score by paying existing debts on time and maintaining responsible financial behavior. Some lenders also evaluate current repayment capacity, not just credit history.'
  },
  {
    question: 'What are my rights as a borrower in the Philippines?',
    answer: 'You have the right to: clear and complete information before signing, protection against abusive lending practices under RA 11765 (Financial Consumer Protection Act), file complaints with BSP or SEC if needed, privacy and protection of personal data under RA 10173 (Data Privacy Act), and fair treatment with transparent fees. All loans must comply with BSP regulations and the Truth in Lending Act (RA 3765).'
  }
]

export default function PhilippinesHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Philippines - Personal Loan Comparison',
    description: 'Personal loan comparison platform in the Philippines with BSP-licensed lenders',
    url: 'https://loansai.com/ph',
    areaServed: {
      '@type': 'Country',
      name: 'Philippines'
    },
    availableLanguage: ['en', 'tl'],
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
        name: 'Philippines',
        item: 'https://loansai.com/ph'
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

      <PhilippinesNavigation />
      <StickyApplyButtonPH />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇵🇭 Licensed and Regulated by BSP
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in the Philippines
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from over 30 BSP-licensed lenders. 
              Complete transparency, competitive rates, fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/ph/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/ph/regions">
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
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regions Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">35+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">110M</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Paano Ito Gumagana? (How It Works)
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete the Application</h3>
                <p className="text-gray-600">
                  Fill out the online form in 2-3 minutes with basic information about yourself and your desired loan.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Offers</h3>
                <p className="text-gray-600">
                  Receive personalized offers from multiple lenders. Compare rates, terms, and choose the best one.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Funds</h3>
                <p className="text-gray-600">
                  After approval, funds are deposited directly to your bank account, typically within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explore Loans by Region
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Region-specific information about loans, regulations, and lenders for each administrative region of the Philippines.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philippinesRegions.map((region) => (
                <Link key={region.slug} href={`/ph/regions/${region.slug}`}>
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
                          <span>{region.population} residents</span>
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
              <Link href="/ph/regions">
                <Button variant="outline" size="lg">
                  View All Regions
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
                Key Regulations in the Philippines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Consumer Protection
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Truth in Lending Act (RA 3765) - Full disclosure required</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Financial Consumer Protection Act (RA 11765)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Data Privacy Act of 2012 (RA 10173)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Fair and responsible lending practices</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Licensing and Supervision
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Regulated by BSP (Bangko Sentral ng Pilipinas)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Mandatory license for all lenders (RA 9474)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>SEC supervision for lending companies</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Anti-predatory lending measures</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.bsp.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit BSP website for more information ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Compare Loan Offers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Complete the application in 2 minutes and receive personalized offers from licensed lenders.
            </p>
            <Link href="/ph/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Start Now - It's Free
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              No credit score impact • Fast response • 100% free
            </p>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Popular Cities for Loans
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Manila', 'Quezon City', 'Makati', 'Davao City', 'Cebu City', 'Calamba', 
                'Antipolo', 'Pasig', 'Cagayan de Oro', 'Iloilo City', 'Bacolod', 'Taguig'].map((city) => (
                <Link
                  key={city}
                  href={`/ph/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/ph/cities">
                <Button variant="outline" size="lg">
                  View All Cities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <PhilippinesFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <PhilippinesDisclosure />
          </div>
        </section>
      </main>

      <PhilippinesFooter />
    </>
  )
}
