import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import AustraliaDisclosure from '@/components/australia/australia-disclosure'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apply for a Personal Loan – Australia | LoansAI',
  description: 'Complete your online personal loan application in Australia. Simple process, fast response, offers from ASIC-licensed lenders. No credit score impact.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apply for a Personal Loan in Australia',
    description: 'Online personal loan application. Licensed lenders, fast approval, zero hidden costs.',
    url: 'https://loansai.com/au/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/au/apply',
  },
}

export default function AustraliaApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for a Personal Loan Australia',
    description: 'Personal loan application form in Australia',
    url: 'https://loansai.com/au/apply',
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
          name: 'Australia',
          item: 'https://loansai.com/au'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apply',
          item: 'https://loansai.com/au/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <AustraliaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for a Personal Loan
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete the form below and receive personalized offers from ASIC-licensed lenders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>No credit score impact</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>Response in 24-48 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>100% free</span>
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
            <Card className="shadow-xl">
              <CardContent className="p-8 md:p-12">
                {/* Security Badge */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                    <span>🔒</span>
                    <span>Secure 256-bit encryption • ASIC regulated lenders</span>
                  </div>
                </div>

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <Link href="/au" className="hover:text-blue-600">
                    Australia
                  </Link>
                  <span>›</span>
                  <span className="text-gray-900 font-medium">Apply</span>
                </nav>

                {/* Application Form Placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 md:p-12 text-center">
                  <div className="mb-6">
                    <span className="text-6xl mb-4 inline-block">📋</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Loan Application Form
                  </h2>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    This is where the loan application form would be integrated. The form would collect 
                    necessary information from applicants including personal details, employment information, 
                    financial status, and desired loan amount.
                  </p>
                  <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-4 text-left">What You'll Need:</h3>
                    <ul className="space-y-3 text-left text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Personal Information:</strong> Name, date of birth, contact details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Employment Details:</strong> Employer name, income, employment type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Financial Information:</strong> Existing debts, monthly expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Loan Requirements:</strong> Desired amount, purpose, preferred term</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Identification:</strong> Driver's licence or passport details</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-semibold mb-2">Fast Processing</h3>
                    <p className="text-sm text-gray-600">
                      Most applications receive a response within 24-48 hours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔒</div>
                    <h3 className="font-semibold mb-2">Secure & Private</h3>
                    <p className="text-sm text-gray-600">
                      Your information is protected with bank-level encryption
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">✓</div>
                    <h3 className="font-semibold mb-2">No Obligation</h3>
                    <p className="text-sm text-gray-600">
                      Compare offers with no commitment or credit score impact
                    </p>
                  </div>
                </div>

                {/* Important Information */}
                <div className="mt-12 bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">Important Information</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You must be at least 18 years old and an Australian resident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Minimum income requirements may apply depending on the lender</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Completing this form does not guarantee loan approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Your information will only be shared with lenders you select</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>All lenders are licensed by ASIC and comply with responsible lending obligations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Complete Application</h3>
                <p className="text-gray-600 text-sm">
                  Fill out our secure online form with your personal and financial details
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Receive Offers</h3>
                <p className="text-gray-600 text-sm">
                  Get matched with suitable lenders and review personalized loan offers
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Get Funded</h3>
                <p className="text-gray-600 text-sm">
                  Choose your preferred offer and receive funds in your account
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Hardship Support */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span>ℹ️</span>
                  Need Financial Help?
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  If you're experiencing financial difficulty, free help is available. The National Debt 
                  Helpline provides free, independent financial counselling to Australians in financial difficulty.
                </p>
                <p className="text-sm">
                  <strong>National Debt Helpline:</strong>{' '}
                  <a href="tel:1800007007" className="text-blue-600 hover:underline">1800 007 007</a>
                  {' '}or visit{' '}
                  <a 
                    href="https://ndh.org.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ndh.org.au
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <AustraliaDisclosure />
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
