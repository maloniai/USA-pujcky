'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
  quality?: number
}

/**
 * Optimized Image Component for Loan AI Portal
 * 
 * Features:
 * - Automatic WebP format conversion
 * - Lazy loading by default (unless priority=true)
 * - Descriptive alt tags optimized for SEO
 * - Loading states with blur placeholder
 * - Responsive sizing with Next.js Image optimization
 * - USA and personal loans keywords in alt text
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Enhance alt text with SEO keywords if not already present
  const enhancedAlt = alt.toLowerCase().includes('usa') || alt.toLowerCase().includes('personal loan')
    ? alt
    : `${alt} - USA Personal Loans`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={enhancedAlt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
