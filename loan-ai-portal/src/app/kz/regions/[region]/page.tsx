import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { StickyApplyButton } from '@/components/kz/sticky-apply-button'
import {
  kazakhstanRegions,
  getRegionBySlug,
  getCitiesByRegion,
  type KazakhstanRegion,
} from '@/data/kz-regions'

const currentYear = new Date().getFullYear()

interface RegionPageProps {
  params: {
    region: string
  }
}

export function generateStaticParams() {
  return kazakhstanRegions.map((region) => ({
    region: region.slug,
  }))
}

export function generateMetadata({ params }: RegionPageProps): Metadata {
  const region = getRegionBySlug(params.region)
  if (!region) return {}

  const title = `${region.nameKk} несиелері – Салыстыру ${currentYear}`
  const description = `${region.nameKk} облысында жеке несиелерді салыстырыңыз. ${region.cityCount} қаладағы лицензияланған несие берушілер. Орташа мөлшерлеме: ${region.averageRate}. ${region.description}`

  return {
    title,
    description: description.slice(0, 155),
    keywords: [
      `${region.nameKk} несие`,
      `${region.capital} несие`,
      'қазақстан несиелері',
      'жеке несие',
      'МҚҰ',
      'банктік несие',
    ],
    alternates: {
      canonical: `/kz/regions/${region.slug}`,
    },
    openGraph: {
      title,
      description: description.slice(0, 155),
      url: `/kz/regions/${region.slug}`,
      type: 'website',
      locale: 'kk_KZ',
    },
  }
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getRegionBySlug(params.region)
  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(params.region)

  const breadcrumbItems = [
    { name: 'Басты', url: '/', position: 1 },
    { name: 'Қазақстан несиелері', url: '/kz', position: 2 },
    { name: region.nameKk, url: `/kz/regions/${region.slug}`, position: 3 },
  ]

  const regulationSummary = [
    {
      title: 'Реттеу органы',
      text: 'ҚР Ұлттық Банкі лицензиялау және бақылау жүргізеді. Барлық несие берушілер тіркелуі тиіс.',
    },
    {
      title: 'Пайыздық мөлшерлеме',
      text: `Банктер: 14-26% ЖТМ. МҚҰ-лар: 20-56% ЖТМ (заңды максимум). ${region.nameKk} облысында орташа: ${region.averageRate}.`,
    },
    {
      title: 'Тұтынушы қорғау',
      text: 'Барлық шығындар алдын ала жарияланады. 14 күн ішінде шарттан бас тарту құқығы. Мерзімінен бұрын өтеу айыппұлсыз.',
    },
  ]

  const featuredLenders = [
    {
      name: 'Қазком Банкі',
      type: 'Банк',
      rateRange: '15-22% ЖТМ',
      features: ['50,000₸ - 5,000,000₸', '6-60 ай', 'Онлайн өтінім'],
    },
    {
      name: 'Halyk Bank',
      type: 'Банк',
      rateRange: '16-24% ЖТМ',
      features: ['100,000₸ - 3,000,000₸', '12-48 ай', 'Филиалдар: 50+'],
    },
    {
      name: 'Bereke Bank',
      type: 'Банк',
      rateRange: '17-25% ЖТМ',
      features: ['30,000₸ - 2,000,000₸', '6-36 ай', 'Тез қарау'],
    },
    {
      name: 'OnlineKazFinance',
      type: 'МҚҰ',
      rateRange: '28-52% ЖТМ',
      features: ['20,000₸ - 500,000₸', '3-24 ай', '30 мин шешім'],
    },
  ]

  const blogTeasers = [
    {
      title: `${region.nameKk} облысында несие алу нұсқаулығы`,
      excerpt: 'Құжаттар, талаптар, қарау мерзімдері және ең жақсы несие берушілерді таңдау кеңестері.',
      href: `/kz/blog/guide-${region.slug}`,
    },
    {
      title: 'ЖТМ қалай есептеледі және не үшін қажет',
      excerpt: 'Жылдық тиімді мөлшерлеме – бұл несие құнының толық көрсеткіші. Есептеу әдістері және мысалдар.',
      href: '/kz/blog/understand-ytm',
    },
    {
      title: 'Несие тарихын жақсарту жолдары',
      excerpt: 'Несие тарихыңызды қалай жақсартуға болады және неліктен бұл маңызды.',
      href: '/kz/blog/improve-credit-history',
    },
  ]

  return (
    <>
      <Navigation locale="kk" />
      <StickyApplyButton />
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
              <span className="font-semibold text-blue-900">{region.nameKk}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {region.nameKk} • Өңірлік нұсқаулық {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              {region.nameKk} облысында несиелер
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              {region.description} Орталық: {region.capital}. Несие берушілер {region.cityCount} қалада 
              қызмет көрсетеді. Орташа мөлшерлеме: {region.averageRate}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kz/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Несиеге өтінім беру
              </Link>
              <Link
                href="#cities"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Қалаларды көру
              </Link>
            </div>
            <LeadGenDisclosure locale="kk" className="mt-4 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">
              {region.nameKk} облысы туралы
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Экономикалық профиль</h3>
                <p className="mt-4 text-sm text-blue-900/80">
                  {region.description} Облыс орталығы – {region.capital} қаласы. 
                  Халқы: {region.population}. Аймақта {region.cityCount} қала бар.
                </p>
                <p className="mt-4 text-sm text-blue-900/80">
                  Несие нарығы дамыған. Екінші деңгейлі банктердің филиалдары, МҚҰ-лар 
                  және ломбардтар жұмыс істейді. Орташа мөлшерлеме: {region.averageRate}.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Негізгі қалалар</h3>
                <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
                  {region.featuredCities.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Реттеу және тұтынушы қорғау</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {regulationSummary.map((item) => (
                <Card key={item.title} className="border-blue-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">{item.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Ұсынылатын несие берушілер</h2>
            <p className="mt-3 text-sm text-blue-900/70">
              {region.nameKk} облысында қызмет көрсететін лицензияланған банктер мен МҚҰ-лар
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredLenders.map((lender) => (
                <Card key={lender.name} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-blue-900">{lender.name}</CardTitle>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {lender.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-blue-600">{lender.rateRange}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-blue-900/80">
                      {lender.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-blue-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/kz/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Барлық ұсыныстарды салыстыру
              </Link>
            </div>
          </div>
        </section>

        <section id="cities" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">
              {region.nameKk} облысының қалалары
            </h2>
            <p className="mt-3 text-blue-900/80">
              {cities.length} қалада несие берушілерді салыстырыңыз. Әрбір қала үшін жергілікті мәліметтер.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {cities.map((city) => (
                <Card key={city.slug} className="h-full border-blue-100 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{city.nameKk}</CardTitle>
                    <p className="text-xs text-blue-900/60">Халқы: {city.population}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-blue-900/80">{city.economicProfile}</p>
                    <Link
                      href={`/kz/cities/${region.slug}/${city.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Толық нұсқаулықты көру <span aria-hidden>→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Пайдалы мақалалар</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {blogTeasers.map((post) => (
                <Card key={post.href} className="h-full border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-blue-900/80">{post.excerpt}</p>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Оқу <span aria-hidden>→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="kk" />
    </>
  )
}
