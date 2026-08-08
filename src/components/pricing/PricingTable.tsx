import { pricingTiers } from "@/data/pricing";
import { formatFcfa } from "@/lib/constants";
import { LinkButton } from "@/components/ui/Button";

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.label}
          className={`flex flex-col rounded-xl border p-6 ${
            tier.highlight
              ? "border-gold bg-forest text-white shadow-lg"
              : "border-forest/10 bg-white text-forest"
          }`}
        >
          {tier.highlight && (
            <span className="mb-3 inline-block w-fit rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
              Sécurisation maximale
            </span>
          )}
          <h3 className={`font-serif text-xl ${tier.highlight ? "text-white" : "text-forest"}`}>
            {tier.label}
          </h3>
          <p
            className={`mt-2 font-serif text-4xl ${
              tier.highlight ? "text-gold-light" : "text-gold"
            }`}
          >
            {formatFcfa(tier.price)}
          </p>
          <p
            className={`mt-3 flex-1 text-sm leading-relaxed ${
              tier.highlight ? "text-cream/85" : "text-forest-light"
            }`}
          >
            {tier.description}
          </p>
          <LinkButton
            href="/contact"
            variant={tier.highlight ? "primary" : "outline"}
            className="mt-6 w-full"
          >
            Être contacté
          </LinkButton>
        </div>
      ))}
    </div>
  );
}
