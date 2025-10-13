import Script from 'next/script'

interface FinancialServiceSchemaProps {
  name: string
  description: string
  areaServed: string
  provider: {
    name: string
    url: string
  }
  url: string
}

export default function FinancialServiceSchema({
  name,
  description,
  areaServed,
  provider,
  url,
}: FinancialServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name,
    description,
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    url,
    serviceType: 'Personal Loan Comparison',
    category: 'Financial Services',
  }

  return (
    <Script
      id="financial-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
