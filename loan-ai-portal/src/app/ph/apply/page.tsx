import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/ph-navigation'
import PhilippinesFooter from '@/components/philippines/ph-footer'
import PhilippinesDisclosure from '@/components/philippines/ph-disclosure'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan – Compare Best Rates | LoansAI Philippines',
  description: 'Apply for personal loans quickly and securely. Compare rates from 30+ BSP-licensed lending institutions. Fast approval, complete transparency.',
  keywords: 'apply loan, personal loan online, quick loan, compare rates, philippines loans',
  openGraph: {
    title: 'Apply for Personal Loan – Compare Best Rates',
    description: 'Apply securely with BSP-licensed institutions. Fast approval, competitive rates.',
    url: 'https://loansai.com/ph/apply',
    siteName: 'LoansAI Philippines',
    locale: 'en_PH',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ph/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PhilippinesApplyPage() {
  // Schema.org structured data for application page
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan Philippines',
    description: 'Submit loan application and compare offers from licensed lending institutions',
    url: 'https://loansai.com/ph/apply',
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'LoansAI Philippines',
      url: 'https://loansai.com/ph'
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Apply',
        item: 'https://loansai.com/ph/apply'
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-webpage" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Affiliate Script from doaff.net */}
      <Script 
        id="affiliate-script"
        src="https://www.doaff.net/publisherScript.js?c=jjo"
        strategy="lazyOnload"
      />

      <PhilippinesNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✅ Secure & Free
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Apply for Personal Loan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compare offers from 30+ BSP-licensed lending institutions. 
              Complete the form below to get matched with the best loan options.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold text-gray-900 mb-1">100% Secure</div>
                <div className="text-sm text-gray-600">Data Privacy Act compliant</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-gray-900 mb-1">Fast Approval</div>
                <div className="text-sm text-gray-600">Get matched in 60 seconds</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-2">💯</div>
                <div className="font-semibold text-gray-900 mb-1">Free Service</div>
                <div className="text-sm text-gray-600">No fees, no obligations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl">Loan Application Form</CardTitle>
                <p className="text-blue-100 text-sm mt-2">
                  Fill out the form to get matched with licensed lenders
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span>ℹ️</span>
                    <span>How It Works</span>
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    <li>Complete the application form with your information</li>
                    <li>Get matched with up to 3 licensed lenders</li>
                    <li>Review and compare loan offers</li>
                    <li>Choose the best offer and complete your application</li>
                    <li>Receive funds directly to your bank account</li>
                  </ol>
                </div>

                {/* Affiliate Application Form Container */}
                <div id="affiliate-form-container" className="min-h-[600px]">
                  <div className="text-center py-12">
                    <div className="animate-pulse">
                      <div className="text-4xl mb-4">⏳</div>
                      <p className="text-gray-600">Loading application form...</p>
                      <p className="text-sm text-gray-500 mt-2">
                        This will take just a moment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl mb-2">🏛️</div>
                      <div className="font-semibold text-gray-900 text-sm">BSP Licensed</div>
                      <div className="text-xs text-gray-600">All partner lenders</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🔐</div>
                      <div className="font-semibold text-gray-900 text-sm">SSL Encrypted</div>
                      <div className="text-xs text-gray-600">Your data is safe</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">⭐</div>
                      <div className="font-semibold text-gray-900 text-sm">Trusted Platform</div>
                      <div className="text-xs text-gray-600">10,000+ happy customers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Information Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What You Need to Apply
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📄</span>
                    <span>Required Documents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Valid government-issued ID (passport, driver's license, UMID)</li>
                    <li>• Proof of income (payslips, ITR, bank statements)</li>
                    <li>• Proof of billing address (utility bill)</li>
                    <li>• Certificate of employment (for employees)</li>
                    <li>• DTI/SEC registration (for self-employed)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>✅</span>
                    <span>Eligibility Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Filipino citizen or permanent resident</li>
                    <li>• Age 21-65 years old</li>
                    <li>• Regular source of income</li>
                    <li>• Active Philippine bank account</li>
                    <li>• Good to fair credit standing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Application FAQs
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900 text-lg">
                  How long does it take to get approved?
                </summary>
                <p className="mt-4 text-gray-600 text-sm">
                  Initial matching takes 60 seconds. Full approval from lenders typically takes 24-48 
                  hours for digital lenders, and 3-7 business days for traditional banks.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900 text-lg">
                  Will applying affect my credit score?
                </summary>
                <p className="mt-4 text-gray-600 text-sm">
                  Our initial matching is a soft inquiry and does not affect your credit score. Only 
                  when you proceed with a specific lender will they perform a hard inquiry.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900 text-lg">
                  Is there any cost to apply?
                </summary>
                <p className="mt-4 text-gray-600 text-sm">
                  No, our service is completely free for borrowers. We earn commissions from lenders 
                  only when you successfully complete a loan, but this never affects your rates or terms.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900 text-lg">
                  Can I apply if I have bad credit?
                </summary>
                <p className="mt-4 text-gray-600 text-sm">
                  Yes, we work with lenders who consider various credit profiles. While having good 
                  credit helps you get better rates, some of our partner lenders specialize in working 
                  with borrowers who have challenged credit histories.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <PhilippinesDisclosure />
      </main>

      <PhilippinesFooter />
    </>
  )
}
