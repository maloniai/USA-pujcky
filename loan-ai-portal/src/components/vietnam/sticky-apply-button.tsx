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
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Link href="/vn/apply">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="text-lg">Đăng Ký Vay</span>
          </span>
        </Button>
      </Link>
    </div>
  )
}
