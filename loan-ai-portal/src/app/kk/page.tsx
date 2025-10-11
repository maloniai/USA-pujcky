import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import KazakhstanDisclosure from '@/components/kazakhstan/kazakhstan-disclosure'
import KazakhstanFAQ from '@/components/kazakhstan/kazakhstan-faq'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'
import { kazakhstanRegions } from '@/data/kazakhstan-regions'

export const metadata: Metadata = {
  title: 'Жеке несиелер Қазақстан 2025 – ҚҰБ лицензияланған ұсыныстарды салыстыру',
  description: 'Қазақстанда ҚҰБ лицензияланған несие берушілерден жеке несиелерді салыстырыңыз. Бәсекеге қабілетті мөлшерлемелер, жылдам мақұлдау, толық ашықтық. Барлық аймақтардағы ең жақсы ұсыныстарды табыңыз.',
  keywords: 'жеке несиелер қазақстан, қарыз, ҚҰБ, несиелерді салыстыру, пайыздық мөлшерлемелер, жылдам несиелер, онлайн несиелер қазақстан',
  openGraph: {
    title: 'Жеке несиелер Қазақстан – Лицензияланған несие берушілерден ұсыныстарды салыстыру',
    description: 'Қазақстанда жеке несиелерді салыстыру платформасы. ҚҰБ лицензияланған несие берушілер, толық ашықтық, қазақша көмек.',
    url: 'https://loansai.com/kk',
    siteName: 'LoansAI Қазақстан',
    locale: 'kk_KZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/kk',
  },
}

const faqItems = [
  {
    question: 'ЖПМ (Жылдық пайыздық мөлшерлеме) дегеніміз не және ол қалай есептеледі?',
    answer: 'ЖПМ несиенің жыл сайынғы пайызды көрсететін жалпы құнын білдіреді. Ол пайыз мөлшерлемесін, комиссияларды және несиеге байланысты барлық басқа шығындарды қамтиды. ҚҰБ реттеулеріне сәйкес, тұтынушылық несиелер үшін рұқсат етілген максималды ЖПМ 56% құрайды. ЖПМ әртүрлі несие берушілердің ұсыныстарын нақты жалпы құны бойынша салыстыруға көмектеседі.'
  },
  {
    question: 'Мақұлданғаннан кейін қанша уақытта ақша ала аламын?',
    answer: 'Мерзімі несие берушіге және тексерулердің күрделілігіне байланысты. Онлайн несиелер 24-48 сағат ішінде мақұлдануы мүмкін, ал ақша тікелей банк шотыңызға аударылады. Дәстүрлі банктік несиелер 3-7 жұмыс күні алуы мүмкін. Толық және дұрыс құжаттама процесті жылдамдатады.'
  },
  {
    question: 'Жеке несиеге өтініш беру үшін қандай құжаттар қажет?',
    answer: 'Әдетте сізге қажет: жарамды жеке куәлік, табыс дәлелі (жалақы туралы анықтама, ЖК/ЖШС үшін табыс декларациясы), банк шоты үзіндісі (соңғы 3-6 ай), тұрғылықты жері туралы дәлел, және несие қабілетін бағалау сауалнамасын толтыру. Кейбір несие берушілер сұралған сомаға байланысты қосымша құжаттарды сұрауы мүмкін.'
  },
  {
    question: 'Несиелік тарихым нашар болса, несие ала аламын ба?',
    answer: 'Иә, несиелік тарихы аз қолайлы адамдарға несиелер беретін несие берушілер бар, бірақ жоғары пайыздық мөлшерлемелермен және аз сомалармен. Қолданыстағы қарыздарды уақытында төлеу және жауапты қаржылық мінез-құлық арқылы несиелік балды жақсарту маңызды. Кейбір несие берушілер тек тарихты емес, қазіргі қайтару қабілетін де бағалайды.'
  },
  {
    question: 'Қарыз алушы ретінде Қазақстанда менің қандай құқықтарым бар?',
    answer: 'Сізде мыналарға құқық бар: қол қоюдан бұрын нақты және толық ақпарат алу, айыппұлсыз 14 күндік бас тарту мерзімі, мерзімінен бұрын төлеу (ерте қайтарылған сомадан максимум 1% комиссиямен), шамадан тыс тәжірибелерден қорғау, ДҚБЖ сәйкес жеке деректердің құпиялылығы. Барлық несиелер ҚҰБ белгілеген ЖПМ шектеулерін сақтауы керек.'
  }
]

