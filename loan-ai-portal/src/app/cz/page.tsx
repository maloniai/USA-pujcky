import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Půjčky Online - Rychlé a Bezpečné Úvěrové Služby',
  description: 'Získejte okamžité schválení půjčky s naší platformou poháněnou AI. Informace specifické pro region, bezpečné zpracování.',
}

export default function CzechHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vítejte na Portálu Půjček AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Rychlé, bezpečné a inteligentní úvěrové služby poháněné AI.
          Získejte okamžité předschválení a najděte nejlepší možnosti půjček.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rychlá Žádost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Požádejte o půjčku během několika minut s naším zjednodušeným procesem.
            </p>
            <Button className="w-full">Požádat Nyní</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vyhledávání s AI</CardTitle>
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
            <CardTitle>Informace podle Regionu</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Získejte informace o půjčkách specifické pro váš region a město.
            </p>
            <Link href="/cz/regiony">
              <Button variant="outline" className="w-full">Procházet Regiony</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Dostupné v Několika Jazycích</h2>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
          <Link href="/cz" className="text-blue-600 hover:underline">Čeština</Link>
        </div>
      </div>
    </div>
  )
}
