import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seguridad — LedgerPilot",
  description:
    "Cómo protegemos tu data financiera. Encryption at-rest, validación humana del mapeo, acceso controlado.",
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-primary tracking-wide">
                Seguridad y privacidad
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Tu data financiera,{" "}
              <span className="text-primary">protegida</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Sabemos que la confianza se gana. Estos son nuestros compromisos
              desde el primer día con cada dato que procesas en LedgerPilot.
            </p>
          </div>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Validación humana del mapeo
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Tú confirmas cada cuenta mapeada antes de que se procese. Nada avanza
                sin tu aprobación. El sistema sugiere, tú decides. Confianza
                antes que velocidad.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Tratamiento seguro de data financiera
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Tu información financiera se procesa con las mismas prácticas de
                seguridad que esperarías de cualquier plataforma fintech seria.
                Sin atajos. Sin excepciones.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Encryption at-rest desde día 1
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Tus datos se almacenan encriptados. No se comparten con terceros
                ni se usan para entrenar modelos. Tu data es tuya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed commitments */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
              Nuestros compromisos de seguridad
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Acceso controlado",
                  description: "Cada usuario accede únicamente a los datos de sus empresas asignadas. No hay acceso cruzado entre clientes ni exposición de información a usuarios no autorizados.",
                },
                {
                  title: "Datos encriptados en reposo y en tránsito",
                  description: "Toda la comunicación entre tu navegador y nuestros servidores viaja encriptada. Los datos almacenados se protegen con encryption at-rest estándar de la industria.",
                },
                {
                  title: "Sin uso de tus datos para entrenar modelos",
                  description: "Tu información financiera no se usa para entrenar modelos de inteligencia artificial ni se comparte con terceros. Los datos se procesan exclusivamente para generar tu análisis.",
                },
                {
                  title: "Privacidad por diseño",
                  description: "LedgerPilot está diseñado desde cero con un enfoque de privacidad. Solo recopilamos los datos estrictamente necesarios para generar tu dashboard y análisis financiero.",
                },
                {
                  title: "Transparencia sobre certificaciones",
                  description: "Estamos construyendo las certificaciones formales de seguridad. Por ahora, nuestro compromiso es transparente y verificable. No inventamos certificaciones que no tenemos.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badge */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Tienes preguntas sobre seguridad?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Hablemos. Te explicamos en detalle cómo protegemos tu información.
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
