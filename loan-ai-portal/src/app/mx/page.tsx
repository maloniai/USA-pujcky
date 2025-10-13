import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoRegions, totalMexicoRegions, totalMexicoCities } from '@/data/mexico-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales México 2025 – Compara Ofertas Reguladas',
  description: 'Compara préstamos personales de instituciones reguladas por CONDUSEF en México. Tasas competitivas, aprobación rápida, transparencia total. Encuentra las mejores opciones en todos los estados.',
  keywords: 'prestamos personales mexico, creditos, CONDUSEF, comparar prestamos, tasas de interes, prestamos rapidos, prestamos en linea mexico, CAT',
  openGraph: {
    title: 'Préstamos Personales México – Compara Ofertas Reguladas por CONDUSEF',
    description: 'Plataforma de comparación de préstamos personales en México. Instituciones reguladas, transparencia total, asistencia en español mexicano.',
    url: 'https://loansai.com/mx',
    siteName: 'LoansAI México',
    locale: 'es_MX',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/mx',
  },
}

const faqItems = [
  {
    question: '¿Qué es el CAT y cómo se calcula?',
    answer: 'El CAT (Costo Anual Total) es el costo total del crédito expresado como porcentaje anual. Incluye la tasa de interés, comisiones y todos los demás costos relacionados con el préstamo. De acuerdo con las regulaciones de CONDUSEF, el CAT máximo permitido es del 100% para créditos al consumo. El CAT te ayuda a comparar ofertas de diferentes prestamistas basándote en el costo real total.'
  },
  {
    question: '¿Qué tan rápido puedo recibir el dinero después de la aprobación?',
    answer: 'El tiempo depende del prestamista y la complejidad de las verificaciones. Los préstamos en línea pueden ser aprobados en 24-48 horas, y el dinero se deposita directamente en tu cuenta bancaria. Los préstamos bancarios tradicionales pueden tardar de 3 a 7 días hábiles. La documentación completa y correcta acelera el proceso.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer: 'Generalmente necesitas: identificación oficial vigente (INE/IFE o pasaporte), comprobante de ingresos (recibo de nómina, declaración de impuestos para trabajadores independientes), estado de cuenta bancario (últimos 3-6 meses), comprobante de domicilio reciente, y completar el cuestionario de capacidad de pago. Algunos prestamistas pueden solicitar documentos adicionales según el monto solicitado.'
  },
  {
    question: '¿Puedo obtener un préstamo con historial crediticio negativo?',
    answer: 'Sí, existen prestamistas que ofrecen préstamos a personas con historial crediticio menos favorable, aunque con tasas de interés más altas y montos menores. Es importante mejorar tu puntuación crediticia pagando a tiempo tus deudas existentes y manteniendo un comportamiento financiero responsable. Algunos prestamistas evalúan también tu capacidad actual de pago, no solo el historial.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en México?',
    answer: 'Tienes derecho a: información clara y completa antes de firmar, período de arrepentimiento de 5 días hábiles sin penalización, pago anticipado (con comisión máxima del 2% sobre el saldo insoluto en los primeros 12 meses y 1.5% después), protección contra prácticas abusivas de cobranza, confidencialidad de datos personales conforme a la Ley Federal de Protección de Datos. Todos los préstamos deben respetar los límites de CAT establecidos por las autoridades financieras.'
  }
]

