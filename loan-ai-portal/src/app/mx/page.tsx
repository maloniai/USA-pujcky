import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import MexicoDisclosure from '@/components/mexico/mexico-disclosure'
import MexicoFAQ from '@/components/mexico/mexico-faq'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoRegions } from '@/data/mexico-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales México 2025 – Compara Ofertas',
  description: 'Compara préstamos personales de prestamistas regulados por CNBV y CONDUSEF en México. Tasas competitivas, aprobación rápida, 100% en línea. Encuentra las mejores ofertas en todo México.',
  keywords: 'prestamos personales mexico, creditos, CONDUSEF, CNBV, comparar prestamos, tasas de interes, creditos rapidos, prestamos en linea mexico',
  openGraph: {
    title: 'Préstamos Personales México – Compara Ofertas Reguladas',
    description: 'Plataforma de comparación de préstamos personales en México. Prestamistas regulados, transparencia completa, asistencia en español.',
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
    answer: 'El CAT (Costo Anual Total) es un indicador que refleja el costo total de un crédito, expresado como porcentaje anual. Incluye la tasa de interés, comisiones, seguros y todos los costos asociados. Según la regulación de la CNBV, todos los prestamistas deben informar el CAT antes de que firmes cualquier contrato. El CAT te permite comparar diferentes ofertas de préstamo de manera justa, ya que estandariza todos los costos en un solo número.'
  },
  {
    question: '¿Cuánto tiempo tarda en aprobarse un préstamo?',
    answer: 'El tiempo de aprobación varía según el prestamista y el tipo de préstamo. Los préstamos en línea pueden aprobarse en minutos a 24-48 horas. Los préstamos bancarios tradicionales suelen tardar 3-7 días hábiles. Una vez aprobado, el desembolso del dinero generalmente ocurre dentro de 1-3 días hábiles mediante transferencia bancaria directa a tu cuenta. Tener toda tu documentación completa y correcta acelera significativamente el proceso.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer: 'Los documentos básicos incluyen: identificación oficial vigente (INE/IFE o pasaporte), comprobante de domicilio reciente (no mayor a 3 meses), comprobantes de ingresos (recibos de nómina, declaraciones de impuestos si eres independiente), estados de cuenta bancarios (últimos 3 meses), RFC con homoclave, y CURP. Algunos prestamistas pueden solicitar documentación adicional dependiendo del monto solicitado y tu perfil crediticio. Los prestamistas en línea suelen requerir menos documentación física.'
  },
  {
    question: '¿Puedo obtener un préstamo si tengo mal historial crediticio?',
    answer: 'Sí, existen prestamistas que trabajan con personas con historial crediticio negativo o sin historial en Buró de Crédito. Sin embargo, es probable que enfrentes tasas de interés más altas y montos de préstamo más bajos. Algunos prestamistas especializados evalúan tu capacidad de pago actual además de tu historial. También existen opciones de préstamos con garantía que pueden ofrecer mejores condiciones. Lo más importante es trabajar en mejorar tu historial crediticio pagando a tiempo y manteniendo un buen comportamiento financiero.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en México?',
    answer: 'Como usuario de servicios financieros en México, tienes derechos protegidos por CONDUSEF: derecho a recibir información clara y completa antes de contratar, conocer el CAT exacto, liquidar anticipadamente tu préstamo (con máximo 20% de los intereses no devengados como comisión), recibir estado de cuenta sin costo, presentar quejas ante CONDUSEF, y protección de tus datos personales según la Ley Federal de Protección de Datos. También tienes derecho a solicitar la portabilidad de tu crédito a otra institución con mejores condiciones.'
  }
]

