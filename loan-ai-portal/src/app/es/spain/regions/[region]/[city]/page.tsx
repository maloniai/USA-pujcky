import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import SpainDisclosure from '@/components/spain/spain-disclosure'
import SpainFAQ, { type FAQItem } from '@/components/spain/spain-faq'
import StickyApplyButton from '@/components/spain/sticky-apply-button'
import { getRegionBySlug } from '@/data/spain-regions'
import { spainCities, getCityBySlug, getAllCitySlugsByRegion } from '@/data/spain-cities'
import Script from 'next/script'

interface PageProps {
  params: { 
    region: string
    city: string 
  }
}

export async function generateStaticParams() {
  const allParams: { region: string; city: string }[] = []
  
  // Generate all region-city combinations
  for (const city of spainCities) {
    allParams.push({
      region: city.regionSlug,
      city: city.slug
    })
  }
  
  return allParams
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'Ciudad no encontrada',
    }
  }

  return {
    title: `Préstamos ${city.name} – Compara Ofertas 2025 | LoansAI`,
    description: `${city.descriptionEs} TAE promedio ${city.avgRate}, prestamistas locales regulados. Encuentra las mejores ofertas de préstamos en ${city.name}.`,
    keywords: `prestamos ${city.name}, creditos ${city.name}, prestamos personales ${city.name}, tasas ${city.name}`,
    alternates: {
      canonical: `https://loansai.com/es/spain/regions/${params.region}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city)
  const region = getRegionBySlug(params.region)
  
  if (!city || !region || city.regionSlug !== params.region) {
    notFound()
  }

  const faqItems: FAQItem[] = [
    {
      question: `¿Qué prestamistas operan en ${city.name}?`,
      answer: `En ${city.name} operan diversos prestamistas licenciados por el Banco de España, incluyendo: ${city.topLendersEs.join(', ')}. Cada prestamista ofrece diferentes productos y tasas, por lo que comparar es fundamental para encontrar la mejor oferta.`
    },
    {
      question: `¿Son diferentes las tasas en ${city.name} comparadas con otras ciudades?`,
      answer: `Las tasas en ${city.name} son similares a las del resto de España, con un promedio de ${city.avgRate}. Sin embargo, algunos prestamistas locales pueden ofrecer condiciones especiales para residentes de ${city.name} o ${region.nameEs}.`
    },
    {
      question: `¿Puedo solicitar un préstamo online si vivo en ${city.name}?`,
      answer: `Sí, todos los prestamistas online regulados por el Banco de España aceptan solicitudes de residentes en ${city.name}. El proceso es completamente digital y recibirás el dinero por transferencia bancaria directamente a tu cuenta.`
    },
    {
      question: `¿Necesito tener cuenta en un banco de ${city.name} para solicitar un préstamo?`,
      answer: `No, no necesitas tener cuenta en un banco específico de ${city.name}. Los prestamistas pueden transferir los fondos a cualquier cuenta bancaria española válida a tu nombre.`
    },
    {
      question: `¿Cuánto tiempo tarda en aprobarse un préstamo en ${city.name}?`,
      answer: `El tiempo de aprobación en ${city.name} es similar al resto de España: 24-48 horas para préstamos online y 3-7 días para bancos tradicionales. La documentación completa acelera el proceso significativamente.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${city.name}`,
    description: city.descriptionEs,
    url: `https://loansai.com/es/spain/regions/${params.region}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
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
        item: 'https://loansai.com/es/spain'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Regiones',
        item: 'https://loansai.com/es/spain/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.nameEs,
        item: `https://loansai.com/es/spain/regions/${params.region}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: city.name,
        item: `https://loansai.com/es/spain/regions/${params.region}/${params.city}`
      }
    ]
  }

  return (
    <>
      <Script
        id="city-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="city-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <SpainNavigation />
      <StickyApplyButton />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/es/spain" className="hover:text-blue-600">España</Link>
            <span className="mx-2">/</span>
            <Link href="/es/spain/regions" className="hover:text-blue-600">Regiones</Link>
            <span className="mx-2">/</span>
            <Link href={`/es/spain/regions/${params.region}`} className="hover:text-blue-600">
              {region.nameEs}
            </Link>
            <span className="mx-2">/</span>
            <span>{city.name}</span>
          </nav>

          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Préstamos Personales en {city.name}
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl">
              {city.descriptionEs}
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{city.population}</div>
                    <div className="text-sm text-gray-600">Población</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{city.avgLoanAmount}</div>
                    <div className="text-sm text-gray-600">Préstamo promedio</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                    <div className="text-sm text-gray-600">TAE promedio</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{city.maxLoanAmount}</div>
                    <div className="text-sm text-gray-600">Máximo disponible</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link href="/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Solicitar Préstamo en {city.name}
              </Button>
            </Link>
          </section>

          <SpainDisclosure />

          {/* Local Lenders */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Prestamistas Disponibles en {city.name}
            </h2>
            <p className="text-gray-700 mb-6">
              Los siguientes prestamistas regulados por el Banco de España operan en {city.name}:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {city.topLendersEs.map((lender, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🏦</div>
                      <h3 className="font-semibold text-gray-900">{lender}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Por Qué Comparar Préstamos en {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💰 Mejores Tasas</h3>
                <p className="text-gray-700">
                  Compara ofertas de múltiples prestamistas en {city.name} para encontrar la tasa más baja 
                  y las mejores condiciones para tu perfil crediticio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">⚡ Proceso Rápido</h3>
                <p className="text-gray-700">
                  Nuestra plataforma te conecta rápidamente con prestamistas en {city.name}, 
                  acelerando el proceso de solicitud y aprobación.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🛡️ Totalmente Regulado</h3>
                <p className="text-gray-700">
                  Todos los prestamistas en {city.name} están supervisados por el Banco de España 
                  y cumplen con todas las regulaciones de protección al consumidor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">📊 Transparencia Total</h3>
                <p className="text-gray-700">
                  Información clara sobre tasas, comisiones y condiciones de cada préstamo 
                  disponible en {city.name}, sin sorpresas ni costes ocultos.
                </p>
              </div>
            </div>
          </section>

          {/* Regional Context */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {city.name} en {region.nameEs}
            </h2>
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  {city.name} forma parte de {region.nameEs}, una región con características específicas 
                  en el mercado crediticio español:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Población regional:</strong> {region.population}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>TAE promedio en {region.nameEs}:</strong> {region.avgRate}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Préstamo máximo regional:</strong> {region.maxLoanAmount}
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href={`/es/spain/regions/${params.region}`}>
                    <Button variant="outline">
                      Ver más sobre préstamos en {region.nameEs}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <SpainFAQ items={faqItems} />

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Solicitar un Préstamo en {city.name}?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Compara ofertas de múltiples prestamistas y encuentra la mejor opción para tus necesidades. 
              Proceso 100% online, seguro y sin compromiso.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Ahora
              </Button>
            </Link>
          </section>
        </div>
      </main>
      
      <SpainFooter />
    </>
  )
}
