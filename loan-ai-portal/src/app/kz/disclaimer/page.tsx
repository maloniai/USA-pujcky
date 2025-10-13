import { Metadata } from 'next';
import Link from 'next/link';
import { getKZMetadata } from '@/lib/seo';
import ApplyButton from '@/app/kz/components/ApplyButton';

export const metadata: Metadata = getKZMetadata({
  title: 'Жауапкершіліктен бас тарту – Қазақстандағы несиелер',
  description: 'Маңызды жауапкершіліктен бас тарту және заңды хабарландырулар. USA-pujcky.com несие ақпараттық қызметін пайдалану туралы.',
  path: '/kz/disclaimer',
  type: 'website',
});

export default function DisclaimerPage() {
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
            <span className="text-gray-900">Жауапкершіліктен бас тарту</span>
          </nav>

          <article className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Жауапкершіліктен бас тарту
            </h1>
            
            <p className="text-sm text-gray-600 mb-8">
              Соңғы жаңарту: {lastUpdated}
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <p className="text-red-900 font-semibold">
                ⚠️ Маңызды: Осы бетті пайдалану алдында мұқият оқып шығыңыз
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Жалпы жауапкершіліктен бас тарту</h2>
                <p>
                  USA-pujcky.com ("Сайт", "біз") ақпараттық және білім беру мақсаттарында қызмет көрсетеді. 
                  Сайтта ұсынылған ақпарат:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Кәсіби қаржылық кеңес емес</li>
                  <li>Несие кепілдігі емес</li>
                  <li>Несие шарттарына кепілдік емес</li>
                  <li>Заңды кеңес емес</li>
                  <li>Салық кеңесі емес</li>
                </ul>
                <p className="mt-4">
                  Сайтты пайдалану толығымен өз тәуекеліңізге. Біз ақпараттың дәлдігі, толықтығы немесе 
                  өзектілігіне кепілдік бермейміз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Несие беруші емеспіз</h2>
                <p>
                  <strong>Маңызды түсіндірме:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Біз несие берушіміз <strong>ЕМЕСПІЗ</strong></li>
                  <li>Біз несие бермейміз</li>
                  <li>Біз несие мақұлдау шешімдерін қабылдамаймыз</li>
                  <li>Біз несие шарттарын белгілемейміз</li>
                  <li>Біз несие төлемдерін қабылдамаймыз</li>
                  <li>Біз несие шарттарын басқармаймыз</li>
                </ul>
                <p className="mt-4">
                  Біз тек ақпараттық қызмет және серіктес несие берушілермен байланыстыру қызметін ұсынамыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Ақпараттың дәлдігі</h2>
                <p>
                  Біз Сайтта дұрыс ақпарат ұсынуға тырысамыз, бірақ:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ақпарат кез келген уақытта өзгеруі мүмкін</li>
                  <li>Пайыздық мөлшерлемелер тек бағалау үшін</li>
                  <li>Нақты шарттар несие берушіден өзгеше болуы мүмкін</li>
                  <li>Қателер мен кемшіліктер болуы мүмкін</li>
                  <li>Несие берушілер шарттарын кез келген уақытта өзгерте алады</li>
                </ul>
                <p className="mt-4 font-semibold text-gray-900">
                  Әрқашан несие берушіден нақты ақпарат алыңыз!
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Несие кепілдігі жоқ</h2>
                <p>
                  Біз мыналарға кепілдік бермейміз және ұсына алмаймыз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Несие мақұлдау кепілдігі</li>
                  <li>Нақты несие сомасы</li>
                  <li>Нақты пайыздық мөлшерлеме</li>
                  <li>Нақты несие мерзімі</li>
                  <li>Өтінім қарау уақыты</li>
                  <li>Ақша аудару жылдамдығы</li>
                </ul>
                <p className="mt-4">
                  Барлық несие шешімдері серіктес несие берушілер тарапынан қабылданады және олардың 
                  критерийлеріне байланысты.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Серіктестік хабарландыру</h2>
                <p>
                  <strong>Толық ашықтық:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Біз серіктес несие берушілерден комиссия аламыз</li>
                  <li>Комиссия сізге қосымша шығын әкелмейді</li>
                  <li>Комиссия біздің рейтингтерге әсер етпейді</li>
                  <li>Біз тек лицензияланған несие берушілермен жұмыс істейміз</li>
                  <li>Барлық салыстырулар объективті негізде жасалады</li>
                </ul>
                <p className="mt-4">
                  Серіктестік қарым-қатынас біздің тәуелсіз пікіріміз бен ұсыныстарымызға әсер етпейді.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Үшінші тараптар</h2>
                <p>
                  Біз үшінші тараптардың әрекеттері үшін жауапты емеспіз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Серіктес несие берушілердің әрекеттері</li>
                  <li>Несие берушілердің веб-сайттары</li>
                  <li>Несие беру процесі</li>
                  <li>Несие шарттары мен талаптары</li>
                  <li>Тұтынушы қызметі сапасы</li>
                  <li>Деректер қауіпсіздігі (несие берушілерде)</li>
                  <li>Несиені өңдеу және бере алу</li>
                </ul>
                <p className="mt-4">
                  Несие берушімен барлық әрекеттер үшін тікелей несие берушіге хабарласыңыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Жауапкершіліктің шектелуі</h2>
                <p>
                  Заңмен рұқсат етілген шамада біз мыналар үшін жауапты емеспіз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Кез келген тікелей, жанама немесе қатаң зиян</li>
                  <li>Табыс немесе пайда жоғалуы</li>
                  <li>Деректер жоғалуы</li>
                  <li>Бизнес мүмкіндіктерінің жоғалуы</li>
                  <li>Беделдің зақымдануы</li>
                  <li>Үшінші тараптардың шағымдары</li>
                  <li>Несие алудағы кідіріс немесе мүмкін еместік</li>
                  <li>Несие шарттарының қолайсыздығы</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Қаржылық кеңес емес</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <p className="font-semibold mb-3">Маңызты хабарландыру:</p>
                  <p>
                    Сайттағы ақпарат жалпы білім беру мақсатында ғана. Бұл:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Жеке қаржылық кеңес емес</li>
                    <li>Сіздің жағдайыңызға бейімделген ұсыныс емес</li>
                    <li>Кәсіби қаржылық жоспарлау емес</li>
                    <li>Инвестициялық кеңес емес</li>
                  </ul>
                  <p className="mt-4 font-semibold">
                    Маңызды қаржылық шешімдер қабылдау алдында кәсіби қаржылық кеңесшіге хабарласыңыз!
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Несие тәуекелдері</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="font-bold text-red-900 mb-3">⚠️ Несие алу алдында білу керек:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-red-900">
                    <li>Несие – бұл қаржылық міндеттеме</li>
                    <li>Несие қайтармау зардаптары болады:
                      <ul className="list-circle pl-6 mt-2 space-y-1">
                        <li>Несие тарихының нашарлауы</li>
                        <li>Қосымша айыппұлдар мен пайыздар</li>
                        <li>Заңды әрекеттер</li>
                        <li>Коллекторлық компаниялар</li>
                        <li>Мүлікке ұстап алу (кепілді несиелер)</li>
                      </ul>
                    </li>
                    <li>Несие қайтару қабілетіңізді реалды бағалаңыз</li>
                    <li>Тек қажетті сомаға ғана несие алыңыз</li>
                    <li>Барлық шарттарды оқып түсініңіз</li>
                    <li>Алтернативалық опцияларды қарастырыңыз</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Несие алу ереже​лері</h2>
                <p>
                  Несие алу үшін сізге:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Кемінде 18 жас болу керек</li>
                  <li>Қазақстан Республикасының азаматы немесе тұрақты тұрғыны болу керек</li>
                  <li>Заңды табыс көзі болу керек</li>
                  <li>Дұрыс құжаттар болу керек</li>
                  <li>Несие берушінің критерийлерін қанағаттандыру керек</li>
                </ul>
                <p className="mt-4">
                  Әрбір несие берушінің өз критерийлері мен талаптары бар.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Техникалық мәселелер</h2>
                <p>
                  Біз мыналарға кепілдік бермейміз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сайттың үздіксіз жұмысы</li>
                  <li>Қатесіз жұмыс</li>
                  <li>Вирус пен зиянды бағдарламалардан толық қорғау</li>
                  <li>Деректердің жоғалмауы</li>
                  <li>Барлық құрылғыларда жұмыс істеуі</li>
                </ul>
                <p className="mt-4">
                  Сайтты пайдалану алдында антивирустық қорғанысты қамтамасыз етіңіз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Заңды сәйкестік</h2>
                <p>
                  Бұл жауапкершіліктен бас тарту Қазақстан Республикасының заңнамасына сәйкес әзірленген:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>«Дербес деректер және оларды қорғау туралы» ҚР Заңы</li>
                  <li>«Тұтынушылардың құқықтарын қорғау туралы» ҚР Заңы</li>
                  <li>«Банктер және банк қызметі туралы» ҚР Заңы</li>
                  <li>«Микроқаржылық қызмет туралы» ҚР Заңы</li>
                </ul>
                <p className="mt-4">
                  Несие нарығын Қазақстан Республикасының Ұлттық Банкі реттейді.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Өзгерістер</h2>
                <p>
                  Біз кез келген уақытта, алдын ала хабарламай, осы жауапкершіліктен бас тартуды өзгерте аламыз. 
                  Сайтты пайдалануды жалғастыру арқылы сіз өзгертілген нұсқамен келісесіз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Байланыс</h2>
                <p>
                  Осы жауапкершіліктен бас тарту туралы сұрақтарыңыз болса:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold mb-2">USA-pujcky.com</p>
                  <p>Email: <a href="mailto:legal@usa-pujcky.com" className="text-blue-600 hover:underline">legal@usa-pujcky.com</a></p>
                  <p>Веб-сайт: <a href="https://www.usa-pujcky.com/kz" className="text-blue-600 hover:underline">www.usa-pujcky.com/kz</a></p>
                </div>
              </section>

              <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-xl font-semibold text-green-900 mb-3">✓ Жауапты несие алу бойынша кеңестер</h3>
                <ul className="list-disc pl-6 space-y-2 text-green-900">
                  <li>Тек қажетті сомаға несие алыңыз</li>
                  <li>Бірнеше ұсыныстарды салыстырыңыз</li>
                  <li>Барлық шарттарды мұқият оқыңыз</li>
                  <li>Айлық төлемдерді есептеңіз</li>
                  <li>Қайтару жоспарын жасаңыз</li>
                  <li>Резерв қорын сақтаңыз</li>
                  <li>Қиындықтар болса, несие берушіге дереу хабарласыңыз</li>
                </ul>
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
