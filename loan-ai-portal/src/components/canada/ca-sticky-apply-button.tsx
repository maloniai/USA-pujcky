'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface CAStickyApplyButtonProps {
  city?: string
  province?: string
}

export default function CAStickyApplyButton({ city, province }: CAStickyApplyButtonProps) {
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
  const applyUrl = city && province 
    ? `/ca/apply?city=${encodeURIComponent(city)}&province=${encodeURIComponent(province)}`
    : province 
    ? `/ca/apply?province=${encodeURIComponent(province)}`
    : '/ca/apply'

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Link
        href={applyUrl}
        className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-red-800 transition-all group"
      >
        <span className="hidden sm:inline">Apply for a Loan</span>
        <span className="sm:hidden">Apply Now</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
