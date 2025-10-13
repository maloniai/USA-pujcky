import type { Metadata } from 'next'
import Link from 'next/link'
import SANavigation from '@/components/sa/sa-navigation'
import SAFooter from '@/components/sa/sa-footer'
import SADisclosure from '@/components/sa/sa-disclosure'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Apply for a Personal Loan – South Africa | LoansAI',
  description: 'Apply for a personal loan in South Africa. Compare offers from 40+ NCR licensed lenders. Fast approval, competitive rates, secure application process.',
  keywords: 'apply personal loan, loan application south africa, online loan application, NCR licensed lenders',
  openGraph: {
    title: 'Apply for a Personal Loan in South Africa',
    description: 'Fast, secure loan application. Compare offers from 40+ licensed lenders.',
    url: 'https://loansai.com/za/apply',
    siteName: 'LoansAI South Africa',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/za/apply',
  },
}

export default function SAApplyPage() {
  return (
    <>
      <SANavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm text-gray-600">
            <Link href="/za" className="hover:text-blue-600">← Back to South Africa Loans</Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔒 Secure & NCR Compliant
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apply for Your Personal Loan
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Complete our secure application to compare offers from 40+ NCR licensed lenders. 
              Get pre-qualified in minutes without affecting your credit score.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              How the Application Process Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">📝</div>
                  <CardTitle>1. Complete Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fill out our secure online form with your personal, employment, and 
                    financial information. Takes just 5-10 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">🔍</div>
                  <CardTitle>2. Compare Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receive personalized loan offers from multiple NCR licensed lenders. 
                    Compare rates, terms, and monthly payments side-by-side.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>3. Get Funded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Choose the best offer and complete verification. Funds typically 
                    deposited within 1-3 business days after approval.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-center">
                  Start Your Application
                </CardTitle>
                <p className="text-center text-gray-600 mt-2">
                  All information is encrypted and secure
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Placeholder for actual application form */}
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Application Form Integration
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    This is where your secure loan application form will be integrated. 
                    The form will collect necessary information to match you with the best lenders.
                  </p>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    <p className="text-sm text-gray-700"><strong>Information needed:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Personal details (Name, ID, Contact info)</li>
                      <li>✓ Employment information</li>
                      <li>✓ Income and expenses</li>
                      <li>✓ Loan amount and purpose</li>
                      <li>✓ Bank account details</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Begin Application
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Application Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Basic Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>South African citizen or permanent resident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>18 years of age or older</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Valid South African ID or passport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Active South African bank account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Proof of regular income</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    Documents Needed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Copy of ID or passport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>3 months of payslips or bank statements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Proof of residence (utility bill/lease)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Bank account details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Employment letter (if applicable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <span>🔒</span>
                  Your Security is Our Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">🛡️</div>
                    <h3 className="font-semibold mb-2">Bank-Level Encryption</h3>
                    <p className="text-sm text-gray-700">
                      256-bit SSL encryption protects all your data
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🔐</div>
                    <h3 className="font-semibold mb-2">POPIA Compliant</h3>
                    <p className="text-sm text-gray-700">
                      Full compliance with data protection laws
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">✅</div>
                    <h3 className="font-semibold mb-2">NCR Regulated</h3>
                    <p className="text-sm text-gray-700">
                      Only work with licensed, verified lenders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Application FAQs
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Will applying affect my credit score?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Our initial application uses a soft credit inquiry which does not affect your credit score. 
                  Only when you proceed with a specific lender and accept their offer will a hard credit check 
                  be performed, which may have a minor impact on your score.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  How long does the application take?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  The online application typically takes 5-10 minutes to complete. You'll receive preliminary 
                  offers within 24-48 hours. Final approval and funding can happen within 1-3 business days 
                  once you've submitted all required documents.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Can I apply if I'm self-employed?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes! Self-employed individuals can apply. You'll need to provide additional documentation 
                  such as bank statements (usually 6 months), proof of business registration, and possibly 
                  tax returns. Many lenders in our network specialize in self-employed borrowers.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  What if I have bad credit?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We work with lenders who serve all credit profiles. While impaired credit may result in 
                  higher interest rates or lower loan amounts, you may still qualify. Some lenders focus 
                  more on current income and affordability than past credit history.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Is there a fee to apply?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  No, our comparison service is completely free. Individual lenders may charge origination 
                  fees or other costs as part of their loan terms, which will be clearly disclosed before 
                  you accept any offer. You're never obligated to proceed.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <SADisclosure />
        </section>
      </main>

      <SAFooter />
    </>
  )
}
