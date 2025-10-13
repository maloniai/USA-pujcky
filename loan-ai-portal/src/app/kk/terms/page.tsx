import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Пайдалану шарттары – LoansAI Қазақстан',
  description: 'LoansAI қызметін пайдалану шарттары мен ережелері. Қазақстанда несие салыстыру платформасын пайдаланудың талаптары мен шектеулері.',
  alternates: {
    canonical: 'https://loansai.com/kk/terms',
  },
}

export default function TermsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Басты бет', item: 'https://loansai.com' },
      { '@type': 'ListItem', position: 2, name: 'Қазақстан', item: 'https://loansai.com/kk' },
      { '@type': 'ListItem', position: 3, name: 'Шарттар', item: 'https://loansai.com/kk/terms' }
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
            <span className="text-gray-900 font-medium">Пайдалану шарттары</span>
          </nav>
        </div>
        <article className="container mx-auto px-4 pb-12 max-w-4xl prose prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Пайдалану шарттары</h1>
          <p className="text-gray-600 mb-8">Соңғы жаңарту: қазан 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Шарттарды қабылдау</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI веб-сайтына (loansai.com) және қызметтеріне кіру немесе пайдалану арқылы, сіз 
              осы Пайдалану шарттарын оқып, түсінгеніңізді және келісетініңізді растайсыз. Егер сіз 
              осы шарттармен келіспесеңіз, қызметтерімізді пайдалануды тоқтатыңыз.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Біз осы шарттарды кез келген уақытта өзгерту құқығын өзімізде қалдырамыз. Өзгерістер 
              жарияланған күннен бастап күшіне енеді.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Қызмет сипаттамасы</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI - бұл несие салыстыру қызметі. Біз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Қарыз алушылар мен ҚҰБ лицензияланған несие берушілер арасындағы делдал ретінде әрекет етеміз</li>
              <li>Несие салыстыру платформасын ұсынамыз</li>
              <li>Несие өтінішін өңдеу қызметін көрсетеміз</li>
              <li>Несие беруші емес және несиелерді тікелей бермейміз</li>
              <li>Несие мақұлдауын кепілдемейміз</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Пайдаланушы талаптары</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біздің қызметтерді пайдалану үшін сіз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Кемінде 18 жаста болуыңыз керек</li>
              <li>Қазақстан Республикасының тұрғыны немесе азаматы болуыңыз керек</li>
              <li>Барлық берілген ақпарат дұрыс және толық болуын қамтамасыз етуіңіз керек</li>
              <li>Заңды мақсаттар үшін ғана қызметті пайдалануыңыз керек</li>
              <li>Басқа адамның атынан өтініш бере алмайсыз</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Пайдаланушының міндеттемелері</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сіз келесіге келісесіз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Дұрыс және толық ақпарат беруге</li>
              <li>Профиль ақпаратын жаңартып тұруға</li>
              <li>Тіркелгі тілгіңізді қорғауға және құпия ұстауға</li>
              <li>Қызметті алаяқтық немесе заңсыз мақсаттарда пайдаланбауға</li>
              <li>Басқа пайдаланушылардың немесе біздің құқықтарын бұзбауға</li>
              <li>Қызметті теріс пайдаланбауға (спам, хакинг, т.б.)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Несие өтінішін өңдеу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Сіз өтініш бергенде:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Біз сіздің ақпаратыңызды біздің несие берушілер желісіне жібереміз</li>
              <li>Несие берушілер сіздің профиліңізді бағалайды және өз шешімін қабылдайды</li>
              <li>Өтініш несиенің мақұлдануын кепілдемейді</li>
              <li>Несие берушілер тікелей сізбен байланысады</li>
              <li>Сіз ешқандай ұсынысты қабылдауға міндетті емессіз</li>
              <li>Әрбір несие берушінің өз шарттары мен ережелері бар</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ақы және төлем</h2>
            <p className="text-gray-700 leading-relaxed">
              LoansAI қызметі қарыз алушылар үшін ТЕГІН. Біз несие берушілерден комиссия аламыз. 
              Бұл комиссия сіздің несиеңіздің құнына әсер етпейді. Несие берушілердің өз ақылары 
              болуы мүмкін - олар сізге тікелей ашық жарияланады.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Зияткерлік меншік</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Барлық сайт мазмұны (мәтін, графика, логотиптер, суреттер, бағдарламалық қамтамасыз ету) 
              LoansAI-ге немесе оның лицензиаттарына тиесілі және авторлық құқық пен сауда белгілері 
              заңдарымен қорғалған.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Сіз мазмұнды жеке пайдалану үшін ғана көре аласыз және көшіре аласыз. Коммерциялық пайдалану 
              жазбаша рұқсатсыз тыйым салынады.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Жауапкершілікті шектеу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI жауапты ЕМЕС:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Несие берушілердің шешімдері үшін</li>
              <li>Несие берушілердің шарттары мен ережелері үшін</li>
              <li>Несие берушілермен сіздің арақатынасыңыз үшін</li>
              <li>Үшінші тарап веб-сайттары үшін (сілтемелер арқылы)</li>
              <li>Техникалық ақаулар немесе қызмет үзілістері үшін</li>
              <li>Дұрыс емес немесе толық емес ақпарат үшін</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Біздің қызметіміз "ҚАНДАЙ БАР КҮЙДЕ" ұсынылады, ЕШҚАНДАЙ кепілдіксіз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Зияндыны өтеу</h2>
            <p className="text-gray-700 leading-relaxed">
              Сіз LoansAI, оның қызметкерлері, директорлары және серіктестерін осы шарттарды бұзудан, 
              заңдарды бұзудан немесе үшінші тараптардың құқықтарын бұзудан туындаған кез келген 
              талаптардан, шығындардан, залалдардан, жауапкершіліктен қорғауға және зияндыны өтеуге 
              келісесіз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Тіркелгіні тоқтату</h2>
            <p className="text-gray-700 leading-relaxed">
              Біз кез келген себеппен, хабарламай тіркелгіңізді тоқтату немесе қызметке қол жеткізуді 
              шектеу құқығын өзімізде қалдырамыз, соның ішінде:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Осы шарттарды бұзу</li>
              <li>Алаяқтық немесе заңсыз қызмет</li>
              <li>Дұрыс емес ақпарат беру</li>
              <li>Қызметті теріс пайдалану</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Қолданылатын заң</h2>
            <p className="text-gray-700 leading-relaxed">
              Осы Шарттар Қазақстан Республикасының заңдарына сәйкес реттеледі және түсіндіріледі. 
              Барлық даулар Қазақстан сотының юрисдикциясына жатады.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Байланыс</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Осы Шарттар туралы сұрақтарыңыз болса:
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
