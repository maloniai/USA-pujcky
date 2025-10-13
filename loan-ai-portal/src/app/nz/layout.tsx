import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { nzHubSEO, generatePageMetadata } from '@/lib/seo'
import { StickyApplyButton } from '@/components/nz/sticky-apply-button'
import { NZFooter } from '@/components/nz/footer'
import Link from 'next/link'

interface NZLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = generatePageMetadata(nzHubSEO)

export default function NZLayout({ children }: NZLayoutProps) {
  return (
    <>
      {/* NZ-specific Navigation Bar */}
      <nav className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Info Bar */}
          <div className="border-b bg-blue-50 -mx-4 px-4">
            <div className="flex flex-wrap items-center justify-between py-2 text-xs sm:text-sm gap-2">
              <div className="flex items-center gap-1 text-blue-900">
                <span>🇳🇿</span>
                <span className="font-semibold">New Zealand Personal Loans</span>
                <span className="hidden sm:inline text-blue-700">• CCCFA 2003 Compliant</span>
              </div>
              <div className="flex items-center gap-3 text-blue-700">
                <Link href="/nz/responsible-lending" className="hover:text-blue-900 transition-colors">
                  Responsible Lending
                </Link>
                <a 
                  href="https://www.comcom.govt.nz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 transition-colors"
                >
                  Commerce Commission
                </a>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Loan AI Portal
              </Link>
              
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <Link
                  href="/nz"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  NZ Home
                </Link>
                <Link
                  href="/nz/regions"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Regions
                </Link>
                <Link
                  href="/nz/cities"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cities
                </Link>
                <Link
                  href="/nz/responsible-lending"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  CCCFA Guide
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors hidden sm:block"
              >
                ← Back to Global
              </Link>
              <Link
                href="/nz/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden pb-3 space-y-2">
            <div className="flex gap-2 text-sm">
              <Link
                href="/nz"
                className="flex-1 text-center py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/nz/regions"
                className="flex-1 text-center py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Regions
              </Link>
              <Link
                href="/nz/cities"
                className="flex-1 text-center py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                Cities
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Sticky Apply Button */}
      <StickyApplyButton />

      {/* NZ-specific Footer */}
      <NZFooter />
    </>
  )
}
