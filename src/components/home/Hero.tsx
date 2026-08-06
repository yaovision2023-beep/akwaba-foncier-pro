import { LinkButton } from "@/components/ui/Button";
import { TrustBadges } from "@/components/layout/TrustBadges";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-forest-dark px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
          Filiale de CHIM IVOIRE GROUP SARL
        </span>

        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          Votre terrain idéal
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Achetez un terrain sécurisé en Côte d&apos;Ivoire en toute confiance —
          titres vérifiés, transactions encadrées par notaire, accompagnement
          dédié à la diaspora comme aux acheteurs locaux.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/parcelles" variant="primary" className="px-8 py-3.5 text-base">
            Voir les parcelles disponibles
          </LinkButton>
          <LinkButton href="/comment-ca-marche" variant="ghost" className="px-8 py-3.5 text-base">
            Comment ça marche
          </LinkButton>
        </div>

        <div className="mt-14 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <TrustBadges variant="dark" />
        </div>
      </div>
    </section>
  );
}
