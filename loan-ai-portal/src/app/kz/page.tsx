import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { kazakhstanRegions, totalKazakhstanCities } from '@/data/kz-regions'
import { generatePageMetadata, kzHubSEO } from '@/lib/seo'
import { StickyApplyButton } from '@/components/kz/sticky-apply-button'

export const metadata = generatePageMetadata(kzHubSEO, '/kz')

const currentYear = new Date().getFullYear()

const complianceHighlights = [
  {
    title: 'Реттеу шеңбері',
    items: [
      'ҚР Ұлттық Банкінің лицензиялау жүйесі',
      'Микроқаржы ұйымдары туралы заң (2012)',
      'Тұтынушылардың құқықтарын қорғау туралы заң',
      'Жылдық тиімді мөлшерлеме (ЖТМ) ашықтығы',
    ],
  },
  {
    title: 'Несие берушілер санаттары',
    items: [
      'Екінші деңгейлі банктер - ҚР ҰБ лицензиясы',
      'Микроқаржы ұйымдары (МҚҰ) - тіркелген',
      'Ломбардтар - жылжымалы мүлікке кепілдік',
      'Лизингтік компаниялар - мүлік қаржыландыру',
    ],
  },
  {
    title: 'Тұтынушы қорғау',
    items: [
      'Жылдық тиімді мөлшерлеме (ЖТМ) 56%-дан аспайды (МҚҰ)',
      'Айыппұлдар мен комиссиялар ашық жариялануы тиіс',
      'Шарт жасасу алдында консультация құқығы',
      'Мерзімінен бұрын өтеу құқығы (айыппұлсыз)',
    ],
  },
]

const faq = [
  {
    question: 'Қазақстанда несие алу үшін қандай құжаттар қажет?',
    answer:
      'Негізгі құжаттар: жеке куәлік (ID карта), табыс туралы анықтама (соңғы 3-6 ай), жұмыс орны туралы мәлімет. Кейбір МҚҰ-лар жеңілдетілген талаптармен жұмыс істейді. Барлық несие берушілер ҚР Ұлттық Банкінің несие тарихын тексереді.',
  },
  {
    question: 'Қазақстанда несиенің орташа пайыздық мөлшерлемесі қанша?',
    answer:
      'Банктік несиелер үшін: 14-24% жылына. МҚҰ-лар үшін: 18-56% жылына (заңды максимум). Нақты мөлшерлеме сіздің несие тарихыңызға, табысыңызға және несие мерзіміне байланысты. Әрдайым ЖТМ-ді (жылдық тиімді мөлшерлеме) тексеріңіз - онда барлық комиссиялар мен шығындар кіреді.',
  },
  {
    question: 'AI жүйесі несиені қалай таңдайды?',
    answer:
      'Біздің AI жүйесі сіздің профиліңізді (табыс, несие тарихы, мақсат) талдап, ең төмен ЖТМ және қолайлы шарттарды ұсынады. Жүйе лицензияланған несие берушілерді ғана көрсетеді және барлық жасырын комиссияларды ескереді. Ешқандай жеке деректер үшінші тараптарға берілмейді.',
  },
  {
    question: 'Нашар несие тарихымен несие ала аламын ба?',
    answer:
      'Иә, Қазақстанда нашар несие тарихымен жұмыс істейтін МҚҰ-лар бар. Бірақ мөлшерлеме жоғары болады (30-56% ЖТМ) және несие сомасы шектеулі. Кепілмен (жылжымалы/жылжымайтын мүлік) несие алу оңайырақ және арзанырақ. Альтернатива: кепілдік берушімен банктік несие.',
  },
  {
    question: 'Несие өтінімі қанша уақытта қаралады?',
    answer:
      'МҚҰ-лар: 30 минуттан 24 сағатқа дейін (онлайн өтінім). Банктер: 2-5 жұмыс күні (құжаттарды тексеру + несие тарихын талдау). Жылдам несиелер (экспресс-кредит) 1 сағатта берілуі мүмкін, бірақ ЖТМ жоғары болады. Біздің AI жүйесі ең жылдам нұсқаларды көрсетеді.',
  },
]

