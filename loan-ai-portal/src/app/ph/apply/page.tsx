import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import PHNavigation from '@/components/australia/au-navigation'
import PHFooter from '@/components/australia/au-footer'
import PHDisclosure from '@/components/australia/au-disclosure'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan – Philippines | LoansAI',
  description: 'Complete your online application for a personal loan in Philippines. Simple process, fast response, offers from BSP-licensed lenders. No credit score impact to check rates.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apply for Personal Loan in Philippines',
    description: 'Online application for personal loans. BSP-licensed lenders, fast approval, zero hidden costs.',
    url: 'https://loansai.com/ph/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/ph/apply',
  },
}

export default function PHApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Personal Loan Philippines',
    description: 'Loan application form for personal loans in Philippines',
    url: 'https://loansai.com/ph/apply',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://loansai.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Philippines',
          item: 'https://loansai.com/au'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Apply',
          item: 'https://loansai.com/ph/apply'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-apply" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <PHNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🇵🇭 BSP-Licensed Lenders Only
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for a Personal Loan
            </h1>
            <p className="text-xl text-gray-600">
              Get personalized loan offers from BSP-licensed lenders in minutes
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-sm text-gray-600">Get offers in as little as 60 seconds</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-sm text-gray-600">Bank-level encryption protects your data</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Completely Free</h3>
              <p className="text-sm text-gray-600">No fees to compare and apply</p>
            </div>
          </div>

          {/* Application Form Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Start Your Application
            </h2>
            
            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How much do you need?
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="10,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Amount between $2,000 and $75,000</p>
              </div>

              {/* Loan Purpose */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What's the loan for?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select purpose...</option>
                  <option value="debt-consolidation">Debt Consolidation</option>
                  <option value="home-improvement">Home Improvement</option>
                  <option value="car">Car Purchase</option>
                  <option value="medical">Medical Expenses</option>
                  <option value="wedding">Wedding</option>
                  <option value="travel">Travel</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Employment Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Status
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select status...</option>
                  <option value="full-time">Full-time Employed</option>
                  <option value="part-time">Part-time Employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="casual">Casual</option>
                  <option value="centrelink">Centrelink/Pension</option>
                  <option value="retired">Retired</option>
                </select>
              </div>

              {/* Annual Income */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income (before tax)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="50,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select your state...</option>
                  <option value="nsw">New South Wales</option>
                  <option value="vic">Victoria</option>
                  <option value="qld">Queensland</option>
                  <option value="wa">Western Philippines</option>
                  <option value="sa">South Philippines</option>
                  <option value="tas">Tasmania</option>
                  <option value="act">Philippinesn Capital Territory</option>
                  <option value="nt">Northern Territory</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Terms Agreement */}
              <div className="bg-gray-50 rounded-lg p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. I understand that by submitting this form, my information will be shared with BSP-licensed lenders for the purpose of providing loan offers.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Get My Loan Offers
              </button>

              <p className="text-xs text-gray-500 text-center">
                This is a soft credit check and won't affect your credit score
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">📋 What happens next?</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. We match you with suitable BSP-licensed lenders</li>
                <li>2. You receive personalized loan offers with rates and terms</li>
                <li>3. Compare offers and choose the best one for you</li>
                <li>4. Complete the full application with your chosen lender</li>
                <li>5. Receive funds directly to your Philippinesn bank account</li>
              </ol>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">✅ Why choose LoansAI?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Compare offers from 50+ BSP-licensed lenders</li>
                <li>• 100% free - we never charge you fees</li>
                <li>• Bank-level security for your data</li>
                <li>• No obligation to accept any offer</li>
                <li>• Fast approval - most loans approved within 24-48 hours</li>
              </ul>
            </div>
          </div>

          {/* Disclosure */}
          <div className="mt-12">
            <PHDisclosure />
          </div>
        </div>
      </main>

      <PHFooter />
    </>
  )
}
