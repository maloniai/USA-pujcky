import './globals.css'
import { defaultSEO, generatePageMetadata } from '@/lib/seo'
import StructuredData from '@/components/structured-data'
import OrganizationSchema from '@/components/organization-schema'
import type { OrganizationLocale } from '@/lib/organization-schema'
import Script from 'next/script'
import HtmlLang from '@/components/language/html-lang'
import { DEFAULT_LOCALE } from '@/lib/i18n'
import CookieConsentBanner from '@/components/compliance/cookie-consent-banner'
import ChatWidget from '@/components/ai/chat-widget'

export const metadata = generatePageMetadata(defaultSEO)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={DEFAULT_LOCALE} data-locale={DEFAULT_LOCALE}>
      <head>
        <StructuredData data={defaultSEO.structuredData} />
        <OrganizationSchema locale={DEFAULT_LOCALE as OrganizationLocale} />

        {/* DNS Prefetch & Preconnect for faster third-party resources */}
        <link rel="preconnect" href="https://www.rndframe.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.rndframe.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Resource hints for manifest and services endpoints */}
        <link rel="prefetch" href="/api/manifest.json" />
        <link rel="prefetch" href="/api/services.json" />
        
        {/* Favicon & PWA icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Viewport optimization for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      
      {/* Google Analytics - Lazy loaded for better performance */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-00GXP8M8F3"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-00GXP8M8F3');
        `}
      </Script>
      <body className="font-sans" data-locale={DEFAULT_LOCALE}>
        <HtmlLang locale={DEFAULT_LOCALE} />
        <CookieConsentBanner />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {children}
        </div>
        <ChatWidget />
      </body>
    </html>
  )
}