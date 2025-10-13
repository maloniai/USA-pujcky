import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import ZANavigation from '@/components/south-africa/za-navigation'
import ZAFooter from '@/components/south-africa/za-footer'
import ZADisclosure from '@/components/south-africa/za-disclosure'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan – South Africa | LoansAI',
  description: 'Complete your online application for a personal loan in South Africa. Simple process, fast response, offers from NCR-registered lenders. No credit score impact to check rates.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apply for Personal Loan in South Africa',
    description: 'Online application for personal loans. NCR-registered lenders, fast approval, zero hidden costs.',
    url: 'https://loansai.com/za/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/za/apply',
  },
}

export default function ZAApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan South Africa',
    description: 'Loan application form for personal loans in South Africa',
    url: 'https://loansai.com/za/apply',
    breadcrumb: {
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
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apply',
          item: 'https://loansai.com/za/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <ZANavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for a Personal Loan
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete the form below and receive personalized offers from NCR-registered lenders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>No credit score impact to check rates</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Response within 24-48 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>100% free service</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Maximum security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Container */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Security Badge */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  <span>🔒</span>
                  <span>Secure SSL Connection • Your data is protected</span>
                </div>
              </div>

              {/* Language Selection */}
              <div className="mb-8 text-center">
                <p className="text-sm text-gray-600 mb-3">Choose your preferred language:</p>
                <div className="flex justify-center gap-3">
                  <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">
                    English
                  </button>
                  <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">
                    Afrikaans
                  </button>
                  <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">
                    isiZulu
                  </button>
                </div>
              </div>

              {/* Affiliate Form Placeholder */}
              <div id="loan-application-form" className="min-h-[600px]">
                {/* 
                  INTEGRATION NOTE:
                  Replace this section with your affiliate network's form embed code.
                  Popular South African affiliate networks:
                  - LeadExpress
                  - WinAtEase
                  - AdvendorMedia
                  - TimeOne Performance
                */}
                
                <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Loan Application Form
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    This is where your affiliate network's loan application form will be embedded. 
                    The form should collect: personal details, employment information, income details, 
                    loan amount requested, and loan purpose.
                  </p>
                  <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto text-left">
                    <h4 className="font-bold text-gray-900 mb-4">Form should include:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Full name and South African ID number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Contact details (mobile, email, physical address)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Employment status and employer details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Monthly income and expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Loan amount requested (R1,000 - R250,000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Loan purpose and preferred term</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Bank account details for disbursement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Consent for credit checks and marketing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Developer Note:</strong> Replace this placeholder with your actual affiliate 
                      form embed code. Ensure compliance with NCR, NCA, and POPIA regulations.
                    </p>
                  </div>
                </div>

                <noscript>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                    <p className="text-yellow-800 font-semibold mb-2">
                      JavaScript is required for the application form
                    </p>
                    <p className="text-sm text-yellow-700">
                      Please enable JavaScript in your browser to continue with your loan application.
                    </p>
                  </div>
                </noscript>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why Apply Through LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Safe & Secure</h3>
                <p className="text-sm text-gray-600">
                  Your data is encrypted with bank-level SSL technology and protected in compliance with POPIA.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Fast & Simple</h3>
                <p className="text-sm text-gray-600">
                  Complete the form in 5 minutes and receive personalized offers quickly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-2">NCR-Registered Lenders</h3>
                <p className="text-sm text-gray-600">
                  We only work with lenders registered and supervised by the National Credit Regulator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                What Happens After You Apply?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instant Processing</h3>
                    <p className="text-gray-600 text-sm">
                      Your application is automatically sent to lenders in our network that match your profile.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Assessment & Offers</h3>
                    <p className="text-gray-600 text-sm">
                      Lenders evaluate your application and send you personalized offers within 24-48 hours. 
                      You'll be contacted directly by lenders.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Compare & Choose</h3>
                    <p className="text-gray-600 text-sm">
                      Review all offers carefully. Compare interest rates, fees, and terms. Choose the offer 
                      that best fits your needs and budget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Complete & Receive Funds</h3>
                    <p className="text-gray-600 text-sm">
                      Complete any additional verification with your chosen lender. Once approved, funds are 
                      deposited directly into your South African bank account within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Important Information Before Applying
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span>✓</span> Eligibility Requirements
                  </h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• South African citizen or permanent resident</li>
                    <li>• At least 18 years old</li>
                    <li>• Regular monthly income (employed or self-employed)</li>
                    <li>• Valid South African bank account</li>
                    <li>• Contactable by phone and email</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span>⚠️</span> Responsible Borrowing
                  </h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Only borrow what you can afford to repay</li>
                    <li>• Consider all fees and interest charges</li>
                    <li>• Late payments damage your credit score</li>
                    <li>• Read all terms and conditions carefully</li>
                    <li>• Seek financial advice if unsure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-6xl pb-12">
          <ZADisclosure />
        </div>

        {/* Back to Homepage */}
        <section className="container mx-auto px-4 pb-12 text-center">
          <p className="text-gray-600 mb-4">
            Not ready to apply yet? Explore more information first.
          </p>
          <Link href="/za">
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-semibold">
              ← Back to South Africa Hub
            </button>
          </Link>
        </section>
      </main>

      <ZAFooter />
    </>
  )
}
