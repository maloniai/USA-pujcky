import Link from 'next/link'
import { nzFooterLinks } from '@/data/nz-translations'

export function NZFooter() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Loan AI Portal</h3>
            <p className="text-gray-300 text-sm mb-4">
              Compare licensed personal loan providers in New Zealand. CCCFA-compliant lending options with AI-powered matching.
            </p>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Loan Types</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nz#personal-loans" className="text-gray-300 hover:text-white transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/nz#debt-consolidation" className="text-gray-300 hover:text-white transition-colors">
                  Debt Consolidation
                </Link>
              </li>
              <li>
                <Link href="/nz#car-loans" className="text-gray-300 hover:text-white transition-colors">
                  Car Loans
                </Link>
              </li>
              <li>
                <Link href="/nz#bad-credit" className="text-gray-300 hover:text-white transition-colors">
                  Bad Credit Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nz/regions" className="text-gray-300 hover:text-white transition-colors">
                  Browse by Region
                </Link>
              </li>
              <li>
                <Link href="/nz/cities" className="text-gray-300 hover:text-white transition-colors">
                  Browse by City
                </Link>
              </li>
              <li>
                <Link href="/nz/apply" className="text-gray-300 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/nz/responsible-lending" className="text-gray-300 hover:text-white transition-colors">
                  Responsible Lending
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              {nzFooterLinks.legal.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-10 grid gap-6 rounded-2xl border border-gray-800 bg-gray-800/40 p-6 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact & Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:nz-support@loan-platform.com" className="hover:text-white transition-colors">
                  Email: nz-support@loan-platform.com
                </a>
              </li>
              <li>
                <Link href="/nz/contact" className="hover:text-white transition-colors">
                  Contact Form & Live Chat
                </Link>
              </li>
              <li className="text-gray-400 text-xs leading-relaxed mt-3">
                Operated by Maloni s.r.o., Revoluční 1403/28, 110 00 Prague 1, Czech Republic
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">New Zealand Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {nzFooterLinks.resources.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Loan AI Portal. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>🇳🇿 New Zealand</span>
              <span>•</span>
              <span>CCCFA 2003 Compliant</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-3 text-xs text-gray-500 leading-relaxed">
            <p>
              <strong>Important:</strong> This website is a comparison service connecting New Zealand residents with licensed personal loan providers. We are not a lender. All featured lenders are registered on the Financial Service Providers Register (FSPR) and comply with the Credit Contracts and Consumer Finance Act 2003 (CCCFA).
            </p>
            <p>
              We may receive commissions from lenders when users complete applications through our platform. This does not affect the rates or terms offered by lenders. Our service is free for consumers.
            </p>
            <p>
              Lending decisions are made solely by lenders based on their own credit assessment criteria. Consider whether you can afford the repayments before borrowing. Visit{' '}
              <a
                href="https://www.sorted.org.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline"
              >
                Sorted.org.nz
              </a>{' '}
              or contact{' '}
              <a
                href="https://www.moneytalks.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline"
              >
                MoneyTalks
              </a>{' '}
              (0800 345 123) for free financial guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
