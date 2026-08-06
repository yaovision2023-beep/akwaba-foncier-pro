import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { COMPANY, whatsappLink } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/parcelles", label: "Nos parcelles" },
  { href: "/tarifs", label: "Grille tarifaire" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Plateforme d&apos;intermédiation foncière en Côte d&apos;Ivoire,
              filiale de {COMPANY.parentCompany}.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-light">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>Abidjan, Côte d&apos;Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6">
          <p className="text-xs leading-relaxed text-cream/60">
            {COMPANY.name} — {COMPANY.parentCompany} — RCCM {COMPANY.rccm}.
            Toute transaction transite par un notaire partenaire ; aucun
            paiement n&apos;est jamais encaissé directement par un intermédiaire.
          </p>
        </div>
      </div>
    </footer>
  );
}
