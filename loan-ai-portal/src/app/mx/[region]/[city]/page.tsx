import { mexicoCities, MexicoCity } from '@/data/mexico/mexico-cities';
import { mexicoRegions } from '@/data/mexico/mexico-regions';
import { Metadata } from 'next';
import Link from 'next/link';
import MexicoNavigation from '@/components/mexico/mexico-navigation';
import MexicoFooter from '@/components/mexico/mexico-footer';
import MexicoDisclosure from '@/components/mexico/mexico-disclosure';
import StickyApplyButton from '@/components/mexico/sticky-apply-button';

interface CityPageProps {
  params: {
    region: string;
    city: string;
  };
}

export async function generateStaticParams() {
  return mexicoCities.map((city) => ({
    region: city.region.toLowerCase().replace(/\s+/g, '-'),
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = mexicoCities.find(c => c.slug === params.city);
  
  if (!city) {
    return {
      title: 'Ciudad no encontrada',
    };
  }

  return {
    title: `Préstamos en ${city.name}, ${city.region} – Comparar 2025`,
    description: `Préstamos personales en ${city.name} desde ${city.loanRange}. Compare ofertas de prestamistas regulados por CNBV. Aprobación en 24-48 horas.`,
    keywords: `préstamos ${city.name}, créditos ${city.name}, préstamos personales ${city.region}`,
    alternates: {
      canonical: `https://www.loanscouter.com/mx/${params.region}/${params.city}`
    },
    openGraph: {
      title: `Préstamos en ${city.name}, ${city.region} – Comparar 2025`,
      description: `Compare préstamos personales en ${city.name}. Prestamistas autorizados por CNBV.`,
      url: `https://www.loanscouter.com/mx/${params.region}/${params.city}`,
      type: 'website',
      locale: 'es_MX'
    }
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = mexicoCities.find(c => c.slug === params.city);
  const region = mexicoRegions.find(r => r.slug === params.region);
  
  if (!city || !region) {
    return <div>Ciudad no encontrada</div>;
  }

  const nearbyCities = city.nearbyCities
    .map(slug => mexicoCities.find(c => c.slug === slug))
    .filter((c): c is MexicoCity => c !== undefined);

  // Generate unique content based on city characteristics
  const getIntroText = () => {
    const templates = [
      `${city.name}, ubicado en ${city.region}, ofrece acceso a préstamos personales ${city.loanRange}. Los residentes pueden solicitar créditos a través de instituciones bancarias tradicionales, SOFOMes reguladas y plataformas fintech autorizadas por la CNBV. Las tasas anuales (CAT) varían típicamente entre 18% para clientes con excelente historial crediticio hasta 120% para perfiles de mayor riesgo. El proceso de solicitud puede completarse en línea con aprobación en 24-48 horas para la mayoría de los casos.`,
      `En ${city.name}, ${city.region}, los habitantes tienen acceso a una amplia gama de opciones de financiamiento personal ${city.loanRange}. Las instituciones financieras operan bajo supervisión estricta de la Comisión Nacional Bancaria y de Valores, garantizando transparencia y protección al consumidor. Los prestamistas evalúan el perfil crediticio, ingresos y capacidad de pago para determinar términos y condiciones. La mayoría de solicitudes reciben respuesta en menos de 48 horas.`,
      `Los residentes de ${city.name} pueden acceder a préstamos personales ${city.loanRange} a través de múltiples canales autorizados. La zona cuenta con prestamistas que ofrecen tasas competitivas según el perfil del solicitante, desde 18% CAT anual para clientes preferenciales hasta tasas más elevadas para perfiles con historial limitado. Todos los prestamistas formales están regulados por CNBV y sujetos a las normas de protección financiera de CONDUSEF.`
    ];
    return templates[Math.floor(Math.random() * templates.length)];
  };

  const getRegulationDescription = () => {
    return {
      supervision: `Todas las instituciones financieras que operan en ${city.name} deben estar autorizadas y supervisadas por la Comisión Nacional Bancaria y de Valores (CNBV), garantizando el cumplimiento de estándares operativos y de transparencia.`,
      cat: `Los prestamistas están obligados por ley a mostrar claramente el Costo Anual Total (CAT) antes de la firma del contrato, incluyendo todos los costos asociados: intereses, comisiones, seguros y cualquier otro cargo.`,
      commissions: `Las comisiones por apertura de préstamo están limitadas legalmente al 6% del monto total del crédito, protegiendo a los consumidores de cobros excesivos.`,
      retraction: `Los prestatarios en ${city.name} tienen derecho a un periodo de arrepentimiento de 5 días hábiles para cancelar el contrato sin penalización, conforme a la legislación federal de protección al usuario.`,
      condusef: `CONDUSEF ofrece servicios gratuitos de mediación y arbitraje para resolver conflictos entre usuarios y prestamistas. Los consumidores pueden presentar quejas en línea o en las oficinas regionales.`,
      bureau: `Todos los préstamos se reportan al Buró de Crédito y Círculo de Crédito conforme a la Ley para Regular las Sociedades de Información Crediticia, afectando el historial crediticio del prestatario.`,
      collection: `Las prácticas de cobranza están reguladas estrictamente, prohibiendo el hostigamiento, amenazas, visitas no autorizadas y la divulgación de información personal del deudor a terceros.`
    };
  };

  const regulations = getRegulationDescription();

  const getFAQs = () => [
    {
      question: `¿Cuánto dinero puedo pedir prestado en ${city.name}?`,
      answer: `En ${city.name} los montos disponibles varían según el prestamista y su perfil crediticio. Los rangos típicos son ${city.loanRange}. Los bancos tradicionales tienden a ofrecer montos más altos (hasta $500,000 MXN) para clientes con buen historial, mientras que SOFOMes y fintech pueden aprobar montos menores ($1,000 a $50,000 MXN) con requisitos más flexibles. Su capacidad de pago, ingresos demostrados y score crediticio son los principales factores que determinan el monto aprobado.`
    },
    {
      question: `¿Qué documentos necesito para solicitar?`,
      answer: `Para solicitar un préstamo en ${city.name} necesitará: (1) Identificación oficial vigente (INE/IFE o pasaporte), (2) Comprobante de domicilio reciente (luz, agua, teléfono o estado de cuenta bancario de los últimos 3 meses), (3) Comprobante de ingresos (recibos de nómina, estados de cuenta bancarios o declaración de impuestos para independientes), (4) CURP actualizado, y (5) referencias personales (nombres, teléfonos y relación). Algunos prestamistas pueden solicitar documentación adicional según su política interna.`
    },
    {
      question: `¿Cuánto tiempo tarda el proceso de aprobación?`,
      answer: `El tiempo de aprobación en ${city.name} varía por prestamista. Las plataformas fintech y SOFOMes digitales pueden ofrecer pre-aprobación en minutos y aprobación final en 24-48 horas una vez que se verifica la documentación. Los bancos tradicionales suelen tomar de 3 a 7 días hábiles. El desembolso generalmente ocurre 1-2 días después de la aprobación final mediante transferencia electrónica a su cuenta bancaria. La rapidez depende de qué tan completa y verificable sea su documentación.`
    },
    {
      question: `¿Puedo obtener un préstamo con mal crédito?`,
      answer: `Sí, en ${city.name} existen prestamistas especializados en atender a personas con historial crediticio imperfecto o sin historial. SOFOMes y algunas fintech evalúan otros factores como ingresos actuales, estabilidad laboral y capacidad de pago demostrable. Sin embargo, debe esperar: (1) tasas de interés más altas (típicamente 80%-120% CAT), (2) montos más limitados (generalmente $1,000 a $30,000 MXN), y (3) plazos más cortos. Compare múltiples opciones y lea cuidadosamente los términos antes de comprometerse.`
    },
    {
      question: `¿Cómo me protege la regulación mexicana?`,
      answer: `Como residente de ${city.name}, está protegido por múltiples leyes federales: (1) Derecho a conocer el CAT completo antes de firmar, (2) Periodo de 5 días para cancelar sin penalización, (3) Acceso gratuito a CONDUSEF para mediación de conflictos, (4) Prohibición de prácticas abusivas de cobranza, (5) Obligación del prestamista de ser transparente sobre términos y condiciones, y (6) Derecho a liquidar anticipadamente sin penalización excesiva. Siempre verifique que el prestamista esté registrado en SIPRES (Sistema de Registro de Prestadores de Servicios Financieros).`
    }
  ];

  const faqs = getFAQs();

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
              <li><Link href={`/mx/${params.region}`} className="text-blue-600 hover:text-blue-800">{region.name}</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900">{city.name}</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Préstamos en {city.name}, {city.region}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              {getIntroText()}
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">{city.loanRange}</div>
              <div className="text-gray-600 text-sm">Rango de Montos</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">24-48h</div>
              <div className="text-gray-600 text-sm">Aprobación Promedio</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Prestamistas Disponibles</div>
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
                  Regulaciones y Protecciones en {city.name}
                </h2>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Supervisión CNBV:</strong> {regulations.supervision}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Transparencia del CAT:</strong> {regulations.cat}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Límite de Comisiones:</strong> {regulations.commissions}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Derecho de Arrepentimiento:</strong> {regulations.retraction}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Protección CONDUSEF:</strong> {regulations.condusef}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Reporte al Buró de Crédito:</strong> {regulations.bureau}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Prácticas de Cobranza:</strong> {regulations.collection}
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                  <p className="text-sm text-blue-900">
                    <strong>Recursos Oficiales:</strong> Para verificar el registro de un prestamista o presentar quejas, visite{' '}
                    <a href="https://www.gob.mx/condusef" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700">
                      CONDUSEF
                    </a>{' '}
                    o{' '}
                    <a href="https://www.gob.mx/cnbv" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700">
                      CNBV
                    </a>
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes - {city.name}
                </h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Compare Ofertas de Préstamos en {city.name}
                </h2>
                <p className="text-blue-100 mb-6">
                  Reciba ofertas personalizadas de múltiples prestamistas autorizados
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
                    {nearbyCities.slice(0, 6).map((nearbyCity) => (
                      <li key={nearbyCity.slug}>
                        <Link
                          href={`/mx/${params.region}/${nearbyCity.slug}`}
                          className="flex items-center justify-between text-blue-600 hover:text-blue-800 group"
                        >
                          <span className="font-medium">{nearbyCity.name}</span>
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
                  href={`/mx/${params.region}`}
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a {region.name}
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
