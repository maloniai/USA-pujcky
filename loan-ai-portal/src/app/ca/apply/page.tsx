import type { Metadata } from 'next'
import Link from 'next/link'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'
import CanadaDisclosure from '@/components/canada/canada-disclosure'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan in Canada - Fast & Secure Application',
  description: 'Apply for a personal loan from licensed Canadian lenders. Secure online application, instant pre-qualification, competitive rates. Get approved in 24-48 hours.',
  keywords: 'apply loan canada, personal loan application, fast approval, online loan application canada, licensed lenders',
  openGraph: {
    title: 'Apply for Personal Loan in Canada',
    description: 'Fast, secure loan application. Compare offers from 50+ licensed lenders across Canada.',
    url: 'https://loansai.com/ca/apply',
    siteName: 'LoansAI Canada',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/ca/apply',
  },
}

export default function CanadaApplyPage() {
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Apply',
        item: 'https://loansai.com/ca/apply'
      }
    ]
  }

  const applicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LoansAI Canada Loan Application',
    description: 'Online personal loan application for Canadian residents',
    url: 'https://loansai.com/ca/apply',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      category: 'Personal Loans',
      areaServed: {
        '@type': 'Country',
        name: 'Canada'
      }
    }
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-application" type="application/ld+json">
        {JSON.stringify(applicationSchema)}
      </Script>

      <CanadaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">Apply</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔒 Secure & Confidential Application
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Apply for a Personal Loan in Canada
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete your secure application in 2-3 minutes. Compare personalized offers from 50+ licensed Canadian lenders.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-sm font-semibold text-gray-900">256-bit SSL</div>
                <div className="text-xs text-gray-600">Bank-level security</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-gray-900">2-3 Minutes</div>
                <div className="text-xs text-gray-600">Quick application</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-3xl mb-2">✓</div>
                <div className="text-sm font-semibold text-gray-900">No Obligation</div>
                <div className="text-xs text-gray-600">Free to apply</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-sm font-semibold text-gray-900">50+ Lenders</div>
                <div className="text-xs text-gray-600">Licensed providers</div>
              </div>
            </div>

            {/* Application Form iframe */}
            <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
              <div className="relative w-full" style={{ minHeight: '800px' }}>
                <iframe
                  src="https://apply.loansai.com/ca/application"
                  title="Canada Loan Application Form"
                  className="w-full border-0 rounded-lg"
                  style={{ minHeight: '800px', height: '100%' }}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                />
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                How the Application Process Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Complete Application</h3>
                  <p className="text-sm text-gray-600">
                    Fill out the secure form with your basic information, employment details, and desired loan amount.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Receive Offers</h3>
                  <p className="text-sm text-gray-600">
                    Within 24-48 hours, receive personalized loan offers from licensed lenders. Compare rates and terms.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Get Funded</h3>
                  <p className="text-sm text-gray-600">
                    Choose your preferred offer, complete final verification, and receive funds directly in your bank account.
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Need */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📄</span>
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Full legal name and date of birth</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Social Insurance Number (SIN)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Current residential address</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Valid government-issued ID</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>💼</span>
                    Financial Information
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Employment status and income</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Bank account information</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Monthly expenses and debts</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Desired loan amount and purpose</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disclosure */}
            <div className="mb-8">
              <CanadaDisclosure />
            </div>

            {/* Security & Privacy */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🔐</span>
                Your Security & Privacy
              </h2>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <strong>Data Protection:</strong> Your personal information is encrypted using bank-level 256-bit SSL security and stored on secure Canadian servers.
                </p>
                <p>
                  <strong>Privacy Compliance:</strong> We comply with Canadian privacy laws including PIPEDA (Personal Information Protection and Electronic Documents Act).
                </p>
                <p>
                  <strong>No Hidden Fees:</strong> Applying is completely free. You are under no obligation to accept any loan offer.
                </p>
                <p>
                  <strong>Credit Impact:</strong> Initial applications typically use soft credit checks that don't affect your credit score. Hard inquiries only occur when you choose to proceed with a specific lender.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Have questions about your application?
              </p>
              <Link href="/ca" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Canada Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
