import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SpanishHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido al Portal de Préstamos AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Servicios de préstamos rápidos, seguros e inteligentes impulsados por IA.
          Obtenga pre-aprobaciones instantáneas y encuentre las mejores opciones de préstamos.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Aplicación Rápida</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Solicite un préstamo en minutos con nuestro proceso simplificado.
            </p>
            <Button className="w-full">Aplicar Ahora</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Búsqueda con IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Nuestra IA encuentra las mejores opciones de préstamos adaptadas a su perfil.
            </p>
            <Button variant="outline" className="w-full">Más Información</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información por Estado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Obtenga información de préstamos específica para su estado y ciudad.
            </p>
            <Link href="/es/states">
              <Button variant="outline" className="w-full">Ver Estados</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Disponible en Múltiples Idiomas</h2>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">English</Link>
          <Link href="/es" className="text-blue-600 hover:underline">Español</Link>
        </div>
      </div>
    </div>
  )
}