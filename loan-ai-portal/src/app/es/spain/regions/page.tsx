import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import StickyApplyButton from '@/components/spain/sticky-apply-button'
import { spainRegions } from '@/data/spain-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos por Comunidad Autónoma en España | LoansAI',
  description: 'Explora información de préstamos específica para cada comunidad autónoma de España. Tasas, regulaciones y prestamistas locales.',
  keywords: 'prestamos comunidades autonomas españa, prestamos regiones españa, prestamos locales',
  alternates: {
    canonical: 'https://loansai.com/es/spain/regions',
  },
}

export default function SpainRegionsPage() {
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
      }
    ]
  }

  return (
    <>
      <Script
        id="regions-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <SpainNavigation />
      <StickyApplyButton />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <nav className="text-sm text-gray-600 mb-4">
              <Link href="/es/spain" className="hover:text-blue-600">España</Link>
              <span className="mx-2">/</span>
              <span>Regiones</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Préstamos por Comunidad Autónoma
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Encuentra información específica sobre préstamos personales en cada comunidad autónoma de España. 
              Cada región tiene características únicas en el mercado crediticio, tasas promedio y prestamistas locales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {spainRegions.map((region) => (
              <Link key={region.slug} href={`/es/spain/regions/${region.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{region.nameEs}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{region.descriptionEs}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Población:</span>
                        <span className="font-semibold text-gray-900">{region.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Préstamo promedio:</span>
                        <span className="font-semibold text-gray-900">{region.avgLoanAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">TAE promedio:</span>
                        <span className="font-semibold text-blue-600">{region.avgRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Máximo disponible:</span>
                        <span className="font-semibold text-gray-900">{region.maxLoanAmount}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">
                        <strong>Ciudades principales:</strong> {region.majorCities.slice(0, 3).join(', ')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <section className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              ¿Por Qué Importa Tu Comunidad Autónoma?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Tasas Locales</h3>
                <p className="text-sm">
                  Las tasas de interés pueden variar según la región debido a la competencia local de prestamistas 
                  y las condiciones económicas regionales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Prestamistas Locales</h3>
                <p className="text-sm">
                  Algunas comunidades tienen cajas de ahorro o entidades financieras locales con ofertas 
                  especiales para residentes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Regulaciones Específicas</h3>
                <p className="text-sm">
                  Además de las regulaciones nacionales del Banco de España, algunas comunidades tienen 
                  programas de apoyo financiero regional.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Información Relevante</h3>
                <p className="text-sm">
                  Obtén información sobre préstamos adaptada a las características económicas y demográficas 
                  de tu comunidad autónoma.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <SpainFooter />
    </>
  )
}
