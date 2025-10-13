'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function SpainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/es/spain" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Loans</span>
            <span className="text-2xl font-bold text-gray-900">AI</span>
            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">🇪🇸 España</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/es/spain" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Inicio
            </Link>
            <Link href="/es/spain/regions" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Regiones
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Preguntas
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Acerca de
            </Link>
            <Link href="/apply">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Solicitar Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/es/spain" className="block py-2 text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="/es/spain/regions" className="block py-2 text-gray-700 hover:text-blue-600 transition">
              Regiones
            </Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-blue-600 transition">
              Preguntas
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition">
              Acerca de
            </Link>
            <Link href="/apply" className="block pt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Solicitar Ahora
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
