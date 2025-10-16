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
import { colombiaRegions, getColombiaRegionBySlug, getAllColombiaRegionSlugs } from '@/data/colombia-regions'
import { getColombiaCitiesByRegion } from '@/data/colombia-cities'
import Script from 'next/script'

interface PageProps {
  params: { region: string }
}

export async function generateStaticParams() {
  return getAllColombiaRegionSlugs().map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = getColombiaRegionBySlug(params.region)
  
  if (!region) {
    return {
      title: 'Departamento no encontrado',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Préstamos ${region.nameEs} – Compara ${currentYear}`,
    description: `${region.descriptionEs} Tasas promedio ${region.avgRate}, prestamistas regulados, ofertas personalizadas en ${region.nameEs}, Colombia.`,
    keywords: `prestamos ${region.nameEs}, creditos ${region.name}, tasas ${region.nameEs}, prestamistas ${region.name}`,
    alternates: {
      canonical: `https://loansai.com/co/${params.region}`,
    },
  }
}

export default function RegionPage({ params }: PageProps) {
  const region = getColombiaRegionBySlug(params.region)
  
  if (!region) {
    notFound()
  }

  const cities = getColombiaCitiesByRegion(params.region)
  const currentYear = new Date().getFullYear()

  const faqItems: FAQItem[] = [
    {
      question: `¿Cuáles son las tasas de interés promedio en ${region.nameEs}?`,
      answer: `Las tasas de interés promedio en ${region.nameEs} son aproximadamente ${region.avgRate}, pero pueden variar entre 18% y 48% EA dependiendo del prestamista, el monto prestado, el plazo y su perfil crediticio. Los préstamos con garantía o para clientes con buen historial crediticio pueden tener tasas más bajas. Recuerde que ningún prestamista puede exceder la tasa de usura certificada por la Superintendencia Financiera.`
    },
    {
      question: `¿Cuántos prestamistas regulados están disponibles en ${region.nameEs}?`,
      answer: `En ${region.nameEs} tiene acceso a más de 50 prestamistas regulados por la Superintendencia Financiera de Colombia, incluyendo bancos, cooperativas financieras, compañías de financiamiento y plataformas de préstamos en línea. Cada prestamista tiene diferentes criterios y ofertas, por lo que comparar es fundamental para encontrar las mejores condiciones.`
    },
    {
      question: `¿Puedo obtener un préstamo en ${region.nameEs} si no vivo en la ciudad principal?`,
      answer: `Sí, la mayoría de los prestamistas en ${region.nameEs} ofrecen préstamos a todos los residentes del departamento, independientemente de la ciudad donde viva. Muchos prestamistas en línea ofrecen servicios en todo Colombia. Lo importante es tener ingresos estables y documentación válida. Las sucursales físicas pueden estar concentradas en ciudades principales, pero los servicios en línea están disponibles para todos.`
    },
    {
      question: `¿Cuál es el monto máximo que puedo solicitar en ${region.nameEs}?`,
      answer: `El monto máximo disponible en ${region.nameEs} es aproximadamente ${region.maxLoanAmount}, pero el monto exacto depende de sus ingresos, historial crediticio y las políticas de cada prestamista. Algunos bancos pueden ofrecer montos más altos para clientes con alta capacidad de pago y buen historial. Los préstamos sin garantía típicamente tienen montos más bajos que los préstamos hipotecarios o prendarios.`
    },
    {
      question: `¿Cuánto tiempo tarda el proceso de aprobación en ${region.nameEs}?`,
      answer: `El proceso de aprobación varía: los préstamos en línea pueden aprobarse en 24-48 horas, mientras que los bancos tradicionales pueden tardar 3-7 días hábiles. El tiempo depende de la complejidad de la verificación y la completitud de su documentación. Algunos prestamistas digitales ofrecen pre-aprobación casi instantánea, con el desembolso final después de la verificación de documentos.`
    }
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Préstamos Personales en ${region.nameEs}`,
    description: region.descriptionEs,
    url: `https://loansai.com/co/${params.region}`,
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
        name: 'Colombia',
        item: 'https://loansai.com/co'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: region.nameEs,
        item: `https://loansai.com/co/${params.region}`
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
      <Script id="schema-region" type="application/ld+json">
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
            <span className="text-gray-900 font-medium">{region.nameEs}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Préstamos en {region.nameEs}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {region.descriptionEs}
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

            {/* Region Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.population}</div>
                  <div className="text-sm text-gray-600">Población</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.avgLoanAmount}</div>
                  <div className="text-sm text-gray-600">Préstamo Promedio</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.avgRate}</div>
                  <div className="text-sm text-gray-600">Tasa Promedio</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{region.maxLoanAmount}</div>
                  <div className="text-sm text-gray-600">Monto Máximo</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Préstamos en {region.nameEs} – Guía {currentYear}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {region.descriptionEs}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Como residente de {region.nameEs}, tiene acceso a una amplia gama de productos 
                  de préstamo de instituciones financieras reguladas. Ya sea que necesite{' '}
                  {(region.topLoanTypesEs || ['préstamos personales', 'créditos de consumo', 'libre inversión'])[0]?.toLowerCase()}, {(region.topLoanTypesEs || ['préstamos personales', 'créditos de consumo', 'libre inversión'])[1]?.toLowerCase()} o{' '}
                  {(region.topLoanTypesEs || ['préstamos personales', 'créditos de consumo', 'libre inversión'])[2]?.toLowerCase()}, puede encontrar ofertas competitivas 
                  adaptadas a sus necesidades. Todos los prestamistas están supervisados por la 
                  Superintendencia Financiera de Colombia y deben cumplir con las leyes de protección 
                  al consumidor.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regulaciones en {region.nameEs}
            </h2>
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Todos los préstamos en {region.nameEs} están sujetos a las mismas regulaciones 
                  nacionales de la Superintendencia Financiera:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Protección al Consumidor
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {(region.regulationsEs || [
                        'Todos los prestamistas deben estar registrados con la Superintendencia Financiera de Colombia',
                        'Las tasas de interés están reguladas y no pueden exceder los límites de usura establecidos',
                        'Los prestamistas deben proporcionar información clara sobre tasas, tarifas y términos antes del desembolso',
                        'Los consumidores tienen derecho a retractarse dentro de 5 días hábiles de la firma del contrato',
                        'Los prestamistas no pueden cobrar penalidades excesivas por pagos anticipados',
                        'Debe existir un proceso claro de quejas y recursos disponible'
                      ]).slice(0, 3).map((reg: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Requisitos Legales
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {(region.regulationsEs || [
                        'Todos los prestamistas deben estar registrados con la Superintendencia Financiera de Colombia',
                        'Las tasas de interés están reguladas y no pueden exceder los límites de usura establecidos',
                        'Los prestamistas deben proporcionar información clara sobre tasas, tarifas y términos antes del desembolso',
                        'Los consumidores tienen derecho a retractarse dentro de 5 días hábiles de la firma del contrato',
                        'Los prestamistas no pueden cobrar penalidades excesivas por pagos anticipados',
                        'Debe existir un proceso claro de quejas y recursos disponible'
                      ]).slice(3).map((reg: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Información importante:</strong> La Superintendencia Financiera de Colombia 
                    supervisa todas las instituciones financieras para garantizar la estabilidad del 
                    sistema y proteger a los consumidores. Para más información o presentar quejas:
                  </p>
                  <a
                    href="https://www.superfinanciera.gov.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                  >
                    Visitar sitio oficial de la Superintendencia →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cities in Region */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Préstamos por Ciudad – {region.nameEs}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Encuentre las mejores ofertas de préstamos en su ciudad
            </p>
            
            {cities.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/co/${params.region}/${city.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full border-blue-200 hover:border-blue-400">
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
                            <span className="text-gray-600">Tasa Promedio:</span>
                            <span className="font-semibold text-blue-600">{city.avgRate}</span>
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
            ) : (
              <p className="text-center text-gray-600">
                Pronto agregaremos ciudades de este departamento.
              </p>
            )}
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Tipos Populares de Préstamos en {region.nameEs}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {(region.topLoanTypesEs || ['Préstamos Personales', 'Créditos de Consumo', 'Libre Inversión']).map((loanType: string, idx: number) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-base">{loanType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Popular entre los residentes de {region.nameEs}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Preguntas Frecuentes – {region.nameEs}
            </h2>
            <ColombiaFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para un préstamo en {region.nameEs}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare ofertas y encuentre la mejor tasa en su departamento
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 bg-white text-blue-700 hover:bg-gray-100">
                Solicitar Ahora
              </Button>
            </Link>
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
