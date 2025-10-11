import Link from 'next/link'

export default function RegionsPage() {
  const regions = [
    { name: 'Jihomoravský kraj', slug: 'jihomoravsky-kraj', cities: 38 }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/cz" className="text-blue-600 hover:underline">
          ← Zpět na hlavní stránku
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Půjčky podle Regionů v České Republice</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Link key={region.slug} href={`/cz/regions/${region.slug}`}>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white">
              <h2 className="text-xl font-semibold mb-2">{region.name}</h2>
              <p className="text-gray-600">{region.cities} měst</p>
              <p className="text-blue-600 mt-2 text-sm">Zobrazit města a informace o půjčkách →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
