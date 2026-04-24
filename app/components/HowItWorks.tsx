export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sube tu P&G",
      description:
        "Arrastra tu archivo Excel o CSV. Nuestro parser con IA mapea automáticamente las líneas de tu estado de resultados y te pide confirmar antes de avanzar.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Revisa tu dashboard",
      description:
        "En segundos obtienes KPIs financieros clave, gráficos de tendencia y comparativos. Todo listo para analizar sin configuración manual.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Presenta y decide",
      description:
        "Genera escenarios de sensibilidad, obtén commentary ejecutivo con IA y exporta reportes listos para board updates en PDF o Notion.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m10.5-9l-1.875 1.875M16.5 6l-2.625 2.625M12.75 3.75l-1.875 1.875" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            De archivo a dashboard en 3 pasos
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sin implementaciones largas. Sin consultores. Sin curva de
            aprendizaje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <span className="text-sm font-bold text-secondary">
                  PASO {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
