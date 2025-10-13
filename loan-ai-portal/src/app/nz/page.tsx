import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NZNavigation from '@/components/new-zealand/nz-navigation'
import NZFooter from '@/components/new-zealand/nz-footer'
import NZDisclosure from '@/components/new-zealand/nz-disclosure'
import NZFAQ from '@/components/new-zealand/nz-faq'
import NZStickyApplyButton from '@/components/new-zealand/nz-sticky-apply-button'
import { newZealandRegions, getTopNZCities } from '@/data/nz-data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans New Zealand 2025 – Compare FMA-Licensed Lenders',
  description: 'Compare personal loans from FMA-licensed lenders across New Zealand. Competitive rates, fast approval, complete transparency. Find the best loan offers in all regions.',
  keywords: 'personal loans new zealand, loans nz, fma licensed lenders, compare loans, loan rates, quick loans, online loans new zealand',
  openGraph: {
    title: 'Personal Loans New Zealand – Compare FMA-Licensed Offers',
    description: 'New Zealand\'s trusted loan comparison platform. FMA-licensed lenders, complete transparency, support in English and Te Reo Māori.',
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
    question: 'What is the CCCFA and how does it protect me?',
    answer: 'The Credit Contracts and Consumer Finance Act (CCCFA) is New Zealand legislation that regulates the credit industry to protect consumers from irresponsible lending. It requires lenders to make reasonable inquiries about your financial situation, ensure you can afford the loan without suffering substantial hardship, and provide clear disclosure of all costs. The CCCFA also limits default fees and gives consumers the right to hardship assistance.'
  },
  {
    question: 'How quickly can I get funds after loan approval?',
    answer: 'Funding times vary by lender and application complexity. Online lenders can approve and disburse funds within 24-48 hours if all documentation is complete and verification checks pass. Traditional banks may take 3-7 business days. Providing complete and accurate documentation upfront speeds up the process. Once approved, funds are transferred directly to your New Zealand bank account.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically you need: valid New Zealand ID (driver\'s license or passport), proof of income (latest payslips, bank statements, or tax returns for self-employed), proof of address (utility bill not older than 3 months), bank statements (usually 3 months), and employment details. Lenders may request additional documents depending on the loan amount and your credit profile. Having all documents ready accelerates the application process.'
  },
  {
    question: 'Can I get a loan with bad credit?',
    answer: 'Yes, some lenders specialize in loans for consumers with impaired credit histories. However, expect higher interest rates and potentially lower loan amounts. Under the CCCFA, lenders must still assess your ability to repay without suffering substantial hardship. Focus on rebuilding your credit by paying existing debts on time, checking your credit report for errors, and demonstrating stable income.'
  },
  {
    question: 'What are my rights as a borrower in New Zealand?',
    answer: 'Under the CCCFA, you have the right to: receive clear disclosure of all loan costs before signing, have lenders make reasonable inquiries about your financial situation, apply for hardship assistance if circumstances change, make early repayments without excessive fees, dispute resolution through the Banking Ombudsman or Financial Disputes Resolution Service, and protection of your personal information under the Privacy Act 2020. All fees and interest rates must comply with FMA regulations.'
  }
]

const topCities = getTopNZCities(12)

