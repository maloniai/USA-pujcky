import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import SpainDisclosure from '@/components/spain/spain-disclosure'
import SpainFAQ from '@/components/spain/spain-faq'
import SpainStickyApplyButton from '@/components/spain/sticky-apply-button'
import { spainRegions } from '@/data/spain-regions'
import { spainCities } from '@/data/spain-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales España 2025 – Compara Ofertas Autorizadas',
  description: 'Compara préstamos personales de prestamistas autorizados en España. Tasas competitivas, aprobación rápida, total transparencia. Encuentra las mejores ofertas en todas las comunidades autónomas.',
  keywords: 'préstamos personales españa, créditos, banco de españa, comparación préstamos, TAE, préstamos rápidos, préstamos online españa',
  openGraph: {
    title: 'Préstamos Personales España – Compara Ofertas de Prestamistas Autorizados',
    description: 'Plataforma de comparación de préstamos personales en España. Prestamistas autorizados por Banco de España, total transparencia, soporte en español.',
    url: 'https://loansai.com/sp',
    siteName: 'LoansAI España',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/sp',
  },
}

const faqItems = [
  {
    question: '¿Qué es la TAE (Tasa Anual Equivalente)?',
    answer: 'La TAE es el costo total del préstamo expresado como un porcentaje anual. Incluye el tipo de interés, comisiones y todos los demás costos asociados con el préstamo. Según la ley española, la TAE ayuda a comparar ofertas de diferentes prestamistas basándose en el costo real total.'
  },
  {
    question: '¿Qué tan rápido puedo recibir el dinero después de la aprobación?',
    answer: 'El tiempo depende del prestamista y la complejidad de la verificación. Los préstamos online pueden aprobarse en 24-48 horas, y el dinero se transfiere directamente a su cuenta bancaria. Los préstamos bancarios tradicionales pueden tardar de 3 a 7 días laborables. La documentación completa y correcta acelera el proceso.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer: 'Generalmente necesita: DNI o NIE válido, comprobante de ingresos (nómina, declaración de autónomos), extractos bancarios (últimos 3-6 meses), comprobante de domicilio y completar una evaluación de solvencia. Algunos prestamistas pueden requerir documentación adicional dependiendo del monto solicitado.'
  },
  {
    question: '¿Puedo obtener un préstamo con historial crediticio negativo?',
    answer: 'Sí, existen prestamistas que ofrecen préstamos a personas con historial crediticio menos favorable, pero con tasas de interés más altas y montos menores. Es importante mejorar su puntuación crediticia pagando deudas existentes a tiempo y manteniendo un comportamiento financiero responsable. Algunos prestamistas también evalúan su capacidad actual de pago, no solo el historial.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en España?',
    answer: 'Tiene derecho a: información clara y completa antes de firmar el contrato, periodo de desistimiento de 14 días sin penalizaciones, amortización anticipada (con comisión máxima del 1%), protección contra prácticas abusivas, confidencialidad de datos personales según RGPD. Todos los préstamos deben cumplir los límites de costos establecidos por el Banco de España.'
  }
]

