import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoRegions } from '@/data/mexico-regions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Regiones de México – Préstamos Personales por Región | LoansAI',
  description: 'Explora ofertas de préstamos personales en las 8 regiones de México. Regulaciones locales, prestamistas licenciados, tasas competitivas.',
  keywords: 'prestamos mexico regiones, ciudad de mexico, guadalajara, monterrey, frontera norte, bajio, peninsula yucatan',
  alternates: {
    canonical: 'https://loansai.com/mx/regions',
  },
}

export default function MexicoRegionsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regiones de México - Préstamos Personales',
    description: 'Préstamos personales en todas las regiones de México',
    url: 'https://loansai.com/mx/regions',
    breadcrumb: {
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
          name: 'México',
          item: 'https://loansai.com/mx'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Regiones',
          item: 'https://loansai.com/mx/regions'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-regions" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-green-900/70">
              <Link href="/" className="hover:text-green-600">
                Inicio
              </Link>
              <span>›</span>
              <Link href="/mx" className="hover:text-green-600">
                México
              </Link>
              <span>›</span>
              <span className="font-semibold text-green-900">Regiones</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Préstamos Personales por Región en México
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explora ofertas de préstamos específicas para cada una de las 8 regiones principales. 
              Información sobre regulaciones locales, prestamistas disponibles y tasas promedio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regiones</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Ciudades Principales</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Prestamistas Regulados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {mexicoRegions.map((region) => (
                <Link key={region.slug} href={`/mx/regions/${region.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all group cursor-pointer border-green-200 hover:border-green-400">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-green-600 transition">
                        {region.nameEs}
                      </CardTitle>
                      <p className="text-gray-600 mt-2">{region.descriptionEs}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">👥</span>
                          <div>
                            <div className="font-semibold text-gray-900">Población</div>
                            <div className="text-gray-600">{region.population}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">💰</span>
                          <div>
                            <div className="font-semibold text-gray-900">Monto promedio</div>
                            <div className="text-gray-600">{region.avgLoanAmount}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">📊</span>
                          <div>
                            <div className="font-semibold text-gray-900">CAT promedio</div>
                            <div className="text-gray-600">{region.avgRate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">🏙️</span>
                          <div>
                            <div className="font-semibold text-gray-900">Ciudades principales</div>
                            <div className="text-gray-600">{region.topCities.slice(0, 3).join(', ')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                        Explorar región →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Region-Specific Info */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
                ¿Por qué información específica por regiones?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>🎯</span>
                    Ofertas locales
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Los prestamistas pueden tener ofertas y condiciones diferentes según la región en la que operes. 
                    La información específica te ayuda a encontrar las mejores opciones locales.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>📈</span>
                    Contexto económico
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Cada región tiene características económicas únicas que influyen en el mercado de préstamos - 
                    desde ingresos promedio hasta costo de vida.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>🏦</span>
                    Acceso a prestamistas
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Algunos prestamistas tienen presencia más fuerte en ciertas regiones. Conocer estos detalles 
                    aumenta tus posibilidades de aprobación.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span>🌆</span>
                    Ciudades y comunidades
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Explora préstamos específicos de las ciudades en tu región para información aún más detallada 
                    adaptada a tu comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MexicoFooter />
    </>
  )
}
