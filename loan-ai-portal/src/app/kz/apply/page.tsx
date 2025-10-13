import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import Script from 'next/script'

const currentYear = new Date().getFullYear()

const breadcrumbItems = [
  { name: 'Басты', url: '/', position: 1 },
  { name: 'Қазақстан несиелері', url: '/kz', position: 2 },
  { name: 'Өтінім беру', url: '/kz/apply', position: 3 },
]

export const metadata: Metadata = {
  title: `Несиеге өтінім беру онлайн – Қазақстан ${currentYear} | Loan AI Portal`,
  description:
    'Қазақстанда жеке несиеге онлайн өтінім беріңіз. ҚР Ұлттық Банкі лицензиясы бар банктер мен МҚҰ-лардан ұсыныстарды салыстырыңыз. 2 минутта алдын ала баға алыңыз.',
  keywords: [
    'несиеге өтінім беру',
    'онлайн несие',
    'жеке несие қазақстан',
    'несие өтінімі',
    'тез несие',
    'МҚҰ қазақстан',
    'банктік несие',
  ],
  alternates: {
    canonical: '/kz/apply',
  },
  openGraph: {
    title: `Несиеге өтінім беру онлайн – Қазақстан ${currentYear}`,
    description:
      'Қазақстанда жеке несиеге онлайн өтінім беріңіз. ҚР Ұлттық Банкі лицензиясы бар несие берушілерден ұсыныстар.',
    url: '/kz/apply',
    type: 'website',
    locale: 'kk_KZ',
  },
}

