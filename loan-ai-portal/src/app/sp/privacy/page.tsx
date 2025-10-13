import type { Metadata } from 'next'
import Link from 'next/link'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Política de Privacidad – LoansAI España',
  description: 'Política de privacidad de LoansAI España. Cómo recopilamos, usamos y protegemos su información personal según el RGPD.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
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
                <CardTitle className="text-3xl">Política de Privacidad</CardTitle>
                <p className="text-sm text-gray-600 mt-2">Última actualización: {lastUpdated}</p>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    LoansAI España ("nosotros", "nuestro" o "la Compañía") se compromete a proteger su privacidad 
                    y cumplir con el Reglamento General de Protección de Datos (RGPD) de la UE y la Ley Orgánica 
                    3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD) de España.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su 
                    información cuando utiliza nuestro sitio web y servicios de comparación de préstamos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Información que Recopilamos</h2>
                  <h3 className="text-xl font-semibold mb-3">2.1 Información Personal</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cuando utiliza nuestros servicios, podemos recopilar:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Datos de identificación: nombre completo, fecha de nacimiento, DNI/NIE</li>
                    <li>Información de contacto: dirección, correo electrónico, número de teléfono</li>
                    <li>Información financiera: ingresos, situación laboral, historial crediticio</li>
                    <li>Datos de préstamo: monto solicitado, propósito, plazo preferido</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">2.2 Información Automática</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recopilamos automáticamente cierta información cuando visita nuestro sitio:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Dirección IP y ubicación aproximada</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Fuente de referencia</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Cómo Usamos Su Información</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizamos su información personal para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Proporcionar servicios de comparación de préstamos</li>
                    <li>Conectarle con prestamistas autorizados</li>
                    <li>Procesar sus solicitudes de préstamo</li>
                    <li>Comunicarnos con usted sobre ofertas y actualizaciones</li>
                    <li>Mejorar nuestros servicios y experiencia de usuario</li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Prevenir fraude y proteger la seguridad</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Compartir Información</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Compartimos su información personal solo en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Con prestamistas autorizados:</strong> Cuando envía una solicitud de préstamo</li>
                    <li><strong>Proveedores de servicios:</strong> Que nos ayudan a operar nuestro negocio</li>
                    <li><strong>Cumplimiento legal:</strong> Cuando lo requiere la ley o autoridades reguladoras</li>
                    <li><strong>Con su consentimiento:</strong> Cuando ha dado permiso explícito</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Sus Derechos bajo el RGPD</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Como residente de la UE/España, tiene los siguientes derechos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Derecho de acceso:</strong> Obtener una copia de sus datos personales</li>
                    <li><strong>Derecho de rectificación:</strong> Corregir información inexacta</li>
                    <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos</li>
                    <li><strong>Derecho de limitación:</strong> Restringir el procesamiento de sus datos</li>
                    <li><strong>Derecho de portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                    <li><strong>Derecho de oposición:</strong> Oponerse a ciertos procesamientos</li>
                    <li><strong>Derecho a retirar consentimiento:</strong> En cualquier momento</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Para ejercer estos derechos, contáctenos en <strong>privacy@loansai.com</strong>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Seguridad de Datos</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su 
                    información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
                    Esto incluye encriptación SSL de 256 bits, almacenamiento seguro y controles de acceso estrictos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Cookies y Tecnologías de Seguimiento</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizamos cookies y tecnologías similares para mejorar su experiencia. Puede controlar las 
                    cookies a través de la configuración de su navegador. Para más detalles, consulte nuestra 
                    Política de Cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Retención de Datos</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Retenemos su información personal solo durante el tiempo necesario para los fines descritos 
                    en esta política o según lo requiera la ley. Generalmente, esto es de 5-7 años para cumplir 
                    con requisitos regulatorios financieros.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Transferencias Internacionales</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Sus datos se procesan principalmente dentro del Espacio Económico Europeo (EEE). Si 
                    transferimos datos fuera del EEE, aseguramos salvaguardas apropiadas según el RGPD.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Privacidad de Menores</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente 
                    información personal de menores.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">11. Cambios a Esta Política</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios 
                    significativos por correo electrónico o mediante un aviso destacado en nuestro sitio web.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> privacy@loansai.com</p>
                    <p className="text-gray-700"><strong>Correo Postal:</strong> LoansAI España, [Dirección]</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    También puede presentar una queja ante la Agencia Española de Protección de Datos (AEPD) si 
                    cree que hemos procesado sus datos de manera incorrecta.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SpainFooter />
    </>
  )
}
