export default function Benefits() {
  const benefits = [
    {
      metric: "10x",
      title: "Más rápido que el análisis manual",
      description:
        "Lo que antes tomaba un día completo de trabajo en Excel, ahora se resuelve en minutos. Más tiempo para asesorar, menos para formatear.",
    },
    {
      metric: "3x",
      title: "Más clientes sin contratar",
      description:
        "Escala tu práctica de fractional CFO atendiendo más empresas sin necesidad de analistas junior. La herramienta hace el trabajo pesado.",
    },
    {
      metric: "100%",
      title: "Reportes listos para boards",
      description:
        "Genera commentary ejecutivo y exporta reportes profesionales que puedes presentar directamente en board updates o reuniones de inversión.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Diseñado para fractional CFOs que quieren escalar
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              PnLPilot elimina las horas de trabajo manual en Excel para que
              puedas enfocarte en lo que realmente importa: asesorar a tus
              clientes con insights financieros de alto nivel.
            </p>
            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Solicitar demo
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-primary shrink-0">
                    {benefit.metric}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
