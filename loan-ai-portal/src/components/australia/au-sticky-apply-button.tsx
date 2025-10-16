'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AUStickyApplyButtonProps {
  city?: string
  state?: string
}

export default function AUStickyApplyButton({ city, state }: AUStickyApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Build apply URL with location context
  const applyUrl = city && state 
    ? `/au/apply?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
    : state 
    ? `/au/apply?state=${encodeURIComponent(state)}`
    : '/au/apply'

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href={applyUrl}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all group"
      >
        <span className="hidden sm:inline">Apply for a Loan</span>
        <span className="sm:hidden">Apply Now</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
