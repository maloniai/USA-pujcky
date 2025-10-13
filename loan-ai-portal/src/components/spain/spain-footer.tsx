import Link from 'next/link'

export default function SpainFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">LoansAI España</h3>
            <p className="text-sm text-gray-400 mb-4">
              Tu plataforma de confianza para comparar préstamos personales en toda España.
              Regulado y supervisado por el Banco de España.
            </p>
            <div className="flex gap-4">
              <span className="text-2xl">🇪🇸</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/es/spain" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="/es/spain/regions" className="hover:text-white transition">Regiones</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Acerca de</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Política de Privacidad</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Términos de Servicio</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition">Descargo</Link></li>
              <li><Link href="/licenses" className="hover:text-white transition">Licencias</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contacto</Link></li>
              <li>
                <a 
                  href="https://www.bde.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Banco de España
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} LoansAI España. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs max-w-4xl mx-auto">
            LoansAI es un servicio de comparación de préstamos. No somos un prestamista. Conectamos a usuarios con 
            prestamistas licenciados supervisados por el Banco de España. La aprobación final y los términos del préstamo 
            dependen de cada prestamista. TAE representativa: 7%-27%. Los préstamos están sujetos a aprobación crediticia.
          </p>
        </div>
      </div>
    </footer>
  )
}
