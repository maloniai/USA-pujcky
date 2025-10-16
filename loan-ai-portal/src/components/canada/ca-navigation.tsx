'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

export default function CANavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mainLinks = [
    { href: '/ca', label: 'Home' },
    { href: '/ca/regions', label: 'Provinces' },
    { href: '/ca/cities', label: 'Cities' },
    { href: '/ca/compare', label: 'Compare Lenders' },
    { href: '/ca/responsible-lending', label: 'Responsible Lending' },
  ]

  return (
    <>
      {/* Top info bar - FCAC compliance notice */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <ShieldCheck className="h-4 w-4" />
          <span>All lenders FCAC regulated • 60% annual interest cap • Criminal Code Section 347 protected</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/ca" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg">
                LoansAI
              </div>
              <span className="hidden sm:inline text-sm text-gray-600">Canada</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/ca/apply"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium text-sm transition-colors rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/ca/apply"
                className="block mx-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm text-center hover:from-red-700 hover:to-red-800 transition-all shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
