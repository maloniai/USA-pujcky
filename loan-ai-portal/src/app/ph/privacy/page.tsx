import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy – LoansAI Philippines',
  description: 'Learn how LoansAI Philippines protects your personal information and complies with the Data Privacy Act of 2012.',
  alternates: {
    canonical: 'https://loansai.com/ph/privacy',
  },
}

export default function PhilippinesPrivacyPage() {
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
                { name: 'Privacy Policy', url: '/ph/privacy' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-600">Last Updated: January 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
                <p>
                  LoansAI Philippines ("we," "our," or "us") is committed to protecting your privacy and 
                  personal information in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173) 
                  and its Implementing Rules and Regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Information We Collect</h2>
                <p>We collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal identification information (name, address, contact details)</li>
                  <li>Financial information (income, employment status, loan requirements)</li>
                  <li>Government-issued ID information for verification purposes</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (how you interact with our platform)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Match you with appropriate BSP-licensed lenders</li>
                  <li>Process your loan comparison requests</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate important updates about your applications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Information Sharing</h2>
                <p>
                  We share your information only with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>BSP-licensed or SEC-registered lenders you choose to engage with</li>
                  <li>Service providers who assist in operating our platform (under strict confidentiality)</li>
                  <li>Regulatory authorities when required by law</li>
                </ul>
                <p className="mt-4">
                  We never sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights Under the Data Privacy Act</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data we hold</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Object to processing of your data</li>
                  <li>Request erasure of your data (subject to legal requirements)</li>
                  <li>Data portability</li>
                  <li>Lodge complaints with the National Privacy Commission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>Secure data storage with access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this policy or as required by law. Typically, this is for the duration of your 
                  relationship with us plus any applicable legal retention period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please 
                  contact our Data Protection Officer at:
                </p>
                <p className="mt-4">
                  Email: privacy@loansai.com<br />
                  For complaints: National Privacy Commission (www.privacy.gov.ph)
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
