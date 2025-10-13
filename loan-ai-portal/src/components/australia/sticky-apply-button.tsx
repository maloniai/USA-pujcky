'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <Link href="/au/apply">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 shadow-2xl text-lg px-8 py-6 rounded-full"
        >
          <span className="flex items-center gap-2">
            <span>💰</span>
            <span className="hidden sm:inline">Apply for Loan</span>
            <span className="sm:hidden">Apply Now</span>
          </span>
        </Button>
      </Link>
    </div>
  )
}
