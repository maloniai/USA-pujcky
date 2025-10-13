export default function ColombiaDisclosure() {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-sm text-gray-700">
      <h3 className="font-bold text-gray-900 mb-4 text-base">
        📋 Divulgación de Información y Avisos Importantes
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Naturaleza del Servicio</h4>
          <p>
            LoansAI Colombia es un servicio de comparación y referencia de préstamos personales.
            No somos un prestamista, banco o institución financiera. No otorgamos, financiamos
            ni serviciamos préstamos directamente. Actuamos exclusivamente como intermediario
            para conectar a usuarios con prestamistas licenciados y regulados.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Regulación y Supervisión</h4>
          <p>
            Todos los prestamistas presentados en nuestra plataforma están:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Licenciados y registrados ante la Superintendencia Financiera de Colombia</li>
            <li>Supervisados por el Banco de la República de Colombia</li>
            <li>Obligados a cumplir con la Ley 1328 de 2009 de Protección al Consumidor Financiero</li>
            <li>Sujetos a límites de tasa de interés establecidos por las autoridades (tasa de usura)</li>
            <li>Regulados bajo normas de prevención de lavado de activos (SARLAFT)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Información sobre Costos y Tasas</h4>
          <p>
            <strong>Tasa de Interés Promedio:</strong> Las tasas de interés varían significativamente según:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Su historial crediticio en DataCrédito, TransUnion u otras centrales de riesgo</li>
            <li>Monto del préstamo solicitado</li>
            <li>Plazo de financiamiento elegido</li>
            <li>Ingresos comprobables y estabilidad laboral</li>
            <li>Políticas individuales de cada prestamista</li>
          </ul>
          <p className="mt-2">
            <strong>Rango típico:</strong> 18% - 48% EA (Efectivo Anual). Las tasas mostradas son
            informativas y pueden variar. Cada prestamista le proporcionará la tasa específica
            aplicable a su solicitud antes de cualquier compromiso. La tasa de interés no puede
            exceder la tasa de usura certificada mensualmente por la Superintendencia Financiera.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Compensación y Afiliaciones</h4>
          <p>
            LoansAI recibe compensación económica de los prestamistas cuando un usuario:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Completa una solicitud a través de nuestra plataforma</li>
            <li>Es aprobado y acepta una oferta de préstamo</li>
            <li>Recibe el desembolso del préstamo</li>
          </ul>
          <p className="mt-2">
            Esta compensación puede influir en el orden y prominencia con que se presentan los
            prestamistas, pero <strong>nunca</strong> afecta los términos, tasas o condiciones
            que cada prestamista ofrece individualmente. El uso de nuestro servicio de comparación
            es <strong>completamente gratuito</strong> para el consumidor y no incrementa el costo
            del préstamo.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Protección de Datos Personales</h4>
          <p>
            El tratamiento de sus datos personales se realiza conforme a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Ley 1581 de 2012 de Protección de Datos Personales</li>
            <li>Decreto 1377 de 2013 (reglamentario de la Ley 1581)</li>
            <li>Circular Externa 002 de 2015 de la Superintendencia de Industria y Comercio</li>
            <li>Principios de legalidad, finalidad, libertad, veracidad y transparencia</li>
          </ul>
          <p className="mt-2">
            Su información se comparte únicamente con prestamistas seleccionados que cumplen con
            nuestros estándares de privacidad y seguridad. Usted tiene derecho a conocer, actualizar,
            rectificar y suprimir sus datos. Consulte nuestra{' '}
            <a href="/co/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
              Política de Privacidad
            </a>
            {' '}para más información.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Ejemplo Representativo</h4>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-2">
            <p className="font-semibold mb-2">Ejemplo ilustrativo de un préstamo personal:</p>
            <ul className="space-y-1 text-sm">
              <li>• Monto del préstamo: $5,000,000 COP</li>
              <li>• Plazo: 12 meses</li>
              <li>• Tasa de interés mensual: 2.5%</li>
              <li>• Tasa de interés E.A.: 34.49%</li>
              <li>• Pago mensual aproximado: $474,600 COP</li>
              <li>• Total a pagar: $5,695,200 COP</li>
              <li>• Intereses totales: $695,200 COP</li>
            </ul>
            <p className="text-xs mt-3 text-gray-600">
              *Este ejemplo es meramente ilustrativo. Los términos reales dependen del prestamista
              y su perfil crediticio. Fecha de cálculo: {new Date().toLocaleDateString('es-CO')}.
              No incluye seguros opcionales ni otros cargos adicionales que puedan aplicar.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Derechos del Usuario</h4>
          <p>
            Como consumidor financiero en Colombia, usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Recibir información clara, veraz, suficiente, oportuna y verificable</li>
            <li>Conocer la tasa de interés efectiva anual y todos los costos del crédito</li>
            <li>Liquidar anticipadamente su obligación sin penalización</li>
            <li>Presentar reclamaciones ante la entidad financiera y la Superintendencia Financiera</li>
            <li>Acceder, conocer, actualizar y rectificar sus datos personales</li>
            <li>Ser tratado con respeto y dignidad</li>
            <li>Que no se le cobre suma alguna por concepto de cobranza extrajudicial</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>⚠️</span>
            Aviso Importante sobre Préstamos
          </h4>
          <p className="text-sm">
            <strong>Advertencia:</strong> Solicitar préstamos que no puede pagar puede afectar
            negativamente su historial crediticio y generar intereses de mora adicionales.
            Evalúe cuidadosamente su capacidad de pago antes de comprometerse. En caso de
            dificultades financieras, contacte inmediatamente a su prestamista para explorar
            opciones de reestructuración. Para asesoría gratuita y presentar quejas, contacte a la{' '}
            <a
              href="https://www.superfinanciera.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Superintendencia Financiera de Colombia
            </a>
            .
          </p>
        </div>

        <div className="text-center pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-600">
            Para consultas sobre transparencia, divulgaciones o quejas:{' '}
            <a href="mailto:legal@loansai.co" className="text-blue-600 hover:text-blue-700">
              legal@loansai.co
            </a>
            <br />
            Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}
