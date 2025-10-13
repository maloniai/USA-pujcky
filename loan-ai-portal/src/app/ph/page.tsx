import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PhilippinesNavigation from '@/components/philippines/ph-navigation'
import PhilippinesFooter from '@/components/philippines/ph-footer'
import PhilippinesDisclosure from '@/components/philippines/ph-disclosure'
import PhilippinesFAQ from '@/components/philippines/ph-faq'
import PHStickyApplyButton from '@/components/philippines/ph-sticky-apply-button'
import { philippinesRegions, getTopPHCities } from '@/data/ph-data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Philippines 2025 – Compare BSP-Licensed Lenders',
  description: 'Compare personal loans from BSP-licensed lenders across the Philippines. Competitive rates, fast approval, complete transparency. Find the best loan offers in all regions.',
  keywords: 'personal loans philippines, loans ph, bsp licensed lenders, compare loans, loan rates, quick loans, online loans philippines',
  openGraph: {
    title: 'Personal Loans Philippines – Compare BSP-Licensed Offers',
    description: 'Philippines\' trusted loan comparison platform. BSP-licensed lenders, complete transparency, support in English and Filipino.',
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
    question: 'What interest rates can I expect for personal loans in the Philippines?',
    answer: 'Interest rates for personal loans in the Philippines typically range from 8% to 35% per annum, depending on the lender, loan amount, term, and your credit profile. Banks generally offer lower rates (8-20% per annum) compared to financing companies (15-35% per annum). Rates are regulated by the Bangko Sentral ng Pilipinas (BSP) to protect borrowers. Major banks like BDO, BPI, and Metrobank often provide preferential rates for customers with good credit history and stable income.'
  },
  {
    question: 'How quickly can I receive funds after loan approval?',
    answer: 'Funding times vary by lender and application complexity. Digital lenders can approve and disburse funds within 24-48 hours if all documentation is complete. Traditional banks may take 3-7 business days. Some fintech lenders offer same-day approval and next-day funding. Providing complete and accurate documentation upfront speeds up the process. Once approved, funds are typically deposited directly to your Philippine bank account.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically you need: a valid government-issued ID (passport, driver\'s license, or UMID), proof of income (latest 3 months payslips, ITR, or financial statements for self-employed), proof of billing address (utility bill not older than 3 months), bank statements (usually 3-6 months), and certificate of employment. Self-employed individuals may need DTI or SEC registration. Lenders may request additional documents depending on the loan amount and your credit profile.'
  },
  {
    question: 'Can I get a loan with bad credit in the Philippines?',
    answer: 'Yes, some lenders specialize in loans for consumers with impaired credit records. However, expect higher interest rates and potentially lower loan amounts. The Credit Information Corporation (CIC) maintains credit records in the Philippines. If you have adverse credit information, focus on rebuilding your credit by paying existing debts on time, maintaining good financial behavior for 6-12 months, and considering secured loans as an alternative. Some financing companies are more flexible with credit requirements than traditional banks.'
  },
  {
    question: 'What are my rights as a borrower in the Philippines?',
    answer: 'Under Philippine law and BSP regulations, you have the right to: receive clear information about all loan costs before signing, fair and transparent lending practices, protection from harassment and abusive collection practices, data privacy protection under the Data Privacy Act of 2012, prepayment without excessive penalties (typically 1-5% of outstanding balance), dispute resolution mechanisms, and access to your credit report from CIC. All fees and interest rates must comply with BSP regulations, and lenders must be licensed by BSP or SEC.'
  }
]

