import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky Cvikov, Liberecký kraj – Srovnání 2025',
  description: 'Najděte nejlepší půjčky v Cvikově. Kompletní informace o regulacích, podmínkách a licencovaných poskytovatelích v Libereckém kraji.',
}

export default function CvikovPage() {
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
        <span className="text-gray-600">Cvikov</span>
      </nav>

      {/* H1 Heading */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Půjčky v Cvikově, Liberecký kraj</h1>
      </header>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Cvikov je město v Libereckém kraji, které nabízí přístup k moderním finančním službám. 
          Místní obyvatelé mohou využít spotřebitelské úvěry, refinancování i rychlé půjčky od 
          licencovaných poskytovatelů. Typické částky se pohybují od 5 000 do 500 000 Kč s flexibilní 
          dobou splatnosti. Všechny půjčky v Cvikově podléhají českým regulacím ČNB, které zajišťují 
          transparentnost a ochranu spotřebitele. Před podpisem smlouvy doporučujeme důkladně porovnat nabídky.
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
                Zde se zobrazí srovnávač nabídek od licencovaných poskytovatelů pro Cvikov
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
              <CardTitle className="text-lg">Jaké typy půjček jsou dostupné v Cvikově?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                V Cvikově jsou dostupné spotřebitelské úvěry, rychlé půjčky, refinancování a konsolidace 
                dluhů. Můžete si vybrat z nabídky bank i nebankovních společností. Typické částky se 
                pohybují od 5 000 do 500 000 Kč s dobou splatnosti od 6 do 84 měsíců.
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
                pracovních dnů. Vždy záleží na úplnosti poskytnutých dokumentů a individuálním posouzení.
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
                potvrzení o příjmu), a bankovní spojení. Některé půjčky mohou vyžadovat dodatečné 
                dokumenty jako potvrzení o zaměstnání nebo výpis z účtu. Požadavky se liší dle poskytovatele.
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
                i klientům s negativní historií, ale obvykle za vyšší úrokové sazby. Doporučujeme nejprve 
                zkontrolovat svůj záznam v registrech a případně požádat o jeho opravu, pokud obsahuje chyby.
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
                s půjčkou - úroky, poplatky a další náklady. Umožňuje snadné porovnání nabídek různých 
                poskytovatelů. V České republice je RPSN zákonně regulováno a poskytovatelé musí tuto 
                informaci jasně uvádět.
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
                <Link href="/cz/kraje/liberecky-kraj/ceska-lipa" className="block text-blue-600 hover:underline">
                  Půjčky Česká Lípa →
                </Link>
                <Link href="/cz/kraje/liberecky-kraj/novy-bor" className="block text-blue-600 hover:underline">
                  Půjčky Nový Bor →
                </Link>
                <Link href="/cz/kraje/liberecky-kraj/doksy" className="block text-blue-600 hover:underline">
                  Půjčky Doksy →
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
                name: 'Půjčky v Cvikově',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Cvikov',
                  addressRegion: 'Liberecký kraj',
                  addressCountry: 'CZ',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Jaké typy půjček jsou dostupné v Cvikově?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'V Cvikově jsou dostupné spotřebitelské úvěry, rychlé půjčky, refinancování a konsolidace dluhů.',
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
                  { '@type': 'ListItem', position: 4, name: 'Cvikov' },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  )
}
