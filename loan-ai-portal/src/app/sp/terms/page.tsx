import type { Metadata } from 'next'
import Link from 'next/link'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Términos de Servicio – LoansAI España',
  description: 'Términos y condiciones de uso de LoansAI España. Lea nuestros términos de servicio antes de utilizar nuestra plataforma de comparación de préstamos.',
  robots: 'index, follow',
}

export default function TermsPage() {
  const lastUpdated = 'Enero 2025'

  return (
    <>
      <SpainNavigation />
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/sp" className="text-red-600 hover:underline text-sm">
                ← Volver a España
              </Link>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Términos de Servicio</CardTitle>
                <p className="text-sm text-gray-600 mt-2">Última actualización: {lastUpdated}</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Aceptación de Términos</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bienvenido a LoansAI España. Al acceder y utilizar este sitio web y nuestros servicios, 
                    usted acepta estar vinculado por estos Términos de Servicio, todas las leyes y regulaciones 
                    aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    LoansAI España es un servicio de comparación de préstamos que:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Proporciona información sobre productos de préstamo de prestamistas autorizados</li>
                    <li>Facilita comparaciones entre diferentes ofertas de préstamo</li>
                    <li>Conecta a los usuarios con prestamistas para solicitudes de préstamo</li>
                    <li>Ofrece contenido educativo sobre préstamos personales</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Nota importante:</strong> No somos un prestamista ni un intermediario de crédito. 
                    No tomamos decisiones de préstamo ni garantizamos la aprobación de préstamos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Elegibilidad</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para utilizar nuestros servicios, debe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Tener al menos 18 años de edad</li>
                    <li>Ser residente legal en España</li>
                    <li>Tener capacidad legal para celebrar contratos vinculantes</li>
                    <li>Proporcionar información precisa y veraz</li>
                    <li>No estar prohibido de usar el servicio por ley española</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Cuenta de Usuario</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Al crear una cuenta con nosotros, debe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Proporcionar información precisa, actual y completa</li>
                    <li>Mantener la seguridad de su contraseña y cuenta</li>
                    <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                    <li>Aceptar la responsabilidad por todas las actividades bajo su cuenta</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Divulgación de Afiliados</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    LoansAI España recibe compensación de los prestamistas cuando los usuarios completan 
                    solicitudes exitosas a través de nuestra plataforma. Esta relación de afiliado:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>No afecta las ofertas que mostramos</li>
                    <li>No influye en nuestras recomendaciones</li>
                    <li>Es gratuita para los usuarios finales</li>
                    <li>Cumple con todas las regulaciones de publicidad española y de la UE</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Uso Aceptable</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Usted acepta no:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Proporcionar información falsa o engañosa</li>
                    <li>Hacerse pasar por otra persona o entidad</li>
                    <li>Utilizar el servicio para fines ilegales</li>
                    <li>Intentar acceder a sistemas o datos no autorizados</li>
                    <li>Interferir con el funcionamiento del servicio</li>
                    <li>Recopilar datos de otros usuarios sin consentimiento</li>
                    <li>Usar el servicio para spam o marketing no solicitado</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Propiedad Intelectual</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El contenido, diseño, logotipos y materiales en este sitio web son propiedad de LoansAI 
                    España o están licenciados para nosotros. Están protegidos por derechos de autor español 
                    e internacional, marcas registradas y otras leyes de propiedad intelectual.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Usted no puede copiar, modificar, distribuir, vender o arrendar ninguna parte de nuestro 
                    servicio sin nuestro permiso previo por escrito.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Descargo de Responsabilidad</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nuestro servicio se proporciona "tal cual" y "según disponibilidad". No garantizamos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>La aprobación de solicitudes de préstamo</li>
                    <li>Tasas de interés específicas o términos de préstamo</li>
                    <li>La disponibilidad continua e ininterrumpida del servicio</li>
                    <li>La precisión completa de toda la información</li>
                    <li>Que el servicio esté libre de errores o virus</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Las decisiones de préstamo las toman exclusivamente los prestamistas individuales según 
                    sus propios criterios.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Limitación de Responsabilidad</h2>
                  <p className="text-gray-700 leading-relaxed">
                    En la medida máxima permitida por la ley española, LoansAI España no será responsable de 
                    ningún daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida 
                    de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida 
                    de datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de su uso del servicio.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Indemnización</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Usted acepta indemnizar y eximir de responsabilidad a LoansAI España, sus filiales, oficiales, 
                    directores, empleados y agentes de cualquier reclamo, demanda, pérdida, responsabilidad y 
                    gasto (incluyendo honorarios de abogados) que surjan de su uso del servicio, violación de 
                    estos términos o violación de cualquier derecho de terceros.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">11. Ley Aplicable</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener 
                    en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja de estos 
                    términos estará sujeta a la jurisdicción exclusiva de los tribunales españoles.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">12. Modificaciones</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. 
                    Si una revisión es material, proporcionaremos al menos 30 días de aviso antes de que los 
                    nuevos términos entren en vigencia. Su uso continuado del servicio después de dichos cambios 
                    constituye su aceptación de los nuevos términos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">13. Terminación</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Podemos terminar o suspender su acceso a nuestro servicio inmediatamente, sin previo aviso 
                    ni responsabilidad, por cualquier motivo, incluyendo sin limitación si incumple estos Términos.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Todas las disposiciones de los Términos que por su naturaleza deban sobrevivir a la 
                    terminación sobrevivirán a la terminación, incluyendo sin limitación, disposiciones de 
                    propiedad, descargos de garantía, indemnización y limitaciones de responsabilidad.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">14. Divisibilidad</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Si alguna disposición de estos términos se considera inválida o inaplicable, esa disposición 
                    se limitará o eliminará en la medida mínima necesaria, y las disposiciones restantes de estos 
                    términos continuarán en pleno vigor y efecto.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">15. Contacto</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tiene preguntas sobre estos Términos de Servicio, por favor contáctenos:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> legal@loansai.com</p>
                    <p className="text-gray-700"><strong>Correo Postal:</strong> LoansAI España, [Dirección]</p>
                  </div>
                </section>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-8">
                  <p className="text-sm text-gray-700">
                    <strong>Aviso importante:</strong> Al utilizar este servicio, usted reconoce que ha leído, 
                    entendido y acepta estar vinculado por estos Términos de Servicio, así como por nuestra 
                    Política de Privacidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SpainFooter />
    </>
  )
}
