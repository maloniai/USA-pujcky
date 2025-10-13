import Link from 'next/link'

export default function PhilippinesFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tungkol sa LoansAI Philippines</h3>
            <p className="text-sm mb-4">
              Platform para sa paghahambing ng mga personal na pautang para sa mga residente ng Pilipinas. 
              Kumukonekta kami ng mga umuutang sa mga lisensyadong nagpapautang na pinangangasiwaan ng BSP.
            </p>
            <p className="text-xs text-gray-400">
              © 2025 LoansAI. Lahat ng karapatan ay nakalaan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Mabilis na Mga Link</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ph" className="hover:text-blue-400 transition">
                  Pangunahing Pahina
                </Link>
              </li>
              <li>
                <Link href="/ph/regions" className="hover:text-blue-400 transition">
                  Mga Rehiyon
                </Link>
              </li>
              <li>
                <Link href="/ph/cities" className="hover:text-blue-400 transition">
                  Mga Lungsod
                </Link>
              </li>
              <li>
                <Link href="/ph/apply" className="hover:text-blue-400 transition">
                  Mag-apply para sa Pautang
                </Link>
              </li>
              <li>
                <Link href="/ph/about" className="hover:text-blue-400 transition">
                  Tungkol Sa Amin
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ligal na Impormasyon</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ph/privacy" className="hover:text-blue-400 transition">
                  Patakaran sa Privacy
                </Link>
              </li>
              <li>
                <Link href="/ph/terms" className="hover:text-blue-400 transition">
                  Mga Tuntunin at Kundisyon
                </Link>
              </li>
              <li>
                <Link href="/ph/disclosures" className="hover:text-blue-400 transition">
                  Mga Pagsisiwalat at Pagsunod
                </Link>
              </li>
              <li>
                <Link href="/ph/data-privacy" className="hover:text-blue-400 transition">
                  Data Privacy Act
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Mga Mapagkukunan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.bsp.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Bangko Sentral ng Pilipinas ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sec.gov.ph" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Securities and Exchange Commission ↗
                </a>
              </li>
              <li>
                <Link href="/ph/faq" className="hover:text-blue-400 transition">
                  Mga Madalas Itanong
                </Link>
              </li>
              <li>
                <Link href="/ph/contact" className="hover:text-blue-400 transition">
                  Makipag-ugnayan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            Disclaimer: Kami ay isang serbisyong pang-komparasyon at hindi direktang nagpapautang. 
            Lahat ng pautang ay napapailalim sa pagsang-ayon ng nagpapautang at regulasyon ng BSP.
          </p>
          <p>
            Ginawa para sa mga residente ng Pilipinas. Lisensyadong mga nagpapautang lamang ang kinakatawan.
          </p>
        </div>
      </div>
    </footer>
  )
}
