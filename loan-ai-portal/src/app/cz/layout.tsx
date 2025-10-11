export const metadata = {
  title: 'Půjčky v České republice – Rychlé a Bezpečné Online Půjčky',
  description: 'Porovnejte půjčky v České republice. Rychlé schválení, bezpečné zpracování, regionální informace o půjčkách.',
}

export default function CzechLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
