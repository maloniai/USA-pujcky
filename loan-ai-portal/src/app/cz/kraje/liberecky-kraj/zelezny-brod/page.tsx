import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky Železný Brod, Liberecký kraj – Srovnání 2025',
  description: 'Najděte nejlepší půjčky v Železný Brod. Kompletní informace o regulacích, podmínkách a licencovaných poskytovatelích v Libereckém kraji.',
}

export default function Zelezny_brodPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">Kraje</Link>
        {' > '}
        <Link href="/cz/kraje/liberecky-kraj" className="text-blue-600 hover:underline">Liberecký kraj</Link>
        {' > '}
        <span className="text-gray-600">Železný Brod</span>
      </nav>

      {/* H1 Heading */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Půjčky v Železný Brod, Liberecký kraj</h1>
      </header>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Železný Brod je město v Libereckém kraji se silnou sklářskou tradicí a rozvinutými finančními službami. Nabízí širokou škálu spotřebitelských úvěrů, refinancování, půjček pro řemeslníky a podnikatele i rychlé online půjčky. Konkurenční prostředí zajišťuje atraktivní podmínky. Typické částky se pohybují od 10 000 do 700 000 Kč. Všichni poskytovatelé musí dodržovat českou legislativu včetně registrace u ČNB, transparentních smluv a 14denního práva na odstoupení.
        </p>
      </section>

      {/* Offer Iframe Placeholder */}
      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Porovnejte Nabídky Půjček</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-gray-600 mb-4">
                Zde se zobrazí srovnávač nabídek od licencovaných poskytovatelů pro Železný Brod
              </p>
              <p className="text-sm text-gray-500">
                [Místo pro iframe s nabídkami partnerů]
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Local Regulations */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace a Ochrana Spotřebitele</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Maximální RPSN:</strong> Zákonné limity dle zákona o spotřebitelském úvěru</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Licencování:</strong> Všichni poskytovatelé musí být registrováni u ČNB</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Právo na odstoupení:</strong> 14denní lhůta bez udání důvodu</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Transparentnost:</strong> Jasné uvedení všech nákladů a podmínek</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Předčasné splacení:</strong> Právo bez sankcí</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Často Kladené Otázky</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jaké typy půjček jsou dostupné v Železný Brod?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                V Železný Brod jsou dostupné spotřebitelské úvěry, rychlé půjčky, refinancování a konsolidace 
                dluhů. Můžete si vybrat z nabídky bank i nebankovních společností.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jak dlouho trvá schválení půjčky?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Doba schválení závisí na typu půjčky a poskytovateli. Rychlé online půjčky mohou být 
                schváleny během několika hodin, zatímco standardní bankovní úvěry obvykle trvají 2-5 
                pracovních dnů.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jaké dokumenty potřebuji k žádosti o půjčku?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Standardně budete potřebovat platný občanský průkaz, doklad o příjmu (výplatní páska, 
                potvrzení o příjmu), a bankovní spojení. Požadavky se liší dle poskytovatele.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mohu získat půjčku s negativním záznamem v registru?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Záleží na povaze a závažnosti záznamu. Některé nebankovní společnosti poskytují půjčky 
                i klientům s negativní historií, ale obvykle za vyšší úrokové sazby.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Co je RPSN a proč je důležité?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                RPSN (Roční procentní sazba nákladů) je ukazatel, který zahrnuje všechny náklady spojené 
                s půjčkou. Umožňuje snadné porovnání nabídek různých poskytovatelů.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="mb-10">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>← Zpět na Liberecký kraj</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/cz/kraje/liberecky-kraj" className="text-blue-600 hover:underline">
                Zobrazit všechna města v Libereckém kraji
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Půjčky ve vašem okolí</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/cz/kraje/liberecky-kraj/turnov" className="block text-blue-600 hover:underline">
                  Půjčky Turnov →
                </Link>
                <Link href="/cz/kraje/liberecky-kraj/semily" className="block text-blue-600 hover:underline">
                  Půjčky Semily →
                </Link>
                <Link href="/cz/kraje/liberecky-kraj/jablonec-nad-nisou" className="block text-blue-600 hover:underline">
                  Půjčky Jablonec nad Nisou →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclosure Block */}
      <section className="mb-10">
        <Card className="bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Důležité Upozornění</h3>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                <strong>Partnerská spolupráce:</strong> Tato stránka obsahuje odkazy na produkty našich 
                partnerů. Pokud si vyberete produkt prostřednictvím těchto odkazů, můžeme obdržet provizi. 
                To však neovlivňuje naše hodnocení ani ceny, které platíte.
              </p>
              <p>
                <strong>Reprezentativní příklad:</strong> Půjčka 100 000 Kč na 24 měsíců. RPSN 19,9 %, 
                úroková sazba 18,5 % p.a., měsíční splátka 5 089 Kč, celková částka k zaplacení 122 136 Kč. 
                Uvedené podmínky jsou pouze ilustrativní a skutečné podmínky se mohou lišit v závislosti 
                na individuálním posouzení.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FinancialService',
                name: 'Půjčky v Železný Brod',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Železný Brod',
                  addressRegion: 'Liberecký kraj',
                  addressCountry: 'CZ',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Jaké typy půjček jsou dostupné v Železný Brod?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'V Železný Brod jsou dostupné spotřebitelské úvěry, rychlé půjčky, refinancování a konsolidace dluhů.',
                    },
                  },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Domů', item: 'https://example.com/cz' },
                  { '@type': 'ListItem', position: 2, name: 'Kraje', item: 'https://example.com/cz/kraje' },
                  { '@type': 'ListItem', position: 3, name: 'Liberecký kraj', item: 'https://example.com/cz/kraje/liberecky-kraj' },
                  { '@type': 'ListItem', position: 4, name: 'Železný Brod' },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  )
}
