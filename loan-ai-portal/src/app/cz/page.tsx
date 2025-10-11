import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky AI Portal - Rychlé a Bezpečné Půjčky',
  description: 'Získejte okamžité schválení půjčky s naší platformou podporovanou AI. Podpora více jazyků, informace specifické pro kraj a bezpečné zpracování.',
}

export default function CzechHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vítejte na Portálu Půjček AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Rychlé, bezpečné a inteligentní půjčky podporované AI.
          Získejte okamžité předběžné schválení a najděte nejlepší možnosti půjček pro vaše potřeby.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rychlá Žádost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Zažádejte o půjčku během několika minut s naším zjednodušeným procesem.
            </p>
            <Button className="w-full">Zažádat Nyní</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Vyhledávání</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Naše AI najde nejlepší možnosti půjček přizpůsobené vašemu profilu.
            </p>
            <Button variant="outline" className="w-full">Více Informací</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informace Podle Krajů</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Získejte informace o půjčkách specifické pro váš kraj a město.
            </p>
            <Link href="/cz/kraje">
              <Button variant="outline" className="w-full">Procházet Kraje</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Dostupné ve Více Jazycích</h2>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
          <Link href="/cz" className="text-blue-600 hover:underline">Čeština</Link>
        </div>
      </div>
    </div>
  )
}
