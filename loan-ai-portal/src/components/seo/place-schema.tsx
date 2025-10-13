import Script from 'next/script'

interface GeoCoordinates {
  latitude: string
  longitude: string
}

interface PlaceSchemaProps {
  type: 'State' | 'City' | 'AdministrativeArea'
  name: string
  url: string
  description?: string
  containedInCountry?: string
  containedInState?: string
  geo?: GeoCoordinates
  population?: string
  areaServed?: string
}

/**
 * Place Schema Component
 * 
 * Provides geographic structured data for state and city pages.
 * Helps search engines understand location context for local SEO.
 * 
 * @see https://schema.org/Place
 * @see https://schema.org/State
 * @see https://schema.org/City
 */
export function PlaceSchema({
  type,
  name,
  url,
  description,
  containedInCountry = 'United States',
  containedInState,
  geo,
  population,
  areaServed,
}: PlaceSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    url,
    ...(description && { description }),
    ...(containedInState && {
      containedInPlace: {
        '@type': 'State',
        name: containedInState,
        containedInPlace: {
          '@type': 'Country',
          name: containedInCountry,
        },
      },
    }),
    ...(!containedInState && {
      containedInPlace: {
        '@type': 'Country',
        name: containedInCountry,
      },
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(population && { population }),
    ...(areaServed && { areaServed }),
  }

  return (
    <Script
      id={`place-schema-${url.replace(/[^a-z0-9]/gi, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

/**
 * FinancialService with Place Schema
 * 
 * Combines financial service information with place data for better local SEO.
 */
interface FinancialServicePlaceSchemaProps extends PlaceSchemaProps {
  serviceName?: string
  avgLoanAmount?: string
  avgInterestRate?: string
  lenderCount?: number
}

export function FinancialServicePlaceSchema({
  serviceName = 'Personal Loans',
  avgLoanAmount,
  avgInterestRate,
  lenderCount,
  ...placeProps
}: FinancialServicePlaceSchemaProps) {
  const placeData = {
    '@context': 'https://schema.org',
    '@type': placeProps.type,
    name: placeProps.name,
    url: placeProps.url,
    ...(placeProps.description && { description: placeProps.description }),
    ...(placeProps.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: placeProps.geo.latitude,
        longitude: placeProps.geo.longitude,
      },
    }),
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `${serviceName} in ${placeProps.name}`,
    url: placeProps.url,
    areaServed: placeData,
    ...(avgLoanAmount && {
      offers: {
        '@type': 'AggregateOffer',
        category: 'Personal Loan',
        ...(avgInterestRate && {
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: avgInterestRate,
            priceCurrency: 'USD',
          },
        }),
      },
    }),
    ...(lenderCount && {
      provider: {
        '@type': 'Organization',
        name: `${lenderCount}+ Licensed Lenders`,
      },
    }),
  }

  return (
    <>
      <Script
        id={`place-schema-${placeProps.url.replace(/[^a-z0-9]/gi, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeData) }}
      />
      <Script
        id={`financial-service-schema-${placeProps.url.replace(/[^a-z0-9]/gi, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}

/**
 * Example Usage:
 * 
 * // State Page (e.g., California)
 * <PlaceSchema
 *   type="State"
 *   name="California"
 *   url="https://loansai.com/us/states/california"
 *   description="Personal loan regulations and lenders in California"
 *   containedInCountry="United States"
 *   geo={{ latitude: "36.7783", longitude: "-119.4179" }}
 *   population="39,538,223"
 * />
 * 
 * // City Page (e.g., Los Angeles, CA)
 * <FinancialServicePlaceSchema
 *   type="City"
 *   name="Los Angeles"
 *   url="https://loansai.com/cities/california/los-angeles"
 *   description="Compare personal loans in Los Angeles, CA"
 *   containedInCountry="United States"
 *   containedInState="California"
 *   geo={{ latitude: "34.0522", longitude: "-118.2437" }}
 *   population="3,979,576"
 *   serviceName="Personal Loans"
 *   avgLoanAmount="$15,000"
 *   avgInterestRate="8.5%"
 *   lenderCount={50}
 * />
 */