export default function PhilippinesHubPage() {
  // Featured cities
  const featuredCities = getTopPHCities(6)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Philippines - Compare Personal Loans',
    description: 'Personal loan comparison platform for the Philippines with BSP-licensed lending institutions',
    url: 'https://loansai.com/ph',
    areaServed: {
      '@type': 'Country',
      name: 'Philippines'
    },
    availableLanguage: ['en', 'fil'],
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
      <PHStickyApplyButton />

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
              Compare loan offers from 30+ BSP-licensed lending institutions. 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">113M+</div>
                <div className="text-sm text-gray-600">People Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">17</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Personal Loans in the Philippines Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The personal loan market in the Philippines is growing rapidly with participation from 
                commercial banks, financing companies, and credit institutions licensed by the Bangko Sentral 
                ng Pilipinas (BSP). Borrowers can access diverse loan products from unsecured personal loans 
                to salary loans, with competitive interest rates ranging from 8% to 35% per annum.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                LoansAI Philippines helps you compare loan offers from 30+ reputable lenders, all regulated 
                by the BSP. Our platform provides transparent information about interest rates, fees, loan 
                terms, and approval processes, helping you make informed financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Loan Regulations in the Philippines
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>⚖️</span>
                  <span>Key Regulations to Know</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Interest Rate Regulation:</strong> The BSP regulates lending rates to protect 
                      borrowers. Personal loan rates typically range from 8-35% per annum depending on lender type.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Age Requirements:</strong> Borrowers must be 21-65 years old with full legal capacity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Income Verification:</strong> Required for most loans, especially those over ₱100,000.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Credit Checks:</strong> All lenders must check credit history through the Credit 
                      Information Corporation (CIC).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Licensing:</strong> Lending institutions must be licensed by BSP or SEC to operate legally.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Data Privacy:</strong> The Data Privacy Act of 2012 protects borrowers' personal 
                      information from unauthorized disclosure.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Prepayment Rights:</strong> Borrowers have the right to prepay loans, though penalties 
                      of 1-5% of outstanding balance may apply.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Truth in Lending:</strong> Lenders must disclose all fees, interest rates, and terms 
                      before loan approval.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Regions */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Regions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {philippinesRegions.map((region) => (
                <Card key={region.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{region.name}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {region.population.toLocaleString()} people • Capital: {region.capital}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    <div className="flex flex-col gap-2">
                      <Link href={`/ph/regions/${region.slug}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Explore {region.name}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose LoansAI Philippines?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI-Powered Matching
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes your profile and matches you with lenders most likely to approve 
                  your application with competitive rates.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🇵🇭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  We understand the Philippine market, partner with BSP-licensed institutions, and 
                  provide information compliant with local regulations.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Complete Transparency
                </h3>
                <p className="text-gray-600">
                  Compare interest rates, fees, and terms side by side. No hidden costs, no surprises. 
                  Just clear, honest information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Loan Types in the Philippines
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💳</span>
                    <span>Personal Loans</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Unsecured loans based on income and credit history. 
                    Amounts: ₱20,000-₱2,000,000.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💰</span>
                    <span>Salary Loans</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Quick loans for salaried employees with automatic payroll deduction. 
                    Fast approval process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🏪</span>
                    <span>Business Loans</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Working capital for small businesses and entrepreneurs. 
                    Flexible terms and amounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🏥</span>
                    <span>Emergency Loans</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Fast cash for medical expenses, home repairs, or urgent needs. 
                    Quick disbursement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PhilippinesFAQ faqItems={faqItems} />

        {/* Top Lenders */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Lending Institutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Major Banks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• BDO - Rates from 8-20% per annum</li>
                    <li>• BPI - Personal loans up to ₱2M</li>
                    <li>• Metrobank - Fast approval 24-48 hours</li>
                    <li>• Security Bank - Competitive rates for employees</li>
                    <li>• UnionBank - Digital loan application</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financing Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Home Credit - Quick cash loans</li>
                    <li>• RCBC Savings Bank - Salary loans</li>
                    <li>• Citibank - Premium personal loans</li>
                    <li>• HSBC - Flexible payment terms</li>
                    <li>• Maybank - Online loan application</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulator Info */}
        <section className="container mx-auto px-4 py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Regulated by Bangko Sentral ng Pilipinas
            </h2>
            <p className="text-gray-700 mb-6">
              All lending institutions on our platform are licensed and regulated by the Bangko Sentral 
              ng Pilipinas (BSP) or Securities and Exchange Commission (SEC). For more information about 
              regulations and your rights, please visit:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.bsp.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>Bangko Sentral ng Pilipinas</span>
                <span>→</span>
              </a>
              <a
                href="https://www.sec.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>Securities and Exchange Commission</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Loan?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare rates from 30+ licensed lenders. 
              Free, fast, and transparent.
            </p>
            <Link href="/ph/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6">
                Get Started - It's Free
              </Button>
            </Link>
          </div>
        </section>

        {/* Disclosure */}
        <PhilippinesDisclosure />
      </main>

      <PhilippinesFooter />
    </>
  )
}
