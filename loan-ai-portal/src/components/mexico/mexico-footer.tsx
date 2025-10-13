import Link from 'next/link'

export default function MexicoFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">🇲🇽</span>
              <span className="text-lg font-bold text-white">LoansAI México</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Plataforma de comparación de préstamos personales en México. 
              Transparencia, seguridad y las mejores ofertas del mercado.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mx" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/mx/regions" className="hover:text-white transition">
                  Regiones
                </Link>
              </li>
              <li>
                <Link href="/mx/cities" className="hover:text-white transition">
                  Ciudades
                </Link>
              </li>
              <li>
                <Link href="/mx/apply" className="hover:text-white transition">
                  Solicitar Préstamo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Información Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mx/terms" className="hover:text-white transition">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/mx/privacy" className="hover:text-white transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/mx/disclosures" className="hover:text-white transition">
                  Divulgaciones
                </Link>
              </li>
              <li>
                <a
                  href="https://www.condusef.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  CONDUSEF
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnbv.gob.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  CNBV
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block text-gray-400">Email:</span>
                <a href="mailto:info@loansai.mx" className="hover:text-white transition">
                  info@loansai.mx
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Teléfono:</span>
                <a href="tel:+525555555555" className="hover:text-white transition">
                  +52 (55) 5555-5555
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-gray-400 mb-1">Horario:</span>
                <span className="text-sm">
                  Lunes - Viernes: 9:00 - 18:00
                  <br />
                  Sábado: 10:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} LoansAI México. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-white transition">
                🌐 English
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              <strong>Aviso importante:</strong> LoansAI es un servicio de comparación de préstamos.
              No somos un prestamista ni una institución financiera. Conectamos a los usuarios con
              prestamistas licenciados y regulados por la CNBV y supervisados por CONDUSEF. Los
              prestamistas determinan de manera independiente los términos, tasas y condiciones de
              los préstamos. La CAT (Costo Anual Total) varía según el prestamista y el perfil
              crediticio. Todas las instituciones financieras mostradas están debidamente registradas
              ante las autoridades competentes mexicanas.
            </p>
            <p className="mt-2">
              El servicio de comparación es gratuito para el consumidor. Recibimos compensación de
              prestamistas por referencias exitosas, lo que puede influir en el orden de los
              resultados. Para más información, consulte nuestras{' '}
              <Link href="/mx/disclosures" className="text-blue-400 hover:text-blue-300">
                divulgaciones completas
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
