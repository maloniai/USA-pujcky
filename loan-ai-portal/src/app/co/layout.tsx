import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Préstamos en Colombia – Comparar Ofertas 2025',
  description:
    'Compare préstamos personales en Colombia. Ofertas de prestamistas licenciados por la Superintendencia Financiera. Tasas desde 18% EA. Solicite en línea hoy.',
  keywords: [
    'préstamos colombia',
    'préstamos personales colombia',
    'créditos en colombia',
    'consolidación de deudas colombia',
    'préstamos rápidos colombia',
  ],
  alternates: {
    canonical: 'https://loan-platform.com/co',
  },
  openGraph: {
    title: 'Préstamos en Colombia – Comparar Ofertas 2025',
    description: 'Compare préstamos personales en Colombia de prestamistas licenciados. Solicite en línea hoy.',
    url: 'https://loan-platform.com/co',
    siteName: 'Loan AI Portal',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function ColombiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  )
}
