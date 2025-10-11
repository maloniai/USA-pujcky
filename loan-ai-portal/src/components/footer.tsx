import Link from 'next/link'
import { getFooterLabels, getNavigationLabels, Locale } from '@/data/translations'

interface FooterProps {
  locale?: Locale
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const labels = getFooterLabels(locale)
  const navigationLabels = getNavigationLabels(locale)
  const contactCopy =
    locale === 'es'
      ? {
          heading: 'Contacta a nuestro equipo',
          phone: 'Llámanos: (800) 562-6264 (7 AM – 9 PM CT, todos los días)',
          email: 'Escríbenos: compliance@loan-platform.com',
          infoEmail: 'Información general: info@loan-platform.com',
          company: 'Operado por Maloni s.r.o., Revoluční 1403/28, 110 00 Praga 1, República Checa',
          chat: 'Chat en vivo y centro de soporte',
          certificationsHeading: 'Certificaciones y cumplimiento',
          certifications: [
            {
              text: 'SOC 2 Tipo II (2025) – Carta puente',
              href: '/docs/soc2-bridge-letter-2025-10-06',
            },
            {
              text: 'Metodología de métricas (2M+ solicitantes, $5B+ financiado)',
              href: '/docs/performance-metrics-2025',
            },
          ],
        }
      : locale === 'cs'
        ? {
            heading: 'Spojte se s naším compliance týmem',
            phone: 'Zavolejte: +420 255 790 777 (Po–Pá 9:00–18:00 CET)',
            email: 'E-mail: compliance@loan-platform.com',
            infoEmail: 'Obecné dotazy: info@loan-platform.com',
            company: 'Provozovatel Maloni s.r.o., Revoluční 1403/28, 110 00 Praha 1, Česká republika',
            chat: 'Chat a podpora',
            certificationsHeading: 'Certifikace a dokumentace',
            certifications: [
              {
                text: 'SOC 2 Type II (2025) – bridge letter',
                href: '/docs/soc2-bridge-letter-2025-10-06',
              },
              {
                text: 'Metodika AI skóre a RPSN (2025)',
                href: '/docs/performance-metrics-2025',
              },
            ],
          }
        : {
            heading: 'Talk to our compliance team',
            phone: 'Call us: (800) 562-6264 (7 AM – 9 PM CT, daily)',
            email: 'Email: compliance@loan-platform.com',
            infoEmail: 'General inquiries: info@loan-platform.com',
            company: 'Operated by Maloni s.r.o., Revoluční 1403/28, 110 00 Prague 1, Czech Republic',
            chat: 'Live chat & support center',
            certificationsHeading: 'Certifications & assurances',
            certifications: [
              {
                text: 'SOC 2 Type II (2025) bridge letter',
                href: '/docs/soc2-bridge-letter-2025-10-06',
              },
              {
                text: 'Performance metrics (2M+ borrowers, $5B+ funded)',
                href: '/docs/performance-metrics-2025',
              },
            ],
          }

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{navigationLabels.brand}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {labels.description}
            </p>
          </div>
          {labels.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-lg font-semibold mb-4">{section.heading}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-gray-800 bg-gray-800/40 p-6 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-3">{contactCopy.heading}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+18005626264" className="hover:text-white transition-colors">
                  {contactCopy.phone}
                </a>
              </li>
              <li>
                <a href="mailto:compliance@loan-platform.com" className="hover:text-white transition-colors">
                  {contactCopy.email}
                </a>
              </li>
              <li>
                <a href="mailto:info@loan-platform.com" className="hover:text-white transition-colors">
                  {contactCopy.infoEmail}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {contactCopy.chat}
                </Link>
              </li>
              <li className="text-gray-400 text-xs leading-relaxed">
                {contactCopy.company}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">{contactCopy.certificationsHeading}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {contactCopy.certifications.map((item) => (
                <li key={item.text}>
                  <a href={item.href} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center">{labels.legal}</p>
          <div className="mt-4 space-y-3 text-xs text-gray-500 leading-relaxed">
            {labels.disclosures.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
