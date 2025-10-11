import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { VolsorLoanForm } from '@/components/cz/volsor-loan-form'
import { czRegions, totalCzechCities } from '@/data/cz-regions'
import { generatePageMetadata, czHubSEO } from '@/lib/seo'
import FAQSchema from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import OrganizationSchema from '@/components/organization-schema'

export const metadata = generatePageMetadata(czHubSEO, '/cz')

const complianceHighlights = [
  {
    title: 'Regulační rámec',
    items: [
      'Zákon č. 257/2016 Sb. o spotřebitelském úvěru',
      'Registr poskytovatelů – Česká národní banka (ČNB)',
      'Evidence zprostředkovatelů – kategorie vázaný zástupce',
    ],
  },
  {
    title: 'Co sledují poskytovatelé',
    items: [
      'Čistý měsíční příjem a typ pracovního poměru',
      'Ukazatel DTI / DSTI a historie v registrech BRKI a NRKI',
      'Prokazatelnost účelu – konsolidace, investice, překlenovací financování',
    ],
  },
  {
    title: 'Transparentní nabídky',
    items: [
      'Reprezentativní příklad v Kč s uvedením RPSN a poplatků',
      'Smluvní dokumentace před podpisem ke stažení v PDF',
      'Důraz na rel="sponsored" u komerčních partnerů',
    ],
  },
]

const faq = [
  {
    question: 'Jak rychle získám peníze na účet?',
    answer:
      'Bankovní poskytovatelé obvykle vyplácí do následujícího pracovního dne po podpisu smlouvy. Nebankovní společnosti často vyplácí do 30 minut od schválení, pokud máte účet u stejné banky.',
  },
  {
    question: 'Jaké dokumenty budu potřebovat?',
    answer:
      'Standardem je občanský průkaz, potvrzení o příjmu nebo daňové přiznání (u OSVČ) a výpis z bankovního účtu. U konsolidací přiložte smlouvy k úvěrům, které chcete refinancovat.',
  },
  {
    question: 'Jak funguje AI doporučení v české sekci?',
    answer:
      'Model vyhodnocuje RPSN, celkovou přeplacenou částku, reputaci poskytovatele a dostupnost v jednotlivých krajích. Výsledky jsou seřazeny podle transparentních kritérií a můžete je dále filtrovat.',
  },
]

const breadcrumbItems = [
  { name: 'Domů', url: '/', position: 1 },
  { name: 'Půjčky Česko', url: '/cz', position: 2 },
]

const publishedRegionSlugs = new Set(['praha', 'stredocesky', 'jihocesky', 'plzensky'])

