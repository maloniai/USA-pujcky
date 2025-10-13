'use client'

import Link from 'next/link'

export default function AustraliaFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About LoansAI Australia</h3>
            <p className="text-sm mb-4">
              We compare personal loans from licensed lenders across Australia, 
              helping you find the best rates and terms tailored to your needs.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇦🇺</span>
              <span className="text-sm">Serving all Australian states</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/au" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/au#states" className="hover:text-white transition">
                  States & Territories
                </Link>
              </li>
              <li>
                <Link href="/au#cities" className="hover:text-white transition">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/au/apply" className="hover:text-white transition">
                  Apply for a Loan
                </Link>
              </li>
              <li>
                <Link href="/au/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/au/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/au/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/au/disclosures" className="hover:text-white transition">
                  Affiliate Disclosures
                </Link>
              </li>
              <li>
                <Link href="/au/responsible-lending" className="hover:text-white transition">
                  Responsible Lending
                </Link>
              </li>
              <li>
                <Link href="/au/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://www.asic.gov.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  ASIC - Financial Regulator
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.moneysmart.gov.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  MoneySmart - Financial Guidance
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://ndh.org.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  National Debt Helpline
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/au/loan-calculator" className="hover:text-white transition">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/au/faq" className="hover:text-white transition">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p>© {currentYear} LoansAI Australia. All rights reserved.</p>
              <p className="text-xs mt-1 text-gray-400">
                Australian Credit Licence holder. Regulated by ASIC.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-white transition">
                🇺🇸 United States
              </Link>
              <Link href="/pl" className="hover:text-white transition">
                🇵🇱 Polska
              </Link>
              <Link href="/global" className="hover:text-white transition">
                🌍 Other Countries
              </Link>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p className="mb-2">
              <strong>Important:</strong> LoansAI is a loan comparison service and not a lender. 
              We connect consumers with licensed credit providers. Loan approval and terms are 
              subject to individual lender criteria and creditworthiness assessment.
            </p>
            <p>
              Comparison rates are based on a secured loan of AU$30,000 over 5 years. 
              WARNING: This comparison rate is true only for the examples given and may not 
              include all fees and charges. Different terms, fees or other loan amounts might 
              result in a different comparison rate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
