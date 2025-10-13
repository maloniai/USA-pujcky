import Link from 'next/link'

export default function AustraliaFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">LoansAI Australia</h3>
            <p className="text-sm text-gray-400 mb-4">
              Compare personal loans from ASIC-licensed lenders across Australia. 
              Transparent rates, fast approvals, complete compliance.
            </p>
            <div className="flex gap-2 text-xs">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">🇦🇺 AU</span>
              <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded">ASIC Regulated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/au" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/au/regions" className="hover:text-blue-400 transition">
                  States & Territories
                </Link>
              </li>
              <li>
                <Link href="/au/cities" className="hover:text-blue-400 transition">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/au/apply" className="hover:text-blue-400 transition">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/au/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/au/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/au/disclosures" className="hover:text-blue-400 transition">
                  Disclosures
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.asic.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  ASIC Website ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/au/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/au/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/au/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Loan Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} LoansAI. All rights reserved. Australian Credit Licence compliant.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                English (US)
              </Link>
              <Link href="/au" className="text-blue-400">
                English (AU)
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Important: This is a loan comparison service. We are compensated by lenders in our network when you complete an application. 
            All rates and terms are provided by participating lenders and subject to their approval process.
          </p>
        </div>
      </div>
    </footer>
  )
}
