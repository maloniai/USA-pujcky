import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'
import { kazakhstanCities, getCitiesByPopulation } from '@/data/kazakhstan-cities'

export const metadata: Metadata = {
  title: 'Қазақстан қалалары бойынша несиелер – 2025 жылғы салыстыру',
  description: 'Қазақстанның барлық негізгі қалаларындағы жеке несие мөлшерлемелерін, шарттарын және қолжетімділігін салыстырыңыз. ҚҰБ лицензияланған несие берушілер, жергілікті мөлшерлемелер, қалалық несие опциялары.',
  openGraph: {
    title: 'Қазақстан қалалары бойынша несиелер',
    description: 'Қазақстанның әр қаласы үшін нақты несие ақпараты, мөлшерлемелері және ұсыныстары.',
    url: 'https://loansai.com/kk/cities',
  },
  alternates: {
    canonical: 'https://loansai.com/kk/cities',
  },
}

export default function CitiesPage() {
  const sortedCities = getCitiesByPopulation()

  return (
    <>
      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Қазақстан қалалары бойынша несиелер
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Әрбір қала үшін несиелік мөлшерлемелер, жергілікті несие берушілер және нақты шарттар туралы толық ақпарат. 
              Өзіңіздің қалаңызға сәйкес ең жақсы несие опцияларын табыңыз.
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
              <span className="text-gray-900 font-medium">Қалалар</span>
            </nav>
          </div>
        </div>

        {/* Cities Grid */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCities.map((city) => (
                <Link key={city.slug} href={`/kk/cities/${city.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 h-full cursor-pointer group border-2 hover:border-blue-400">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition flex items-center justify-between">
                        <span>{city.nameKk}</span>
                        <span className="text-2xl">🏙️</span>
                      </CardTitle>
                      <div className="text-sm text-gray-500">{city.region}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">👥 Халық:</span>
                          <span className="font-semibold text-gray-900">{city.population}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">💰 Орташа несие:</span>
                          <span className="font-semibold text-gray-900">{city.avgLoanAmount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">📊 Орташа мөлшерлеме:</span>
                          <span className="font-semibold text-blue-600">{city.avgRate}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                        {city.descriptionKk}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="text-xs text-gray-500 mb-2">Танымал несие түрлері:</div>
                        <div className="flex flex-wrap gap-1">
                          {city.loanTypesKk.slice(0, 2).map((type) => (
                            <span key={type} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                              {type}
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
                Қалалық несиелер туралы білу керек
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏙️</span>
                    Үлкен қалалардағы артықшылықтар
                  </h3>
                  <p className="text-sm text-gray-700">
                    Алматы, Астана және Шымкент сияқты үлкен қалаларда әдетте көбірек несие берушілер, 
                    төмен мөлшерлемелер және әртүрлі несие өнімдері қолжетімді. Бәсекелестік жоғары, 
                    бұл қарыз алушыларға пайдалы.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🌾</span>
                    Аймақтық қалалардағы опциялар
                  </h3>
                  <p className="text-sm text-gray-700">
                    Аймақтық қалаларда жергілікті микроқаржы ұйымдары мен кооперативтер жақсы қызмет 
                    көрсетуі мүмкін. Олар жергілікті экономиканы түсінеді және икемді шарттарды ұсынады. 
                    Барлық несие берушілерде ҚҰБ лицензиясы болуы керек.
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
              Өзіңіздің қалаңызда несие табуға дайынсыз ба?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Қайсысы қалада болсаңыз да, біз сізді ең жақсы несие берушілермен байланыстырамыз.
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
