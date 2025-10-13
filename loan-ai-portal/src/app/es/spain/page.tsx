import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import SpainDisclosure from '@/components/spain/spain-disclosure'
import SpainFAQ, { type FAQItem } from '@/components/spain/spain-faq'
import StickyApplyButton from '@/components/spain/sticky-apply-button'
import { spainRegions } from '@/data/spain-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales España 2025 – Compara Ofertas Reguladas',
  description: 'Compara préstamos personales de prestamistas licenciados en España. Tasas competitivas, aprobación rápida, transparencia total. Encuentra las mejores ofertas en todas las comunidades autónomas.',
  keywords: 'prestamos personales españa, creditos, banco de españa, comparar prestamos, tasas interes, prestamos rapidos, prestamos online españa',
  openGraph: {
    title: 'Préstamos Personales España – Compara Ofertas de Prestamistas Licenciados',
    description: 'Plataforma de comparación de préstamos personales en España. Prestamistas regulados por Banco de España, transparencia completa, asistencia en español.',
    url: 'https://loansai.com/es/spain',
    siteName: 'LoansAI España',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/es/spain',
  },
}

const faqItems: FAQItem[] = [
  {
    question: '¿Qué es la TAE (Tasa Anual Equivalente) y cómo se calcula?',
    answer: 'La TAE representa el coste total del préstamo expresado como porcentaje anual. Incluye el tipo de interés, comisiones y todos los demás costes relacionados con el préstamo. Según las regulaciones del Banco de España, la TAE máxima permitida es del 27% para préstamos personales. La TAE te ayuda a comparar ofertas de diferentes prestamistas basándote en el coste real total.'
  },
  {
    question: '¿Cuánto tiempo tarda en recibir el dinero después de la aprobación?',
    answer: 'El tiempo depende del prestamista y la complejidad de las verificaciones. Los préstamos online pueden aprobarse en 24-48 horas, y el dinero se transfiere directamente a tu cuenta bancaria. Los préstamos bancarios tradicionales pueden tardar de 3 a 7 días laborables. La documentación completa y correcta acelera el proceso.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer: 'Generalmente necesitas: DNI o NIE válido, justificante de ingresos (nómina, declaración de la renta para autónomos), extracto bancario (últimos 3-6 meses), justificante de domicilio, y completar el cuestionario de solvencia. Algunos prestamistas pueden solicitar documentación adicional según la cantidad solicitada.'
  },
  {
    question: '¿Puedo obtener un préstamo con historial crediticio negativo?',
    answer: 'Sí, existen prestamistas que ofrecen préstamos a personas con historial crediticio menos favorable, aunque con tasas de interés más altas y cantidades menores. Es importante mejorar tu puntuación crediticia pagando a tiempo las deudas existentes y manteniendo un comportamiento financiero responsable. Algunos prestamistas también evalúan tu capacidad actual de pago, no solo el historial.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en España?',
    answer: 'Tienes derecho a: información clara y completa antes de firmar, periodo de desistimiento de 14 días sin penalizaciones, amortización anticipada (con comisión máxima del 1% sobre la cantidad amortizada anticipadamente), protección contra prácticas abusivas, confidencialidad de datos personales conforme al RGPD. Todos los préstamos deben respetar los límites de TAE establecidos por el Banco de España.'
  }
]

export default function SpainHomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Préstamos Personales España - LoansAI',
    description: 'Plataforma de comparación de préstamos personales en España. Conectamos usuarios con prestamistas licenciados y regulados por el Banco de España.',
    url: 'https://loansai.com/es/spain',
    areaServed: {
      '@type': 'Country',
      name: 'España'
    },
    availableLanguage: 'es',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI'
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
        item: 'https://loansai.com/es/spain'
      }
    ]
  }

  return (
    <>
      <Script
        id="spain-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="spain-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <SpainNavigation />
      <StickyApplyButton />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Préstamos Personales en España con IA
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Compara préstamos de prestamistas regulados por el Banco de España. 
              Encuentra las mejores tasas y condiciones en todas las comunidades autónomas.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Desde €1,000 hasta €75,000, recibe múltiples ofertas y obtén financiación tan pronto como el mismo día hábil.
              Sin coste, seguro y diseñado para todo tipo de perfil crediticio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-600 mb-8">
              <span className="flex items-center gap-1">
                <span className="text-2xl">⚡</span>
                <strong>Solicitud de 3 minutos</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-2xl">💰</span>
                <strong>€1,000 - €75,000</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-2xl">📊</span>
                <strong>Todo tipo de crédito</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-2xl">🔒</span>
                <strong>Seguridad bancaria</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-2xl">🏛️</span>
                <strong>Regulado por Banco de España</strong>
              </span>
            </div>

            <Link href="/apply">
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                Solicitar Ahora
              </Button>
            </Link>
          </section>

          <SpainDisclosure />

          {/* How It Works */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Cómo Funciona Nuestra Plataforma
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Solicitud Simple</h3>
                <p className="text-gray-700">
                  Completa nuestro formulario seguro en menos de tres minutos. Solo necesitas información básica 
                  de ingresos, empleo y monto deseado.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Análisis Inteligente</h3>
                <p className="text-gray-700">
                  Nuestra IA analiza más de 200 puntos de datos para identificar los prestamistas que mejor se 
                  ajustan a tu perfil y ofrecen tasas competitivas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Recibe tu Dinero</h3>
                <p className="text-gray-700">
                  Revisa ofertas personalizadas, elige la mejor opción y recibe los fondos tan pronto como el 
                  siguiente día hábil mediante transferencia bancaria.
                </p>
              </div>
            </div>
          </section>

          {/* Regions Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Préstamos por Comunidad Autónoma
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Explora información específica sobre préstamos en tu comunidad autónoma. Cada región tiene 
              características únicas en el mercado de préstamos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spainRegions.map((region) => (
                <Link key={region.slug} href={`/es/spain/regions/${region.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">{region.nameEs}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-3">{region.descriptionEs}</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-700">
                          <strong>Población:</strong> {region.population}
                        </p>
                        <p className="text-gray-700">
                          <strong>Préstamo promedio:</strong> {region.avgLoanAmount}
                        </p>
                        <p className="text-gray-700">
                          <strong>TAE promedio:</strong> {region.avgRate}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/es/spain/regions">
                <Button variant="outline" size="lg">
                  Ver Todas las Regiones
                </Button>
              </Link>
            </div>
          </section>

          {/* Features */}
          <section className="features mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Ventajas de LoansAI España
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">⚡</span>
                    Aprobación Rápida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Obtén preaprobación inmediata sin impactar tu puntuación crediticia. 
                    Miles de clientes reciben ofertas en menos de 3 minutos.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">🤖</span>
                    Comparación Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestra IA compara tu perfil con prestamistas regulados y destaca las opciones con 
                    mejores tasas, pagos mensuales accesibles y términos transparentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">🛡️</span>
                    Totalmente Regulado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Todos los prestamistas están regulados por el Banco de España. 
                    Cumplimiento total con Ley 16/2011 y normativas europeas de protección al consumidor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <SpainFAQ items={faqItems} />
        </div>
      </main>
      
      <SpainFooter />
    </>
  )
}
