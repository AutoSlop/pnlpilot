export default function Trust() {
  const items = [
    {
      title: "Validación humana del mapeo",
      description:
        "Tú confirmas cada cuenta mapeada antes de que se procese. Nada avanza sin tu aprobación.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Tratamiento seguro de data financiera",
      description:
        "Tu información financiera se procesa con las mismas prácticas de seguridad que esperarías de cualquier plataforma fintech seria.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      title: "Encryption at-rest desde día 1",
      description:
        "Tus datos se almacenan encriptados. No se comparten con terceros ni se usan para entrenar modelos.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tu data financiera, protegida
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sabemos que la confianza se gana. Estos son nuestros compromisos
            desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-6 bg-surface rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Tratamos tu data financiera con el mismo rigor que esperarías de tu banco.
              Estamos construyendo las certificaciones formales — por ahora, nuestro compromiso
              es transparente y verificable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
