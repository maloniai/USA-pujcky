import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad – Loan-Platform.com Colombia',
  description: 'Política de privacidad y protección de datos personales conforme a la Ley 1581 de 2012 (Habeas Data) y Ley 1266 de 2008. Cómo protegemos su información.',
  alternates: {
    canonical: 'https://loansai.com/co/privacidad',
  },
}

export default function PrivacidadPage() {
  const lastUpdated = 'Octubre 2025'

  return (
    <>
      <ColombiaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">Colombia</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Política de Privacidad</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
            <p className="text-gray-600 mb-8">Última actualización: {lastUpdated}</p>

            <div className="prose max-w-none space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Introducción</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Loan-Platform.com (operado por Maloni s.r.o.) se compromete a proteger su privacidad 
                    y sus datos personales conforme a la legislación colombiana, específicamente:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ley 1581 de 2012</strong> - Protección de Datos Personales (Habeas Data)</li>
                    <li><strong>Ley 1266 de 2008</strong> - Habeas Data Financiero</li>
                    <li><strong>Decreto 1377 de 2013</strong> - Reglamentación de la Ley 1581</li>
                    <li><strong>Ley 1273 de 2009</strong> - Protección de la información y los datos</li>
                  </ul>
                  <p>
                    Esta política explica qué información personal recopilamos, cómo la usamos, 
                    con quién la compartimos, y sus derechos respecto a sus datos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Información que Recopilamos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">2.1 Información Proporcionada por Usted</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Nombre completo y cédula de ciudadanía</li>
                      <li>Correo electrónico y número de teléfono</li>
                      <li>Dirección residencial y ciudad</li>
                      <li>Información de empleo e ingresos</li>
                      <li>Monto y propósito del préstamo solicitado</li>
                      <li>Información financiera adicional según sea necesario</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2.2 Información Recopilada Automáticamente</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Dirección IP y ubicación geográfica</li>
                      <li>Tipo de navegador y dispositivo</li>
                      <li>Páginas visitadas y tiempo de navegación</li>
                      <li>Cookies y tecnologías similares</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Cómo Usamos su Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>Utilizamos sus datos personales para los siguientes propósitos:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Comparación de préstamos:</strong> Presentar ofertas relevantes según su perfil</li>
                    <li><strong>Conexión con prestamistas:</strong> Enviar su solicitud a prestamistas regulados</li>
                    <li><strong>Comunicación:</strong> Responder consultas y proporcionar soporte</li>
                    <li><strong>Mejora del servicio:</strong> Analizar uso y optimizar la plataforma</li>
                    <li><strong>Cumplimiento legal:</strong> Cumplir obligaciones legales y regulatorias</li>
                    <li><strong>Prevención de fraude:</strong> Detectar y prevenir actividades fraudulentas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Compartir su Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>Podemos compartir su información personal con:</p>
                  <div>
                    <h3 className="font-semibold mb-2">4.1 Prestamistas Regulados</h3>
                    <p className="text-sm">
                      Cuando solicita comparar préstamos, compartimos su información con entidades 
                      financieras reguladas por la Superintendencia Financiera que puedan ofrecerle 
                      productos según su perfil. <strong>Usted autoriza explícitamente este compartir 
                      al enviar su solicitud.</strong>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4.2 Proveedores de Servicios</h3>
                    <p className="text-sm">
                      Trabajamos con proveedores terceros que nos ayudan a operar la plataforma 
                      (hosting, análisis, comunicaciones). Estos proveedores tienen acceso limitado 
                      a sus datos solo para realizar servicios específicos.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4.3 Autoridades y Cumplimiento Legal</h3>
                    <p className="text-sm">
                      Podemos divulgar información si la ley lo requiere o para proteger nuestros 
                      derechos legales.
                    </p>
                  </div>
                  <p className="text-sm bg-yellow-50 p-3 rounded">
                    <strong>NO vendemos</strong> su información personal a terceros para fines 
                    de marketing no relacionados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Sus Derechos bajo la Ley Colombiana</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>La Ley 1581 de 2012 le otorga los siguientes derechos:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Derecho de Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                    <li><strong>Derecho de Actualización:</strong> Actualizar datos inexactos o incompletos</li>
                    <li><strong>Derecho de Rectificación:</strong> Corregir información errónea</li>
                    <li><strong>Derecho de Supresión:</strong> Solicitar eliminación cuando no haya obligación legal de conservar</li>
                    <li><strong>Derecho de Revocación:</strong> Retirar consentimiento para tratamiento</li>
                    <li><strong>Derecho a Presentar Quejas:</strong> Ante la Superintendencia de Industria y Comercio</li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-3 rounded mt-4">
                    Para ejercer estos derechos, contáctenos en: <strong>privacy@loansai.com</strong> 
                    o escriba a nuestro domicilio. Responderemos dentro de 10 días hábiles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Seguridad de Datos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>Implementamos medidas técnicas y organizativas para proteger sus datos:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Cifrado SSL/TLS para transmisión de datos</li>
                    <li>Almacenamiento seguro en servidores protegidos</li>
                    <li>Control de acceso restringido a personal autorizado</li>
                    <li>Auditorías de seguridad periódicas</li>
                    <li>Procedimientos de respuesta a incidentes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Retención de Datos</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Conservamos sus datos personales durante el tiempo necesario para los fines 
                    descritos o según lo requiera la ley colombiana. Generalmente:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mt-3">
                    <li>Datos de solicitud activa: Hasta completar el proceso o 90 días</li>
                    <li>Datos de clientes: 5 años después de la última interacción</li>
                    <li>Datos financieros: Según requisitos de la Superintendencia Financiera</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Cookies y Tecnologías de Seguimiento</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    Usamos cookies para mejorar su experiencia. Puede gestionar preferencias de 
                    cookies en su navegador. Tipos de cookies que usamos:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Esenciales:</strong> Necesarias para funcionamiento del sitio</li>
                    <li><strong>Análisis:</strong> Para entender cómo usa el sitio (Google Analytics)</li>
                    <li><strong>Funcionalidad:</strong> Para recordar sus preferencias</li>
                    <li><strong>Marketing:</strong> Para publicidad relevante (con su consentimiento)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Menores de Edad</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos 
                    intencionalmente información de menores. Si descubrimos que hemos recopilado datos 
                    de un menor, los eliminaremos inmediatamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Cambios a esta Política</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Podemos actualizar esta política ocasionalmente. Los cambios significativos se 
                    notificarán por correo electrónico o mediante aviso prominente en el sitio. 
                    La fecha de "Última actualización" al inicio indica la versión vigente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Contacto</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    Para preguntas sobre esta política o ejercer sus derechos:
                  </p>
                  <div className="bg-blue-50 p-4 rounded space-y-2 text-sm">
                    <p><strong>Email:</strong> privacy@loansai.com</p>
                    <p><strong>Responsable de Datos:</strong> Data Protection Officer</p>
                    <p><strong>Razón Social:</strong> Maloni s.r.o.</p>
                    <p><strong>Superintendencia SIC:</strong> Para quejas sobre tratamiento de datos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