export default function KazakhstanHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Қазақстан - Жеке несиелерді салыстыру',
    description: 'ҚҰБ лицензияланған несие берушілері бар Қазақстандағы жеке несиелерді салыстыру платформасы',
    url: 'https://loansai.com/kk',
    areaServed: {
      '@type': 'Country',
      name: 'Қазақстан'
    },
    availableLanguage: 'kk',
    serviceType: 'Жеке несиелерді салыстыру',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
    }
  }

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

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Қазақстандағы жеке несиелер',
    itemListElement: kazakhstanRegions.slice(0, 5).map((region, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LoanOrCredit',
        name: `${region.nameKk} жеке несиелері`,
        description: region.descriptionKk,
        loanType: 'Жеке несие',
        currency: 'KZT',
        amount: {
          '@type': 'MonetaryAmount',
          currency: 'KZT',
          value: region.avgLoanAmount
        }
      }
    }))
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇰🇿 ҚҰБ лицензияланған және реттеледі
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Қазақстандағы жеке несиелер
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              30+ ҚҰБ лицензияланған несие берушілерден несиелік ұсыныстарды салыстырыңыз. 
              Толық ашықтық, бәсекеге қабілетті мөлшерлемелер, жылдам мақұлдау.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/kk/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Қазір өтініш беру
                  </span>
                </Button>
              </Link>
              <Link href="/kk/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Аймақтарды зерттеу
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Лицензияланған несие берушілер</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-sm text-gray-600">Қамтылған аймақтар</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Негізгі қалалар</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">19M</div>
                <div className="text-sm text-gray-600">Қамтылған халық</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Бұл қалай жұмыс істейді?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Өтінішті толтыру</h3>
                <p className="text-gray-600">
                  Өзіңіз және қажет несие туралы негізгі ақпаратпен онлайн нысанды 2-3 минутта толтырыңыз.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ұсыныстарды салыстыру</h3>
                <p className="text-gray-600">
                  Бірнеше несие берушілерден жекелендірілген ұсыныстар алыңыз. Мөлшерлемелерді, шарттарды салыстырыңыз және ең жақсысын таңдаңыз.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ақша алу</h3>
                <p className="text-gray-600">
                  Мақұлданғаннан кейін, ақша тікелей банк шотыңызға аударылады, әдетте 24-48 сағат ішінде.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
              Аймақ бойынша несиелерді зерттеу
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Қазақстанның әрбір даму аймағы үшін несиелер, реттеулер және несие берушілер туралы нақты ақпарат.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kazakhstanRegions.slice(0, 8).map((region) => (
                <Link key={region.slug} href={`/kk/regions/${region.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition">
                        {region.nameKk}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>👥</span>
                          <span>{region.population} тұрғын</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>💰</span>
                          <span>Орташа: {region.avgLoanAmount}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📊</span>
                          <span>Мөлшерлеме: {region.avgRate}</span>
                        </p>
                      </div>
                      <div className="mt-4 text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Толығырақ көру →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/kk/regions">
                <Button variant="outline" size="lg">
                  Барлық аймақтарды көру
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Қазақстандағы негізгі реттеулер
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    Тұтынушыларды қорғау
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Максималды заңды ЖПМ: 56% Микроқаржылық қызмет туралы заңға сәйкес</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Бас тарту мерзімі: айыппұлсыз 14 күн</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Мерзімінен бұрын төлеуге рұқсат етіледі (максимум комиссия 1%)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Шығындардың толық ашықтығы</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span>🏛️</span>
                    Лицензиялау және қадағалау
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Қазақстан Ұлттық Банкімен (ҚҰБ) реттеледі</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Барлық несие берушілер үшін лицензия міндетті</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Микроқаржылық қызмет туралы заңға сәйкестік</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>Жеке деректер үшін ДҚБЖ қорғауы</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://nationalbank.kz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Қосымша ақпарат үшін ҚҰБ веб-сайтына барыңыз ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Несиелік ұсыныстарды салыстыруға дайынсыз ба?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Өтінішті 2 минутта толтырыңыз және лицензияланған несие берушілерден жекелендірілген ұсыныстар алыңыз.
            </p>
            <Link href="/kk/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  Қазір бастау - Тегін
                </span>
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Несиелік балға әсері жоқ • Жылдам жауап • 100% тегін
            </p>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Несиелер үшін танымал қалалар
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе', 
                'Өскемен', 'Тараз', 'Павлодар', 'Семей', 'Ақтау'].map((city) => (
                <Link
                  key={city}
                  href={`/kk/cities`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-400 hover:shadow-md transition"
                >
                  <div className="text-2xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold text-gray-900">{city}</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/kk/cities">
                <Button variant="outline" size="lg">
                  Барлық қалаларды көру
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanDisclosure />
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
