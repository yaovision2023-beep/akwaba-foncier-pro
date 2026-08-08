import { Hero } from "@/components/home/Hero";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedParcels } from "@/components/home/FeaturedParcels";
import { TrustSection } from "@/components/home/TrustSection";
import { DiasporaSpotlight } from "@/components/home/DiasporaSpotlight";
import { ClosingCta } from "@/components/home/ClosingCta";
import { TrustBar } from "@/components/layout/TrustBar";
import { getSiteStats } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const stats = await getSiteStats();

  return (
    <>
      <Hero stats={stats} />
      <TrustBar />
      <CategoryShowcase />
      <FeaturedParcels />
      <TrustSection />
      <DiasporaSpotlight />
      <ClosingCta />
    </>
  );
}
