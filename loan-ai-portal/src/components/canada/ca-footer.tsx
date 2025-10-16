import Link from 'next/link'
import { ShieldCheck, BookOpen, Mail, FileText } from 'lucide-react'

export default function CAFooter() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { href: '/ca/privacy', label: 'Privacy Policy' },
    { href: '/ca/terms', label: 'Terms of Service' },
    { href: '/ca/disclosures', label: 'Disclosures' },
    { href: '/ca/contact', label: 'Contact Us' },
  ]

  const loanLinks = [
    { href: '/ca/regions', label: 'Loans by Province' },
    { href: '/ca/cities', label: 'Loans by City' },
    { href: '/ca/compare', label: 'Compare Lenders' },
    { href: '/ca/responsible-lending', label: 'Responsible Lending' },
  ]

  const resourceLinks = [
    { href: '/ca/about', label: 'About Us' },
    { href: 'https://www.canada.ca/en/financial-consumer-agency.html', label: 'FCAC Website', external: true },
    { href: 'https://www.canada.ca/en/services/finance/consumer-affairs.html', label: 'Consumer Affairs', external: true },
    { href: 'https://www.bankofcanada.ca/', label: 'Bank of Canada', external: true },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg">
                LoansAI
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Canada's AI-powered loan comparison platform. Compare FCAC-compliant lenders across all provinces and territories.
            </p>
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-400" />
              <span>All lenders regulated by FCAC. Criminal Code Section 347 protected. 60% annual interest cap.</span>
            </div>
          </div>

          {/* Loan Resources column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Loan Resources
            </h3>
            <ul className="space-y-2">
              {loanLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Legal & Contact
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-white text-sm mb-2">Important Information</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Loan-Platform.com is a comparison service, not a lender. We compare FCAC-regulated credit providers operating in Canada. All lenders must comply with federal and provincial lending regulations including the Criminal Code of Canada Section 347 (maximum 60% annual interest rate). Loan approval, rates, and terms are subject to each lender's assessment criteria. Representative example: A $5,000 personal loan over 2 years at 19.99% APR has 24 monthly payments of $254.59, total repayment $6,110.16, total interest $1,110.16. Payday loans are subject to provincial regulations with maximum borrowing terms typically 62 days or less. Rates, fees, and regulations vary by province. This information is for educational purposes only.
            </p>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">
              © {currentYear} Loan-Platform Canada. All rights reserved.
            </p>
            <p>
              Compliant with FCAC guidelines and provincial consumer protection regulations. Subject to federal and provincial lending laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
