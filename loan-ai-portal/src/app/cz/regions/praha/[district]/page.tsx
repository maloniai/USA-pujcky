import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import FAQSchema from '@/components/faq-schema'
import type { PragueCityContent } from '@/data/cz-prague'
import { getPragueCity, pragueCityMap, pragueCitySlugs, resolvePragueCityMetadata } from '@/data/cz-prague'

interface PragueDistrictPageProps {
  params: {
    district: string
  }
}

export function generateStaticParams() {
  return pragueCitySlugs.map((slug) => ({ district: slug }))
}

export function generateMetadata({ params }: PragueDistrictPageProps): Metadata {
  const meta = resolvePragueCityMetadata(params.district)

  if (!meta) {
    return {
      title: 'Půjčky Praha – městské části',
      description: 'Lokální srovnání půjček v Praze s licencovanými poskytovateli a AI doporučením.',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.alternates,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.alternates?.canonical,
      locale: 'cs_CZ',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export default function PragueDistrictPage({ params }: PragueDistrictPageProps) {
  const city = getPragueCity(params.district)

  if (!city) {
    notFound()
  }

  const nearbyCities = city.nearby
    .map((slug) => pragueCityMap[slug])
    .filter((entry): entry is PragueCityContent => Boolean(entry))

  const metaDescription = city.metaDescriptionTemplate.replace('{{year}}', String(new Date().getFullYear()))

  const summarizeIntro = (text: string, length: number) => {
    if (text.length <= length) return text
    return `${text.slice(0, length).trim()}…`
  }

  const breadcrumbItems = [
    { name: 'Domů', url: '/', position: 1 },
    { name: 'Půjčky Česko', url: '/cz', position: 2 },
    { name: 'Půjčky Praha', url: '/cz/regions/praha', position: 3 },
    { name: `Půjčky ${city.name}`, url: `/cz/regions/praha/${city.slug}`, position: 4 },
  ]

  const faqSchemaItems = city.faq.map((item) => ({ q: item.question, a: item.answer }))

  return (
    <>
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <BreadcrumbSchema items={breadcrumbItems} />
        <FAQSchema faqs={faqSchemaItems} />
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <Link
              href="/cz/regions/praha"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <span aria-hidden>←</span> Zpět na půjčky Praha
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-700">
              {city.regionName} • {city.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Půjčky {city.name} – licencované nabídky a AI doporučení
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">{metaDescription}</p>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">Jaké produkty se zde nejčastěji sjednávají</h2>
                <p className="mt-4 text-sm leading-7 text-blue-900/80">{city.intro}</p>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  {city.regulations.map((rule) => (
                    <li key={rule} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 shadow-sm">
                      • {rule}
                    </li>
                  ))}
                </ul>
                <LeadGenDisclosure locale="cs" className="mt-6 text-blue-900/70" />
              </div>
              <VolsorLoanForm
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg"
                product={city.offer.product}
                country="cs"
                affiliate={city.offer.affiliate}
                campaign={city.offer.campaign}
                theme={city.offer.theme}
                partnerName={city.offer.partnerName}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Časté otázky</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {city.faq.map((item) => (
                  <details key={item.question} className="rounded-xl border border-blue-100 bg-white p-4 text-sm text-blue-900/80 shadow-sm">
                    <summary className="cursor-pointer font-semibold text-blue-900">{item.question}</summary>
                    <p className="mt-3 leading-6">{item.answer}</p>
                  </details>
                ))}
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-blue-50/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Půjčky ve vašem okolí</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-blue-900/80">
                <p>
                  Srovnejte také sousední městské části. AI zohlední dojíždění, pobočky a dostupné benefity zaměstnavatelů.
                </p>
                <ul className="space-y-2">
                  {nearbyCities.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link
                        href={`/cz/regions/praha/${nearby.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline"
                      >
                        {nearby.name} <span aria-hidden>→</span>
                      </Link>
                      <p className="text-xs text-blue-900/70">{summarizeIntro(nearby.intro, 110)}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t border-blue-100 bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-xl font-semibold text-blue-900">Disclosure & compliance</h2>
            <p className="mt-3 text-sm text-blue-900/80">{city.disclosure.affiliate}</p>
            <p className="mt-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm font-semibold text-blue-900">
              {city.disclosure.example}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide text-blue-500">Poznámka</p>
            <p className="mt-1 text-sm text-blue-900/70">
              Sdílené informace mají informativní charakter. Před podpisem smlouvy vždy ověřte podmínky u daného poskytovatele a zvažte konzultaci s licencovaným poradcem.
            </p>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
