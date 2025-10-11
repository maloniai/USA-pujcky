import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import KazakhstanDisclosure from '@/components/kazakhstan/kazakhstan-disclosure'
import KazakhstanFAQ from '@/components/kazakhstan/kazakhstan-faq'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'
import { kazakhstanCities, getCityBySlug, getAllCitySlugs } from '@/data/kazakhstan-cities'
import { getRegionBySlug } from '@/data/kazakhstan-regions'

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.slug)
  
  if (!city) {
    return {
      title: 'Қала табылмады',
    }
  }

  const currentYear = new Date().getFullYear()
  const title = `${city.nameKk}, ${city.region} несиелері – ${currentYear} жылғы салыстыру`
  
  // Meta description: 120-155 characters
  const description = `${city.nameKk} қаласындағы жеке несиелер. Орташа мөлшерлеме: ${city.avgRate}. ҚҰБ лицензияланған несие берушілер, жергілікті қолдау, жылдам мақұлдау. Қазір салыстырыңыз!`
  
  return {
    title,
    description,
    openGraph: {
      title: `${city.nameKk} несиелері`,
      description: city.descriptionKk,
      url: `https://loansai.com/kk/cities/${city.slug}`,
    },
    alternates: {
      canonical: `https://loansai.com/kk/cities/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug)
  
  if (!city) {
    notFound()
  }

  const region = getRegionBySlug(city.regionSlug)
  const currentYear = new Date().getFullYear()

  // Find nearby cities for lateral linking
  const nearbyCities = city.nearbyCity
    .map(nearbyName => kazakhstanCities.find(c => c.name === nearbyName))
    .filter(c => c !== undefined)
    .slice(0, 3)

  const faqItems = [
    {
      question: `${city.nameKk} қаласында несие алу үшін қандай талаптар бар?`,
      answer: `${city.nameKk} қаласында несие алу үшін: 18 жастан асқан болуыңыз, Қазақстан тұрғыны болуыңыз, тұрақты табыс көзі болуы және жарамды жеке куәлік болуы керек. Несие берушілер сіздің несиелік тарихыңызды тексереді және несие қабілетіңізді бағалайды.`
    },
    {
      question: `${city.nameKk} қаласында орташа несие мөлшерлемелері қандай?`,
      answer: `${city.nameKk} қаласындағы орташа пайыздық мөлшерлеме ${city.avgRate} құрайды, ал орташа несие сомасы ${city.avgLoanAmount} шамасында. Нақты мөлшерлеме сіздің несиелік тарихыңызға, табысыңызға және таңдалған несие берушіге байланысты өзгеруі мүмкін. Ең жақсы мөлшерлемелер үшін бірнеше ұсынысты салыстыру маңызды.`
    },
    {
      question: `${city.nameKk} қаласында несие өтінішін өңдеу қанша уақыт алады?`,
      answer: `${city.nameKk} қаласындағы несие өтінішінің өңделу уақыты несие берушіге байланысты өзгереді. Онлайн несие берушілер 24-48 сағат ішінде шешім қабылдауы мүмкін. Дәстүрлі банктер толығырақ тексеру үшін 3-7 жұмыс күні алуы мүмкін. Толық және дұрыс құжаттама процесті жылдамдатады.`
    },
    {
      question: `${city.nameKk} қаласында қандай несие түрлері қолжетімді?`,
      answer: `${city.nameKk} қаласында ${city.loanTypesKk.join(', ')} қолжетімді. Әрбір несие берушінің өзіндік талаптары мен шарттары бар. Біздің платформа сізді профиліңізге сәйкес келетін несие берушілермен байланыстырады.`
    },
    {
      question: `${city.nameKk} қаласындағы несиелер қандай заңдармен реттеледі?`,
      answer: `${city.nameKk} қаласындағы барлық несиелер Қазақстан Республикасының Микроқаржылық қызмет туралы заңына және ҚҰБ реттеулеріне жатады. Максималды ЖПМ 56%. Қарыз алушыларда 14 күндік бас тарту құқығы, мерзімінен бұрын төлеу құқығы және барлық шығындар мен шарттар туралы толық ақпарат алу құқығы бар.`
    }
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Басты бет',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Қазақстан',
        item: 'https://loansai.com/kk'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Қалалар',
        item: 'https://loansai.com/kk/cities'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.nameKk,
        item: `https://loansai.com/kk/cities/${city.slug}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `${city.nameKk} жеке несиелері`,
    description: city.descriptionKk,
    areaServed: {
      '@type': 'City',
      name: city.nameKk,
      containedIn: {
        '@type': 'State',
        name: city.region
      }
    },
    serviceType: 'Жеке несие салыстыру',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI Қазақстан'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'KZT',
      lowPrice: city.avgLoanAmount.replace(/[^\d]/g, ''),
      availability: 'https://schema.org/InStock'
    }
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${city.nameKk} несие каталогы`,
    itemListElement: city.loanTypesKk.map((loanType, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'LoanOrCredit',
        name: loanType,
        loanType: loanType,
        currency: 'KZT'
      }
    }))
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb - Up navigation */}
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600">
            <Link href="/kk" className="hover:text-blue-600">Басты бет</Link>
            <span className="mx-2">/</span>
            <Link href="/kk/regions" className="hover:text-blue-600">Аймақтар</Link>
            <span className="mx-2">/</span>
            <Link href={`/kk/regions/${city.regionSlug}`} className="hover:text-blue-600">
              {city.region}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/kk/cities" className="hover:text-blue-600">Қалалар</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{city.nameKk}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {city.nameKk}, {city.region} несиелері
              </h1>
              <p className="text-xl mb-6 opacity-90">
                {city.descriptionKk}
              </p>
              <Link href="/kk/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Өтініш беру
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section - 80-120 words, unique per city */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {city.nameKk} қаласы {city.population} тұрғынға қызмет көрсетеді және несие берушілердің 
              белсенді нарығы бар. Орташа несие сомасы {city.avgLoanAmount} құрайды, пайыздық мөлшерлеме 
              {city.avgRate} шамасында. Қалада {city.loanTypesKk.slice(0, 3).join(', ')} және басқа да 
              несие өнімдері қолжетімді. Барлық несие берушілер ҚҰБ лицензиясымен жұмыс істейді және 
              Қазақстан заңдарын сақтайды. Қалалық несие берушілер жергілікті экономиканы түсінеді және 
              тұрғындарға икемді шарттарды ұсынады. Микроқаржы ұйымдары мен банктер бәсекелес мөлшерлемелер 
              мен қызметтерді ұсынады, бұл қарыз алушыларға жақсы опцияларды табуға мүмкіндік береді.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.population}</div>
                <div className="text-sm text-gray-600">Халық</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgLoanAmount}</div>
                <div className="text-sm text-gray-600">Орташа несие сомасы</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{city.avgRate}</div>
                <div className="text-sm text-gray-600">Орташа мөлшерлеме</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations - 5-8 bullets */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span>⚖️</span>
                {city.nameKk} қаласындағы несиелік реттеулер және қарыз алушы қорғауы
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Максималды ЖПМ:</strong> 56% (Микроқаржылық қызмет туралы заң)
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Лицензиялау:</strong> Барлық несие берушілерде ҚҰБ лицензиясы болуы керек
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Бас тарту құқығы:</strong> Шартқа қол қойғаннан кейін айыппұлсыз 14 күн
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Мерзімінен бұрын төлеу:</strong> Рұқсат етіледі (максимум 1% комиссия)
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Несиелік тарих:</strong> Міндетті несиелік бюро тексеруі
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Ашық жариялау:</strong> Барлық шығындар мен шарттар жазбаша түрде
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Деректерді қорғау:</strong> ДҚБЖ сәйкес жеке деректер құпиялылығы
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Дау шешу:</strong> ҚҰБ және тұтынушылардың құқықтарын қорғау органдарына шағым жасау құқығы
                  </span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Қадағалау органы:</strong> Қазақстан Ұлттық Банкі (ҚҰБ) •{' '}
                  <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    nationalbank.kz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Loan Types */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {city.nameKk} қаласында қолжетімді несие түрлері
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.loanTypesKk.map((loanType, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💼</span>
                    <h3 className="font-bold text-gray-900">{loanType}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    ҚҰБ лицензияланған несие берушілерден қолжетімді
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities - Lateral Links */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Сізге жақын несиелер
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity!.slug}
                    href={`/kk/cities/${nearbyCity!.slug}`}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span>🏙️</span>
                      {nearbyCity!.nameKk}
                    </h3>
                    <div className="text-sm text-gray-600">
                      <div>📊 Орташа: {nearbyCity!.avgRate}</div>
                      <div>💰 {nearbyCity!.avgLoanAmount}</div>
                    </div>
                    <div className="mt-3 text-blue-600 text-sm font-semibold">
                      Көру →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Region Link */}
        {region && (
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto">
              <Link 
                href={`/kk/regions/${city.regionSlug}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <span>←</span>
                <span>{region.nameKk} несиелеріне қайту</span>
              </Link>
            </div>
          </section>
        )}

        {/* FAQ Section - 3-5 Q/A */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure Block */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {city.nameKk} қаласында несие табуға дайынсыз ба?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Өтінішті толтырыңыз және қалаңыздағы ең жақсы несие ұсыныстарын алыңыз.
              </p>
              <Link href="/kk/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Өтініш беру
                  </span>
                </Button>
              </Link>
              <p className="mt-6 text-sm opacity-75">
                Несиелік балға әсері жоқ • Жылдам жауап • 100% тегін
              </p>
            </div>
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
