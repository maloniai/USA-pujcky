'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function StickyApplyButtonPH() {
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
      <Link href="/ph/apply">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="font-semibold">Mag-apply Ngayon</span>
          </span>
        </Button>
      </Link>
    </div>
  )
}
