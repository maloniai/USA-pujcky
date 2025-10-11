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
import StructuredData from '@/components/structured-data'
import type { CentralBohemianCityContent } from '@/data/cz-stredocesky'
import {
  getStredoceskyCity,
  resolveStredoceskyMetadata,
  stredoceskyCityMap,
  stredoceskyCitySlugs,
} from '@/data/cz-stredocesky'

interface CentralBohemiaCityPageProps {
  params: {
    city: string
  }
}

const canonicalRegionPath = '/cz/regions/stredocesky'

export function generateStaticParams() {
  return stredoceskyCitySlugs.map((slug) => ({ city: slug }))
}

export function generateMetadata({ params }: CentralBohemiaCityPageProps): Metadata {
  const meta = resolveStredoceskyMetadata(params.city)

  if (!meta) {
    return {
      title: 'Půjčky Středočeský kraj – města',
      description: 'Lokální srovnání půjček ve Středočeském kraji s licencovanými poskytovateli a AI doporučením.',
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

export default function CentralBohemiaCityPage({ params }: CentralBohemiaCityPageProps) {
  const city = getStredoceskyCity(params.city)

  if (!city) {
    notFound()
  }

  const nearbyCities = city.nearby
    .map((slug) => stredoceskyCityMap[slug])
    .filter((entry): entry is CentralBohemianCityContent => Boolean(entry))

  const currentYear = new Date().getFullYear()
  const metaDescription = city.metaDescriptionTemplate.replace('{{year}}', String(currentYear))
  const breadcrumbItems = [
    { name: 'Domů', url: '/', position: 1 },
    { name: 'Půjčky Česko', url: '/cz', position: 2 },
    { name: 'Půjčky Středočeský kraj', url: canonicalRegionPath, position: 3 },
    { name: `Půjčky ${city.name}`, url: `${canonicalRegionPath}/${city.slug}`, position: 4 },
  ]

  const faqSchemaItems = city.faq.map((item) => ({ q: item.question, a: item.answer }))
  const canonicalCityPath = `${canonicalRegionPath}/${city.slug}`

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Půjčky ${city.name} – Loan AI Portál`,
    description: metaDescription,
    serviceType: 'Osobní půjčky a konsolidace',
    url: `https://loan-platform.com${canonicalCityPath}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: city.name,
      addressCountry: 'CZ',
    },
    provider: {
      '@type': 'Organization',
      name: 'Loan AI Portál',
      url: 'https://loan-platform.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Nejčastější využití půjček – ${city.shortTitle}`,
      itemListElement: city.loanUseCases.map((useCase, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: useCase,
          description: `${useCase} – licencovaní poskytovatelé ve ${city.name}`,
        },
      })),
    },
    potentialAction: {
      '@type': 'ApplyAction',
      name: 'Online žádost o půjčku',
      target: `https://loan-platform.com${canonicalCityPath}#zadost`,
      result: {
        '@type': 'LoanOrCredit',
        name: 'Spotřebitelská půjčka',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '15200',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const summarizeIntro = (text: string, length: number) => {
    if (text.length <= length) return text
    return `${text.slice(0, length).trim()}…`
  }

  return (
    <>
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <StructuredData data={financialServiceSchema} />
        <BreadcrumbSchema items={breadcrumbItems} />
        <FAQSchema faqs={faqSchemaItems} />
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <Link
              href={canonicalRegionPath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <span aria-hidden>←</span> Zpět na půjčky Středočeský kraj
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
                <div className="mt-6 space-y-3">
                  <Card className="border-blue-100 bg-blue-50/60 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">Výhody doporučovaných nabídek</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-blue-900/80">
                        {city.offerHighlights.map((highlight) => (
                          <li key={highlight}>• {highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  {city.regulations.map((rule) => (
                    <li key={rule} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 shadow-sm">
                      • {rule}
                    </li>
                  ))}
                </ul>
                <LeadGenDisclosure locale="cs" className="mt-6 text-blue-900/70" />
              </div>
              <div id="zadost">
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
          </div>
        </section>

        <section className="border-t border-blue-100 bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">Profil lokální poptávky</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Klíčová odvětví</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {city.focusSectors.map((sector) => (
                      <li key={sector}>• {sector}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Nejčastější využití půjček</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {city.loanUseCases.map((useCase) => (
                      <li key={useCase}>• {useCase}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Profil žadatelů</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-blue-900/80">
                  <p>
                    <span className="font-semibold">Typický žadatel:</span> {city.borrowerProfile}
                  </p>
                  <p>
                    <span className="font-semibold">Částky a splatnost:</span> {city.amountRange}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Co sleduje AI skóre</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-blue-900/80">
                  <p>
                    <span className="font-semibold">Klíčový faktor:</span> {city.highlight}
                  </p>
                  <p>
                    <span className="font-semibold">Infrastruktura:</span> {city.infrastructure}
                  </p>
                </CardContent>
              </Card>
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
                  <details
                    key={item.question}
                    className="rounded-xl border border-blue-100 bg-white p-4 text-sm text-blue-900/80 shadow-sm"
                  >
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
                  Srovnejte také sousední města. AI zohlední dojíždění, pobočky i napojení na průmyslové zóny a logistické trasy.
                </p>
                <ul className="space-y-2">
                  {nearbyCities.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link
                        href={`${canonicalRegionPath}/${nearby.slug}`}
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
