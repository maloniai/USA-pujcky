import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canada Personal Loans - Coming Soon | Loan AI Portal',
  description: 'Personal loans, mortgages, and debt consolidation for Canadian residents. Launching Q1 2025 with English and French support. Compare rates from licensed Canadian lenders.',
  openGraph: {
    title: 'Canada Personal Loans - Coming Soon | Loan AI Portal',
    description: 'Personal loans and debt consolidation for Canadian residents. Launching Q1 2025.',
    url: 'https://loan-platform.com/ca',
    siteName: 'Loan AI Portal',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function CanadaComingSoonPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 text-6xl" aria-hidden="true">🇨🇦</div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Canada Loan Hub - Coming Soon
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We're bringing our AI-powered personal loan comparison platform to Canada in Q1 2025.
              Compare rates from licensed Canadian lenders with full bilingual support in English and French.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-blue-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center justify-center gap-2">
                    <span aria-hidden="true">🗓️</span>
                    Launch Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold text-lg">Q1 2025</p>
                  <p className="text-sm text-gray-600 mt-2">January - March 2025</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center justify-center gap-2">
                    <span aria-hidden="true">🌐</span>
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold text-lg">English & French</p>
                  <p className="text-sm text-gray-600 mt-2">Full bilingual support</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 flex items-center justify-center gap-2">
                    <span aria-hidden="true">📍</span>
                    Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold text-lg">All Provinces</p>
                  <p className="text-sm text-gray-600 mt-2">10 provinces & 3 territories</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                What to Expect
              </h2>
              <ul className="text-left space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1" aria-hidden="true">✅</span>
                  <div>
                    <strong className="text-blue-900">AI-Powered Matching:</strong>
                    <span className="text-gray-700"> Compare rates from 50+ licensed Canadian lenders</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1" aria-hidden="true">✅</span>
                  <div>
                    <strong className="text-blue-900">Provincial Compliance:</strong>
                    <span className="text-gray-700"> Full compliance with FCAC and provincial regulations</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1" aria-hidden="true">✅</span>
                  <div>
                    <strong className="text-blue-900">Bilingual Support:</strong>
                    <span className="text-gray-700"> Complete content in English and French (français)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1" aria-hidden="true">✅</span>
                  <div>
                    <strong className="text-blue-900">Local Lender Networks:</strong>
                    <span className="text-gray-700"> Access to major banks and alternative lenders</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1" aria-hidden="true">✅</span>
                  <div>
                    <strong className="text-blue-900">Province-Specific Guides:</strong>
                    <span className="text-gray-700"> Detailed information for all provinces and territories</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Interested in Early Access?
              </h2>
              <p className="mb-6 text-blue-100">
                Sign up to be notified when we launch in Canada. Early registrants will get exclusive
                access to special introductory rates and priority support.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Early Access
              </Link>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Explore Our Other Markets
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/us"
                  className="inline-flex items-center gap-2 bg-white border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <span aria-hidden="true">🇺🇸</span>
                  United States
                </Link>
                <Link
                  href="/cz"
                  className="inline-flex items-center gap-2 bg-white border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <span aria-hidden="true">🇨🇿</span>
                  Czech Republic
                </Link>
                <Link
                  href="/global"
                  className="inline-flex items-center gap-2 bg-white border-2 border-blue-300 px-6 py-3 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <span aria-hidden="true">🌍</span>
                  All Markets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
