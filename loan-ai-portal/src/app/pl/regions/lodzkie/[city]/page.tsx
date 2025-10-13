import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { FAQSchema } from '@/components/faq-schema'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { lodzkieCities } from '@/data/pl-lodzkie'

const currentYear = new Date().getFullYear()

interface PageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityData = lodzkieCities[params.city]
  
  if (!cityData) {
    return {
      title: 'Miasto nie znalezione',
    }
  }

  return {
    title: cityData.metaTitleTemplate,
    description: cityData.metaDescriptionTemplate,
    alternates: {
      canonical: `/pl/regions/lodzkie/${params.city}`,
    },
    openGraph: {
      title: cityData.metaTitleTemplate,
      description: cityData.metaDescriptionTemplate,
      url: `/pl/regions/lodzkie/${params.city}`,
      locale: 'pl_PL',
      type: 'website',
    },
    keywords: [
      `pożyczki ${cityData.name}`,
      `kredyty ${cityData.name}`,
      'kredyt gotówkowy',
      'pożyczka online',
      'RRSO',
      'KNF',
      'BIK',
    ],
  }
}

export default function CityPage({ params }: PageProps) {
  const cityData = lodzkieCities[params.city]

  if (!cityData) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Strona główna', url: '/', position: 1 },
    { name: 'Pożyczki Polska', url: '/pl', position: 2 },
    { name: `Pożyczki ${cityData.regionName}`, url: '/pl/regions/lodzkie', position: 3 },
    { name: `Pożyczki ${cityData.name}`, url: `/pl/regions/lodzkie/${params.city}`, position: 4 },
  ]

  return (
    <>
      <Navigation locale="pl" />
      <StickyApplyButton locale="pl" />
      <main className="flex-1 bg-slate-50">
        <BreadcrumbSchema items={breadcrumbItems} />
        <FAQSchema items={cityData.faq} />
        
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <nav className="mb-4 flex items-center gap-2 text-sm text-blue-600">
              <Link href="/pl" className="hover:underline">Polska</Link>
              <span aria-hidden>›</span>
              <Link href="/pl/regions/lodzkie" className="hover:underline">{cityData.regionName}</Link>
              <span aria-hidden>›</span>
              <span className="text-blue-900">{cityData.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
              Pożyczki w {cityData.name}, {cityData.regionName}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80">
              Porównaj najlepsze oferty pożyczek i kredytów w {cityData.name}. Licencjonowani pożyczkodawcy, przejrzyste warunki i wsparcie AI.
            </p>
          </div>
        </header>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  O pożyczkach w {cityData.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-blue-900/80">{cityData.intro}</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-blue-900">Kluczowe regulacje</h3>
                  <ul className="mt-4 space-y-3 text-sm text-blue-900/80">
                    {cityData.regulations.map((regulation, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 text-center text-xs font-semibold leading-5 text-blue-700">
                          •
                        </span>
                        <span>{regulation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Złóż wniosek online</h3>
                <p className="text-sm text-blue-900/80 mb-6">
                  Wypełnij prosty formularz i otrzymaj oferty dopasowane do Twojej sytuacji finansowej w {cityData.name}.
                </p>
                <Link
                  href="/pl/apply"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Rozpocznij wniosek
                </Link>
                <LeadGenDisclosure locale="pl" className="mt-4 text-blue-900/70" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-blue-900">Najczęściej zadawane pytania</h2>
          <div className="mt-6 space-y-4">
            {cityData.faq.map((item, index) => (
              <details key={index} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              Pożyczki w pobliskich miastach
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cityData.nearby.map((nearbyCity) => (
                <div
                  key={nearbyCity}
                  className="rounded-lg border border-blue-200 bg-white p-4 shadow-sm transition hover:border-blue-400 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-blue-900">{nearbyCity}</h3>
                  <p className="mt-2 text-sm text-blue-900/70">
                    Zobacz oferty pożyczek w {nearbyCity}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/pl/regions/lodzkie"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
              >
                <span aria-hidden>←</span> Powrót do pożyczek w województwie {cityData.regionName}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-blue-100 bg-blue-50/30 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">Ujawnienia i przykład reprezentatywny</h2>
            <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-blue-900/80">{cityData.disclosure.affiliate}</p>
              <p className="mt-4 text-sm font-semibold text-blue-900">
                Przykład reprezentatywny:
              </p>
              <p className="mt-2 text-sm text-blue-900/70">{cityData.disclosure.example}</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Gotowy porównać oferty pożyczek w {cityData.name}?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Rozpocznij szybki wniosek i otrzymaj dopasowane oferty w ciągu kilku minut.
            </p>
            <Link
              href="/pl/apply"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Rozpocznij wniosek
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="pl" />
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(lodzkieCities).map((city) => ({
    city,
  }))
}
