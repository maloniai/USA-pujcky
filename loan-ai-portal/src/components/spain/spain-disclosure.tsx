export default function SpainDisclosure() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
        <span className="text-2xl">ℹ️</span>
        Información Importante de Divulgación
      </h3>
      <div className="text-sm text-amber-800 space-y-2">
        <p>
          <strong>Servicio de Comparación:</strong> LoansAI es un servicio de comparación de préstamos. 
          No somos un prestamista directo. Conectamos a usuarios con prestamistas licenciados y supervisados 
          por el Banco de España.
        </p>
        <p>
          <strong>Divulgación de Afiliados:</strong> Recibimos compensación de los prestamistas cuando los 
          usuarios completan solicitudes a través de nuestra plataforma. Esta compensación puede influir en 
          el orden y la forma en que aparecen los productos en nuestro sitio, pero no afecta nuestra 
          evaluación editorial ni recomendaciones.
        </p>
        <p>
          <strong>TAE Representativa:</strong> Las tasas de interés varían entre 7% y 27% TAE según el 
          prestamista, monto del préstamo, plazo y perfil crediticio del solicitante. Todos los préstamos 
          están sujetos a aprobación crediticia.
        </p>
        <p>
          <strong>Regulación:</strong> Todos los prestamistas en nuestra red están regulados y supervisados 
          por el Banco de España y cumplen con la Ley 16/2011 de crédito al consumo y normativas europeas aplicables.
        </p>
      </div>
    </div>
  )
}