export default function KazakhstanHubPage() {
  return (
    <>
      <Navigation locale="kk" />
      <StickyApplyButton />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Қазақстан • Loan AI Portal
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Қазақстанда жеке несиелерді AI көмегімен салыстырыңыз
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              ҚР Ұлттық Банкі лицензиясы бар несие берушілерден ұсыныстарды салыстырыңыз. 
              Біздің AI жүйесі ең төмен ЖТМ, ашық шарттар және жылдам қарау мерзімдерін табады.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#regional-guides"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Өңірлік нұсқаулықтарды көру
              </Link>
              <Link
                href="/kz/apply"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Несиеге өтінім беру
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{kazakhstanRegions.length} өңір</p>
                <p className="text-sm">Барлық облыстарда несие берушілерді салыстыру</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{totalKazakhstanCities}+ қала</p>
                <p className="text-sm">Облыс орталықтары мен ірі қалалар</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">AI бағалау 0–100</p>
                <p className="text-sm">ЖТМ және беделге негізделген рейтинг</p>
              </div>
            </div>
            <LeadGenDisclosure locale="kk" className="mt-4 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Өтінім толтыру және AI бағалау</h2>
            <p className="mt-3 text-blue-900/80">
              Біздің платформа ҚР Ұлттық Банкі ережелеріне сәйкес жұмыс істейді. Барлық несие берушілер 
              лицензияланған және құқықтық мониторингтен өтеді. Деректеріңіз SSL шифрлаумен қорғалған.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: '1. Негізгі талдау',
                  text: 'Несие сомасын, мерзімін және мақсатын көрсетіңіз. Табыс деңгейі, несие тарихы және кепілдік тексеріледі.',
                  icon: '📝',
                },
                {
                  title: '2. AI іріктеу',
                  text: 'Жүйе ЖТМ, айлық төлемдер және комиссияларды салыстырады. ҚР Ұлттық Банкі шектеулері ескеріледі.',
                  icon: '🤖',
                },
                {
                  title: '3. Ашық ұсыныстар',
                  text: 'Теңгемен өкілді мысалдар толық төленетін сомамен көрсетіледі. Құжаттарды жеңіл сақтай аласыз.',
                  icon: '✅',
                },
              ].map((step) => (
                <Card key={step.title} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl">{step.icon}</div>
                    <CardTitle className="text-lg text-blue-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">{step.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="regional-guides" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Өңірлік нұсқаулықтар</h2>
            <p className="mt-3 text-blue-900/80">
              Әрбір өңір ЖТМ кестелерін, лицензияланған несие берушілерді, филиал байланыстарын, 
              ұсынылатын мақсаттар мен ең жиі кездесетін комиссиялар туралы ескертулерді қамтиды.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {kazakhstanRegions.map((region) => (
                <Card key={region.code} className="h-full border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{region.nameKk}</CardTitle>
                    <p className="text-sm text-blue-900/70">
                      Орталық: {region.capital} • Қалалар: {region.cityCount} • Орташа мөлшерлеме: {region.averageRate}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-blue-900/80">
                    <p>{region.description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">Басым қалалар</p>
                      <ul className="mt-2 space-y-1">
                        {region.featuredCities.map((city) => (
                          <li key={city}>• {city}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/kz/regions/${region.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Өңірлік нұсқаулықты ашу <span aria-hidden>→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Несие түрлері мен мақсаттары</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Танымал несие категориялары</h3>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Тұрмыстық техника сатып алу (12-36 ай, 18-28% ЖТМ)</li>
                  <li>• Жөндеу және қайта жаңарту (24-60 ай, 19-30% ЖТМ)</li>
                  <li>• Медициналық қызметтер (6-24 ай, 20-35% ЖТМ)</li>
                  <li>• Білім беру және курстар (12-36 ай, 18-26% ЖТМ)</li>
                  <li>• Несиелерді біріктіру (24-84 ай, 17-24% ЖТМ банктерде)</li>
                  <li>• Бизнес дамыту (12-48 ай, МҚҰ арқылы 25-45% ЖТМ)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Кепілмен несиелер</h3>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Автокөлік кепілі: 12-15% ЖТМ, көліктің құнының 70%-ға дейін</li>
                  <li>• Жылжымайтын мүлік кепілі: 12-18% ЖТМ, баламасының 60%-ға дейін</li>
                  <li>• Күміс-зергерлік бұйымдар (ломбард): 3-9% айына, құнның 70%-ға дейін</li>
                  <li>• Депозит кепілі: 10-14% ЖТМ (банктерде), депозиттің 90%-ға дейін</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Реттеу және қорғау</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {complianceHighlights.map((highlight) => (
                <Card key={highlight.title} className="border-blue-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-blue-900/80">
                      {highlight.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-blue-900">Пайдалы сілтемелер</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <a
                  href="https://nationalbank.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  ҚР Ұлттық Банкі <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://nationalbank.kz/ru/page/registr-mikrofinansovyh-organizaciy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  МҚҰ тізілімі <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://krb.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Несие бюросы <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://finreg.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Қаржылық реттеуші <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Жиі қойылатын сұрақтар</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/kz/apply"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Несиеге өтінім беру
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="kk" />
    </>
  )
}
