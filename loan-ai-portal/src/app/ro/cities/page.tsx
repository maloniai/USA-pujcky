import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import StickyApplyButton from '@/components/romania/sticky-apply-button'
import { romaniaCities } from '@/data/romania-cities'
import { romaniaRegions } from '@/data/romania-regions'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Orașe România – Credite Personale în 40+ Orașe | LoansAI',
  description: 'Compară credite personale în peste 40 de orașe din România. București, Cluj-Napoca, Timișoara, Iași și multe altele. Oferte locale, creditori licențiați BNR.',
  keywords: 'credite bucuresti, credite cluj, credite timisoara, credite iasi, credite constanta, credite orase romania',
  alternates: {
    canonical: 'https://loansai.com/ro/cities',
  },
}

export default function RomaniaCitiesPage() {
  // Group cities by region
  const citiesByRegion: Record<string, typeof romaniaCities> = {}
  romaniaCities.forEach(city => {
    if (!citiesByRegion[city.regionSlug]) {
      citiesByRegion[city.regionSlug] = []
    }
    citiesByRegion[city.regionSlug].push(city)
  })

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Credite Personale în Orașe România',
    description: 'Găsește cele mai bune credite personale în peste 40 de orașe din România',
    url: 'https://loansai.com/ro/cities',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasă',
          item: 'https://loansai.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'România',
          item: 'https://loansai.com/ro'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Orașe',
          item: 'https://loansai.com/ro/cities'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-cities" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <RomaniaNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Acasă', url: '/' },
                { name: 'România', url: '/ro' },
                { name: 'Orașe', url: '/ro/cities' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credite Personale în Orașe din România
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explorează ofertele de credite personale în peste 40 de orașe majore din România. 
              Informații locale, creditori disponibili, rate competitive adaptate comunității tale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Orașe</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">19M</div>
                <div className="text-sm text-gray-600">Populație</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Creditori</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities by Region */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {romaniaRegions.map((region) => {
              const regionCities = citiesByRegion[region.slug] || []
              if (regionCities.length === 0) return null

              return (
                <div key={region.slug} id={region.slug} className="mb-16">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-2 flex items-center gap-3">
                      <span className="text-purple-600">📍</span>
                      {region.nameRo}
                    </h2>
                    <p className="text-gray-600">{regionCities.length} orașe disponibile</p>
                    <Link 
                      href={`/ro/regions/${region.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 mt-2"
                    >
                      Vezi informații despre regiunea {region.nameRo} →
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionCities
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((city) => (
                        <Link
                          key={city.slug}
                          href={`/ro/cities/${region.slug}/${city.slug}`}
                        >
                          <Card className="h-full hover:shadow-xl transition cursor-pointer group">
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-3">
                                {city.nameRo}
                              </h3>
                              <div className="space-y-2 text-sm text-gray-600 mb-4">
                                <p className="flex items-center gap-2">
                                  <span>👥</span>
                                  <span>{city.population} locuitori</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span>💰</span>
                                  <span>Credit mediu: {city.avgLoanAmount}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span>📊</span>
                                  <span>Rată: {city.avgRate}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span>🏦</span>
                                  <span>{city.lenderCount}+ creditori</span>
                                </p>
                                <p className="flex items-center gap-2">
                                  <span>⭐</span>
                                  <span>Scor mediu: {city.avgCreditScore}</span>
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {city.topLoanTypesRo.slice(0, 2).map((type, idx) => (
                                  <span 
                                    key={idx}
                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                                  >
                                    {type}
                                  </span>
                                ))}
                              </div>
                              <div className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                Vezi detalii →
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Quick Region Links */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Salt rapid la regiune
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {romaniaRegions.map((region) => (
                  <a
                    key={region.slug}
                    href={`#${region.slug}`}
                    className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    {region.nameRo}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why City-Specific */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              De ce credite specifice pe orașe?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>🏙️</span>
                  Context local
                </h3>
                <p className="text-gray-700 text-sm">
                  Fiecare oraș are caracteristici economice unice - de la costul vieții la oportunitățile de angajare - 
                  care influențează condițiile de creditare disponibile.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>🏦</span>
                  Creditori locali
                </h3>
                <p className="text-gray-700 text-sm">
                  Unii creditori au prezență mai puternică în anumite orașe și pot oferi condiții preferențiale 
                  pentru rezidenții locali sau au birouri unde poți merge personal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>💰</span>
                  Oferte adaptate
                </h3>
                <p className="text-gray-700 text-sm">
                  Rate și sume de credit pot varia în funcție de piața locală. Informațiile specifice orașului 
                  te ajută să ai așteptări realiste și să găsești cele mai bune oferte.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>📊</span>
                  Date relevante
                </h3>
                <p className="text-gray-700 text-sm">
                  Vezi statistici reale despre scorul de credit mediu, sumele împrumutate și ratele din orașul 
                  tău pentru a înțelege mai bine piața locală.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
