import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v České Republice - Rychlé a Bezpečné | Loan AI Portal',
  description: 'Získejte okamžité schválení půjčky s naší platformou poháněnou AI. Rychlé, bezpečné a informace specifické pro Českou republiku.',
}

export default function CzechPage() {
  const regions = [
    'Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 
    'Karlovarský', 'Ústecký', 'Liberecký', 'Královéhradecký',
    'Pardubický', 'Vysočina', 'Jihomoravský', 'Olomoucký',
    'Zlínský', 'Moravskoslezský'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/global" className="text-blue-600 hover:underline text-sm">
          ← Zpět na všechny země
        </Link>
      </div>
      
      <header className="text-center mb-12">
        <div className="text-6xl mb-4">🇨🇿</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vítejte na portálu půjček AI pro Českou republiku
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Rychlé, bezpečné a inteligentní služby půjček poháněné AI. 
          Získejte okamžité předschválení a najděte nejlepší možnosti půjček pro vaše potřeby.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rychlá žádost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Požádejte o půjčku během několika minut s naším zjednodušeným procesem.
            </p>
            <Button className="w-full">Požádat nyní</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vyhledávání pomocí AI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Naše AI najde nejlepší možnosti půjček přizpůsobené vašemu profilu.
            </p>
            <Button variant="outline" className="w-full">Zjistit více</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informace podle kraje</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Získejte informace o půjčkách specifické pro váš kraj a město.
            </p>
            <Button variant="outline" className="w-full">Procházet kraje</Button>
          </CardContent>
        </Card>
      </div>

      {/* Regions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Působíme ve všech krajích České republiky
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {regions.map((region) => (
            <div 
              key={region}
              className="p-3 bg-white border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-gray-700">{region}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Informace o půjčkách v České republice</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Naše služby jsou plně v souladu s českými finančními předpisy a zákony. 
          Nabízíme půjčky v Kč s místními platebními možnostmi a zákaznickou podporou v češtině.
        </p>
      </div>
    </div>
  )
}
