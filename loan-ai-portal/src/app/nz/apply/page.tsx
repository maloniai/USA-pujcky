import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import NZNavigation from '@/components/new-zealand/nz-navigation'
import NZFooter from '@/components/new-zealand/nz-footer'
import NZDisclosure from '@/components/new-zealand/nz-disclosure'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan – New Zealand | LoansAI',
  description: 'Complete your online application for a personal loan in New Zealand. Simple process, fast response, offers from FMA-licensed lenders. No credit score impact to check rates.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apply for Personal Loan in New Zealand',
    description: 'Online application for personal loans. FMA-licensed lenders, fast approval, zero hidden costs.',
    url: 'https://loansai.com/nz/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/nz/apply',
  },
}

export default function NZApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan New Zealand',
    description: 'Loan application form for personal loans in New Zealand',
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

      <NZNavigation />

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
                  <span>Secure & Encrypted - Your data is protected</span>
                </div>
              </div>

              {/* Application Instructions */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How it Works</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Complete Form</h3>
                      <p className="text-sm text-gray-600">Fill out your details below (5 minutes)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Matched</h3>
                      <p className="text-sm text-gray-600">Our AI finds suitable lenders</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Receive Offers</h3>
                      <p className="text-sm text-gray-600">Compare and choose the best option</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming Soon Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <span className="text-5xl mb-4 block">🚧</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  New Zealand Hub Coming Soon
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're currently preparing our New Zealand loan comparison service. 
                  Our team is partnering with FMA-licensed lenders to bring you the best loan offers.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 font-semibold">
                    In the meantime, you can:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Register Interest
                    </Link>
                    <Link 
                      href="/nz"
                      className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Back to NZ Hub
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                  Expected launch: Q1 2025
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">🏛️</div>
                    <p className="text-sm font-semibold text-gray-900">FMA Compliant</p>
                    <p className="text-xs text-gray-600">All partner lenders are licensed</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🔐</div>
                    <p className="text-sm font-semibold text-gray-900">Data Protected</p>
                    <p className="text-xs text-gray-600">Bank-level encryption</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🆓</div>
                    <p className="text-sm font-semibold text-gray-900">Always Free</p>
                    <p className="text-xs text-gray-600">No hidden fees or charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className="container mx-auto px-4 max-w-5xl pb-12">
          <NZDisclosure />
        </div>
      </main>

      <NZFooter />
    </>
  )
}
