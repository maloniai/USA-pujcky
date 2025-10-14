import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Disclosures – LoansAI Philippines',
  description: 'Important disclosures about LoansAI Philippines loan comparison service and affiliate relationships.',
  alternates: {
    canonical: 'https://loansai.com/ph/disclosures',
  },
}

export default function PhilippinesDisclosuresPage() {
  return (
    <>
      <PhilippinesNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Philippines', url: '/ph' },
                { name: 'Disclosures', url: '/ph/disclosures' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Important Disclosures</h1>
            
            <div className="prose max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Affiliate Disclosure</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <p>
                    LoansAI Philippines is an independent comparison service that may receive compensation 
                    from lenders when visitors click on links and complete applications. These payments do 
                    not affect your rates or loan terms. Our goal is to provide unbiased information to help 
                    you make informed financial decisions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Representative Example</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold mb-4">Example Loan Calculation:</p>
                  <p className="mb-2"><strong>Loan Amount:</strong> ₱100,000</p>
                  <p className="mb-2"><strong>Annual Percentage Rate (APR):</strong> 24.9%</p>
                  <p className="mb-2"><strong>Loan Term:</strong> 36 months (3 years)</p>
                  <p className="mb-4"><strong>Monthly Payment:</strong> Approximately ₱4,150</p>
                  <p className="mb-2"><strong>Total Amount Payable:</strong> Approximately ₱149,400</p>
                  <p className="mb-4"><strong>Total Interest Cost:</strong> ₱49,400</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Actual rates and terms vary based on your credit profile, income, and lender policies. 
                    All loans are subject to lender approval and BSP regulations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Regulatory Framework</h2>
                <p>
                  All lenders on this platform must comply with Philippine lending regulations:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Truth in Lending Act (RA 3765):</strong> Requires full disclosure of loan terms</li>
                  <li><strong>Lending Company Regulation Act (RA 9474):</strong> Licensing requirements for lenders</li>
                  <li><strong>Financial Consumer Protection Act (RA 11765):</strong> Protects borrower rights</li>
                  <li><strong>Data Privacy Act (RA 10173):</strong> Protects personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Licensed Lenders Only</h2>
                <p>
                  We only work with lenders that are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Licensed by the Bangko Sentral ng Pilipinas (BSP), or</li>
                  <li>Registered with the Securities and Exchange Commission (SEC)</li>
                </ul>
                <p className="mt-4">
                  You can verify a lender's license status on the official BSP or SEC websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights as a Borrower</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                  <p className="font-semibold mb-3">You have the right to:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Receive clear and complete information before signing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Protection against abusive lending practices</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>File complaints with BSP or SEC if needed</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Privacy and protection of personal data</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Fair treatment and transparent fees</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Responsible Borrowing</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
                  <p className="font-semibold mb-3">Important Advice:</p>
                  <ul className="space-y-2">
                    <li>Only borrow what you can afford to repay</li>
                    <li>Read and understand all terms before signing</li>
                    <li>Compare multiple offers before deciding</li>
                    <li>Seek professional financial advice if uncertain</li>
                    <li>Never share your banking credentials with anyone</li>
                    <li>Report suspicious lenders to authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">No Guarantee of Approval</h2>
                <p>
                  Submitting a loan application through our platform does not guarantee approval. Lending 
                  decisions are made independently by lenders based on their own assessment criteria, 
                  including creditworthiness, income verification, and risk evaluation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Reporting Concerns</h2>
                <p>
                  If you encounter any issues with a lender or suspect fraudulent activity:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Contact BSP: www.bsp.gov.ph or hotline 708-7087</li>
                  <li>Contact SEC: www.sec.gov.ph or hotline 1-800-1-8888-7732</li>
                  <li>File a complaint with the National Privacy Commission if data misuse occurs</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <PhilippinesFooter />
    </>
  )
}
