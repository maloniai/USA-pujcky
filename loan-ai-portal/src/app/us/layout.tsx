import type { ReactNode } from 'react'

interface USLayoutProps {
  children: ReactNode
}

export default function USLayout({ children }: USLayoutProps) {
  return <>{children}</>
}
