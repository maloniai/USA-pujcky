import Link from 'next/link'

export const metadata = {
  title: 'Půjčky Podle Krajů - Česká Republika',
  description: 'Najděte informace o půjčkách specifické pro váš kraj v České republice.',
}

export default function KrajePage() {
  const kraje = [
    { name: 'Moravskoslezský kraj', slug: 'moravskoslezsky-kraj' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/cz" className="text-blue-600 hover:underline">
          ← Zpět na Hlavní Stránku
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Informace o Půjčkách Podle Krajů</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kraje.map((kraj) => (
          <Link 
            key={kraj.slug} 
            href={`/cz/${kraj.slug}`}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{kraj.name}</h2>
            <p className="text-gray-600">Zobrazit možnosti půjček v kraji {kraj.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
