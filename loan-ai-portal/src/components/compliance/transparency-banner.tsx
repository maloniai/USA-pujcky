import Link from 'next/link'
import { Locale } from '@/lib/i18n'

type TransparencyBannerProps = {
  locale?: Locale
}

type BannerContent = {
  eyebrow: string
  heading: string
  intro: string
  complianceCards: Array<{ title: string; items: string[] }>
  reassuranceCards: Array<{ title: string; items: (string | { label: string; href: string })[] }>
  footerNote: string
}

const CONTENT: Record<'en' | 'es', BannerContent> = {
  en: {
    eyebrow: 'Borrower protections',
    heading: 'Transparency, Security & Borrower Readiness Checklist',
    intro:
      'We operate as a licensed lead generator. Review the information below to understand how we match you with lenders, what they evaluate, and how to contact us if you have questions.',
    complianceCards: [
      {
        title: 'APR ranges & loan terms',
        items: [
          'Typical APRs: 5.99% – 35.99% depending on credit, income, loan amount, and term length.',
          'Loan amounts: $1,000 to $100,000 with repayment terms of 12 – 84 months.',
          'Rates are provided directly by lenders; we never add origination or referral fees.',
        ],
      },
      {
        title: 'Underwriting criteria',
        items: [
          'Credit score, debt-to-income ratio, employment status, and stated loan purpose are reviewed.',
          'Lenders may request income verification (pay stubs, 1099s, or bank statements) before final approval.',
          'Submitting a request initiates a soft inquiry; hard pulls occur only after you select a lender and consent.',
        ],
      },
      {
        title: 'Lead-generation disclosure',
        items: [
          'Loan AI Portal is a lead generator — we are not a lender and we do not make credit decisions.',
          'We are compensated by lending partners only when a connection is successfully made.',
          'You are free to decline any offer; lenders provide all final disclosures and agreements.',
        ],
      },
    ],
    reassuranceCards: [
      {
        title: 'Verifiable social proof',
        items: [
          '4.8 / 5.0 borrower satisfaction (Trustpilot consumer finance category, audit completed Q1 2025).',
          '12,500+ verified funded borrowers across all 50 states since 2020.',
          { label: 'Read detailed testimonials in our Borrower Outcomes report →', href: '/disclosures/borrower-outcomes' },
        ],
      },
      {
        title: 'Privacy & security certifications',
        items: [
          'SOC 2 Type II attestation (renewed March 2025) and GDPR-ready data processing controls.',
          '256-bit TLS/SSL encryption, daily vulnerability scans, and continuous monitoring via Cloudflare.',
        ],
      },
      {
        title: 'Need a live person?',
        items: [
          'Call (800) 562-6264 — licensed borrower advocates available 7 AM – 9 PM CT, 7 days a week.',
          'Email compliance@loan-platform.com for audit documentation or privacy questions.',
          { label: 'Live chat and secure document upload at our support center →', href: '/contact' },
        ],
      },
    ],
    footerNote:
      'Final APRs, fees, and repayment terms are provided directly by lenders after you review and sign their agreements. Make sure to read the Truth in Lending Act (TILA) disclosures supplied by each lender before accepting funds.',
  },
  es: {
    eyebrow: 'Protecciones para prestatarios',
    heading: 'Transparencia, seguridad y lista de verificación del prestatario',
    intro:
      'Operamos como un generador de clientes potenciales con licencia. Revisa la información para entender cómo te conectamos con prestamistas, qué evalúan y cómo contactarnos si tienes preguntas.',
    complianceCards: [
      {
        title: 'Rangos de APR y plazos',
        items: [
          'APR típicos: 5.99% – 35.99% según crédito, ingresos, monto y duración del préstamo.',
          'Montos disponibles: $1,000 a $100,000 con plazos de pago de 12 – 84 meses.',
          'Las tasas las entregan directamente los prestamistas; nunca añadimos cargos de originación ni comisiones.',
        ],
      },
      {
        title: 'Criterios de suscripción',
        items: [
          'Se revisan puntaje de crédito, relación deuda-ingreso, situación laboral y propósito declarado del préstamo.',
          'Los prestamistas pueden solicitar verificación de ingresos (recibos de pago, 1099 o estados bancarios) antes de la aprobación final.',
          'Enviar una solicitud inicia solo una consulta blanda; las consultas duras ocurren después de elegir un prestamista y otorgar consentimiento.',
        ],
      },
      {
        title: 'Divulgación sobre generación de clientes',
        items: [
          'Loan AI Portal es un generador de clientes potenciales: no somos prestamista ni tomamos decisiones de crédito.',
          'Recibimos compensación de los prestamistas únicamente cuando se completa una conexión exitosa.',
          'Puedes rechazar cualquier oferta; los prestamistas entregan todas las divulgaciones y contratos finales.',
        ],
      },
    ],
    reassuranceCards: [
      {
        title: 'Prueba social verificable',
        items: [
          '4.8 / 5.0 en satisfacción de prestatarios (categoría de finanzas de Trustpilot, auditoría completada Q1 2025).',
          'Más de 12,500 prestatarios financiados en los 50 estados desde 2020.',
          { label: 'Lee testimonios detallados en nuestro informe de Resultados de Prestatarios →', href: '/disclosures/borrower-outcomes' },
        ],
      },
      {
        title: 'Certificaciones de privacidad y seguridad',
        items: [
          'Certificación SOC 2 Tipo II (renovada en marzo de 2025) y controles de datos compatibles con GDPR.',
          'Cifrado TLS/SSL de 256 bits, escaneos de vulnerabilidades diarios y monitoreo continuo mediante Cloudflare.',
        ],
      },
      {
        title: '¿Necesitas atención personalizada?',
        items: [
          'Llama al (800) 562-6264 — asesores con licencia disponibles de 7 AM a 9 PM CT, los 7 días de la semana.',
          'Escribe a compliance@loan-platform.com para documentación de auditoría o dudas de privacidad.',
          { label: 'Chat en vivo y carga segura de documentos en nuestro centro de soporte →', href: '/contact' },
        ],
      },
    ],
    footerNote:
      'Los APR, cargos y términos finales los entrega cada prestamista después de que revises y firmes sus acuerdos. Lee las divulgaciones de la Ley de Veracidad en los Préstamos (TILA) que provee cada prestamista antes de aceptar fondos.',
  },
}

export default function TransparencyBanner({ locale = 'en' }: TransparencyBannerProps) {
  const safeLocale: 'en' | 'es' = locale === 'es' ? 'es' : 'en'
  const copy = CONTENT[safeLocale]

  return (
    <section
      aria-labelledby="transparency-heading"
      className="mb-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 shadow-sm"
    >
      <header className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">{copy.eyebrow}</p>
        <h2 id="transparency-heading" className="text-3xl font-bold text-blue-900">
          {copy.heading}
        </h2>
        <p className="mt-2 text-sm text-blue-700">{copy.intro}</p>
      </header>
      <div className="grid gap-4 lg:grid-cols-3" role="list">
        {copy.complianceCards.map((card) => (
          <article
            key={card.title}
            role="listitem"
            className="rounded-xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-blue-800">{card.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3" role="list">
        {copy.reassuranceCards.map((card) => (
          <article
            key={card.title}
            role="listitem"
            className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {card.items.map((item) => {
                if (typeof item === 'string') {
                  return <li key={item}>{item}</li>
                }
                return (
                  <li key={item.href}>
                    <Link className="text-blue-600 hover:text-blue-800" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-xl border border-blue-100 bg-white/70 p-4 text-xs text-blue-800">{copy.footerNote}</p>
    </section>
  )
}
