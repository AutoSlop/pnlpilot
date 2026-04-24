export default function UseCases() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Para quién es LedgerPilot?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Diseñado para profesionales que necesitan análisis financiero rápido
            y confiable, sin la complejidad de herramientas enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fractional CFOs */}
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Fractional CFOs y boutiques de advisory
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Atiende más clientes sin contratar analistas junior
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Entrega reportes listos para board updates en minutos
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Proceso consistente y repetible para cada empresa
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                White-label para entregar con tu marca
              </li>
            </ul>
          </div>

          {/* Founders / COOs */}
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Founders y COOs sin equipo financiero
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Visibilidad financiera sin expertise de CFO
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Dashboards claros para tomar mejores decisiones
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Escenarios para evaluar decisiones antes de ejecutar
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                De archivo a dashboard en minutos, no semanas
              </li>
            </ul>
          </div>
        </div>

        {/* No es para */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-foreground/[0.03] rounded-2xl p-6 border border-border">
            <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              No es para
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted">
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 text-muted/40 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Pre-seed sin revenue
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 text-muted/40 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Enterprise con equipo FP&A interno
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-5 w-5 text-muted/40 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Contabilidad de compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
