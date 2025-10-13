import { Metadata } from 'next';
import Link from 'next/link';
import { getKZMetadata } from '@/lib/seo';
import ApplyButton from '@/app/kz/components/ApplyButton';

export const metadata: Metadata = getKZMetadata({
  title: 'Құпиялылық саясаты – Қазақстандағы несиелер',
  description: 'Біздің құпиялылық саясатымыз: жеке деректеріңіз қалай жиналады, қолданылады және қорғалады. Қазақстан Республикасының заңнамасына сәйкес.',
  path: '/kz/privacy',
  type: 'website',
});

export default function PrivacyPage() {
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
            <span className="text-gray-900">Құпиялылық саясаты</span>
          </nav>

          <article className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Құпиялылық саясаты
            </h1>
            
            <p className="text-sm text-gray-600 mb-8">
              Соңғы жаңарту: {lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Кіріспе</h2>
                <p>
                  USA-pujcky.com сайты (бұдан әрі "Сайт", "біз" немесе "бізге") сіздің құпиялылығыңызды құрметтейміз. 
                  Бұл құпиялылық саясаты біз сіздің жеке деректеріңізді қалай жинайтынымызды, қолданатынымызды, 
                  қорғайтынымызды және бөлісетінімізді түсіндіреді.
                </p>
                <p>
                  Біздің сайтты пайдалану арқылы сіз осы құпиялылық саясатында сипатталған әдістермен 
                  деректеріңізді өңдеуге келісесіз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Жиналатын ақпарат</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1. Сіз берген ақпарат</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Аты-жөні және байланыс деректері (электрондық пошта, телефон)</li>
                  <li>Қаржылық ақпарат (табыс, несие мақсаты)</li>
                  <li>Тұрғылықты жер туралы мәліметтер</li>
                  <li>Несие өтініміне қатысты басқа деректер</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2. Автоматты түрде жиналатын ақпарат</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP мекенжайы және браузер түрі</li>
                  <li>Операциялық жүйе және құрылғы ақпараты</li>
                  <li>Сайтты қолдану статистикасы (бетті қарау, қалу уақыты)</li>
                  <li>Cookies және ұқсас технологиялар арқылы жиналған деректер</li>
                  <li>Қай бет арқылы сайтқа кіргеніңіз (referrer)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Деректерді қолдану мақсаттары</h2>
                <p>Біз сіздің жеке деректеріңізді мына мақсаттарда қолданамыз:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Несие өтінімдерін өңдеу және серіктес несие берушілерге жіберу</li>
                  <li>Сізбен байланысу және сұрақтарыңызға жауап беру</li>
                  <li>Сайт қызметін жақсарту және персоналдау</li>
                  <li>Заңды міндеттемелерді орындау</li>
                  <li>Қауіпсіздікті қамтамасыз ету және алаяқтықты болдырмау</li>
                  <li>Статистикалық талдау және маркетингтік зерттеулер жүргізу</li>
                  <li>Қызметті жақсарту және жаңа мүмкіндіктерді әзірлеу</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Деректерді бөлісу</h2>
                <p>Біз сіздің деректеріңізді мына жағдайларда бөлісуіміз мүмкін:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Серіктес несие берушілер:</strong> Несие өтінімін өңдеу үшін</li>
                  <li><strong>Қызмет провайдерлері:</strong> Хостинг, талдау, маркетинг қызметтері үшін</li>
                  <li><strong>Серіктестер:</strong> Комиссиялық бағдарламаларға қатысушылар</li>
                  <li><strong>Заңды органдар:</strong> Заңды талаптарды орындау үшін</li>
                  <li><strong>Бизнес трансфері:</strong> Компания сатып алу/бірігу жағдайында</li>
                </ul>
                <p className="mt-4">
                  Барлық үшінші тараптар сіздің деректеріңізді құпия түрде сақтауға және тек белгіленген 
                  мақсаттарда қолдануға міндетті.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies және веб-технологиялар</h2>
                <p>
                  Біз cookies және ұқсас технологияларды сайт жұмысын қамтамасыз ету, қолданушы 
                  тәжірибесін жақсарту және трафик талдау үшін қолданамыз.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies түрлері:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Қажетті cookies:</strong> Сайт жұмысы үшін міндетті</li>
                  <li><strong>Талдау cookies:</strong> Сайт пайдаланушыларын түсіну үшін (Google Analytics)</li>
                  <li><strong>Маркетинг cookies:</strong> Жарнаманы персоналдау үшін</li>
                  <li><strong>Функционалдық cookies:</strong> Параметрлерді есте сақтау үшін</li>
                </ul>
                <p className="mt-4">
                  Сіз браузер параметрлерінде cookies-ты басқара аласыз немесе оларды өшіре аласыз, 
                  бірақ бұл сайттың кейбір функцияларын шектеуі мүмкін.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Деректерді қорғау</h2>
                <p>
                  Біз сіздің жеке деректеріңізді қорғау үшін техникалық және ұйымдастырушылық шараларды қолданамыз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS шифрлау (HTTPS)</li>
                  <li>Қауіпсіз серверлер және деректер орталықтары</li>
                  <li>Қол жеткізуді шектеу және аутентификация</li>
                  <li>Тұрақты қауіпсіздік аудиті</li>
                  <li>Деректерді резервтік көшіру</li>
                </ul>
                <p className="mt-4">
                  Бірақ интернет арқылы берілетін ешбір деректің 100% қауіпсіздігін кепілдендіру мүмкін емес екенін 
                  ескеріңіз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Сіздің құқықтарыңыз</h2>
                <p>
                  Қазақстан Республикасының заңнамасына сәйкес, сіздің мына құқықтарыңыз бар:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Қол жеткізу құқығы:</strong> Біз қандай деректерді өңдейтінімізді білу</li>
                  <li><strong>Түзету құқығы:</strong> Қате деректерді түзету</li>
                  <li><strong>Жою құқығы:</strong> Деректеріңізді жоюды сұрау ("ұмытылу құқығы")</li>
                  <li><strong>Шектеу құқығы:</strong> Деректерді өңдеуді шектеуді сұрау</li>
                  <li><strong>Қарсылық білдіру құқығы:</strong> Маркетингке қарсы болу</li>
                  <li><strong>Келісімді қайтарып алу:</strong> Кез келген уақытта келісімді қайтарып алу</li>
                </ul>
                <p className="mt-4">
                  Құқықтарыңызды пайдалану үшін бізге хабарласыңыз: 
                  <a href="mailto:privacy@usa-pujcky.com" className="text-blue-600 hover:underline ml-1">
                    privacy@usa-pujcky.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Деректерді сақтау мерзімі</h2>
                <p>
                  Біз сіздің жеке деректеріңізді қажетті мерзімде ғана сақтаймыз:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Несие өтінімі деректері: өтінім өңделгеннен кейін 3 жыл</li>
                  <li>Байланыс деректері: белсенді пайдалану кезеңінде + 1 жыл</li>
                  <li>Маркетинг деректері: келісім қайтарылғанға дейін</li>
                  <li>Заңды міндеттемелер үшін қажетті деректер: заң талап еткен мерзімде</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Балалардың құпиялылығы</h2>
                <p>
                  Біздің қызмет 18 жастан асқан адамдарға арналған. Біз білдіре отырып 18 жасқа толмаған 
                  балалардан жеке деректерді жинамаймыз. Егер біз кәмелетке толмағандардың деректерін 
                  жинағанымызды білсек, оларды дереу жоямыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Халықаралық деректер трансферті</h2>
                <p>
                  Сіздің деректеріңіз Қазақстаннан тыс орналасқан серверлерде өңделуі мүмкін. 
                  Біз деректердің қауіпсіз трансферін қамтамасыз ету үшін барлық қажетті шараларды қабылдаймыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Өзгерістер</h2>
                <p>
                  Біз кез келген уақытта осы құпиялылық саясатын өзгерте аламыз. Елеулі өзгерістер туралы 
                  сайтта хабарлама арқылы хабарлаймыз. Саясатты тұрақты қарап тұруды ұсынамыз.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Байланыс</h2>
                <p>
                  Құпиялылық саясаты туралы сұрақтарыңыз болса, бізге хабарласыңыз:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold mb-2">USA-pujcky.com</p>
                  <p>Email: <a href="mailto:privacy@usa-pujcky.com" className="text-blue-600 hover:underline">privacy@usa-pujcky.com</a></p>
                  <p>Веб-сайт: <a href="https://www.usa-pujcky.com/kz" className="text-blue-600 hover:underline">www.usa-pujcky.com/kz</a></p>
                </div>
              </section>

              <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Қазақстан Республикасының заңнамасы</h3>
                <p>
                  Бұл құпиялылық саясаты «Дербес деректер және оларды қорғау туралы» Қазақстан Республикасының 
                  Заңына (2013 жылғы 21 мамыр, № 94-V ҚРЗ) және басқа қолданыстағы нормативтік актілерге сәйкес 
                  әзірленген.
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
