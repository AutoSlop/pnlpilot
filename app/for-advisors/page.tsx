import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para Fractional CFOs y Advisors — LedgerPilot",
  description:
    "Escala tu práctica de advisory financiero. Maneja múltiples clientes, entrega reportes branded y reduce horas de análisis manual.",
};

export default function ForAdvisorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold text-primary tracking-wide">
                  Para Fractional CFOs y Advisors
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Escala tu práctica sin contratar{" "}
                <span className="text-primary">analistas junior</span>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Atiende más clientes, entrega reportes listos para board updates
                en minutos y mantén un proceso consistente para cada empresa.
                Your FP&A team, without the headcount.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#demo"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border-2 border-border px-8 py-3.5 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Ver planes
                </Link>
              </div>
            </div>

            {/* Stats block */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">10x</p>
                  <p className="text-sm text-muted mt-1">Más rápido que Excel manual</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">10</p>
                  <p className="text-sm text-muted mt-1">Empresas por plan Advisor</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">&lt;10 min</p>
                  <p className="text-sm text-muted mt-1">De archivo a dashboard</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-secondary">White-label</p>
                  <p className="text-sm text-muted mt-1">Reportes con tu marca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for advisors */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Diseñado para tu flujo de trabajo
            </h2>
            <p className="mt-4 text-lg text-muted">
              No es otro dashboard genérico. Es la herramienta que un fractional
              CFO necesita para escalar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Manejo multi-cliente
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Gestiona hasta 10 empresas con el plan Advisor o 30 con Firm.
                Cada cliente con su propio dashboard, escenarios y commentary.
                Un solo login, múltiples clientes.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reportes white-label
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Personaliza reportes con tu marca para entregar a clientes.
                Exporta a PDF o Notion con branding profesional. Tus clientes
                ven tu marca, no la nuestra.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Board updates en minutos
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Genera commentary ejecutivo listo para presentaciones a
                directorio o inversionistas. De archivo a reporte profesional
                sin horas de formateo manual.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Escala sin contratar
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Proceso consistente y repetible para cada empresa. No necesitas
                copiar plantillas ni adaptar fórmulas. Cada nuevo cliente es
                subir un archivo y validar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              ¿Para quién es LedgerPilot?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Fractional CFOs y boutiques de advisory
              </h3>
              <ul className="space-y-3">
                {[
                  "Atiende más clientes sin contratar analistas junior",
                  "Entrega reportes listos para board updates en minutos",
                  "Proceso consistente y repetible para cada empresa",
                  "White-label para entregar con tu marca",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Founders y COOs sin equipo financiero
              </h3>
              <ul className="space-y-3">
                {[
                  "Visibilidad financiera sin expertise de CFO",
                  "Dashboards claros para tomar mejores decisiones",
                  "Escenarios para evaluar decisiones antes de ejecutar",
                  "De archivo a dashboard en minutos, no semanas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Empieza a escalar tu práctica hoy
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Te mostramos cómo LedgerPilot transforma tu flujo de trabajo.
            Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-3.5 text-base font-semibold hover:bg-white/90 transition-colors"
            >
              Solicitar demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Ver pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
