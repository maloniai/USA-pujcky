import Link from 'next/link'

export const metadata = {
  title: 'Půjčky v Kraji Vysočina - Srovnání 2025',
  description: 'Kompletní přehled půjček v Kraji Vysočina. Porovnejte nabídky ve všech městech regionu, včetně Jihlavy, Třebíče, Havlíčkova Brodu a dalších.',
}

export default function KrajVysocinPage() {
  const cities = [
    { name: 'Bystřice nad Pernštejnem', slug: 'bystrice-nad-pernstejnem' },
    { name: 'Chotěboř', slug: 'chotebor' },
    { name: 'Golčův Jeníkov', slug: 'golcuv-jenikov' },
    { name: 'Havlíčkův Brod', slug: 'havlickuv-brod' },
    { name: 'Humpolec', slug: 'humpolec' },
    { name: 'Jihlava', slug: 'jihlava' },
    { name: 'Jemnice', slug: 'jemnice' },
    { name: 'Jaroměřice nad Rokytnou', slug: 'jaromerice-nad-rokytnou' },
    { name: 'Kamenice nad Lipou', slug: 'kamenice-nad-lipou' },
    { name: 'Ledeč nad Sázavou', slug: 'ledec-nad-sazavou' },
    { name: 'Moravské Budějovice', slug: 'moravske-budejovice' },
    { name: 'Náměšť nad Oslavou', slug: 'namest-nad-oslavou' },
    { name: 'Nové Město na Moravě', slug: 'nove-mesto-na-morave' },
    { name: 'Pacov', slug: 'pacov' },
    { name: 'Pelhřimov', slug: 'pelhrimov' },
    { name: 'Polná', slug: 'polna' },
    { name: 'Počátky', slug: 'pocatky' },
    { name: 'Přibyslav', slug: 'pribyslav' },
    { name: 'Světlá nad Sázavou', slug: 'svetla-nad-sazavou' },
    { name: 'Svratka', slug: 'svratka' },
    { name: 'Telč', slug: 'telc' },
    { name: 'Třebíč', slug: 'trebic' },
    { name: 'Velká Bíteš', slug: 'velka-bites' },
    { name: 'Velké Meziříčí', slug: 'velke-mezirici' },
    { name: 'Žďár nad Sázavou', slug: 'zdar-nad-sazavou' },
    { name: 'Žirovnice', slug: 'zirovnice' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">
          ← Zpět na přehled krajů
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Půjčky v Kraji Vysočina</h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          Kraj Vysočina nabízí širokou škálu možností pro získání půjčky. Ať už hledáte spotřebitelský úvěr, 
          konsolidaci půjček nebo rychlou půjčku online, v regionu působí řada licencovaných poskytovatelů.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Všechny nabídky půjček v Kraji Vysočina musí dodržovat regulace České národní banky. 
          Poskytovatelé jsou povinni transparentně informovat o úrokových sazbách, poplatcích a celkových 
          nákladech na úvěr.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">Klíčové regulace v ČR</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální RPSN (roční procentní sazba nákladů) pro spotřebitelské úvěry</li>
          <li>Povinná registrace poskytovatelů u České národní banky</li>
          <li>Právo spotřebitele na odstoupení od smlouvy do 14 dnů</li>
          <li>Transparentní informování o celkových nákladech úvěru</li>
          <li>Ochrana osobních údajů podle GDPR</li>
          <li>Zákaz nekalých obchodních praktik</li>
          <li>Povinnost posoudit úvěruschopnost klienta</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Města v Kraji Vysočina</h2>
        <p className="text-gray-600 mb-4">
          Vyberte své město pro zobrazení lokálních nabídek půjček:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city) => (
          <Link 
            key={city.slug} 
            href={`/cz/kraje/kraj-vysocina/${city.slug}`}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-900">{city.name}</h3>
            <p className="text-sm text-gray-600">Půjčky v {city.name}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Užitečné odkazy</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://www.cnb.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Česká národní banka - Dohled nad finančním trhem
            </a>
          </li>
          <li>
            <Link href="/cz/blog" className="text-blue-600 hover:underline">
              Blog: Tipy pro výběr půjčky
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
