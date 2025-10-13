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
import { australiaCities } from '@/data/australia-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Australia 2025 – Compare Licensed Lenders',
  description: 'Compare personal loans from licensed lenders across Australia. Competitive rates, fast approval, full transparency. Find the best loan options in all states and territories.',
  keywords: 'personal loans australia, credit, ASIC, loan comparison, interest rates, quick loans, online loans australia',
  openGraph: {
    title: 'Personal Loans Australia – Compare Licensed Lender Offers',
    description: 'Personal loan comparison platform in Australia. Licensed ASIC lenders, full transparency, support across all states.',
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
    answer: 'The comparison rate combines the loan interest rate and most fees and charges into a single percentage, making it easier to compare the true cost of different loan products. By law, all Australian lenders must display comparison rates. However, these rates are based on standardized examples and may not reflect your actual costs depending on your loan amount, term, and circumstances.'
  },
  {
    question: 'How quickly can I receive funds after loan approval?',
    answer: 'Timing varies by lender and verification complexity. Online personal loans can be approved within 24-48 hours, with funds transferred directly to your bank account. Some lenders offer same-day funding if approved before their cut-off time. Traditional bank loans may take 3-7 business days. Complete and accurate documentation speeds up the process.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically you\'ll need: valid photo identification (driver\'s licence or passport), proof of income (payslips, tax returns for self-employed), bank statements (last 3-6 months), proof of address, and details of any existing debts. Some lenders may require additional documentation depending on the loan amount and your employment type.'
  },
  {
    question: 'Can I get a personal loan with bad credit?',
    answer: 'Yes, there are lenders who offer personal loans to people with impaired credit history, though typically with higher interest rates and lower loan amounts. It\'s important to improve your credit score by paying existing debts on time and maintaining responsible financial behaviour. Some lenders also consider your current ability to repay, not just past credit history.'
  },
  {
    question: 'What are my rights as a borrower in Australia?',
    answer: 'You have the right to: clear and complete information before signing, a cooling-off period (usually 14 days for credit contracts over AU$2,000), early repayment with minimal fees, protection against unfair practices, financial hardship assistance, and privacy protection under the Privacy Act 1988. All loans must comply with the National Consumer Credit Protection Act and be provided by ASIC-licensed lenders.'
  }
]

