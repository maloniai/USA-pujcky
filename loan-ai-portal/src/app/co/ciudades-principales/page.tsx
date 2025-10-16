import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'
import { colombiaCities } from '@/data/colombia-cities'
import { getAllColombiaCitiesTier1 } from '@/data/colombia-cities-tier1'
import { colombiaRegions } from '@/data/colombia-regions'

export const metadata: Metadata = {
  title: 'Préstamos en 39 Ciudades de Colombia – Compare Ofertas Locales 2025',
  description: 'Compare préstamos personales en las 39 principales ciudades de Colombia. Acceda a ofertas localizadas de prestamistas regulados en Bogotá, Medellín, Cali, Barranquilla, Cartagena y 34 ciudades más.',
  alternates: {
    canonical: 'https://loansai.com/co/ciudades-principales',
  },
}

export default function CiudadesPrincipalesPage() {
  // Combine original cities and Tier 1 cities
  const allCities = [...colombiaCities, ...getAllColombiaCitiesTier1()]
  
  // Sort cities by population (descending) for better UX
  const sortedCities = allCities.sort((a, b) => {
    const popA = ('populationNumber' in a && a.populationNumber) || parseInt(a.population.replace(/[^\d]/g, '')) || 0
    const popB = ('populationNumber' in b && b.populationNumber) || parseInt(b.population.replace(/[^\d]/g, '')) || 0
    return popB - popA
  })
  
  // Group cities by region
  const citiesByRegion = sortedCities.reduce((acc, city) => {
    if (!acc[city.regionSlug]) {
      acc[city.regionSlug] = []
    }
    acc[city.regionSlug].push(city)
    return acc
  }, {} as Record<string, typeof sortedCities>)

  // Calculate total population (approximate)
  const totalPopulation = sortedCities.reduce((sum, city) => {
    const pop = ('populationNumber' in city && city.populationNumber) || parseInt(city.population.replace(/[^\d]/g, '')) || 0
    return sum + pop
  }, 0)
  const totalPopulationFormatted = totalPopulation > 1000000 
    ? `${(totalPopulation / 1000000).toFixed(1)}M+` 
    : `${Math.round(totalPopulation / 1000)}K+`

  return (
    <>
      <ColombiaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">
              Colombia
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Ciudades Principales</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Préstamos en 39 Ciudades de Colombia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare préstamos personales en las 39 principales ciudades de Colombia 
              cubriendo más de {totalPopulationFormatted} habitantes. Encuentre ofertas 
              localizadas con tasas competitivas de prestamistas regulados por la 
              Superintendencia Financiera.
            </p>
            <Link href="/co/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Comparar Préstamos Ahora
              </Button>
            </Link>
          </div>
        </section>

        {/* Statistics */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">39</div>
                  <div className="text-sm text-gray-600">Ciudades Principales</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">Regiones Cubiertas</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{totalPopulationFormatted}</div>
                  <div className="text-sm text-gray-600">Población Total</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">19%</div>
                  <div className="text-sm text-gray-600">Desde Tasa EA</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cities by Region */}
        {colombiaRegions.map((region) => {
          const regionCities = citiesByRegion[region.slug] || []
          
          if (regionCities.length === 0) return null

          return (
            <section key={region.slug} className="container mx-auto px-4 py-12">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Región {region.nameEs}
                  </h2>
                  <p className="text-gray-600">
                    {regionCities.length} {regionCities.length === 1 ? 'ciudad disponible' : 'ciudades disponibles'}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/co/${city.regionSlug}/${city.slug}`}
                      className="block group"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow border-blue-200 hover:border-blue-400">
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <span className="text-xl">{city.nameEs}</span>
                            <span className="text-sm font-normal text-gray-600">
                              {city.population}
                            </span>
                          </CardTitle>
                          <p className="text-sm text-gray-600">{city.department}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                            {city.descriptionEs}
                          </p>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Prestamistas:</span>
                              <span className="font-semibold text-blue-600">
                                {city.lenderCount || '15+'}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Tasa Promedio:</span>
                              <span className="font-semibold text-blue-600">
                                {city.avgRate}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Rango de Préstamos:</span>
                              <span className="font-semibold text-gray-900 text-xs">
                                {city.minLoanAmount} - {city.maxLoanAmount}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 pt-4 border-t">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Ingresos Promedio:</span>
                              <span className="font-medium text-gray-900">
                                {city.avgIncome}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Button 
                              size="sm" 
                              className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700"
                            >
                              Ver Préstamos en {city.nameEs} →
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href={`/co/${region.slug}`}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Ver toda la Región {region.nameEs} →
                  </Link>
                </div>
              </div>
            </section>
          )
        })}

        {/* Why Choose Local */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              ¿Por Qué Comparar Préstamos por Ciudad?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Localizadas</h3>
                  <p className="text-sm text-gray-700">
                    Diferentes prestamistas operan en diferentes ciudades. Vea solo ofertas 
                    disponibles en su ubicación, ahorrando tiempo y evitando rechazos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-lg mb-2">Tasas Competitivas Locales</h3>
                  <p className="text-sm text-gray-700">
                    Las tasas varían según la ciudad debido a competencia local y costos 
                    operativos. Compare para encontrar las mejores tasas en su área.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🏦</div>
                  <h3 className="font-semibold text-lg mb-2">Prestamistas Locales y Nacionales</h3>
                  <p className="text-sm text-gray-700">
                    Acceda tanto a bancos nacionales como a cooperativas y prestamistas 
                    locales que entienden mejor las necesidades de su región.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">⚖️</div>
                  <h3 className="font-semibold text-lg mb-2">Regulación Consistente</h3>
                  <p className="text-sm text-gray-700">
                    Todos los prestamistas están regulados por la Superintendencia Financiera, 
                    pero la oferta local puede variar. Compare para maximizar opciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Cómo Funciona
            </h2>

            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Seleccione Su Ciudad</h3>
                    <p className="text-sm text-gray-700">
                      Haga clic en cualquier ciudad arriba para ver préstamos disponibles 
                      específicamente en esa ubicación.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Compare Ofertas Locales</h3>
                    <p className="text-sm text-gray-700">
                      Revise tasas, términos, requisitos y prestamistas disponibles en su ciudad. 
                      Vea información específica sobre el mercado local.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solicite en Línea</h3>
                    <p className="text-sm text-gray-700">
                      Complete una solicitud simple y reciba respuestas de múltiples 
                      prestamistas locales. Sin impacto en su puntaje crediticio hasta 
                      que decida proceder.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Obtenga Aprobación y Desembolso</h3>
                    <p className="text-sm text-gray-700">
                      Los prestamistas revisan su solicitud y le ofrecen términos específicos. 
                      Una vez aprobado, el dinero se deposita directamente en su cuenta bancaria.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No Ve Su Ciudad?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agregamos nuevas ciudades regularmente. Mientras tanto, puede comparar 
              ofertas nacionales disponibles en todo Colombia.
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 bg-white text-blue-700 hover:bg-gray-100">
                Comparar Préstamos Nacionales
              </Button>
            </Link>
            <p className="text-sm mt-6 opacity-75">
              Prestamistas regulados por la Superintendencia Financiera • Comparación gratuita
            </p>
          </div>
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
