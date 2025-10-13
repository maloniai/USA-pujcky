import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'
import ColombiaDisclosure from '@/components/colombia/colombia-disclosure'
import ColombiaFAQ, { type FAQItem } from '@/components/colombia/colombia-faq'
import StickyApplyButton from '@/components/colombia/sticky-apply-button'
import { getColombiaRegionBySlug } from '@/data/colombia-regions'
import { getColombiaCityBySlug, colombiaCities } from '@/data/colombia-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string; city: string }
}

export async function generateStaticParams() {
  return colombiaCities.map((city) => ({
    region: city.regionSlug,
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getColombiaCityBySlug(params.city)
  const region = getColombiaRegionBySlug(params.region)
  
  if (!city || !region) {
    return {
      title: 'Ciudad no encontrada',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Préstamos en ${city.nameEs}, ${region.nameEs} – Compara ${currentYear}`,
    description: `${city.descriptionEs} Tasa promedio ${city.avgRate}. Compare ofertas de ${city.lenderCount} prestamistas regulados en ${city.nameEs}, Colombia.`,
    keywords: `prestamos ${city.nameEs}, creditos ${city.name}, ${region.name}, tasas, prestamistas ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/co/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getColombiaCityBySlug(params.city)
  const region = getColombiaRegionBySlug(params.region)
  
  if (!city || !region || city.regionSlug !== params.region) {
    notFound()
  }

  const nearbyCities = city.nearbyCities
    .map((nearbySlug) => getColombiaCityBySlug(nearbySlug.toLowerCase().replace(/\s+/g, '-')))
    .filter(Boolean)
    .slice(0, 6)

  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `¿Qué documentos necesito para solicitar un préstamo en ${city.nameEs}?`,
      answer: `En ${city.nameEs}, los documentos típicamente requeridos son: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina, declaración de renta para independientes), extractos bancarios (últimos 3 meses), certificado laboral o RUT si es trabajador independiente, y referencias personales. Algunos prestamistas pueden solicitar documentación adicional dependiendo del monto y el propósito del préstamo. Los prestamistas en línea suelen tener requisitos más flexibles.`
    },
    {
      question: `¿Cuáles son las tasas de interés en ${city.nameEs}?`,
      answer: `La tasa promedio en ${city.nameEs} es aproximadamente ${city.avgRate}. Las tasas reales típicamente varían entre 18% y 48% EA dependiendo del prestamista, su puntaje de crédito, el monto del préstamo y el plazo de pago. Los clientes con buen historial crediticio y garantías pueden calificar para tasas más bajas. Siempre compare la tasa efectiva anual (EA) entre prestamistas para obtener el panorama completo de los costos. Ningún prestamista puede exceder la tasa de usura certificada por la Superintendencia Financiera.`
    },
    {
      question: `¿Puedo obtener un préstamo en línea en ${city.nameEs}?`,
      answer: `¡Sí! La mayoría de los prestamistas en ${city.nameEs} ofrecen solicitudes en línea con decisión rápida. El proceso generalmente incluye: completar un formulario seguro en línea, cargar documentos electrónicamente, recibir una decisión en 24-48 horas, y obtener el desembolso directamente en su cuenta bancaria. Los préstamos en línea son convenientes y a menudo tienen tiempos de aprobación más rápidos que las sucursales tradicionales. Todos los prestamistas en línea están regulados igual que los bancos tradicionales.`
    },
    {
      question: `¿Cuántos prestamistas operan en ${city.nameEs}?`,
      answer: `En ${city.nameEs} hay aproximadamente ${city.lenderCount} prestamistas regulados disponibles, incluyendo bancos nacionales, cooperativas financieras, compañías de financiamiento y plataformas de préstamos en línea. Cada uno ofrece diferentes productos y tasas. Usar una plataforma de comparación como LoansAI le ayuda a encontrar la mejor oferta adaptada a su situación, comparando múltiples opciones en un solo lugar.`
    },
    {
      question: `¿Qué tipos de préstamos son populares en ${city.nameEs}?`,
      answer: `Los tipos de préstamos más solicitados en ${city.nameEs} son: ${city.topLoanTypesEs.join(', ')}. Cada tipo de préstamo tiene diferentes términos, tasas y requisitos. Algunos prestamistas se especializan en tipos específicos de préstamos, por lo que vale la pena explorar opciones adaptadas a sus necesidades. La mejor opción depende de su situación financiera, propósito del préstamo y capacidad de pago.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${city.nameEs}`,
    description: city.descriptionEs,
    url: `https://loansai.com/co/${params.region}/${params.city}`,
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
        name: 'Colombia',
        item: 'https://loansai.com/co'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.nameEs,
        item: `https://loansai.com/co/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.nameEs,
        item: `https://loansai.com/co/${params.region}/${params.city}`
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
      <Script id="schema-city" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <ColombiaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">
              Colombia
            </Link>
            <span>›</span>
            <Link href={`/co/${params.region}`} className="hover:text-blue-600">
              {region.nameEs}
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{city.nameEs}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Préstamos en {city.nameEs}, {region.nameEs}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {city.descriptionEs}
              </p>
              <Link href="/co/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Solicitar Ahora
                  </span>
                </Button>
              </Link>
            </div>

            {/* City Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.population}</div>
                  <div className="text-sm text-gray-600">Población</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgLoanAmount}</div>
                  <div className="text-sm text-gray-600">Préstamo Promedio</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.avgRate}</div>
                  <div className="text-sm text-gray-600">Tasa Promedio</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{city.lenderCount}</div>
                  <div className="text-sm text-gray-600">Prestamistas</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Préstamos Personales en {city.nameEs} – Guía {currentYear}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.descriptionEs}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Como residente de {city.nameEs}, tiene acceso a {city.lenderCount} prestamistas 
                  regulados que ofrecen tasas competitivas desde aproximadamente {city.avgRate} EA. 
                  Ya sea que necesite fondos para {city.topLoanTypesEs[0]?.toLowerCase()},{' '}
                  {city.topLoanTypesEs[1]?.toLowerCase()} u otros propósitos, los prestamistas locales 
                  y nacionales ofrecen soluciones flexibles adaptadas a su situación financiera.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestra plataforma facilita la comparación de ofertas, la comprensión de las 
                  regulaciones locales y encontrar el mejor préstamo para su situación. Todos los 
                  prestamistas están regulados por la Superintendencia Financiera de Colombia y 
                  cumplen con las leyes colombianas de protección al consumidor.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulaciones de Préstamos en {city.nameEs}
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Todos los préstamos en {city.nameEs} están sujetos a las regulaciones nacionales 
                  de la Superintendencia Financiera. Aquí están las protecciones y requisitos clave:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Protecciones para Prestatarios
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Tasa de interés máxima:</strong> 48% efectivo anual (tasa de usura)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Derecho de retracto:</strong> 5 días hábiles para cancelar sin costo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Pago anticipado:</strong> Derecho a liquidar antes sin penalización</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Información transparente:</strong> Divulgación completa de términos y costos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span><strong>Protección de datos:</strong> Sus datos están protegidos por la Ley 1581 de 2012</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Información importante:</strong> Todos los prestamistas en {city.nameEs} 
                      están regulados por la Superintendencia Financiera y deben cumplir con estas reglas. 
                      Si encuentra un prestamista que viola estas regulaciones, repórtelo a la 
                      Superintendencia Financiera.
                    </p>
                    <a
                      href="https://www.superfinanciera.gov.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                    >
                      Visitar Superintendencia Financiera →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Tipos Populares de Préstamos en {city.nameEs}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {city.topLoanTypesEs.map((loanType, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-base">{loanType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Popular entre los residentes de {city.nameEs}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Preguntas Frecuentes – {city.nameEs}
            </h2>
            <ColombiaFAQ items={faqItems} />
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Préstamos en Ciudades Cercanas
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity?.slug}
                    href={`/co/${nearbyCity?.regionSlug}/${nearbyCity?.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow border-blue-200 hover:border-blue-400">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {nearbyCity?.nameEs}
                        </h3>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tasa:</span>
                            <span className="font-semibold text-blue-600">
                              {nearbyCity?.avgRate}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prestamistas:</span>
                            <span className="font-semibold">
                              {nearbyCity?.lenderCount}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href={`/co/${params.region}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  ← Volver a {region.nameEs}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para un préstamo en {city.nameEs}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare ofertas de {city.lenderCount} prestamistas regulados
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 bg-white text-blue-700 hover:bg-gray-100">
                Solicitar Ahora
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Comparación gratuita • Sin impacto en su score • 100% en línea
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
