import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sales Inquiry",
  description:
    "Talk to Infizia sales about pricing, deployment, and procurement.",
  path: "/contact/sales",
});

export default function SalesPage() {
  return (
    <PlaceholderHero
      kicker="Sales Inquiry"
      title="Procurement, scale, and rollout."
      lede="For pricing, contracting, and deployment planning — start with a sales conversation. Form coming online shortly."
    />
  );
}
