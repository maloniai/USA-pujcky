'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AustraliaNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/au" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Loans</span>
            <span className="text-2xl font-bold text-gray-900">AI</span>
            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">🇦🇺 Australia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/au" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/au/regions" className="text-gray-700 hover:text-blue-600 transition font-medium">
              States
            </Link>
            <Link href="/au/cities" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Cities
            </Link>
            <Link href="/au/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
              FAQ
            </Link>
            <Link href="/au/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/au/apply">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Apply Now
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
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <Link
              href="/au"
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/au/regions"
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              States
            </Link>
            <Link
              href="/au/cities"
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link
              href="/au/faq"
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/au/about"
              className="block text-gray-700 hover:text-blue-600 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/au/apply" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Apply Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
