export default function UseCases() {
  const cases = [
    {
      title: "Fractional CFOs",
      description:
        "Atiende más clientes simultáneamente con reportes automatizados. Dedica tu tiempo a dar consejos estratégicos en vez de formatear Excel.",
      tags: ["Multi-empresa", "Reportes automáticos", "Escalar práctica"],
    },
    {
      title: "SMBs en crecimiento",
      description:
        "Obtén visibilidad financiera de nivel enterprise sin contratar un CFO full-time. Dashboards claros para tomar mejores decisiones.",
      tags: ["Autoservicio", "Dashboards", "Sin expertise financiero"],
    },
    {
      title: "Firmas de advisory",
      description:
        "Estandariza el análisis financiero de tu portafolio de clientes. Un proceso consistente que escala con tu equipo.",
      tags: ["Equipos", "Consistencia", "Portafolio"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Casos de uso
          </h2>
          <p className="mt-4 text-lg text-muted">
            PnLPilot se adapta a diferentes perfiles de profesionales
            financieros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
