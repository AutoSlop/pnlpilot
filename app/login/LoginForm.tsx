"use client";

import Link from "next/link";
import { LogoFull } from "../components/Logo";

export default function LoginForm() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="bg-surface rounded-2xl p-8 border border-border shadow-sm">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <LogoFull variant="dark" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Iniciar sesión
            </h1>
            <p className="mt-2 text-sm text-muted">
              Accede a tu cuenta para ver tus dashboards y análisis.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="login-email"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="tu@empresa.com"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="login-password"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  className="rounded border-border text-primary focus:ring-primary/20"
                />
                Recordarme
              </label>
              <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              ¿No tienes cuenta?{" "}
              <Link href="/#demo" className="text-primary hover:text-primary-dark font-medium transition-colors">
                Solicita una demo
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
