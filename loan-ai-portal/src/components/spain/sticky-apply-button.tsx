'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Link href="/apply">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all"
            >
              💰 Solicitar Ahora
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}
