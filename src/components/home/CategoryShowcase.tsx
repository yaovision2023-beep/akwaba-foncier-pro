import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Reveal } from "@/components/motion/Reveal";

const TILE_STYLES: Record<
  string,
  { background: string; pattern: string; iconStroke: string; path: string }
> = {
  "terrains-agricoles": {
    background: "linear-gradient(160deg, #2D6A4F, #122E22)",
    pattern:
      "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 26px)",
    iconStroke: "#D4A537",
    path: "M12 3v18M6 8l6-5 6 5M4 21h16",
  },
  "lots-urbains": {
    background: "linear-gradient(160deg, #8C6508, #4a3706)",
    pattern:
      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
    iconStroke: "#F3D98A",
    path: "M4 21V9l8-6 8 6v12M9 21v-7h6v7",
  },
  "entrepots-industriels": {
    background: "linear-gradient(160deg, #454943, #1c1e1a)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 10px, transparent 10px 20px)",
    iconStroke: "#D4A537",
    path: "M3 9l9-6 9 6M4 9h16v12H4z",
  },
  "residences-appartements": {
    background: "linear-gradient(160deg, #B8860B, #1B4332)",
    pattern: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
    iconStroke: "#ffffff",
    path: "M5 3h14v18H5zM9 8h1M14 8h1M9 12h1M14 12h1M9 21v-5h6v5",
  },
};

export function CategoryShowcase() {
  return (
    <section>
      <Reveal className="px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Quatre univers
        </p>
        <h2 className="mt-4 font-serif text-3xl text-forest sm:text-4xl">
          Une opportunité pour chaque projet
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:h-[76vh]">
        {CATEGORIES.map((cat) => {
          const style = TILE_STYLES[cat.slug];
          return (
            <Link
              key={cat.slug}
              href={`/parcelles?categorie=${cat.slug}`}
              className="group relative flex h-[46vh] flex-col justify-end overflow-hidden p-7 lg:h-full"
              style={{ background: style.background }}
            >
              <div
                className="pointer-events-none absolute -inset-[10%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
                style={{ backgroundImage: style.pattern, backgroundSize: "34px 34px" }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="relative">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke={style.iconStroke}
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d={style.path} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-3 font-serif text-2xl text-white">{cat.label}</p>
                <p className="mt-1 text-xs text-white/65">{cat.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Découvrir →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
