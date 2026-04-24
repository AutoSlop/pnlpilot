export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              Para fractional CFOs y SMBs de LATAM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            De tu P&G en Excel a decisiones financieras{" "}
            <span className="text-primary">en minutos</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
            Sube tu estado de resultados y obtén dashboards, escenarios de
            sensibilidad y commentary ejecutivo tipo CFO en menos de 10 minutos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Solicitar demo
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border-2 border-border px-8 py-3.5 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sin tarjeta de crédito
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Setup en 10 minutos
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Datos 100% seguros
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
