import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Australia 2025 – Compare Licensed Lenders',
  description: 'Compare personal loans from ASIC-licensed lenders across Australia. Competitive rates, fast approval, full transparency. Find the best loan options nationwide.',
  keywords: 'personal loans australia, loans, ASIC, compare loans, interest rates, quick loans, online loans australia',
  openGraph: {
    title: 'Personal Loans Australia – Compare Licensed Lenders',
    description: 'Personal loan comparison platform in Australia. ASIC-licensed lenders, full transparency, nationwide coverage.',
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
    question: 'How do personal loans work in Australia?',
    answer: 'Personal loans in Australia are regulated by ASIC (Australian Securities and Investments Commission). You can apply for loans from banks, credit unions, and non-bank lenders. The process includes assessment of your credit history, income verification, and affordability checks to ensure responsible lending.'
  },
  {
    question: 'How long does loan approval take?',
    answer: 'Approval times vary by lender. Online lenders may approve applications within 24-48 hours. Traditional bank loans typically take 3-7 business days. Once approved, funds are usually transferred directly to your bank account within 1-3 business days.'
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You typically need: valid Australian ID (driver\'s license or passport), proof of income (recent payslips or tax returns), bank statements (last 3 months), proof of address, and details of your expenses. Some lenders may require additional documentation depending on the loan amount.'
  },
  {
    question: 'Can I get a loan with bad credit?',
    answer: 'Yes, some lenders work with borrowers who have less-than-perfect credit histories. However, you may face higher interest rates and lower loan amounts. It\'s important to improve your credit score by making timely repayments and maintaining responsible financial behavior.'
  },
  {
    question: 'What are my rights as a borrower in Australia?',
    answer: 'Under the National Consumer Credit Protection Act, you have the right to: receive clear information before signing, be assessed for loan suitability, make early repayments without excessive fees, complain to the Australian Financial Complaints Authority (AFCA), and have your personal data protected. All lenders must hold an Australian Credit License.'
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

      <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇦🇺 Licensed by ASIC (Australian Securities and Investments Commission)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in Australia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare offers from licensed lenders. Full transparency, 
              competitive rates, fast online approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-green-600 text-green-700 hover:bg-green-50">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">8</div>
                <div className="text-sm text-gray-600">States & Territories</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">26M</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Your Application</h3>
                <p className="text-gray-600">
                  Fill out the online form in 3-5 minutes. Basic information about you, 
                  your income, and the amount you need. 100% secure and confidential.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Offers</h3>
                <p className="text-gray-600">
                  Receive multiple personalized offers from licensed lenders. Compare 
                  rates, terms, and choose the one that best fits your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Your Funds</h3>
                <p className="text-gray-600">
                  Once approved, funds are deposited directly to your bank account. 
                  Some approvals same day, most within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Cities */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-4">
              Major Cities
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Find personal loan information in Australia's major cities.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Sydney', description: 'New South Wales capital' },
                { name: 'Melbourne', description: 'Victoria capital' },
                { name: 'Brisbane', description: 'Queensland capital' },
                { name: 'Perth', description: 'Western Australia capital' },
                { name: 'Adelaide', description: 'South Australia capital' },
                { name: 'Canberra', description: 'Australian Capital Territory' },
              ].map((city) => (
                <Card key={city.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    <Link href="/">
                      <Button variant="outline" className="w-full">
                        View Loans
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>🏛️ Licensed Lenders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We only work with lenders licensed by ASIC, ensuring your safety 
                    and compliance with Australian consumer credit laws.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>⚡ Fast Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Apply in minutes and receive personalized offers quickly. 
                    Some lenders approve same day.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📊 Transparent Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compare rates, terms, and conditions from multiple lenders. 
                    No hidden costs, all information clear and accessible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                    <span>{faq.question}</span>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to find your ideal loan?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start now and compare offers from Australia's best lenders.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="container mx-auto px-4 py-12 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">LoansAI Australia</h3>
                <p className="text-gray-600 text-sm">
                  Personal loan comparison platform in Australia.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-600 hover:text-green-600">Home</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-green-600">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-green-600">Privacy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-green-600">Terms</Link></li>
                  <li><Link href="/disclaimer" className="text-gray-600 hover:text-green-600">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 pt-8 border-t">
              <p>© 2025 LoansAI. All rights reserved.</p>
              <p className="mt-2">
                Loans are subject to approval. Rates and terms vary by lender.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
