import { Metadata } from 'next';
import Link from 'next/link';
import { getKZMetadata } from '@/lib/seo';
import ApplyButton from '@/app/kz/components/ApplyButton';

export const metadata: Metadata = getKZMetadata({
  title: 'Пайдалану шарттары – Қазақстандағы несиелер',
  description: 'USA-pujcky.com сайтын пайдалану шарттары. Қазақстанда несие ақпараттық қызметімізді пайдалану ережелері мен шарттары.',
  path: '/kz/terms',
  type: 'website',
});

export default function TermsPage() {
  const lastUpdated = 'Қазан 2025';

  return (
    <>
      <ApplyButton />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-gray-600">
            <Link href="/kz" className="hover:text-blue-600">Басты бет</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Пайдалану шарттары</span>
          </nav>

          <article className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Пайдалану шарттары
            </h1>
            
            <p className="text-sm text-gray-600 mb-8">
              Соңғы жаңарту: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Шарттарды қабылдау</h2>
                <p>
                  USA-pujcky.com сайтына (бұдан әрі "Сайт") кіру немесе пайдалану арқылы сіз осы 
                  Пайдалану шарттарын ("Шарттар") оқып, түсінгеніңізді және олармен келісетініңізді растайсыз.
                </p>
                <p>
                  Егер сіз осы Шарттармен келіспесеңіз, Сайтты пайдаланбаңыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Қызмет сипаттамасы</h2>
                <p>
                  USA-pujcky.com несие туралы ақпараттық және салыстыру қызметін ұсынады. Біз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Қазақстандағы несие өнімдері туралы ақпарат береміз</li>
                  <li>Түрлі несие берушілерді салыстыруға көмектесеміз</li>
                  <li>Серіктес несие берушілерге өтінімдерді жіберуді жеңілдетеміз</li>
                  <li>Несие нарығы туралы білім беру материалдарын ұсынамыз</li>
                </ul>
                <p className="mt-4">
                  <strong>Маңызты:</strong> Біз несие берушіміз емеспіз және несие бермейміз. Біз тек 
                  ақпараттық қызмет көрсетеміз және серіктес несие берушілермен байланыстырамыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Қолданушы шарттары</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1. Жас шектеуі</h3>
                <p>
                  Сайтты пайдалану үшін сізге кемінде 18 жас болуы керек. Сайтты пайдалану арқылы сіз 
                  18 жасқа толғаныңызды растайсыз.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2. Тіркелу</h3>
                <p>
                  Өтінім беру кезінде сізден дұрыс, толық және ағымдағы ақпарат беру талап етіледі. 
                  Жалған ақпарат беру осы Шарттарды бұзу болып табылады.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3. Тыйым салынған әрекеттер</h3>
                <p>Сайтты пайдалану кезінде сізге:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Жалған немесе қате ақпарат беруге</li>
                  <li>Басқа адам атынан өтінім беруге</li>
                  <li>Сайттың қызметін бұзуға әрекет жасауға</li>
                  <li>Автоматты жүйелер (боттар, скрипттер) арқылы деректер жинауға</li>
                  <li>Сайт контентін рұқсатсыз көшіруге немесе тарату​ға</li>
                  <li>Сайтты заңсыз мақсаттарда пайдалануға</li>
                  <li>Зиянды бағдарлама немесе вирус таратуға</li>
                </ul>
                <p className="mt-2">тыйым салынады.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Серіктестік хабарландыру</h2>
                <p>
                  USA-pujcky.com серіктестік негізінде жұмыс істейді. Біз серіктес несие берушілерден 
                  комиссия ала аламыз, егер:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сіз біздің сілтемелер арқылы несие берушінің сайтына өтсеңіз</li>
                  <li>Сіз өтінім толтырып жіберсеңіз</li>
                  <li>Несие берушімен келісім-шартқа отырсаңыз</li>
                </ul>
                <p className="mt-4">
                  <strong>Маңызды:</strong> Біз серіктестіктен алатын комиссия сізге ешқандай қосымша 
                  шығын әкелмейді. Несие шарттары біздің қатысуымыз болмаса да бірдей болады.
                </p>
                <p className="mt-4">
                  Біз серіктестерімізді мұқият таңдаймыз және тек лицензияланған, беделді несие 
                  берушілермен жұмыс істейміз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Ақпараттың дәлдігі</h2>
                <p>
                  Біз Сайтта дұрыс және ағымдағы ақпарат ұсынуға тырысамыз, бірақ:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Несие шарттары несие берушілер тарапынан кез келген уақытта өзгертілуі мүмкін</li>
                  <li>Ақпарат жалпы сипатта болып табылады және әрбір жағдайға қолданылмауы мүмкін</li>
                  <li>Пайыздық мөлшерлемелер және шарттар тек бағалау мақсатында көрсетілген</li>
                  <li>Нақты шарттар несие берушіден алуыңыз керек</li>
                </ul>
                <p className="mt-4">
                  <strong>Ескерту:</strong> Несие шартқа қол қою алдында барлық шарттарды мұқият оқып, 
                  түсінгеніңізге көз жеткізіңіз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Жауапкершіліктің шектелуі</h2>
                <p>
                  Сайт "өз күйінде" және "қолжетімді түрінде" ұсынылады. Біз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сайттың үздіксіз немесе қатесіз жұмыс істейтініне кепілдік бермейміз</li>
                  <li>Сайтта ұсынылған ақпараттың толықтығы мен дәлдігіне кепілдік бермейміз</li>
                  <li>Несие берушілердің әрекеттері үшін жауапты емеспіз</li>
                  <li>Несие шарттары үшін жауапты емеспіз</li>
                  <li>Несие беруден бас тарту үшін жауапты емеспіз</li>
                </ul>
                <p className="mt-4">
                  Біз ешқандай тікелей, жанама, кездейсоқ немесе қатаң зардаптар үшін жауапты емеспіз, 
                  оның ішінде:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Табыс немесе деректер жоғалуы</li>
                  <li>Несие алу қабілетінің жоқтығы</li>
                  <li>Үшінші тараптардың әрекеттері</li>
                  <li>Сайтқа қол жеткізу мүмкіндігінің болмауы</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Интеллектуалдық меншік</h2>
                <p>
                  Сайттағы барлық контент (мәтін, графика, логотиптер, суреттер, код) USA-pujcky.com 
                  немесе оның лицензиарларының интеллектуалдық меншігі болып табылады.
                </p>
                <p className="mt-4">
                  Сізге жеке, коммерциялық емес пайдалану үшін шектеулі лицензия берілген. Сізге:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Контентті көшіруге, өзгертуге немесе тарату​ға</li>
                  <li>Контентті коммерциялық мақсаттарда пайдалануға</li>
                  <li>Контентті қайта өңдеуге немесе жариялауға</li>
                  <li>Авторлық құқықтар белгілерін жоюға</li>
                </ul>
                <p className="mt-2">тыйым салынады.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Үшінші тараптар</h2>
                <p>
                  Сайт үшінші тараптардың веб-сайттарына сілтемелер қамтуы мүмкін. Біз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Үшінші тараптардың сайттарын бақыламаймыз</li>
                  <li>Олардың контенті үшін жауапты емеспіз</li>
                  <li>Олардың қызметтері үшін кепілдік бермейміз</li>
                  <li>Олардың құпиялылық саясаттары үшін жауапты емеспіз</li>
                </ul>
                <p className="mt-4">
                  Үшінші тараптардың сайттарын пайдалану толығымен өз тәуекеліңізге.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Өзгерістер мен тоқтату</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.1. Шарттарға өзгерістер</h3>
                <p>
                  Біз кез келген уақытта осы Шарттарды өзгерте аламыз. Өзгерістер сайтта жарияланған 
                  сәттен бастап күшіне енеді. Тұрақты қарап тұруды ұсынамыз.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.2. Қызметті өзгерту</h3>
                <p>
                  Біз кез келген уақытта Сайтты өзгерте, тоқтата немесе тоқтата аламыз, алдын ала 
                  хабарламай.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.3. Қол жеткізуді тоқтату</h3>
                <p>
                  Біз кез келген себеппен, алдын ала хабарламай, сіздің Сайтқа қол жеткізуіңізді 
                  тоқтата аламыз, егер сіз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Осы Шарттарды бұзсаңыз</li>
                  <li>Жалған ақпарат берсеңіз</li>
                  <li>Заңсыз әрекеттер жасасаңыз</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Қолданылатын заңнама</h2>
                <p>
                  Осы Шарттар Қазақстан Республикасының заңнамасымен реттеледі және түсіндіріледі.
                </p>
                <p className="mt-4">
                  Осы Шарттардан туындайтын барлық даулар Қазақстан Республикасының соттарында 
                  қаралады.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Өтемақы</h2>
                <p>
                  Сіз USA-pujcky.com, оның иелері, қызметкерлері және серіктестерін кез келген 
                  шағымдардан, шығындардан, зиянды​рдан қорғауға және өтемақы төлеуге келісесіз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сіздің Сайтты пайдалануыңызға байланысты</li>
                  <li>Осы Шарттарды бұзуыңызға байланысты</li>
                  <li>Үшінші тараптардың құқықтарын бұзуыңызға байланысты</li>
                  <li>Сіз берген ақпараттың дұрыс еместігіне байланысты</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Бөлінгіштік</h2>
                <p>
                  Егер осы Шарттардың кез келген ережесі жарамсыз немесе орындалмайтын деп танылса, 
                  қалған ережелер толық күшінде қалады.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Толық келісім</h2>
                <p>
                  Осы Шарттар (Құпиялылық саясатымен бірге) сіз бен USA-pujcky.com арасындағы толық 
                  келісім болып табылады және Сайтты пайдалануға қатысты барлық алдыңғы келісімдер 
                  мен түсіністіктерді алмастырады.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Байланыс</h2>
                <p>
                  Осы Шарттар туралы сұрақтарыңыз болса, бізге хабарласыңыз:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold mb-2">USA-pujcky.com</p>
                  <p>Email: <a href="mailto:support@usa-pujcky.com" className="text-blue-600 hover:underline">support@usa-pujcky.com</a></p>
                  <p>Веб-сайт: <a href="https://www.usa-pujcky.com/kz" className="text-blue-600 hover:underline">www.usa-pujcky.com/kz</a></p>
                </div>
              </section>

              <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Маңызды ескерту</h3>
                <p>
                  Несие алу үлкен қаржылық жауапкершілік. Несие шартына қол қою алдында барлық 
                  шарттарды мұқият оқып, несие қайтару қабілетіңізді бағалаңыз. Егер сізде сұрақтар 
                  болса, тәуелсіз қаржылық кеңесшіге хабарласыңыз.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/kz"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Басты бетке оралу
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
