"use client";

import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Agenda tu demo personalizada
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Te mostramos cómo PnLPilot puede transformar tu flujo de trabajo
              financiero en menos de 30 minutos. Sin compromiso.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Demo en vivo con datos de ejemplo o tuyos",
                "Resolvemos tus dudas en tiempo real",
                "Te ayudamos a evaluar el plan ideal",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <svg
                    className="h-5 w-5 text-secondary shrink-0"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <svg
                    className="h-8 w-8"
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
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-muted">
                  Te contactaremos en las próximas 24 horas para agendar tu
                  demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Rol
                  </label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Selecciona tu rol</option>
                    <option value="fractional-cfo">Fractional CFO</option>
                    <option value="consultor">Consultor financiero</option>
                    <option value="cfo">CFO / Director de finanzas</option>
                    <option value="founder">Founder / CEO</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Solicitar demo
                </button>

                <p className="text-xs text-muted text-center">
                  Sin compromiso. Te respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