export default function NewZealandHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI New Zealand - Personal Loan Comparison',
    description: 'Compare personal loans from FMA-licensed lenders across New Zealand',
    url: 'https://loansai.com/nz',
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand'
    },
    availableLanguage: ['en', 'mi'],
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

      <NZNavigation />
      <NZStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇳🇿 Regulated by the Financial Markets Authority (FMA)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in New Zealand
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from over 30 FMA-licensed lenders. 
              Complete transparency, competitive rates, fast approval across all regions.
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
              <Link href="#regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explore Regions
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-700">FMA-Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-gray-700">Regions Covered</div>
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
                  Our AI analyzes your profile and matches you with suitable FMA-licensed lenders. 
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
                    No collateral required. Amounts from NZ$1,000 to NZ$50,000. Terms from 6 to 60 months. 
                    Rates typically 8-25% p.a. depending on credit profile.
                  </p>
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
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
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Emergency Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Fast approval for urgent expenses. Medical emergencies, car repairs, or unexpected bills. 
                    Get funds within 24-48 hours from approval.
                  </p>
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Apply Fast →
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
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Vehicle Finance →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    Education Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Finance your studies or professional development. Course fees, materials, 
                    and living expenses. Flexible repayment options available.
                  </p>
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Education Finance →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏡</span>
                    Home Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Renovations, repairs, or extensions. Increase your property value. 
                    Competitive rates for homeowners.
                  </p>
                  <Link href="/nz/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Home Loans →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NZ Regulations */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              New Zealand Loan Regulations
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Your rights and protections under the CCCFA
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
                      <span><strong>Responsible Lending:</strong> Lenders must make reasonable inquiries about your financial situation and ensure you can afford repayments without substantial hardship.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Clear Disclosure:</strong> All costs, fees, and terms must be clearly disclosed before you sign any agreement.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Default Fees:</strong> Limited to reasonable costs actually incurred by the lender.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Early Repayment:</strong> You can pay off your loan early. Lenders can only charge reasonable early repayment fees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Hardship Assistance:</strong> Right to apply for hardship assistance if your circumstances change.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Privacy Protection:</strong> Your personal information is protected under the Privacy Act 2020.</span>
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
                      <p className="font-semibold text-gray-900 mb-2">Financial Markets Authority (FMA)</p>
                      <p>
                        The FMA regulates financial service providers in New Zealand. All lenders must be registered 
                        and comply with the CCCFA. The FMA ensures fair lending practices and consumer protection.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Contracts and Consumer Finance Act (CCCFA)</p>
                      <p>
                        Governs all consumer credit agreements in New Zealand. Protects consumers from irresponsible lending, 
                        ensures transparent disclosure, and provides dispute resolution mechanisms.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Reporting</p>
                      <p>
                        Major bureaus: Centrix, Equifax NZ, Illion. They maintain credit records 
                        and provide credit scores. You can access your credit report for free.
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-md">
                      <p className="font-semibold text-blue-900 mb-1">Official Resources:</p>
                      <a 
                        href="https://www.fma.govt.nz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        Visit FMA Website →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section id="regions" className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Loans by Region
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select your region to see local loan offers and information
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newZealandRegions.map((region) => (
                <Link 
                  key={region.slug} 
                  href={`/nz/regions/${region.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">
                        {region.name}
                      </CardTitle>
                      {region.nameLocal && region.nameLocal !== region.name && (
                        <p className="text-sm text-gray-500 italic">{region.nameLocal}</p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {region.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Capital: {region.capital}</span>
                        <span>{(region.population / 1000).toFixed(0)}K people</span>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        View {region.cities.length} {region.cities.length === 1 ? 'City' : 'Cities'} →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
              Find loan options in major New Zealand cities
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/nz/cities/${city.slug}`}
                  className="bg-white rounded-lg p-4 hover:shadow-md transition-all hover:border-blue-400 border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                  <p className="text-xs text-gray-500 capitalize">{city.region.replace('-', ' ')}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {(city.population / 1000).toFixed(0)}K residents
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Why Choose LoansAI New Zealand?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                <p className="text-sm text-gray-600">
                  Your information is encrypted and protected. We comply with Privacy Act 2020.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">FMA Licensed Only</h3>
                <p className="text-sm text-gray-600">
                  We only work with FMA-licensed lenders. Your protection is guaranteed.
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
                <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                <p className="text-sm text-gray-600">
                  Support in English and Te Reo Māori. Help in your language.
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
              Complete your application in 5 minutes and receive personalized offers from FMA-licensed lenders.
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
              No credit score impact • Fast response • 100% free service
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <NZFAQ items={faqItems} />

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <NZDisclosure />
        </div>
      </main>

      <NZFooter />
    </>
  )
}
