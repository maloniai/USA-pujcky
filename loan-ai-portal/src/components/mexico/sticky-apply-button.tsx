'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyApplyButton() {
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
    <div className="fixed bottom-4 right-4 z-40 animate-in slide-in-from-bottom duration-300">
      <Link
        href="/mx/apply"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105 font-semibold"
      >
        <span className="text-xl" aria-hidden="true">💰</span>
        <span>Solicitar Ahora</span>
      </Link>
    </div>
  )
}
