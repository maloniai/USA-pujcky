import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Kojetín, Olomoucký kraj – Porovnat 2025',
  description: 'Hledáte půjčku v Kojetín? Porovnejte nabídky online půjček, zjistěte místní podmínky a najděte důvěryhodné poskytovatele ve vašem městě.',
}

export default function KojetinPage() {
  const nearbyCities = [
    {
        "name": "Hranice",
        "slug": "hranice"
    },
    {
        "name": "Lipník nad Bečvou",
        "slug": "lipnik-nad-becvou"
    },
    {
        "name": "Přerov",
        "slug": "prerov"
    },
    {
        "name": "Prostějov",
        "slug": "prostejov"
    },
    {
        "name": "Tovačov",
        "slug": "tovacov"
    }
]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/cz" className="hover:text-blue-600">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="hover:text-blue-600">Kraje</Link>
        {' > '}
        <Link href="/cz/olomoucky-kraj" className="hover:text-blue-600">Olomoucký kraj</Link>
        {' > '}
        <span className="text-gray-900">Kojetín</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v Kojetín, Olomoucký kraj
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Kojetín nabízí přístup k širokému spektru finančních služeb včetně spotřebitelských 
            úvěrů, konsolidačních půjček a rychlých online půjček. Místní i online poskytovatelé 
            nabízejí flexibilní řešení pro různé finanční potřeby. Ať už potřebujete financovat 
            renovaci domácnosti, pokrýt neočekávané výdaje nebo konsolidovat stávající dluhy, 
            najdete zde důvěryhodné poskytovatele s transparentními podmínkami. Všichni poskytovatelé 
            jsou povinni dodržovat české předpisy a registraci u České národní banky. Před podpisem 
            smlouvy si vždy důkladně prostudujte všechny podmínky, porovnejte RPSN více nabídek 
            a ujistěte se, že rozumíte všem poplatkům a nákladům souvisejícím s půjčkou.
          </p>
        </div>
      </header>

      {/* Offer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aktuální Nabídky Půjček v Kojetín</h2>
        <div className="bg-white p-6 border rounded-lg">
          <p className="text-gray-700 mb-4">
            Porovnejte nabídky od důvěryhodných poskytovatelů působících v Kojetín. 
            Všichni poskytovatelé jsou registrováni u ČNB a podléhají českým regulacím.
          </p>
          {/* Placeholder for iframe */}
          <div className="bg-gray-100 p-8 rounded border-2 border-dashed border-gray-300 text-center">
            <p className="text-gray-500">
              [Místo pro iframe s nabídkami důvěryhodných poskytovatelů pro Kojetín]
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Zde se zobrazí aktuální nabídky specifické pro Kojetín
            </p>
          </div>
        </div>
      </section>

      {/* Local Regulations */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Místní Regulace a Ochrana Spotřebitele</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          <li>RPSN (roční procentní sazba nákladů) nesmí překročit zákonné limity stanovené ČNB</li>
          <li>Všichni poskytovatelé musí být registrováni u České národní banky</li>
          <li>Právo na odstoupení od smlouvy do 14 dnů bez udání důvodu</li>
          <li>Maximální výše úroků a poplatků stanovena zákonem č. 257/2016 Sb.</li>
          <li>Povinná transparentnost všech nákladů před podpisem smlouvy</li>
          <li>Právo na předčasné splatění s odpovídajícím snížením nákladů</li>
          <li>Ochrana osobních údajů podle GDPR</li>
          <li>Spotřebitelská ochrana proti nekalým praktikám</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Často Kladené Otázky</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jaké typy půjček jsou dostupné v Kojetín?
            </h3>
            <p className="text-gray-700">
              V Kojetín můžete získat spotřebitelské úvěry, konsolidační půjčky, rychlé 
              online půjčky, hypotéky a další finanční produkty. Online poskytovatelé nabízejí 
              flexibilní podmínky a rychlé vyřízení, zatímco tradiční banky mohou nabídnout 
              nižší úrokové sazby pro klienty s dobrou bonitou.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jak rychle mohu získat půjčku v Kojetín?
            </h3>
            <p className="text-gray-700">
              Online poskytovatelé často vyhodnotí žádost během několika minut a peníze mohou 
              být na účtu do 24 hodin. Rychlost závisí na kompletnosti dokumentace, výsledku 
              úvěrového hodnocení a typu půjčky. Tradiční banky obvykle vyžadují 2-5 
              pracovních dnů.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Jaké dokumenty potřebuji pro žádost o půjčku?
            </h3>
            <p className="text-gray-700">
              Základní dokumenty zahrnují občanský průkaz, doklad o příjmu (výplatní pásky, 
              daňové přiznání nebo potvrzení o příjmu) a číslo bankovního účtu. Některé 
              společnosti mohou požadovat dodatečné dokumenty podle výše půjčky a vašeho 
              zaměstnaneckého statusu.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Půjčky ve vašem okolí</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyCities.map((city) => (
            <Link key={city.slug} href={`/cz/olomoucky-kraj/${city.slug}`}>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
                <p className="text-sm text-gray-600">Zobrazit půjčky v městě {city.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclosure Block */}
      <section className="bg-gray-100 p-6 rounded-lg text-sm text-gray-700 mb-8">
        <h3 className="font-semibold mb-2">Důležité Upozornění</h3>
        <p className="mb-2">
          <strong>Affiliate Upozornění:</strong> Tato stránka může obsahovat odkazy na 
          partnery, za které můžeme obdržet provizi. To však neovlivňuje naše doporučení, 
          která jsou vždy nestranná a založená na důkladném výzkumu.
        </p>
        <p>
          <strong>Reprezentativní příklad:</strong> Při půjčce 50 000 Kč na 36 měsíců 
          s RPSN 10 % p.a. bude měsíční splátka přibližně 1 612 Kč a celková částka 
          k zaplacení bude 58 032 Kč. Konkrétní podmínky se liší podle poskytovatele a 
          vaší bonity. Vždy si přečtěte smluvní podmínky před podpisem.
        </p>
      </section>

      {/* Navigation */}
      <div className="pt-6 border-t">
        <Link href="/cz/olomoucky-kraj" className="text-blue-600 hover:underline">
          ← Zpět na Olomoucký kraj
        </Link>
      </div>
    </div>
  )
}
