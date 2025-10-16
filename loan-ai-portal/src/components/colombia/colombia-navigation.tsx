'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function ColombiaNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [regionsOpen, setRegionsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/co" className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">🇨🇴</span>
            <span className="text-xl font-bold text-blue-900">
              LoansAI Colombia
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
                    href="/co/regions"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Todas las Regiones
                  </Link>
                  <Link
                    href="/co/regions/andina"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Región Andina
                  </Link>
                  <Link
                    href="/co/regions/caribe"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Región Caribe
                  </Link>
                  <Link
                    href="/co/regions/pacifico"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Región Pacífico
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/co/cities"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Ciudades
            </Link>

            <Link
              href="/co/disclosures"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Información Legal
            </Link>

            <Link
              href="/co/apply"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Solicitar Crédito
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
                href="/co/regions"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Regiones
              </Link>
              <Link
                href="/co/cities"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Ciudades
              </Link>
              <Link
                href="/co/disclosures"
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Información Legal
              </Link>
              <Link
                href="/co/apply"
                className="mx-4 mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Crédito
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
