"use client"

import { useEffect } from 'react'
import type { Locale } from '@/lib/i18n'

interface HtmlLangProps {
  locale: Locale
}

/**
 * Ensures the <html> element reflects the active locale on the client.
 * Helpful for localized routes where the static HTML may default to English.
 */
export default function HtmlLang({ locale }: HtmlLangProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.setAttribute('data-locale', locale)
      document.body?.setAttribute('data-locale', locale)
    }
  }, [locale])

  return null
}
