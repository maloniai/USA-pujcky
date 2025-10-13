import Link from 'next/link'

export default function NZFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span>🇳🇿</span> About LoansAI NZ
            </h3>
            <p className="text-sm mb-4">
              New Zealand's trusted loan comparison platform. We help you find the best personal loan offers from FMA-licensed lenders.
            </p>
            <p className="text-xs text-gray-400">
              We are a comparison service, not a lender. All lenders must be licensed by the New Zealandn Securities and Investments Commission (FMA).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nz" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/nz/states" className="hover:text-white transition-colors">
                  All Regions
                </Link>
              </li>
              <li>
                <Link href="/nz/cities" className="hover:text-white transition-colors">
                  All Cities
                </Link>
              </li>
              <li>
                <Link href="/nz/apply" className="hover:text-white transition-colors">
                  Apply for Loan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-white transition-colors">
                  Affiliate Disclosures
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.asic.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FMA Website →
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://sorted.org.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Sorted.org.nz →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} LoansAI New Zealand. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>🇳🇿 Serving all New Zealand regions nationwide</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            LoansAI is a comparison service that helps New Zealand residents find suitable personal loans. 
            We work with FMA-licensed lenders and registered credit providers. Lending criteria, fees, 
            and charges apply. Terms and conditions apply.
          </p>
        </div>
      </div>
    </footer>
  )
}
