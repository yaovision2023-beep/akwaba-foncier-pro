import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedParcels } from "@/components/home/FeaturedParcels";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedParcels />
      <TrustSection />
    </>
  );
}
