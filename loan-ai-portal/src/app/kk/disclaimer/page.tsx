import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Жауапкершіліктен бас тарту – LoansAI Қазақстан',
  description: 'LoansAI жауапкершілігі туралы ақпарат. Несие салыстыру қызметін пайдаланудағы тәуекелдер мен шектеулер.',
  alternates: {
    canonical: 'https://loansai.com/kk/disclaimer',
  },
}

export default function DisclaimerPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Басты бет', item: 'https://loansai.com' },
      { '@type': 'ListItem', position: 2, name: 'Қазақстан', item: 'https://loansai.com/kk' },
      { '@type': 'ListItem', position: 3, name: 'Жауапкершілік', item: 'https://loansai.com/kk/disclaimer' }
    ]
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
      <KazakhstanNavigation />
      <StickyApplyButton />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600">
            <Link href="/kk" className="hover:text-blue-600">Басты бет</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Жауапкершіліктен бас тарту</span>
          </nav>
        </div>
        <article className="container mx-auto px-4 pb-12 max-w-4xl prose prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Жауапкершіліктен бас тарту</h1>
          <p className="text-gray-600 mb-8">Соңғы жаңарту: қазан 2025</p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="text-gray-800 font-semibold mb-2">⚠️ МАҢЫЗДЫ ЕСКЕРТУ</p>
            <p className="text-gray-700 leading-relaxed">
              Бұл жауапкершіліктен бас тарту LoansAI қызметін пайдалану кезінде оқылуы және түсінілуі керек. 
              Қызметті пайдалану арқылы, сіз осы бас тартуды оқып, түсінгеніңізді және қабылдайтыныңызды растайсыз.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Жалпы ақпарат</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI - бұл несие салыстыру платформасы. Біз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Несие беруші ЕМЕСПІЗ:</strong> Біз тікелей несие бермейміз</li>
              <li><strong>Қаржылық кеңесші ЕМЕСПІЗ:</strong> Біз жеке қаржылық кеңес бермейміз</li>
              <li><strong>Кепілдеме БЕРМЕЙМІЗ:</strong> Несиенің мақұлдануын немесе белгілі бір мөлшерлемелерді кепілдемейміз</li>
              <li><strong>Делдал болып табыламыз:</strong> Біз тек қарыз алушылар мен несие берушілерді байланыстырамыз</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ақпараттың дұрыстығы</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біз біздің веб-сайтта дұрыс және жаңартылған ақпарат ұсынуға тырысамыз, бірақ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ақпарат "қандай бар күйінде" ұсынылады</li>
              <li>Мөлшерлемелер, шарттар және ұсыныстар өзгеруі мүмкін</li>
              <li>Өте сирек жағдайларда қателер болуы мүмкін</li>
              <li>Біз ақпараттың толықтығын немесе дұрыстығын кепілдемейміз</li>
              <li>Ақпарат қаржылық кеңес ретінде түсініл мауы керек</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              ӘРҚАШАН нақты ақпарат үшін несие берушіге тікелей хабарласыңыз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Несие берушінің жауапкершілігі</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Барлық несие шешімдері мен шарттары несие берушілер қабылдайды:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Әрбір несие берушінің өз мақұлдау критерийлері бар</li>
              <li>Мөлшерлемелер мен шарттар несие берушіге байланысты өзгереді</li>
              <li>LoansAI несие берушілердің шешімдеріне әсер ете алмайды</li>
              <li>Несие берушілермен сіздің шартыңыз олармен тікелей</li>
              <li>Проблемалар туралы несие берушіге тікелей хабарласу керек</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Үшінші тарап сілтемелері</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біздің веб-сайтта несие берушілер мен басқа үшінші тараптардың веб-сайттарына сілтемелер бар. 
              Біз жауапты ЕМЕСПІЗ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Үшінші тарап веб-сайттарының мазмұны үшін</li>
              <li>Олардың құпиялылық саясаттары үшін</li>
              <li>Олардың қауіпсіздік тәжірибелері үшін</li>
              <li>Олардың өнімдері немесе қызметтері үшін</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Сілтемелерді пайдалану өз тәуекеліңізбен жүзеге асырылады.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Қаржылық кеңес жоқ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI арқылы ұсынылған ақпарат:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Жалпы білім беру мақсаты үшін</li>
              <li>Қаржылық, құқықтық немесе салық кеңесі ЕМЕС</li>
              <li>Сіздің нақты жағдайыңызға арналмаған</li>
              <li>Кәсіби кеңестің орнын басуға арналмаған</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Маңызды қаржылық шешімдер қабылдамас бұрын лицензияланған қаржылық кеңесшімен кеңесіңіз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Техникалық мәселелер</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біз веб-сайтымыздың үздіксіз жұмысына тырысамыз, бірақ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Техникалық проблемалар болуы мүмкін</li>
              <li>Қызмет уақытша қолжетімсіз болуы мүмкін</li>
              <li>Деректер жоғалуы немесе бүлінуі мүмкін</li>
              <li>Вирустар немесе зиянды бағдарлама жоқ деп кепілдемейміз</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Өз құрылғыңызды қорғау сіздің жауапкершілігіңіз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Жауапкершілікті шектеу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Заң рұқсат етке н жағдайда, LoansAI және оның серіктестері жауапты ЕМЕС:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Тікелей, жанама немесе арнайы залалдар үшін</li>
              <li>Пайда немесе кіріс жоғалуы үшін</li>
              <li>Деректер жоғалуы үшін</li>
              <li>Іскерлік мүмкіндіктер жоғалуы үшін</li>
              <li>Өтініш нәтижелері үшін</li>
              <li>Үшінші тараптардың әрекеттері немесе әрекетсіздігі үшін</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Жауапты несие алу</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <p className="text-gray-800 font-semibold mb-2">💡 МАҢЫЗДЫ КЕҢЕС</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Несие қабылдамас бұрын:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Барлық шарттар мен шығындарды мұқият оқыңыз</li>
                <li>Өзіңіздің төлем қабілетіңізді бағалаңыз</li>
                <li>Альтернативаларды қарастырыңыз</li>
                <li>Қажет болса кәсіби кеңес алыңыз</li>
                <li>Тым көп қарыз алмаңыз</li>
                <li>Өз құқықтарыңызды біліңіз</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Әріптестік ашық жариялау</h2>
            <p className="text-gray-700 leading-relaxed">
              LoansAI несие берушілерден комиссия алады, егер сіз олардың несиесін алсаңыз. Бұл комиссия 
              сізге қосымша шығын әкелмейді. Біз бейтараптылығымызды сақтауға тырысамыз, бірақ біздің 
              кіріс моделіміз бізді несие берушілермен байланысты екенін түсіну маңызды.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Заңды мәселелер</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Бұл жауапкершіліктен бас тарту:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Қазақстан Республикасының заңдарына сәйкес</li>
              <li>Біздің Пайдалану шарттарының бөлігі</li>
              <li>Өзгертілуі мүмкін хабарламасыз</li>
              <li>Заңмен қажет етілген минималды жауапкершілікті қамтымайды</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Байланыс</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сұрақтарыңыз болса:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700"><strong>LoansAI</strong></p>
              <p className="text-gray-700">Email: <a href="mailto:legal@loansai.kz" className="text-blue-600 hover:underline">legal@loansai.kz</a></p>
              <p className="text-gray-700">Телефон: +7 (727) 300-0000</p>
              <p className="text-gray-700">Мекенжай: Алматы, Қазақстан</p>
            </div>
          </section>
        </article>
      </main>
      <KazakhstanFooter />
    </>
  )
}
