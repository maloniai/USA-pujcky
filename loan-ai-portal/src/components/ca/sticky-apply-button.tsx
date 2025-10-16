'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface CAStickyApplyButtonProps {
  lang?: 'en' | 'fr'
}

export default function CAStickyApplyButton({ lang = 'en' }: CAStickyApplyButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const text = lang === 'fr' ? 'Faire une demande' : 'Apply Now'
  const subtext = lang === 'fr' ? 'Approbation rapide' : 'Fast Approval'

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <Link
        href="/ca/apply"
        className="flex flex-col items-center gap-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold"
      >
        <span className="text-lg">{text}</span>
        <span className="text-xs opacity-90">{subtext}</span>
      </Link>
    </div>
  )
}