export default function MexicoHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI México - Comparación de Préstamos Personales',
    description: 'Plataforma de comparación de préstamos personales en México con prestamistas regulados por CNBV y CONDUSEF',
    url: 'https://loansai.com/mx',
    areaServed: {
      '@type': 'Country',
      name: 'México'
    },
    availableLanguage: 'es',
    serviceType: 'Comparación de Préstamos Personales',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
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
      }
    ]
  }

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

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Préstamos Personales en México',
    itemListElement: mexicoRegions.map((region, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'FinancialProduct',
        name: `Préstamos en ${region.nameEs}`,
        description: region.descriptionEs,
        category: 'Préstamo Personal',
        areaServed: {
          '@type': 'Place',
          name: region.nameEs
        }
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: region.avgLoanAmount,
        priceCurrency: 'MXN'
      }
    }))
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇲🇽 Regulado por CNBV y supervisado por CONDUSEF
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Préstamos Personales en México
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compara ofertas de más de 40 prestamistas regulados. Transparencia total, 
              tasas competitivas, aprobación en línea. Desde $3,000 hasta $500,000 MXN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/mx/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Solicitar Préstamo
                  </span>
                </Button>
              </Link>
              <Link href="/mx/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-green-600 text-green-700 hover:bg-green-50">
                  Explorar por Región
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Prestamistas Regulados</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">32</div>
                <div className="text-sm text-gray-600">Estados Cubiertos</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Ciudades Principales</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-1">128M</div>
                <div className="text-sm text-gray-600">Población Servida</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
              ¿Cómo Funciona?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Completa tu Solicitud</h3>
                <p className="text-gray-600">
                  Llena el formulario en línea en 3-5 minutos. Información básica sobre ti, 
                  tus ingresos y el monto que necesitas. 100% seguro y confidencial.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compara Ofertas</h3>
                <p className="text-gray-600">
                  Recibe múltiples ofertas personalizadas de prestamistas regulados. Compara 
                  tasas, plazos, CAT y elige la que mejor se adapte a tus necesidades.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recibe tu Dinero</h3>
                <p className="text-gray-600">
                  Una vez aprobado, el dinero se deposita directamente en tu cuenta bancaria. 
                  Algunas aprobaciones en el mismo día, la mayoría en 24-48 horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-4">
              Explora Préstamos por Región
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Información específica sobre préstamos, regulaciones y prestamistas para cada 
              región de México. Encuentra las mejores opciones en tu estado.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mexicoRegions.map((region) => (
                <Link key={region.slug} href={`/mx/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group border-green-200 hover:border-green-400">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-green-600 transition">
                        {region.nameEs}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span>{region.population}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span>{region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span>CAT: {region.avgRate}</span>
                        </p>
                      </div>
                      <div className="mt-4 text-green-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ver detalles →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/mx/regions">
                <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
                  Ver Todas las Regiones
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
                Marco Regulatorio en México
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Protección al Consumidor
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>CAT máximo regulado por tipo de crédito</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Derecho a liquidación anticipada (comisión máxima 20%)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Estado de cuenta mensual sin costo</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Transparencia total de costos y comisiones</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Protección de datos personales (LFPDPPP)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Autoridades Reguladoras
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>CNBV: Licenciamiento y supervisión de entidades financieras</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>CONDUSEF: Protección y defensa del usuario financiero</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Banco de México: Regulación del sistema financiero</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>SHCP: Normativa fiscal y financiera</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Cumplimiento con Ley Fintech para entidades digitales</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://www.condusef.gob.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2"
                >
                  Visita CONDUSEF para más información ↗
                </a>
                <span className="mx-3 text-gray-400">|</span>
                <a 
                  href="https://www.cnbv.gob.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2"
                >
                  Visita CNBV ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
              Tipos de Préstamos Disponibles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>💳</span>
                  Consolidación de Deudas
                </h3>
                <p className="text-gray-600 text-sm">
                  Unifica tus deudas de tarjetas de crédito y otros préstamos en un solo pago 
                  mensual con mejor tasa. CAT típico: 25% - 60%. Ahorra en intereses y simplifica 
                  tus finanzas.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🏠</span>
                  Mejoras al Hogar
                </h3>
                <p className="text-gray-600 text-sm">
                  Financia remodelaciones, reparaciones o ampliaciones de tu vivienda. Montos hasta 
                  $500,000 MXN. Plazos de 12 a 48 meses. Sin hipotecar tu propiedad para montos menores.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🚨</span>
                  Emergencias y Gastos Médicos
                </h3>
                <p className="text-gray-600 text-sm">
                  Aprobación rápida para gastos imprevistos o emergencias médicas. Algunos prestamistas 
                  ofrecen aprobación el mismo día. Desde $3,000 MXN para necesidades urgentes.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🚗</span>
                  Compra de Vehículo
                </h3>
                <p className="text-gray-600 text-sm">
                  Préstamos personales para compra de auto nuevo o usado, sin garantía vehicular. 
                  Más flexibilidad que crédito automotriz tradicional. Montos desde $50,000 MXN.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>💍</span>
                  Eventos y Celebraciones
                </h3>
                <p className="text-gray-600 text-sm">
                  Financia bodas, quinceañeras, graduaciones u otros eventos importantes. Plazos 
                  flexibles de 12 a 36 meses. Tasas competitivas para celebrar sin comprometer tus ahorros.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>💼</span>
                  Emprendimiento y Negocios
                </h3>
                <p className="text-gray-600 text-sm">
                  Capital para iniciar o expandir tu negocio. Préstamos personales con destino comercial. 
                  También opciones de crédito para PyMEs con condiciones especiales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Comparar Ofertas de Préstamo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Completa tu solicitud en 3 minutos y recibe ofertas personalizadas de prestamistas regulados.
            </p>
            <Link href="/mx/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-green-700 hover:bg-gray-100">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Comenzar Ahora - Es Gratis
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Sin impacto en tu Buró de Crédito • Respuesta rápida • 100% en línea
            </p>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
              Ciudades Principales
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Ciudad de México', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León',
                'Juárez', 'Zapopan', 'Querétaro', 'Mérida', 'Cancún', 'Aguascalientes'].map((city) => (
                <Link
                  key={city}
                  href={`/mx/cities`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:border-green-400 hover:shadow-md transition hover:bg-green-50"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/mx/cities">
                <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
                  Ver Todas las Ciudades (150+)
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <MexicoFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <MexicoDisclosure />
          </div>
        </section>
      </main>

      <MexicoFooter />
    </>
  )
}
