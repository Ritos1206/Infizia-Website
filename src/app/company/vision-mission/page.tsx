import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Vision & Mission",
  description:
    "What we believe and where we are going — the Infizia vision and mission.",
  path: "/company/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <PlaceholderHero
      kicker="Vision & Mission"
      title="The next decade is intelligent by default."
      lede="We are building the cognitive infrastructure for enterprises that refuse to wait. Full vision and mission statement coming soon."
    />
  );
}
