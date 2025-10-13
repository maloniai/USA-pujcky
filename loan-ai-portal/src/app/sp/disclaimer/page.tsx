import type { Metadata } from 'next'
import Link from 'next/link'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aviso Legal – LoansAI España',
  description: 'Aviso legal de LoansAI España. Información importante sobre nuestros servicios, responsabilidades y limitaciones.',
  robots: 'index, follow',
}

export default function DisclaimerPage() {
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
                <CardTitle className="text-3xl">Aviso Legal</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Este sitio web es operado por LoansAI España, un servicio de comparación de préstamos que 
                    conecta a consumidores con prestamistas autorizados por el Banco de España.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-700"><strong>Nombre de la empresa:</strong> LoansAI España</p>
                    <p className="text-gray-700"><strong>Dirección:</strong> [Dirección completa]</p>
                    <p className="text-gray-700"><strong>CIF:</strong> [Número de CIF]</p>
                    <p className="text-gray-700"><strong>Email:</strong> info@loansai.com</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Naturaleza del Servicio</h2>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                    <p className="text-gray-900 font-semibold mb-2">⚠️ AVISO IMPORTANTE</p>
                    <p className="text-gray-700 leading-relaxed">
                      LoansAI España NO es un prestamista, NO es un intermediario de crédito, y NO toma decisiones 
                      sobre préstamos. Somos un servicio de comparación y marketing de afiliados que conecta a 
                      usuarios con prestamistas autorizados.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Lo que hacemos:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Proporcionar información comparativa sobre productos de préstamo</li>
                    <li>Facilitar conexiones entre consumidores y prestamistas autorizados</li>
                    <li>Ofrecer contenido educativo sobre préstamos personales</li>
                    <li>Mantener una plataforma segura para comparaciones de préstamos</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Lo que NO hacemos:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Emitir préstamos o proporcionar financiación directa</li>
                    <li>Tomar decisiones de aprobación o rechazo de préstamos</li>
                    <li>Establecer términos, tasas de interés o condiciones de préstamo</li>
                    <li>Garantizar la aprobación de solicitudes de préstamo</li>
                    <li>Actuar como intermediario de crédito regulado</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Compensación por Afiliados</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    LoansAI España recibe compensación de los prestamistas cuando los usuarios completan 
                    solicitudes exitosas a través de nuestra plataforma. Esta compensación puede tomar las 
                    siguientes formas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Comisión por referencia exitosa</li>
                    <li>Pago por clic o por formulario completado</li>
                    <li>Porcentaje del monto del préstamo (pagado por el prestamista, no por usted)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Esta compensación NO afecta el costo del préstamo para usted. Los prestamistas pagan nuestras 
                    comisiones, no los consumidores. Nuestro servicio es completamente gratuito para los usuarios.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Sin Garantía de Aprobación</h2>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>NO GARANTIZAMOS:</strong> La aprobación de ninguna solicitud de préstamo. Las 
                      decisiones de préstamo las toman exclusivamente los prestamistas individuales según sus 
                      propios criterios de suscripción, que pueden incluir verificación de crédito, ingresos, 
                      empleo y otros factores. Completar un formulario en nuestro sitio web no constituye una 
                      oferta de préstamo ni garantiza la aprobación.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Verificación de Información</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Aunque hacemos esfuerzos razonables para mantener la información en este sitio web precisa 
                    y actualizada:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Las tasas, términos y ofertas pueden cambiar sin previo aviso</li>
                    <li>La información debe verificarse directamente con los prestamistas</li>
                    <li>No somos responsables de errores u omisiones</li>
                    <li>Los ejemplos representativos son ilustrativos, no garantizados</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Siempre debe leer y comprender completamente los términos y condiciones del prestamista 
                    antes de aceptar cualquier oferta de préstamo.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Impacto en el Score Crediticio</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Consultas iniciales:</strong> Completar formularios en LoansAI España generalmente 
                    NO afecta su score crediticio, ya que los prestamistas inicialmente realizan consultas "suaves" 
                    para preaprobación.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Solicitudes formales:</strong> Sin embargo, si procede con una solicitud formal con 
                    un prestamista, realizarán una consulta crediticia "completa" que PUEDE afectar temporalmente 
                    su score crediticio. Esto es una práctica estándar de la industria y lo realiza el prestamista, 
                    no LoansAI España.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Cumplimiento Regulatorio</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Todos los prestamistas en nuestra plataforma deben estar:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Autorizados y supervisados por el Banco de España</li>
                    <li>Cumpliendo con la Ley 16/2011 de Contratos de Crédito al Consumo</li>
                    <li>Adheridos a las directivas de la UE sobre crédito al consumo</li>
                    <li>Cumpliendo con el RGPD y las leyes españolas de protección de datos</li>
                    <li>Siguiendo las regulaciones de AML (Anti-Lavado de Dinero)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Sin embargo, no somos responsables de asegurar el cumplimiento continuo de los prestamistas 
                    con todas las regulaciones aplicables.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Advertencia de Riesgo Financiero</h2>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-gray-900 font-semibold mb-2">⚠️ ADVERTENCIA IMPORTANTE</p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Los préstamos son un compromiso financiero serio y deben usarse responsablemente:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Solo solicite lo que puede pagar razonablemente</li>
                      <li>El incumplimiento puede resultar en cargos adicionales y daño crediticio</li>
                      <li>Puede enfrentar acción legal por falta de pago</li>
                      <li>Su hogar u otros activos pueden estar en riesgo si el préstamo está garantizado</li>
                      <li>Considere alternativas antes de solicitar un préstamo</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Ejemplo Representativo</h2>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-gray-900 font-semibold mb-2">Ejemplo Representativo de Préstamo:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Préstamo de 10,000 € pagadero en 36 meses
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• TAE Representativa: 7.5% - 25.0%</li>
                      <li>• Cuota mensual: Aproximadamente 310 € - 390 €</li>
                      <li>• Monto total a devolver: Aproximadamente 11,160 € - 14,040 €</li>
                      <li>• Puede aplicarse comisión de apertura del 0% - 3%</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">
                      Este es solo un ejemplo ilustrativo. Las tasas reales, términos y costos variarán según 
                      el prestamista y su perfil crediticio individual. No todos los solicitantes califican 
                      para las tasas más bajas.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Enlaces a Terceros</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestro sitio web puede contener enlaces a sitios web de terceros (prestamistas). No somos 
                    responsables del contenido, políticas de privacidad o prácticas de estos sitios externos. 
                    Le recomendamos que lea los términos y políticas de privacidad de cualquier sitio de terceros 
                    que visite.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">11. Limitación de Responsabilidad</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En la medida máxima permitida por la ley española, LoansAI España no será responsable de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Decisiones de préstamo tomadas por prestamistas</li>
                    <li>Términos, tasas o condiciones ofrecidas por prestamistas</li>
                    <li>Disputas entre usted y los prestamistas</li>
                    <li>Pérdidas financieras resultantes de solicitudes de préstamo</li>
                    <li>Exactitud de la información proporcionada por prestamistas</li>
                    <li>Cambios en las ofertas de préstamo después de la referencia</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">12. Derecho a Cancelar</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Según la ley española de crédito al consumo, tiene derecho a cancelar un contrato de 
                    préstamo dentro de los 14 días siguientes a su firma. Este derecho se ejerce con el 
                    prestamista, no con LoansAI España.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Para información específica sobre cómo ejercer este derecho, consulte directamente con 
                    su prestamista.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">13. Quejas y Reclamaciones</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tiene una queja sobre nuestro servicio, contáctenos en:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-700"><strong>Email:</strong> complaints@loansai.com</p>
                    <p className="text-gray-700"><strong>Tiempo de respuesta:</strong> Dentro de 15 días laborables</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Si tiene una queja sobre un prestamista o un préstamo, debe contactar directamente al 
                    prestamista. También puede contactar al Servicio de Reclamaciones del Banco de España si 
                    no está satisfecho con la respuesta del prestamista.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">14. Modificaciones a Este Aviso</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de actualizar o modificar este Aviso Legal en cualquier momento 
                    sin previo aviso. Su uso continuado del sitio web después de dichos cambios constituye su 
                    aceptación del Aviso Legal modificado.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">15. Contacto</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para preguntas sobre este Aviso Legal, contáctenos:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> legal@loansai.com</p>
                    <p className="text-gray-700"><strong>Dirección:</strong> LoansAI España, [Dirección completa]</p>
                  </div>
                </section>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-8">
                  <p className="text-sm text-gray-700">
                    <strong>Última actualización:</strong> Enero 2025. Por favor revise este Aviso Legal 
                    periódicamente para estar informado de cualquier cambio. Su uso continuado de este sitio 
                    web constituye su aceptación de este Aviso Legal y cualquier actualización del mismo.
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
