'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface StickyApplyButtonProps {
  href?: string
  label?: string
  className?: string
}

export default function StickyApplyButton({
  href = '/apply',
  label = 'Aplicar Ahora',
  className = '',
}: StickyApplyButtonProps) {
  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <Link href={href}>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-2xl rounded-full transition-all duration-300 hover:scale-105 animate-pulse"
          aria-label={label}
        >
          {label}
        </Button>
      </Link>
    </div>
  )
}
