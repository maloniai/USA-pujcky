import { contactMetadata } from '@/lib/page-metadata'

export const metadata = contactMetadata

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
