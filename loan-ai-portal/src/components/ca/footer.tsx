import Link from 'next/link'
import { caFooterLinks } from '@/data/ca-translations'

interface CAFooterProps {
  lang?: 'en' | 'fr'
}

export default function CAFooter({ lang = 'en' }: CAFooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    brand: {
      title: 'Loan AI Portal',
      description:
        lang === 'fr'
          ? 'Comparez les prêts personnels de prêteurs canadiens autorisés. Tous les prêteurs se conforment aux réglementations fédérales et provinciales.'
          : 'Compare personal loans from licensed Canadian lenders. All lenders comply with federal and provincial regulations.',
    },
    loanTypes: {
      title: lang === 'fr' ? 'Types de prêts' : 'Loan Types',
      links: [
        { name: lang === 'fr' ? 'Prêts personnels' : 'Personal Loans', href: '/ca' },
        { name: lang === 'fr' ? 'Consolidation de dettes' : 'Debt Consolidation', href: '/ca' },
        { name: lang === 'fr' ? 'Prêts automobiles' : 'Car Loans', href: '/ca' },
        { name: lang === 'fr' ? 'Mauvais crédit' : 'Bad Credit Loans', href: '/ca' },
        { name: lang === 'fr' ? 'Marges de crédit' : 'Lines of Credit', href: '/ca' },
      ],
    },
    explore: {
      title: lang === 'fr' ? 'Explorer' : 'Explore',
      links: [
        { name: lang === 'fr' ? 'Provinces et territoires' : 'Provinces & Territories', href: '/ca/regions' },
        { name: lang === 'fr' ? 'Villes' : 'Cities', href: '/ca/cities' },
        { name: lang === 'fr' ? 'Faire une demande' : 'Apply Now', href: '/ca/apply' },
        { name: lang === 'fr' ? 'Prêt responsable' : 'Responsible Lending', href: '/ca/responsible-lending' },
        { name: lang === 'fr' ? 'À propos' : 'About Us', href: '/ca/about' },
      ],
    },
  }

  const resourcesTitle = lang === 'fr' ? 'Ressources canadiennes' : 'Canadian Resources'
  const contactTitle = lang === 'fr' ? 'Besoin d\'aide?' : 'Need Help?'
  const contactEmail = lang === 'fr' ? 'ca-support@loan-platform.com' : 'ca-support@loan-platform.com'
  const rightsText = lang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'
  const complianceText =
    lang === 'fr'
      ? 'Réglementé ACFC • Prêteurs autorisés uniquement'
      : 'FCAC Regulated • Licensed Lenders Only'
  const maxRateText =
    lang === 'fr'
      ? 'Taux maximum légal : 60 % TAP'
      : 'Maximum Legal Rate: 60% APR'

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerSections.brand.title}</h4>
            <p className="text-sm leading-relaxed mb-4">{footerSections.brand.description}</p>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-block w-6 h-4 bg-white rounded-sm overflow-hidden">
                🇨🇦
              </span>
              <span>Canada</span>
            </div>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerSections.loanTypes.title}</h4>
            <ul className="space-y-2 text-sm">
              {footerSections.loanTypes.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerSections.explore.title}</h4>
            <ul className="space-y-2 text-sm">
              {footerSections.explore.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              {lang === 'fr' ? 'Légal et assistance' : 'Legal & Support'}
            </h4>
            <ul className="space-y-2 text-sm">
              {caFooterLinks.legal.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="hover:text-white transition-colors">
                    {lang === 'fr' ? link.nameFr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Box */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">{contactTitle}</h4>
              <p className="text-sm mb-2">
                {lang === 'fr' ? 'Email :' : 'Email:'}{' '}
                <a href={`mailto:${contactEmail}`} className="text-blue-400 hover:underline">
                  {contactEmail}
                </a>
              </p>
              <p className="text-xs text-gray-400">
                {lang === 'fr'
                  ? 'Lundi - Vendredi : 9h00 - 17h00 (heure de l\'Est)'
                  : 'Monday - Friday: 9:00 AM - 5:00 PM (ET)'}
              </p>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">{resourcesTitle}</h4>
              <ul className="space-y-2 text-sm">
                {caFooterLinks.resources.map((resource) => (
                  <li key={resource.url}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      {lang === 'fr' ? resource.nameFr : resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {currentYear} Loan AI Portal Canada. {rightsText}.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs">
              <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full">
                {complianceText}
              </span>
              <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full">
                {maxRateText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
