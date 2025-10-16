export const metadata = {
  title: 'Půjčky v České republice - Porovnejte 2025',
  description: 'Rychlé a bezpečné půjčky online. AI platforma pro srovnání půjček v ČR. Regionální informace a okamžité schválení.',
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
