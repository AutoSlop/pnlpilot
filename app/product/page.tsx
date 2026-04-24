import type { Metadata } from "next";
import Link from "next/link";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Scenarios from "../components/Scenarios";
import Comparison from "../components/Comparison";

export const metadata: Metadata = {
  title: "Producto — LedgerPilot",
  description:
    "De tu P&G en Excel a dashboards, escenarios de sensibilidad y commentary ejecutivo. Conoce cómo funciona LedgerPilot.",
};

export default function ProductPage() {
  return (
    <>
      {/* Product hero */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">
                Producto V1
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Software financiero para ir de archivo a{" "}
              <span className="text-primary">decisiones</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Sube tu estado de resultados en Excel o CSV y obtén dashboards con
              KPIs, escenarios de sensibilidad y commentary ejecutivo tipo CFO.
              Sin implementaciones largas. Sin curva de aprendizaje.
            </p>
            <div className="mt-8">
              <Link
                href="/#demo"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 4 steps */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              De archivo a dashboard en 4 pasos
            </h2>
            <p className="mt-4 text-lg text-muted">
              Sin implementaciones largas. Sin consultores. Sin curva de aprendizaje.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Sube tu P&G en Excel o CSV",
                description: "Arrastra tu archivo con el estado de resultados. Soportamos múltiples formatos y estructuras contables.",
              },
              {
                number: "02",
                title: "Normalizamos cuentas con mapeo asistido",
                description: "Nuestro parser identifica y clasifica automáticamente las líneas de tu P&G, mapeando cada cuenta a categorías estándar.",
              },
              {
                number: "03",
                title: "Validas las cuentas clave",
                description: "Confirmas el mapeo contable antes de avanzar. Tú decides qué está correcto. Confianza desde el primer paso.",
              },
              {
                number: "04",
                title: "Obtienes dashboard, escenarios y commentary",
                description: "Dashboard automático con KPIs, motor de escenarios de sensibilidad y commentary ejecutivo listo para exportar.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative bg-surface rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
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

      <Features />
      <Benefits />
      <Scenarios />
      <Comparison />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sube tu P&G. Obtén tu primer dashboard en minutos.
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            From P&L to decisions in 5 minutes.
          </p>
          <Link
            href="/#demo"
            className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-3.5 text-base font-semibold hover:bg-white/90 transition-colors"
          >
            Solicitar demo
          </Link>
        </div>
      </section>
    </>
  );
}
