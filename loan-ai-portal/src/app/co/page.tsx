import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'
import ColombiaDisclosure from '@/components/colombia/colombia-disclosure'
import ColombiaFAQ, { type FAQItem } from '@/components/colombia/colombia-faq'
import StickyApplyButton from '@/components/colombia/sticky-apply-button'
import { colombiaRegions } from '@/data/colombia-regions'
import { colombiaCities } from '@/data/colombia-cities'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales Colombia 2025 – Compara Ofertas',
  description: 'Compara préstamos personales de prestamistas regulados por la Superintendencia Financiera en Colombia. Tasas competitivas, aprobación rápida, 100% en línea. Encuentra las mejores ofertas en todo Colombia.',
  keywords: 'prestamos personales colombia, creditos, superfinanciera, comparar prestamos, tasas de interes, creditos rapidos, prestamos en linea colombia',
  openGraph: {
    title: 'Préstamos Personales Colombia – Compara Ofertas Reguladas',
    description: 'Plataforma de comparación de préstamos personales en Colombia. Prestamistas regulados, transparencia completa, asistencia en español.',
    url: 'https://loansai.com/co',
    siteName: 'LoansAI Colombia',
    locale: 'es_CO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/co',
  },
}

const faqItems: FAQItem[] = [
  {
    question: '¿Qué es la tasa de usura y cómo me protege?',
    answer: 'La tasa de usura es el límite máximo de interés que pueden cobrar los prestamistas en Colombia, certificada mensualmente por la Superintendencia Financiera. Actualmente, ningún prestamista puede cobrar una tasa de interés superior al 48% efectivo anual (EA). Esta regulación protege a los consumidores de tasas excesivas y prácticas abusivas. Todos los prestamistas en nuestra plataforma cumplen estrictamente con estos límites.'
  },
  {
    question: '¿Cuánto tiempo tarda en aprobarse un préstamo?',
    answer: 'El tiempo de aprobación varía según el prestamista y el tipo de préstamo. Los préstamos en línea pueden aprobarse en minutos a 24-48 horas. Los préstamos bancarios tradicionales suelen tardar 3-7 días hábiles. Una vez aprobado, el desembolso del dinero generalmente ocurre dentro de 1-3 días hábiles mediante transferencia bancaria directa a su cuenta. Tener toda su documentación completa y correcta acelera significativamente el proceso.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer: 'Los documentos básicos incluyen: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina, declaración de renta si es independiente), extractos bancarios (últimos 3 meses), certificado laboral o RUT si es independiente, y referencias personales. Algunos prestamistas pueden solicitar documentación adicional dependiendo del monto solicitado y su perfil crediticio. Los prestamistas en línea suelen requerir menos documentación física.'
  },
  {
    question: '¿Puedo obtener un préstamo si tengo mal historial crediticio?',
    answer: 'Sí, existen prestamistas que trabajan con personas con historial crediticio negativo en DataCrédito, TransUnion o Cifin. Sin embargo, es probable que enfrente tasas de interés más altas y montos de préstamo más bajos. Algunos prestamistas especializados evalúan su capacidad de pago actual además de su historial. También existen opciones de préstamos con garantía (hipotecarios, prendarios) que pueden ofrecer mejores condiciones. Lo más importante es trabajar en mejorar su historial crediticio pagando a tiempo.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en Colombia?',
    answer: 'Como consumidor financiero en Colombia, tiene derechos protegidos por la Ley 1328 de 2009: derecho a recibir información clara, veraz y oportuna, conocer la tasa de interés efectiva anual, liquidar anticipadamente sin penalización, presentar reclamaciones ante la entidad y la Superintendencia Financiera, protección de sus datos personales según la Ley 1581 de 2012, y que no se le cobre por cobranza extrajudicial. También tiene derecho a ser tratado con respeto y dignidad.'
  }
]

