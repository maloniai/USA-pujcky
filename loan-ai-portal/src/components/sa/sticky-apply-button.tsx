'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function SAStickyApplyButton() {
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

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <Link
            href="/za/apply"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="text-xl">💰</span>
            <span>Apply Now</span>
          </Link>
        </div>
      )}
    </>
  )
}
