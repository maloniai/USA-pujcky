import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v Karlovarském kraji – Porovnání 2025',
  description: 'Kompletní přehled půjček v Karlovarském kraji. Nejlepší nabídky pro všechna města regionu. Rychlé schválení a bezpečné podmínky.',
}

const cities = [
  { name: 'Aš', slug: 'as' },
  { name: 'Bochov', slug: 'bochov' },
  { name: 'Boží Dar', slug: 'bozi-dar' },
  { name: 'Březová', slug: 'brezova' },
  { name: 'Cheb', slug: 'cheb' },
  { name: 'Chodov', slug: 'chodov' },
  { name: 'Františkovy Lázně', slug: 'frantiskovy-lazne' },
  { name: 'Habartov', slug: 'habartov' },
  { name: 'Horní Slavkov', slug: 'horni-slavkov' },
  { name: 'Hranice', slug: 'hranice' },
  { name: 'Jáchymov', slug: 'jachymov' },
  { name: 'Karlovy Vary', slug: 'karlovy-vary' },
  { name: 'Kynšperk nad Ohří', slug: 'kynsperk-nad-ohri' },
  { name: 'Lázně Kynžvart', slug: 'lazne-kynzvart' },
  { name: 'Loket', slug: 'loket' },
  { name: 'Luby', slug: 'luby' },
  { name: 'Mariánské Lázně', slug: 'marianske-lazne' },
  { name: 'Nejdek', slug: 'nejdek' },
  { name: 'Nová Role', slug: 'nova-role' },
  { name: 'Ostrov', slug: 'ostrov' },
  { name: 'Plesná', slug: 'plesna' },
  { name: 'Rotava', slug: 'rotava' },
  { name: 'Skalná', slug: 'skalna' },
  { name: 'Teplá', slug: 'tepla' },
  { name: 'Toužim', slug: 'touzim' },
  { name: 'Žlutice', slug: 'zlutice' },
]

export default function KarlovarskyKrajPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/cz" className="hover:text-blue-600">Domů</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Karlovarský kraj</span>
      </nav>

      {/* H1 Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Karlovarském kraji
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Karlovarský kraj nabízí širokou škálu možností půjček pro občany všech měst regionu. 
          Ať už žijete v Karlových Varech, Chebu, Sokolově nebo v menších městech, najdete zde 
          důvěryhodné poskytovatele s konkurenceschopnými podmínkami a transparentními procesy.
        </p>
      </header>

      {/* Regulation Summary */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Regulace a Ochrana Spotřebitele</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Maximální RPSN:</strong> Zákon o spotřebitelském úvěru stanovuje maximální 
              roční procentní sazbu nákladů pro nebankovní půjčky.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Licencovaní poskytovatelé:</strong> Všichni poskytovatelé musí být registrováni 
              u České národní banky (ČNB).
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Právo na odstoupení:</strong> Dlužník má právo odstoupit od smlouvy do 14 dnů 
              bez udání důvodu.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Transparentnost:</strong> Povinné předsmluvní informace musí obsahovat všechny 
              náklady a podmínky úvěru.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Registr dlužníků:</strong> Poskytovatelé mohlí kontrolovat bonitu žadatele 
              v registrech SOLUS a CBCB.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Dohled ČNB:</strong> Česká národní banka kontroluje dodržování pravidel a 
              může udělovat sankce.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 mr-3">•</span>
            <p className="text-gray-700">
              <strong>Ochrana osobních údajů:</strong> Zpracování dat podle GDPR a zákona 
              o ochraně osobních údajů.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-600">
            <strong>Regulátor:</strong> <a href="https://www.cnb.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Česká národní banka (ČNB)</a>
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Města v Karlovarském kraji</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.slug} 
              href={`/cz/karlovarsky-kraj/${city.slug}`}
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{city.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Půjčky v {city.name === 'Karlovy Vary' ? 'Karlových Varech' : `obci ${city.name}`}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Lenders */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Doporučení Poskytovatelé</h2>
        <p className="text-gray-700 mb-4">
          V Karlovarském kraji působí řada licencovaných poskytovatelů nebankovních půjček. 
          Doporučujeme vždy porovnat nabídky a pečlivě si přečíst smluvní podmínky.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Důležité upozornění:</strong> Před podpisem smlouvy si ověřte, že poskytovatel 
            je registrován v registru ČNB. Nikdy nepodepisujte smlouvu s prázdnými místy nebo 
            podmínkami, kterým nerozumíte.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="mt-12 bg-gray-100 rounded-lg p-6 text-sm text-gray-700">
        <h3 className="font-semibold mb-2">Zveřejnění partnerství</h3>
        <p className="mb-4">
          Tento web může obsahovat partnerské odkazy na poskytovatele půjček. Pokud si vyberete 
          produkty prostřednictvím těchto odkazů, můžeme získat provizi. To nijak neovlivňuje 
          cenu, kterou zaplatíte, a pomáhá nám udržovat tento web.
        </p>
        <h3 className="font-semibold mb-2">Reprezentativní příklad</h3>
        <p>
          Půjčka 20 000 Kč na 12 měsíců, roční procentní sazba (RPSN) 35,5%, měsíční splátka 
          1 900 Kč, celková splatná částka 22 800 Kč. Uvedený příklad slouží pouze pro 
          ilustraci. Skutečné podmínky se mohou lišit podle poskytovatele a vaší bonity.
        </p>
      </section>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Domů',
                    item: 'https://www.example.com/cz'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Karlovarský kraj',
                    item: 'https://www.example.com/cz/karlovarsky-kraj'
                  }
                ]
              },
              {
                '@type': 'FinancialService',
                name: 'Půjčky v Karlovarském kraji',
                description: 'Porovnání půjček pro všechna města v Karlovarském kraji',
                areaServed: {
                  '@type': 'State',
                  name: 'Karlovarský kraj'
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
