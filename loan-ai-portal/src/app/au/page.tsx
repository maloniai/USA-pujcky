import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AUNavigation from '@/components/australia/au-navigation'
import AUFooter from '@/components/australia/au-footer'
import AUDisclosure from '@/components/australia/au-disclosure'
import AUFAQ from '@/components/australia/au-faq'
import AUStickyApplyButton from '@/components/australia/au-sticky-apply-button'
import { australiaStates, getTopAUCities } from '@/data/au-data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Australia 2025 – Compare ASIC-Licensed Lenders',
  description: 'Compare personal loans from ASIC-licensed lenders across Australia. Competitive rates, fast approval, complete transparency. Find the best loan offers in all states and territories.',
  keywords: 'personal loans australia, loans au, asic licensed lenders, compare loans, loan rates, quick loans, online loans australia',
  openGraph: {
    title: 'Personal Loans Australia – Compare ASIC-Licensed Offers',
    description: 'Australia\'s trusted loan comparison platform. ASIC-licensed lenders, complete transparency, nationwide coverage.',
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
    question: 'How does Australian consumer credit law protect me?',
    answer: 'The National Consumer Credit Protection Act 2009 regulates all credit providers in Australia. All lenders must be licensed by ASIC, conduct responsible lending assessments, provide clear disclosure of all costs and terms, and handle your personal information according to the Privacy Act. You have the right to dispute resolution through the Australian Financial Complaints Authority (AFCA) if issues arise.'
  },
  {
    question: 'How quickly can I get funds after loan approval?',
    answer: 'Funding times vary by lender. Online lenders can approve and disburse funds within 24-48 hours if all documentation is complete and verification checks pass. Traditional banks may take 3-7 business days. Providing complete and accurate documentation upfront speeds up the process. Once approved, funds are transferred directly to your Australian bank account.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically you need: Australian driver\'s licence or passport, proof of income (recent payslips, tax returns, or bank statements), proof of address (utility bill or bank statement), bank statements (usually 3-6 months), and employment verification. Some lenders may request additional documents depending on the loan amount and your credit profile.'
  },
  {
    question: 'Can I get a loan with bad credit?',
    answer: 'Yes, some lenders specialize in loans for consumers with impaired credit history. However, expect higher interest rates and potentially lower loan amounts. Your credit file is checked through Equifax, Experian, or illion. Focus on rebuilding your credit by paying existing debts on time, reducing credit utilization, and correcting any errors on your credit file.'
  },
  {
    question: 'What are my rights as a borrower in Australia?',
    answer: 'Under Australian law, you have the right to: receive clear information about all loan costs before signing (including comparison rate), a credit assessment to ensure the loan is not unsuitable for you, a cooling-off period to cancel the agreement, early repayment without excessive penalties, protection of personal information under the Privacy Act, access to your credit file, and dispute resolution through AFCA. All fees and interest rates must be clearly disclosed, and lenders cannot charge excessive fees or unreasonable interest rates.'
  }
]

const topCities = getTopAUCities(12)

