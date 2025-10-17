import Link from 'next/link'
import { ShieldCheck, BookOpen, Mail, FileText } from 'lucide-react'

export default function CZFooter() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { href: '/cz/privacy', label: 'Ochrana osobních údajů' },
    { href: '/cz/terms', label: 'Podmínky použití' },
    { href: '/cz/disclosures', label: 'Prohlášení' },
    { href: '/cz/contact', label: 'Kontakt' },
  ]

  const loanLinks = [
    { href: '/cz/regions', label: 'Půjčky podle krajů' },
    { href: '/cz/cities', label: 'Půjčky podle měst' },
    { href: '/cz/compare', label: 'Porovnat půjčky' },
    { href: '/cz/odpovedne-uverovani', label: 'Odpovědné úvěrování' },
  ]

  const resourceLinks = [
    { href: '/cz/about', label: 'O nás' },
    { href: 'https://www.cnb.cz', label: 'Česká národní banka', external: true },
    { href: 'https://www.finarbitr.cz', label: 'Finanční arbitr', external: true },
    { href: 'https://www.coi.cz', label: 'Česká obchodní inspekce', external: true },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg">
                LoansAI
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Chytrá platforma pro porovnání půjček v České republice. Porovnejte poskytovatele s licencí ČNB ve všech krajích a městech.
            </p>
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>Všichni poskytovatelé regulováni ČNB. Ochrana spotřebitele podle zákona č. 257/2016 Sb.</span>
            </div>
          </div>

          {/* Loan Resources column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Půjčky a úvěry
            </h3>
            <ul className="space-y-2">
              {loanLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Užitečné odkazy
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Právní informace
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-white text-sm mb-2">Důležité informace</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Loan-Platform.com je porovnávací služba, nikoli poskytovatel úvěrů. Porovnáváme poskytovatele s licencí České národní banky regulované podle zákona č. 257/2016 Sb. o spotřebitelském úvěru. Schválení půjčky, úrokové sazby a podmínky podléhají hodnotícím kritériím jednotlivých poskytovatelů. Reprezentativní příklad: Půjčka 50 000 Kč na 24 měsíců s RPSN 19,9 % má měsíční splátku 2 391 Kč, celková částka k úhradě 57 384 Kč, celkové náklady na úvěr 7 384 Kč. UPOZORNĚNÍ: Toto RPSN se vztahuje pouze na uvedený příklad. Různé částky a doby splatnosti budou mít odlišné RPSN. Náklady jako poplatky za předčasné splacení nejsou zahrnuty v RPSN, ale mohou ovlivnit celkové náklady půjčky. Před uzavřením smlouvy pečlivě zvažte svou schopnost splácet. Zadlužování může vést k vážným finančním problémům.
            </p>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p className="mb-2">
              © {currentYear} LoansAI Česká republika. Všechna práva vyhrazena. IČO: Registrace probíhá.
            </p>
            <p>
              Platforma regulována Českou národní bankou (ČNB). Ochrana spotřebitele podle zákona č. 257/2016 Sb. a GDPR.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
