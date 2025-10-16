export const metadata = {
  title: 'Půjčky AI Portál - Rychlé a Bezpečné Půjčky',
  description: 'Získejte okamžité schválení půjčky s naší AI platformou. Podpora českého jazyka, informace specifické pro region a bezpečné zpracování.',
}

export default function CzechLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
