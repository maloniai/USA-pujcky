import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoRegions } from '@/data/mexico-regions'
import { getMexicoCitiesByState } from '@/data/mexico-cities'

// Generate static params for all states
export async function generateStaticParams() {
  return mexicoRegions.map((region) => ({
    estado: region.slug,
  }))
}

// Generate metadata for each state
export async function generateMetadata({
  params,
}: {
  params: { estado: string }
}): Promise<Metadata> {
  const region = mexicoRegions.find((r) => r.slug === params.estado)
  
  if (!region) {
    return {
      title: 'Estado No Encontrado',
      description: 'La página del estado solicitado no pudo ser encontrada.',
    }
  }

  const year = new Date().getFullYear()
  const title = `Préstamos en ${region.name} – Comparar ${year}`
  const description = `Encuentra los mejores préstamos personales en ${region.name}. Compara tasas, requisitos y prestamistas regulados por CONDUSEF. Información actualizada sobre CAT, comisiones y protecciones del consumidor.`
  
  return {
    title,
    description,
    keywords: `prestamos ${region.name.toLowerCase()}, creditos ${region.stateCode.toLowerCase()}, prestamos personales ${region.name.toLowerCase()}, CONDUSEF ${region.name.toLowerCase()}`,
    openGraph: {
      title,
      description,
      url: `https://loansai.com/mx/estados/${params.estado}`,
      siteName: 'LoansAI México',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/mx/estados/${params.estado}`,
    },
  }
}

export default function EstadoPage({
  params,
}: {
  params: { estado: string }
}) {
  const region = mexicoRegions.find((r) => r.slug === params.estado)
  
  if (!region) {
    notFound()
  }

  const cities = getMexicoCitiesByState(params.estado)
  const year = new Date().getFullYear()

  // FAQs specific to the state
  const faqs = [
    {
      question: `¿Cuáles son los requisitos para obtener un préstamo en ${region.name}?`,
      answer: `Los requisitos básicos para obtener un préstamo personal en ${region.name} incluyen: ser mayor de 18 años, tener residencia en México (preferiblemente en ${region.name}), contar con identificación oficial vigente (INE/IFE), comprobante de ingresos, y comprobante de domicilio reciente. Algunos prestamistas pueden solicitar referencias personales o laborales adicionales.`
    },
    {
      question: `¿Cuál es el monto máximo que puedo solicitar en ${region.name}?`,
      answer: `Los montos disponibles varían según el prestamista y tu perfil crediticio, pero generalmente van desde $5,000 MXN hasta $500,000 MXN. El monto final dependerá de tu capacidad de pago, historial crediticio y la política del prestamista. El ingreso promedio en ${region.name} es de ${region.medianIncome}, lo cual los prestamistas considerarán al evaluar tu solicitud.`
    },
    {
      question: `¿Qué protecciones tengo como prestatario en ${region.name}?`,
      answer: `En ${region.name}, todos los prestamistas deben cumplir con las regulaciones de ${region.regulatoryBody}. Tus derechos incluyen: recibir información clara sobre el CAT (máximo ${region.maxAPR}), tener un período de arrepentimiento de 5 días hábiles, realizar pagos anticipados, estar protegido contra prácticas abusivas de cobranza, y acceder a mediación gratuita con CONDUSEF en caso de disputas.`
    },
  ]

  // Schema.org structured data
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${region.name}`,
    description: `Comparación de préstamos personales en ${region.name} con prestamistas regulados`,
    url: `https://loansai.com/mx/estados/${params.estado}`,
    areaServed: {
      '@type': 'State',
      name: region.name,
      containedIn: {
        '@type': 'Country',
        name: 'México'
      }
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
        name: 'Estados',
        item: 'https://loansai.com/mx/estados'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.name,
        item: `https://loansai.com/mx/estados/${params.estado}`
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
      <Script id="financial-service-schema" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/mx" className="hover:text-green-600">México</Link>
              <span>›</span>
              <Link href="/mx/estados" className="hover:text-green-600">Estados</Link>
              <span>›</span>
              <span className="text-green-900 font-semibold">{region.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link
                href="/mx/estados"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span>←</span>
                Volver a Estados
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Préstamos en {region.name}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mb-6">
              {region.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                👥 Población: {region.population}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💰 Ingreso promedio: {region.medianIncome}
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🏙️ {cities.length} ciudades
              </div>
            </div>
            <Link
              href="/mx/solicitar"
              className="inline-block mt-8 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Solicitar Préstamo Ahora
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              Préstamos Personales en {region.name}: Guía Completa {year}
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                {region.name} es {region.description.toLowerCase()} Con una población de {region.population} 
                y un ingreso promedio de {region.medianIncome}, el estado ofrece diversas opciones de 
                financiamiento personal para sus residentes.
              </p>
              <p>
                Los préstamos personales en {region.name} están disponibles a través de bancos tradicionales, 
                instituciones financieras no bancarias (SOFOMes) y plataformas en línea, todas reguladas por 
                {region.regulatoryBody}. Los montos típicamente varían desde $5,000 hasta $500,000 MXN, con 
                plazos de 6 a 60 meses, dependiendo del perfil crediticio del solicitante y las políticas del 
                prestamista.
              </p>
            </div>
          </div>

          {/* Regulations */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Regulaciones y Protecciones del Consumidor en {region.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  Organismo Regulador
                </h3>
                <p className="text-gray-700 mb-3">{region.regulatoryBody}</p>
                <p className="text-sm text-gray-600">
                  Todas las instituciones financieras que operan en {region.name} deben estar registradas 
                  y cumplir con las normativas de protección al consumidor establecidas a nivel federal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  CAT Máximo Permitido
                </h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{region.maxAPR}</p>
                <p className="text-sm text-gray-600">
                  El Costo Anual Total (CAT) incluye todos los costos del préstamo: intereses, comisiones, 
                  seguros y cualquier otro cargo. Verifica siempre el CAT antes de firmar.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                Protecciones Clave para Prestatarios
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {region.keyProtections.map((protection, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{protection}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cities */}
          {cities.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Préstamos por Ciudad en {region.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Explora información específica de préstamos en las principales ciudades de {region.name}.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/mx/ciudades/${params.estado}/${city.slug}`}
                    className="group block border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold text-green-900 mb-2">{city.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>👥</span>
                        <span>{city.population}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🏦</span>
                        <span>{city.nearbyLenders}+ prestamistas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💵</span>
                        <span>Promedio: {city.averageLoanAmount}</span>
                      </div>
                    </div>
                    <div className="mt-3 text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
                      Ver detalles →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Preguntas Frecuentes sobre Préstamos en {region.name}
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

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Solicitar un Préstamo en {region.name}?
            </h2>
            <p className="text-xl mb-6 text-green-100">
              Compara ofertas de prestamistas regulados y encuentra la mejor opción para ti.
            </p>
            <Link
              href="/mx/solicitar"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Solicitar Ahora
            </Link>
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
