"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, DEFAULT_LOCALE, resolveLocaleFromPath } from '@/lib/i18n'

const CONSENT_COOKIE_KEY = 'loan_ai_cookie_consent'
const CONSENT_STORAGE_KEY = 'loan_ai_cookie_consent'
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type ConsentValue = 'accepted' | 'opted_out'

type CookieCopy = {
  title: string
  body: string
  accept: string
  optOut: string
  analyticsNote: string
}

const COPY: Record<Locale, CookieCopy> = {
  en: {
    title: 'Your Privacy Choices',
    body:
      "We use cookies to keep the site running, understand performance, and improve lender matching. " +
      'We do not sell personal information, and you can decline non-essential cookies at any time.',
    accept: 'Allow Cookies',
    optOut: 'Decline Non-Essential Cookies',
    analyticsNote: 'Declining disables analytics and advertising cookies while retaining those strictly necessary.',
  },
  es: {
    title: 'Tus opciones de privacidad',
    body:
      'Usamos cookies para funciones esenciales, medir rendimiento y mejorar la coincidencia con prestamistas. ' +
      'No vendemos información personal y puedes rechazar las cookies no esenciales cuando quieras.',
    accept: 'Permitir cookies',
    optOut: 'Rechazar cookies no esenciales',
    analyticsNote:
      'Rechazar desactiva las cookies de analítica y publicidad, dejando solo las estrictamente necesarias.',
  },
  cs: {
    title: 'Vaše možnosti ochrany soukromí',
    body:
      'Používáme cookies pro základní provoz webu, měření výkonu a zlepšení párování s věřiteli. ' +
      'Neprodáváme osobní údaje a neesenciální cookies můžete kdykoli odmítnout.',
    accept: 'Povolit cookies',
    optOut: 'Odmítnout neesenciální cookies',
    analyticsNote:
      'Odmítnutí deaktivuje analytické a reklamní cookies, ponechá pouze ty nezbytně nutné.',
  },
  kk: {
    title: 'Құпиялылық таңдауларыңыз',
    body:
      'Біз сайттың жұмысын қамтамасыз ету, өнімділікті түсіну және несие берушілерді сәйкестендіруді жақсарту үшін cookie файлдарын пайдаланамыз. ' +
      'Біз жеке ақпаратты сатпаймыз және сіз маңызды емес cookie файлдарынан кез келген уақытта бас тарта аласыз.',
    accept: 'Cookie-ларға рұқсат беру',
    optOut: 'Маңызды емес cookie-лардан бас тарту',
    analyticsNote: 'Бас тарту аналитикалық және жарнамалық cookie файлдарын өшіреді, тек қажеттілерін қалдырады.',
  },
}

function readConsentCookie(): ConsentValue | null {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE_KEY}=`))

  if (!match) {
    return null
  }

  const [, value] = match.split('=') as [string, ConsentValue]
  if (value === 'accepted' || value === 'opted_out') {
    return value
  }
  return null
}

function persistConsent(value: ConsentValue) {
  if (typeof document !== 'undefined') {
    document.cookie = `${CONSENT_COOKIE_KEY}=${value};path=/;max-age=${ONE_YEAR_SECONDS};SameSite=Lax`
  }
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
    } catch (error) {
      console.warn('Unable to persist cookie consent preference', error)
    }
  }
}

function applyAnalyticsConsent(value: ConsentValue) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  if (value === 'accepted') {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  } else {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }
}

export default function CookieConsentBanner() {
  const pathname = usePathname()
  const locale: Locale = useMemo(() => {
    if (!pathname) return DEFAULT_LOCALE
    return resolveLocaleFromPath(pathname)
  }, [pathname])

  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const existing = readConsentCookie()
    if (existing) {
      applyAnalyticsConsent(existing)
      return
    }

    try {
      const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentValue | null
      if (stored === 'accepted' || stored === 'opted_out') {
        persistConsent(stored)
        applyAnalyticsConsent(stored)
        return
      }
    } catch (error) {
      console.warn('Unable to read stored cookie consent preference', error)
    }

    setVisible(true)
  }, [])

  const handleConsent = (value: ConsentValue) => {
    persistConsent(value)
    applyAnalyticsConsent(value)
    setVisible(false)
  }

  const labels = COPY[locale] ?? COPY[DEFAULT_LOCALE]

  if (!visible) {
    return null
  }

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:inset-x-auto sm:left-1/2 sm:w-[min(640px,90vw)] sm:-translate-x-1/2"
      role="dialog"
      aria-live="polite"
      aria-label={labels.title}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{labels.title}</h2>
          <p className="mt-1 text-sm text-slate-600">{labels.body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
          >
            {labels.accept}
          </button>
          <button
            type="button"
            onClick={() => handleConsent('opted_out')}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
          >
            {labels.optOut}
          </button>
        </div>
        <p className="text-xs text-slate-500">{labels.analyticsNote}</p>
        <Link
          href="/privacy"
          className="text-xs text-blue-700 underline decoration-dotted hover:text-blue-900"
        >
          {locale === 'kk'
            ? 'Біздің толық құпиялылық саясатымызды оқыңыз'
            : locale === 'cs' 
            ? 'Přečtěte si naše úplné zásady ochrany osobních údajů' 
            : locale === 'es' 
            ? 'Lee nuestra política de privacidad completa' 
            : 'Read our full privacy policy'}
        </Link>
      </div>
    </aside>
  )
}
