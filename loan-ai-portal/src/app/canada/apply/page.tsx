import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan in Canada – Fast & Secure',
  description: 'Apply for personal loans in Canada. Connect with 100+ licensed Canadian lenders. Fast approval, competitive rates, service in English and French.',
  keywords: 'apply for loan Canada, Canadian personal loans, loan application, quick approval',
  alternates: {
    canonical: 'https://loan-platform.com/canada/apply',
    languages: {
      en: 'https://loan-platform.com/canada/apply',
      fr: 'https://loan-platform.com/fr/canada/apply',
    },
  },
}

export default function CanadaApplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Apply for Personal Loan in Canada',
            description: 'Secure online application for personal loans in Canada',
            url: 'https://loan-platform.com/canada/apply',
            mainEntity: {
              '@type': 'FinancialProduct',
              name: 'Canadian Personal Loan',
              description: 'Personal loans for Canadian residents',
              provider: {
                '@type': 'FinancialService',
                name: 'Loan AI Portal Canada',
              },
            },
          }),
        }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-b border-red-100">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <nav className="mb-4 text-sm flex justify-between items-center">
              <Link href="/canada" className="text-red-700 hover:text-red-900">
                ← Back to Canada Hub
              </Link>
              <Link href="/fr/canada/apply" className="text-red-700 hover:text-red-900 underline font-semibold">
                Français →
              </Link>
            </nav>
            <h1 className="text-4xl font-bold text-red-900 md:text-5xl">
              Apply for Your Personal Loan
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700">
              Complete your secure application and get matched with licensed Canadian lenders in minutes.
              Service available in English and French across all provinces.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-green-700 font-medium mb-8">
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> No impact on credit score
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> 2-3 minute application
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> Funds in 1-3 days
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> $1,000 - $50,000
            </span>
            <span className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-600">✓</span> All credit scores
            </span>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="mx-auto max-w-4xl px-4 pb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-900">
              Complete Your Loan Application
            </h2>
            
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>Application Progress</span>
                <span>Step 1 of 3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Iframe Placeholder - Replace with actual Canadian form script */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Canadian Loan Application Form
              </h3>
              <p className="text-gray-600 mb-4">
                The secure application form will be loaded here via iframe.
              </p>
              <div className="text-sm text-gray-500 space-y-2">
                <p>✓ Bank-level 256-bit SSL encryption</p>
                <p>✓ PIPEDA compliant data handling</p>
                <p>✓ Secure document upload</p>
              </div>
            </div>

            {/* Disclosure */}
            <div className="text-xs text-gray-600 text-center max-w-2xl mx-auto">
              <p className="mb-2">
                <strong>Privacy Notice:</strong> By submitting this form, you consent to Loan AI Portal and
                our lending partners contacting you via phone, email, or SMS regarding loan offers. You may
                opt out at any time. Your information is handled in accordance with Canadian privacy laws (PIPEDA).
              </p>
              <p>
                We are a lead generator and comparison service, not a lender. Submitting your information
                does not guarantee loan approval. All loans are subject to lender approval and provincial
                regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Why Apply Section */}
        <div className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              Why Apply Through Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Fast & Easy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Complete your application in 2-3 minutes. No lengthy paperwork or in-person visits
                    required. Get instant matching with lenders.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🍁</div>
                  <CardTitle>All Provinces Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Connect with licensed lenders in all Canadian provinces and territories. Full compliance
                    with provincial regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🇨🇦</div>
                  <CardTitle>Bilingual Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Available in English and French. Work with lenders who provide service in your preferred
                    language, especially important in Quebec.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Bank-level encryption protects your data. PIPEDA compliant. Your information is never
                    sold or shared without consent.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Compare offers from 100+ Canadian lenders. Find the best rates and terms for your credit
                    profile and province.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle>All Credit Welcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Work with lenders across the credit spectrum. Options available for excellent, good, fair,
                    and poor credit scores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              Loan Requirements & Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-900">Loan Amounts & Terms</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Loan amounts: $1,000 - $50,000 CAD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Loan terms: 6 months - 7 years
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> APR range: 6.99% - 46.96%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> Fixed monthly payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600">•</span> No prepayment penalties (most lenders)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Basic Requirements</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Age 18+ (19+ in some provinces)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Canadian citizen or permanent resident
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Valid Canadian bank account
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Steady source of income
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Valid government ID
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-900">
              Application FAQs
            </h2>
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Will checking my rate affect my credit score?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  No. The initial matching process uses only a soft credit inquiry, which does not impact
                  your credit score. A hard inquiry only occurs if you choose to proceed with a specific
                  lender's offer and complete their full application.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  How long does the application process take?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  The initial application takes 2-3 minutes to complete. You'll receive instant matching with
                  lenders. If you proceed with a lender, full approval can take anywhere from a few hours to
                  2-3 business days, depending on the lender and your documentation.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  What documents will I need to provide?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Typically, you'll need: valid Canadian government ID (driver's license or passport), proof
                  of income (pay stubs, tax returns, or bank statements), proof of address, and banking
                  information. Self-employed applicants may need additional business documentation.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Is my information secure?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Absolutely. We use bank-level 256-bit SSL encryption to protect your data. We are fully
                  compliant with PIPEDA (Personal Information Protection and Electronic Documents Act) and
                  provincial privacy laws. Your information is never sold to third parties without your
                  explicit consent.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-semibold cursor-pointer text-lg text-red-900">
                  Can I apply in French?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes! Our entire application process is available in French at /fr/canada/apply. This is
                  especially important for Quebec residents, where consumer protection law requires all loan
                  documentation to be provided in French. We work with lenders who provide full French-language
                  service.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Important Disclosure:</p>
              <p>
                Loan AI Portal is a lead generator and comparison service, not a lender. By submitting your
                application, you authorize us and our partner lenders to contact you regarding loan offers.
                Submitting an application does not guarantee loan approval. All loans are subject to lender
                approval and provincial regulations. We may receive compensation from lenders when you
                complete an application or are matched with a lender.
              </p>
              <p className="font-semibold text-gray-900 mt-4">Representative Example:</p>
              <p>
                A $10,000 personal loan with a 3-year term at 12% APR would result in 36 monthly payments of
                $332.14 CAD, for a total repayment amount of $11,957.04 (total interest: $1,957.04). Actual
                rates and terms vary by lender, credit profile, and province. APRs may range from 6.99% to
                46.96%.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer locale="en" />
    </>
  )
}
