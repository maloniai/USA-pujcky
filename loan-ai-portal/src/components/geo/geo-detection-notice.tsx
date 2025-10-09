'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import type { CountryFeature } from '@/data/countries'

type DetectedCountry = {
  code: string
  name: string
  flag: string
  href?: string
  status?: CountryFeature['status']
}

interface GeoDetectionNoticeProps {
  countries: CountryFeature[]
}

const fallbackCountry: DetectedCountry = {
  code: 'global',
  name: 'Global audience',
  flag: '🌐',
}

function mapLanguageToCountry(language: string, countries: CountryFeature[]): DetectedCountry {
  const normalized = language.toLowerCase()

  if (normalized.includes('us') || normalized.includes('en-us')) {
    const match = countries.find((country) => country.code === 'us')
    if (match) {
      return {
        code: match.code,
        name: match.name,
        flag: match.flag,
        href: match.href,
        status: match.status,
      }
    }
  }

  if (normalized.includes('cs') || normalized.includes('cz') || normalized.includes('sk')) {
    const match = countries.find((country) => country.code === 'cz')
    if (match) {
      return {
        code: match.code,
        name: match.name,
        flag: match.flag,
        href: match.href,
        status: match.status,
      }
    }
  }

  return fallbackCountry
}

export default function GeoDetectionNotice({ countries }: GeoDetectionNoticeProps) {
  const [detected, setDetected] = useState<DetectedCountry>(fallbackCountry)

  const liveCountries = useMemo(
    () => countries.filter((country) => country.status === 'live'),
    [countries],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const resolved = Intl.DateTimeFormat().resolvedOptions().locale
    const browserLanguage = navigator.language
    const language = browserLanguage || resolved

    if (language) {
      setDetected(mapLanguageToCountry(language, countries))
    }
  }, [countries])

  const isLive = detected.status === 'live'

  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 text-blue-900 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Detected Country (beta)
          </p>
          <p className="mt-1 text-lg font-semibold">
            <span aria-hidden>{detected.flag}</span>{' '}
            {detected.name}
          </p>
          <p className="mt-2 text-sm text-blue-800">
            We use browser language to guess your location. Choose your country below if this
            detection is off. Geolocation consent + customization coming soon.
          </p>
        </div>
        <div className="md:text-right">
          {isLive && detected.href ? (
            <Link
              href={detected.href}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
            >
              Continue to {detected.name}
            </Link>
          ) : (
            <div className="rounded-md bg-white/80 px-4 py-3 text-sm text-blue-800">
              <p className="font-semibold text-blue-900">
                Coverage live in {liveCountries.length} countries
              </p>
              <p>
                Select a country below to see localized loan comparisons. More regions launching
                soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
