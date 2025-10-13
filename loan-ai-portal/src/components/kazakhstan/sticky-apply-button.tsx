'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function StickyApplyButton() {
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

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Link href="/kk/apply">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-bold rounded-full"
            >
              <span className="flex items-center gap-2">
                <span>💰</span>
                <span>Өтініш беру</span>
              </span>
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}