export default function AustraliaHubPage() {
  // Get top 6 states/territories for display
  const topRegions = australiaRegions.slice(0, 6)
  
  // Get featured cities
  const featuredCities = [
    australiaCities.find(c => c.slug === 'sydney'),
    australiaCities.find(c => c.slug === 'melbourne'),
    australiaCities.find(c => c.slug === 'brisbane'),
    australiaCities.find(c => c.slug === 'perth'),
    australiaCities.find(c => c.slug === 'adelaide'),
    australiaCities.find(c => c.slug === 'canberra'),
    australiaCities.find(c => c.slug === 'gold-coast'),
    australiaCities.find(c => c.slug === 'hobart'),
  ].filter(Boolean)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Australia - Personal Loan Comparison',
    description: 'Personal loan comparison platform in Australia with licensed ASIC lenders',
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
              Compare loan offers from over 40 ASIC-licensed lenders. 
              Full transparency, competitive rates, fast approval.
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
                  Browse States & Territories
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-600">States & Territories</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">9.5%</div>
                <div className="text-sm text-gray-600">Avg. Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Personal Loans in Australia – Complete Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In Australia, the personal loan market is regulated by the <strong>Australian Securities and 
                  Investments Commission (ASIC)</strong>, ensuring consumer protection and fair lending practices. 
                  The LoansAI platform enables you to compare offers from licensed lenders across all 8 states and 
                  territories, helping you find the best rates and terms tailored to your financial situation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you need a loan for <strong>debt consolidation</strong>, <strong>home renovation</strong>, 
                  <strong> vehicle purchase</strong>, or <strong>unexpected expenses</strong>, our platform connects 
                  you with trusted lenders offering competitive rates and transparent terms.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose LoansAI Australia?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% ASIC-licensed lenders</strong> – All institutions are verified and regulated</li>
                  <li><strong>Real-time comparison</strong> – Current offers from 40+ lenders</li>
                  <li><strong>Local market expertise</strong> – Specific solutions for each state and territory</li>
                  <li><strong>Transparent costs</strong> – Full disclosure of comparison rates, fees, and charges</li>
                  <li><strong>Data protection</strong> – Compliance with Privacy Act 1988 and highest security standards</li>
                  <li><strong>Australian support</strong> – Help in English at every stage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Australian Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Loan Regulations in Australia
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🛡️</span>
                      Key Consumer Protections
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Interest rate cap:</strong> Maximum 48% per annum for all consumer loans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Comparison rates:</strong> Mandatory disclosure for easy cost comparison</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Cooling-off period:</strong> Usually 14 days to cancel without penalty (loans over AU$2,000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Early repayment:</strong> Right to pay off early with minimal or no fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Hardship provisions:</strong> Mandatory assistance if you experience financial difficulty</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-blue-600">📋</span>
                      Legal Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>ASIC licensing:</strong> All lenders must hold an Australian Credit Licence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>NCCP Act:</strong> Protection under National Consumer Credit Protection Act 2009</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Responsible lending:</strong> Lenders must verify you can afford repayments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Clear disclosure:</strong> All fees, charges, and comparison rates must be stated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Privacy compliance:</strong> Protected under Privacy Act 1988 and Australian Privacy Principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> The Australian Securities and Investments Commission (ASIC) is Australia's 
                    corporate, markets, and financial services regulator, ensuring market stability and consumer protection. 
                    All loans featured on this platform come from ASIC-regulated institutions.
                  </p>
                  <Link href="https://www.asic.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                    Visit the official ASIC website →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* States Section */}
        <section id="states" className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Loans by State and Territory
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select your state or territory to see local loan offers and regulations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRegions.map((region) => (
                <Link 
                  key={region.slug} 
                  href={`/au/${region.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{region.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {region.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{region.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg. loan:</span>
                          <span className="font-semibold">{region.avgLoanAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg. rate:</span>
                          <span className="font-semibold text-blue-600">{region.avgRate}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500">Major cities:</span>
                        <p className="text-xs text-gray-700 mt-1">
                          {region.majorCities.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Browse all 8 Australian states and territories
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {australiaRegions.slice(6).map((region) => (
                  <Link 
                    key={region.slug} 
                    href={`/au/${region.slug}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {region.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section id="cities" className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Popular Cities
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Find the best loan offers in Australia's major cities
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCities.map((city) => (
                <Link 
                  key={city?.slug} 
                  href={`/au/${city?.regionSlug}/${city?.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{city?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{city?.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg. rate:</span>
                          <span className="font-semibold text-blue-600">{city?.avgRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lenders:</span>
                          <span className="font-semibold">{city?.lenderCount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Types of Available Loans
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    Personal Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Unsecured loans for any purpose. Amounts from AU$2,000 to AU$100,000, 
                    repayment terms 1-7 years.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ No collateral required</li>
                    <li>✓ Quick decision (24-48h)</li>
                    <li>✓ Flexible repayment terms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Debt Consolidation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Combine multiple debts into one loan with a lower comparison rate and monthly payment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Lower monthly payments</li>
                    <li>✓ One payment instead of many</li>
                    <li>✓ Potentially lower interest rate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Home Renovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Special loans for home improvements, renovations, or building materials purchase.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Higher loan amounts</li>
                    <li>✓ Longer repayment periods</li>
                    <li>✓ Competitive rates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Car Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Finance your new or used vehicle purchase with favorable interest rates.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Finance up to 100% of value</li>
                    <li>✓ Repayment terms up to 7 years</li>
                    <li>✓ Fast fund disbursement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <AustraliaFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to find your ideal loan?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare offers from over 40 licensed lenders in seconds
            </p>
            <Link href="/au/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Start Your Application
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Free comparison • No impact on credit score • 100% online
            </p>
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