export default function ColombiaHubPage() {
  // Get featured cities
  const featuredCities = [
    colombiaCities.find(c => c.slug === 'bogota'),
    colombiaCities.find(c => c.slug === 'medellin'),
    colombiaCities.find(c => c.slug === 'cali'),
    colombiaCities.find(c => c.slug === 'barranquilla'),
    colombiaCities.find(c => c.slug === 'bucaramanga'),
    colombiaCities.find(c => c.slug === 'cartagena'),
  ].filter(Boolean)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Colombia - Comparación de Préstamos Personales',
    description: 'Plataforma de comparación de préstamos personales en Colombia con prestamistas regulados por la Superintendencia Financiera',
    url: 'https://loansai.com/co',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia'
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
        name: 'Colombia',
        item: 'https://loansai.com/co'
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
    name: 'Préstamos Personales en Colombia',
    itemListElement: colombiaRegions.map((region) => ({
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
        priceCurrency: 'COP'
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

      <ColombiaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇴 Regulado por la Superintendencia Financiera de Colombia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Préstamos Personales en Colombia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compara ofertas de más de 50 prestamistas regulados. Transparencia total, 
              tasas competitivas, aprobación en línea. Desde $1,000,000 hasta $150,000,000 COP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/co/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Solicitar Préstamo
                  </span>
                </Button>
              </Link>
              <Link href="#departamentos">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-600 text-blue-700 hover:bg-blue-50">
                  Explorar por Departamento
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Prestamistas Regulados</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Departamentos Principales</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Ciudades Cubiertas</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">51M</div>
                <div className="text-sm text-gray-600">Población Servida</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Préstamos Personales en Colombia – Guía Completa 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  En Colombia, el mercado de préstamos personales está regulado por la{' '}
                  <strong>Superintendencia Financiera de Colombia</strong>, garantizando la protección 
                  de los consumidores y prácticas justas. La plataforma LoansAI le permite comparar 
                  ofertas de prestamistas licenciados en los principales departamentos de Colombia, 
                  ayudándole a encontrar las mejores condiciones adaptadas a su situación financiera.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ya sea que necesite un préstamo para <strong>consolidación de deudas</strong>,{' '}
                  <strong>mejoras del hogar</strong>, <strong>compra de vehículo</strong> o{' '}
                  <strong>gastos imprevistos</strong>, nuestra plataforma le conecta con prestamistas 
                  de confianza que ofrecen tasas competitivas y términos transparentes.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">¿Por qué elegir LoansAI Colombia?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% prestamistas regulados</strong> – Todas las instituciones están verificadas y reguladas</li>
                  <li><strong>Comparación en tiempo real</strong> – Ofertas actuales de más de 50 prestamistas</li>
                  <li><strong>Conocimiento local del mercado</strong> – Soluciones específicas para cada departamento</li>
                  <li><strong>Costos transparentes</strong> – Información completa sobre tasas de interés, comisiones y cargos</li>
                  <li><strong>Protección de datos</strong> – Cumplimiento con la Ley 1581 de 2012 y estándares de seguridad</li>
                  <li><strong>Soporte en español</strong> – Asistencia en su idioma en cada paso del proceso</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              ¿Cómo Funciona?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete su Solicitud</h3>
                <p className="text-gray-600">
                  Llene el formulario en línea en 3-5 minutos. Información básica sobre usted, 
                  sus ingresos y el monto que necesita. 100% seguro y confidencial.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Ofertas</h3>
                <p className="text-gray-600">
                  Reciba múltiples ofertas personalizadas de prestamistas regulados. Compare 
                  tasas, plazos y elija la que mejor se adapte a sus necesidades.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reciba su Dinero</h3>
                <p className="text-gray-600">
                  Una vez aprobado, el dinero se deposita directamente en su cuenta bancaria. 
                  Algunas aprobaciones el mismo día, la mayoría en 24-48 horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departamentos" className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Explora Préstamos por Departamento
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Información específica sobre préstamos, regulaciones y prestamistas para cada 
              departamento de Colombia. Encuentre las mejores opciones en su región.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colombiaRegions.map((region) => (
                <Link key={region.slug} href={`/co/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group border-blue-200 hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition">
                        {region.nameEs}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{region.descriptionEs}</p>
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
                          <span>Tasa: {region.avgRate}</span>
                        </p>
                      </div>
                      <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ver detalles →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section id="ciudades" className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Ciudades Principales
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Encuentre las mejores ofertas de préstamos en las ciudades más grandes de Colombia
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCities.map((city) => (
                <Link 
                  key={city?.slug} 
                  href={`/co/${city?.regionSlug}/${city?.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-blue-200 hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-lg">{city?.nameEs}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Población:</span>
                          <span className="font-semibold">{city?.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tasa promedio:</span>
                          <span className="font-semibold text-blue-600">{city?.avgRate}</span>
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

        {/* Regulations */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Marco Regulatorio en Colombia
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Protección al Consumidor
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Tasa de interés máxima del 48% EA (tasa de usura)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Derecho a liquidación anticipada sin penalización</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Periodo de reflexión de 5 días hábiles</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Transparencia total de costos y comisiones</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Protección de datos personales (Ley 1581 de 2012)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Autoridades Reguladoras
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Superintendencia Financiera: Supervisión de entidades</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Banco de la República: Regulación del sistema financiero</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Ley 1328 de 2009: Protección al consumidor financiero</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Decreto 2555 de 2010: Sector financiero</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>SARLAFT: Prevención de lavado de activos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Para más información sobre sus derechos:</p>
                <a
                  href="https://www.superfinanciera.gov.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Visita la Superintendencia Financiera →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
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
                    Préstamos sin garantía para cualquier propósito. Montos desde $1,000,000 hasta 
                    $150,000,000 COP, plazo de 6-84 meses.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Sin garantía requerida</li>
                    <li>✓ Decisión rápida (24-48h)</li>
                    <li>✓ Términos de pago flexibles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Consolidación de Deudas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Combine múltiples préstamos en uno con menor tasa de interés y cuota mensual.
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
                    Mejoras del Hogar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Préstamos especiales para renovación de vivienda, reparaciones o compra de materiales.
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
                    Préstamos Vehiculares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Financiamiento para compra de vehículos nuevos o usados con tasas favorables.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>✓ Financiamiento hasta 100% del valor</li>
                    <li>✓ Plazo de pago hasta 7 años</li>
                    <li>✓ Desembolso rápido de fondos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Preguntas Frecuentes
            </h2>
            <ColombiaFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para encontrar el préstamo ideal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare ofertas de más de 50 prestamistas regulados en segundos
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 bg-white text-blue-700 hover:bg-gray-100">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Comenzar Solicitud
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Comparación gratuita • Sin impacto en su score crediticio • 100% en línea
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <ColombiaDisclosure />
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
