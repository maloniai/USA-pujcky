'use client'

import Link from 'next/link'

export default function SpainFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sobre LoansAI España</h3>
            <p className="text-sm mb-4">
              Comparamos préstamos personales de prestamistas autorizados en toda España, 
              ayudándote a encontrar las mejores condiciones adaptadas a tus necesidades.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇪🇸</span>
              <span className="text-sm">Servicio en español</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sp" className="hover:text-white transition">
                  Página Principal
                </Link>
              </li>
              <li>
                <Link href="/sp#regiones" className="hover:text-white transition">
                  Comunidades Autónomas
                </Link>
              </li>
              <li>
                <Link href="/sp#ciudades" className="hover:text-white transition">
                  Ciudades
                </Link>
              </li>
              <li>
                <Link href="/sp/apply" className="hover:text-white transition">
                  Solicitar Préstamo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sp/privacy" className="hover:text-white transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/sp/terms" className="hover:text-white transition">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/sp/disclaimer" className="hover:text-white transition">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="https://www.bde.es/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Banco de España →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>info@loansai.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Servicio disponible en toda España</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕒</span>
                <span>Soporte online 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} LoansAI España. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Comparador de préstamos autorizado</span>
              <span className="hidden md:inline">|</span>
              <span>Regulado por el Banco de España</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Aviso importante:</strong> LoansAI España es un servicio de comparación de préstamos. 
            No somos prestamistas ni intermediarios de crédito. Nuestro servicio es gratuito para los 
            consumidores. Recibimos compensación de los prestamistas cuando los usuarios completan 
            solicitudes a través de nuestra plataforma. Esto no afecta las ofertas mostradas. Todos los 
            préstamos están sujetos a aprobación del prestamista y verificación de solvencia. Las tasas 
            TAE varían según el perfil crediticio y otros factores.
          </p>
        </div>
      </div>
    </footer>
  )
}
