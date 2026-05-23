import { PlaceholderHero } from "@/components/sections/PlaceholderHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Field notes on building production AI: agentic architecture, RAG, model governance, and engineering at scale.",
  path: "/resources/blog",
});

export default function BlogIndexPage() {
  return (
    <PlaceholderHero
      kicker="Blog"
      title="Field notes from the build."
      lede="Engineering, design, and operating decisions from inside Infizia. New posts coming soon."
    />
  );
}
