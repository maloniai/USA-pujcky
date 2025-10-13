'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function MexicoNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [regionsOpen, setRegionsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/mx" className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">🇲🇽</span>
            <span className="text-xl font-bold text-blue-900">
              LoansAI México
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 py-2 transition"
                onMouseEnter={() => setRegionsOpen(true)}
                onMouseLeave={() => setRegionsOpen(false)}
              >
                <span>Regiones</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {regionsOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]"
                  onMouseEnter={() => setRegionsOpen(true)}
                  onMouseLeave={() => setRegionsOpen(false)}
                >
                  <Link
                    href="/mx/regions"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Todas las Regiones
                  </Link>
                  <Link
                    href="/mx/regions/valle-de-mexico"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Valle de México
                  </Link>
                  <Link
                    href="/mx/regions/frontera-norte"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Frontera Norte
                  </Link>
                  <Link
                    href="/mx/regions/costa-pacifico"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Costa del Pacífico
                  </Link>
                  <Link
                    href="/mx/regions/bajio"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Bajío
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/mx/cities"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Ciudades
            </Link>

            <Link
              href="/mx/disclosures"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Información Legal
            </Link>

            <Link
              href="/mx/apply"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Solicitar Préstamo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <Link
                href="/mx/regions"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Regiones
              </Link>
              <Link
                href="/mx/cities"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Ciudades
              </Link>
              <Link
                href="/mx/disclosures"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Información Legal
              </Link>
              <Link
                href="/mx/apply"
                className="mx-4 mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Préstamo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
