'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

/**
 * Visual Breadcrumb Navigation Component
 * Displays breadcrumb trail for user navigation
 * Works in conjunction with BreadcrumbSchema for SEO
 */

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2" aria-hidden="true" />
            )}
            
            {isLast ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

/**
 * Compact Breadcrumb Component (for mobile)
 */
export function CompactBreadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length <= 1) return null

  const previousItem = items[items.length - 2]
  const currentItem = items[items.length - 1]

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      <Link
        href={previousItem.url}
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center"
      >
        <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
        {previousItem.name}
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-900 font-medium" aria-current="page">
        {currentItem.name}
      </span>
    </nav>
  )
}

/**
 * Responsive Breadcrumb Component
 * Shows full breadcrumbs on desktop, compact on mobile
 */
export function ResponsiveBreadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <>
      {/* Desktop breadcrumbs */}
      <div className="hidden md:block">
        <Breadcrumbs items={items} className={className} />
      </div>

      {/* Mobile breadcrumbs */}
      <div className="md:hidden">
        <CompactBreadcrumbs items={items} />
      </div>
    </>
  )
}
