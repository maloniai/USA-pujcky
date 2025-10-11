import { aiLoanMatchingMetadata } from '@/lib/page-metadata'

export const metadata = aiLoanMatchingMetadata

export default function AILoanMatchingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
