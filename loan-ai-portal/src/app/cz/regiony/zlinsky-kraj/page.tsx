import Link from 'next/link'

export const metadata = {
  title: 'Půjčky ve Zlínském kraji – Porovnejte 2025',
  description: 'Najděte nejlepší půjčky ve Zlínském kraji. Porovnejte nabídky, podívejte se na místní regulace a najděte licencované poskytovatele ve vašem městě.',
}

export default function ZlinskyKrajPage() {
  const cities = [
    { name: 'Bojkovice', slug: 'bojkovice' },
    { name: 'Brumov-Bylnice', slug: 'brumov-bylnice' },
    { name: 'Bystřice pod Hostýnem', slug: 'bystrice-pod-hostynem' },
    { name: 'Fryšták', slug: 'frystak' },
    { name: 'Holešov', slug: 'holesov' },
    { name: 'Hulín', slug: 'hulin' },
    { name: 'Chropyně', slug: 'chopyne' },
    { name: 'Karolinka', slug: 'karolinka' },
    { name: 'Kelč', slug: 'kelc' },
    { name: 'Koryčany', slug: 'korycany' },
    { name: 'Kroměříž', slug: 'kromeriz' },
    { name: 'Kunovice', slug: 'kunovice' },
    { name: 'Luhačovice', slug: 'luhacovice' },
    { name: 'Napajedla', slug: 'napajedla' },
    { name: 'Otrokovice', slug: 'otrokovice' },
    { name: 'Rožnov pod Radhoštěm', slug: 'roznov-pod-radhostem' },
    { name: 'Slavičín', slug: 'slavicin' },
    { name: 'Slušovice', slug: 'slusovice' },
    { name: 'Staré Město', slug: 'stare-mesto' },
    { name: 'Uherské Hradiště', slug: 'uherske-hradiste' },
    { name: 'Uherský Brod', slug: 'uhersky-brod' },
    { name: 'Uherský Ostroh', slug: 'uhersky-ostroh' },
    { name: 'Valašské Klobouky', slug: 'valaske-klobouky' },
    { name: 'Valašské Meziříčí', slug: 'valaske-mezirici' },
    { name: 'Vizovice', slug: 'vizovice' },
    { name: 'Vsetín', slug: 'vsetin' },
    { name: 'Zlín', slug: 'zlin' },
    { name: 'Zubří', slug: 'zubri' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Půjčky ve Zlínském kraji</h1>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Zlínský kraj nabízí širokou škálu možností půjček pro obyvatele i podnikatele. 
          Ať už hledáte osobní půjčku, refinancování nebo podnikatelský úvěr, 
          najdete zde licencované poskytovatele, kteří splňují všechny české regulační požadavky.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <h2 className="text-lg font-semibold mb-2">Regulace Půjček ve Zlínském kraji</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Maximální RPSN: 36% ročně pro standardní úvěry</li>
          <li>Regulační orgán: Česká národní banka (ČNB)</li>
          <li>Povinná licence pro všechny věřitele</li>
          <li>Právo odstoupit od smlouvy do 14 dnů</li>
          <li>Transparentní zobrazení všech poplatků a podmínek</li>
          <li>Ochrana osobních údajů dle GDPR</li>
          <li>Povinné posouzení schopnosti splácet</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Města ve Zlínském kraji</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cities.map((city) => (
          <Link key={city.slug} href={`/cz/regiony/zlinsky-kraj/${city.slug}`}>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-blue-600">{city.name}</h3>
              <p className="text-gray-600 text-sm">Zobrazit půjčky v {city.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Doporučení Poskytovatelé</h2>
        <p className="text-gray-700 mb-4">
          Všichni poskytovatelé na této stránce jsou licencováni Českou národní bankou 
          a dodržují všechny regulační požadavky pro poskytování úvěrů v České republice.
        </p>
        <div className="bg-white p-4 rounded border">
          <p className="text-sm text-gray-600">
            <strong>Upozornění:</strong> Reprezentativní příklad: Při půjčce 50 000 Kč na 24 měsíců 
            s RPSN 25% zaplatíte měsíční splátku přibližně 2 450 Kč a celkem 58 800 Kč.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/cz/regiony" className="text-blue-600 hover:underline">
          ← Zpět na přehled regionů
        </Link>
      </div>
    </div>
  )
}
