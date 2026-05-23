import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Build the future of intelligent software with Infizia. Open roles in engineering, AI, and design.",
  path: "/company/careers",
});

export default function CareersPage() {
  return (
    <PlaceholderHero
      kicker="Careers"
      title="Engineer the cognitive layer."
      lede="Infizia is hiring across AI engineering, product, and design. Open roles will be listed here as we scale."
      primaryCTA={{ label: "Get in Touch", href: "/contact" }}
    />
  );
}
