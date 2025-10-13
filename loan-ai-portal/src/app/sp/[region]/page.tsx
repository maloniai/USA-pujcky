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
import { spainRegions, getSpainRegionBySlug, getAllSpainRegionSlugs } from '@/data/spain-regions'
import { spainCities, getSpainCitiesByRegion } from '@/data/spain-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllSpainRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getSpainRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Comunidad no encontrada',
    }
  }

  return {
    title: `Préstamos ${region.nameEs} – Compara 2025 | LoansAI`,
    description: `${region.descriptionEs} Tasas medias ${region.avgRate}, prestamistas autorizados por Banco de España, ofertas personalizadas en ${region.nameEs}.`,
    keywords: `préstamos ${region.nameEs}, créditos ${region.name}, tasas ${region.nameEs}, prestamistas ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/sp/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getSpainRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getSpainCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `¿Cuáles son las tasas de interés promedio en ${region.nameEs}?`,
      answer: `Las tasas de interés promedio en ${region.nameEs} son aproximadamente ${region.avgRate}, pero pueden variar entre 5% y 30% TAE dependiendo del prestamista, monto solicitado, plazo y tu perfil crediticio. Los préstamos con garantía o para clientes con alto score crediticio pueden tener tasas más bajas.`
    },
    {
      question: `¿Cuántos prestamistas autorizados están disponibles en ${region.nameEs}?`,
      answer: `En ${region.nameEs} tienes acceso a más de 35 prestamistas autorizados y supervisados por el Banco de España, incluyendo bancos, instituciones financieras no bancarias y plataformas de préstamos online. Cada prestamista tiene diferentes criterios y ofertas, por lo que comparar es clave.`
    },
    {
      question: `¿Puedo obtener un préstamo en ${region.nameEs} si no vivo en la capital autonómica?`,
      answer: `Sí, la mayoría de los prestamistas en ${region.nameEs} ofrecen préstamos a todos los residentes de la comunidad autónoma, independientemente de la ciudad. Algunos prestamistas online ofrecen servicios en toda España. Lo importante es que tengas ingresos estables y documentación válida.`
    },
    {
      question: `¿Cuál es el monto máximo que puedo solicitar en ${region.nameEs}?`,
      answer: `El monto máximo disponible en ${region.nameEs} es aproximadamente ${region.maxLoanAmount}, pero el monto exacto depende de tus ingresos, historial crediticio y la política de cada prestamista. Algunos bancos pueden ofrecer montos más altos para clientes con alta solvencia crediticia.`
    },
    {
      question: `¿Cuánto tiempo tarda el proceso de aprobación en ${region.nameEs}?`,
      answer: `El proceso de aprobación varía: los préstamos online pueden aprobarse en 24-48 horas, mientras que los bancos tradicionales pueden tardar de 3 a 7 días laborables. El tiempo depende de la complejidad de la verificación y la completitud de tu documentación.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${region.nameEs}`,
    description: region.descriptionEs,
    url: `https://loansai.com/sp/${params.region}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: region.nameEs
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
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/sp" className="hover:text-red-600">España</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{region.nameEs}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇪🇸 {region.nameEs}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Préstamos en {region.nameEs}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {region.descriptionEs} Compara ofertas de préstamos personales de prestamistas 
              autorizados con tasas competitivas y condiciones transparentes.
            </p>
            <Link href="/sp/apply">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Solicitar Préstamo
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Region Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{region.population}</div>
                    <div className="text-sm text-gray-600">Población</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{region.avgLoanAmount}</div>
                    <div className="text-sm text-gray-600">Préstamo Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{region.avgRate}</div>
                    <div className="text-sm text-gray-600">TAE Media</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{region.maxLoanAmount}</div>
                    <div className="text-sm text-gray-600">Máximo Disponible</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Información de Préstamos en {region.nameEs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Descripción General</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {region.descriptionEs} Los residentes de {region.nameEs} tienen acceso a una 
                    amplia gama de productos de préstamo de prestamistas autorizados por el Banco 
                    de España. Ya sea que necesites financiación para compras personales, 
                    reunificación de deudas o proyectos del hogar, encontrarás opciones competitivas 
                    adaptadas a tu situación financiera.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Tipos de Préstamos Populares</h3>
                  <div className="flex flex-wrap gap-2">
                    {region.topLoanTypesEs.map((type, index) => (
                      <span key={index} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Ciudades Principales</h3>
                  <div className="flex flex-wrap gap-2">
                    {region.majorCities.map((city, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulaciones Locales en {region.nameEs}
            </h2>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {region.regulationsEs.map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">✓</span>
                      <span className="text-gray-700">{regulation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cities in Region */}
        {cities.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Ciudades en {region.nameEs}
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Explora opciones de préstamos en ciudades específicas
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/sp/${params.region}/${city.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{city.nameEs}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          {city.descriptionEs}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Población:</span>
                            <span className="font-semibold">{city.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">TAE media:</span>
                            <span className="font-semibold text-red-600">{city.avgRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prestamistas:</span>
                            <span className="font-semibold">{city.lenderCount}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Preguntas Frecuentes sobre Préstamos en {region.nameEs}
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
                  Solicita tu Préstamo en {region.nameEs}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Compara ofertas de prestamistas autorizados y encuentra las mejores condiciones
                </p>
                <Link href="/sp/apply">
                  <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                    Comenzar Solicitud
                  </Button>
                </Link>
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
