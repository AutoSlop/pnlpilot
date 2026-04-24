import Link from "next/link";
import { LogoFull } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoFull variant="light" />
            <p className="mt-3 text-sm leading-relaxed">
              De tu P&G en Excel a decisiones financieras en minutos. La
              herramienta para fractional CFOs y SMBs de LATAM.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Producto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/product" className="text-sm hover:text-white transition-colors">
                  Producto
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/for-advisors" className="text-sm hover:text-white transition-colors">
                  Para Advisors
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm hover:text-white transition-colors">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm">info@example.com</li>
              <li className="text-sm">+00 000 000 0000</li>
              <li className="text-sm">123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LedgerPilot. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/50">
            Tu data financiera, protegida. Encryption at-rest desde día 1.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
