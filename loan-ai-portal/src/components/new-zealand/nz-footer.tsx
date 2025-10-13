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
              We are a comparison service, not a lender. All lenders must be licensed by the Financial Markets Authority.
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
                <Link href="/nz/regions" className="hover:text-white transition-colors">
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
                  href="https://www.fma.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  FMA Website <span aria-hidden>↗</span>
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
              <p className="text-sm font-semibold text-white">Financial Markets Authority (FMA)</p>
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
                <strong className="text-gray-300">Representative Example:</strong> If you borrow NZ$10,000 over 36 months 
                at 15% annual interest rate, your monthly repayment would be approximately NZ$346. Total amount repayable: 
                NZ$12,456 (including NZ$2,456 in interest). This is an example only - your actual rate depends on your credit profile.
              </p>
              <p>
                All lenders must be licensed by the Financial Markets Authority (FMA) and comply with the Credit Contracts 
                and Consumer Finance Act (CCCFA). Borrowing more than you can afford may negatively impact your credit score.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-400 lg:text-right space-y-2">
              <p>
                © {currentYear} LoansAI New Zealand. All rights reserved.
              </p>
              <p>
                This website is operated from New Zealand and complies with the Credit Contracts and Consumer Finance Act 
                (CCCFA) and Privacy Act 2020.
              </p>
              <p className="flex items-center justify-start lg:justify-end gap-2 flex-wrap">
                <span>Languages:</span>
                <Link href="/nz" className="hover:text-white underline">
                  English
                </Link>
                <span>•</span>
                <Link href="/nz?lang=mi" className="hover:text-white underline">
                  Te Reo Māori
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
