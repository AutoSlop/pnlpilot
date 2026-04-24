import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Pricing — LedgerPilot",
  description:
    "Planes simples para fractional CFOs y SMBs. Solo $49/mes, Advisor $199/mes, Firm $499/mes.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Solicita una demo personalizada y evalúa si LedgerPilot es la
            solución correcta para ti.
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
