import { buildOrganizationSchema, type OrganizationLocale } from '@/lib/organization-schema'

interface OrganizationSchemaProps {
  locale?: OrganizationLocale
}

export default function OrganizationSchema({ locale = 'en' }: OrganizationSchemaProps) {
  const schema = buildOrganizationSchema(locale)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
