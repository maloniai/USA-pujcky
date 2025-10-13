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
import type { OlomouckyCityContent } from '@/data/cz-olomoucky'
import { getolomouckyCity, olomouckyCityMap, olomouckyCitySlugs, resolveolomouckyMetadata } from '@/data/cz-olomoucky'

interface OlomouckyCityPageProps {
  params: {
    city: string
  }
}

const canonicalRegionPath = '/cz/regions/olomoucky'

export function generateStaticParams() {
  return olomouckyCitySlugs.map((slug) => ({ city: slug }))
}

export function generateMetadata({ params }: OlomouckyCityPageProps): Metadata {
  const meta = resolveolomouckyMetadata(params.city)

  if (!meta) {
    return {
      title: 'Půjčky Olomoucký kraj – města',
      description: 'Lokální srovnání půjček v Olomoucký kraj_LOCATIVE s licencovanými poskytovateli.',
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

export default function OlomouckyCityPage({ params }: OlomouckyCityPageProps) {
  const city = getolomouckyCity(params.city)

  if (!city) {
    notFound()
  }

  const nearbyCities = city.nearby
    .map((slug) => olomouckyCityMap[slug])
    .filter((entry): entry is OlomouckyCityContent => Boolean(entry))

  const currentYear = new Date().getFullYear()
  const breadcrumbItems = [
    { name: 'Domů', url: '/', position: 1 },
    { name: 'Půjčky Česko', url: '/cz', position: 2 },
    { name: 'Půjčky Olomoucký kraj', url: canonicalRegionPath, position: 3 },
    { name: `Půjčky ${city.name}`, url: `${canonicalRegionPath}/${city.slug}`, position: 4 },
  ]

  const faqSchemaItems = city.faq.map((item) => ({ q: item.question, a: item.answer }))

  return (
    <>
      <FAQSchema faqs={faqSchemaItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {city.name}, {city.regionName} • {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Půjčky v {city.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              {city.intro}
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <LeadGenDisclosure locale="cs" className="mt-6 max-w-3xl text-blue-900/70" />
              </div>
              <VolsorLoanForm
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg"
                product={city.offer.product}
                country="cs"
                affiliate={city.offer.affiliate}
                campaign={city.offer.campaign}
                partnerName={city.offer.partnerName}
                theme={city.offer.theme}
              />
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Regulace a limity</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {city.regulations.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-sm leading-6 text-blue-900/80 shadow-sm"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Nejčastější dotazy</h2>
          <div className="mt-8 space-y-4">
            {city.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {nearbyCities.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-semibold text-blue-900">Okolní města</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {nearbyCities.map((nearby) => (
                  <Card key={nearby.slug} className="border-blue-100 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">{nearby.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`${canonicalRegionPath}/${nearby.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                      >
                        Otevřít průvodce <span aria-hidden>→</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">Upozornění</h3>
            <p className="mt-2 text-xs text-blue-900/70">{city.disclosure.affiliate}</p>
            <p className="mt-2 text-xs text-blue-900/70">{city.disclosure.example}</p>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
