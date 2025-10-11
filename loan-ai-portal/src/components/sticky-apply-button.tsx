import Link from 'next/link'
import { cn } from '@/lib/utils'

interface StickyApplyButtonProps {
  href?: string
  text?: string
  className?: string
}

export default function StickyApplyButton({
  href = '/apply',
  text = 'Apply Now',
  className,
}: StickyApplyButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Link
        href={href}
        className={cn(
          'flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl',
          className
        )}
      >
        {text}
      </Link>
    </div>
  )
}
