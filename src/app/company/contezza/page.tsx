import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Contezza",
  description:
    "Contezza Technosolutions Pvt. Ltd. — the parent organization behind the Infizia sub-brand.",
  path: "/company/contezza",
});

export default function ContezzaPage() {
  return (
    <PlaceholderHero
      kicker="Parent Organization"
      title="Contezza Technosolutions."
      lede="Infizia is a sub-brand of Contezza Technosolutions Pvt. Ltd. — the parent organization that incubates, scales, and operates the Infizia product portfolio. Detailed company history and credentials coming soon."
    />
  );
}
