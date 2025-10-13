import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import CanadaDisclosure from '@/components/canada/canada-disclosure'
import CanadaFAQ from '@/components/canada/canada-faq'
import StickyApplyButton from '@/components/canada/sticky-apply-button'
import { caProvinces } from '@/data/ca-provinces'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Canada 2025 – Compare Licensed Lenders Across All Provinces',
  description: 'Compare personal loans from licensed Canadian lenders across all provinces and territories. Competitive rates, fast approval, complete transparency. Find the best loan offers in your area.',
  keywords: 'personal loans canada, loans, licensed lenders, compare loans, interest rates, fast loans, online loans canada, APR',
  openGraph: {
    title: 'Personal Loans Canada – Compare Licensed Lender Offers',
    description: 'Canadian loan comparison platform. Licensed lenders, complete transparency, bilingual support in English and French.',
    url: 'https://loansai.com/ca',
    siteName: 'LoansAI Canada',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ca',
    languages: {
      'en-CA': 'https://loansai.com/ca',
      'fr-CA': 'https://loansai.com/ca/fr',
    },
  },
}

const faqItems = [
  {
    question: 'What is APR and how is it calculated in Canada?',
    answer: 'APR (Annual Percentage Rate) represents the total cost of borrowing expressed as a yearly percentage. It includes the interest rate, fees, and all other charges related to the loan. In Canada, the maximum legal interest rate is 60% APR as per the Criminal Code. APR helps you compare offers from different lenders based on the true total cost.'
  },
  {
    question: 'How quickly can I receive funds after approval?',
    answer: 'The timeline depends on the lender and verification complexity. Online loans can be approved within 24-48 hours with funds deposited directly to your bank account. Traditional bank loans may take 3-7 business days. Complete and accurate documentation speeds up the process significantly.'
  },
  {
    question: 'What documents do I need to apply for a personal loan in Canada?',
    answer: 'Generally, you will need: valid government-issued ID (driver\'s license or passport), proof of income (pay stubs, tax returns for self-employed), bank statements (last 3-6 months), proof of address, and Social Insurance Number. Some lenders may request additional documents depending on the loan amount and your province.'
  },
  {
    question: 'Can I get a loan with bad credit in Canada?',
    answer: 'Yes, some lenders specialize in loans for people with less-than-perfect credit, though rates will be higher and amounts may be lower. It\'s important to improve your credit score by paying existing debts on time and maintaining responsible financial behavior. Some lenders also consider current income and ability to repay, not just credit history.'
  },
  {
    question: 'What are my rights as a borrower in Canada?',
    answer: 'You have the right to: clear and complete information before signing, a cooling-off period (varies by province, typically 2-14 days) without penalties, early repayment (some lenders may charge a small fee), protection against abusive practices, and confidentiality of personal data under privacy laws. All loans must comply with federal and provincial regulations including the 60% APR criminal interest rate limit.'
  }
]

export default function CanadaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Canada - Personal Loan Comparison',
    description: 'Compare personal loans from licensed lenders across Canada',
    url: 'https://loansai.com/ca',
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    availableLanguage: ['en', 'fr'],
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
        name: 'Canada',
        item: 'https://loansai.com/ca'
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

      <CanadaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇦 Licensed and Regulated by Provincial & Federal Authorities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in Canada
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare loan offers from 50+ licensed lenders across all provinces and territories. 
              Complete transparency, competitive rates, fast approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/ca/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/ca/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Explore Provinces
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
                <div className="text-3xl font-bold text-blue-600 mb-1">13</div>
                <div className="text-sm text-gray-600">Provinces & Territories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">39M</div>
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
                  Receive personalized offers from multiple lenders. Compare rates, terms, and choose the best option.
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

        {/* Provinces Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explore Loans by Province & Territory
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Province-specific information about loans, regulations, and lenders for each Canadian province and territory.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caProvinces.slice(0, 8).map((province) => (
                <Link key={province.slug} href={`/ca/regions/${province.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition">
                        {province.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span>{province.population} population</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Up to {province.maxLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span>Rate: {province.avgRate}</span>
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
              <Link href="/ca/regions">
                <Button variant="outline" size="lg">
                  View all provinces & territories
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
                Key Regulations in Canada
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
                      <span>Maximum legal interest rate: 60% APR (Criminal Code)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Cooling-off periods vary by province (2-14 days)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Early repayment allowed (small fees may apply)</span>
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
                    Licensing and Oversight
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Federal oversight by FCAC (Financial Consumer Agency)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Provincial regulators enforce local lending laws</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Mandatory licensing for all lenders</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Privacy protection under federal and provincial laws</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.canada.ca/en/financial-consumer-agency.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit FCAC for more information ↗
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
              Complete your application in 2 minutes and receive personalized offers from licensed lenders.
            </p>
            <Link href="/ca/apply">
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
              Popular Cities for Loans
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 
                'Winnipeg', 'Quebec City', 'Hamilton', 'Mississauga', 'Brampton', 'Surrey'].map((city) => (
                <Link
                  key={city}
                  href={`/ca/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/ca/cities">
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
            <CanadaFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <CanadaDisclosure />
          </div>
        </section>
      </main>

      <CanadaFooter />
    </>
  )
}
