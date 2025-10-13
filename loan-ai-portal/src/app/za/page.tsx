import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ZANavigation from '@/components/south-africa/za-navigation'
import ZAFooter from '@/components/south-africa/za-footer'
import ZADisclosure from '@/components/south-africa/za-disclosure'
import ZAFAQ from '@/components/south-africa/za-faq'
import ZAStickyApplyButton from '@/components/south-africa/za-sticky-apply-button'
import { southAfricaRegions, getTopZACities } from '@/data/za-data'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans South Africa 2025 – Compare NCR-Registered Lenders',
  description: 'Compare personal loans from NCR-registered lenders across South Africa. Competitive rates, fast approval, complete transparency. Find the best loan offers in all provinces.',
  keywords: 'personal loans south africa, loans sa, ncr registered lenders, compare loans, loan rates, quick loans, online loans south africa',
  openGraph: {
    title: 'Personal Loans South Africa – Compare NCR-Registered Offers',
    description: 'South Africa\'s trusted loan comparison platform. NCR-registered lenders, complete transparency, support in English, Afrikaans, and Zulu.',
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
    question: 'What is the National Credit Act and how does it protect me?',
    answer: 'The National Credit Act (NCA) is South African legislation that regulates the credit industry to protect consumers from reckless lending and unfair practices. It requires all credit providers to be registered with the NCR, limits interest rates and fees, ensures transparent disclosure of costs, and gives consumers the right to a credit assessment before approval. The NCA also protects your personal information and provides mechanisms to resolve disputes with credit providers.'
  },
  {
    question: 'How quickly can I get funds after loan approval?',
    answer: 'Funding times vary by lender and application complexity. Online lenders can approve and disburse funds within 24-48 hours if all documentation is complete and verification checks pass. Traditional banks may take 3-7 business days. Providing complete and accurate documentation upfront speeds up the process. Once approved, funds are transferred directly to your South African bank account.'
  },
  {
    question: 'What documents do I need to apply for a personal loan?',
    answer: 'Typically you need: a valid South African ID document, proof of income (latest 3 months payslips, bank statements, or financial statements for self-employed), proof of residence (utility bill not older than 3 months), bank statements (usually 3-6 months), and employment verification. Lenders may request additional documents depending on the loan amount and your credit profile. Having all documents ready accelerates the application process.'
  },
  {
    question: 'Can I get a loan with bad credit or if I\'m blacklisted?',
    answer: 'Yes, some lenders specialize in loans for consumers with impaired credit records. However, expect higher interest rates and potentially lower loan amounts. Being "blacklisted" typically means you have adverse credit information recorded with credit bureaus. Under the NCA, negative credit information can be removed after specific periods (typically 1-5 years depending on the type). Focus on rebuilding your credit by paying existing debts on time and maintaining responsible financial behavior.'
  },
  {
    question: 'What are my rights as a borrower in South Africa?',
    answer: 'Under the NCA, you have the right to: receive clear information about all loan costs before signing, a full credit assessment to prevent reckless lending, a cooling-off period to cancel the agreement, early settlement without excessive penalties (limited to 3 months interest), protection of personal information under POPIA, transparent credit reports, dispute resolution mechanisms, and protection from harassment. All fees and interest rates must comply with NCR regulations, and lenders cannot charge excessive fees or interest.'
  }
]

const topCities = getTopZACities(12)

