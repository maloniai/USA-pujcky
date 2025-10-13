import Link from 'next/link'

export default function MexicoFooter() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LoansAI México</h3>
            <p className="text-gray-300 text-sm mb-4">
              Plataforma de comparación de préstamos personales en México. 
              Encuentra las mejores opciones de crédito con instituciones reguladas por CONDUSEF.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Préstamos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mx/estados" className="text-gray-300 hover:text-white transition-colors">
                  Por Estado
                </Link>
              </li>
              <li>
                <Link href="/mx/ciudades" className="text-gray-300 hover:text-white transition-colors">
                  Por Ciudad
                </Link>
              </li>
              <li>
                <Link href="/mx/solicitar" className="text-gray-300 hover:text-white transition-colors">
                  Solicitar Préstamo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mx/preguntas-frecuentes" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/mx/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/mx/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mx/privacidad" className="text-gray-300 hover:text-white transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/mx/terminos" className="text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/mx/divulgacion" className="text-gray-300 hover:text-white transition-colors">
                  Divulgación de Afiliados
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-800/40 p-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">Contacta a nuestro equipo</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+525555555555" className="hover:text-white transition-colors">
                  Llámanos: +52 55 5555 5555 (Lunes a Viernes, 9:00 AM - 6:00 PM hora de México)
                </a>
              </li>
              <li>
                <a href="mailto:mexico@loan-platform.com" className="hover:text-white transition-colors">
                  Email: mexico@loan-platform.com
                </a>
              </li>
              <li>
                <Link href="/mx/contacto" className="hover:text-white transition-colors">
                  Centro de soporte
                </Link>
              </li>
              <li className="text-gray-400 text-xs leading-relaxed mt-4">
                Operado por Maloni s.r.o., Revoluční 1403/28, 110 00 Praga 1, República Checa
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center mb-4">
            © 2025 LoansAI México. Todos los derechos reservados.
          </p>
          <div className="space-y-3 text-xs text-gray-500 leading-relaxed">
            <p>
              <strong>Divulgación de afiliados:</strong> LoansAI México es una plataforma de comparación 
              que puede recibir compensación de los prestamistas que aparecen en este sitio. Esta compensación 
              puede influir en cómo y dónde aparecen los productos en nuestro sitio, pero no afecta nuestras 
              recomendaciones o consejos editoriales. No todos los prestamistas están disponibles en todos 
              los estados o ciudades.
            </p>
            <p>
              <strong>Ejemplo representativo:</strong> Un préstamo de $50,000 MXN a 24 meses con una tasa 
              de interés anual del 45% y un CAT (Costo Anual Total) del 55% resultaría en 24 pagos mensuales 
              de aproximadamente $2,917 MXN y un costo total de $70,000 MXN. Las tasas reales varían según el 
              perfil crediticio, el prestamista y otros factores. Todos los préstamos están sujetos a aprobación 
              de crédito.
            </p>
            <p>
              <strong>Información regulatoria:</strong> Los prestamistas que aparecen en este sitio están 
              regulados por la CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de 
              Servicios Financieros) y otras autoridades mexicanas. Para consultas o quejas sobre prestamistas, 
              visite <a href="https://www.condusef.gob.mx" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">www.condusef.gob.mx</a> 
              {' '}o llame al 55 5340 0999 (Ciudad de México) o 800 999 8080 (resto del país).
            </p>
            <p>
              <strong>Límites de tasas:</strong> De acuerdo con las regulaciones mexicanas, el CAT (Costo 
              Anual Total) no debe exceder los límites establecidos por las autoridades financieras. Verifique 
              siempre el CAT antes de aceptar cualquier oferta de préstamo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
