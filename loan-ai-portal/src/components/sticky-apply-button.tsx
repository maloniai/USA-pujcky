"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { getCommonLabels } from '@/data/translations'

interface StickyApplyButtonProps {
  locale?: Locale
  href?: string
}

export default function StickyApplyButton({ locale = 'en', href }: StickyApplyButtonProps) {
  const pathname = usePathname()
  const { applyCta } = getCommonLabels(locale)
  
  // Don't show on apply page itself
  if (pathname?.includes('/apply')) {
    return null
  }

  // Determine the apply URL based on locale
  const applyUrl = href || (() => {
    if (locale === 'pl') return '/pl/apply'
    if (locale === 'cs') return '/cz/apply'
    if (locale === 'es') return '/es/apply'
    return '/apply'
  })()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-blue-200 bg-white/95 shadow-lg backdrop-blur-sm md:hidden">
      <div className="container mx-auto px-4 py-3">
        <Link
          href={applyUrl}
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {applyCta}
        </Link>
      </div>
    </div>
  )
}
