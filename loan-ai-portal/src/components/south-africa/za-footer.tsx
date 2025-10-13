import Link from 'next/link'

export default function ZAFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span>🇿🇦</span> About LoansAI ZA
            </h3>
            <p className="text-sm mb-4">
              South Africa's trusted loan comparison platform. We help you find the best personal loan offers from NCR-registered lenders.
            </p>
            <p className="text-xs text-gray-400">
              We are a comparison service, not a lender. All lenders must be registered with the National Credit Regulator.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/za" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/za/regions" className="hover:text-white transition-colors">
                  All Provinces
                </Link>
              </li>
              <li>
                <Link href="/za/cities" className="hover:text-white transition-colors">
                  All Cities
                </Link>
              </li>
              <li>
                <Link href="/za/apply" className="hover:text-white transition-colors">
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
                  href="https://www.ncr.org.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  NCR Website <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
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
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">Regulated by:</p>
              <p className="text-sm font-semibold text-white">National Credit Regulator (NCR)</p>
              <p className="text-xs text-gray-400 mt-1">Ensuring responsible lending practices</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Disclaimer */}
            <div className="text-xs text-gray-400 space-y-2">
              <p>
                <strong className="text-gray-300">Important Disclosure:</strong> LoansAI is a free comparison service. 
                We may receive compensation from lenders when you click on links or complete applications. This does not 
                affect our editorial independence or the rates you receive.
              </p>
              <p>
                <strong className="text-gray-300">Representative Example:</strong> If you borrow R10,000 over 36 months 
                at 24% annual interest rate, your monthly repayment would be approximately R393. Total amount repayable: 
                R14,148 (including R4,148 in interest). This is an example only - your actual rate depends on your credit profile.
              </p>
              <p>
                All lenders must be registered with the National Credit Regulator (NCR). Borrowing more than you can afford 
                or paying late may negatively impact your credit profile and reduce access to credit.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-400 lg:text-right space-y-2">
              <p>
                © {currentYear} LoansAI South Africa. All rights reserved.
              </p>
              <p>
                This website is operated from South Africa and complies with the National Credit Act (NCA) and 
                Protection of Personal Information Act (POPIA).
              </p>
              <p className="flex items-center justify-start lg:justify-end gap-2 flex-wrap">
                <span>Languages:</span>
                <Link href="/za" className="hover:text-white underline">
                  English
                </Link>
                <span>•</span>
                <Link href="/za?lang=af" className="hover:text-white underline">
                  Afrikaans
                </Link>
                <span>•</span>
                <Link href="/za?lang=zu" className="hover:text-white underline">
                  isiZulu
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
