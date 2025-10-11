import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MexicoNavigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/mx" className="text-xl font-bold text-blue-600 hover:text-blue-800">
              LoansAI México
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/mx/estados" className="text-gray-700 hover:text-blue-600 font-medium">
                Estados
              </Link>
              <Link href="/mx/ciudades" className="text-gray-700 hover:text-blue-600 font-medium">
                Ciudades
              </Link>
              <Link href="/mx/preguntas-frecuentes" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/mx/solicitar">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                Solicitar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
