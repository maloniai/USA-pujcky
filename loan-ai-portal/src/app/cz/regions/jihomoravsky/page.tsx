import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { jihomoravskyRegionContent } from '@/data/cz-jihomoravsky'

const currentYear = new Date().getFullYear()
const canonicalPath = '/cz/regions/jihomoravsky'

const {
  heroTitle,
  heroSubtitle,
  overview,
  regulationSummary,
  regulatorLinks,
  featuredLenders,
  topCities,
  blogTeasers,
  name,
} = jihomoravskyRegionContent

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: `Půjčky ${name}`, url: canonicalPath, position: 3 },
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
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: heroSubtitle,
    },
    keywords: [
      'půjčky Jihomoravský kraj',
      'osobní půjčky Brno',
      'konsolidace Jihomoravský kraj',
      'AI srovnání půjček',
      'licencovaní poskytovatelé ČNB',
      'půjčky Znojmo',
      'půjčky Hodonín',
    ],
  }
}

export default function SouthMoravianRegionPage() {
  return (
    <>
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <BreadcrumbSchema items={breadcrumbItems} />
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {name} • Regionální průvodce {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">{heroTitle}</h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">{heroSubtitle}</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-sm leading-7 text-blue-900/80">{overview}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Brno – ekonomické centrum</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Druhé největší město ČR s dynamickým trhem nemovitostí, IT sektorem a univerzitním prostředím. Vysoká poptávka po všech typech úvěrů.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">AI skóre pro Jihomoravský kraj</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Výsledky řadíme podle RPSN, celkového přeplacení a dostupnosti licencovaných partnerů v regionu od Brna až po vinařské oblasti.
                    </p>
                  </div>
                </div>
                <LeadGenDisclosure locale="cs" className="mt-6 max-w-3xl text-blue-900/70" />
              </div>
              <VolsorLoanForm
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg"
                product="personal"
                country="cs"
                affiliate={9250}
                campaign="jihomoravsky-region"
                partnerName="Volsor Jihomoravský"
                theme="old_styled"
              />
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Co řeší domácnosti a podnikatelé v Jihomoravském kraji</h2>
            <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
              AI model průběžně analyzuje sazebníky, registry dlužníků i krajské specifika. Díky tomu nabízíme doporučení, která zohledňují rozdíly mezi metropolitní oblastí Brna, vinařskými regiony na jihu a průmyslovými centry.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {regulationSummary.map((item) => (
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
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-blue-900">Kontakty na regulátory a poradny</h2>
              <p className="mt-3 text-sm text-blue-900/80">
                Než podepíšete smlouvu, ověřte licenci poskytovatele a využijte dostupné bezplatné poradenské služby v Jihomoravském kraji.
              </p>
              <div className="mt-6 space-y-5">
                {regulatorLinks.map((link) => (
                  <Card key={link.href} className="border-blue-100 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">
                        <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {link.label}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-blue-900/80">{link.description}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Potřebujete osobní konzultaci?</h3>
              <p className="mt-2 text-sm text-blue-900/80">
                Tým Loan AI Portálu vám připraví nezávazné srovnání do 24 hodin. Zavolejte na{' '}
                <a className="font-semibold hover:underline" href="tel:+420255790777">
                  +420 255 790 777
                </a>{' '}
                (Po–Pá 9:00–18:00) nebo napište na{' '}
                <a className="font-semibold hover:underline" href="mailto:compliance@loan-platform.com">
                  compliance@loan-platform.com
                </a>
                .
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Otevřít kontaktní centrum
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Licencovaní poskytovatelé v Jihomoravském kraji</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredLenders.map((lender) => (
                <Card key={lender.name} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{lender.name}</CardTitle>
                    <p className="text-xs uppercase tracking-wide text-blue-500">{lender.licenseId}</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-blue-900/80">
                    <p>{lender.description}</p>
                    <Link
                      href={lender.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      Navštívit web <span aria-hidden>→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Vyberte si město</h2>
          <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
            Každé město v Jihomoravském kraji má vlastní průvodce s reprezentativními příklady, licencovanými poskytovateli a lokálními doporučeními.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {topCities.map((city) => (
              <Card key={city.slug} className="border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{city.name}</CardTitle>
                  <p className="text-sm text-blue-900/70">{city.focus}</p>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/cz/regions/jihomoravsky/${city.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Otevřít průvodce <span aria-hidden>→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Doporučené články</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {blogTeasers.map((post) => (
                <Card key={post.href} className="h-full border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col justify-between text-sm text-blue-900/80">
                    <p>{post.excerpt}</p>
                    <Link
                      href={post.href}
                      className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      Číst více <span aria-hidden>→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
