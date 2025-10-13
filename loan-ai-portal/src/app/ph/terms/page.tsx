import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms and Conditions – LoansAI Philippines',
  description: 'Terms and conditions for using LoansAI Philippines loan comparison service.',
  alternates: {
    canonical: 'https://loansai.com/ph/terms',
  },
}

export default function PhilippinesTermsPage() {
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
                { name: 'Terms', url: '/ph/terms' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
            
            <div className="prose max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-600">Last Updated: January 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using LoansAI Philippines ("the Service"), you accept and agree to be 
                  bound by these Terms and Conditions. If you do not agree, please do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Service Description</h2>
                <p>
                  LoansAI Philippines is a loan comparison platform that connects borrowers with BSP-licensed 
                  and SEC-registered lenders in the Philippines. We do not directly provide loans or make 
                  lending decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Eligibility</h2>
                <p>To use this Service, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 21 years of age</li>
                  <li>Be a resident of the Philippines</li>
                  <li>Have a valid government-issued ID</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Provide accurate and complete information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">4. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to manipulate or abuse the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Lender Relationships</h2>
                <p>
                  All loan terms, rates, and conditions are determined by the individual lenders. LoansAI 
                  Philippines facilitates connections but is not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lender approval or rejection decisions</li>
                  <li>Loan terms, interest rates, or fees charged by lenders</li>
                  <li>Disputes between you and lenders</li>
                  <li>The quality of service provided by lenders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">6. No Guarantee of Approval</h2>
                <p>
                  Submitting a loan request through our platform does not guarantee loan approval. Lending 
                  decisions are made solely by individual lenders based on their own criteria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Fees and Compensation</h2>
                <p>
                  Our Service is free for borrowers. We may receive compensation from lenders when users 
                  successfully obtain loans through our platform. This does not affect the rates or terms 
                  offered to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Disclaimer of Warranties</h2>
                <p>
                  The Service is provided "as is" without warranties of any kind, either express or implied. 
                  We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uninterrupted or error-free service</li>
                  <li>Accuracy of information provided by lenders</li>
                  <li>Suitability of any particular loan product</li>
                  <li>That the Service will meet your specific requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, LoansAI Philippines shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages resulting from your 
                  use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic 
                  of the Philippines. Any disputes shall be subject to the exclusive jurisdiction of the 
                  courts of the Philippines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective upon 
                  posting to the website. Your continued use of the Service constitutes acceptance of 
                  modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact us at: support@loansai.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <PhilippinesFooter />
    </>
  )
}
