export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            El gap entre tu contador y las decisiones financieras
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Tu contador maneja compliance. Pero entre los estados financieros y las decisiones
            estratégicas hay un vacío que hoy se llena con trabajo manual en Excel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Horas en Excel cada mes
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Formatear datos, armar gráficos, calcular KPIs manualmente. Trabajo repetitivo que
              consume tiempo que deberías dedicar a asesorar.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Análisis repetitivo sin escalar
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Cada nuevo cliente significa copiar plantillas, adaptar fórmulas y empezar de cero.
              No puedes atender más empresas sin contratar.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-500 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Herramientas caras o complejas
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Las plataformas de FP&A enterprise requieren meses de setup, integraciones y presupuestos
              que no tienen sentido para SMBs o prácticas independientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