export default function CzechRepublicHubPage() {
  return (
    <>
      <OrganizationSchema locale="cs" />
      <FAQSchema faqs={faq.map(f => ({ q: f.question, a: f.answer }))} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale="cs" />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Česká republika • Loan AI Portál
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Porovnejte osobní půjčky v Česku s podporou AI
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              Získejte přehled licencovaných bank i nebankovních společností, okamžitě porovnejte RPSN, 
              poplatky a dobu splatnosti. Naše AI zvýhodňuje transparentní nabídky a upozorní na skryté náklady.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#regional-guides"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zobrazit krajské průvodce
              </Link>
              <Link
                href="mailto:compliance@loan-platform.com"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Spojit se s poradcem
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{czRegions.length} krajů</p>
                <p className="text-sm">Lokální srovnání s RPSN a dostupností poboček</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{totalCzechCities} měst</p>
                <p className="text-sm">Pokrytí krajských měst, ORP i regionálních center</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">AI skóre 0–100</p>
                <p className="text-sm">Hodnocení nabídky podle celkového přeplacení a reputace</p>
              </div>
            </div>
            <LeadGenDisclosure locale="cs" className="mt-4 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Online žádost s okamžitým vyhodnocením</h2>
                <p className="mt-3 text-sm text-blue-900/80">
                  Formulář běží na zabezpečené platformě Volsor. Po odeslání získáte orientační rozhodnutí během několika minut.
                  AI model následně doporučí tři nejvhodnější nabídky podle RPSN, celkového přeplacení a rychlosti výplaty.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Funguje 24/7 – ověření identity probíhá plně online.</li>
                  <li>• Podporuje bankovní i nebankovní poskytovatele licencované ČNB.</li>
                  <li>• Průběžně sledujeme limity DTI/DSTI a upozorňujeme na rizikové nabídky.</li>
                </ul>
                <p className="mt-6 text-xs uppercase tracking-wide text-blue-500">Bezpečnost</p>
                <p className="mt-1 text-sm text-blue-900/80">
                  Všechna data jsou přenášena šifrovaně. Společnost Volsor s.r.o. (IČO 29136288) je registrovaným poskytovatelem u České národní banky.
                </p>
              </div>
              <VolsorLoanForm className="rounded-3xl border border-blue-100 bg-blue-50/60 p-4 shadow-lg" />
            </div>
          </div>
        </section>

        <section id="regional-guides" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Regionální průvodci a co očekávat</h2>
          <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
            Každý kraj obsahuje RPSN tabulky, licencované poskytovatele, kontakty na pobočky, doporučené účely a upozornění na nejčastější poplatky. Podklady vycházejí z registrů ČNB a veřejných sazebníků.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2" role="list" aria-label="Seznam českých krajů s regionálními průvodci">
            {czRegions.map((region) => (
              <Card key={region.code} className="h-full border-blue-100 shadow-sm" role="listitem">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{region.name}</CardTitle>
                  <p className="text-sm text-blue-900/70">
                    Sídlo: {region.capital} • Měst: {region.cityCount} • Průměrné RPSN: {region.averageRpsn}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-blue-900/80">
                  <p>{region.growthFocus}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">Prioritní města</p>
                    <ul className="mt-2 space-y-1" role="list">
                      {region.featuredCities.map((city) => (
                        <li key={city}>• {city}</li>
                      ))}
                    </ul>
                  </div>
                  {publishedRegionSlugs.has(region.code) ? (
                    <Link
                      href={`/cz/regions/${region.code}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                      aria-label={`Zobrazit podrobný regionální průvodce pro ${region.name}`}
                    >
                      Otevřít regionální průvodce <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <p className="text-xs text-blue-900/60">
                      Regionální průvodce je ve výstavbě. Zůstaňte s námi.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Jak funguje doporučení Loan AI Portálu</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: '1. Základní analýza',
                  text: 'Zadáte výši úvěru, preferovanou splatnost a účel. Ověříme minimální příjem, informace z registrů a případné zajištění.',
                  icon: '📝',
                },
                {
                  title: '2. AI scoring a filtrování',
                  text: 'Model srovná RPSN, měsíční splátky a poplatky. Zohlední legislativní limity (DTI/DSTI) i historii klienta.',
                  icon: '🤖',
                },
                {
                  title: '3. Transparentní nabídky',
                  text: 'Zobrazíme reprezentativní příklady v Kč včetně celkové zaplacené částky. Snadno si uložíte dokumentaci pro kontrolu.',
                  icon: '📄',
                },
              ].map((step) => (
                <Card key={step.title} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl" aria-hidden="true">{step.icon}</div>
                    <CardTitle className="text-xl text-blue-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">{step.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Regulační a compliance rámec</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {complianceHighlights.map((block) => (
              <Card key={block.title} className="border-blue-100 bg-blue-50/40 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {block.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Kdy dává česká AI doporučení největší smysl?</h2>
                <ul className="mt-6 space-y-3 text-sm text-blue-900/80">
                  <li>• Konsolidace více úvěrů a kreditních karet do jedné splátky s nižším RPSN.</li>
                  <li>• Financování rekonstrukcí, fotovoltaiky a energetických úspor s podporou kotlíkových dotací.</li>
                  <li>• Překlenovací financování pro OSVČ s nepravidelnými příjmy – zohledňuje sezonní výkyvy.</li>
                  <li>• Refinancování leasingů a nákupu vozidel s využitím zajištění.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-sm text-blue-900">
                <h3 className="text-lg font-semibold text-blue-900">Potřebujete lidského poradce?</h3>
                <p className="mt-2">
                  Zavolejte na <a className="font-semibold hover:underline" href="tel:+420255790777">+420 255 790 777</a> (Po–Pá 9:00–18:00) nebo napište na{' '}
                  <a className="font-semibold hover:underline" href="mailto:compliance@loan-platform.com">compliance@loan-platform.com</a>.
                </p>
                <p className="mt-3">
                  Specializovaný tým v Praze 1 vám připraví nezávazné srovnání do 24 hodin.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Otevřít kontaktní centrum
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Nejčastější dotazy</h2>
          <div className="mt-8 space-y-4" role="list" aria-label="Často kladené otázky o půjčkách v České republice">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm" role="listitem">
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="cs" />
    </>
  )
}
