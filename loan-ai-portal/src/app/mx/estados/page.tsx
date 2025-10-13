import type { Metadata } from 'next'
import Link from 'next/link'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import { mexicoRegions } from '@/data/mexico-regions'

export const metadata: Metadata = {
  title: 'Préstamos por Estado en México 2025 – Comparar Ofertas',
  description: 'Encuentra préstamos personales en tu estado. Información sobre regulaciones, tasas de interés y prestamistas disponibles en cada estado de México.',
  keywords: 'prestamos por estado mexico, creditos estado de mexico, prestamos guadalajara, prestamos monterrey, CONDUSEF estados',
}

export default function EstadosPage() {
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
              Préstamos Personales por Estado
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Explora información específica sobre préstamos personales en cada estado de México, 
              incluyendo regulaciones locales, prestamistas disponibles y tasas promedio.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Cada estado de México puede tener características únicas en cuanto a la disponibilidad de 
              prestamistas, tasas de interés promedio y economía local. Selecciona tu estado para obtener 
              información detallada sobre opciones de préstamos personales, requisitos específicos y 
              protecciones para el consumidor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mexicoRegions.map((region) => (
              <Link
                key={region.slug}
                href={`/mx/estados/${region.slug}`}
                className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-green-900">{region.name}</h2>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {region.stateCode}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {region.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">👥</span>
                    <span>Población: {region.population}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">💰</span>
                    <span>Ingreso promedio: {region.medianIncome}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">🏙️</span>
                    <span>{region.topCities.length} ciudades principales</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Ver detalles completos</span>
                  <span className="text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              ¿No encuentras tu estado?
            </h2>
            <p className="text-gray-700 mb-6">
              Estamos expandiendo nuestra cobertura constantemente. Mientras tanto, puedes solicitar 
              un préstamo con prestamistas que operan a nivel nacional.
            </p>
            <Link
              href="/mx/solicitar"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
            >
              Solicitar Préstamo Nacional
            </Link>
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
