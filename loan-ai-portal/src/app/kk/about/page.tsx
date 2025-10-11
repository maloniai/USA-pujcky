import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Біз туралы – LoansAI Қазақстан | Несие салыстыру платформасы',
  description: 'LoansAI - бұл Қазақстанда жеке несиелерді салыстыру платформасы. Біз сізді ҚҰБ лицензияланған несие берушілермен байланыстырамыз. Ашықтық, қауіпсіздік, тегін қызмет.',
  openGraph: {
    title: 'Біз туралы – LoansAI Қазақстан',
    description: 'Қазақстандағы несие салыстыру платформасы. ҚҰБ лицензияланған несие берушілер.',
    url: 'https://loansai.com/kk/about',
  },
  alternates: {
    canonical: 'https://loansai.com/kk/about',
  },
}

export default function AboutPage() {
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
        name: 'Біз туралы',
        item: 'https://loansai.com/kk/about'
      }
    ]
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600">
            <Link href="/kk" className="hover:text-blue-600">Басты бет</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Біз туралы</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                LoansAI туралы
              </h1>
              <p className="text-xl opacity-90">
                Қазақстандағы жеке несиелерді салыстыру платформасы. 
                Біз сізді ең жақсы несие берушілермен байланыстырамыз.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Біздің миссиямыз</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              LoansAI-дің миссиясы - Қазақстандағы қарыз алушыларға ашық, қауіпсіз және ыңғайлы 
              несие салыстыру қызметін ұсыну. Біз несиелерді табу процесін жеңілдетеміз және сізге 
              ең жақсы шарттарды табуға көмектесеміз.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Біз сенеміз, әрбір қазақстандық өз қаржылық мақсаттарына жету үшін қолжетімді және 
              әділ несиеге лайық. Біздің технологиямыз сізді профиліңізге сәйкес келетін несие 
              берушілермен байланыстырады, уақытыңызды үнемдейді және ең жақсы ұсыныстарды алуға 
              мүмкіндік береді.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Біз қалай жұмыс істейміз</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Несие берушілерді салыстырамыз</h3>
                <p className="text-gray-600">
                  Біз Қазақстандағы 30+ ҚҰБ лицензияланған несие берушілермен жұмыс істейміз. 
                  Біздің платформа олардың ұсыныстарын салыстырады және сізге ең жақсысын табуға көмектеседі.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Сізді байланыстырамыз</h3>
                <p className="text-gray-600">
                  Өтініш бергеннен кейін, біз сіздің ақпаратыңызды сәйкес келетін несие берушілерге 
                  жібереміз. Олар тікелей сізбен байланысады және жекелендірілген ұсыныстар жасайды.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Сізді қолдаймыз</h3>
                <p className="text-gray-600">
                  Біздің команда процесс барысында сізге көмектесуге дайын. Сұрақтарыңыз немесе 
                  проблемаларыңыз болса, біз қол жетімдіміз.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Біздің құндылықтарымыз</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🔒 Қауіпсіздік</h3>
                  <p className="text-gray-700">
                    Сіздің жеке деректеріңіз бізге аса маңызды. Біз банктік деңгейдегі SSL шифрлаумен 
                    және GDPR сәйкестігімен деректеріңізді қорғаймыз. Деректеріңіз тек лицензияланған 
                    несие берушілермен бөлісіледі.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">✨ Ашықтық</h3>
                  <p className="text-gray-700">
                    Біз барлық шығындар, комиссиялар және шарттар туралы ашық айтамыз. Жасырын ақы жоқ, 
                    тосқауылдар жоқ. Сіз нені аласыз соны білесіз.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">⚖️ Әділеттілік</h3>
                  <p className="text-gray-700">
                    Біз тек ҚҰБ реттейтін және Қазақстан заңдарын сақтайтын несие берушілермен жұмыс 
                    істейміз. Сіз әділ қарым-қатынас пен тұтынушы қорғауға кепілдік аласыз.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🆓 Тегін қызмет</h3>
                  <p className="text-gray-700">
                    Біздің қызметіміз сіз үшін 100% тегін. Біз несие берушілерден комиссия аламыз, 
                    бірақ бұл сіздің несиеңіздің құнына әсер етпейді. Сізден ешқандай ақы алынбайды.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Неліктен LoansAI таңдау керек
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>⚡</span>
                  Жылдам және оңай
                </h3>
                <p className="text-gray-700 text-sm">
                  Өтінішті 2-3 минутта толтырыңыз. Несие берушілер 24-48 сағат ішінде жауап береді. 
                  Барлық процесс онлайн - офиске баруға қажет жоқ.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>🎯</span>
                  Бірнеше ұсыныс
                </h3>
                <p className="text-gray-700 text-sm">
                  Бір өтініш арқылы бірнеше несие берушіден ұсыныстар алыңыз. Мөлшерлемелер мен 
                  шарттарды салыстырыңыз және ең жақсысын таңдаңыз.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>🏛️</span>
                  Лицензияланған несие берушілер
                </h3>
                <p className="text-gray-700 text-sm">
                  Барлық біздің серіктестерімізде ҚҰБ лицензиясы бар. Олар Қазақстан заңдарын 
                  сақтайды және тұтынушыларды қорғау стандарттарына сай келеді.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span>💰</span>
                  Несиелік балға әсер жоқ
                </h3>
                <p className="text-gray-700 text-sm">
                  Біздің платформа арқылы өтініш беру сіздің несиелік балыңызға әсер етпейді. 
                  Бұл тек "жұмсақ тексеру" - сіз еркін ұсыныстарды қарай аласыз.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Реттеу және сәйкестік
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  LoansAI Қазақстан Республикасының заңдарына толық сәйкес жұмыс істейді. Біз:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Тек ҚҰБ лицензияланған несие берушілермен серіктесеміз</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>GDPR және Қазақстанның деректерді қорғау заңдарына сәйкесміз</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Микроқаржылық қызмет туралы заңды сақтаймыз</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Тұтынушылардың құқықтарын қорғау заңдарын қолдаймыз</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Барлық әріптестік қарым-қатынастарды ашық жарияламыз</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Қадағалау органы: <strong>Қазақстан Ұлттық Банкі (ҚҰБ)</strong> •{' '}
                  <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    nationalbank.kz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Несие табуға дайынсыз ба?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Өтінішті бастаңыз және ҚҰБ лицензияланған несие берушілерден ұсыныстар алыңыз.
            </p>
            <Link href="/kk/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Өтініш беру
              </Button>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Несиелік балға әсері жоқ • Жылдам жауап • 100% тегін
            </p>
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
