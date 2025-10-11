export type Locale = 'en' | 'es' | 'cs' | 'vi'

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'cs', 'vi']
export const DEFAULT_LOCALE: Locale = 'en'
export const LANGUAGE_STORAGE_KEY = 'loan-ai-locale'
export const LANGUAGE_COOKIE_KEY = 'loan_ai_locale'

/**
 * Normalize a locale string into a supported Locale value.
 * Fallback to DEFAULT_LOCALE when the value cannot be mapped.
 */
export function normalizeLocale(value?: string | null): Locale {
  if (!value) return DEFAULT_LOCALE

  const lower = value.toLowerCase()

  if (SUPPORTED_LOCALES.includes(lower as Locale)) {
    return lower as Locale
  }

  if (lower.startsWith('es')) {
    return 'es'
  }

  if (lower.startsWith('cs') || lower.startsWith('cz')) {
    return 'cs'
  }

  if (lower.startsWith('vi') || lower.startsWith('vn')) {
    return 'vi'
  }

  return DEFAULT_LOCALE
}

/**
 * Resolve a locale from a pathname. Assumes locale prefixes like `/es/...`.
 */
export function resolveLocaleFromPath(pathname: string): Locale {
  if (!pathname) return DEFAULT_LOCALE
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return DEFAULT_LOCALE
  const [possibleLocale] = segments
  return normalizeLocale(possibleLocale)
}

/**
 * Remove the locale prefix from a path if present.
 */
export function stripLocaleFromPath(pathname: string): string {
  const locale = resolveLocaleFromPath(pathname)
  if (locale === DEFAULT_LOCALE) {
    return pathname
  }
  const prefix = `/${locale}`
  if (pathname.startsWith(prefix)) {
    const rest = pathname.slice(prefix.length)
    return rest.startsWith('/') ? rest : `/${rest}`
  }
  return pathname
}

/**
 * Attach locale prefix to a path. English stays unprefixed.
 */
export function applyLocaleToPath(pathname: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return pathname.startsWith('/') ? pathname : `/${pathname}`
  }
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (normalized === '/' || normalized === '') {
    return `/${locale}`
  }
  const withoutLocale = stripLocaleFromPath(normalized)
  return `/${locale}${withoutLocale}`
}

/**
 * Returns the alternate locale (used for toggles/linking).
 */
export function getAlternateLocale(current: Locale): Locale {
  const currentIndex = SUPPORTED_LOCALES.indexOf(current)
  const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length
  return SUPPORTED_LOCALES[nextIndex]
}

/**
 * Persist locale preference to localStorage and cookie (when executed in the browser).
 */
export function saveLocalePreference(locale: Locale) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale)
    } catch (error) {
      console.warn('Unable to persist locale to localStorage', error)
    }

    try {
      const oneYear = 60 * 60 * 24 * 365
      document.cookie = `${LANGUAGE_COOKIE_KEY}=${locale};path=/;max-age=${oneYear};SameSite=Lax`
    } catch (error) {
      console.warn('Unable to persist locale cookie', error)
    }
  }
}

/**
 * Read locale preference from localStorage or cookie when executed in the browser.
 */
export function readLocalePreference(): Locale | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored) {
      return normalizeLocale(stored)
    }
  } catch (error) {
    console.warn('Unable to read locale from localStorage', error)
  }

  try {
    const match = document.cookie
      .split(';')
      .map((part) => part.trim())
      .find((cookie) => cookie.startsWith(`${LANGUAGE_COOKIE_KEY}=`))

    if (match) {
      const [, value] = match.split('=')
      return normalizeLocale(value)
    }
  } catch (error) {
    console.warn('Unable to read locale cookie', error)
  }

  return null
}

/**
 * Detect the best available locale using stored preference, browser language, or default fallback.
 */
export function detectBestLocale(): Locale {
  const stored = readLocalePreference()
  if (stored) {
    return stored
  }

  if (typeof navigator !== 'undefined') {
    const browserLocales = Array.isArray(navigator.languages)
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : []

    for (const locale of browserLocales) {
      const normalized = normalizeLocale(locale)
      if (SUPPORTED_LOCALES.includes(normalized)) {
        return normalized
      }
    }
  }

  return DEFAULT_LOCALE
}

/**
 * Determine whether a path already contains a non-default locale prefix.
 */
export function pathHasLocale(pathname: string): boolean {
  const locale = resolveLocaleFromPath(pathname)
  if (locale !== DEFAULT_LOCALE) {
    return true
  }

  return SUPPORTED_LOCALES.some((loc) => loc !== DEFAULT_LOCALE && pathname.startsWith(`/${loc}`))
}
