import Link from 'next/link'

export default function RegionsPage() {
  const regions = [
    { name: 'Olomoucký kraj', slug: 'olomoucky-kraj' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Půjčky podle Krajů</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Link key={region.slug} href={`/cz/olomoucky-kraj`}>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{region.name}</h2>
              <p className="text-gray-600">Zobrazit možnosti půjček v kraji {region.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/cz" className="text-blue-600 hover:underline">
          ← Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  )
}
