import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { jihomoravskyCities } from '@/data/cz-jihomoravsky'

const currentYear = new Date().getFullYear()

interface PageProps {
  params: {
    city: string
  }
}

export function generateStaticParams() {
  return jihomoravskyCities.map((city) => ({
    city: city.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = jihomoravskyCities.find((c) => c.slug === params.city)
  if (!city) return {}

  const title = city.metaTitleTemplate.replace('{year}', currentYear.toString())
  const description = city.metaDescriptionTemplate

  return {
    title,
    description,
    alternates: {
      canonical: `/cz/regions/jihomoravsky/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/cz/regions/jihomoravsky/${city.slug}`,
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: [
      `půjčky ${city.name}`,
      `osobní půjčky ${city.name}`,
      `konsolidace ${city.name}`,
      `RPSN ${city.name}`,
      'Jihomoravský kraj',
      'licencovaní poskytovatelé ČNB',
    ],
  }
}

export default function SouthMoravianCityPage({ params }: PageProps) {
  const city = jihomoravskyCities.find((c) => c.slug === params.city)
  if (!city) notFound()

  const breadcrumbItems = [
    { name: 'Domů', url: '/', position: 1 },
    { name: 'Půjčky Česko', url: '/cz', position: 2 },
    { name: city.regionName, url: '/cz/regions/jihomoravsky', position: 3 },
    { name: `Půjčky ${city.name}`, url: `/cz/regions/jihomoravsky/${city.slug}`, position: 4 },
  ]

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Srovnání půjček ${city.name}`,
    description: city.metaDescriptionTemplate,
    serviceType: 'Porovnání osobních půjček',
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.regionName,
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'Loan AI Portál',
      url: 'https://loan-platform.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Typy půjček dostupné v ${city.name}`,
      itemListElement: city.loanUseCases.map((useCase, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: useCase,
          loanType: 'Spotřebitelský úvěr',
        },
      })),
    },
    potentialAction: {
      '@type': 'ApplyAction',
      name: 'Požádat o půjčku',
      url: `https://loan-platform.com/cz/regions/jihomoravsky/${city.slug}#zadost`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '15200',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <Link
              href="/cz/regions/jihomoravsky"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
            >
              ← Zpět na půjčky v Jihomoravském kraji
            </Link>
            <nav className="mt-2 flex items-center gap-2 text-xs text-blue-900/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">
                Domů
              </Link>
              <span>›</span>
              <Link href="/cz" className="hover:text-blue-600">
                Česko
              </Link>
              <span>›</span>
              <Link href="/cz/regions/jihomoravsky" className="hover:text-blue-600">
                {city.regionName}
              </Link>
              <span>›</span>
              <span className="text-blue-900">{city.name}</span>
            </nav>
            <h1 className="mt-4 text-4xl font-bold text-blue-900 md:text-5xl">
              Půjčky {city.name} – licencované nabídky a AI doporučení
            </h1>
            <p className="mt-4 max-w-3xl text-base text-blue-900/80">{city.metaDescriptionTemplate}</p>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">Přehled nabídek půjček v {city.name}</h2>
                <p className="mt-3 text-sm leading-7 text-blue-900/80">{city.intro}</p>
              </div>

              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Proč porovnat nabídky před podpisem?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {city.offerHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  Jak fungují půjčky v {city.name}? Pravidla a ochrana spotřebitele
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-blue-900/80">
                  {city.regulations.map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                      <span className="text-blue-600">•</span>
                      <span>{regulation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <LeadGenDisclosure locale="cs" className="text-sm text-blue-900/70" />
            </div>

            <div id="zadost">
              <div className="sticky top-4">
                <VolsorLoanForm
                  className="rounded-3xl border border-blue-100 bg-white p-5 shadow-lg"
                  product={city.offer.product || 'personal'}
                  country="cs"
                  affiliate={city.offer.affiliate}
                  campaign={city.offer.campaign}
                  partnerName={city.offer.partnerName}
                  theme={(city.offer.theme as 'old_styled' | 'modern_rounded') || 'old_styled'}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">Finanční profil {city.name}</h2>
            <p className="mt-2 text-sm text-blue-900/70">{city.highlight}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Klíčové sektory</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-blue-900/80">
                    {city.focusSectors.map((sector, index) => (
                      <li key={index}>• {sector}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Nejčastější užití půjček</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-blue-900/80">
                    {city.loanUseCases.map((useCase, index) => (
                      <li key={index}>• {useCase}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Typický žadatel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-900/80">{city.borrowerProfile}</p>
                  <p className="mt-2 text-xs font-semibold text-blue-600">Rozpětí: {city.amountRange}</p>
                </CardContent>
              </Card>

              <Card className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">Co AI model hodnotí</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-blue-900/80">
                    <li>• Stabilita příjmu</li>
                    <li>• Historie splácení</li>
                    <li>• Regionální RPSN</li>
                    <li>• Dostupnost pobočky</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-blue-900">Často kladené otázky – {city.name}</h2>
              <div className="mt-6 space-y-4">
                {city.faq.map((item, index) => (
                  <Card key={index} className="border-blue-100 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base text-blue-900">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-900/80">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-900">Půjčky v okolních městech</h2>
              <p className="mt-2 text-sm text-blue-900/70">
                Porovnejte nabídky v městech blízko {city.name} v Jihomoravském kraji
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {city.nearby.slice(0, 6).map((nearbyCity) => {
                  const nearbyCityData = jihomoravskyCities.find((c) => c.name === nearbyCity)
                  return nearbyCityData ? (
                    <Card key={nearbyCityData.slug} className="border-blue-100 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-base text-blue-900">{nearbyCityData.name}</CardTitle>
                        <p className="text-xs text-blue-900/60">{nearbyCityData.shortTitle}</p>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/cz/regions/jihomoravsky/${nearbyCityData.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                        >
                          Zobrazit nabídky <span aria-hidden>→</span>
                        </Link>
                      </CardContent>
                    </Card>
                  ) : null
                })}
              </div>
              <div className="mt-6">
                <Link
                  href="/cz/regions/jihomoravsky"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Zobrazit všechny půjčky v Jihomoravském kraji <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">Transparentnost a compliance</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card className="border-blue-100 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Upozornění pro spotřebitele</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-blue-900/80">
                  <p>{city.disclosure.affiliate}</p>
                  <p className="rounded-lg bg-blue-50 p-3 text-xs">
                    <strong>Reprezentativní příklad:</strong> {city.disclosure.example}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Infrastruktura finančních služeb</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-900/80">
                  <p>{city.infrastructure}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
