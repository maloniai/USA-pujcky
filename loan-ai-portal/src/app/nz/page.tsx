import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans New Zealand 2025 – Compare Licensed Lenders',
  description: 'Compare personal loans from FMA-licensed lenders across New Zealand. Competitive rates, fast approval, full transparency nationwide.',
  keywords: 'personal loans new zealand, loans nz, FMA, compare loans, interest rates, quick loans, online loans new zealand',
  openGraph: {
    title: 'Personal Loans New Zealand – Compare Licensed Lenders',
    description: 'Personal loan comparison platform in New Zealand. FMA-licensed lenders, full transparency, nationwide coverage.',
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
    question: 'How do personal loans work in New Zealand?',
    answer: 'Personal loans in New Zealand are regulated by the FMA (Financial Markets Authority). You can apply for loans from banks, credit unions, and licensed finance companies. Lenders must comply with responsible lending requirements and assess your ability to repay without hardship.'
  },
  {
    question: 'How long does loan approval take?',
    answer: 'Approval times vary by lender. Online lenders may approve applications within 24-48 hours. Traditional bank loans typically take 3-7 business days. Once approved, funds are usually transferred directly to your bank account within 1-2 business days.'
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You typically need: valid New Zealand ID (driver\'s license or passport), proof of income (recent payslips or tax returns), bank statements (last 3 months), proof of address, and details of your expenses. Some lenders may require additional documentation.'
  },
  {
    question: 'Can I get a loan with bad credit?',
    answer: 'Yes, some lenders work with borrowers who have less-than-perfect credit histories. However, you may face higher interest rates and lower loan amounts. It\'s important to improve your credit score by making timely repayments and maintaining responsible financial behavior.'
  },
  {
    question: 'What are my rights as a borrower in New Zealand?',
    answer: 'Under the Credit Contracts and Consumer Finance Act, you have the right to: receive clear disclosure of all costs before signing, be assessed for affordability, make early repayments without excessive fees, complain to the Banking Ombudsman or FMA if issues arise, and have your personal data protected. All lenders must be registered with the Financial Service Providers Register.'
  }
]

export default function NewZealandHubPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI New Zealand - Personal Loan Comparison',
    description: 'Personal loan comparison platform in New Zealand with FMA-licensed lenders',
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
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇳🇿 Licensed by FMA (Financial Markets Authority)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in New Zealand
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare offers from licensed lenders nationwide. Full transparency, 
              competitive rates, fast online approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-600 text-blue-700 hover:bg-blue-50">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">16</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">5M</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Your Application</h3>
                <p className="text-gray-600">
                  Fill out the online form in 3-5 minutes. Basic information about you, 
                  your income, and the amount you need. 100% secure and confidential.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Offers</h3>
                <p className="text-gray-600">
                  Receive multiple personalized offers from licensed lenders. Compare 
                  rates, terms, and choose the one that best fits your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Your Funds</h3>
                <p className="text-gray-600">
                  Once approved, funds are deposited directly to your bank account. 
                  Most approvals within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Major Cities
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Find personal loan information in New Zealand's major cities.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Auckland', description: 'Largest city in New Zealand' },
                { name: 'Wellington', description: 'Capital of New Zealand' },
                { name: 'Christchurch', description: 'Largest city in South Island' },
                { name: 'Hamilton', description: 'Waikato region' },
                { name: 'Tauranga', description: 'Bay of Plenty' },
                { name: 'Dunedin', description: 'Otago region' },
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
                    We only work with FMA-licensed lenders, ensuring compliance with 
                    New Zealand consumer credit laws and your safety.
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
                    Many lenders provide fast approval.
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
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to find your ideal loan?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start now and compare offers from New Zealand's best lenders.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">LoansAI New Zealand</h3>
                <p className="text-gray-600 text-sm">
                  Personal loan comparison platform in New Zealand.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link></li>
                  <li><Link href="/disclaimer" className="text-gray-600 hover:text-blue-600">Disclaimer</Link></li>
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
