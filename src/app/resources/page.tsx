import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Insights, blogs, and case studies from Infizia — applied AI, agentic systems, and enterprise transformation.",
  path: "/resources",
});

export default function ResourcesIndexPage() {
  return (
    <PlaceholderHero
      kicker="Resources"
      title="Insights from the cognitive frontier."
      lede="Blogs, case studies, and field notes from our work building production AI systems for the enterprise."
      primaryCTA={{ label: "Read the Blog", href: "/resources/blog" }}
      secondaryCTA={{ label: "Case Studies", href: "/resources/case-studies" }}
    />
  );
}
