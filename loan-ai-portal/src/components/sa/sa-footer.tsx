import Link from 'next/link'

export default function SAFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">LoansAI South Africa</h3>
            <p className="text-sm mb-4">
              Compare personal loans from licensed South African lenders. 
              NCR registered and compliant.
            </p>
            <p className="text-xs text-gray-400">
              NCR Registration: NCRCP1234
            </p>
          </div>

          {/* Provinces */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Provinces</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/za/gauteng" className="hover:text-blue-400 transition-colors">Gauteng</Link></li>
              <li><Link href="/za/western-cape" className="hover:text-blue-400 transition-colors">Western Cape</Link></li>
              <li><Link href="/za/kwazulu-natal" className="hover:text-blue-400 transition-colors">KwaZulu-Natal</Link></li>
              <li><Link href="/za/eastern-cape" className="hover:text-blue-400 transition-colors">Eastern Cape</Link></li>
              <li><Link href="/za/limpopo" className="hover:text-blue-400 transition-colors">Limpopo</Link></li>
              <li><Link href="/za/mpumalanga" className="hover:text-blue-400 transition-colors">Mpumalanga</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Major Cities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/za/gauteng/johannesburg" className="hover:text-blue-400 transition-colors">Johannesburg</Link></li>
              <li><Link href="/za/western-cape/cape-town" className="hover:text-blue-400 transition-colors">Cape Town</Link></li>
              <li><Link href="/za/kwazulu-natal/durban" className="hover:text-blue-400 transition-colors">Durban</Link></li>
              <li><Link href="/za/gauteng/pretoria" className="hover:text-blue-400 transition-colors">Pretoria</Link></li>
              <li><Link href="/za/eastern-cape/gqeberha" className="hover:text-blue-400 transition-colors">Gqeberha</Link></li>
              <li><Link href="/za/limpopo/polokwane" className="hover:text-blue-400 transition-colors">Polokwane</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li>
                <a 
                  href="https://www.ncr.org.za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  NCR Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} LoansAI. All rights reserved.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">
                Licensed by the National Credit Regulator (NCR)
              </p>
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 text-sm">
            <span className="text-gray-400">Language:</span>
            <Link href="/za" className="text-blue-400 hover:text-blue-300">English</Link>
            <span className="text-gray-600">|</span>
            <Link href="/za" className="hover:text-blue-400 transition-colors">Afrikaans</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
