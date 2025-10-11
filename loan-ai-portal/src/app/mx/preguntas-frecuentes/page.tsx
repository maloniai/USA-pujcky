import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import StickyApplyButton from '@/components/mexico/sticky-apply-button'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Préstamos en México – Guía Completa',
  description: 'Respuestas a tus preguntas sobre préstamos personales en México. Aprende sobre CAT, requisitos, CONDUSEF, tasas de interés y más.',
  keywords: 'preguntas prestamos mexico, FAQ creditos, CAT mexico, CONDUSEF, requisitos prestamo, tasas interes mexico',
}

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: '¿Qué es un préstamo personal?',
        a: 'Un préstamo personal es un producto financiero que te permite recibir una cantidad de dinero de una institución financiera, que luego debes pagar en cuotas periódicas con intereses. A diferencia de los préstamos hipotecarios o automotrices, los préstamos personales no requieren garantía y puedes usarlos para diversos propósitos como consolidación de deudas, emergencias médicas, mejoras del hogar, educación, o cualquier necesidad financiera personal.'
      },
      {
        q: '¿Qué es el CAT y por qué es importante?',
        a: 'El CAT (Costo Anual Total) es el indicador más importante al comparar préstamos. Incluye la tasa de interés, todas las comisiones, seguros obligatorios y cualquier otro costo asociado al préstamo, expresado como porcentaje anual. En México, la ley exige que todas las instituciones financieras muestren el CAT de forma clara. De acuerdo con regulaciones vigentes, el CAT para créditos al consumo no debe exceder el 100%. Siempre compara el CAT, no solo la tasa de interés.'
      },
      {
        q: '¿Qué es CONDUSEF y cuál es su función?',
        a: 'CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros) es el organismo del gobierno mexicano que protege a los usuarios de servicios financieros. CONDUSEF supervisa que las instituciones financieras cumplan con las leyes, ofrece mediación gratuita en disputas entre usuarios e instituciones, proporciona educación financiera y mantiene un registro de prestamistas autorizados. Puedes contactar a CONDUSEF en el 55 5340 0999 (Ciudad de México) o 800 999 8080 (resto del país).'
      }
    ]
  },
  {
    category: 'Requisitos y Elegibilidad',
    questions: [
      {
        q: '¿Qué requisitos necesito para solicitar un préstamo personal?',
        a: 'Los requisitos básicos incluyen: 1) Ser mayor de 18 años, 2) Tener ciudadanía mexicana o residencia legal, 3) Contar con identificación oficial vigente (INE/IFE o pasaporte), 4) Comprobante de ingresos (recibos de nómina, declaraciones de impuestos para trabajadores independientes, estados de cuenta), 5) Estado de cuenta bancario de los últimos 3-6 meses, 6) Comprobante de domicilio reciente (máximo 3 meses), y 7) Referencias personales. Algunos prestamistas pueden solicitar documentación adicional dependiendo del monto y tu perfil.'
      },
      {
        q: '¿Puedo obtener un préstamo si trabajo por cuenta propia?',
        a: 'Sí, muchos prestamistas ofrecen préstamos a trabajadores independientes, freelancers y empresarios. Necesitarás proporcionar documentación que demuestre tus ingresos, como declaraciones de impuestos (declaraciones anuales y provisionales), estados de cuenta bancarios que muestren depósitos regulares, contratos con clientes, o facturas. El proceso puede tomar un poco más de tiempo ya que los prestamistas necesitan verificar la estabilidad de tus ingresos.'
      },
      {
        q: '¿Necesito historial crediticio para obtener un préstamo?',
        a: 'No necesariamente. Si bien tener un buen historial crediticio te ayudará a obtener mejores tasas y montos más altos, existen prestamistas que trabajan con personas que tienen poco o ningún historial crediticio, o incluso con historiales negativos. Estos préstamos pueden tener tasas más altas y montos menores. Si no tienes historial, considera comenzar con un monto pequeño para construir tu perfil crediticio.'
      },
      {
        q: '¿Puedo solicitar un préstamo con mal crédito o estando en Buró?',
        a: 'Sí, es posible. Estar en Buró de Crédito no significa que no puedas obtener un préstamo; el Buró es simplemente un registro de tu historial crediticio. Lo que importa es tu comportamiento de pago. Algunos prestamistas se especializan en trabajar con personas que tienen historiales crediticios desafiantes. Sin embargo, es probable que enfrentes tasas de interés más altas y montos menores. Si tienes mal crédito, considera mejorar tu puntuación pagando deudas existentes a tiempo antes de solicitar.'
      }
    ]
  },
  {
    category: 'Montos, Plazos y Tasas',
    questions: [
      {
        q: '¿Cuánto dinero puedo pedir prestado?',
        a: 'En México, los préstamos personales típicamente van desde $5,000 MXN hasta $500,000 MXN, aunque algunos prestamistas pueden ofrecer montos mayores para perfiles crediticios excepcionales. El monto que puedes solicitar depende de varios factores: tu ingreso mensual (generalmente los prestamistas aprueban hasta 40-50% de tu ingreso disponible), tu historial crediticio, tu relación deuda-ingreso actual, y las políticas del prestamista específico.'
      },
      {
        q: '¿Qué tasas de interés puedo esperar?',
        a: 'Las tasas de interés en México para préstamos personales varían ampliamente, típicamente entre 15% y 80% anual, dependiendo de tu perfil crediticio. Factores que afectan tu tasa: puntuación crediticia (scores más altos = tasas más bajas), ingresos estables y comprobables, historial de pagos, relación deuda-ingreso, monto y plazo del préstamo, y el tipo de institución (bancos tradicionales suelen ofrecer mejores tasas que prestamistas en línea). Recuerda siempre comparar el CAT, no solo la tasa de interés.'
      },
      {
        q: '¿Qué plazos están disponibles?',
        a: 'Los plazos de préstamos personales en México generalmente van de 6 meses a 60 meses (5 años). Plazos más cortos (6-24 meses) resultan en pagos mensuales más altos pero menos interés total pagado. Plazos más largos (36-60 meses) ofrecen pagos mensuales menores pero mayor interés acumulado. Elige un plazo que equilibre pagos mensuales manejables con el menor interés total posible.'
      },
      {
        q: '¿Puedo pagar mi préstamo antes de tiempo?',
        a: 'Sí, tienes derecho a pagar tu préstamo anticipadamente en México. De acuerdo con la Ley para la Transparencia y Ordenamiento de los Servicios Financieros, los prestamistas pueden cobrar una comisión por pago anticipado de máximo 2% sobre el saldo insoluto durante los primeros 12 meses del préstamo, y 1.5% después del primer año. Muchos prestamistas modernos no cobran esta comisión. Verifica siempre los términos específicos antes de firmar.'
      }
    ]
  },
  {
    category: 'Proceso de Solicitud',
    questions: [
      {
        q: '¿Cuánto tiempo toma el proceso de aprobación?',
        a: 'El tiempo varía según el prestamista: Préstamos en línea pueden dar respuesta preliminar en minutos y aprobación final en 24-48 horas. Bancos tradicionales pueden tomar de 3 a 7 días hábiles. SOFOMes (instituciones financieras no bancarias) generalmente procesan en 2-5 días. El tiempo exacto depende de la complejidad de tu solicitud y qué tan completa esté tu documentación. Proporcionar todos los documentos desde el principio acelera el proceso.'
      },
      {
        q: '¿Cuándo recibiré el dinero?',
        a: 'Una vez aprobado tu préstamo, el desembolso generalmente ocurre así: Préstamos en línea: 24-48 horas después de la aprobación final. Algunos ofrecen desembolso el mismo día. Bancos tradicionales: 2-5 días hábiles después de firmar el contrato. SOFOMes: 1-3 días hábiles. El dinero se deposita directamente en tu cuenta bancaria. Asegúrate de proporcionar información bancaria correcta para evitar retrasos.'
      },
      {
        q: '¿Afecta mi score crediticio solicitar un préstamo?',
        a: 'Depende del tipo de consulta: Consulta suave (soft inquiry): Ocurre cuando verificas tus tasas o cuando un prestamista hace una evaluación preliminar. NO afecta tu score. Consulta completa (hard inquiry): Ocurre cuando formalmente solicitas el préstamo y el prestamista revisa tu historial completo. Puede reducir tu score temporalmente en pocos puntos. Tip: Limita las solicitudes formales a 2-3 en un período de 2 semanas; las agencias de crédito las cuentan como una sola para este propósito.'
      }
    ]
  },
  {
    category: 'Derechos y Protecciones',
    questions: [
      {
        q: '¿Cuáles son mis derechos como prestatario en México?',
        a: 'Tus derechos principales incluyen: 1) Recibir información clara y completa sobre el CAT, comisiones y términos antes de firmar. 2) Período de arrepentimiento de 5 días hábiles sin penalización después de firmar. 3) Derecho a liquidar anticipadamente tu préstamo. 4) Protección contra prácticas abusivas de cobranza (los cobradores no pueden amenazarte, acosarte o contactarte fuera de horarios permitidos). 5) Confidencialidad de tu información personal. 6) Consultar tu Buró de Crédito gratuitamente una vez al año. 7) Presentar quejas ante CONDUSEF si el prestamista no cumple sus obligaciones.'
      },
      {
        q: '¿Qué hago si tengo problemas con mi prestamista?',
        a: 'Sigue estos pasos: 1) Primero, contacta directamente al prestamista por escrito explicando tu problema. Guarda copias de toda comunicación. 2) Si no resuelven, presenta una queja formal en la Unidad Especializada de Atención a Usuarios del prestamista (UNES). 3) Si aún no hay solución, acude a CONDUSEF para iniciar un proceso de conciliación gratuito. CONDUSEF puede mediar entre tú y el prestamista. 4) Como último recurso, puedes iniciar un proceso legal. CONDUSEF: 55 5340 0999 (CDMX) o 800 999 8080.'
      },
      {
        q: '¿Cómo me protejo de fraudes y prestamistas ilegales?',
        a: 'Protégete verificando: 1) Que el prestamista esté registrado en CONDUSEF (consulta en www.condusef.gob.mx en la sección de Registro de Prestadores de Servicios Financieros - SIPRES). 2) Nunca pagues por adelantado para "garantizar" tu préstamo. Los prestamistas legítimos no piden depósitos previos. 3) Lee todo el contrato antes de firmar. No firmes nada que no entiendas. 4) Verifica que el CAT esté claramente indicado. 5) Desconfía de promesas de "aprobación garantizada sin importar tu historial". 6) Nunca des datos bancarios por teléfono a números desconocidos. 7) Si algo parece demasiado bueno para ser cierto, probablemente lo sea.'
      }
    ]
  },
  {
    category: 'Uso del Préstamo',
    questions: [
      {
        q: '¿Para qué puedo usar un préstamo personal?',
        a: 'Los préstamos personales son muy flexibles. Usos comunes incluyen: Consolidación de deudas (combinar múltiples deudas con alto interés en un solo pago), Emergencias médicas o dentales, Mejoras y reparaciones del hogar, Gastos educativos (colegiaturas, cursos, materiales), Eventos importantes (bodas, quinceañeras), Inicio o expansión de negocio pequeño, Compra de electrodomésticos o muebles, Reparación o mantenimiento de vehículo, Vacaciones o viajes, y Gastos inesperados. A diferencia de préstamos hipotecarios o automotrices, no necesitas justificar el uso del dinero, aunque algunos prestamistas pueden preguntar.'
      },
      {
        q: '¿Es mejor un préstamo personal o usar tarjetas de crédito?',
        a: 'Depende de tu situación: Préstamos personales son mejores para: montos grandes (más de $20,000), necesidades de largo plazo, consolidación de deudas, y cuando quieres pagos fijos predecibles. Ventajas: tasas generalmente menores que tarjetas, plazo y pago fijo, no hay tentación de seguir gastando. Tarjetas de crédito son mejores para: gastos menores, necesidades de corto plazo, y cuando puedes pagar el saldo completo cada mes. Si ya tienes deuda de tarjeta con alto interés, un préstamo personal para consolidar suele ser mejor opción.'
      }
    ]
  }
]

