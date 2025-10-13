import type { Metadata } from 'next'
import Link from 'next/link'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions – LoansAI New Zealand',
  description: 'LoansAI New Zealand terms and conditions. Important information about using our loan comparison service.',
  alternates: {
    canonical: 'https://loansai.com/nz/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <NewZealandNavigation />

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/nz" className="hover:text-blue-600">New Zealand</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">Terms & Conditions</span>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About Our Service</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI is a loan comparison platform that connects borrowers with licensed lenders in 
                  New Zealand. We are not a lender and do not make lending decisions. All loan applications 
                  are subject to the terms and conditions of the individual lenders.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                <p className="text-gray-700 mb-4">
                  To use our service, you must:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Be at least 18 years old</li>
                  <li>Be a New Zealand resident</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Provide accurate and truthful information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
                <p className="text-gray-700 mb-4">
                  By using our service, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Not misrepresent your financial situation</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to manipulate or abuse the service</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Guarantee of Approval</h2>
                <p className="text-gray-700 mb-4">
                  Submitting an application through LoansAI does not guarantee loan approval. All lending 
                  decisions are made by individual lenders based on their own criteria and are subject to 
                  CCCFA responsible lending requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Compensation</h2>
                <p className="text-gray-700 mb-4">
                  Our service is free for borrowers. We may receive compensation from lenders in our 
                  network when you are successfully matched with a loan. This does not affect the terms 
                  of any loan you may receive.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Information Accuracy</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date information, we do not guarantee 
                  the accuracy, completeness, or reliability of any content on our platform. Loan terms, 
                  rates, and availability are subject to change by lenders without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the fullest extent permitted by law, LoansAI shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from your use of our 
                  service or any loan obtained through our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content, trademarks, and intellectual property on our platform are owned by or 
                  licensed to LoansAI. You may not use, reproduce, or distribute any content without 
                  our explicit written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our service constitutes acceptance 
                  of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of New Zealand. Any disputes shall be resolved 
                  in the courts of New Zealand.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For questions about these terms, contact us at:
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-gray-700">
                  <p><strong>Email:</strong> support@loansai.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <NewZealandFooter />
    </>
  )
}
