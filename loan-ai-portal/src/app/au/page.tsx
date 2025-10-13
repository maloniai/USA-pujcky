import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import AustraliaDisclosure from '@/components/australia/australia-disclosure'
import AustraliaFAQ from '@/components/australia/australia-faq'
import StickyApplyButton from '@/components/australia/sticky-apply-button'
import { australiaRegions } from '@/data/australia-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Australia 2025 – Compare ASIC Licensed Lenders',
  description: 'Compare personal loans from ASIC-licensed lenders across Australia. Competitive rates, fast approval, complete transparency. Find the best loan offers in all states and territories.',
  keywords: 'personal loans australia, loan comparison, ASIC licensed, competitive rates, fast approval, online loans australia',
  openGraph: {
    title: 'Personal Loans Australia – Compare Offers from Licensed Lenders',
    description: 'ASIC-regulated loan comparison platform in Australia. Licensed lenders, complete transparency, Australian consumer protection.',
    url: 'https://loansai.com/au',
    siteName: 'LoansAI Australia',
    locale: 'en_AU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/au',
  },
}

const faqItems = [
  {
    question: 'What is a comparison rate and why is it important?',
    answer: 'A comparison rate combines the interest rate with most fees and charges to show the true cost of a loan. Under Australian law, lenders must display comparison rates to help you compare different loan products fairly. The comparison rate is calculated on a $30,000 loan over 5 years and helps you see the total cost of borrowing.'
  },
  {
    question: 'How quickly can I receive my loan funds after approval?',
    answer: 'Funding times vary by lender. Many online lenders offer same-day or next business day funding once your application is approved and verified. Traditional banks may take 2-5 business days. The fastest approvals typically come from digital lenders who have streamlined verification processes.'
  },
  {
    question: 'What documents do I need to apply for a personal loan in Australia?',
    answer: 'You typically need: valid Australian ID (driver\'s licence or passport), proof of income (payslips, bank statements, or tax returns), proof of address, details of your assets and liabilities, and your bank account details for deposit. Self-employed applicants may need additional documentation like business financials or BAS statements.'
  },
  {
    question: 'Can I get a personal loan with bad credit in Australia?',
    answer: 'Yes, some lenders specialize in bad credit loans, though rates will be higher and loan amounts may be smaller. ASIC regulations require all lenders to conduct responsible lending assessments regardless of credit score. Consider credit repair options and demonstrate stable income to improve your chances.'
  },
  {
    question: 'What are my rights as a borrower in Australia?',
    answer: 'You have extensive protections under the National Consumer Credit Protection Act: right to clear fee disclosure, cooling-off period (usually 14 days), right to early repayment, hardship provisions if you experience financial difficulty, protection against unfair contract terms, and access to free dispute resolution through AFCA (Australian Financial Complaints Authority).'
  }
]

export default function AustraliaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Australia - Personal Loan Comparison',
    description: 'Personal loan comparison platform in Australia with ASIC-licensed lenders',
    url: 'https://loansai.com/au',
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
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
        name: 'Australia',
        item: 'https://loansai.com/au'
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

      <AustraliaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇦🇺 Licensed and regulated by ASIC
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in Australia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from 50+ ASIC-licensed lenders. 
              Complete transparency, competitive rates, fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/au/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/au/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explore States
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">States & Territories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">26M</div>
                <div className="text-sm text-gray-600">Population Served</div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Application</h3>
                <p className="text-gray-600">
                  Fill out our secure online form in 2-3 minutes with basic information about yourself and your loan needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Offers</h3>
                <p className="text-gray-600">
                  Receive personalized loan offers from multiple ASIC-licensed lenders. Compare rates, terms, and features.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Funded</h3>
                <p className="text-gray-600">
                  Once approved, funds are deposited directly into your Australian bank account, often within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* States Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explore loans by state and territory
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              State-specific information about personal loans, regulations, and lenders available in each Australian state and territory.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {australiaRegions.map((region) => (
                <Link key={region.slug} href={`/au/regions/${region.slug}`}>
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
              <Link href="/au/regions">
                <Button variant="outline" size="lg">
                  View all states
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
                Key Regulations in Australia
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
                      <span>National Consumer Credit Protection Act 2009</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Responsible lending obligations mandatory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Comparison rate disclosure required</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Fee caps for small amount credit contracts</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Licensing & Oversight
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Regulated by ASIC (Australian Securities and Investments Commission)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Australian Credit Licence (ACL) mandatory</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Privacy Act 1988 compliance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>AFCA dispute resolution available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.asic.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit ASIC website for more information ↗
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
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Get Started - It's Free
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
              Popular cities for personal loans
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 
                'Hobart', 'Darwin', 'Gold Coast', 'Newcastle', 'Wollongong', 'Geelong'].map((city) => (
                <Link
                  key={city}
                  href={`/au/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/au/cities">
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
            <AustraliaFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <AustraliaDisclosure />
          </div>
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
