import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'
import { kazakhstanRegions, getRegionsByPopulation } from '@/data/kazakhstan-regions'

export const metadata: Metadata = {
  title: 'Қазақстан аймақтары бойынша несиелер – 2025 жылғы салыстыру',
  description: 'Қазақстанның барлық аймақтарындағы жеке несие мөлшерлемелерін, шарттарын және қолжетімділігін салыстырыңыз. ҚҰБ реттеулері, орташа несие сомалары және аймақтық несие берушілер.',
  openGraph: {
    title: 'Қазақстан аймақтары бойынша несиелер',
    description: 'Қазақстанның әр аймағы үшін нақты несие ақпараты, реттеулері және ұсыныстары.',
    url: 'https://loansai.com/kk/regions',
  },
  alternates: {
    canonical: 'https://loansai.com/kk/regions',
  },
}

export default function RegionsPage() {
  const sortedRegions = getRegionsByPopulation()

  return (
    <>
      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Қазақстан аймақтары бойынша несиелер
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Әрбір аймақ үшін несиелік мөлшерлемелер, шарттар және қолжетімділік туралы толық ақпарат. 
              Өзіңіздің аймағыңызға сәйкес ең жақсы несие опцияларын табыңыз.
            </p>
            <Link href="/kk/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Өтініш беру
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-6">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-gray-600">
              <Link href="/kk" className="hover:text-blue-600">Басты бет</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Аймақтар</span>
            </nav>
          </div>
        </div>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedRegions.map((region) => (
                <Link key={region.slug} href={`/kk/regions/${region.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 h-full cursor-pointer group border-2 hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition flex items-center justify-between">
                        <span>{region.nameKk}</span>
                        <span className="text-2xl">📍</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">👥 Халық:</span>
                          <span className="font-semibold text-gray-900">{region.population}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">💰 Орташа несие:</span>
                          <span className="font-semibold text-gray-900">{region.avgLoanAmount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">📊 Орташа мөлшерлеме:</span>
                          <span className="font-semibold text-blue-600">{region.avgRate}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">🏆 Максимум несие:</span>
                          <span className="font-semibold text-gray-900">{region.maxLoanAmount}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                        {region.descriptionKk}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-500 mb-2">Негізгі қалалар:</div>
                        <div className="flex flex-wrap gap-1">
                          {region.majorCities.slice(0, 3).map((city) => (
                            <span key={city} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Толығырақ көру →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Аймақтық несиелер туралы білу керек
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>📈</span>
                    Мөлшерлемелердегі айырмашылықтар
                  </h3>
                  <p className="text-sm text-gray-700">
                    Пайыздық мөлшерлемелер аймаққа, жергілікті бәсекелестікке, экономикалық жағдайларға 
                    және қолжетімді несие берушілерге байланысты өзгеруі мүмкін. Үлкен қалаларда әдетте 
                    төмен мөлшерлемелер және көбірек опциялар болады.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Барлық аймақтарда бірдей реттеу
                  </h3>
                  <p className="text-sm text-gray-700">
                    Барлық Қазақстан аймақтары ҚҰБ реттеуіне және Микроқаржылық қызмет туралы заңға 
                    жатады. Максималды 56% ЖПМ барлық жерде бірдей. Қарыз алушының құқықтары барлық 
                    аймақтарда қорғалған.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Өзіңіздің аймағыңызда несие табуға дайынсыз ба?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Қайсысы аймақта болсаңыз да, біз сізді ең жақсы несие берушілермен байланыстырамыз.
            </p>
            <Link href="/kk/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Қазір өтініш беру
                </span>
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
