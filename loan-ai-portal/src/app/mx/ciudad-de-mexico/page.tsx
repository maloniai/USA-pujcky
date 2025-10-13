import { Metadata } from 'next';
import Link from 'next/link';
import MexicoNavigation from '@/components/mexico/mexico-navigation';
import MexicoFooter from '@/components/mexico/mexico-footer';
import MexicoDisclosure from '@/components/mexico/mexico-disclosure';
import StickyApplyButton from '@/components/mexico/sticky-apply-button';
import { mexicoCities } from '@/data/mexico/mexico-cities';

export const metadata: Metadata = {
  title: 'Préstamos en Ciudad de México – Comparar 2025',
  description: 'Compare préstamos personales en Ciudad de México. Desde $1,000 hasta $500,000 MXN. Prestamistas regulados por CNBV. Solicite en línea hoy.',
  keywords: 'préstamos CDMX, créditos Ciudad de México, préstamos personales DF, dinero rápido CDMX',
  alternates: {
    canonical: 'https://www.loanscouter.com/mx/ciudad-de-mexico'
  }
};

export default function CiudadDeMexicoPage() {
  const regionCities = mexicoCities.filter(city => city.region === 'Ciudad de México');

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
              <li className="text-gray-900">Ciudad de México</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Préstamos en Ciudad de México
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              La Ciudad de México, capital del país, cuenta con la mayor concentración de instituciones financieras reguladas. Los residentes de CDMX tienen acceso a préstamos personales desde $1,000 hasta $500,000 MXN, con tasas anuales entre 18% y 120% según perfil crediticio. La Comisión Nacional Bancaria y de Valores supervisa todas las operaciones, garantizando transparencia y protección al consumidor.
            </p>
          </header>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-gray-600">Prestamistas Activos</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-600">Respuesta Promedio</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">$1K-$500K</div>
              <div className="text-gray-600">Rango de Montos</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">18%-120%</div>
              <div className="text-gray-600">CAT Anual</div>
            </div>
          </div>

          {/* Regulations */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Regulaciones Locales en CDMX
            </h2>
            
            <div className="prose max-w-none">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Supervisión CNBV:</strong> Todas las instituciones financieras deben estar autorizadas por la Comisión Nacional Bancaria y de Valores</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>CAT Obligatorio:</strong> Todos los préstamos deben mostrar el Costo Anual Total (CAT) de forma clara y prominente</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Límites de Comisiones:</strong> Las comisiones por apertura no pueden exceder el 6% del monto del préstamo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Derecho a Retracto:</strong> Los consumidores tienen 5 días hábiles para cancelar el préstamo sin penalización</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Protección CONDUSEF:</strong> Todos los usuarios pueden presentar quejas ante la Comisión Nacional para la Protección de Usuarios de Servicios Financieros</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Buró de Crédito:</strong> Los prestamistas consultan y reportan al Buró de Crédito conforme a la ley</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Tasas de Interés:</strong> Sin límite legal específico, pero deben ser transparentes y justificables ante CONDUSEF</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Recursos Oficiales:</strong> Para más información, visite{' '}
                <a href="https://www.gob.mx/cnbv" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">
                  CNBV
                </a>{' '}
                y{' '}
                <a href="https://www.gob.mx/condusef" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">
                  CONDUSEF
                </a>
              </p>
            </div>
          </section>

          {/* Cities in Region */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Préstamos por Alcaldía en CDMX
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {regionCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/mx/ciudad-de-mexico/${city.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {city.loanRange}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium text-sm">
                    Ver ofertas disponibles
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes - CDMX
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ¿Cuánto puedo pedir prestado en Ciudad de México?
                </h3>
                <p className="text-gray-700">
                  Los montos varían según el prestamista y su perfil crediticio. En CDMX, los préstamos personales generalmente van desde $1,000 MXN hasta $500,000 MXN. Prestamistas bancarios tradicionales ofrecen montos más altos con mejores tasas para clientes con buen historial crediticio, mientras que fintech y SOFOMes pueden ofrecer préstamos más pequeños con aprobación más rápida.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ¿Qué documentos necesito para solicitar un préstamo en CDMX?
                </h3>
                <p className="text-gray-700">
                  Típicamente necesitará: (1) Identificación oficial vigente (INE/IFE o pasaporte), (2) Comprobante de domicilio reciente (no mayor a 3 meses), (3) Comprobante de ingresos (recibos de nómina, estados de cuenta bancarios, o declaración de impuestos para trabajadores independientes), (4) CURP, y (5) referencias personales. Los requisitos específicos varían por prestamista.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ¿Cuánto tiempo tarda la aprobación de un préstamo?
                </h3>
                <p className="text-gray-700">
                  En CDMX, las fintech y prestamistas en línea pueden aprobar préstamos en 24-48 horas una vez que se proporciona toda la documentación. Los bancos tradicionales pueden tomar de 3 a 7 días hábiles. Algunos prestamistas ofrecen "pre-aprobación" instantánea sujeta a verificación de documentos. El desembolso suele ocurrir 1-2 días después de la aprobación final.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ¿Puedo obtener un préstamo con mal historial crediticio?
                </h3>
                <p className="text-gray-700">
                  Sí, existen opciones en CDMX para personas con historial crediticio imperfecto o sin historial. SOFOMes y algunas fintech se especializan en este segmento. Sin embargo, las tasas de interés serán más altas (usualmente 80%-120% CAT anual) y los montos más limitados. Considere trabajar en mejorar su historial crediticio para acceder a mejores términos en el futuro.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ¿Cómo me protege la ley en Ciudad de México?
                </h3>
                <p className="text-gray-700">
                  La CNBV supervisa a todas las instituciones financieras formales, y CONDUSEF protege sus derechos como consumidor financiero. Tiene derecho a: (1) conocer el CAT antes de firmar, (2) cancelar el préstamo en 5 días sin penalización, (3) presentar quejas ante CONDUSEF, (4) que no lo presionen ni engañen, y (5) recibir información clara y completa. Siempre verifique que el prestamista esté registrado ante las autoridades.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-12 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comparar Ofertas?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Complete una solicitud y reciba ofertas personalizadas de múltiples prestamistas autorizados en CDMX
            </p>
            <Link
              href="/mx/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Solicitar Ahora
            </Link>
          </section>

          {/* Disclosure */}
          <MexicoDisclosure />
        </div>
      </main>

      <MexicoFooter />
    </>
  );
}
