import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SANavigation from '@/components/sa/sa-navigation'
import SAFooter from '@/components/sa/sa-footer'
import SADisclosure from '@/components/sa/sa-disclosure'
import SAFAQ from '@/components/sa/sa-faq'
import SAStickyApplyButton from '@/components/sa/sticky-apply-button'
import { saRegions } from '@/data/sa-regions'
import { saCities } from '@/data/sa-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans South Africa 2025 – Compare Licensed Offers',
  description: 'Compare personal loans from licensed South African lenders. Competitive rates, fast approval, full transparency. Find the best offers across all 9 provinces.',
  keywords: 'personal loans south africa, credit, NCR, loan comparison, interest rates, fast loans, online loans south africa',
  openGraph: {
    title: 'Personal Loans South Africa – Compare Licensed Lender Offers',
    description: 'Loan comparison platform in South Africa. NCR licensed lenders, full transparency, support in English and Afrikaans.',
    url: 'https://loansai.com/za',
    siteName: 'LoansAI South Africa',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/za',
  },
}

const faqItems = [
  {
    question: 'What is the National Credit Regulator (NCR)?',
    answer: 'The NCR is the regulatory authority responsible for regulating the South African credit industry. It ensures that credit providers comply with the National Credit Act (NCA) and protects consumers from reckless lending and unfair credit practices. All legitimate lenders must be registered with the NCR.'
  },
  {
    question: 'How quickly can I receive funds after approval?',
    answer: 'Funding times vary by lender and verification complexity. Online loans can be approved within 24-48 hours, with funds transferred directly to your bank account. Traditional bank loans may take 3-7 business days. Complete and accurate documentation speeds up the process.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically, you need: valid South African ID, proof of income (payslips, bank statements), proof of residence, and your bank account details. Self-employed applicants may need additional documentation such as financial statements. Some lenders may require additional documents depending on the loan amount.'
  },
  {
    question: 'Can I get a loan with a poor credit record?',
    answer: 'Yes, some lenders specialize in loans for people with impaired credit records, though interest rates will be higher and loan amounts smaller. It\'s important to work on improving your credit score by paying existing debts on time. Some lenders also consider your current ability to repay, not just past credit history.'
  },
  {
    question: 'What are my rights as a borrower in South Africa?',
    answer: 'You have the right to: clear and complete information before signing, a cooling-off period to cancel the agreement, transparent cost disclosure including APR, protection from reckless lending, debt review if you\'re over-indebted, and confidentiality of your personal information under POPIA. All loans must comply with NCR cost limits.'
  }
]

