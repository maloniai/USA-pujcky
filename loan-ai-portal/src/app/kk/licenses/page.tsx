import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Лицензиялар және реттеу – LoansAI Қазақстан',
  description: 'LoansAI және біздің серіктес несие берушілердің лицензиялары туралы ақпарат. ҚҰБ реттеуі және сәйкестік.',
  alternates: {
    canonical: 'https://loansai.com/kk/licenses',
  },
}

export default function LicensesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Басты бет', item: 'https://loansai.com' },
      { '@type': 'ListItem', position: 2, name: 'Қазақстан', item: 'https://loansai.com/kk' },
      { '@type': 'ListItem', position: 3, name: 'Лицензиялар', item: 'https://loansai.com/kk/licenses' }
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
            <span className="text-gray-900 font-medium">Лицензиялар</span>
          </nav>
        </div>
        <article className="container mx-auto px-4 pb-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Лицензиялар және реттеу</h1>
          <p className="text-gray-600 mb-8">Соңғы жаңарту: қазан 2025</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LoansAI туралы</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI - бұл несие салыстыру платформасы. Біз несие беруші емеспіз және тікелей несие 
              бермейміз. Біздің рөліміз - қарыз алушылар мен Қазақстан Ұлттық Банкі (ҚҰБ) лицензияланған 
              несие берушілерді байланыстыру.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <p className="text-gray-700">
                <strong>Қадағалау органы:</strong> Қазақстан Ұлттық Банкі (ҚҰБ)
                <br />
                <strong>Веб-сайт:</strong>{' '}
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  nationalbank.kz
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Реттеуші шеңбер</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Микроқаржылық қызмет туралы заң</h3>
                <p className="text-gray-700 leading-relaxed">
                  Барлық несие берушілер Қазақстан Республикасының Микроқаржылық қызмет туралы заңына 
                  сәйкес жұмыс істеуі керек. Бұл заң несие берушілердің лицензиялануын, максималды 
                  мөлшерлемелерді (56% ЖПМ), және тұтынушыларды қорғауды реттейді.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Тұтынушылардың құқықтарын қорғау туралы заң</h3>
                <p className="text-gray-700 leading-relaxed">
                  Қарыз алушылардың құқықтары Қазақстан Республикасының Тұтынушылардың құқықтарын 
                  қорғау туралы заңымен қорғалған. Бұл 14 күндік бас тарту мерзімін, мерзімінен бұрын 
                  төлеу құқығын, және ашық жарияланған шарттарды қамтиды.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Жеке деректерді қорғау</h3>
                <p className="text-gray-700 leading-relaxed">
                  Барлық жеке деректер өңдеу Қазақстанның деректерді қорғау заңдары және GDPR 
                  (Жалпы деректерді қорғау регламенті) талаптарына сәйкес жүзеге асырылады.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Біздің серіктес несие берушілер</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              LoansAI тек ҚҰБ лицензияланған және реттелетін несие берушілермен жұмыс істейді. 
              Барлық біздің серіктестерімізде:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>ҚҰБ-дан жарамды лицензиясы бар</li>
              <li>Қазақстан заңдарын сақтайды</li>
              <li>Тұтынушыларды қорғау стандарттарын орындайды</li>
              <li>Тұрақты қадағалау тексеруінен өтеді</li>
              <li>Құпиялылық және деректерді қорғауды қамтамасыз етеді</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Лицензиялану талаптары:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Қазақстан Республикасында тіркелген заңды тұлға</li>
                <li>Минималды жарғылық капитал талаптарын орындау</li>
                <li>Кәсіби менеджмент және тәжірибелі қызметкерлер</li>
                <li>Қатаң қаржылық есептілік</li>
                <li>Қауіпсіздік және алаяқтықты болдырмау процедуралары</li>
                <li>Тұтынушы шағымдарын өңдеу жүйесі</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Негізгі реттеулер</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">💰 Максималды ЖПМ</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">56%</p>
                <p className="text-sm text-gray-600">
                  Заң бойынша максималды жылдық пайыздық мөлшерлеме (Микроқаржылық қызмет туралы заң)
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">⏱️ Бас тарту мерзімі</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">14 күн</p>
                <p className="text-sm text-gray-600">
                  Шарт қол қойылғаннан кейін айыппұлсыз бас тарту құқығы
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">⚡ Мерзімінен бұрын төлеу</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">1%</p>
                <p className="text-sm text-gray-600">
                  Мерзімінен бұрын төленген сомадан максималды комиссия
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">📋 Ашық жариялау</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
                <p className="text-sm text-gray-600">
                  Барлық шығындар мен шарттар жазбаша түрде жарияланады
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Сәйкестік және аудит</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LoansAI және біздің серіктес несие берушілер тұрақты сәйкестік тексеруден өтеді:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>ҚҰБ тұрақты қадағалау тексерулері</li>
              <li>Жыл сайынғы қаржылық аудит</li>
              <li>Сәйкестік және тәуекелдерді басқару бағалаулары</li>
              <li>Ақша жылыстығымен күрес (AML) тексерулері</li>
              <li>Деректерді қорғау және құпиялылық аудиттері</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Тұтынушыларды қорғау</h2>
            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">Сіздің құқықтарыңыз қорғалған</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Барлық несиелер мыналармен қорғалған:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ашық және түсінікті шарттар</li>
                <li>Әділ және құрметті қарым-қатынас</li>
                <li>Жасырын ақылар жоқ</li>
                <li>Шағымдану механизмдері</li>
                <li>ҚҰБ қадағалауы</li>
                <li>Заңды қорғау</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Шағымдану және дауларды шешу</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Егер сізде несие берушімен проблемалар болса:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
              <li>
                <strong>Несие берушіге хабарласыңыз:</strong> Алдымен проблеманы тікелей несие берушімен шешуге тырысыңыз
              </li>
              <li>
                <strong>Жазбаша шағым:</strong> Егер шешілмесе, жазбаша шағым жіберіңіз
              </li>
              <li>
                <strong>ҚҰБ-ға шағым:</strong> Несие беруші дұрыс жауап бермесе, ҚҰБ-ға шағым жасаңыз
              </li>
              <li>
                <strong>Заңды жол:</strong> Қажет болса, сотқа жүгінуге құқығыңыз бар
              </li>
            </ol>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>ҚҰБ Байланыс:</strong>
                <br />
                Веб-сайт:{' '}
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  nationalbank.kz
                </a>
                <br />
                Шағымдар: Веб-сайттағы байланыс формасы арқылы немесе жазбаша өтініш
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Пайдалы сілтемелер</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  → Қазақстан Ұлттық Банкі (ҚҰБ)
                </a>
              </li>
              <li>
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  → Лицензияланған қаржы ұйымдарының тізімі
                </a>
              </li>
              <li>
                <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  → Тұтынушы құқықтары туралы ақпарат
                </a>
              </li>
              <li>
                <Link href="/kk/faq" className="text-blue-600 hover:underline">
                  → Жиі қойылатын сұрақтар
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Байланыс</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                Лицензиялар немесе реттеу туралы сұрақтарыңыз болса:
              </p>
              <p className="text-gray-700"><strong>LoansAI</strong></p>
              <p className="text-gray-700">Email: <a href="mailto:compliance@loansai.kz" className="text-blue-600 hover:underline">compliance@loansai.kz</a></p>
              <p className="text-gray-700">Телефон: +7 (727) 300-0000</p>
            </div>
          </section>
        </article>
      </main>
      <KazakhstanFooter />
    </>
  )
}
