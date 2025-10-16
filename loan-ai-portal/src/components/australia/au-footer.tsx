import Link from 'next/link'
import { ShieldCheck, BookOpen, Mail, FileText } from 'lucide-react'

export default function AUFooter() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { href: '/au/privacy', label: 'Privacy Policy' },
    { href: '/au/terms', label: 'Terms of Service' },
    { href: '/au/disclosures', label: 'Disclosures' },
    { href: '/au/contact', label: 'Contact Us' },
  ]

  const loanLinks = [
    { href: '/au/states', label: 'Loans by State' },
    { href: '/au/cities', label: 'Loans by City' },
    { href: '/au/compare', label: 'Compare Lenders' },
    { href: '/au/responsible-lending', label: 'Responsible Lending' },
  ]

  const resourceLinks = [
    { href: '/au/about', label: 'About Us' },
    { href: 'https://asic.gov.au/', label: 'ASIC Website', external: true },
    { href: 'https://www.afca.org.au/', label: 'AFCA - Disputes', external: true },
    { href: 'https://moneysmart.gov.au/', label: 'MoneySmart', external: true },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg">
                LoansAI
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Australia's AI-powered loan comparison platform. Compare ASIC-licensed lenders across all states and territories.
            </p>
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>All lenders regulated by ASIC. AFCA member for dispute resolution.</span>
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
              LoansAI.com.au is a comparison service, not a lender. We compare ASIC-licensed credit providers regulated under the National Consumer Credit Protection Act 2009 (NCCP Act). Loan approval, rates, and terms are subject to each lender's assessment criteria. Representative example: A $10,000 personal loan over 3 years at 12% p.a. has 36 monthly repayments of $332.14, total repayment $11,957.04, total interest $1,957.04, comparison rate 12.00% p.a. Comparison rate based on secured loan of $30,000 over 5 years. WARNING: This comparison rate applies only to the example given. Different amounts and terms will result in different comparison rates. Costs such as redraw fees or early repayment fees, and cost savings such as fee waivers, are not included in the comparison rate but may influence the cost of the loan.
            </p>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">
              © {currentYear} LoansAI Australia. All rights reserved. ABN pending registration.
            </p>
            <p>
              Australian Credit Licence application in progress. Regulated by the Australian Securities and Investments Commission (ASIC).
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