export default function AustraliaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Australia - Personal Loan Comparison',
    description: 'Compare personal loans from ASIC-licensed lenders across Australia',
    url: 'https://loansai.com/au',
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    availableLanguage: ['en'],
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

      <AUNavigation />
      <AUStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇦🇺 Regulated by the Australian Securities and Investments Commission (ASIC)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in Australia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from over 50 ASIC-licensed lenders. 
              Complete transparency, competitive rates, fast approval across all states and territories.
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
              <Link href="#states">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explore States
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">ASIC-Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-700">States & Territories</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">24-48h</div>
                <div className="text-gray-700">Average Approval Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              How LoansAI Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Complete Application</h3>
                <p className="text-gray-600">
                  Fill out our secure online form in 5 minutes. Tell us about your loan needs, 
                  income, and financial situation. No credit score impact at this stage.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. AI Matching</h3>
                <p className="text-gray-600">
                  Our AI analyzes your profile and matches you with suitable ASIC-licensed lenders. 
                  We compare interest rates, fees, and terms to find the best options for you.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Choose & Receive Funds</h3>
                <p className="text-gray-600">
                  Review personalized offers with full cost breakdown. Choose your preferred lender, 
                  complete verification, and receive funds directly to your bank account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Types of Personal Loans Available
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Find the right loan product for your needs
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💵</span>
                    Unsecured Personal Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    No collateral required. Amounts from $2,000 to $75,000. Terms from 1 to 7 years. 
                    Rates typically 6-20% p.a. depending on credit profile.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Apply Now →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Debt Consolidation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Combine multiple debts into one manageable payment. Lower your monthly obligations 
                    and simplify finances. Save on interest with better rates.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Fast Approval Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Fast approval for urgent expenses. Medical bills, car repairs, or unexpected costs. 
                    Get funds within 24-48 hours from approval.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Apply Fast →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💼</span>
                    Business Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Funding for SMEs and entrepreneurs. Working capital, equipment, or expansion. 
                    Flexible terms for registered businesses and sole traders.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Business Options →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Car Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    New or used vehicles. Competitive rates with flexible terms. 
                    Finance up to 100% of vehicle value subject to assessment.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Car Finance →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">✈️</span>
                    Travel Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Finance your dream holiday. Flexible repayment options. 
                    Quick approval to secure your travel plans.
                  </p>
                  <Link href="/au/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Travel Finance →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Australian Regulations */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Australian Loan Regulations
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Your rights and protections under Australian consumer law
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Key Consumer Protections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Comparison Rate:</strong> All lenders must display a comparison rate that includes fees and charges, making it easier to compare true loan costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Responsible Lending:</strong> Lenders must assess your ability to repay without substantial hardship.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Clear Disclosure:</strong> All costs, fees, and charges must be disclosed upfront in clear language.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Privacy Protection:</strong> Your information is protected under the Privacy Act 1988.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Early Repayment:</strong> You can pay off your loan early with minimal or no penalties (depending on loan type).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Dispute Resolution:</strong> Access to AFCA for free, independent dispute resolution.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    Regulatory Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">ASIC (Australian Securities and Investments Commission)</p>
                      <p>
                        ASIC regulates all credit providers in Australia. All lenders must hold an Australian Credit Licence. 
                        ASIC ensures fair lending practices and consumer protection.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">National Consumer Credit Protection Act</p>
                      <p>
                        Governs all credit activities in Australia. Protects consumers from unsuitable lending, 
                        ensures transparent disclosure, and provides dispute resolution mechanisms.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Reporting Bodies</p>
                      <p>
                        Major bureaus: Equifax, Experian, and illion. They maintain comprehensive credit reporting 
                        including positive and negative information. You can access your credit file for free.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">AFCA (Australian Financial Complaints Authority)</p>
                      <p>
                        Free, independent dispute resolution service for financial complaints. 
                        Can provide binding determinations on lenders up to $1.1 million.
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-md">
                      <p className="font-semibold text-blue-900 mb-1">Official Resources:</p>
                      <a 
                        href="https://moneysmart.gov.au" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        Visit MoneySmart.gov.au →
                      </a>
                      <a 
                        href="https://www.asic.gov.au" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block mt-1"
                      >
                        Visit ASIC Website →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* States Section */}
        <section id="states" className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Loans by State & Territory
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select your state to see local loan offers and information
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {australiaStates.map((state) => (
                <Link 
                  key={state.slug} 
                  href={`/au/states/${state.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">
                        {state.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {state.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Capital: {state.capital}</span>
                        <span>{(state.population / 1000000).toFixed(1)}M people</span>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        View {state.cities.length} Cities →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/au/states">
                <Button variant="outline" size="lg">
                  View All States
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Popular Cities
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Find loan options in major Australian cities
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/au/cities/${city.slug}`}
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-all hover:border-blue-400 border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                  <p className="text-xs text-gray-500 capitalize">{city.state.replace('-', ' ')}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {(city.population / 1000).toFixed(0)}K residents
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/au/cities">
                <Button variant="outline" size="lg">
                  View All Cities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Why Choose LoansAI Australia?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                <p className="text-sm text-gray-600">
                  Your information is encrypted and protected. We comply with Privacy Act regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">ASIC Licensed Only</h3>
                <p className="text-sm text-gray-600">
                  We only work with ASIC-licensed lenders. Your protection is guaranteed.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Completely Free</h3>
                <p className="text-sm text-gray-600">
                  No fees to use our service. Compare loans at no cost to you.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌏</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Nationwide Coverage</h3>
                <p className="text-sm text-gray-600">
                  Available in all Australian states and territories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Compare Loan Offers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Complete your application in 5 minutes and receive personalized offers from ASIC-licensed lenders.
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Start Now - It's Free
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              No credit score impact • Fast response • 100% free service
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <AUFAQ items={faqItems} />

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <AUDisclosure />
        </div>
      </main>

      <AUFooter />
    </>
  )
}
