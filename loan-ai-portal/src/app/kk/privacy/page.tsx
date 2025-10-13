import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Құпиялылық саясаты – LoansAI Қазақстан',
  description: 'LoansAI құпиялылық саясаты. Біз сіздің жеке деректеріңізді қалай жинайтынымыз, пайдаланатынымыз және қорғайтынымыз туралы ақпарат. GDPR сәйкес.',
  alternates: {
    canonical: 'https://loansai.com/kk/privacy',
  },
}

export default function PrivacyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Басты бет', item: 'https://loansai.com' },
      { '@type': 'ListItem', position: 2, name: 'Қазақстан', item: 'https://loansai.com/kk' },
      { '@type': 'ListItem', position: 3, name: 'Құпиялылық', item: 'https://loansai.com/kk/privacy' }
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
            <span className="text-gray-900 font-medium">Құпиялылық саясаты</span>
          </nav>
        </div>
        <article className="container mx-auto px-4 pb-12 max-w-4xl prose prose-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Құпиялылық саясаты</h1>
          <p className="text-gray-600 mb-8">Соңғы жаңарту: қазан 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Кіріспе</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI ("біз", "бізді", "біздің") сіздің құпиялылығыңызды құрметтейміз. Бұл Құпиялылық саясаты 
              біз сіздің жеке деректеріңізді қалай жинайтынымызды, пайдаланатынымызды, ашатынымызды және 
              қорғайтынымызды түсіндіреді.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Біздің қызметтерімізді пайдалану арқылы, сіз осы Құпиялылық саясатына және деректеріңіздің 
              осында сипатталған түрде өңделуіне келісесіз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Біз жинайтын ақпарат</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1. Сіз берген ақпарат:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Аты-жөні, жасы, туған күні</li>
              <li>Байланыс ақпараты (email, телефон, мекенжай)</li>
              <li>Қаржылық ақпарат (табыс, жұмыс орны, несие сомасы)</li>
              <li>Жеке куәлік деректері (тек қажет болған жағдайда)</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2. Автоматты түрде жиналатын ақпарат:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP мекенжайы және құрылғы ақпараты</li>
              <li>Браузер түрі және тілі</li>
              <li>Cookies және ұқсас технологиялар</li>
              <li>Сайт пайдалану деректері</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Біз деректерді қалай пайдаланамыз</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Сізді лицензияланған несие берушілермен байланыстыру</li>
              <li>Несие өтінішін өңдеу және профиліңізді бағалау</li>
              <li>Қызметтерімізді жақсарту және дамыту</li>
              <li>Сізбен байланысу (жаңалықтар, ұсыныстар)</li>
              <li>Заң талаптарын орындау</li>
              <li>Алаяқтықты анықтау және алдын алу</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Деректерді бөлісу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біз сіздің деректеріңізді мына жағдайларда бөлісеміз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Несие берушілермен:</strong> Сіз өтініш берген кезде, ҚҰБ лицензияланған несие берушілермен</li>
              <li><strong>Қызмет көрсетушілермен:</strong> Біздің операцияларды қолдайтын сенімді серіктестермен</li>
              <li><strong>Заңды талап бойынша:</strong> Сот немесе үкімет органдарының талабы бойынша</li>
              <li><strong>Бизнес аудармалары:</strong> Компания сатылған немесе біріккен жағдайда</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Біз ЕШҚАШАН сіздің деректеріңізді үшінші тараптарға сатпаймыз немесе жалға бермейміз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Деректерді қорғау</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біз сіздің деректеріңізді қорғау үшін өнеркәсіптік стандартты қауіпсіздік шараларын қолданамыз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL/TLS шифрлау (256-bit)</li>
              <li>Қауіпсіз серверлер және деректер қоймалары</li>
              <li>Қатаң қол жеткізу бақылауы</li>
              <li>Тұрақты қауіпсіздік тексерулері</li>
              <li>Қызметкерлерге құпиялылық туралы оқыту</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Сіздің құқықтарыңыз</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GDPR және Қазақстан заңдары бойынша, сізде мыналар бар:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Қол жеткізу құқығы:</strong> Біздегі деректеріңіздің көшірмесін алу</li>
              <li><strong>Түзету құқығы:</strong> Дұрыс емес деректерді түзету</li>
              <li><strong>Жою құқығы:</strong> Деректеріңізді жоюды сұрау ("ұмыту құқығы")</li>
              <li><strong>Өңдеуді шектеу:</strong> Белгілі бір өңдеуді тоқтатуды сұрау</li>
              <li><strong>Деректер тасымалдануы:</strong> Деректерді басқа қызметке тасымалдау</li>
              <li><strong>Келіспеу құқығы:</strong> Белгілі бір өңдеуге келіспеу</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Құқықтарыңызды пайдалану үшін: <a href="mailto:privacy@loansai.kz" className="text-blue-600 hover:underline">privacy@loansai.kz</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Біз cookies және ұқсас технологияларды қолданамыз:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Қажетті cookies:</strong> Сайттың жұмыс істеуі үшін</li>
              <li><strong>Аналитикалық cookies:</strong> Сайт пайдаланылуын түсіну үшін</li>
              <li><strong>Маркетингтік cookies:</strong> Релевантты жарнамаларды көрсету үшін</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Сіз браузер параметрлерінде cookies-ті бақылай аласыз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Деректерді сақтау</h2>
            <p className="text-gray-700 leading-relaxed">
              Біз сіздің деректеріңізді қажетті мақсаттар үшін керек болғанша немесе заң талап ететінше 
              сақтаймыз. Әдетте, өңделмеген өтініштер 12 ай, мақұлданған өтініштер 7 жыл сақталады 
              (Қазақстан заңына сәйкес).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Балалардың құпиялылығы</h2>
            <p className="text-gray-700 leading-relaxed">
              Біздің қызметтер 18 жасқа толмаған адамдарға арналмаған. Біз білетіндей 18 жасқа толмаған 
              балалардан деректерді жинамаймыз. Егер сіз ата-ана немесе қорғаушы болсаңыз және сіздің 
              баланыз бізге деректер берген деп ойлайтын болсаңыз, бізге хабарласыңыз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Халықаралық деректер тасымалдауы</h2>
            <p className="text-gray-700 leading-relaxed">
              Сіздің деректеріңіз Қазақстаннан тыс серверлерде өңделуі мүмкін. Біз барлық тасымалдаулар 
              GDPR және Қазақстан заңдарының талаптарына сәйкес жүзеге асырылуын қамтамасыз етеміз.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Саясатқа өзгерістер</h2>
            <p className="text-gray-700 leading-relaxed">
              Біз осы Құпиялылық саясатын кез келген уақытта жаңарта аламыз. Айтарлықтай өзгерістер 
              болған жағдайда, біз сізге email арқылы немесе сайтта хабарлама арқылы хабарлаймыз. 
              Өзгерістер жарияланған күннен бастап күшіне енеді.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Бізбен байланысу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Құпиялылық туралы сұрақтарыңыз болса, бізге хабарласыңыз:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700"><strong>LoansAI</strong></p>
              <p className="text-gray-700">Email: <a href="mailto:privacy@loansai.kz" className="text-blue-600 hover:underline">privacy@loansai.kz</a></p>
              <p className="text-gray-700">Телефон: +7 (727) 300-0000</p>
              <p className="text-gray-700">Мекенжай: Алматы, Қазақстан</p>
              <p className="text-gray-700 mt-4">
                Деректерді қорғау жөніндегі уәкілетті орган: 
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  Қазақстан Ұлттық Банкі
                </a>
              </p>
            </div>
          </section>
        </article>
      </main>
      <KazakhstanFooter />
    </>
  )
}