export default function SpainHubPage() {
  // Get top 8 regions for display
  const topRegions = spainRegions.slice(0, 8)
  
  // Get featured cities
  const featuredCities = [
    spainCities.find(c => c.slug === 'madrid'),
    spainCities.find(c => c.slug === 'barcelona'),
    spainCities.find(c => c.slug === 'valencia'),
    spainCities.find(c => c.slug === 'sevilla'),
    spainCities.find(c => c.slug === 'malaga'),
    spainCities.find(c => c.slug === 'bilbao'),
    spainCities.find(c => c.slug === 'a-coruna'),
    spainCities.find(c => c.slug === 'alicante'),
  ].filter(Boolean)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI España - Comparación de Préstamos Personales',
    description: 'Plataforma de comparación de préstamos personales en España con prestamistas autorizados por Banco de España',
    url: 'https://loansai.com/sp',
    areaServed: {
      '@type': 'Country',
      name: 'España'
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
        name: 'España',
        item: 'https://loansai.com/sp'
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

      <SpainNavigation />
      <SpainStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇪🇸 Autorizado y regulado por el Banco de España
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Préstamos Personales en España
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compara ofertas de préstamos de más de 35 prestamistas autorizados por el Banco de España. 
              Total transparencia, tasas competitivas, aprobación rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/sp/apply">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Solicitar Ahora
                  </span>
                </Button>
              </Link>
              <Link href="#regiones">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver Comunidades Autónomas
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">35+</div>
                <div className="text-sm text-gray-600">Prestamistas</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">17</div>
                <div className="text-sm text-gray-600">Comunidades</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Ciudades</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-red-600">7.5%</div>
                <div className="text-sm text-gray-600">TAE Media</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Préstamos Personales en España – Guía Completa
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  En España, el mercado de préstamos personales está regulado por el <strong>Banco de España</strong>, 
                  lo que garantiza la protección del consumidor y prácticas justas. La plataforma LoansAI permite 
                  comparar ofertas de prestamistas autorizados en todas las 17 comunidades autónomas de España, 
                  ayudándote a encontrar las mejores condiciones adaptadas a tu situación financiera.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ya sea que necesites un préstamo para <strong>reunificación de deudas</strong>, 
                  <strong> reformas del hogar</strong>, <strong>compra de vehículo</strong>, o 
                  <strong> gastos imprevistos</strong>, nuestra plataforma te conecta con prestamistas 
                  de confianza que ofrecen tasas competitivas y condiciones transparentes.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">¿Por qué elegir LoansAI España?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% prestamistas autorizados por Banco de España</strong> – Todas las instituciones están verificadas y reguladas</li>
                  <li><strong>Comparación en tiempo real</strong> – Ofertas actuales de más de 35 prestamistas</li>
                  <li><strong>Conocimiento local del mercado</strong> – Soluciones específicas para cada comunidad autónoma</li>
                  <li><strong>Costos transparentes</strong> – Información completa sobre TAE, comisiones y tarifas</li>
                  <li><strong>Protección de datos</strong> – Cumplimiento del RGPD y máximos estándares de seguridad</li>
                  <li><strong>Soporte en español</strong> – Ayuda en tu idioma en cada etapa</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spanish Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulaciones de Préstamos en España
            </h2>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-red-600">🛡️</span>
                      Protecciones Clave para Consumidores
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>TAE regulada:</strong> Tasa máxima establecida por ley para préstamos al consumo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Periodo de desistimiento:</strong> 14 días para cancelar sin penalización</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Amortización anticipada:</strong> Derecho a pagar antes con comisión máxima del 1%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Divulgación completa:</strong> Todos los costos deben ser informados claramente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Verificación de solvencia:</strong> Evaluación obligatoria para proteger contra sobreendeudamiento</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-red-600">📋</span>
                      Requisitos Legales
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Autorización Banco de España:</strong> Todas las instituciones deben tener licencia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Ley de Crédito al Consumo:</strong> Protección según Ley 16/2011</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Transparencia de costos:</strong> Información completa sobre TAE y todas las tarifas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Contrato por escrito:</strong> Todas las condiciones deben estar documentadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span><strong>Normativa AML:</strong> Cumplimiento de regulaciones contra blanqueo de capitales</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Información importante:</strong> El Banco de España es el organismo supervisor español 
                    que garantiza la estabilidad del mercado financiero y la protección del consumidor. Todos los 
                    préstamos presentados en esta plataforma provienen de instituciones reguladas por el Banco de España.
                  </p>
                  <Link href="https://www.bde.es/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline text-sm mt-2 inline-block">
                    Visita el sitio oficial del Banco de España →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regions Section */}
        <section id="regiones" className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Préstamos por Comunidad Autónoma
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Selecciona tu comunidad autónoma para ver ofertas locales de préstamos y regulaciones
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRegions.map((region) => (
                <Link 
                  key={region.slug} 
                  href={`/sp/${region.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{region.nameEs}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {region.descriptionEs}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Población:</span>
                          <span className="font-semibold">{region.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Préstamo medio:</span>
                          <span className="font-semibold">{region.avgLoanAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">TAE media:</span>
                          <span className="font-semibold text-red-600">{region.avgRate}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500">Ciudades principales:</span>
                        <p className="text-xs text-gray-700 mt-1">
                          {region.majorCities.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Explora todas las 17 comunidades autónomas de España
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {spainRegions.slice(8).map((region) => (
                  <Link 
                    key={region.slug} 
                    href={`/sp/${region.slug}`}
                    className="text-red-600 hover:underline text-sm"
                  >
                    {region.nameEs}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section id="ciudades" className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Ciudades Populares
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Encuentra las mejores ofertas de préstamos en las principales ciudades de España
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCities.map((city) => (
                <Link 
                  key={city?.slug} 
                  href={`/sp/${city?.regionSlug}/${city?.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{city?.nameEs}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Población:</span>
                          <span className="font-semibold">{city?.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">TAE media:</span>
                          <span className="font-semibold text-red-600">{city?.avgRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prestamistas:</span>
                          <span className="font-semibold">{city?.lenderCount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Tipos de Préstamos Disponibles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    Préstamos Personales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Préstamos sin garantía para cualquier propósito. Montos de 1,000 a 75,000 €, 
                    plazo de pago de 6 a 84 meses.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Sin garantía requerida</li>
                    <li>✓ Decisión rápida (24-48h)</li>
                    <li>✓ Condiciones de pago flexibles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Reunificación de Deudas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Combina múltiples préstamos en uno con TAE más baja y cuota mensual reducida.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Cuotas mensuales más bajas</li>
                    <li>✓ Un solo pago en lugar de varios</li>
                    <li>✓ Potencialmente menor tasa de interés</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Reformas del Hogar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Préstamos especiales para reformas de vivienda, compra de materiales de construcción.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Montos de préstamo más altos</li>
                    <li>✓ Plazos de pago más largos</li>
                    <li>✓ Tasas competitivas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Préstamos para Vehículos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Financiación para compra de vehículo nuevo o usado con tasas de interés favorables.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Financiación hasta el 100% del valor</li>
                    <li>✓ Plazo de pago hasta 7 años</li>
                    <li>✓ Desembolso rápido de fondos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Preguntas Frecuentes
            </h2>
            <SpainFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg my-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para encontrar tu préstamo ideal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compara ofertas de más de 35 prestamistas autorizados en segundos
            </p>
            <Link href="/sp/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Comenzar Solicitud
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Comparación gratuita • Sin impacto en score crediticio • 100% online
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <SpainDisclosure />
        </section>
      </main>

      <SpainFooter />
    </>
  )
}
