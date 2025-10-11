import Link from 'next/link'

export default function RomaniaFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Despre LoansAI România</h3>
            <p className="text-sm mb-4">
              Platformă de comparare a creditelor personale pentru rezidenții din România. 
              Conectăm împrumutați cu creditori licențiați BNR.
            </p>
            <p className="text-xs text-gray-400">
              © 2025 LoansAI. Toate drepturile rezervate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Link-uri rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ro" className="hover:text-blue-400 transition">
                  Pagina principală
                </Link>
              </li>
              <li>
                <Link href="/ro/regions" className="hover:text-blue-400 transition">
                  Regiuni
                </Link>
              </li>
              <li>
                <Link href="/ro/cities" className="hover:text-blue-400 transition">
                  Orașe
                </Link>
              </li>
              <li>
                <Link href="/ro/apply" className="hover:text-blue-400 transition">
                  Aplică pentru credit
                </Link>
              </li>
              <li>
                <Link href="/ro/faq" className="hover:text-blue-400 transition">
                  Întrebări frecvente
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Informații legale</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ro/privacy" className="hover:text-blue-400 transition">
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/ro/terms" className="hover:text-blue-400 transition">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link href="/ro/disclosures" className="hover:text-blue-400 transition">
                  Divulgări și conformitate
                </Link>
              </li>
              <li>
                <Link href="/ro/cookie-policy" className="hover:text-blue-400 transition">
                  Politica cookie-urilor
                </Link>
              </li>
              <li>
                <Link href="/ro/gdpr" className="hover:text-blue-400 transition">
                  Drepturi GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resurse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ro/contact" className="hover:text-blue-400 transition">
                  Contactează-ne
                </Link>
              </li>
              <li>
                <Link href="/ro/about" className="hover:text-blue-400 transition">
                  Despre noi
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.bnr.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  BNR (Regulator) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.anpc.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  ANPC (Protecția Consumatorilor) ↗
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
              Divulgare importantă despre parteneriate afiliate
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              LoansAI este o platformă de comparare independentă care poate primi compensații de la creditorii 
              cu care lucrăm. Aceste parteneriate ne ajută să menținem serviciul gratuit pentru utilizatori. 
              Nu suntem un creditor și nu luăm decizii de creditare. Comparațiile noastre sunt obiective și 
              se bazează pe criterii transparente.
            </p>
            <p className="text-xs text-gray-400">
              <strong>Exemplu reprezentativ:</strong> Pentru un credit de 10.000 RON pe 12 luni cu o rată a 
              dobânzii de 10% pe an, valoarea totală de rambursat ar fi de aproximativ 10.550 RON, cu o rată 
              lunară de aproximativ 879 RON. DAE (Dobânda Anuală Efectivă) poate varia între 5% și 50% în 
              funcție de creditor, sumă și durata creditului. Toate creditele sunt supuse aprobării și 
              condițiilor creditorului. Citește întotdeauna termenii și condițiile înainte de a semna un contract.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            🇷🇴 Serviciu dedicat rezidentilor din România | Reglementat de BNR | Conformitate GDPR
          </p>
          <p className="mt-2">
            LoansAI nu este un creditor. Suntem un serviciu de comparare care vă conectează cu creditori 
            licențiați. Toate aplicațiile sunt supuse verificării și aprobării de către creditori.
          </p>
        </div>
      </div>
    </footer>
  )
}
