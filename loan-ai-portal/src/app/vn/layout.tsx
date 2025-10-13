import type { ReactNode } from 'react'

interface VietnamLayoutProps {
  children: ReactNode
}

export default function VietnamLayout({ children }: VietnamLayoutProps) {
  return (
    <html lang="vi">
      <head>
        <meta name="language" content="Vietnamese" />
      </head>
      <body>{children}</body>
    </html>
  )
}
