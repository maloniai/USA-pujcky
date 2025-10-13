'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function PhilippinesNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/ph" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Loans</span>
            <span className="text-2xl font-bold text-gray-900">AI</span>
            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">🇵🇭 Philippines</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/ph" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/ph/regions" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Regions
            </Link>
            <Link href="/ph/cities" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Cities
            </Link>
            <Link href="/ph/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
              FAQ
            </Link>
            <Link href="/ph/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/ph/apply">
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
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              href="/ph" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/ph/regions" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Regions
            </Link>
            <Link 
              href="/ph/cities" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link 
              href="/ph/faq" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/ph/about" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/ph/apply"
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
