import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Personal Loans Philippines 2025 – Compare BSP-Licensed Lenders',
  description: 'Compare personal loans from BSP-licensed lenders across the Philippines. Competitive rates, fast approval, full transparency nationwide.',
  keywords: 'personal loans philippines, loans, BSP, compare loans, interest rates, quick loans, online loans philippines',
  openGraph: {
    title: 'Personal Loans Philippines – Compare Licensed Lenders',
    description: 'Personal loan comparison platform in the Philippines. BSP-licensed lenders, full transparency, nationwide coverage.',
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
    question: 'How do personal loans work in the Philippines?',
    answer: 'Personal loans in the Philippines are regulated by the BSP (Bangko Sentral ng Pilipinas). You can apply for loans from banks, financing companies, and licensed lending institutions. Lenders must comply with BSP regulations including interest rate caps and fair lending practices.'
  },
  {
    question: 'How long does loan approval take?',
    answer: 'Approval times vary by lender. Online lenders may approve applications within 24-48 hours. Traditional bank loans typically take 3-7 business days. Once approved, funds are usually transferred directly to your bank account within 1-3 business days.'
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You typically need: valid Philippine ID (driver\'s license, passport, or government-issued ID), proof of income (recent payslips, ITR, or certificate of employment), bank statements (last 3 months), proof of billing address, and TIN number. Some lenders may require additional documentation.'
  },
  {
    question: 'Can I get a loan with bad credit?',
    answer: 'Yes, some lenders work with borrowers who have less-than-perfect credit histories or limited credit records. However, you may face higher interest rates and lower loan amounts. Building a good credit history through timely repayments will improve your options over time.'
  },
  {
    question: 'What are my rights as a borrower in the Philippines?',
    answer: 'Under Philippine lending laws, you have the right to: receive clear disclosure of all loan terms and costs, be protected from usurious interest rates (BSP regulations), make early repayments, file complaints with BSP if issues arise, and have your personal data protected under the Data Privacy Act of 2012. All lenders must be registered with the SEC and comply with BSP regulations.'
  }
]

export default function PhilippinesHubPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Philippines - Personal Loan Comparison',
    description: 'Personal loan comparison platform in the Philippines with BSP-licensed lenders',
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
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <main className="min-h-screen bg-gradient-to-b from-red-50 via-white to-blue-50">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇵🇭 Licensed by BSP (Bangko Sentral ng Pilipinas)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Personal Loans in the Philippines
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare offers from BSP-licensed lenders nationwide. Full transparency, 
              competitive rates, fast online approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-red-600 text-red-700 hover:bg-red-50">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Licensed Lenders</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-1">17</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Major Cities</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-1">113M</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-red-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Your Application</h3>
                <p className="text-gray-600">
                  Fill out the online form in 3-5 minutes. Basic information about you, 
                  your income, and the amount you need. 100% secure and confidential.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Offers</h3>
                <p className="text-gray-600">
                  Receive multiple personalized offers from licensed lenders. Compare 
                  rates, terms, and choose the one that best fits your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
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
            <h2 className="text-3xl font-bold text-center text-red-900 mb-4">
              Major Cities
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Find personal loan information in the Philippines' major cities.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Manila', description: 'Capital city of the Philippines' },
                { name: 'Quezon City', description: 'Most populous city' },
                { name: 'Cebu City', description: 'Queen City of the South' },
                { name: 'Davao City', description: 'Largest city in Mindanao' },
                { name: 'Makati', description: 'Financial center' },
                { name: 'Taguig', description: 'Bonifacio Global City' },
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
                    We only work with BSP-licensed lenders, ensuring compliance with 
                    Philippine lending laws and your safety.
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
                    <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-red-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to find your ideal loan?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start now and compare offers from the Philippines' best lenders.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">LoansAI Philippines</h3>
                <p className="text-gray-600 text-sm">
                  Personal loan comparison platform in the Philippines.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-600 hover:text-red-600">Home</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-red-600">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-red-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-red-600">Privacy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-red-600">Terms</Link></li>
                  <li><Link href="/disclaimer" className="text-gray-600 hover:text-red-600">Disclaimer</Link></li>
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
