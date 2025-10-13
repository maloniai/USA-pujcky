import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import SpainDisclosure from '@/components/spain/spain-disclosure'
import SpainFAQ, { type FAQItem } from '@/components/spain/spain-faq'
import SpainStickyApplyButton from '@/components/spain/sticky-apply-button'
import { getSpainRegionBySlug } from '@/data/spain-regions'
import { getSpainCityBySlug } from '@/data/spain-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getSpainCityBySlug(params.city)
  const region = getSpainRegionBySlug(params.region)
  
  if (!city || !region) {
    return {
      title: 'Ciudad no encontrada',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Préstamos ${city.nameEs}, ${region.nameEs} – Compara ${currentYear}`,
    description: `${city.descriptionEs} TAE media ${city.avgRate}. Compara ofertas de ${city.lenderCount}+ prestamistas autorizados por Banco de España en ${city.nameEs}.`,
    keywords: `préstamos ${city.nameEs}, créditos ${city.name}, ${region.name}, TAE, prestamistas ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/sp/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getSpainCityBySlug(params.city)
  const region = getSpainRegionBySlug(params.region)
  
  if (!city || !region || city.regionSlug !== params.region) {
    notFound()
  }

  const nearbyCities = city.nearbyCities
    .map((nearbySlug) => getSpainCityBySlug(nearbySlug.toLowerCase().replace(/\s+/g, '-')))
    .filter(Boolean)
    .slice(0, 6)

  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `¿Qué documentos se requieren para solicitar un préstamo en ${city.nameEs}?`,
      answer: `En ${city.nameEs}, los documentos típicamente requeridos son: DNI o NIE válido o pasaporte, comprobante de ingresos (nómina, extractos bancarios), comprobante de domicilio, número de la Seguridad Social y número de cuenta bancaria. Algunos prestamistas pueden requerir documentación adicional dependiendo del monto y propósito del préstamo.`
    },
    {
      question: `¿Cuáles son las tasas de interés de préstamos en ${city.nameEs}?`,
      answer: `La TAE media en ${city.nameEs} es aproximadamente ${city.avgRate}. Las tasas reales generalmente varían de 5% a 30% dependiendo del prestamista, tu score crediticio, monto del préstamo y plazo de pago. Los clientes con alto score crediticio y garantías pueden calificar para tasas más bajas. Siempre compara la TAE (Tasa Anual Equivalente) entre prestamistas para obtener una imagen completa de los costos.`
    },
    {
      question: `¿Puedo obtener un préstamo online en ${city.nameEs}?`,
      answer: `¡Sí! La mayoría de los prestamistas en ${city.nameEs} ofrecen solicitudes online con decisión rápida. El proceso típicamente incluye: completar un formulario online seguro, enviar documentos electrónicamente, recibir una decisión en 24-48 horas y desembolso de fondos directamente en tu cuenta bancaria. Los préstamos online son convenientes y a menudo tienen tiempos de aprobación más rápidos que las sucursales tradicionales.`
    },
    {
      question: `¿Cuántos prestamistas operan en ${city.nameEs}?`,
      answer: `En ${city.nameEs} hay aproximadamente ${city.lenderCount} prestamistas autorizados disponibles, incluyendo bancos nacionales, instituciones no bancarias y plataformas de préstamos online. Cada uno ofrece diferentes productos y tasas. Usar una plataforma de comparación como LoansAI ayuda a encontrar la mejor oferta adaptada a tu situación.`
    },
    {
      question: `¿Qué tipos de préstamos son populares en ${city.nameEs}?`,
      answer: `Los tipos de préstamos más solicitados en ${city.nameEs} son: ${city.topLoanTypesEs.join(', ')}. Cada tipo de préstamo tiene diferentes términos, tasas y requisitos. Algunos prestamistas se especializan en tipos específicos de préstamos, por lo que vale la pena explorar opciones adaptadas a tus necesidades.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${city.nameEs}`,
    description: city.descriptionEs,
    url: `https://loansai.com/sp/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.nameEs,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: region.nameEs
      }
    },
    availableLanguage: 'es'
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: region.nameEs,
        item: `https://loansai.com/sp/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.nameEs,
        item: `https://loansai.com/sp/${params.region}/${params.city}`
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
    name: `Préstamos Personales en ${city.nameEs}`,
    description: `Ofertas de préstamos de ${city.lenderCount}+ prestamistas autorizados`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: 'Préstamo Personal',
          loanType: 'Personal Loan',
          currency: 'EUR'
        }
      }
    ]
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

      <SpainNavigation />
      <SpainStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/sp" className="hover:text-red-600">España</Link>
            <span>→</span>
            <Link href={`/sp/${params.region}`} className="hover:text-red-600">{region.nameEs}</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{city.nameEs}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📍 {city.nameEs}, {region.nameEs}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Préstamos en {city.nameEs}, {region.nameEs}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {city.descriptionEs} Accede a préstamos personales de {city.lenderCount}+ prestamistas 
              autorizados por el Banco de España con tasas competitivas y proceso de solicitud rápido. 
              La TAE media en {city.nameEs} es {city.avgRate}, con montos típicos de préstamo alrededor 
              de {city.avgLoanAmount}.
            </p>
            <Link href="/sp/apply">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Solicitar Préstamo en {city.nameEs}
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* City Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{city.population}</div>
                    <div className="text-sm text-gray-600">Población</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{city.avgLoanAmount}</div>
                    <div className="text-sm text-gray-600">Préstamo Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{city.avgRate}</div>
                    <div className="text-sm text-gray-600">TAE Media</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{city.lenderCount}+</div>
                    <div className="text-sm text-gray-600">Prestamistas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* City Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Préstamos Personales en {city.nameEs} – Información Local</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Sobre los Préstamos en {city.nameEs}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Los residentes de {city.nameEs} tienen acceso a una amplia selección de productos 
                    de préstamo de prestamistas autorizados por el Banco de España. El mercado local 
                    de préstamos en {city.nameEs} ofrece tasas competitivas con una TAE media de {city.avgRate}, 
                    ligeramente {parseFloat(city.avgRate) > 8 ? 'superior' : 'inferior'} a la media 
                    nacional del 7.5-8.5%.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ya sea que necesites financiación para gastos personales, reunificación de deudas, 
                    reformas del hogar o compra de vehículo, encontrarás prestamistas especializados 
                    que entienden las necesidades únicas del mercado de {city.nameEs}. Con aproximadamente 
                    {city.lenderCount} prestamistas activos en el área, tienes muchas opciones para 
                    comparar y elegir.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Tipos de Préstamos Populares en {city.nameEs}</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.topLoanTypesEs.map((type, index) => (
                      <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold mb-2 text-gray-900">💡 Consejo Local</h4>
                  <p className="text-sm text-gray-700">
                    El score crediticio promedio en {city.nameEs} es aproximadamente {city.avgCreditScore}. 
                    Si tu puntuación está por encima de este promedio, probablemente califiques para 
                    las tasas más competitivas. Mantén un buen historial crediticio pagando tus deudas 
                    a tiempo y manteniendo un bajo ratio de utilización de crédito.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations Snippet */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Protección del Consumidor en {city.nameEs}
            </h2>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Como residente de {city.nameEs}, estás protegido por las regulaciones del Banco de España 
                  y la legislación española de crédito al consumo. Estos son tus derechos clave:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Periodo de desistimiento de 14 días:</strong> Puedes cancelar tu préstamo sin penalización dentro de 14 días</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700"><strong>TAE regulada:</strong> Tasas máximas de interés establecidas por ley para protegerte de prácticas abusivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Derecho a amortización anticipada:</strong> Paga tu préstamo antes con comisión máxima del 1%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Divulgación completa:</strong> Todos los costos y términos deben ser claramente explicados antes de firmar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Protección de datos RGPD:</strong> Tu información personal está protegida por las leyes de privacidad de la UE</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Préstamos cerca de {city.nameEs}
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Explora opciones de préstamos en ciudades cercanas
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyCities.map((nearbyCity) => (
                  <Link 
                    key={nearbyCity?.slug} 
                    href={`/sp/${nearbyCity?.regionSlug}/${nearbyCity?.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-base">{nearbyCity?.nameEs}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Población:</span>
                            <span className="font-semibold">{nearbyCity?.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">TAE media:</span>
                            <span className="font-semibold text-red-600">{nearbyCity?.avgRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prestamistas:</span>
                            <span className="font-semibold">{nearbyCity?.lenderCount}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-6">
                <Link href={`/sp/${params.region}`} className="text-red-600 hover:underline">
                  Ver todas las ciudades en {region.nameEs} →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Preguntas Frecuentes sobre Préstamos en {city.nameEs}
            </h2>
            <SpainFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0">
              <CardContent className="pt-12 pb-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Solicita tu Préstamo en {city.nameEs}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Compara {city.lenderCount}+ prestamistas autorizados y obtén las mejores tasas
                </p>
                <Link href="/sp/apply">
                  <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                    Comenzar Solicitud
                  </Button>
                </Link>
                <p className="text-sm mt-4 opacity-75">
                  Proceso rápido y seguro • TAE desde {city.avgRate} • Decisión en 24-48h
                </p>
              </CardContent>
            </Card>
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
