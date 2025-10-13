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
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
          <Link href="/ca/apply">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl px-8 py-6 text-lg font-bold rounded-full"
            >
              <span className="flex items-center gap-2">
                <span>💰</span>
                <span>Apply Now</span>
              </span>
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}
