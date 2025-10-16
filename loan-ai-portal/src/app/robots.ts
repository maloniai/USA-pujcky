import { MetadataRoute } from 'next'

/**
 * Enhanced robots.txt configuration for Loan AI Portal
 * 
 * Features:
 * - AI search engine permissions (GPTBot, ChatGPT, Claude, etc.)
 * - URL parameter blocking to prevent duplicate content
 * - Crawl-delay for aggressive crawlers
 * - Proper API and private directory protection
 * - Optimized for USA personal loans SEO
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Premium AI search engines - No crawl delay, full access
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'Claude-Web', 'cohere-ai', 'PerplexityBot'],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*?*utm_*',           // Block UTM tracking parameters
          '/*?*sessionid*',      // Block session IDs
          '/*?*sid=*',           // Block session IDs
          '/*?*PHPSESSID*',      // Block PHP session IDs
          '/*?*jsessionid*',     // Block Java session IDs
          '/*?sort=*',           // Block sort parameters
          '/*?filter=*',         // Block filter parameters
          '/*?ref=*',            // Block referrer parameters
          '/*?source=*',         // Block source parameters
        ],
        crawlDelay: 0,           // No delay for premium AI crawlers
      },
      
      // Google crawlers - Priority access, no delay
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-News', 'Googlebot-Video', 'Google-InspectionTool'],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*?*utm_*',
          '/*?*sessionid*',
          '/*?*sid=*',
          '/*?sort=*',
          '/*?filter=*',
        ],
        crawlDelay: 0,
      },
      
      // Bing/Microsoft crawlers - Priority access, no delay
      {
        userAgent: ['Bingbot', 'BingPreview', 'msnbot', 'MSNBot-Media'],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*?*utm_*',
          '/*?*sessionid*',
          '/*?sort=*',
          '/*?filter=*',
        ],
        crawlDelay: 0,
      },
      
      // Other major search engines - Slight delay to manage load
      {
        userAgent: ['Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*?*utm_*',
          '/*?*sessionid*',
          '/*?sort=*',
          '/*?filter=*',
          '/*?ref=*',
        ],
        crawlDelay: 1,          // 1 second delay for other search engines
      },
      
      // Aggressive/unknown crawlers - More restrictions and delay
      {
        userAgent: ['*'],
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/*?*sessionid*',     // Session IDs
          '/*?*sid=*',
          '/*?*PHPSESSID*',
          '/*?*jsessionid*',
          '/*?*utm_*',          // UTM tracking parameters
          '/*?fbclid=*',        // Facebook click ID
          '/*?gclid=*',         // Google click ID
          '/*?msclkid=*',       // Microsoft click ID
        ],
        crawlDelay: 2,          // Relaxed delay for general crawlers
      },
      
      // Block bad/aggressive bots entirely
      {
        userAgent: [
          'AhrefsBot',          // SEO crawler
          'SemrushBot',         // SEO crawler
          'MJ12bot',            // Majestic crawler
          'DotBot',             // Moz crawler
          'Screaming Frog',     // SEO tool
          'SEOkicks',           // SEO tool
          'serpstatbot',        // SEO tool
          'DataForSeoBot',      // SEO tool
          'CCBot',              // Common Crawl
          'PetalBot',           // Huawei crawler
          'BLEXBot',            // WebMeUp crawler
        ],
        disallow: ['/'],        // Block completely
      },
    ],
    sitemap: [
      'https://loan-platform.com/sitemap-index.xml',  // Primary sitemap index
      'https://loan-platform.com/sitemap.xml',        // Legacy unified sitemap
    ],
    host: 'https://loan-platform.com',
  }
  
  // Note: AI crawlers can discover additional machine-readable endpoints:
  // - https://loan-platform.com/api/manifest.json (Service catalog)
  // - https://loan-platform.com/api/services.json (OpenAPI-style documentation)
}