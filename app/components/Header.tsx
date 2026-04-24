"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoFull } from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/product", label: "Producto" },
    { href: "/for-advisors", label: "Para Advisors" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Seguridad" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <LogoFull variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Solicitar demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors w-full"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar demo
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
