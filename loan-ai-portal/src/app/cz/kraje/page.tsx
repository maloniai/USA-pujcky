import Link from 'next/link'

export const metadata = {
  title: 'Půjčky podle krajů České republiky – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky v českých krajích. Místní informace, srovnání nabídek a aktuální podmínky pro váš kraj.',
}

export default function KrajePage() {
  const regions = [
    { name: 'Pardubický kraj', slug: 'pardubicky-kraj', cities: 22 },
    // Additional regions can be added here
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/cz" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        <h1 className="text-3xl font-bold mb-4">Půjčky podle Krajů</h1>
        <p className="text-gray-600 max-w-3xl">
          Vyberte svůj kraj pro přizpůsobené informace o půjčkách, včetně místních regulací, 
          licencovaných poskytovatelů a možností dostupných ve vašem regionu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <Link 
            key={region.slug} 
            href={`/cz/kraje/${region.slug}`}
            className="block"
          >
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
              <h2 className="text-xl font-semibold mb-2">{region.name}</h2>
              <p className="text-gray-600">
                {region.cities} měst s informacemi o půjčkách
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                Zobrazit města →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">O Půjčkách v České Republice</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Trh půjček v České republice je regulován Českou národní bankou (ČNB), 
            která zajišťuje ochranu spotřebitelů a transparentnost úvěrových produktů.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>RPSN (roční procentní sazba nákladů) musí být jasně uvedena</li>
            <li>Všichni poskytovatelé půjček musí být licencováni ČNB</li>
            <li>Právo na odstoupení od smlouvy do 14 dnů</li>
            <li>Ochrana osobních údajů podle GDPR</li>
            <li>Maximální úroky a poplatky jsou regulovány zákonem</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