export default function SouthAfricaHubPage() {
  // Get top 6 provinces for display
  const topProvinces = saRegions.slice(0, 6)
  
  // Get featured cities
  const featuredCities = [
    saCities.find(c => c.slug === 'johannesburg'),
    saCities.find(c => c.slug === 'cape-town'),
    saCities.find(c => c.slug === 'durban'),
    saCities.find(c => c.slug === 'pretoria'),
    saCities.find(c => c.slug === 'gqeberha'),
    saCities.find(c => c.slug === 'polokwane'),
    saCities.find(c => c.slug === 'ekurhuleni'),
    saCities.find(c => c.slug === 'east-london'),
  ].filter(Boolean)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI South Africa - Personal Loan Comparison',
    description: 'Personal loan comparison platform in South Africa with NCR licensed lenders',
    url: 'https://loansai.com/za',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa'
    },
    availableLanguage: ['en', 'af'],
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
        name: 'South Africa',
        item: 'https://loansai.com/za'
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

      <SANavigation />
      <SAStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇿🇦 NCR Licensed and Regulated
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in South Africa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from 40+ NCR licensed lenders. 
              Full transparency, competitive rates, fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/za/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="#provinces">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Browse Provinces
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-600">Lenders</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">9</div>
                <div className="text-sm text-gray-600">Provinces</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">18.5%</div>
                <div className="text-sm text-gray-600">Avg APR</div>
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
                  Personal Loans in South Africa – Complete Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In South Africa, the personal loan market is regulated by the <strong>National Credit Regulator (NCR)</strong>, 
                  which ensures consumer protection and fair lending practices. LoansAI enables you to compare offers from 
                  licensed lenders across all 9 provinces, helping you find the best terms suited to your financial situation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you need a loan for <strong>debt consolidation</strong>, <strong>home improvements</strong>, 
                  <strong> vehicle purchase</strong>, or <strong>unexpected expenses</strong>, our platform connects you 
                  with trusted lenders offering competitive rates and transparent terms.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose LoansAI South Africa?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% NCR licensed lenders</strong> – All institutions are verified and regulated</li>
                  <li><strong>Real-time comparison</strong> – Current offers from 40+ lenders</li>
                  <li><strong>Local market knowledge</strong> – Province-specific solutions</li>
                  <li><strong>Transparent costs</strong> – Full information on APR, fees, and charges</li>
                  <li><strong>POPIA compliant</strong> – Highest data security standards</li>
                  <li><strong>Multi-language support</strong> – Service in English and Afrikaans</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* South African Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Loan Regulations in South Africa
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
                        <span><strong>Maximum interest rate:</strong> Repo rate + 21% per annum for unsecured loans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Initiation fee cap:</strong> R1,207.50 + 10% of loan amount above R1,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Cooling-off period:</strong> 5 business days to cancel without penalty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Early settlement:</strong> Right to pay off early with reduced interest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Affordability assessment:</strong> Mandatory check protects against over-indebtedness</span>
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
                        <span><strong>NCR registration:</strong> All lenders must be registered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>National Credit Act:</strong> Protection under NCA 34 of 2005</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Transparent cost disclosure:</strong> Full information on APR and all fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Written agreement:</strong> All terms must be documented in plain language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>POPIA compliance:</strong> Data protection under POPIA Act 4 of 2013</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important Information:</strong> The National Credit Regulator (NCR) is the South African 
                    regulatory body ensuring financial market stability and consumer protection. All loans featured 
                    on this platform come from NCR-regulated institutions.
                  </p>
                  <Link href="https://www.ncr.org.za/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                    Visit the official NCR website →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Provinces Section */}
        <section id="provinces" className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Loans by Province
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select your province to see local loan offers and regulations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topProvinces.map((province) => (
                <Link 
                  key={province.slug} 
                  href={`/za/${province.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{province.nameEn}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {province.descriptionEn}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{province.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg loan:</span>
                          <span className="font-semibold">{province.avgLoanAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg rate:</span>
                          <span className="font-semibold text-blue-600">{province.avgRate}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500">Major cities:</span>
                        <p className="text-xs text-gray-700 mt-1">
                          {province.majorCities.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Browse all 9 provinces of South Africa
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {saRegions.slice(6).map((province) => (
                  <Link 
                    key={province.slug} 
                    href={`/za/${province.slug}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {province.nameEn}
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
              Find the best loan offers in South Africa's major cities
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCities.map((city) => (
                <Link 
                  key={city?.slug} 
                  href={`/za/${city?.regionSlug}/${city?.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{city?.nameEn}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{city?.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg APR:</span>
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
              Types of Loans Available
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
                    Unsecured loans for any purpose. Amounts from R 5,000 to R 250,000, 
                    repayment period 6-84 months.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ No collateral required</li>
                    <li>✓ Fast decision (24-48h)</li>
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
                    Combine multiple debts into one loan with lower APR and monthly payment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Lower monthly payments</li>
                    <li>✓ One payment instead of many</li>
                    <li>✓ Potentially lower interest</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Home Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Special loans for home renovation, repairs, or building material purchases.
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
                    Vehicle Finance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Finance for new or used vehicle purchase with favorable interest rates.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Finance up to 100% of value</li>
                    <li>✓ Repayment period up to 7 years</li>
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
            <SAFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to find your ideal loan?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare offers from 40+ licensed lenders in seconds
            </p>
            <Link href="/za/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Start Your Application
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Free comparison • No credit score impact • 100% online
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <SADisclosure />
        </section>
      </main>

      <SAFooter />
    </>
  )
}
