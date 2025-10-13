'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyApplyButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
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
            href="/mx/solicitar"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg">💰 Solicitar Préstamo</span>
          </Link>
        </div>
      )}
    </>
  )
}
