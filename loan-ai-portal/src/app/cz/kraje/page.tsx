import Link from 'next/link'

export const metadata = {
  title: 'Půjčky podle krajů - Srovnání nabídek 2025',
  description: 'Přehled nabídek půjček podle krajů České republiky. Najděte nejlepší půjčku ve vašem regionu.',
}

export default function KrajePage() {
  const kraje = [
    { name: 'Kraj Vysočina', slug: 'kraj-vysocina' },
    // More regions can be added here
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/cz" className="text-blue-600 hover:underline">
          ← Zpět na úvodní stránku
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Půjčky podle krajů</h1>
      
      <div className="mb-8">
        <p className="text-gray-600 leading-relaxed">
          Nabídky půjček se mohou lišit podle kraje a města. Níže najdete přehled krajů České republiky 
          s informacemi o možnostech půjček, regulacích a dostupných poskytovatelích v jednotlivých regionech.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kraje.map((kraj) => (
          <Link 
            key={kraj.slug} 
            href={`/cz/kraje/${kraj.slug}`}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{kraj.name}</h2>
            <p className="text-gray-600">Zobrazit nabídky půjček pro {kraj.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
