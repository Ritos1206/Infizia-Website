import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "How Infizia customers transform operations with AI-native platforms and Red Hat infrastructure.",
  path: "/resources/case-studies",
});

export default function CaseStudiesIndexPage() {
  return (
    <PlaceholderHero
      kicker="Case Studies"
      title="Outcomes, in their own words."
      lede="Real deployments, measured impact, and the architecture decisions behind them."
    />
  );
}
