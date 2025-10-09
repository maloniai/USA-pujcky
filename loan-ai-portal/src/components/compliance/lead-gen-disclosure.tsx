"use client";

import type { Locale } from '@/lib/i18n'
import { getCommonLabels } from '@/data/translations'

interface LeadGenDisclosureProps {
  locale?: Locale
  align?: 'left' | 'center' | 'right'
  as?: 'p' | 'span'
  className?: string
  id?: string
}

const ALIGNMENT_CLASSES: Record<NonNullable<LeadGenDisclosureProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export default function LeadGenDisclosure({
  locale = 'en',
  align = 'left',
  as: Component = 'p',
  className = '',
  id,
}: LeadGenDisclosureProps) {
  const { leadGenDisclosure } = getCommonLabels(locale)
  const alignmentClass = ALIGNMENT_CLASSES[align]

  return (
    <Component
      id={id}
      className={`text-xs leading-snug text-gray-500 ${alignmentClass} ${className}`.trim()}
    >
      {leadGenDisclosure}
    </Component>
  )
}