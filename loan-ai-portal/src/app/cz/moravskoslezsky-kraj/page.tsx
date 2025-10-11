import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Moravskoslezském kraji - Porovnejte 2025',
  description: 'Kompletní přehled možností půjček v Moravskoslezském kraji. Najděte nejlepší nabídky půjček ve svém městě s naší AI platformou.',
}

const cities = [
  'Bílovec', 'Bohumín', 'Bruntál', 'Brušperk', 'Český Těšín', 'Dolní Benešov', 
  'Frýdek-Místek', 'Frýdlant nad Ostravicí', 'Fulnek', 'Havířov', 'Hlučín', 
  'Hradec nad Moravicí', 'Jablunkov', 'Karviná', 'Klimkovice', 'Kopřivnice', 
  'Kravaře', 'Krnov', 'Nový Jičín', 'Odry', 'Opava', 'Orlová', 'Ostrava', 
  'Petřvald', 'Příbor', 'Rýmařov', 'Rychvald', 'Studénka', 'Šenov', 'Třinec', 
  'Vítkov', 'Vratimov'
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ý/g, 'y')
    .replace(/á/g, 'a')
    .replace(/č/g, 'c')
    .replace(/ď/g, 'd')
    .replace(/é/g, 'e')
    .replace(/ě/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ň/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ř/g, 'r')
    .replace(/š/g, 's')
    .replace(/ť/g, 't')
    .replace(/ú/g, 'u')
    .replace(/ů/g, 'u')
    .replace(/ý/g, 'y')
    .replace(/ž/g, 'z')
}

export default function MoravskoslezskyKrajPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">
          ← Zpět na Přehled Krajů
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Půjčky v Moravskoslezském kraji</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">O Půjčkách v Moravskoslezském kraji</h2>
        <p className="text-gray-700 mb-4">
          Moravskoslezský kraj nabízí širokou škálu možností půjček pro občany a podniky. 
          Náš AI systém vám pomůže najít nejlepší nabídky půjček přizpůsobené vašim potřebám 
          a finanční situaci. Všichni poskytovatelé půjček jsou licencováni a regulováni 
          Českou národní bankou.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Regulace Půjček v České Republice</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální RPSN (Roční Procentní Sazba Nákladů) je regulována ČNB</li>
          <li>Všichni poskytovatelé musí mít licenci od České národní banky</li>
          <li>Povinné poskytnutí předsmluvních informací spotřebiteli</li>
          <li>14denní lhůta pro odstoupení od smlouvy bez udání důvodu</li>
          <li>Maximální výše poplatků za vedení úvěru je regulována zákonem</li>
          <li>Ochrana osobních údajů podle GDPR</li>
          <li>Transparentní smluvní podmínky v českém jazyce</li>
          <li>Právo na předčasné splacení bez sankčních poplatků</li>
        </ul>
        <div className="mt-4">
          <a 
            href="https://www.cnb.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Česká národní banka - oficiální regulátor →
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Města v Moravskoslezském kraji</h2>
        <p className="text-gray-600 mb-4">
          Vyberte své město pro informace o půjčkách specifické pro vaši lokalitu:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/cz/moravskoslezsky-kraj/${slugify(city)}`}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-semibold text-blue-600">{city}</h3>
              <p className="text-sm text-gray-600">Půjčky v {city}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold mb-2">Důležité Upozornění</h3>
        <p className="text-sm text-gray-700 mb-3">
          <strong>Affiliate Prohlášení:</strong> Tento portál může obsahovat odkazy na partnery, 
          za které můžeme obdržet provizi. To nijak neovlivňuje naše doporučení ani ceny, 
          které platíte. Všechny nabídky jsou nezávislé a transparentní.
        </p>
        <p className="text-sm text-gray-700">
          <strong>Reprezentativní příklad:</strong> Při půjčce 20 000 Kč na 12 měsíců s úrokovou 
          sazbou 15% p.a. zaplatíte celkem 21 658 Kč, což znamená měsíční splátku 1 805 Kč. 
          RPSN 16,08%. Skutečné podmínky se mohou lišit podle poskytovatele a vaší bonity.
        </p>
      </div>
    </div>
  )
}