export default function SouthAfricaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI South Africa - Personal Loan Comparison',
    description: 'Compare personal loans from NCR-registered lenders across South Africa',
    url: 'https://loansai.com/za',
    areaServed: {
      '@type': 'Country',
      name: 'South Africa'
    },
    availableLanguage: ['en', 'af', 'zu'],
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

      <ZANavigation />
      <ZAStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇿🇦 Regulated by the National Credit Regulator (NCR)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in South Africa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from over 50 NCR-registered lenders. 
              Complete transparency, competitive rates, fast approval across all provinces.
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
                  Explore Provinces
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">NCR-Registered Lenders</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-gray-700">Provinces Covered</div>
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
                  Our AI analyzes your profile and matches you with suitable NCR-registered lenders. 
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
                    No collateral required. Amounts from R1,000 to R250,000. Terms from 6 to 60 months. 
                    Rates typically 10-28% p.a. depending on credit profile.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Apply Now →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Consolidation Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Combine multiple debts into one manageable payment. Lower your monthly obligations 
                    and simplify finances. Save on interest with better rates.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
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
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
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
                    Flexible terms for registered businesses and sole proprietors.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Business Options →
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
                    Finance your studies or your children's education. University fees, textbooks, 
                    and living expenses. Flexible repayment after graduation options available.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Education Finance →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Vehicle Finance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    New or used vehicles. Competitive rates with balloon payment options. 
                    Finance up to 100% of vehicle value subject to assessment.
                  </p>
                  <Link href="/za/apply" className="text-blue-600 hover:underline text-sm font-semibold">
                    Vehicle Finance →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* South African Regulations */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              South African Loan Regulations
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Your rights and protections under the National Credit Act
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
                      <span><strong>Interest Rate Caps:</strong> Maximum interest rates regulated by the NCR. Banks typically charge prime rate + margin. Unsecured lenders can charge higher rates but within NCA limits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Initiation Fees:</strong> Capped at R1,140 + 10% of loan amount above R1,000 (max R150 for loans under R10,000).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Service Fees:</strong> Maximum R60 per month regardless of loan size.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Credit Life Insurance:</strong> Optional but recommended. Covers death, disability, or retrenchment. Premiums regulated by NCR.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Affordability Assessment:</strong> Mandatory before approval to prevent reckless lending.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Early Settlement:</strong> You can pay off your loan early with maximum penalty of 3 months' interest.</span>
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
                      <p className="font-semibold text-gray-900 mb-2">National Credit Regulator (NCR)</p>
                      <p>
                        The NCR regulates the South African credit industry. All credit providers must be registered. 
                        The NCR ensures fair lending practices and consumer protection.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">National Credit Act (NCA)</p>
                      <p>
                        Governs all credit agreements in South Africa. Protects consumers from reckless lending, 
                        ensures transparent disclosure, and provides dispute resolution mechanisms.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Credit Bureaus</p>
                      <p>
                        Major bureaus: TransUnion, Experian, Compuscan, and XDS. They maintain credit records 
                        and provide credit scores. You're entitled to one free credit report per year.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">POPIA Compliance</p>
                      <p>
                        Protection of Personal Information Act ensures your data is secure and used only with 
                        your consent. Lenders must protect your privacy.
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-md">
                      <p className="font-semibold text-blue-900 mb-1">Official Resources:</p>
                      <a 
                        href="https://www.ncr.org.za" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline block"
                      >
                        Visit NCR Website →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Provinces Section */}
        <section id="provinces" className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Loans by Province
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Select your province to see local loan offers and regulations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {southAfricaRegions.map((region) => (
                <Link 
                  key={region.slug} 
                  href={`/za/regions/${region.slug}`}
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
                        <span>{(region.population / 1000000).toFixed(1)}M people</span>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        View {region.cities.length} Cities →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/za/regions">
                <Button variant="outline" size="lg">
                  View All Provinces
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
              Find loan options in major South African cities
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/za/cities/${city.slug}`}
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

            <div className="text-center mt-10">
              <Link href="/za/cities">
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
              Why Choose LoansAI South Africa?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Secure</h3>
                <p className="text-sm text-gray-600">
                  Your information is encrypted and protected. We comply with POPIA regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">NCR Registered Only</h3>
                <p className="text-sm text-gray-600">
                  We only work with NCR-registered lenders. Your protection is guaranteed.
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
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
                <p className="text-sm text-gray-600">
                  Available in English, Afrikaans, and isiZulu. Help in your language.
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
              Complete your application in 5 minutes and receive personalized offers from NCR-registered lenders.
            </p>
            <Link href="/za/apply">
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
        <ZAFAQ items={faqItems} />

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <ZADisclosure />
        </div>
      </main>

      <ZAFooter />
    </>
  )
}
