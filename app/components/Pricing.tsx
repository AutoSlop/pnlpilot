export default function Pricing() {
  const plans = [
    {
      name: "Solo",
      price: "49",
      description: "Para consultores independientes con un cliente.",
      features: [
        "1 empresa",
        "Carga de P&G en Excel/CSV",
        "Dashboard automático con KPIs",
        "Escenarios de sensibilidad",
        "CFO commentary con IA",
        "Exportación a PDF",
        "Soporte por email",
      ],
      cta: "Solicitar demo",
      popular: false,
    },
    {
      name: "Advisor",
      price: "199",
      description: "Para fractional CFOs que atienden múltiples clientes.",
      features: [
        "Hasta 10 empresas",
        "Todo lo de Solo, más:",
        "Comparativos entre empresas",
        "Exportación a Notion",
        "Reportes white-label",
        "Templates personalizados",
        "Soporte prioritario",
      ],
      cta: "Solicitar demo",
      popular: true,
    },
    {
      name: "Firm",
      price: "499",
      description: "Para firmas de advisory y equipos financieros.",
      features: [
        "Hasta 30 empresas",
        "Todo lo de Advisor, más:",
        "Usuarios ilimitados del equipo",
        "API access",
        "SSO / SAML",
        "Onboarding dedicado",
        "SLA garantizado",
      ],
      cta: "Contactar ventas",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Planes simples, sin sorpresas
          </h2>
          <p className="mt-4 text-lg text-muted">
            Elige el plan que se adapte al tamaño de tu práctica. Todos
            incluyen las funcionalidades core.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 ${
                plan.popular
                  ? "border-primary bg-surface shadow-xl shadow-primary/10 scale-105"
                  : "border-border bg-surface"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-muted">USD</span>
                <span className="text-5xl font-bold text-foreground ml-1">
                  {plan.price}
                </span>
                <span className="text-muted">/mes</span>
              </div>

              <a
                href="#demo"
                className={`block w-full text-center rounded-full py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <svg
                      className="h-5 w-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
