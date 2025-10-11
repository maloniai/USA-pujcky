import Link from 'next/link'

export const metadata = {
  title: 'Regiony České Republiky - Půjčky podle Regionu',
  description: 'Procházejte informace o půjčkách podle regionů České republiky. Najděte místní poskytovatele a specifické regulace.',
}

export default function RegionsPage() {
  const regions = [
    { name: 'Zlínský kraj', slug: 'zlinsky-kraj' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Informace o Půjčkách podle Regionu</h1>
      
      <p className="text-gray-600 mb-8 max-w-2xl">
        Vyberte svůj region pro přístup k místním informacím o půjčkách, 
        regulacích a doporučených poskytovatelích ve vaší oblasti.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Link key={region.slug} href={`/cz/regiony/${region.slug}`}>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold">{region.name}</h2>
              <p className="text-gray-600">Zobrazit možnosti půjček v regionu {region.name}</p>
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
