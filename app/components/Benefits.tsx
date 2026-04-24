export default function Benefits() {
  const kpis = [
    { name: "MRR / ARR", description: "Ingresos recurrentes mensuales y anuales" },
    { name: "Gross Margin", description: "Margen bruto sobre ventas" },
    { name: "Burn Rate", description: "Tasa de consumo de capital mensual" },
    { name: "Runway", description: "Meses de operación con capital actual" },
    { name: "Rule of 40", description: "Crecimiento + margen de rentabilidad" },
    { name: "OpEx por categoría", description: "Desglose de gastos operativos" },
    { name: "Crecimiento MoM / YoY", description: "Variación mes a mes y año a año" },
    { name: "CAC Payback", description: "Recuperación del costo de adquisición" },
  ];

  return (
    <section id="kpis" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            KPIs y métricas visibles desde tu dashboard
          </h2>
          <p className="mt-4 text-lg text-muted">
            CFO-grade analysis a partir de tu estado de resultados. Las métricas que
            realmente importan para tomar decisiones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.name}
              className="bg-background rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-base font-bold text-primary mb-1">
                {kpi.name}
              </h3>
              <p className="text-sm text-muted">{kpi.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          * Algunas métricas como CAC Payback dependen de la disponibilidad de datos en tu P&G.
        </p>
      </div>
    </section>
  );
}
