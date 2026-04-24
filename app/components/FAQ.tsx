"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Mis datos financieros están seguros?",
    answer:
      "Absolutamente. Usamos encriptación AES-256 en tránsito y en reposo. Tus datos nunca se comparten con terceros ni se usan para entrenar modelos de IA. Cumplimos con estándares SOC 2 y GDPR.",
  },
  {
    question: "¿Qué formatos de archivo soportan?",
    answer:
      "Aceptamos archivos Excel (.xlsx, .xls) y CSV. Nuestro parser con IA se adapta a diferentes estructuras de estados de resultados, así que no necesitas reformatear tu archivo.",
  },
  {
    question: "¿Cuánto tarda la implementación?",
    answer:
      "Cero implementación. Creas tu cuenta, subes tu primer archivo y en menos de 10 minutos tienes tu dashboard listo. No hay integraciones complejas ni periodos de setup.",
  },
  {
    question: "¿Para quién es PnLPilot?",
    answer:
      "PnLPilot está diseñado para fractional CFOs, consultores financieros independientes, firmas de advisory y SMBs en LATAM que necesitan análisis financiero rápido y profesional sin invertir en herramientas enterprise costosas.",
  },
  {
    question: "¿Puedo probar antes de comprar?",
    answer:
      "Sí. Ofrecemos una demo personalizada donde puedes ver la herramienta en acción con datos reales (o de ejemplo). Agenda tu demo y evaluamos juntos si PnLPilot es la solución correcta para ti.",
  },
  {
    question: "¿El commentary de IA es confiable?",
    answer:
      "El commentary generado por IA es un punto de partida profesional basado en las variaciones reales de tu P&G. Siempre puedes editarlo antes de exportar. Está diseñado para ahorrar tiempo, no para reemplazar tu criterio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-muted shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
