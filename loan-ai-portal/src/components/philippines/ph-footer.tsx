import Link from 'next/link'

export default function PhilippinesFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About LoansAI Philippines</h3>
            <p className="text-sm mb-4">
              Personal loan comparison platform for Philippine residents. 
              Connecting borrowers with BSP-licensed lending institutions.
            </p>
            <p className="text-xs text-gray-400">
              © 2025 LoansAI. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ph" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ph/regions" className="hover:text-blue-400 transition">
                  Regions
                </Link>
              </li>
              <li>
                <Link href="/ph/cities" className="hover:text-blue-400 transition">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/ph/apply" className="hover:text-blue-400 transition">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/ph/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-blue-400 transition">
                  Disclosures & Compliance
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="hover:text-blue-400 transition">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.bsp.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  BSP (Regulator) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sec.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  SEC Philippines ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>ℹ️</span>
              Important Affiliate Partnership Disclosure
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              LoansAI is an independent comparison platform that may receive compensation from lending 
              institutions we partner with. These partnerships help us maintain our free service for users. 
              We are not a lender and do not make credit decisions. Our comparisons are objective and 
              based on transparent criteria.
            </p>
            <p className="text-xs text-gray-400">
              <strong>Representative Example:</strong> For a loan of ₱100,000 over 12 months at 15% annual 
              interest rate, the total repayable amount would be approximately ₱108,500, with monthly 
              payments of approximately ₱9,000. Actual interest rates may range from 8% to 35% per annum 
              depending on the lender, loan amount, and term. All loans are subject to lender approval 
              and terms. Always read the terms and conditions carefully before signing any agreement.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            🇵🇭 Service for Philippine residents | Regulated by BSP | Data Privacy Compliant
          </p>
          <p className="mt-2">
            LoansAI is not a lending institution. We are a comparison service connecting you with 
            licensed lenders. All applications are subject to lender verification and approval.
          </p>
        </div>
      </div>
    </footer>
  )
}
