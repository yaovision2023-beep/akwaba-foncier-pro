import { siteStats } from "@/data/parcels";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

export function StatsSection() {
  const stats = [
    {
      value: siteStats.totalParcels,
      suffix: "",
      label: "Terrains disponibles",
    },
    {
      value: siteStats.verifiedPercent,
      suffix: "%",
      label: "Dossiers vérifiés",
    },
    {
      value: siteStats.zonesCovered.length,
      suffix: "",
      label: "Zones en stock actuellement",
      caption: `${siteStats.zonesCovered.join(" · ")} — intervention sur toute la Côte d'Ivoire`,
    },
  ];

  return (
    <section className="bg-forest-dark py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1} className="text-center">
            <p className="text-4xl font-extrabold text-gold-light sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-cream">
              {stat.label}
            </p>
            {stat.caption && (
              <p className="mt-1 text-xs text-cream/60">{stat.caption}</p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