export default function PreguntasFrecuentesPage() {
  // Gather all FAQs for schema
  const allFaqs = faqCategories.flatMap(cat => cat.questions)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'México',
        item: 'https://loansai.com/mx'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Preguntas Frecuentes',
        item: 'https://loansai.com/mx/preguntas-frecuentes'
      }
    ]
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <MexicoNavigation />
      <StickyApplyButton />
      
      <main className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6">
              <Link href="/mx" className="text-green-100 hover:text-white transition">
                ← Volver a México
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas Frecuentes sobre Préstamos en México
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Encuentra respuestas a las preguntas más comunes sobre préstamos personales, 
              requisitos, tasas, protecciones y más.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>¿No encuentras tu respuesta?</strong> Contacta a CONDUSEF al 
                55 5340 0999 (Ciudad de México) o 800 999 8080 (resto del país), 
                o visita{' '}
                <a 
                  href="https://www.condusef.gob.mx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700"
                >
                  www.condusef.gob.mx
                </a>
              </p>
            </div>

            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-green-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition"
                    >
                      <summary className="font-semibold text-lg cursor-pointer text-green-900">
                        {faq.q}
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Solicitar tu Préstamo?
              </h2>
              <p className="text-xl mb-6 text-green-100">
                Ahora que conoces los detalles, compara ofertas de prestamistas regulados.
              </p>
              <Link
                href="/mx/solicitar"
                className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                Solicitar Préstamo Ahora
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/mx/estados"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Ver préstamos por estado →
              </Link>
              {' | '}
              <Link
                href="/mx/ciudades"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Ver préstamos por ciudad →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
