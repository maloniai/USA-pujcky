import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'
import NewZealandDisclosure from '@/components/newzealand/newzealand-disclosure'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan – New Zealand | LoansAI',
  description: 'Complete the online application for a personal loan in New Zealand. Simple process, fast response, offers from FMA-licensed lenders. No impact on credit score.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apply for Personal Loan in New Zealand',
    description: 'Online application for personal loans. Licensed lenders, fast approval, zero hidden costs.',
    url: 'https://loansai.com/nz/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/nz/apply',
  },
}

export default function NewZealandApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan New Zealand',
    description: 'Application form for personal loans in New Zealand',
    url: 'https://loansai.com/nz/apply',
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
          name: 'New Zealand',
          item: 'https://loansai.com/nz'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apply',
          item: 'https://loansai.com/nz/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply-page" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <NewZealandNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for a Personal Loan
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete the form below and receive personalized offers from FMA-licensed lenders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span>No impact on credit score</span>
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
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Security Badge */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  <span>🔒</span>
                  <span>Secure SSL Connection • Your data is protected</span>
                </div>
              </div>

              {/* Placeholder for application form */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-12 text-center">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Loan Application Form
                </h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Our secure loan application form will be integrated here. This form will collect your information 
                  and match you with FMA-licensed lenders who can provide competitive loan offers tailored to your needs.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>What you'll need:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 max-w-md mx-auto text-left">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Valid photo ID (driver license or passport)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Proof of income (payslips, bank statements)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Details of your expenses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Bank account details for deposit</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/nz">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why apply through LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Safe and secure</h3>
                <p className="text-sm text-gray-600">
                  Your data is encrypted with bank-level SSL technology and protected under Privacy Act 2020.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Fast and simple</h3>
                <p className="text-sm text-gray-600">
                  Complete the form in 2-3 minutes and receive personalized offers immediately.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed lenders</h3>
                <p className="text-sm text-gray-600">
                  We work only with lenders licensed and supervised by the FMA.
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
                What happens after you apply?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instant processing</h3>
                    <p className="text-gray-600 text-sm">
                      Your application is automatically sent to lenders in our network who match your profile.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Assessment and offers</h3>
                    <p className="text-gray-600 text-sm">
                      Lenders assess your application under CCCFA requirements and send you personalized offers 
                      within 24-48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white rounded-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Choose and receive funds</h3>
                    <p className="text-gray-600 text-sm">
                      Compare offers, choose the best one, complete final verification, and receive funds 
                      directly to your bank account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CCCFA Information */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span>ℹ️</span>
                Your rights under CCCFA
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Under the Credit Contracts and Consumer Finance Act 2003 (CCCFA), all lenders must:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Assess your ability to repay without suffering substantial hardship</li>
                  <li>Provide clear disclosure of all costs before you sign</li>
                  <li>Offer hardship assistance if your circumstances change</li>
                  <li>Follow responsible lending principles</li>
                  <li>Be registered with the Financial Service Providers Register</li>
                </ul>
                <p className="mt-3">
                  For more information, visit{' '}
                  <a 
                    href="https://www.fma.govt.nz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    FMA website
                  </a>{' '}
                  or{' '}
                  <a 
                    href="https://www.consumerprotection.govt.nz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Consumer Protection website
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <NewZealandDisclosure />
          </div>
        </section>
      </main>

      <NewZealandFooter />
    </>
  )
}
