import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { czRegions } from '@/data/cz-regions'

const currentYear = new Date().getFullYear()
const regionCode = 'pardubicky'
const regionData = czRegions.find(r => r.code === regionCode)!

const canonicalPath = `/cz/regions/${regionCode}`

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: `Půjčky ${regionData.name}`, url: canonicalPath, position: 3 },
]

export function generateMetadata(): Metadata {
  const title = `Půjčky v ${regionData.name} – AI srovnání ${currentYear}`
  const description = `Srovnejte licencované poskytovatele osobních půjček v ${regionData.name}. ${regionData.growthFocus} Transparentní RPSN a AI doporučení.`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      locale: 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    keywords: [
      `půjčky ${regionData.name}`,
      `osobní půjčka ${regionData.capital}`,
      'konsolidace',
      'AI srovnání půjček',
      'licencovaní poskytovatelé ČNB',
    ],
  }
}

export default function PardubickyRegionPage() {
  return (
    <>
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <BreadcrumbSchema items={breadcrumbItems} />
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {regionData.name} • Regionální průvodce {currentYear}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Půjčky v {regionData.name} – licencované srovnání
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              {regionData.growthFocus} AI model sleduje sazby, dotace i dostupnost poboček v regionu s {regionData.population.toLocaleString('cs-CZ')} obyvateli.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Průměrné RPSN</p>
                    <p className="mt-1 text-2xl font-bold text-blue-600">{regionData.averageRpsn}</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      v regionu {regionData.name}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Města v kraji</p>
                    <p className="mt-1 text-2xl font-bold text-blue-600">{regionData.cityCount}</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      s pokrytím poskytovatelů
                    </p>
                  </div>
                </div>
                <LeadGenDisclosure locale="cs" className="mt-6 max-w-3xl text-blue-900/70" />
              </div>
              <VolsorLoanForm
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg"
                product="personal"
                country="cs"
                affiliate={9900}
                campaign={`${regionCode}-region`}
                partnerName={`Volsor ${regionData.name}`}
                theme="old_styled"
              />
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Prioritní města v {regionData.name}</h2>
            <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
              Regionální průvodce pokrývá města s největší nabídkou licencovaných poskytovatelů a poboček.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {regionData.featuredCities.map((city) => (
                <Card key={city} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-900/80">
                      Průvodce půjčkami pro město {city} je ve výstavbě. Použijte formulář výše pro žádost o úvěr.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-blue-900">Kontakty na regulátory</h2>
              <p className="mt-3 text-sm text-blue-900/80">
                Než podepíšete smlouvu, ověřte licenci poskytovatele a využijte dostupné bezplatné poradenské služby.
              </p>
              <div className="mt-6 space-y-5">
                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">
                      <Link href="https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO?p_lang=cz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        ČNB – registr poskytovatelů úvěrů
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    Ověřte licence bank, družstevních záložen i nebankovních poskytovatelů před podpisem smlouvy.
                  </CardContent>
                </Card>
                <Card className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">
                      <Link href="https://www.clovekvtisni.cz/poradenstvi" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Dluhová poradna Člověk v tísni
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    Bezplatná pomoc s konsolidacemi, oddlužením a řešením platební neschopnosti v regionu.
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl font-semibold text-blue-900">Nejčastější dotazy</h2>
            <div className="mt-8 space-y-4">
              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Jaké doklady potřebuji k žádosti v {regionData.name}?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  Standardem je občanský průkaz, potvrzení o příjmu a výpis z účtu. Podnikatelé dokládají účetní závěrky nebo daňové přiznání.
                </p>
              </details>
              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Jak rychle získám schválení úvěru?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  Banky rozhodují do dvou pracovních dnů po dodání všech podkladů. Nebankovní partneři reagují rychleji, ale vždy ověřují registry a DSTI limity.
                </p>
              </details>
              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Je možné kombinovat půjčku s dotacemi?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  Ano, kraj podporuje energetické úspory i rozvoj podnikání. Potřebujete rozhodnutí o dotaci a harmonogram čerpání, aby poskytovatel sladil splátky s dotací.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
