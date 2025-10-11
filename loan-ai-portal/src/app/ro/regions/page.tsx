import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import StickyApplyButton from '@/components/romania/sticky-apply-button'
import { romaniaRegions } from '@/data/romania-regions'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Regiuni România – Credite Personale după Regiune | LoansAI',
  description: 'Explorează ofertele de credite personale în toate cele 8 regiuni de dezvoltare din România. Reglementări locale, creditori licențiați, rate competitive.',
  keywords: 'credite romania regiuni, bucuresti ilfov, transilvania, moldova, muntenia, oltenia, banat, crisana, maramures',
  alternates: {
    canonical: 'https://loansai.com/ro/regions',
  },
}

export default function RomaniaRegionsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Regiuni România - Credite Personale',
    description: 'Credite personale în toate regiunile de dezvoltare din România',
    url: 'https://loansai.com/ro/regions',
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
          name: 'Regiuni',
          item: 'https://loansai.com/ro/regions'
        }
      ]
    }
  }

  return (
    <>
      <Script id="schema-regions" type="application/ld+json">
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
                { name: 'Regiuni', url: '/ro/regions' },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credite Personale pe Regiuni în România
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explorează ofertele de credite specifice pentru fiecare dintre cele 8 regiuni de dezvoltare. 
              Informații despre reglementări locale, creditori disponibili și rate medii.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Regiuni</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">40+</div>
                <div className="text-sm text-gray-600">Orașe Majore</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Creditori Licențiați</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {romaniaRegions.map((region) => (
                <Link key={region.slug} href={`/ro/regions/${region.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition">
                        {region.nameRo}
                      </CardTitle>
                      <p className="text-gray-600 mt-2">{region.descriptionRo}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">👥</span>
                          <div>
                            <div className="font-semibold text-gray-900">Populație</div>
                            <div className="text-gray-600">{region.population}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">💰</span>
                          <div>
                            <div className="font-semibold text-gray-900">Credit mediu</div>
                            <div className="text-gray-600">{region.avgLoanAmount}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">📊</span>
                          <div>
                            <div className="font-semibold text-gray-900">Rată medie</div>
                            <div className="text-gray-600">{region.avgRate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-2xl">🏙️</span>
                          <div>
                            <div className="font-semibold text-gray-900">Orașe majore</div>
                            <div className="text-gray-600">{region.majorCities.slice(0, 3).join(', ')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                        Explorează regiunea →
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
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                De ce informații specifice pe regiuni?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Oferte locale</h3>
                  <p className="text-gray-700 text-sm">
                    Creditorii pot avea oferte și condiții diferite în funcție de regiunea în care activezi. 
                    Informațiile specifice te ajută să găsești cele mai bune opțiuni locale.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Context economic</h3>
                  <p className="text-gray-700 text-sm">
                    Fiecare regiune are caracteristici economice unice care influențează piața creditelor - 
                    de la venituri medii la costul vieții.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Acces la creditori</h3>
                  <p className="text-gray-700 text-sm">
                    Unii creditori au prezență mai puternică în anumite regiuni. Cunoașterea acestor detalii 
                    îți crește șansele de aprobare.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Orașe și comunități</h3>
                  <p className="text-gray-700 text-sm">
                    Explorează credite specifice orașelor din regiunea ta pentru informații și mai detaliate 
                    adaptate comunității tale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RomaniaFooter />
    </>
  )
}
