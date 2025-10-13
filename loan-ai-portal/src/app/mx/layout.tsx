import type { ReactNode } from 'react'

interface MexicoLayoutProps {
  children: ReactNode
}

export default function MexicoLayout({ children }: MexicoLayoutProps) {
  return (
    <html lang="es-MX">
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
