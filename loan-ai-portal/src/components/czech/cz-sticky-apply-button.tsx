'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CZStickyApplyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Link
      href="/cz/apply"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold text-sm group animate-slide-up"
      aria-label="Požádat o půjčku"
    >
      <span>🇨🇿 Požádat o půjčku</span>
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  )
}
