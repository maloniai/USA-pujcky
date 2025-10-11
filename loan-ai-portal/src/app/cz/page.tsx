import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function CzechHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Půjčky v České republice
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Rychlé, bezpečné a inteligentní půjčky online. AI platforma pro srovnání 
          půjček s okamžitým schválením a nejlepšími podmínkami.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Rychlá Žádost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Zažádejte o půjčku během několika minut s naším jednoduchým procesem.
            </p>
            <Button className="w-full">Žádat Nyní</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Vyhledávání</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Naše AI najde nejlepší nabídky půjček přizpůsobené vašemu profilu.
            </p>
            <Button variant="outline" className="w-full">Více Informací</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regionální Informace</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Získejte informace o půjčkách specifické pro váš region a město.
            </p>
            <Link href="/cz/ustecky-kraj">
              <Button variant="outline" className="w-full">Ústecký Kraj</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Dostupné v Několika Jazycích</h2>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
          <Link href="/cz" className="text-blue-600 hover:underline font-semibold">Čeština</Link>
        </div>
      </div>
    </div>
  )
}
