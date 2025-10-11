import Link from 'next/link'
import { liveCountries } from '@/data/countries'

export default function GlobalFooter() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LoansAI</h3>
            <p className="text-gray-300 text-sm mb-4">
              AI-powered personal loan matching across 40+ countries worldwide.
            </p>
          </div>

          {/* Country Hubs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Markets</h4>
            <ul className="space-y-2 text-sm">
              {liveCountries.map((country) => (
                <li key={country.code}>
                  <Link href={country.href} className="text-gray-300 hover:text-white transition-colors">
                    {country.flag} {country.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/global" className="text-gray-300 hover:text-white transition-colors">
                  🌍 All Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="text-gray-300 hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Disclaimers
                </Link>
              </li>
              <li>
                <a 
                  href="/docs/soc2-bridge-letter-2025-10-06" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  SOC 2 Type II
                </a>
              </li>
              <li>
                <a 
                  href="/docs/performance-metrics-2025" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Performance Metrics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-800/40 p-6">
          <h4 className="text-lg font-semibold mb-3">Contact Our Team</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="tel:+18005626264" className="hover:text-white transition-colors">
                Call us: (800) 562-6264
              </a>
            </li>
            <li>
              <a href="mailto:compliance@loan-platform.com" className="hover:text-white transition-colors">
                Compliance: compliance@loan-platform.com
              </a>
            </li>
            <li>
              <a href="mailto:info@loan-platform.com" className="hover:text-white transition-colors">
                General inquiries: info@loan-platform.com
              </a>
            </li>
            <li className="text-gray-400 text-xs leading-relaxed mt-4">
              Operated by Maloni s.r.o., Revoluční 1403/28, 110 00 Prague 1, Czech Republic
            </li>
          </ul>
        </div>
        
        {/* Legal */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} LoansAI. All rights reserved.
          </p>
          <div className="mt-4 space-y-3 text-xs text-gray-500 leading-relaxed">
            <p>
              LoansAI is a comparison and referral service, not a lender. We connect borrowers with lending partners 
              in their local markets. Loan terms, rates, and approval criteria are determined by individual lenders 
              and may vary by jurisdiction.
            </p>
            <p>
              By using this service, you consent to receive communications via email, phone, or SMS. Message and data 
              rates may apply. Your information is protected with bank-level encryption and handled according to our 
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
