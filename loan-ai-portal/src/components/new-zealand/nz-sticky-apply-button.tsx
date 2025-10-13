'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NZStickyApplyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-5">
          <Link
            href="/nz/apply"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold"
          >
            <span>💰</span>
            <span>Apply Now</span>
          </Link>
        </div>
      )}
    </>
  )
}
