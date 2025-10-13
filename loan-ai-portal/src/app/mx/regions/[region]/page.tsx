import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'
import {
  mexicoRegions,
  getRegionBySlug,
  type MexicoRegion,
} from '@/data/mexico-regions'
import Script from 'next/script'

const currentYear = new Date().getFullYear()

interface RegionPageProps {
  params: {
    region: string
  }
}

export function generateStaticParams() {
  return mexicoRegions.map((region) => ({
    region: region.slug,
  }))
}

export function generateMetadata({ params }: RegionPageProps): Metadata {
  const region = getRegionBySlug(params.region)
  if (!region) return {}

  const title = `${region.nameEs} – Préstamos Personales ${currentYear}`
  const description = `Compara préstamos personales en ${region.nameEs}. Prestamistas licenciados por CNBV. CAT promedio: ${region.avgRate}. ${region.descriptionEs}`

  return {
    title,
    description: description.slice(0, 155),
    keywords: [
      `prestamos ${region.nameEs.toLowerCase()}`,
      'creditos mexico',
      'CONDUSEF',
      'CNBV',
      'prestamos personales',
      'creditos rapidos',
    ],
    alternates: {
      canonical: `/mx/regions/${region.slug}`,
    },
    openGraph: {
      title,
      description: description.slice(0, 155),
      url: `/mx/regions/${region.slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  }
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getRegionBySlug(params.region)
  if (!region) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Inicio', url: '/', position: 1 },
    { name: 'México', url: '/mx', position: 2 },
    { name: 'Regiones', url: '/mx/regions', position: 3 },
    { name: region.nameEs, url: `/mx/regions/${region.slug}`, position: 4 },
  ]

  const regulationSummary = [
    {
      title: 'Regulación',
      text: 'CNBV otorga licencias y supervisa. CONDUSEF protege al usuario financiero. Todos los prestamistas deben estar registrados.',
    },
    {
      title: 'Tasas de Interés',
      text: `Bancos tradicionales: 15-35% CAT. Fintech y SOFOMs: 25-60% CAT (máximo legal). En ${region.nameEs}: ${region.avgRate}.`,
    },
    {
      title: 'Protección al Consumidor',
      text: 'Todos los costos deben divulgarse. Derecho de retracto de 10 días. Liquidación anticipada sin penalización excesiva (máx 20%).',
    },
  ]

  const featuredLenders = [
    {
      name: 'BBVA México',
      type: 'Banco',
      rateRange: '16-28% CAT',
      features: ['$10,000 - $500,000 MXN', '12-60 meses', 'App móvil avanzada'],
    },
    {
      name: 'Santander',
      type: 'Banco',
      rateRange: '18-32% CAT',
      features: ['$15,000 - $400,000 MXN', '12-48 meses', 'Red de sucursales amplia'],
    },
    {
      name: 'Banorte',
      type: 'Banco',
      rateRange: '17-30% CAT',
      features: ['$5,000 - $350,000 MXN', '6-36 meses', 'Aprobación rápida'],
    },
    {
      name: 'Kueski',
      type: 'Fintech',
      rateRange: '30-55% CAT',
      features: ['$3,000 - $100,000 MXN', '3-24 meses', 'Decisión en minutos'],
    },
  ]

  const blogTeasers = [
    {
      title: `Guía para obtener préstamos en ${region.nameEs}`,
      excerpt: 'Documentos, requisitos, tiempos de revisión y consejos para elegir el mejor prestamista.',
      href: `/mx/blog/guide-${region.slug}`,
    },
    {
      title: 'Cómo se calcula el CAT y por qué es importante',
      excerpt: 'El Costo Anual Total es el indicador completo del costo de un préstamo. Métodos de cálculo y ejemplos.',
      href: '/mx/blog/understand-cat',
    },
    {
      title: 'Formas de mejorar tu historial crediticio',
      excerpt: 'Cómo mejorar tu calificación en Buró de Crédito y por qué es importante para obtener mejores tasas.',
      href: '/mx/blog/improve-credit-history',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: `https://loansai.com${item.url}`
    }))
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <nav className="mb-6 flex items-center gap-2 text-sm text-green-900/70">
              <Link href="/" className="hover:text-green-600">
                Inicio
              </Link>
              <span>›</span>
              <Link href="/mx" className="hover:text-green-600">
                México
              </Link>
              <span>›</span>
              <Link href="/mx/regions" className="hover:text-green-600">
                Regiones
              </Link>
              <span>›</span>
              <span className="font-semibold text-green-900">{region.nameEs}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              {region.nameEs} • Guía Regional {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-green-900 md:text-5xl">
              Préstamos en {region.nameEs}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-green-900/80 md:text-xl">
              {region.descriptionEs} Estados incluidos: {region.states.join(', ')}. 
              Prestamistas disponibles en {region.topCities.length} ciudades principales. 
              CAT promedio: {region.avgRate}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/mx/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Solicitar Préstamo
                </Button>
              </Link>
              <Link href="#cities">
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Ver Ciudades
                </Button>
              </Link>
            </div>
            <p className="mt-4 max-w-3xl text-sm text-green-900/70">
              🔒 Información compartida con prestamistas regulados • Sin impacto en Buró de Crédito hasta solicitud formal
            </p>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-green-900">
              Acerca de {region.nameEs}
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-green-900">Perfil Económico</h3>
                <p className="mt-4 text-sm text-green-900/80">
                  {region.economicProfile}
                </p>
                <p className="mt-4 text-sm text-green-900/80">
                  Población de la región: {region.population}. Esta región incluye los estados de {region.states.join(', ')}.
                </p>
                <p className="mt-4 text-sm text-green-900/80">
                  Rango típico de préstamos: {region.minLoanAmount} - {region.maxLoanAmount}. 
                  Plazos comunes: {region.typicalTermMonths}.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-900">Ciudades Principales</h3>
                <ul className="mt-4 space-y-2 text-sm text-green-900/80">
                  {region.topCities.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                      {city}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Notas Regulatorias</h4>
                  <p className="text-sm text-green-900/80">
                    {region.regulatoryNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-green-900">Regulación y Protección al Consumidor</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {regulationSummary.map((item) => (
                <Card key={item.title} className="border-green-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-green-900/80">{item.text}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://www.condusef.gob.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2"
              >
                Más información en CONDUSEF ↗
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-green-900">Prestamistas Destacados</h2>
            <p className="mt-3 text-sm text-green-900/70">
              Bancos y prestamistas regulados que operan en {region.nameEs}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredLenders.map((lender) => (
                <Card key={lender.name} className="border-green-100 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-green-900">{lender.name}</CardTitle>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {lender.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-green-600">{lender.rateRange}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-900/80">
                      {lender.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/mx/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Comparar Todas las Ofertas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="cities" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-green-900">
              Ciudades en {region.nameEs}
            </h2>
            <p className="mt-3 text-green-900/80">
              Explora préstamos en las principales ciudades de esta región. Información local detallada.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
              {region.topCities.map((city) => (
                <Card key={city} className="h-full border-green-100 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">{city}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-green-900/80">
                      Encuentra prestamistas y compara ofertas en {city}.
                    </p>
                    <div className="text-sm font-semibold text-green-600">
                      Ver detalles →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-green-900">Artículos Útiles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {blogTeasers.map((post) => (
                <Card key={post.href} className="h-full border-green-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-green-900/80">{post.excerpt}</p>
                    <div className="text-sm font-semibold text-green-600">
                      Leer más →
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MexicoFooter />
    </>
  )
}
