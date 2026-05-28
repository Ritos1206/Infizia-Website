import { buildMetadata } from "@/lib/seo";
import { intelligenceResearchContent } from "@/content/solutions/intelligence-research";

export const metadata = buildMetadata({
  title: `${intelligenceResearchContent.name} — ${intelligenceResearchContent.tagline}`,
  description: intelligenceResearchContent.positioning,
  path: `/solutions/${intelligenceResearchContent.slug}`,
});

export default function IntelligenceResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
