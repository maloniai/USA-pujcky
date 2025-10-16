export const metadata = {
  title: 'Půjčky Online - Rychlé a Bezpečné Služby',
  description: 'Získejte okamžité schválení půjčky s naší platformou. Informace specifické pro kraje a města v České republice.',
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
