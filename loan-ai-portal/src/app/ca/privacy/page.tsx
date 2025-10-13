import type { Metadata } from 'next'
import Link from 'next/link'
import CanadaNavigation from '@/components/canada/canada-navigation'
import CanadaFooter from '@/components/canada/canada-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - LoansAI Canada',
  description: 'Privacy policy for LoansAI Canada. Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws.',
  robots: 'noindex, follow',
}

export default function CanadaPrivacyPage() {
  return (
    <>
      <CanadaNavigation />
      
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>›</li>
                <li><Link href="/ca" className="hover:text-blue-600">Canada</Link></li>
                <li>›</li>
                <li className="text-gray-900 font-semibold">Privacy Policy</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Last Updated:</strong> October 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  LoansAI Canada ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                  our loan comparison and referral service.
                </p>
                <p className="text-gray-700 mb-4">
                  We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable 
                  provincial privacy legislation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  When you apply for a loan through our service, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Full name and date of birth</li>
                  <li>Contact information (email, phone number, address)</li>
                  <li>Social Insurance Number (SIN)</li>
                  <li>Employment and income information</li>
                  <li>Banking information</li>
                  <li>Credit history and financial information</li>
                  <li>Government-issued identification</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                <p className="text-gray-700 mb-4">
                  We automatically collect certain technical information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Loan Matching:</strong> To match you with appropriate lenders and loan products</li>
                  <li><strong>Referral Services:</strong> To share your information with licensed lenders who may offer you loans</li>
                  <li><strong>Verification:</strong> To verify your identity and assess creditworthiness</li>
                  <li><strong>Communication:</strong> To contact you about your application and provide customer support</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Service Improvement:</strong> To analyze usage and improve our services</li>
                  <li><strong>Marketing:</strong> To send you relevant offers and updates (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may share your personal information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Licensed Lenders:</strong> When you submit a loan application, we share your information with potential lenders</li>
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our service (e.g., hosting, analytics, customer support)</li>
                  <li><strong>Credit Bureaus:</strong> For credit verification purposes</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information to third parties for their own marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>Secure servers located in Canada</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Employee training on privacy and security</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  Under Canadian privacy law, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                  <li><strong>Complaint:</strong> File a complaint with the Privacy Commissioner of Canada</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  To exercise these rights, contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Personalize your experience</li>
                  <li>Deliver relevant advertisements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Provide our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Typically, we retain application data for 7 years in accordance with financial record-keeping requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                  personal information from minors.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by 
                  posting the new policy on our website with an updated "Last Updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For questions about this Privacy Policy or to exercise your privacy rights, contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> privacy@loansai.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Privacy Officer:</strong> LoansAI Canada Privacy Officer
                  </p>
                  <p className="text-gray-700">
                    For complaints about our privacy practices, you may also contact:
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Office of the Privacy Commissioner of Canada</strong><br />
                    Website: <a href="https://www.priv.gc.ca" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.priv.gc.ca</a><br />
                    Phone: 1-800-282-1376
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center">
                  <Link href="/ca" className="text-blue-600 hover:text-blue-700 font-semibold">
                    ← Back to Canada Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CanadaFooter />
    </>
  )
}