export default function MexicoHubPage() {
  // Schema.org structured data for Financial Service
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI México - Comparación de Préstamos Personales',
    description: 'Plataforma de comparación de préstamos personales en México con instituciones reguladas por CONDUSEF',
    url: 'https://loansai.com/mx',
    areaServed: {
      '@type': 'Country',
      name: 'México'
    },
    availableLanguage: 'es-MX',
    serviceType: 'Comparación de Préstamos Personales',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Préstamos Personales en México',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LoanOrCredit',
            name: 'Préstamos Personales',
            description: 'Préstamos personales para mexicanos de $5,000 a $500,000 MXN'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'LoanOrCredit',
            name: 'Consolidación de Deudas',
            description: 'Consolidación de deudas con mejores tasas'
          }
        }
      ]
    }
  }

  // Breadcrumb schema
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
      }
    ]
  }

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
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
      
      <main className="flex-1 bg-slate-50">
        {/* Hero Section */}
        <header className="border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              México • Plataforma de Préstamos con IA
            </p>
            <h1 className="mt-3 text-4xl font-bold text-green-900 md:text-5xl">
              Compara Préstamos Personales en México con IA
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-green-900/80 md:text-xl">
              Encuentra las mejores opciones de préstamos personales de instituciones reguladas por CONDUSEF. 
              Compara CAT, comisiones y plazos. Nuestra IA prioriza ofertas transparentes y te alerta sobre 
              costos ocultos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/mx/solicitar"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                Solicitar Préstamo Ahora
              </Link>
              <Link
                href="#regional-guides"
                className="inline-flex items-center justify-center rounded-md border border-green-600 px-8 py-3 text-base font-semibold text-green-600 shadow-sm transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                Ver Estados
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-green-200 bg-white/80 p-4 text-green-900">
                <p className="text-2xl font-bold">{totalMexicoRegions} estados</p>
                <p className="text-sm">Cobertura en los principales estados de México</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-white/80 p-4 text-green-900">
                <p className="text-2xl font-bold">{totalMexicoCities}+ ciudades</p>
                <p className="text-sm">Prestamistas en las principales ciudades del país</p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-white/80 p-4 text-green-900">
                <p className="text-2xl font-bold">100% regulado</p>
                <p className="text-sm">Solo instituciones supervisadas por CONDUSEF</p>
              </div>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-4">
                Préstamos Personales en México: Guía Completa 2025
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  En México, los préstamos personales son una herramienta financiera regulada que permite a las 
                  personas obtener financiamiento para diversos propósitos como consolidación de deudas, mejoras 
                  al hogar, educación, emergencias médicas o cualquier necesidad personal. Las instituciones 
                  financieras que ofrecen estos productos están supervisadas por la CONDUSEF (Comisión Nacional 
                  para la Protección y Defensa de los Usuarios de Servicios Financieros) y deben cumplir con 
                  estrictas regulaciones.
                </p>
                <p>
                  El mercado mexicano de préstamos personales ofrece montos desde $5,000 MXN hasta $500,000 MXN, 
                  con plazos que van de 6 meses a 60 meses. Las tasas de interés varían según el perfil crediticio 
                  del solicitante, típicamente entre 15% y 80% anual, con un CAT (Costo Anual Total) que incluye 
                  todos los costos asociados al crédito.
                </p>
              </div>
            </div>

            {/* Quick Navigation Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/mx/estados"
                className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700">
                  🗺️
                </span>
                <h3 className="text-xl font-semibold text-green-900">Préstamos por Estado</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Explora regulaciones estatales, límites de CAT y disponibilidad de prestamistas en cada estado.
                </p>
              </Link>
              
              <Link
                href="/mx/ciudades"
                className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700">
                  🏙️
                </span>
                <h3 className="text-xl font-semibold text-green-900">Préstamos por Ciudad</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Encuentra prestamistas locales, tasas promedio y opciones específicas en tu ciudad.
                </p>
              </Link>
              
              <Link
                href="/mx/preguntas-frecuentes"
                className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700">
                  ❓
                </span>
                <h3 className="text-xl font-semibold text-green-900">Preguntas Frecuentes</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Respuestas a tus dudas sobre CAT, requisitos, plazos y derechos del prestatario.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
              Marco Regulatorio en México
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Supervisión CONDUSEF</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Todas las instituciones deben estar registradas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Transparencia obligatoria en CAT y comisiones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Protección contra prácticas abusivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Derecho a presentar quejas y reclamaciones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Límites y Protecciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>CAT máximo del 100% para créditos al consumo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Derecho a liquidación anticipada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Período de arrepentimiento de 5 días hábiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Límites en comisiones por mora</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Derechos del Prestatario</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Información clara antes de firmar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Consulta gratuita a Buró de Crédito anualmente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Protección de datos personales (LFPDPPP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Acceso a mediación gratuita con CONDUSEF</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regional Guides */}
        <section id="regional-guides" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-green-900 mb-2">
              Préstamos Personales por Estado
            </h2>
            <p className="text-gray-600 mb-8">
              Selecciona tu estado para ver información específica sobre regulaciones locales, prestamistas 
              disponibles y tasas promedio.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mexicoRegions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/mx/estados/${region.slug}`}
                  className="group block rounded-xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-green-900">{region.name}</h3>
                    <span className="text-xs font-semibold text-gray-500">{region.stateCode}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{region.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Población: {region.population}</span>
                    <span className="text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
                      Ver detalles →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
              Preguntas Frecuentes sobre Préstamos en México
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition"
                >
                  <summary className="font-semibold text-lg cursor-pointer text-green-900">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/mx/preguntas-frecuentes"
                className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver Todas las Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Solicitar tu Préstamo Personal?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Compara ofertas de múltiples prestamistas regulados por CONDUSEF. 
              Proceso rápido, seguro y 100% en línea.
            </p>
            <Link
              href="/mx/solicitar"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Solicitar Préstamo Ahora
            </Link>
            <p className="mt-6 text-sm text-green-100">
              Sin impacto en tu historial crediticio al comparar ofertas • Respuesta en minutos
            </p>
          </div>
        </section>
      </main>

      <MexicoFooter />
    </>
  )
}
