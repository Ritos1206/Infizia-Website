import { HomeHero } from "@/components/sections/HomeHero";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { AIImpact } from "@/components/sections/AIImpact";
import { FlagshipsSpotlight } from "@/components/sections/FlagshipsSpotlight";
import { ImplementationProcess } from "@/components/sections/ImplementationProcess";
import { RedHatSection } from "@/components/sections/RedHatSection";
import { WhyInfizia } from "@/components/sections/WhyInfizia";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PartnersMarquee />
      <AIImpact />
      <FlagshipsSpotlight />
      <ImplementationProcess />
      <RedHatSection />
      <WhyInfizia />
      <FinalCTA />
    </>
  );
}
