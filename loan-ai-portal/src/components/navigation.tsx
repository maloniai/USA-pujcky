"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getNavigationLabels } from '@/data/translations'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import {
  Locale,
  applyLocaleToPath,
  getAlternateLocale,
  saveLocalePreference,
  stripLocaleFromPath,
} from '@/lib/i18n'

interface NavigationProps {
  locale?: Locale
}

export default function Navigation({ locale = 'en' }: NavigationProps) {
  const labels = getNavigationLabels(locale)
  const pathname = usePathname() ?? '/'
  const alternateLocale = getAlternateLocale(locale)
  const basePath = stripLocaleFromPath(pathname) || '/'
  const homeHref = applyLocaleToPath('/', locale)

  const localizedHref = (path: string) => applyLocaleToPath(path, locale)
  const languageSwitchHref = applyLocaleToPath(basePath, alternateLocale)
  const globalCoverageHref = `${homeHref}#global-coverage`
  const usaHubHref = '/us'
  const czechHubHref = '/cz'
  const vietnamHubHref = '/vn'

  const handleLanguageToggle = () => {
    saveLocalePreference(alternateLocale)
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-blue-900 text-blue-50 text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Contact options">
            <a href="tel:+18005626264" className="inline-flex items-center gap-1 font-semibold hover:text-white transition-colors">
              <span aria-hidden>📞</span>
              <span>Talk to a lending guide: (800) 562-6264</span>
            </a>
            <a href="mailto:compliance@loan-platform.com" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <span aria-hidden>✉️</span>
              <span>Email: compliance@loan-platform.com</span>
            </a>
            <Link href={localizedHref('/contact')} className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <span aria-hidden>💬</span>
              <span>Live chat &amp; support center</span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="Transparency highlights">
            <span className="inline-flex items-center gap-1 text-blue-100">
              <span aria-hidden>✅</span>
              <span>Lead generator – not a lender</span>
            </span>
            <span className="inline-flex items-center gap-1 text-blue-100">
              <span aria-hidden>🔒</span>
              <span>SOC 2 Type II • 256-bit SSL</span>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-3 sm:pb-0">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href={homeHref} className="text-xl font-bold text-blue-600">
              {labels.brand}
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={globalCoverageHref}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {labels.home}
              </Link>
              <Link
                href={localizedHref('/ai-loan-matching')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {labels.aiMatching}
              </Link>
              <Link
                href={localizedHref('/blog')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {labels.blog}
              </Link>
              <div className="flex items-center gap-4 border-l pl-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {labels.countries}
                </span>
                <Link
                  href={usaHubHref}
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  {labels.usaHub}
                </Link>
                <Link
                  href={czechHubHref}
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  {labels.czHub}
                </Link>
                <Link
                  href={vietnamHubHref}
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  {labels.vnHub}
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href={languageSwitchHref}
              className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
              aria-label={labels.languageSwitchAria}
              onClick={handleLanguageToggle}
            >
              {labels.languageSwitch}
            </Link>
            <div className="hidden sm:flex flex-col items-end">
              <Link
                href={localizedHref('/apply')}
                className="inline-flex"
                aria-describedby="nav-apply-disclosure"
              >
                <span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
                  {labels.apply}
                </span>
              </Link>
              <LeadGenDisclosure
                id="nav-apply-disclosure"
                locale={locale}
                as="span"
                align="right"
                className="mt-1 block max-w-[13rem] text-[11px]"
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden space-y-2">
          <Link
            href={localizedHref('/apply')}
            className="block"
            aria-describedby="nav-apply-disclosure-mobile"
          >
            <span className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-700">
              {labels.apply}
            </span>
          </Link>
          <LeadGenDisclosure
            id="nav-apply-disclosure-mobile"
            locale={locale}
            as="span"
            align="center"
            className="block text-gray-600"
          />
          <div className="rounded-lg border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm text-blue-900">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              {labels.countries}
            </p>
            <div className="mt-2 space-y-2">
              <Link
                href={usaHubHref}
                className="block font-semibold text-blue-900 transition-colors hover:text-blue-600"
              >
                {labels.usaHub}
              </Link>
              <Link
                href={czechHubHref}
                className="block text-blue-900 transition-colors hover:text-blue-600"
              >
                {labels.czHub}
              </Link>
              <Link
                href={vietnamHubHref}
                className="block text-blue-900 transition-colors hover:text-blue-600"
              >
                {labels.vnHub}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}