export default function KazakhstanApplyPage() {
  return (
    <>
      <Navigation locale="kk" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <nav className="mb-6 flex items-center gap-2 text-sm text-blue-900/70">
              <Link href="/" className="hover:text-blue-600">
                Басты
              </Link>
              <span>›</span>
              <Link href="/kz" className="hover:text-blue-600">
                Қазақстан
              </Link>
              <span>›</span>
              <span className="font-semibold text-blue-900">Өтінім беру</span>
            </nav>
            <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
              Жеке несиеге өтінім беру
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              ҚР Ұлттық Банкі лицензиясы бар несие берушілерден ұсыныстарды алыңыз. 
              Барлық деректер SSL шифрлаумен қорғалған.
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-blue-900">
                  Несие өтінімін толтыру
                </h2>
                <p className="mt-2 text-sm text-blue-900/70">
                  Төмендегі форманы толтырыңыз. Біздің серіктестер 2 минут ішінде байланысады.
                </p>
              </div>

              {/* Doaff.net integration script */}
              <div className="min-h-[600px]" id="loan-application-form">
                <Script
                  src="https://www.doaff.net/publisherScript.js?c=jjt"
                  strategy="afterInteractive"
                />
                <noscript>
                  <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-6 text-center">
                    <p className="font-semibold text-yellow-900">
                      Форманы көру үшін JavaScript қосылуы керек
                    </p>
                    <p className="mt-2 text-sm text-yellow-800">
                      Браузеріңізде JavaScript қосыңыз немесе байланыс орталығына хабарласыңыз: +7 (727) 350-00-00
                    </p>
                  </div>
                </noscript>
              </div>

              <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  🔒 Деректеріңіз қорғалған
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
                  <li>• SSL 256-бит шифрлау (банктік деңгей)</li>
                  <li>• Деректер ҚР заңнамасы бойынша өңделеді</li>
                  <li>• Үшінші тараптарға берілмейді</li>
                  <li>• Несие тарихына әсер етпейді (алдын ала баға)</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">⚡</div>
                <h3 className="mt-3 font-semibold text-blue-900">Жылдам қарау</h3>
                <p className="mt-2 text-sm text-blue-900/70">
                  Алдын ала шешім 2-30 минут ішінде
                </p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">🏦</div>
                <h3 className="mt-3 font-semibold text-blue-900">Лицензиялы серіктестер</h3>
                <p className="mt-2 text-sm text-blue-900/70">
                  ҚР Ұлттық Банкі бақылауындағы несие берушілер
                </p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl">📊</div>
                <h3 className="mt-3 font-semibold text-blue-900">Ашық шарттар</h3>
                <p className="mt-2 text-sm text-blue-900/70">
                  Барлық комиссиялар мен ЖТМ көрсетіледі
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
              <h3 className="text-xl font-semibold text-blue-900">
                Өтінім берудің келесі қадамдары
              </h3>
              <ol className="mt-6 space-y-4 text-sm text-blue-900/80">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>Өтінімді жіберу:</strong> Форманы толтырып, "Жіберу" батырмасын басыңыз.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Алдын ала баға:</strong> Біздің жүйе профиліңізді талдап, үздік ұсыныстарды іздейді (2-5 минут).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Серіктеспен байланыс:</strong> Таңдалған несие берушінің менеджері телефон немесе email арқылы хабарласады.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>Құжаттарды тексеру:</strong> Жеке куәлік, табыс туралы анықтама және басқа құжаттарды жіберіңіз.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    5
                  </span>
                  <span>
                    <strong>Несие шарты:</strong> Барлық шарттарды мұқият оқып, ЖТМ мен айлық төлемді тексеріңіз.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    6
                  </span>
                  <span>
                    <strong>Қолдан шығару:</strong> Мақұлданған несие 1-3 жұмыс күні ішінде банктік шотқа аударылады.
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-12 text-center">
              <div className="rounded-xl border border-blue-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-blue-900">Сұрақтар бар ма?</h3>
                <p className="mt-2 text-sm text-blue-900/70">
                  Біздің қолдау тобы Дүйсенбі-Жұма 9:00-18:00 жұмыс істейді
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+77273500000"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    📞 +7 (727) 350-00-00
                  </a>
                  <a
                    href="mailto:support@loan-platform.kz"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    ✉️ support@loan-platform.kz
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-yellow-300 bg-yellow-50 p-6">
              <h4 className="font-semibold text-yellow-900">⚠️ Маңызды ескерту</h4>
              <p className="mt-2 text-sm text-yellow-800">
                Loan AI Portal өзі несие бермейді. Біз тек несие берушілерді салыстыру платформасымыз. 
                Барлық несие шарттары серіктес несие берушімен тікелей жасалады. Біз филиалдық комиссия 
                аламыз, бірақ бұл сіздің ЖТМ-ге әсер етпейді. Толық ақпарат:{' '}
                <Link href="/kz/disclosure" className="font-semibold underline">
                  Филиалдық ашу
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-semibold text-blue-900">
              Несие беру бойынша заңды ақпарат
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-white p-6">
                <h3 className="font-semibold text-blue-900">Тұтынушы құқықтары</h3>
                <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
                  <li>• Барлық шығындар туралы толық ақпарат алу</li>
                  <li>• Несие шартын 14 күн ішінде бұзу құқығы</li>
                  <li>• Мерзімінен бұрын өтеу (айыппұлсыз)</li>
                  <li>• Даулы жағдайларда сотқа жүгіну құқығы</li>
                  <li>• Жеке деректердің қорғалуы (GDPR сәйкес)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-white p-6">
                <h3 className="font-semibold text-blue-900">Несие берушінің міндеттері</h3>
                <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
                  <li>• ЖТМ және барлық комиссияларды ашық жариялау</li>
                  <li>• Шарт тілін түсінікті тұжырымдау</li>
                  <li>• Айыппұлдар мен өсімпұлдар туралы ескерту</li>
                  <li>• ҚР Ұлттық Банкі лицензиясының болуы</li>
                  <li>• Тұтынушы шағымдарын қарау механизмі</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-blue-900/70">
              <p>
                Қазақстан Республикасы заңнамасы бойынша реттеледі. 
                ҚР Ұлттық Банкі қадағалайды: 
                <a
                  href="https://nationalbank.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                  nationalbank.kz ↗
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="kk" />
    </>
  )
}
