import StructuredData from '@/components/structured-data'
import OrganizationSchema from '@/components/organization-schema'
import { defaultSEOPl } from '@/lib/seo'

export default function PolishHead() {
  return (
    <>
      <meta httpEquiv="content-language" content="pl" />
      <StructuredData data={defaultSEOPl.structuredData} />
      <OrganizationSchema locale="pl" />
    </>
  )
}
