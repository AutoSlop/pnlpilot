export default function Scenarios() {
  const scenarios = [
    {
      question: "¿Qué pasa si subo precios 10%?",
      description:
        "Visualiza el impacto directo en revenue y márgenes, asumiendo elasticidad constante de demanda.",
      metric: "+10%",
      metricLabel: "Precio",
    },
    {
      question: "¿Qué pasa si crezco 20% MoM y CAC sube 30%?",
      description:
        "Modela escenarios de crecimiento acelerado contra incremento en costos de adquisición.",
      metric: "20/30",
      metricLabel: "Growth vs CAC",
    },
    {
      question: "¿Cuánto runway gano si reduzco OpEx 15%?",
      description:
        "Calcula el efecto de recortes operativos en la pista de operación con capital actual.",
      metric: "-15%",
      metricLabel: "OpEx",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Escenarios de decisión
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sensibilidad simple sobre datos reales de tu P&G. No forecasting
            complejo — respuestas claras a preguntas concretas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario) => (
            <div
              key={scenario.question}
              className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <div className="text-center">
                  <span className="text-lg font-bold block leading-tight">{scenario.metric}</span>
                  <span className="text-[8px] uppercase tracking-wider">{scenario.metricLabel}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {scenario.question}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
