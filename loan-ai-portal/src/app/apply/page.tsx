import { applySEO, generatePageMetadata } from '@/lib/seo'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import StructuredData from '@/components/structured-data'
import ApplicationFormScript from '@/components/application-form-script'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import FAQSchema from '@/components/faq-schema'
import TransparencyBanner from '@/components/compliance/transparency-banner'

const applyFaqs = [
  {
    q: 'How long does the application process take?',
    a: 'Our AI-powered experience delivers a 2-minute pre-qualification and rate check with only a soft credit pull, so there is no impact on your score. If you choose an offer and complete the lender’s underwriting, final approval and funding can follow shortly after.',
  },
  {
    q: 'Will checking my rate affect my credit score?',
    a: 'Checking your rate triggers only a soft credit inquiry, so there is no impact on your credit score. A hard inquiry happens only if you accept an offer and finish the full application with a lender.',
  },
  {
    q: 'What can I use the loan for?',
    a: 'Personal loans through our platform can fund debt consolidation, home improvements, medical expenses, major purchases, weddings, vacations, or nearly any personal financial need.',
  },
  {
    q: 'What if I have bad credit?',
    a: 'We partner with lenders who work with every credit tier, including fair and poor credit. Our AI matching engine highlights lenders most likely to approve your application given your credit profile.',
  },
  {
    q: 'Are there any fees?',
    a: 'Our matching service is completely free. Individual lenders may charge origination or other fees, and those will always be disclosed before you accept any loan offer.',
  },
]
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata = generatePageMetadata(applySEO, '/apply')

export default function ApplyPage() {
  return (
    <>
      <StructuredData data={applySEO.structuredData} />
      <FAQSchema faqs={applyFaqs} />
      <BreadcrumbSchema config="apply" />
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Apply for Your Personal Loan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Check your rates in as little as 2 minutes with our AI-powered loan matching system. 
              Compare offers from top lenders through a soft credit pull that has no impact on your score.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600 font-medium mb-8">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> No impact to credit score
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 2-minute pre-qualification & rate check
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Funds as soon as tomorrow
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> $1,000 - $100,000
              </span>
            </div>
          </section>

          <TransparencyBanner />

          {/* Application Form Section */}
          <section className="application-form-section max-w-4xl mx-auto mb-12" aria-labelledby="application-form-heading">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 id="application-form-heading" className="text-2xl font-bold text-center mb-6 text-blue-800">
                Complete Your Loan Application
              </h2>
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Application Progress</span>
                  <span>Step 1 of 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <LeadGenDisclosure className="mb-4 text-center" />
              <ApplicationFormScript />
            </div>
          </section>

          {/* Why Apply With Us Section */}
          <section className="benefits mb-12" aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Why Apply With Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get a 2-minute pre-qualification and rate check with our advanced AI technology. 
                    No lengthy paperwork, no impact on your credit score.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle>Smart Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our AI analyzes your profile and matches you with lenders 
                    most likely to approve your application.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle>Bank-Level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your personal and financial information is protected with 
                    256-bit SSL encryption and advanced security measures.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access rates as low as 5.99% APR from our network of 
                    trusted lending partners.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">📞</div>
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get help whenever you need it with our round-the-clock 
                    customer support team.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle>No Hidden Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transparent pricing with no origination fees, prepayment 
                    penalties, or hidden charges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Details Section */}
          <section className="loan-details mb-12" aria-labelledby="loan-details-heading">
            <h2 id="loan-details-heading" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Loan Details & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Loan Amounts & Terms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Loan amounts: $1,000 - $100,000
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Loan terms: 2 - 7 years
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> APR range: 5.99% - 35.99%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Fixed monthly payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> No prepayment penalties
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Basic Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Age 18 or older
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> US citizen or permanent resident
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Valid bank account
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Steady source of income
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> All credit types welcome
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq mb-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="faq-heading">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {applyFaqs.map((faq) => (
                <details key={faq.q} className="bg-white p-6 rounded-lg shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-lg text-blue-900">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-gray-800">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Security & Trust Section */}
          <section className="security mb-12 bg-gray-50 p-8 rounded-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Your Security is Our Priority</h2>
              <p className="text-gray-600 mb-6">
                We use bank-level security measures to protect your personal and financial 
                information throughout the entire application process.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Secure Data Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Privacy Protected</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}