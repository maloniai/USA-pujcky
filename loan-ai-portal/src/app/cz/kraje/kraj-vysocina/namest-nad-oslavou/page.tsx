import Link from 'next/link'

export const metadata = {
  title: 'Půjčky Náměšť nad Oslavou, Kraj Vysočina – Srovnání 2025',
  description: 'Hledáte půjčku v Náměšť nad Oslavou? Porovnejte nejlepší nabídky online půjček od licencovaných poskytovatelů. Rychlé schválení, výhodné podmínky.',
}

export default function namestnadoslavouPage() {
  const nearbyCities = [
    { name: 'Třebíč', slug: 'trebic' },
    { name: 'Moravské Budějovice', slug: 'moravske-budejovice' },
    { name: 'Velké Meziříčí', slug: 'velke-mezirici' },
    { name: 'Jihlava', slug: 'jihlava' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-sm">
        <Link href="/cz" className="text-blue-600 hover:underline">Domů</Link>
        {' > '}
        <Link href="/cz/kraje" className="text-blue-600 hover:underline">Kraje</Link>
        {' > '}
        <Link href="/cz/kraje/kraj-vysocina" className="text-blue-600 hover:underline">Kraj Vysočina</Link>
        {' > '}
        <span className="text-gray-600">Náměšť nad Oslavou</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Půjčky v Náměšť nad Oslavou, Kraj Vysočina</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          V Náměšti nad Oslavou najdete komplexní přehled úvěrových možností pro místní obyvatele. Regulace ČNB zajišťují férové podmínky a transparentnost všech nabídek. Typické půjčky se pohybují od 5 000 Kč do 250 000 Kč.
        </p>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Porovnání nabídek půjček</h2>
        <p className="text-gray-600 mb-4">
          Zde bude zobrazeno porovnání nabídek od ověřených poskytovatelů pro Náměšť nad Oslavou
        </p>
        <div className="bg-white rounded p-6 min-h-[300px] flex items-center justify-center">
          <p className="text-gray-500 italic">[Iframe s nabídkami půjček pro Náměšť nad Oslavou]</p>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regulace půjček v České republice</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maximální RPSN je stanovena zákonem o spotřebitelském úvěru</li>
          <li>Poskytovatelé musí být registrováni u České národní banky</li>
          <li>Právo na odstoupení od smlouvy do 14 dnů bez udání důvodu</li>
          <li>Povinná informační povinnost o celkových nákladech úvěru před uzavřením smlouvy</li>
          <li>Ochrana osobních údajů podle nařízení GDPR</li>
          <li>Posouzení úvěruschopnosti je zákonnou povinností poskytovatele</li>
          <li>Transparentní informování o všech poplatcích a sankcích</li>
          <li>Možnost předčasného splacení úvěru s právem na slevu z úroků</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Často kladené otázky o půjčkách v Náměšť nad Oslavou</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Jaké jsou požadavky pro získání půjčky v Náměšť nad Oslavou?</h3>
            <p className="text-gray-700">
              Základní požadavky zahrnují plnoletost, trvalý pobyt v ČR, pravidelný příjem a kladnou úvěrovou 
              historii. Konkrétní podmínky se mohou lišit podle poskytovatele a typu úvěru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Jak dlouho trvá schválení půjčky v Náměšť nad Oslavou?</h3>
            <p className="text-gray-700">
              Online půjčky mohou být schváleny během několika minut až hodin. Tradiční bankovní úvěry 
              obvykle vyžadují několik pracovních dnů. Rychlost závisí na úplnosti poskytnutých dokumentů 
              a typu zvoleného úvěru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Jaká je průměrná úroková sazba v Kraji Vysočina?</h3>
            <p className="text-gray-700">
              Úrokové sazby se pohybují od jednotek procent u bankovních úvěrů až po vyšší hodnoty u 
              nebankovních poskytovatelů. Konkrétní sazba závisí na výši úvěru, délce splatnosti a 
              úvěruschopnosti klienta. Vždy porovnejte RPSN pro reálné náklady.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Mohu získat půjčku i s registrem dlužníků?</h3>
            <p className="text-gray-700">
              Některé nebankovní společnosti poskytují úvěry i klientům s negativní úvěrovou historií, 
              avšak za vyšší úrokové sazby. Je důležité zvážit svou schopnost splácet před uzavřením 
              jakékoliv smlouvy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Jsou online půjčky v Náměšť nad Oslavou bezpečné?</h3>
            <p className="text-gray-700">
              Ano, pokud zvolíte licencovaného poskytovatele registrovaného u ČNB. Vždy ověřte registraci 
              na webu České národní banky a čtěte smlouvu pozorně před podpisem. Vyhněte se neznámým 
              poskytovatelům bez jasné identifikace.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Půjčky ve vašem okolí</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {nearbyCities.map((city) => (
            <Link 
              key={city.slug}
              href={`/cz/kraje/kraj-vysocina/${city.slug}`}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-semibold text-blue-600 hover:text-blue-800">
                Půjčky {city.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link 
            href="/cz/kraje/kraj-vysocina" 
            className="text-blue-600 hover:underline font-medium"
          >
            ← Zpět na přehled Kraje Vysočina
          </Link>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Důležité upozornění</h2>
        <p className="text-sm text-gray-700 mb-3">
          <strong>Affiliate oznámení:</strong> Tato stránka může obsahovat odkazy na produkty našich partnerů. 
          Pokud prostřednictvím těchto odkazů uzavřete smlouvu, můžeme získat provizi. To nemá vliv na 
          cenu, kterou zaplatíte, a pomáhá nám udržovat tento web zdarma.
        </p>
        <p className="text-sm text-gray-700">
          <strong>Reprezentativní příklad:</strong> Při půjčce 30 000 Kč na 12 měsíců s úrokovou sazbou 
          10 % p.a. činí měsíční splátka 2 638 Kč, celková částka k zaplacení je 31 656 Kč, 
          RPSN 10,47 %. Konkrétní podmínky závisí na úvěrovém hodnocení a zvoleném poskytovateli.
        </p>
      </div>
    </div>
  )
}
