"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/parcelles", label: "Nos parcelles" },
  { href: "/tarifs", label: "Grille tarifaire" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 72);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? "border-forest/10 bg-cream/95 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? pathname === link.href
                    ? "text-gold"
                    : "text-forest hover:text-gold"
                  : pathname === link.href
                    ? "text-gold-light"
                    : "text-white/90 hover:text-gold-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton
            href="/parcelles"
            variant={solid ? "primary" : "ghost"}
            className="px-5 py-2.5"
          >
            Voir les parcelles
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
            solid ? "text-forest" : "text-white"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-cream px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-forest/5 text-gold"
                      : "text-forest hover:bg-forest/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LinkButton
            href="/parcelles"
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Voir les parcelles
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
