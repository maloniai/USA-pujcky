'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NZStickyApplyButton() {
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
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Link
        href="/nz/apply"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold text-lg"
      >
        <span className="text-xl" aria-hidden>💰</span>
        <span>Apply Now</span>
      </Link>
    </div>
  )
}
