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
const regionCode = 'jihomoravsky'
const canonicalPath = `/cz/regions/${regionCode}`

// Find region data
const regionData = czRegions.find(r => r.code === regionCode)
if (!regionData) throw new Error(`Region ${regionCode} not found`)

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
  { name: `Půjčky ${regionData.name}`, url: canonicalPath, position: 3 },
]

export function generateMetadata(): Metadata {
  const title = `Osobní půjčky ${regionData.name} | AI srovnání ${currentYear}`
  const description = `${regionData.growthFocus} Srovnejte nabídky licencovaných poskytovatelů v ${regionData.capital} a okolí. Průměrné RPSN ${regionData.averageRpsn}.`

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
      `půjčky ${regionData.capital}`,
      `osobní úvěr ${regionData.name}`,
      'AI srovnání půjček',
      'RPSN',
      'licencovaní poskytovatelé ČNB',
    ],
  }
}

export default function RegionPage() {
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
              Osobní půjčky {regionData.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              Porovnejte RPSN od licencovaných poskytovatelů v {regionData.capital} a {regionData.cityCount} městech kraje. 
              {regionData.growthFocus}
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Průměrné RPSN</p>
                    <p className="mt-1 text-2xl font-bold text-blue-600">{regionData.averageRpsn}</p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Podle aktuálních sazebníků registrovaných poskytovatelů
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-lg font-semibold text-blue-900">Počet obyvatel</p>
                    <p className="mt-1 text-2xl font-bold text-blue-600">
                      {regionData.population.toLocaleString('cs-CZ')}
                    </p>
                    <p className="mt-1 text-sm text-blue-900/70">
                      Krajské město: {regionData.capital}
                    </p>
                  </div>
                </div>
                <LeadGenDisclosure locale="cs" className="mt-6 max-w-3xl text-blue-900/70" />
              </div>
              <VolsorLoanForm
                className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg"
                product="personal"
                country="cs"
                affiliate={9100}
                campaign={`${regionCode}-region`}
                partnerName="Volsor"
                theme="old_styled"
              />
            </div>
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Prioritní města v {regionData.name}</h2>
            <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
              Největší centra kraje s nejlepší dostupností licencovaných poskytovatelů a poboček.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {regionData.featuredCities.map((city) => (
                <Card key={city} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">{city}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>Průvodce měst s podrobným srovnáním RPSN a dostupných poskytovatelů bude brzy k dispozici.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Jak funguje AI doporučení pro {regionData.name}</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <div className="text-4xl mb-2" aria-hidden="true">📍</div>
                <CardTitle className="text-xl text-blue-900">Regionální data</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-900/80">
                <p>
                  Analyzujeme dostupnost poboček, průměrné příjmy v kraji a specifické ekonomické podmínky 
                  v {regionData.capital} a okolí.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <div className="text-4xl mb-2" aria-hidden="true">🎯</div>
                <CardTitle className="text-xl text-blue-900">RPSN srovnání</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-900/80">
                <p>
                  Porovnáváme skutečné sazby včetně všech poplatků. Průměrné RPSN v kraji je {regionData.averageRpsn}, 
                  ale konkrétní nabídka závisí na vaší bonitě.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <div className="text-4xl mb-2" aria-hidden="true">✅</div>
                <CardTitle className="text-xl text-blue-900">Licence ČNB</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-900/80">
                <p>
                  Zobrazujeme pouze poskytovatele registrované u České národní banky podle zákona 
                  č. 257/2016 Sb. o spotřebitelském úvěru.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Často kladené otázky</h2>
            <div className="mt-8 space-y-4 max-w-3xl">
              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Jaké jsou typické účely půjček v {regionData.name}?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  {regionData.growthFocus} Nejčastěji žádají klienti o konsolidaci stávajících úvěrů, 
                  financování rekonstrukcí, nákup vozidel a spotřební účely.
                </p>
              </details>

              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Jsou poskytovatelé v {regionData.capital} dostupní online?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  Ano, většina poskytovatelů nabízí plně online žádost s ověřením identity. 
                  Fyzické pobočky v {regionData.capital} jsou k dispozici pro osobní konzultace.
                </p>
              </details>

              <details className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  Jak dlouho trvá schválení půjčky?
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">
                  Online žádosti s AI posouzením poskytují orientační odpověď během 2-5 minut. 
                  Finální schválení a výplata prostředků obvykle do 24-48 hodin od úplné dokumentace.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-blue-200 bg-blue-50/70 p-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Potřebujete osobní konzultaci?</h2>
            <p className="text-blue-900/80 mb-6 max-w-2xl mx-auto">
              Náš tým připraví nezávazné srovnání půjček specificky pro {regionData.name} do 24 hodin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a 
                href="tel:+420255790777" 
                className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
                <span className="text-2xl">📞</span>
                <span className="font-semibold">+420 255 790 777</span>
              </a>
              <span className="hidden sm:inline text-blue-900/50">•</span>
              <a 
                href="mailto:compliance@loan-platform.com" 
                className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
                <span className="text-2xl">✉️</span>
                <span className="font-semibold">compliance@loan-platform.com</span>
              </a>
            </div>
            <Link
              href="/cz/apply"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Požádat o půjčku online
            </Link>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900 mb-8">Další regiony</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/cz/regions/praha" className="block">
                <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Hlavní město Praha</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>Průměrné RPSN 13,8 % • Prémiové konsolidace</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cz/regions/stredocesky" className="block">
                <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Středočeský kraj</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>Průměrné RPSN 15,1 % • Refinancování hypoték</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cz" className="block">
                <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Všechny regiony</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">
                    <p>Zpět na přehled všech 14 krajů</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
