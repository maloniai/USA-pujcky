'use client'

import Link from 'next/link'

export default function PolandFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">O LoansAI Polska</h3>
            <p className="text-sm mb-4">
              Porównujemy pożyczki osobiste od licencjonowanych pożyczkodawców w całej Polsce, 
              pomagając znaleźć najlepsze warunki dopasowane do Twoich potrzeb.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇵🇱</span>
              <span className="text-sm">Obsługiwane w języku polskim</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl" className="hover:text-white transition">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/pl#regiony" className="hover:text-white transition">
                  Województwa
                </Link>
              </li>
              <li>
                <Link href="/pl#miasta" className="hover:text-white transition">
                  Miasta
                </Link>
              </li>
              <li>
                <Link href="/pl/apply" className="hover:text-white transition">
                  Aplikuj o Pożyczkę
                </Link>
              </li>
              <li>
                <Link href="/pl/o-nas" className="hover:text-white transition">
                  O nas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informacje Prawne</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pl/polityka-prywatnosci" className="hover:text-white transition">
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link href="/pl/regulamin" className="hover:text-white transition">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/pl/ujawnienia-partnerskie" className="hover:text-white transition">
                  Ujawnienia Partnerskie
                </Link>
              </li>
              <li>
                <Link href="/pl/odpowiedzialne-pozyczanie" className="hover:text-white transition">
                  Odpowiedzialne Pożyczanie
                </Link>
              </li>
              <li>
                <Link href="/pl/kontakt" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Zasoby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="https://www.knf.gov.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  Komisja Nadzoru Finansowego
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.bik.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  Biuro Informacji Kredytowej
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.uokik.gov.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  Urząd Ochrony Konkurencji i Konsumentów
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/pl/przewodnik" className="hover:text-white transition">
                  Przewodnik po Pożyczkach
                </Link>
              </li>
              <li>
                <Link href="/pl/porady-finansowe" className="hover:text-white transition">
                  Porady Finansowe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} LoansAI Polska. Wszystkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-gray-500 text-center md:text-right max-w-2xl">
              LoansAI jest platformą porównawczą i nie jest pożyczkodawcą. Współpracujemy z 
              licencjonowanymi instytucjami finansowymi w całej Polsce. Wszystkie decyzje 
              kredytowe są podejmowane przez poszczególnych pożyczkodawców.
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Regulowane przez <span className="text-white font-semibold">Komisję Nadzoru Finansowego (KNF)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
