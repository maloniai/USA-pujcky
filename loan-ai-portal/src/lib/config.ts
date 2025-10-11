/**
 * Site Configuration
 * Central configuration for domain and site-wide settings
 */

// Production domain - Change this to update all URLs across the site
export const SITE_URL = 'https://loan-platform.com'

// Alternative domains (if needed)
export const SITE_URLS = {
  production: 'https://loan-platform.com',
  azure: 'https://mango-field-03aa94410.2.azurestaticapps.net',
  // Add other environments if needed
} as const

// Site metadata
export const SITE_CONFIG = {
  name: 'Loan AI Portal',
  url: SITE_URL,
  description: 'AI-powered loan matching and approval platform serving all 50 US states',
  locale: 'en_US',
  analytics: {
    googleAnalyticsId: 'G-00GXP8M8F3',
  },
} as const
