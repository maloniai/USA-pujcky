import type { ReactNode } from 'react'

interface SALayoutProps {
  children: ReactNode
}

export default function SALayout({ children }: SALayoutProps) {
  return <>{children}</>
}
