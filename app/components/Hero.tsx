export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">
                Your FP&A team, without the headcount
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              De tu P&G en Excel a decisiones financieras{" "}
              <span className="text-primary">en minutos</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
              Sube tu estado de resultados en Excel o CSV y obtén dashboards,
              escenarios de sensibilidad y commentary ejecutivo tipo CFO en menos
              de 10 minutos.
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

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted">
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

          {/* Mockup visual: Excel/CSV → Mapeo → Dashboard */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Step 1: Excel file */}
              <div className="bg-background rounded-xl border border-border p-4 shadow-sm max-w-[260px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">P&G_Q1_2026.xlsx</p>
                    <p className="text-[10px] text-muted">Estado de resultados</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px]"><span className="text-muted">Revenue</span><span className="font-mono text-foreground">$2,450,000</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-muted">COGS</span><span className="font-mono text-foreground">($980,000)</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-muted">Gross Profit</span><span className="font-mono text-foreground">$1,470,000</span></div>
                  <div className="flex justify-between text-[10px]"><span className="text-muted">OpEx</span><span className="font-mono text-foreground">($890,000)</span></div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="absolute top-[50%] left-[240px] -translate-y-1/2">
                <svg className="w-12 h-8 text-primary/40" viewBox="0 0 48 32" fill="none">
                  <path d="M4 16h32m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 2: Mapping validated */}
              <div className="absolute top-[-10px] left-[280px] bg-background rounded-xl border border-primary/30 p-4 shadow-sm w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-semibold text-primary">Mapeo validado</p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-muted">Revenue → Ingresos</span>
                    <svg className="w-3 h-3 text-primary ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-muted">COGS → Costo ventas</span>
                    <svg className="w-3 h-3 text-primary ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="text-muted">OpEx → Revisar</span>
                    <svg className="w-3 h-3 text-secondary ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" /></svg>
                  </div>
                </div>
              </div>

              {/* Step 3: Dashboard preview */}
              <div className="absolute top-[100px] left-[200px] bg-background rounded-xl border border-border p-4 shadow-lg w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-semibold text-foreground">Dashboard financiero</p>
                  <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-[8px] text-muted">Gross Margin</p>
                    <p className="text-sm font-bold text-primary">60%</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-[8px] text-muted">MRR</p>
                    <p className="text-sm font-bold text-primary">$204K</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-[8px] text-muted">Burn Rate</p>
                    <p className="text-sm font-bold text-foreground">$74K</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <p className="text-[8px] text-muted">Runway</p>
                    <p className="text-sm font-bold text-foreground">18 mo</p>
                  </div>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-8">
                  <div className="w-full bg-primary/20 rounded-sm" style={{height: '40%'}}></div>
                  <div className="w-full bg-primary/30 rounded-sm" style={{height: '55%'}}></div>
                  <div className="w-full bg-primary/40 rounded-sm" style={{height: '45%'}}></div>
                  <div className="w-full bg-primary/50 rounded-sm" style={{height: '70%'}}></div>
                  <div className="w-full bg-primary/60 rounded-sm" style={{height: '65%'}}></div>
                  <div className="w-full bg-primary rounded-sm" style={{height: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
