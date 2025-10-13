import Link from 'next/link'

export default function CanadaFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>🇨🇦</span>
              <span>LoansAI Canada</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Compare personal loans from licensed Canadian lenders. Bilingual support across all provinces and territories.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Provinces & Territories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ca/regions/ontario" className="text-gray-400 hover:text-white">Ontario</Link></li>
              <li><Link href="/ca/regions/quebec" className="text-gray-400 hover:text-white">Quebec</Link></li>
              <li><Link href="/ca/regions/british-columbia" className="text-gray-400 hover:text-white">British Columbia</Link></li>
              <li><Link href="/ca/regions/alberta" className="text-gray-400 hover:text-white">Alberta</Link></li>
              <li><Link href="/ca/regions" className="text-blue-400 hover:text-blue-300">View all →</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ca/apply" className="text-gray-400 hover:text-white">Apply for Loan</Link></li>
              <li><Link href="/ca/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/ca/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/ca/disclosures" className="text-gray-400 hover:text-white">Disclosures</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Regulators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.canada.ca/en/financial-consumer-agency.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  FCAC (Federal)
                </a>
              </li>
              <li>
                <a href="https://www.fsrao.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  FSRA (Ontario)
                </a>
              </li>
              <li>
                <a href="https://www.opc.gouv.qc.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  OPC (Quebec)
                </a>
              </li>
              <li>
                <a href="https://www.bcfsa.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  BCFSA (BC)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 LoansAI Canada. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-white">Global Home</Link>
              <Link href="/ca" className="hover:text-white">Canada Home</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
