import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { getColombiaDepartmentBySlug, getAllColombiaDepartmentSlugs } from '@/data/colombia-departments'
import { getColombiaCitiesByRegion } from '@/data/colombia-cities'

interface DepartmentPageProps {
  params: {
    department: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllColombiaDepartmentSlugs()
  return slugs.map((slug) => ({
    department: slug,
  }))
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const department = getColombiaDepartmentBySlug(params.department)
  
  if (!department) {
    return {
      title: 'Departamento no encontrado',
    }
  }

  return {
    title: `Préstamos en ${department.nameEs} - Compara Créditos 2025`,
    description: `Compara préstamos y créditos en ${department.nameEs}, Colombia. ${department.municipalities} municipios, capital ${department.capital}. Tasas desde ${department.avgRate}. Entidades vigiladas por Superfinanciera.`,
    keywords: `préstamos ${department.nameEs}, créditos ${department.nameEs}, préstamos ${department.capital}, tasa de interés ${department.nameEs}, Datacrédito ${department.nameEs}`,
    openGraph: {
      title: `Préstamos en ${department.nameEs} - Compara Créditos`,
      description: `${department.lenderCount}+ entidades financieras en ${department.nameEs}. Tasas ${department.avgRate}. Compara y solicita préstamos personales.`,
      type: 'website',
      locale: 'es_CO',
    },
    alternates: {
      canonical: `https://loansai.com/co/departamento/${params.department}`,
    },
  }
}

export default function DepartmentPage({ params }: DepartmentPageProps) {
  const department = getColombiaDepartmentBySlug(params.department)

  if (!department) {
    notFound()
  }

  // Get cities in this department's region for display
  const regionCities = getColombiaCitiesByRegion(department.regionSlug)
  const departmentCities = regionCities.filter(city => 
    city.department === department.name || 
    city.department.includes(department.name) ||
    department.topCities.includes(city.name)
  )

  // Schema markup
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Loan-Platform.com',
    legalName: 'Maloni s.r.o.',
    url: 'https://loansai.com',
    description: 'Plataforma de comparación de préstamos en Colombia',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Servicio al Cliente',
      availableLanguage: ['es', 'en'],
    },
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Comparación de Préstamos en ${department.nameEs}`,
    description: department.descriptionEs,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: department.nameEs,
      containedIn: {
        '@type': 'Country',
        name: 'Colombia',
      },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://loansai.com/co/departamento/${params.department}`,
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': `https://loansai.com/co/departamento/${params.department}#business`,
    name: `Préstamos en ${department.nameEs}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: department.capital,
      addressRegion: department.nameEs,
      addressCountry: 'CO',
    },
    priceRange: `${department.minLoanAmount} - ${department.maxLoanAmount}`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '850',
    },
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Ofertas de Préstamos en ${department.nameEs}`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: `Préstamo personal en ${department.nameEs}`,
          description: 'Préstamo personal flexible para cualquier necesidad',
        },
        price: '24.99',
        priceCurrency: 'COP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '24.99',
          priceCurrency: 'COP',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '100',
            unitText: 'PERCENT_PER_YEAR',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: `Crédito de consumo en ${department.nameEs}`,
          description: 'Crédito de consumo para compras y gastos personales',
        },
        price: '28.99',
        priceCurrency: 'COP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: `Libre Inversión en ${department.nameEs}`,
          description: 'Crédito de libre inversión sin restricciones de uso',
        },
        price: '32.99',
        priceCurrency: 'COP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: `Microcrédito en ${department.nameEs}`,
          description: 'Microcrédito para emprendimientos y pequeños negocios',
        },
        price: '36.99',
        priceCurrency: 'COP',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Colombia',
        item: 'https://loansai.com/co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Departamentos',
        item: 'https://loansai.com/co/departamentos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: department.nameEs,
        item: `https://loansai.com/co/departamento/${params.department}`,
      },
    ],
  }

  const faqSchema = department.faqItems ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: department.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  return (
    <>
      {/* Schema Markup */}
      <Script id="organization-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="financial-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
      <Script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="offer-catalog-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-4 py-4 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/co" className="hover:text-blue-600">Colombia</Link></li>
            <li>/</li>
            <li><Link href="/co/departamentos" className="hover:text-blue-600">Departamentos</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{department.nameEs}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Préstamos en {department.nameEs}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Capital: {department.capital} • {department.municipalities} municipios • {department.population}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-gray-600">Entidades: </span>
                <span className="font-semibold text-blue-600">{department.lenderCount}+</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-gray-600">Tasas desde: </span>
                <span className="font-semibold text-green-600">{department.avgRate}</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-gray-600">Área: </span>
                <span className="font-semibold">{department.area}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Department Overview */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Préstamos y Créditos en {department.nameEs}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {department.descriptionEs}
              </p>

              {/* Key Statistics */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Economía Principal</h3>
                  <div className="flex flex-wrap gap-2">
                    {department.economy.slice(0, 4).map((sector) => (
                      <span key={sector} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Ingresos Promedio</h3>
                  <p className="text-2xl font-bold text-green-600">{department.avgIncome}</p>
                </div>
              </div>

              {/* Loan Range */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Rango de Préstamos</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Mínimo</p>
                    <p className="text-xl font-bold text-blue-600">{department.minLoanAmount}</p>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Máximo</p>
                    <p className="text-xl font-bold text-indigo-600">{department.maxLoanAmount}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cities in Department */}
          <section className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Ciudades en {department.nameEs}
            </h2>
            {departmentCities.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/co/${city.regionSlug}/${city.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                      {city.nameEs}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{city.population}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prestamistas:</span>
                        <span className="font-semibold">{city.lenderCount || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasas:</span>
                        <span className="font-semibold text-green-600">{city.avgRate}</span>
                      </div>
                    </div>
                    <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                      Ver préstamos →
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <p className="text-gray-700 mb-4">
                  Las principales ciudades de {department.nameEs} incluyen:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {department.topCities.slice(0, 6).map((cityName) => (
                    <span key={cityName} className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-800">
                      {cityName}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  Páginas detalladas de ciudades próximamente disponibles
                </p>
              </div>
            )}
          </section>

          {/* Regulatory Information */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Regulación Financiera en {department.nameEs}
              </h3>
              <p className="text-gray-700">
                {department.regulatoryNotes}
              </p>
            </div>
          </section>

          {/* FAQs */}
          {department.faqItems && department.faqItems.length > 0 && (
            <section className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Preguntas Frecuentes sobre Préstamos en {department.nameEs}
              </h2>
              <div className="space-y-4">
                {department.faqItems.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white rounded-lg shadow-md group"
                  >
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                      {faq.question}
                      <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Solicitar un Préstamo en {department.nameEs}?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Compara {department.lenderCount}+ entidades financieras y encuentra las mejores tasas
              </p>
              <Link
                href="/co/apply"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Comparar Préstamos Ahora →
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-600">
              <p className="mb-2">
                <strong>Descargo de responsabilidad:</strong> Loan-Platform.com NO es una entidad financiera ni otorga préstamos directamente. Somos un servicio de comparación que conecta usuarios con entidades financieras vigiladas por la Superintendencia Financiera de Colombia.
              </p>
              <p className="mb-2">
                <strong>Ejemplo representativo:</strong> Préstamo de $5.000.000 COP a 24 meses con tasa EA del 24% resulta en cuotas mensuales aproximadas de $265.000 COP. Total a pagar: $6.360.000 COP.
              </p>
              <p>
                Las tasas de interés están sujetas a evaluación crediticia. Tasa de usura vigente aplicable según normativa del Banco de la República.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
