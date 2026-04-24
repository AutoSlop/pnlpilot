"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Mis datos financieros están seguros?",
    answer:
      "Usamos encriptación en tránsito y en reposo desde el día uno. Tus datos nunca se comparten con terceros ni se usan para entrenar modelos. Estamos trabajando en certificaciones formales de seguridad.",
  },
  {
    question: "¿Qué formatos de archivo soportan?",
    answer:
      "Aceptamos archivos Excel (.xlsx, .xls) y CSV. Nuestro parser se adapta a diferentes estructuras de estados de resultados, así que no necesitas reformatear tu archivo.",
  },
  {
    question: "¿Cuánto tarda la implementación?",
    answer:
      "Cero implementación. Subes tu primer archivo y en menos de 10 minutos tienes tu dashboard listo. No hay integraciones complejas ni periodos de setup.",
  },
  {
    question: "¿Para quién es LedgerPilot?",
    answer:
      "Para fractional CFOs, boutiques de advisory y founders/COOs de SMBs que necesitan análisis financiero rápido sobre su P&G sin invertir en herramientas enterprise. No es para pre-seed sin revenue, enterprise con equipo FP&A propio, ni contabilidad de compliance.",
  },
  {
    question: "¿Puedo probar antes de comprar?",
    answer:
      "Sí. Ofrecemos una demo personalizada donde puedes ver la herramienta en acción con datos de ejemplo. Agenda tu demo y evaluamos juntos si LedgerPilot es la solución correcta para ti.",
  },
  {
    question: "¿El commentary ejecutivo es confiable?",
    answer:
      "El commentary se genera a partir de las variaciones reales de tu P&G. Es un punto de partida profesional que siempre puedes editar antes de exportar. Está diseñado para ahorrar tiempo, no para reemplazar tu criterio.",
  },
  {
    question: "¿Se integra con QuickBooks, Xero u otras plataformas?",
    answer:
      "Actualmente trabajamos con archivos Excel y CSV que exportas de tu sistema contable. Integraciones directas con plataformas contables están en nuestro roadmap futuro.",
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
