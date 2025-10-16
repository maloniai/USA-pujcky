import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface Breadcrumb {
  label: string
  href: string
}

interface AUBreadcrumbsProps {
  items: Breadcrumb[]
  className?: string
}

export default function AUBreadcrumbs({ items, className = '' }: AUBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
      <Link
        href="/au"
        className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={item.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
