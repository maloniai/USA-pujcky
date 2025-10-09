import { NextResponse } from 'next/server'

/**
 * AI-Friendly Service Manifest
 * 
 * Structured JSON endpoint that summarizes our loan services for AI crawlers
 * including ChatGPT, Claude, Perplexity, and other LLM-powered search engines.
 * 
 * This helps AI understand:
 * - What services we offer
 * - Geographic coverage
 * - Product specifications
 * - Contact methods
 */

export async function GET() {
  const manifest = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    
    // Basic Identity
    name: "Loan AI Portal",
    alternateName: "Portal de Préstamos IA",
  description: "AI-powered personal loan marketplace connecting borrowers with 100+ lenders across all 50 US states. 2-minute soft-pull pre-qualification, rate comparisons, and expedited funding options up to $100K.",
    url: "https://loan-platform.com",
    
    // Languages Offered
    inLanguage: ["en-US", "es-US"],
    availableLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" }
    ],
    
    // Service Area
    areaServed: {
      "@type": "Country",
      name: "United States",
      identifier: "US"
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "All 50 US States + DC",
      description: "Nationwide coverage including Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming, and Washington DC"
    },
    
    // Products & Services
    serviceType: "Personal Loan Marketplace",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Personal Loan Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "Personal Loans",
            description: "Unsecured personal loans for debt consolidation, home improvement, emergencies, and more",
            category: "Personal Loan",
            amount: {
              "@type": "MonetaryAmount",
              currency: "USD",
              minValue: 1000,
              maxValue: 100000
            },
            loanTerm: {
              "@type": "QuantitativeValue",
              minValue: 3,
              maxValue: 84,
              unitCode: "MON"
            }
          },
          availability: "https://schema.org/InStock",
          eligibleRegion: { "@type": "Country", name: "US" },
          eligibleCustomerType: "Individuals with credit score 580+"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "Debt Consolidation Loans",
            description: "Consolidate multiple debts into single monthly payment with competitive rates",
            category: "Debt Consolidation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "Emergency Personal Loans",
            description: "Fast funding for unexpected expenses with expedited underwriting and lender-dependent same-day disbursement options",
            category: "Emergency Loan"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "LoanOrCredit",
            name: "Home Improvement Loans",
            description: "Finance renovations and repairs without home equity requirements",
            category: "Home Improvement"
          }
        }
      ]
    },
    
    // Key Features for AI Understanding
    features: [
      "AI-powered loan matching algorithm",
      "100+ vetted lender network",
      "Soft credit check (no score impact)",
  "2-minute pre-qualification and rate check",
  "Same-day funding available with participating lenders",
      "Support for all credit profiles (580+)",
      "Bilingual service (English/Spanish)",
      "Bank-level security encryption",
      "No hidden fees or obligations",
      "Free comparison service"
    ],
    
    // Application Process
    potentialAction: {
      "@type": "ApplyAction",
      name: "Apply for Personal Loan",
      description: "Complete online application to receive loan offers",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://loan-platform.com/apply",
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
        inLanguage: ["en-US", "es-US"]
      },
      expectsAcceptanceOf: {
        "@type": "Offer",
        eligibilityRequirement: [
          "Age 18 or older",
          "US resident",
          "Active bank account",
          "Regular income source",
          "Valid contact information"
        ]
      }
    },
    
    // Contact Information
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "support@loan-platform.com",
        availableLanguage: ["English", "Spanish"],
        areaServed: "US"
      }
    ],
    
    // Technical Metadata for AI
    "@metadata": {
      version: "1.0.0",
      lastUpdated: new Date().toISOString(),
      purpose: "AI Crawler Service Discovery",
      crawlFrequency: "weekly",
      dataFreshness: "real-time",
      apiStyle: "REST-JSON"
    },
    
    // Additional AI-Friendly Fields
    keywords: [
      "personal loans",
      "AI loan matching",
  "soft credit pull pre-qualification",
  "same day funding options",
      "debt consolidation",
      "bad credit loans",
      "emergency loans",
      "online loan application",
      "loan marketplace",
      "USA personal loans"
    ],
    
    // Regulatory & Trust
    certifications: [
      "State-licensed lender network",
      "GLBA compliant data security",
      "TCPA consent framework",
      "CCPA privacy compliant"
    ],
    
    sameAs: [
      "https://loan-platform.com",
      "https://loan-platform.com/es"
    ]
  }
  
  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'all',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
