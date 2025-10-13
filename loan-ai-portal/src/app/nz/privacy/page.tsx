import type { Metadata } from 'next'
import Link from 'next/link'
import NewZealandNavigation from '@/components/newzealand/newzealand-navigation'
import NewZealandFooter from '@/components/newzealand/newzealand-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy – LoansAI New Zealand',
  description: 'LoansAI New Zealand privacy policy. Learn how we collect, use, and protect your personal information in compliance with Privacy Act 2020.',
  alternates: {
    canonical: 'https://loansai.com/nz/privacy',
  },
}

export default function PrivacyPage() {
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
              <span className="text-gray-900">Privacy Policy</span>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI ("we," "our," or "us") operates as a loan comparison platform in New Zealand. 
                  We are committed to protecting your privacy and handling your personal information in 
                  accordance with the Privacy Act 2020 and other applicable New Zealand laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you provide to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Contact information (name, email, phone number, address)</li>
                  <li>Financial information (income, expenses, employment details)</li>
                  <li>Identification information (driver license, passport details)</li>
                  <li>Loan requirements and preferences</li>
                  <li>Usage data and technical information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your personal information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Match you with suitable licensed lenders</li>
                  <li>Process your loan applications</li>
                  <li>Communicate with you about loan offers and services</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and maintain security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Licensed lenders in our network who may provide loan offers</li>
                  <li>Service providers who assist with our operations</li>
                  <li>Credit reporting agencies as required by law</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under the Privacy Act 2020, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Object to certain uses of your information</li>
                  <li>Complain to the Privacy Commissioner if you have concerns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, loss, or misuse. This includes SSL 
                  encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to provide our services 
                  and comply with legal obligations. After this period, we securely delete or anonymize 
                  your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-gray-700">
                  <p><strong>Email:</strong> privacy@loansai.com</p>
                  <p className="mt-2">
                    You may also contact the Privacy Commissioner at{' '}
                    <a 
                      href="https://www.privacy.org.nz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.privacy.org.nz
                    </a>
                  </p>
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
