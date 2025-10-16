export const metadata = {
  title: 'Půjčky AI Portal - Rychlé & Bezpečné Půjčovací Služby',
  description: 'Získejte okamžité schválení půjčky s naší AI platformou. Porovnejte nabídky, zjistěte podmínky a najděte nejlepší půjčku pro vás.',
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
