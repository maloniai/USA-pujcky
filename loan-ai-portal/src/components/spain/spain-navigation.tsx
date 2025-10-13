'use client'

import Link from 'next/link'

export default function SpainNavigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/sp" className="flex items-center space-x-2">
            <span className="text-2xl">🇪🇸</span>
            <span className="text-xl font-bold text-gray-900">LoansAI España</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/sp" 
              className="text-gray-600 hover:text-red-600 transition font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/sp#regiones" 
              className="text-gray-600 hover:text-red-600 transition font-medium"
            >
              Comunidades
            </Link>
            <Link 
              href="/sp#ciudades" 
              className="text-gray-600 hover:text-red-600 transition font-medium"
            >
              Ciudades
            </Link>
            <Link 
              href="/sp/apply" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Solicitar Préstamo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link 
              href="/sp/apply" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Solicitar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
