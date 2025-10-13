import type { Metadata } from 'next'
import Link from 'next/link'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoCities } from '@/data/mexico-cities'
import { mexicoRegions } from '@/data/mexico-regions'

export const metadata: Metadata = {
  title: 'Préstamos por Ciudad en México 2025 – Encuentra Prestamistas Locales',
  description: 'Encuentra préstamos personales en tu ciudad. Información sobre prestamistas locales, tasas promedio y requisitos en las principales ciudades de México.',
  keywords: 'prestamos por ciudad mexico, prestamistas locales, creditos ciudad, CONDUSEF ciudades',
}

export default function CiudadesPage() {
  // Group cities by state
  const citiesByState = mexicoRegions.map(region => ({
    region,
    cities: mexicoCities.filter(city => city.stateSlug === region.slug)
  })).filter(group => group.cities.length > 0)

  return (
    <>
      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6">
              <Link href="/mx" className="text-green-100 hover:text-white transition">
                ← Volver a México
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Préstamos Personales por Ciudad
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Encuentra información detallada sobre préstamos personales en las principales ciudades de México, 
              incluyendo prestamistas locales, tasas promedio y requisitos específicos.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Cada ciudad tiene características únicas en cuanto a economía local, costo de vida y disponibilidad 
              de servicios financieros. Selecciona tu ciudad para obtener información específica sobre préstamos 
              personales, montos promedio y prestamistas que operan en tu área.
            </p>
          </div>

          {citiesByState.map(({ region, cities }) => (
            <div key={region.slug} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-900">{region.name}</h2>
                <Link
                  href={`/mx/estados/${region.slug}`}
                  className="text-green-600 hover:text-green-700 font-semibold text-sm"
                >
                  Ver estado completo →
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/mx/ciudades/${city.stateSlug}/${city.slug}`}
                    className="group block bg-white rounded-lg border border-gray-200 p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-green-900 mb-2">{city.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">👥</span>
                        <span>Población: {city.population}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">🏦</span>
                        <span>{city.nearbyLenders}+ prestamistas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">💵</span>
                        <span>Promedio: {city.averageLoanAmount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">📊</span>
                        <span>Score: {city.avgCreditScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">Ver información detallada</span>
                      <span className="text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              ¿No encuentras tu ciudad?
            </h2>
            <p className="text-gray-700 mb-6">
              Estamos expandiendo nuestra cobertura constantemente. Mientras tanto, puedes solicitar 
              un préstamo con prestamistas que operan a nivel nacional o estatal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mx/solicitar"
                className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Solicitar Préstamo
              </Link>
              <Link
                href="/mx/estados"
                className="inline-block bg-white border-2 border-green-600 text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors"
              >
                Ver por Estado
              </Link>
            </div>
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
