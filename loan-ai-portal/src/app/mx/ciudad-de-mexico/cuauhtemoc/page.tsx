import { Metadata } from 'next';
import Link from 'next/link';
import MexicoNavigation from '@/components/mexico/mexico-navigation';
import MexicoFooter from '@/components/mexico/mexico-footer';
import MexicoDisclosure from '@/components/mexico/mexico-disclosure';
import StickyApplyButton from '@/components/mexico/sticky-apply-button';
import { mexicoCities } from '@/data/mexico/mexico-cities';

export const metadata: Metadata = {
  title: 'Préstamos en Cuauhtémoc, CDMX – Comparar 2025',
  description: 'Préstamos personales en Cuauhtémoc desde $1,000 hasta $300,000 MXN. Compare ofertas de prestamistas regulados por CNBV. Aprobación en 24 horas.',
  keywords: 'préstamos Cuauhtémoc, créditos Cuauhtémoc CDMX, dinero rápido Cuauhtémoc',
  alternates: {
    canonical: 'https://www.loanscouter.com/mx/ciudad-de-mexico/cuauhtemoc'
  }
};

export default function CuauhtemocPage() {
  const currentCity = mexicoCities.find(c => c.slug === 'cuauhtemoc');
  const nearbyCities = currentCity?.nearbyCities.map(slug => 
    mexicoCities.find(c => c.slug === slug)
  ).filter(Boolean) || [];

  return (
    <>
      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/mx" className="text-blue-600 hover:text-blue-800">México</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/mx/ciudad-de-mexico" className="text-blue-600 hover:text-blue-800">Ciudad de México</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900">Cuauhtémoc</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Préstamos en Cuauhtémoc, Ciudad de México
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              La Alcaldía Cuauhtémoc, corazón financiero y comercial de la Ciudad de México, alberga la mayor concentración de instituciones bancarias y financieras del país. Los residentes tienen acceso excepcional a préstamos personales desde $1,000 hasta $300,000 MXN, con una amplia variedad de opciones que incluyen bancos tradicionales, SOFOMes reguladas y plataformas fintech. Las tasas anuales (CAT) típicamente oscilan entre 18% para clientes con excelente historial crediticio hasta 120% para perfiles de mayor riesgo. La proximidad física a oficinas financieras facilita tanto la solicitud en línea como la atención presencial cuando se requiere.
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">$1K-$300K</div>
              <div className="text-gray-600 text-sm">Rango de Montos</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">24-48h</div>
              <div className="text-gray-600 text-sm">Aprobación Promedio</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Prestamistas Locales</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">18%-120%</div>
              <div className="text-gray-600 text-sm">CAT Anual</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Local Regulations */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-7 h-7 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Regulaciones Locales en Cuauhtémoc
                </h2>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Supervisión Federal CNBV:</strong> Todos los prestamistas formales operan bajo autorización y supervisión de la Comisión Nacional Bancaria y de Valores, garantizando cumplimiento normativo estricto.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Transparencia del CAT:</strong> Obligación legal de mostrar el Costo Anual Total antes de la firma, incluyendo intereses, comisiones y seguros asociados.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Límite de Comisiones:</strong> Las comisiones por apertura están limitadas al 6% del monto del préstamo según regulaciones CNBV vigentes.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Derecho de Arrepentimiento:</strong> Periodo de 5 días hábiles para cancelar el contrato sin penalización alguna, conforme a la Ley de Protección al Usuario de Servicios Financieros.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Protección CONDUSEF:</strong> Acceso gratuito a servicios de mediación y arbitraje de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Reporte al Buró de Crédito:</strong> Todas las operaciones se reportan al Buró de Crédito conforme a la Ley para Regular las Sociedades de Información Crediticia.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Prácticas Justas de Cobranza:</strong> Prohibición de hostigamiento, amenazas o publicación de información personal, bajo sanciones administrativas y penales.
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                  <p className="text-sm text-blue-900">
                    <strong>Oficinas Reguladoras en Cuauhtémoc:</strong> Las oficinas centrales de CNBV y CONDUSEF están ubicadas en esta alcaldía. Para consultas o quejas, visite{' '}
                    <a href="https://www.gob.mx/cnbv" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700">
                      www.gob.mx/cnbv
                    </a>{' '}
                    o{' '}
                    <a href="https://www.gob.mx/condusef" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700">
                      www.gob.mx/condusef
                    </a>
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes - Cuauhtémoc
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ¿Cuáles son los requisitos básicos para un préstamo en Cuauhtémoc?
                    </h3>
                    <p className="text-gray-700">
                      Para solicitar un préstamo personal en Cuauhtémoc necesita: (1) ser mayor de 18 años, (2) INE/IFE vigente, (3) comprobante de domicilio no mayor a 3 meses, (4) comprobante de ingresos (nómina, estados de cuenta o declaración de impuestos), y (5) CURP. Los trabajadores independientes pueden necesitar declaraciones fiscales adicionales. La mayoría de prestamistas también consultan el Buró de Crédito, aunque existen opciones para personas sin historial o con historial limitado.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ¿Qué tasas de interés puedo esperar en esta zona?
                    </h3>
                    <p className="text-gray-700">
                      En Cuauhtémoc, las tasas varían significativamente según su perfil crediticio. Clientes con excelente historial y ingresos comprobables pueden obtener tasas desde 18%-40% CAT anual en bancos tradicionales. Perfiles promedio (score 650-700) suelen recibir tasas de 40%-70% CAT. Para personas con historial crediticio limitado o problemas recientes, las SOFOMes y fintech ofrecen tasas de 70%-120% CAT. Siempre compare el CAT, no solo la tasa de interés nominal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ¿Puedo solicitar completamente en línea o debo ir a una sucursal?
                    </h3>
                    <p className="text-gray-700">
                      La mayoría de los prestamistas en Cuauhtémoc ofrecen proceso 100% digital: solicitud en línea, firma electrónica y transferencia directa a su cuenta bancaria. Algunos bancos tradicionales pueden requerir visita a sucursal para montos superiores a $100,000 MXN o para clientes sin relación previa. La ventaja de Cuauhtémoc es que si necesita atención presencial, hay cientos de sucursales bancarias y oficinas de SOFOMes a pocos kilómetros de cualquier punto de la alcaldía.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ¿Cómo identifico un prestamista legítimo?
                    </h3>
                    <p className="text-gray-700">
                      Verifique siempre que el prestamista esté registrado en el Registro de Prestadores de Servicios Financieros (SIPRES) de CONDUSEF. Un prestamista legítimo: (1) nunca solicita pago por adelantado, (2) proporciona el CAT antes de firmar, (3) tiene registro CONDUSEF verificable, (4) usa contratos claros en español, y (5) respeta su periodo de arrepentimiento de 5 días. Desconfíe de promesas como "préstamos sin verificación" o "aprobación garantizada sin documentos".
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ¿Qué hago si tengo un problema con mi prestamista?
                    </h3>
                    <p className="text-gray-700">
                      Primero, intente resolver directamente con la UNE (Unidad Especializada de Atención a Usuarios) del prestamista. Si no hay solución en 30 días naturales, presente una queja ante CONDUSEF. El proceso es gratuito y puede hacerse en línea en www.gob.mx/condusef. CONDUSEF ofrece mediación y arbitraje sin costo. Para casos graves de fraude o cobranza abusiva, puede presentar denuncia ante la Fiscalía General de la República o ante la Profeco.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Compare Ofertas de Préstamos
                </h2>
                <p className="text-blue-100 mb-6">
                  Reciba ofertas personalizadas de múltiples prestamistas autorizados en Cuauhtémoc
                </p>
                <Link
                  href="/mx/apply"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Solicitar Ahora
                </Link>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Apply */}
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Solicitud Rápida</h3>
                <p className="text-green-100 text-sm mb-4">
                  Complete su solicitud en 5 minutos y reciba ofertas de prestamistas autorizados
                </p>
                <Link
                  href="/mx/apply"
                  className="block w-full bg-white text-green-700 text-center py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Comenzar Ahora
                </Link>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Préstamos Cerca de Usted
                  </h3>
                  <ul className="space-y-3">
                    {nearbyCities.map((city: any) => (
                      <li key={city.slug}>
                        <Link
                          href={`/mx/ciudad-de-mexico/${city.slug}`}
                          className="flex items-center justify-between text-blue-600 hover:text-blue-800 group"
                        >
                          <span className="font-medium">{city.name}</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recursos Oficiales
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://www.gob.mx/cnbv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      CNBV - Comisión Nacional Bancaria
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gob.mx/condusef"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      CONDUSEF - Protección al Usuario
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.burodecredito.com.mx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Buró de Crédito
                    </a>
                  </li>
                </ul>
              </div>

              {/* Back to Region */}
              <div className="bg-gray-100 rounded-xl p-6">
                <Link
                  href="/mx/ciudad-de-mexico"
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a Ciudad de México
                </Link>
              </div>
            </div>
          </div>

          {/* Disclosure */}
          <MexicoDisclosure />
        </div>
      </main>

      <MexicoFooter />
    </>
  );
}
