import type { Metadata } from 'next'
import PhilippinesNavigation from '@/components/philippines/philippines-navigation'
import PhilippinesFooter from '@/components/philippines/philippines-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'About LoansAI Philippines – Your Trusted Loan Comparison Platform',
  description: 'Learn about LoansAI Philippines, your trusted platform for comparing personal loans from BSP-licensed lenders.',
  alternates: {
    canonical: 'https://loansai.com/ph/about',
  },
}

export default function PhilippinesAboutPage() {
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
                { name: 'About', url: '/ph/about' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About LoansAI Philippines
            </h1>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  LoansAI Philippines is dedicated to empowering Filipino borrowers with the tools and information 
                  they need to make informed financial decisions. We believe that comparing loan offers should be 
                  simple, transparent, and accessible to everyone.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We connect borrowers with BSP-licensed and SEC-registered lenders across the Philippines. 
                  Our platform allows you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Compare personal loan offers from multiple licensed lenders</li>
                  <li>Access transparent information about rates, terms, and fees</li>
                  <li>Make informed decisions based on your specific needs</li>
                  <li>Save time by receiving multiple offers through one application</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment</h2>
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-blue-600 flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        <strong>Licensed Lenders Only:</strong> We only work with lenders licensed by BSP or registered with SEC
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        <strong>Complete Transparency:</strong> All fees, rates, and terms are clearly disclosed
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        <strong>Data Privacy:</strong> Full compliance with the Data Privacy Act of 2012
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 flex-shrink-0">✓</span>
                      <span className="text-gray-700">
                        <strong>Free Service:</strong> Our comparison service is completely free for borrowers
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Regulatory Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All lending activities in the Philippines are regulated by the Bangko Sentral ng Pilipinas (BSP) 
                  and the Securities and Exchange Commission (SEC). We ensure that all our partner lenders comply with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Truth in Lending Act (Republic Act No. 3765)</li>
                  <li>Lending Company Regulation Act (Republic Act No. 9474)</li>
                  <li>Financial Consumer Protection Act (Republic Act No. 11765)</li>
                  <li>Data Privacy Act of 2012 (Republic Act No. 10173)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  Have questions or need assistance? We're here to help. Visit our contact page or reach out 
                  to our customer support team.
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
