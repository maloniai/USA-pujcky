import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { getMexicoCityBySlug, getNearbyMexicoCities, getAllMexicoCitySlugs } from '@/data/mexico-cities'
import { mexicoRegions } from '@/data/mexico-regions'

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllMexicoCitySlugs().map(item => item.params)
}

// Generate metadata for each city
export async function generateMetadata({
  params,
}: {
  params: { estado: string; ciudad: string }
}): Promise<Metadata> {
  const city = getMexicoCityBySlug(params.ciudad)
  
  if (!city) {
    return {
      title: 'Ciudad No Encontrada',
      description: 'La página de la ciudad solicitada no pudo ser encontrada.',
    }
  }

  const year = new Date().getFullYear()
  const title = `Préstamos en ${city.name}, ${city.stateCode} – Comparar ${year}`
  const description = `Préstamos personales en ${city.name}, ${city.state}. ${city.nearbyLenders}+ prestamistas, monto promedio ${city.averageLoanAmount}, tasas desde 15% anual. Aprobación rápida para residentes de ${city.name}.`
  
  return {
    title,
    description,
    keywords: `prestamos personales ${city.name.toLowerCase()}, ${city.name.toLowerCase()} prestamos, creditos en ${city.name.toLowerCase()} ${city.stateCode.toLowerCase()}, prestamistas ${city.name.toLowerCase()}, prestamos rapidos ${city.name.toLowerCase()}`,
    openGraph: {
      title,
      description,
      url: `https://loansai.com/mx/ciudades/${params.estado}/${params.ciudad}`,
      siteName: 'LoansAI México',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/mx/ciudades/${params.estado}/${params.ciudad}`,
    },
  }
}

export default function CiudadPage({
  params,
}: {
  params: { estado: string; ciudad: string }
}) {
  const city = getMexicoCityBySlug(params.ciudad)
  
  if (!city) {
    notFound()
  }

  const parentRegion = mexicoRegions.find(r => r.slug === params.estado)
  if (!parentRegion) {
    notFound()
  }

  const nearbyCities = getNearbyMexicoCities(params.ciudad, 6)
  const year = new Date().getFullYear()

  // City-specific FAQs
  const faqs = [
    {
      question: `¿Cuánto puedo pedir prestado en ${city.name}?`,
      answer: `En ${city.name}, los montos de préstamos personales típicamente van desde $5,000 hasta $500,000 MXN, dependiendo de tu perfil crediticio y capacidad de pago. El monto promedio de préstamo en ${city.name} es de ${city.averageLoanAmount}. Los prestamistas evaluarán tu ingreso (el ingreso promedio en ${city.name} es ${city.medianIncome}), tu historial crediticio y tu relación deuda-ingreso para determinar el monto máximo que puedes solicitar.`
    },
    {
      question: `¿Qué tipos de préstamos son más populares en ${city.name}?`,
      answer: `Los tipos de préstamos más solicitados en ${city.name} son: ${city.popularLoanTypes.join(', ')}. Esto refleja las necesidades económicas locales influenciadas por las principales industrias de la ciudad: ${city.keyIndustries.slice(0, 3).join(', ')}.`
    },
    {
      question: `¿Cuántos prestamistas operan en ${city.name}?`,
      answer: `Actualmente hay ${city.nearbyLenders}+ instituciones financieras que ofrecen préstamos personales a residentes de ${city.name}, incluyendo bancos tradicionales, SOFOMes y plataformas en línea. Todos están regulados por CONDUSEF y deben cumplir con las normativas de protección al consumidor establecidas en ${parentRegion.name}.`
    },
    {
      question: `¿Qué requisitos necesito para solicitar un préstamo en ${city.name}?`,
      answer: `Los requisitos básicos para solicitar un préstamo personal en ${city.name} incluyen: ser mayor de 18 años, tener residencia en ${city.name} o ${city.state}, contar con identificación oficial vigente (INE/IFE), comprobante de ingresos reciente, estado de cuenta bancario de los últimos 3-6 meses, y comprobante de domicilio actual. El score crediticio promedio en ${city.name} es de ${city.avgCreditScore}, pero muchos prestamistas trabajan con diferentes perfiles crediticios.`
    },
    {
      question: `¿Cuánto tiempo toma recibir el dinero en ${city.name}?`,
      answer: `El tiempo de desembolso varía según el prestamista. Los préstamos en línea pueden ser aprobados y desembolsados en 24-48 horas si toda tu documentación está completa. Los bancos tradicionales en ${city.name} pueden tardar de 3 a 7 días hábiles. Algunos prestamistas fintech ofrecen transferencias el mismo día para solicitudes aprobadas antes del mediodía.`
    }
  ]

  // Schema.org Local Business + Financial Service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FinancialService',
    name: `Préstamos Personales en ${city.name}`,
    description: `Comparación de préstamos personales en ${city.name}, ${city.state}`,
    url: `https://loansai.com/mx/ciudades/${params.estado}/${params.ciudad}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.stateCode,
      addressCountry: 'MX'
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.stateCode,
      addressCountry: 'MX',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Préstamos Personales en ${city.name}`,
      itemListElement: city.popularLoanTypes.map((type, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: type,
          description: `${type} para residentes de ${city.name}`
        },
        position: index + 1
      }))
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'México',
        item: 'https://loansai.com/mx'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ciudades',
        item: 'https://loansai.com/mx/ciudades'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.state,
        item: `https://loansai.com/mx/estados/${params.estado}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: city.name,
        item: `https://loansai.com/mx/ciudades/${params.estado}/${params.ciudad}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Link href="/mx" className="hover:text-green-600">México</Link>
              <span>›</span>
              <Link href="/mx/ciudades" className="hover:text-green-600">Ciudades</Link>
              <span>›</span>
              <Link href={`/mx/estados/${params.estado}`} className="hover:text-green-600">{city.state}</Link>
              <span>›</span>
              <span className="text-green-900 font-semibold">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link
                href={`/mx/estados/${params.estado}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span>←</span>
                Volver a {parentRegion.name}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Préstamos en {city.name}, {city.stateCode}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mb-6">
              Conecta con {city.nearbyLenders}+ prestamistas locales y nacionales
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💵 Promedio: {city.averageLoanAmount}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📊 Score: {city.avgCreditScore}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                👥 Población: {city.population}
              </div>
            </div>
            <Link
              href="/mx/solicitar"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Solicitar Préstamo Gratis
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-bold text-green-900 mb-6">
                  Préstamos Personales en {city.name}: Tu Guía Completa {year}
                </h2>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p>
                    {city.localEconomy}
                  </p>
                  <p>
                    Los residentes de {city.name} tienen acceso a {city.nearbyLenders}+ instituciones 
                    financieras que ofrecen préstamos personales con montos desde $5,000 hasta $500,000 MXN. 
                    El monto promedio de préstamo en la ciudad es de {city.averageLoanAmount}, con tasas 
                    de interés que varían según el perfil crediticio del solicitante.
                  </p>
                  <p>
                    Las tasas de interés en {city.name} típicamente oscilan entre 15% y 80% anual, con 
                    un CAT (Costo Anual Total) que debe ser claramente divulgado por todos los prestamistas 
                    antes de la firma del contrato. Es importante comparar múltiples ofertas para encontrar 
                    la mejor tasa según tu situación financiera.
                  </p>
                </div>
              </div>

              {/* Local Economy & Statistics */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Datos Económicos de {city.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">INGRESO PROMEDIO</h3>
                    <p className="text-2xl font-bold text-green-600">{city.medianIncome}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">PRECIO PROMEDIO VIVIENDA</h3>
                    <p className="text-2xl font-bold text-blue-600">{city.medianHomePrice}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MONTO PROMEDIO PRÉSTAMO</h3>
                    <p className="text-2xl font-bold text-purple-600">{city.averageLoanAmount}</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">PRESTAMISTAS DISPONIBLES</h3>
                    <p className="text-2xl font-bold text-orange-600">{city.nearbyLenders}+</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Industrias Principales:</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.keyIndustries.map((industry) => (
                      <span
                        key={industry}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Popular Loan Types */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Tipos de Préstamos Más Populares en {city.name}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {city.popularLoanTypes.map((type, index) => (
                    <div key={type} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">#{index + 1}</div>
                      <h3 className="font-semibold text-gray-900">{type}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Regulations */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Regulaciones y Protecciones en {parentRegion.name}
                </h2>
                <div className="bg-white rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Organismo Regulador
                  </h3>
                  <p className="text-gray-700 mb-2">{parentRegion.regulatoryBody}</p>
                  <p className="text-sm text-gray-600">
                    Puedes presentar quejas o consultas en CONDUSEF al teléfono 55 5340 0999 (CDMX) 
                    o 800 999 8080 (resto del país), o visitar www.condusef.gob.mx
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    Protecciones Clave para Prestatarios
                  </h3>
                  <ul className="space-y-2">
                    {parentRegion.keyProtections.map((protection, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{protection}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Cómo Obtener un Préstamo Personal en {city.name}
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Completa el Formulario Rápido</h3>
                      <p className="text-gray-600">
                        Toma solo 2-3 minutos. Proporciona información básica sobre tus ingresos, 
                        empleo y monto deseado sin necesidad de papeleo inicial.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Conecta con Prestamistas en {city.name}</h3>
                      <p className="text-gray-600">
                        Nuestra IA te conecta instantáneamente con prestamistas que sirven a {city.name}, {city.stateCode}.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Compara Múltiples Ofertas</h3>
                      <p className="text-gray-600">
                        Revisa ofertas de préstamos de múltiples prestamistas y elige la mejor tasa y condiciones para ti.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recibe el Dinero Rápido</h3>
                      <p className="text-gray-600">
                        Muchos residentes de {city.name} reciben fondos en tan solo 24-48 horas después de la aprobación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-green-900 mb-6">
                    Préstamos Cerca de Ti
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explora ciudades cercanas con mercados de préstamos activos.
                  </p>
                  <div className="space-y-3">
                    {nearbyCities.map(({ city: nearbyCity, distanceMiles }) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/mx/ciudades/${nearbyCity.stateSlug}/${nearbyCity.slug}`}
                        className="flex flex-col rounded-lg border border-gray-200 p-4 hover:border-green-300 hover:shadow-sm transition"
                      >
                        <span className="text-lg font-semibold text-green-700 hover:text-green-900">
                          Préstamos en {nearbyCity.name}, {nearbyCity.stateCode}
                        </span>
                        <span className="text-sm text-gray-600 mt-1">
                          Aproximadamente {Math.round(distanceMiles)} millas · {nearbyCity.nearbyLenders}+ prestamistas · Promedio {nearbyCity.averageLoanAmount}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  Preguntas Frecuentes sobre Préstamos en {city.name}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="border border-gray-200 rounded-lg p-5 hover:border-green-300 transition"
                    >
                      <summary className="font-semibold text-gray-900 cursor-pointer">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">¿Listo para Solicitar?</h3>
                <p className="mb-6">
                  Conecta con {city.nearbyLenders}+ prestamistas que sirven a residentes de {city.name}.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Sin impacto en tu historial crediticio al comparar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Servicio 100% gratuito - sin cargos ocultos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Decisiones de aprobación rápidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Fondos en 1-2 días hábiles</span>
                  </li>
                </ul>
                <Link
                  href="/mx/solicitar"
                  className="block w-full bg-white text-green-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
                >
                  Iniciar Solicitud
                </Link>
              </div>

              {/* More Cities */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  Más Ciudades en {city.state}
                </h3>
                <Link
                  href={`/mx/estados/${params.estado}`}
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Ver todas las ciudades de {city.state} →
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Recursos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/mx/preguntas-frecuentes" className="text-green-600 hover:text-green-800">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link href="/mx/estados" className="text-green-600 hover:text-green-800">
                      Todos los Estados
                    </Link>
                  </li>
                  <li>
                    <Link href="/mx/ciudades" className="text-green-600 hover:text-green-800">
                      Todas las Ciudades
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.condusef.gob.mx" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 hover:text-green-800"
                    >
                      CONDUSEF ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Únete a Miles de Residentes de {city.name} que Obtienen Préstamos
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Rápido, gratuito y seguro. Compara ofertas de {city.nearbyLenders}+ prestamistas en minutos.
            </p>
            <Link
              href="/mx/solicitar"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Comenzar Ahora
            </Link>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-50 border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-sm text-gray-600 space-y-3">
              <p>
                <strong>Divulgación de afiliados:</strong> LoansAI México puede recibir compensación de 
                los prestamistas que aparecen en esta página. Esta compensación puede influir en cómo y 
                dónde aparecen los productos, pero no afecta nuestras recomendaciones editoriales.
              </p>
              <p>
                <strong>Ejemplo representativo para {city.name}:</strong> Un préstamo de {city.averageLoanAmount} 
                a 24 meses con una tasa de interés anual del 45% y un CAT del 55% resultaría en pagos 
                mensuales y un costo total que varía según el perfil crediticio. Las tasas reales dependen 
                del prestamista y están sujetas a aprobación de crédito.
              </p>
            </div>
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
