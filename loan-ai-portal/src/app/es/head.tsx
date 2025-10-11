import StructuredData from '@/components/structured-data'
import OrganizationSchema from '@/components/organization-schema'
import { defaultSEOEs } from '@/lib/seo'

export default function SpanishHead() {
  return (
    <>
      <meta httpEquiv="content-language" content="es" />
      <StructuredData data={defaultSEOEs.structuredData} />
      <OrganizationSchema locale="es" />
    </>
  )
}
