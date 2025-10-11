import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { lodzkieRegionContent } from '@/data/pl-lodzkie'

const currentYear = new Date().getFullYear()
const canonicalPath = '/pl/regions/lodzkie'

const {
  heroTitle,
  heroSubtitle,
  overview,
  regulationSummary,
  regulatorLinks,
  featuredLenders,
  topCities,
  blogTeasers,
} = lodzkieRegionContent

const breadcrumbItems = [
  { name: 'Strona główna', url: '/', position: 1 },
  { name: 'Pożyczki Polska', url: '/pl', position: 2 },
  { name: 'Pożyczki Łódzkie', url: canonicalPath, position: 3 },
]

export function generateMetadata(): Metadata {
  const title = `${heroTitle} | ${currentYear}`

  return {
    title,
    description: heroSubtitle,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description: heroSubtitle,
      url: canonicalPath,
      locale: 'pl_PL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: heroSubtitle,
    },
    keywords: [
      'pożyczki łódzkie',
      'kredyty katowice',
      'pożyczki online śląsk',
      'porównanie kredytów',
      'KNF',
      'BIK',
    ],
  }
}

export default function SlaskieRegionPage() {
  return (
    <>
      <Navigation locale="pl" />
      <StickyApplyButton locale="pl" />
      <main className="flex-1 bg-slate-50">
        <BreadcrumbSchema items={breadcrumbItems} />
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Łódzkie • Przewodnik regionalny {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">{heroTitle}</h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">{heroSubtitle}</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-sm leading-7 text-blue-900/80">{overview}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Regulacje KNF</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Monitorujemy weryfikację BIK, RRSO i opublikowane stawki licencjonowanych banków i firm pożyczkowych.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Ocena AI</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Wyniki sortujemy według RRSO, całkowitego kosztu i szybkości wypłaty środków.
                    </p>
                  </div>
                </div>
                <LeadGenDisclosure locale="pl" className="mt-6 max-w-3xl text-blue-900/70" />
              </div>
              <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Złóż wniosek online</h3>
                <p className="text-sm text-blue-900/80 mb-6">
                  Wypełnij prosty formularz i otrzymaj oferty dopasowane do Twojej sytuacji finansowej.
                </p>
                <Link
                  href="/pl/apply"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Rozpocznij wniosek
                </Link>
                <p className="mt-4 text-xs text-blue-900/70">
                  Wypełnienie formularza nie zobowiązuje do wzięcia pożyczki i nie wpływa na Twoją zdolność kredytową.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Regulacje i ochrona konsumenta</h2>
            <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/40 p-8 shadow-sm">
              <ul className="space-y-3 text-sm text-blue-900/80">
                {regulationSummary.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 text-center text-xs font-semibold leading-5 text-blue-700">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {regulatorLinks.map((link) => (
                <Card key={link.label} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base text-blue-900">{link.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-blue-900/70">{link.description}</p>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Odwiedź stronę <span aria-hidden>→</span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Licencjonowani pożyczkodawcy</h2>
          <p className="mt-3 text-sm text-blue-900/80">
            Wszyscy wyróżnieni pożyczkodawcy są zarejestrowani w KNF i przestrzegają przepisów o kredycie konsumenckim.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredLenders.map((lender) => (
              <Card key={lender.name} className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{lender.name}</CardTitle>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                    {lender.licenseId}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-blue-900/80">{lender.description}</p>
                  <a
                    href={lender.website}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Odwiedź stronę {lender.name} <span aria-hidden>→</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Najważniejsze miasta w województwie</h2>
            <p className="mt-3 text-sm text-blue-900/80">
              Kliknij miasto, aby zobaczyć szczegółowe informacje o lokalnych pożyczkodawcach, warunkach i FAQ.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/pl/regions/lodzkie/${city.slug}`}
                  className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-900">{city.name}</h3>
                  <p className="mt-2 text-sm text-blue-900/70">{city.focus}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Zobacz szczegóły <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Przydatne artykuły i porady</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogTeasers.map((post) => (
              <Card key={post.title} className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-blue-900/70">{post.excerpt}</p>
                  <Link
                    href={post.href}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Czytaj więcej <span aria-hidden>→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-semibold text-blue-900">Gotowy do porównania ofert?</h2>
            <p className="mt-4 text-lg text-blue-900/80">
              Uzyskaj niezobowiązujące oferty od wielu pożyczkodawców w ciągu kilku minut.
            </p>
            <Link
              href="/pl/apply"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Rozpocznij wniosek teraz
            </Link>
            <p className="mt-4 text-xs text-blue-900/70">
              Darmowe porównanie • Brak wpływu na BIK • Zajmuje 2 minuty
            </p>
          </div>
        </section>
      </main>
      <Footer locale="pl" />
    </>
  )
}
