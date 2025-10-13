import Link from 'next/link'

export default function NewZealandFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About LoansAI New Zealand</h3>
            <p className="text-sm mb-4">
              Independent loan comparison platform for New Zealand residents. 
              We connect borrowers with licensed lenders regulated by the FMA.
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
                <Link href="/nz" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/nz/regions" className="hover:text-blue-400 transition">
                  Regions
                </Link>
              </li>
              <li>
                <Link href="/nz/cities" className="hover:text-blue-400 transition">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/nz/apply" className="hover:text-blue-400 transition">
                  Apply for a Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nz/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/nz/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/nz/disclosures" className="hover:text-blue-400 transition">
                  Disclosures & Compliance
                </Link>
              </li>
              <li>
                <Link href="/nz/responsible-lending" className="hover:text-blue-400 transition">
                  Responsible Lending
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nz/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.fma.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  FMA (Regulator) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.consumerprotection.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Consumer Protection ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mbie.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  MBIE (Business & Innovation) ↗
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
              Important Disclosure About Affiliate Partnerships
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              LoansAI is an independent comparison platform that may receive compensation from lenders 
              we work with. These partnerships help us maintain the service free for users. We are not 
              a lender and do not make lending decisions. Our comparisons are objective and based on 
              transparent criteria.
            </p>
            <p className="text-xs text-gray-400">
              <strong>Representative Example:</strong> For a loan of NZ$10,000 over 12 months at an 
              interest rate of 10% per annum, the total amount to be repaid would be approximately 
              NZ$10,550, with a monthly payment of approximately NZ$879. Interest rates may vary between 
              5% and 50% depending on the lender, amount, and loan term. All loans are subject to approval 
              and lender conditions. Always read the terms and conditions before signing a contract.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            🇳🇿 Service for New Zealand residents | Regulated by FMA | CCCFA Compliant
          </p>
          <p className="mt-2">
            LoansAI is not a lender. We are a comparison service that connects you with licensed 
            lenders. All applications are subject to verification and approval by lenders.
          </p>
        </div>
      </div>
    </footer>
  )
}
