import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AustraliaNavigation from '@/components/australia/australia-navigation'
import AustraliaFooter from '@/components/australia/australia-footer'
import AustraliaDisclosure from '@/components/australia/australia-disclosure'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan - Australia | LoansAI',
  description: 'Apply for a personal loan in Australia. Compare offers from ASIC-licensed lenders. Fast approval, secure application.',
  alternates: {
    canonical: 'https://loansai.com/au/apply',
  },
}

export default function AustraliaApplyPage() {
  return (
    <>
      <AustraliaNavigation />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Apply for Your Personal Loan
              </h1>
              <p className="text-xl opacity-90">
                Complete your application in just 2 minutes. Get matched with ASIC-licensed lenders offering the best rates for your profile.
              </p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                How the Application Process Works
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Complete the Application Form</h3>
                    <p className="text-gray-600">
                      Provide basic information about yourself, your employment, income, and the loan amount you need. This takes just 2-3 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Receive Personalized Offers</h3>
                    <p className="text-gray-600">
                      Our platform matches you with ASIC-licensed lenders. You'll receive multiple loan offers with clear terms, interest rates, and comparison rates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Your Preferred Lender</h3>
                    <p className="text-gray-600">
                      Compare offers side-by-side. Each lender will conduct a responsible lending assessment as required by Australian law.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Receive Your Funds</h3>
                    <p className="text-gray-600">
                      Once approved and all documentation is verified, funds are typically deposited into your Australian bank account within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">✅ What You'll Need to Apply</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Valid Australian ID (driver's license or passport)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Proof of income (recent payslips or bank statements)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Your employment details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Australian bank account details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Your residential address (utility bill may be required)</span>
                  </li>
                </ul>
              </div>

              {/* Application Form Placeholder */}
              <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-300">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Secure Application Form
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Our application form will be integrated here. Your data is protected with bank-level 256-bit SSL encryption.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Application
                  </Button>
                  <Link href="/au">
                    <Button size="lg" variant="outline">
                      Learn More First
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Disclosure */}
            <AustraliaDisclosure />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Why Apply Through LoansAI?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-bold text-gray-900 mb-2">Secure & Private</h3>
                  <p className="text-sm text-gray-600">
                    Bank-level encryption and full Privacy Act compliance. Your data is protected.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-gray-900 mb-2">Fast Process</h3>
                  <p className="text-sm text-gray-600">
                    2-minute application with responses from lenders within hours, not days.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-bold text-gray-900 mb-2">ASIC Licensed</h3>
                  <p className="text-sm text-gray-600">
                    All lenders hold valid Australian Credit Licences and follow responsible lending practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Common Questions About Applying
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Will applying affect my credit score?
                </summary>
                <p className="mt-3 text-gray-700">
                  Initially, we conduct a soft inquiry that does not affect your credit score. If you proceed with a specific lender, 
                  they will conduct a hard inquiry as part of their responsible lending assessment, which may have a minor temporary impact on your score.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  How long does approval take?
                </summary>
                <p className="mt-3 text-gray-700">
                  Most lenders provide initial decisions within hours. Full approval and funding typically occur within 24-48 hours once all 
                  documentation is verified. Some lenders offer same-day funding for simple applications.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  What if I'm self-employed?
                </summary>
                <p className="mt-3 text-gray-700">
                  Self-employed applicants are welcome. You'll need to provide additional documentation such as tax returns, BAS statements, 
                  or business bank statements to verify your income. Many lenders in our network specialize in self-employed lending.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Can I apply with bad credit?
                </summary>
                <p className="mt-3 text-gray-700">
                  Yes, we work with lenders who consider applications from people with less-than-perfect credit. While rates may be higher, 
                  many Australians with bad credit can still access personal loans. Each lender must still conduct responsible lending assessments.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <AustraliaFooter />
    </>
  )
}
