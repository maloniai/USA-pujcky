import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan Philippines – Fast & Secure | LoansAI',
  description: 'Apply for a personal loan in the Philippines in 2 minutes. Compare offers from BSP-licensed lenders. Free, fast, secure.',
  keywords: 'apply loan philippines, personal loan application, online loan philippines, BSP licensed lenders',
  alternates: {
    canonical: 'https://loansai.com/ph/apply',
  },
}

export default function PhilippinesApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan - Philippines',
    description: 'Loan application page for Philippines residents',
    url: 'https://loansai.com/ph/apply'
  }

  return (
    <>
      <Script id="schema-apply" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <PhilippinesNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Philippines', url: '/ph' },
                { name: 'Apply', url: '/ph/apply' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✓ 100% Secure & Confidential
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apply for a Personal Loan in the Philippines
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Complete your application in just 2 minutes. Compare offers from 30+ BSP-licensed lenders. 
              No obligation, no hidden fees, 100% free.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">1️⃣</div>
                  <CardTitle>Fill the Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Provide basic information about yourself and your loan needs. Takes only 2-3 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">2️⃣</div>
                  <CardTitle>Get Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receive personalized loan offers from multiple BSP-licensed lenders. Compare rates and terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">3️⃣</div>
                  <CardTitle>Receive Funds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Choose the best offer and complete the process. Funds deposited directly to your account.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Application Form Card */}
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl">Start Your Loan Application</CardTitle>
                <p className="text-gray-600 mt-2">
                  All information is encrypted and secure. We respect your privacy and will never share 
                  your data without your consent.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Information Box */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                    <h3 className="font-bold text-blue-900 mb-3">What You'll Need:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>Valid Philippine Government ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>Proof of income (employment certificate, payslip, or business documents)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>Bank account for fund transfer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span>Contact information (mobile number and email)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Application Button */}
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-6">
                      Click below to start your secure loan application. You'll be connected with our 
                      trusted lending partners.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6"
                    >
                      <span className="flex items-center gap-2">
                        <span>🔒</span>
                        <span>Start Secure Application</span>
                      </span>
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="text-xs text-gray-600 font-medium">256-bit Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">✓</div>
                      <div className="text-xs text-gray-600 font-medium">BSP Licensed Only</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇵🇭</div>
                      <div className="text-xs text-gray-600 font-medium">Data Privacy Act</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-xs text-gray-600 font-medium">Fast Approval</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Common Application Questions
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is there a fee to apply?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      No, our comparison service is completely free. You only pay fees to the lender 
                      you choose, which are disclosed clearly before you commit.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Will this affect my credit score?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      The initial comparison and quote requests typically use soft credit checks which 
                      don't affect your credit score. Only when you proceed with a specific lender will 
                      they perform a full credit check.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long until I receive the money?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Once approved, most lenders transfer funds within 24-48 hours directly to your bank 
                      account. Traditional banks may take 3-7 business days.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhilippinesFooter />
    </>
  )
}
