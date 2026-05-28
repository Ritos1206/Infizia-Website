import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Infizia",
  description:
    "Infizia is a sub-brand of Contezza Technosolutions Pvt. Ltd. — engineering the cognitive layer of modern enterprises.",
  path: "/company/about",
});

export default function AboutPage() {
  return (
    <PlaceholderHero
      kicker="About Infizia"
      title="Infinite intelligence, engineered."
      lede="Infizia is a sub-brand of Contezza Technosolutions Pvt. Ltd. We design and ship AI-native software, agentic systems, and enterprise platforms — and we deliver the full Red Hat stack at production scale. Full company story coming soon."
      primaryCTA={{ label: "About Contezza", href: "/company/contezza" }}
      secondaryCTA={{ label: "Vision & Mission", href: "/company/vision-mission" }}
    />
  );
}
