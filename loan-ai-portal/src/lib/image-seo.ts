/**
 * Image SEO Helper Functions
 * Optimized for USA Personal Loans - Loan AI Portal
 */

export interface ImageMetadata {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  priority?: boolean
}

/**
 * Generate SEO-optimized alt text for loan-related images
 */
export function generateLoanImageAlt(context: string, includeUSA: boolean = true): string {
  const usaSuffix = includeUSA ? ' - USA Personal Loans' : ''
  return `${context}${usaSuffix}`
}

/**
 * Predefined image metadata for common loan portal images
 */
export const loanPortalImages = {
  // Homepage Hero Images
  heroApproval: {
    alt: 'Fast Personal Loan Pre-Qualification USA - AI-Powered Matching Platform',
    title: 'Get pre-qualified and check personal loan rates in 2 minutes with a soft credit pull',
    width: 1200,
    height: 630,
    priority: true,
  },
  
  // AI Matching Process
  aiMatching: {
    alt: 'AI Loan Matching Technology - 200+ Data Points Analysis USA',
    title: 'Artificial Intelligence matches you with best personal loan lenders',
    width: 800,
    height: 600,
  },
  
  // Application Process
  applicationForm: {
    alt: 'Simple Personal Loan Application Form - 2 Minute Process USA',
    title: 'Quick and easy loan application - No impact on credit score',
    width: 600,
    height: 400,
  },
  
  // Approval & Funding
  approvedLoan: {
    alt: 'Personal Loan Approved - Same Day Funding Options USA',
    title: 'Get your personal loan funds as soon as next business day with participating lenders',
    width: 800,
    height: 600,
  },
  
  // Security & Trust
  secureData: {
    alt: '256-bit Encryption Personal Loan Security - Bank-Level Protection USA',
    title: 'Your personal and financial data is protected with military-grade encryption',
    width: 400,
    height: 400,
  },
  
  // Credit Score
  creditScore: {
    alt: 'All Credit Scores Welcome 580-850 - Bad Credit Personal Loans USA',
    title: 'Personal loans for all credit types - Fair, good, and excellent credit',
    width: 600,
    height: 400,
  },
  
  // State Maps
  usaMap: {
    alt: 'Personal Loans Available All 50 States USA - Complete Coverage Map',
    title: 'Serving borrowers in every US state from Alabama to Wyoming',
    width: 1000,
    height: 600,
  },
  
  // Lender Network
  lenderNetwork: {
    alt: '100+ Personal Loan Lenders Network USA - Compare Best Rates',
    title: 'Access to largest network of personal loan lenders in America',
    width: 800,
    height: 500,
  },
  
  // Mobile App
  mobileApp: {
    alt: 'Mobile Personal Loan Application USA - Apply Anywhere Anytime',
    title: 'Apply for personal loans on your phone - iOS and Android compatible',
    width: 400,
    height: 800,
  },
  
  // Customer Support
  support247: {
    alt: '24/7 Personal Loan Customer Support USA - Expert Help Available',
    title: 'Round-the-clock assistance with your personal loan application',
    width: 600,
    height: 400,
  },
  
  // Testimonials
  happyCustomer: {
    alt: 'Satisfied Personal Loan Customer USA - 4.8 Star Rating Reviews',
    title: 'Join 2 million+ Americans who got pre-qualified and funded through Loan AI Portal',
    width: 400,
    height: 400,
  },
  
  // Financial Education
  loanCalculator: {
    alt: 'Personal Loan Calculator USA - Estimate Monthly Payments & Rates',
    title: 'Calculate your personal loan payment - See rates from 5.99% to 35.99% APR',
    width: 800,
    height: 600,
  },
  
  // Debt Consolidation
  debtConsolidation: {
    alt: 'Debt Consolidation Loans USA - Combine Bills Into One Payment',
    title: 'Simplify your finances with debt consolidation personal loans',
    width: 800,
    height: 500,
  },
  
  // Home Improvement
  homeImprovement: {
    alt: 'Home Improvement Personal Loans USA - Fund Your Renovation Project',
    title: 'Get personal loans for home repairs and renovations - $1,000 to $100,000',
    width: 800,
    height: 500,
  },
  
  // Emergency Loans
  emergencyFunding: {
    alt: 'Emergency Personal Loans USA - Fast Cash When You Need It Most',
    title: 'Quick approval emergency personal loans - Same day funding available',
    width: 800,
    height: 500,
  },
} as const

/**
 * Common image sizes for responsive design
 */
export const responsiveSizes = {
  small: '(max-width: 640px) 100vw, 640px',
  medium: '(max-width: 768px) 100vw, 768px',
  large: '(max-width: 1024px) 100vw, 1024px',
  xlarge: '(max-width: 1280px) 100vw, 1280px',
  hero: '100vw',
  thumbnail: '(max-width: 640px) 50vw, 400px',
}

/**
 * Generate structured data for images (ImageObject schema)
 */
export function generateImageSchema(imageData: ImageMetadata) {
  return {
    '@type': 'ImageObject',
    '@id': `https://loan-platform.com${imageData.src}`,
    url: `https://loan-platform.com${imageData.src}`,
    contentUrl: `https://loan-platform.com${imageData.src}`,
    width: imageData.width,
    height: imageData.height,
    caption: imageData.alt,
    name: imageData.title || imageData.alt,
    description: imageData.alt,
    inLanguage: 'en-US',
    contentLocation: {
      '@type': 'Country',
      name: 'United States',
    },
  }
}
