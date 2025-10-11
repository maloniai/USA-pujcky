import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky v České republice - Rychlé online půjčky 2025',
  description: 'Najděte nejlepší půjčky v ČR s AI pomocí. Rychlá půjčka online, porovnání nabídek, informace pro každé město a kraj.',
}

export default function CzechHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vítejte na portálu půjček
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Rychlé, bezpečné a inteligentní půjčky díky AI. 
          Získejte okamžité předběžné schválení a najděte nejlepší nabídky půjček pro své potřeby.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rychlá žádost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Zažádejte o půjčku během několika minut s naším zjednodušeným procesem.
            </p>
            <Button className="w-full">Zažádat nyní</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI porovnání nabídek</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Naše AI najde nejlepší nabídky půjček přizpůsobené vašemu profilu.
            </p>
            <Button variant="outline" className="w-full">Více informací</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informace podle krajů</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Získejte informace o půjčkách specifické pro váš kraj a město.
            </p>
            <Link href="/cz/kraje">
              <Button variant="outline" className="w-full">Procházet kraje</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Dostupné v několika jazycích</h2>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
          <Link href="/cz" className="text-blue-600 hover:underline">Čeština</Link>
        </div>
      </div>
    </div>
  )
}
