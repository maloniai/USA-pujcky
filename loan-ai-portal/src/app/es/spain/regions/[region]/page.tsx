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
import { spainRegions, getAllRegionSlugs, getRegionBySlug } from '@/data/spain-regions'
import { spainCities, getCitiesByRegion } from '@/data/spain-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Región no encontrada',
    }
  }

  return {
    title: `Préstamos ${region.nameEs} – Compara 2025 | LoansAI`,
    description: `${region.descriptionEs} TAE promedio ${region.avgRate}, prestamistas regulados por Banco de España, ofertas personalizadas en ${region.nameEs}.`,
    keywords: `prestamos ${region.nameEs}, creditos ${region.name}, tasas ${region.nameEs}, prestamistas ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/es/spain/regions/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.region)

  const faqItems: FAQItem[] = [
    {
      question: `¿Cuáles son las tasas promedio de interés en ${region.nameEs}?`,
      answer: `Las tasas promedio de interés en ${region.nameEs} son aproximadamente ${region.avgRate}, pero pueden variar entre 7% y 27% TAE según el prestamista, la cantidad prestada, el plazo y tu perfil crediticio. Los préstamos con garantías o para clientes con alta puntuación crediticia pueden tener tasas más bajas.`
    },
    {
      question: `¿Cuántos prestamistas licenciados hay disponibles en ${region.nameEs}?`,
      answer: `En ${region.nameEs} tienes acceso a más de 30 prestamistas licenciados y supervisados por el Banco de España, incluyendo bancos, instituciones financieras no bancarias y plataformas de préstamos online. Cada prestamista tiene diferentes criterios y ofertas, por lo que comparar es esencial.`
    },
    {
      question: `¿Puedo obtener un préstamo en ${region.nameEs} si no vivo en la capital?`,
      answer: `Sí, la mayoría de los prestamistas en ${region.nameEs} ofrecen préstamos a todos los residentes de la comunidad, independientemente de la ciudad. Algunos prestamistas online ofrecen servicios en toda España. Lo importante es tener ingresos estables y documentación válida.`
    },
    {
      question: `¿Cuál es la cantidad máxima que puedo pedir prestada en ${region.nameEs}?`,
      answer: `La cantidad máxima disponible en ${region.nameEs} es aproximadamente ${region.maxLoanAmount}, pero la cantidad exacta depende de tus ingresos, historial crediticio y la política de cada prestamista. Algunos bancos pueden ofrecer cantidades mayores para clientes con alta solvencia.`
    },
    {
      question: `¿Cuánto tarda el proceso de aprobación en ${region.nameEs}?`,
      answer: `El proceso de aprobación varía: los préstamos online pueden aprobarse en 24-48 horas, mientras que los bancos tradicionales pueden tardar de 3 a 7 días laborables. El tiempo depende de la complejidad de las verificaciones y de la completitud de tu documentación.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${region.nameEs}`,
    description: region.descriptionEs,
    url: `https://loansai.com/es/spain/regions/${params.region}`,
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
      }
    ]
  }

  return (
    <>
      <Script
        id="region-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="region-breadcrumb"
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
            <span>{region.nameEs}</span>
          </nav>

          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Préstamos Personales en {region.nameEs}
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl">
              {region.descriptionEs}
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{region.population}</div>
                    <div className="text-sm text-gray-600">Población</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{region.avgLoanAmount}</div>
                    <div className="text-sm text-gray-600">Préstamo promedio</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{region.avgRate}</div>
                    <div className="text-sm text-gray-600">TAE promedio</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{region.maxLoanAmount}</div>
                    <div className="text-sm text-gray-600">Máximo disponible</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link href="/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Solicitar Préstamo en {region.nameEs}
              </Button>
            </Link>
          </section>

          <SpainDisclosure />

          {/* Cities Section */}
          {cities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Préstamos por Ciudad en {region.nameEs}
              </h2>
              <p className="text-gray-700 mb-6">
                Explora información específica de préstamos para las principales ciudades de {region.nameEs}:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <Link key={city.slug} href={`/es/spain/regions/${params.region}/${city.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{city.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{city.descriptionEs}</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Población:</span>
                            <span className="font-medium">{city.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">TAE promedio:</span>
                            <span className="font-medium text-blue-600">{city.avgRate}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Regulations Section */}
          <section className="mb-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Regulaciones de Préstamos en {region.nameEs}
            </h2>
            <p className="text-gray-700 mb-4">
              Todos los prestamistas en {region.nameEs} deben cumplir con las siguientes regulaciones:
            </p>
            <ul className="space-y-2">
              {region.regulationsEs.map((regulation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-700">{regulation}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Top Loan Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Tipos de Préstamos Populares en {region.nameEs}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {region.topLoanTypesEs.map((loanType, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">💼</div>
                      <h3 className="font-semibold text-gray-900">{loanType}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
