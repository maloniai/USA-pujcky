import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import KazakhstanNavigation from '@/components/kazakhstan/kazakhstan-navigation'
import KazakhstanFooter from '@/components/kazakhstan/kazakhstan-footer'
import KazakhstanDisclosure from '@/components/kazakhstan/kazakhstan-disclosure'
import KazakhstanFAQ from '@/components/kazakhstan/kazakhstan-faq'
import StickyApplyButton from '@/components/kazakhstan/sticky-apply-button'
import { kazakhstanRegions, getRegionBySlug, getAllRegionSlugs } from '@/data/kazakhstan-regions'
import { getCitiesByRegion } from '@/data/kazakhstan-cities'

export async function generateStaticParams() {
  return getAllRegionSlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const region = getRegionBySlug(params.slug)
  
  if (!region) {
    return {
      title: 'Аймақ табылмады',
    }
  }

  const currentYear = new Date().getFullYear()
  
  return {
    title: `${region.nameKk} несиелері – ${currentYear} жылғы салыстыру`,
    description: `${region.descriptionKk} Орташа мөлшерлемелер: ${region.avgRate}. ҚҰБ лицензияланған несие берушілер, толық ашықтық, жергілікті қолдау.`,
    openGraph: {
      title: `${region.nameKk} несиелері`,
      description: region.descriptionKk,
      url: `https://loansai.com/kk/regions/${region.slug}`,
    },
    alternates: {
      canonical: `https://loansai.com/kk/regions/${region.slug}`,
    },
  }
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = getRegionBySlug(params.slug)
  
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.slug)
  const currentYear = new Date().getFullYear()

  // Find nearby regions for lateral linking
  const currentIndex = kazakhstanRegions.findIndex(r => r.slug === params.slug)
  const nearbyRegions = [
    kazakhstanRegions[(currentIndex - 1 + kazakhstanRegions.length) % kazakhstanRegions.length],
    kazakhstanRegions[(currentIndex + 1) % kazakhstanRegions.length],
    kazakhstanRegions[(currentIndex + 2) % kazakhstanRegions.length],
  ].filter(r => r.slug !== params.slug).slice(0, 3)

  const faqItems = [
    {
      question: `${region.nameKk} аймағында несие алу үшін қандай құжаттар қажет?`,
      answer: `${region.nameKk} аймағында несие алу үшін әдетте: жарамды жеке куәлік, табыс дәлелі (жалақы туралы анықтама), банк шоты үзіндісі (3-6 ай), тұрғылықты жері туралы дәлел қажет. Кейбір несие берушілер қосымша құжаттарды сұрауы мүмкін.`
    },
    {
      question: `${region.nameKk} аймағында орташа несие мөлшерлемелері қандай?`,
      answer: `${region.nameKk} аймағында орташа пайыздық мөлшерлеме шамамен ${region.avgRate} құрайды. Нақты мөлшерлеме сіздің несиелік тарихыңызға, табысыңызға және несие берушіге байланысты өзгеруі мүмкін. Орташа несие сомасы ${region.avgLoanAmount} құрайды.`
    },
    {
      question: `${region.nameKk} аймағында несиені қанша уақытта ала аламын?`,
      answer: 'Өтініш мақұлданғаннан кейін, несие әдетте 24-48 сағат ішінде тікелей банк шотыңызға аударылады. Кейбір несие берушілер тезірек қызмет көрсетуі мүмкін, басқалары толық тексеру үшін 3-5 жұмыс күні алуы мүмкін.'
    },
    {
      question: `${region.nameKk} аймағындағы несиелер қандай реттеулерге жатады?`,
      answer: `Барлық ${region.nameKk} аймағындағы несиелер ҚҰБ қадағалауына және Қазақстан Республикасының Микроқаржылық қызмет туралы заңына жатады. Максималды ЖПМ 56%. Барлық несие берушілердің лицензиясы болуы керек және тұтынушылардың құқықтарын қорғау заңдарын сақтауы керек.`
    },
  ]

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
        name: 'Аймақтар',
        item: 'https://loansai.com/kk/regions'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: region.nameKk,
        item: `https://loansai.com/kk/regions/${region.slug}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `${region.nameKk} жеке несиелері`,
    description: region.descriptionKk,
    areaServed: {
      '@type': 'State',
      name: region.nameKk
    },
    serviceType: 'Жеке несие салыстыру',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI Қазақстан'
    }
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>

      <KazakhstanNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600">
            <Link href="/kk" className="hover:text-blue-600">Басты бет</Link>
            <span className="mx-2">/</span>
            <Link href="/kk/regions" className="hover:text-blue-600">Аймақтар</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{region.nameKk}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {region.nameKk} несиелері
              </h1>
              <p className="text-xl mb-6 opacity-90">
                {region.descriptionKk}
              </p>
              <Link href="/kk/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Өтініш беру
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section - 80-120 words */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {region.nameKk} аймағында жеке несиелер ҚҰБ лицензияланған банктер мен микроқаржы 
              ұйымдарынан қолжетімді. Орташа несие сомасы {region.avgLoanAmount} құрайды, пайыздық 
              мөлшерлеме {region.avgRate} шамасында. Аймақ {region.population} тұрғынға қызмет көрсетеді. 
              Несие берушілер жеке несиелерден {region.topLoanTypesKk.join(', ')} дейін әртүрлі өнімдерді 
              ұсынады. Барлық несиелер Қазақстан заңдарына және ҚҰБ реттеулеріне сәйкес келеді, бұл 
              қарыз алушыларға толық қорғау мен ашықтықты қамтамасыз етеді.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.population}</div>
                <div className="text-sm text-gray-600">Халық</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgLoanAmount}</div>
                <div className="text-sm text-gray-600">Орташа несие</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.avgRate}</div>
                <div className="text-sm text-gray-600">Орташа мөлшерлеме</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{region.maxLoanAmount}</div>
                <div className="text-sm text-gray-600">Максимум несие</div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations - 5-8 bullets */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span>⚖️</span>
                {region.nameKk} аймағындағы жергілікті реттеулер
              </h2>
              <ul className="space-y-3">
                {region.regulationsKk.map((regulation, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-blue-600 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">{regulation}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Қадағалау органы:</strong> Қазақстан Ұлттық Банкі (ҚҰБ) •{' '}
                  <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    nationalbank.kz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities in Region */}
        {cities.length > 0 && (
          <section className="container mx-auto px-4 pb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                {region.nameKk} аймағындағы қалалар
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <Link 
                    key={city.slug}
                    href={`/kk/cities/${city.slug}`}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{city.nameKk}</h3>
                      <span className="text-xl">🏙️</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>👥 {city.population}</div>
                      <div>💰 {city.avgLoanAmount}</div>
                      <div>📊 {city.avgRate}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Regions - Lateral Links */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Сізге жақын басқа аймақтар
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {nearbyRegions.map((nearbyRegion) => (
                <Link
                  key={nearbyRegion.slug}
                  href={`/kk/regions/${nearbyRegion.slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{nearbyRegion.nameKk}</h3>
                  <div className="text-sm text-gray-600">
                    <div>📊 Орташа: {nearbyRegion.avgRate}</div>
                    <div>💰 {nearbyRegion.avgLoanAmount}</div>
                  </div>
                  <div className="mt-3 text-blue-600 text-sm font-semibold">
                    Көру →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanFAQ items={faqItems} />
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <KazakhstanDisclosure />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {region.nameKk} аймағында несие табуға дайынсыз ба?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Өтінішті толтырыңыз және аймағыңыздағы ең жақсы несие ұсыныстарын алыңыз.
              </p>
              <Link href="/kk/apply">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Өтініш беру
                  </span>
                </Button>
              </Link>
              <p className="mt-6 text-sm opacity-75">
                Несиелік балға әсері жоқ • Жылдам жауап • 100% тегін
              </p>
            </div>
          </div>
        </section>
      </main>

      <KazakhstanFooter />
    </>
  )
}
