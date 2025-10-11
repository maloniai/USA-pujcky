'use client'

import { useEffect, useId, useMemo } from 'react'

interface VolsorLoanFormProps {
  className?: string
  product?: string
  country?: string
  affiliate?: number
  theme?: string
  campaign?: string
  partnerName?: string
  sponsoredLabel?: string
}

declare global {
  interface Window {
    embedForm?: {
      ready(callback: () => void): void
      init(
        containerId: string,
        config: {
          product?: string
          country?: string
          affiliate?: number
          theme?: string
          campaign?: string
        },
        styles?: Record<string, string>
      ): void
      destroy?(containerId: string): void
    }
  }
}

export function VolsorLoanForm({
  className,
  product,
  country,
  affiliate,
  theme,
  campaign,
  partnerName = 'Volsor',
  sponsoredLabel = 'Sponzorovaný partner',
}: VolsorLoanFormProps) {
  const rawId = useId()
  const containerId = `volsor-${rawId.replace(/[:]/g, '-')}`
  const volsortConfig = useMemo(() => {
    const config: Record<string, string | number | undefined> = {
      product: product ?? 'payday',
      country: country ?? 'cs',
      affiliate: affiliate ?? 9100,
      theme: theme ?? 'old_styled',
      campaign,
    }

    return Object.fromEntries(Object.entries(config).filter(([, value]) => value !== undefined)) as {
      product?: string
      country?: string
      affiliate?: number
      theme?: string
      campaign?: string
    }
  }, [affiliate, campaign, country, product, theme])

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://web.volsor.com/widget/appForm.js"]')
    let scriptAdded = false
    let isInitialized = false
    let isMounted = true

    const initializeForm = () => {
      if (!window.embedForm || isInitialized || !isMounted) return

      window.embedForm.ready(() => {
        if (!isMounted || isInitialized) return

        window.embedForm?.init(
          containerId,
          volsortConfig,
          {
            width: '100%',
          }
        )

        isInitialized = true
      })
    }

    if (existingScript) {
      initializeForm()
    } else {
      const script = document.createElement('script')
      script.src = 'https://web.volsor.com/widget/appForm.js'
      script.async = true
      script.dataset.volsorEmbed = 'true'
      script.onload = initializeForm
      document.body.appendChild(script)
      scriptAdded = true
    }

    const readyTimeout = window.setTimeout(() => {
      if (!isInitialized) {
        initializeForm()
      }
    }, 1000)

    return () => {
      isMounted = false
      window.clearTimeout(readyTimeout)
      window.embedForm?.destroy?.(containerId)

      const container = document.getElementById(containerId)
      if (container) {
        container.innerHTML = ''
      }

      if (scriptAdded) {
        const script = document.querySelector<HTMLScriptElement>('script[data-volsor-embed="true"]')
        if (script && script.parentNode === document.body) {
          document.body.removeChild(script)
        }
      }
    }
  }, [containerId, volsortConfig])

  const wrapperClassName = ['relative w-full', className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClassName}>
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-500">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
          {partnerName}
        </span>
        <span className="text-blue-600/80">{sponsoredLabel}</span>
      </div>
      <div
        id={containerId}
        data-sponsored="true"
        aria-label={`Formulář partnera ${partnerName}`}
        className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-inset ring-black/5 dark:border-neutral-800 dark:bg-neutral-900 dark:ring-white/10"
      >
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Načítáme bezpečný formulář pro žádost o úvěr…
        </p>
      </div>
    </div>
  )
}
