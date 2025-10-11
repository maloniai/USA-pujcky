import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky Liberecký kraj - Srovnání 2025',
  description: 'Kompletní průvodce půjčkami v Liberecký kraj. Informace o regulacích, městech a možnostech financování.',
}

export default function LibereckyKrajPage() {
  const cities = [
    { name: 'Cvikov', slug: 'cvikov' },
    { name: 'Česká Lípa', slug: 'ceska-lipa' },
    { name: 'Desná', slug: 'desna' },
    { name: 'Doksy', slug: 'doksy' },
    { name: 'Frýdlant', slug: 'frydlant' },
    { name: 'Harrachov', slug: 'harrachov' },
    { name: 'Hejnice', slug: 'hejnice' },
    { name: 'Hrádek nad Nisou', slug: 'hradek-nad-nisou' },
    { name: 'Chrastava', slug: 'chrastava' },
    { name: 'Jablonec nad Nisou', slug: 'jablonec-nad-nisou' },
    { name: 'Jablonné v Podještědí', slug: 'jablonne-v-podjestedi' },
    { name: 'Jilemnice', slug: 'jilemnice' },
    { name: 'Kamenický Šenov', slug: 'kamenicky-senov' },
    { name: 'Lomnice nad Popelkou', slug: 'lomnice-nad-popelkou' },
    { name: 'Mimoň', slug: 'mimon' },
    { name: 'Nový Bor', slug: 'novy-bor' },
    { name: 'Rokytnice nad Jizerou', slug: 'rokytnice-nad-jizerou' },
    { name: 'Ralsko', slug: 'ralsko' },
    { name: 'Semily', slug: 'semily' },
    { name: 'Smržovka', slug: 'smrzovka' },
    { name: 'Stráž pod Ralskem', slug: 'straz-pod-ralskem' },
    { name: 'Tanvald', slug: 'tanvald' },
    { name: 'Turnov', slug: 'turnov' },
    { name: 'Vysoké nad Jizerou', slug: 'vysoke-nad-jizerou' },
    { name: 'Zákupy', slug: 'zakupy' },
    { name: 'Železný Brod', slug: 'zelezny-brod' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <nav className="mb-6 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">Kraje</Link>
        {' > '}
        <span className="text-gray-600">Liberecký kraj</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Půjčky v Libereckém kraji</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Liberecký kraj nabízí širokou škálu možností financování pro jednotlivce i rodiny. 
          Ať už hledáte spotřebitelský úvěr, refinancování nebo rychlou půjčku, najdete zde 
          informace o regulacích, licencovaných poskytovatelích a podmínkách půjček specifických 
          pro váš region.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Regulace a Ochrana Spotřebitele</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Maximální RPSN:</strong> V souladu se zákonem o spotřebitelském úvěru, maximální RPSN je zákonně omezena</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Licencování:</strong> Všichni poskytovatelé půjček musí být registrováni u České národní banky (ČNB)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Právo na odstoupení:</strong> Spotřebitelé mají 14denní lhůtu na odstoupení od smlouvy bez udání důvodu</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Transparentnost:</strong> Poskytovatelé musí jasně uvést všechny náklady, poplatky a podmínky</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Předčasné splacení:</strong> Právo na předčasné splacení úvěru bez sankcí</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Ochrana osobních údajů:</strong> V souladu s GDPR a českým zákonem o ochraně osobních údajů</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Regulátor:</strong> <a href="https://www.cnb.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Česká národní banka (ČNB)</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Města v Libereckém kraji</h2>
        <p className="text-gray-700 mb-6">
          Vyberte své město pro podrobné informace o místních možnostech půjček:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cz/kraje/liberecky-kraj/${city.slug}`}>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Zobrazit půjčky →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Typické Rozsahy Půjček</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Malé Půjčky</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">5 000 - 50 000 Kč</p>
              <p className="text-sm text-gray-600">Rychlé půjčky na krátkodobé potřeby, splatnost 1-12 měsíců</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Středně Velké Půjčky</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">50 000 - 300 000 Kč</p>
              <p className="text-sm text-gray-600">Spotřebitelské úvěry, splatnost 12-60 měsíců</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Velké Půjčky</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">300 000 - 1 000 000+ Kč</p>
              <p className="text-sm text-gray-600">Účelové úvěry, refinancování, splatnost až 84 měsíců</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle>Důležité Upozornění</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Partnerská spolupráce:</strong> Tato stránka obsahuje odkazy na produkty našich partnerů. 
              Pokud si vyberete produkt prostřednictvím těchto odkazů, můžeme obdržet provizi. To však neovlivňuje 
              naše hodnocení ani ceny, které platíte.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Reprezentativní příklad:</strong> Půjčka 100 000 Kč na 24 měsíců. RPSN 19,9 %, úroková sazba 
              18,5 % p.a., měsíční splátka 5 089 Kč, celková částka k zaplacení 122 136 Kč. Uvedené podmínky jsou 
              pouze ilustrativní a skutečné podmínky se mohou lišit v závislosti na individuálním posouzení.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
