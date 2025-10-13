'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function KazakhstanNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/kk" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Loans</span>
            <span className="text-2xl font-bold text-gray-900">AI</span>
            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">🇰🇿 Қазақстан</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/kk" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Басты бет
            </Link>
            <Link href="/kk/regions" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Аймақтар
            </Link>
            <Link href="/kk/cities" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Қалалар
            </Link>
            <Link href="/kk/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Сұрақтар
            </Link>
            <Link href="/kk/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Біз туралы
            </Link>
            <Link href="/kk/apply">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Өтініш беру
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/kk" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Басты бет
            </Link>
            <Link 
              href="/kk/regions" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Аймақтар
            </Link>
            <Link 
              href="/kk/cities" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Қалалар
            </Link>
            <Link 
              href="/kk/faq" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Сұрақтар
            </Link>
            <Link 
              href="/kk/about" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Біз туралы
            </Link>
            <Link 
              href="/kk/apply"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Өтініш беру
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
