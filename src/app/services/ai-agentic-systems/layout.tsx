import { buildMetadata } from "@/lib/seo";
import { aiAgenticSystemsContent } from "@/content/services/ai-agentic-systems";

export const metadata = buildMetadata({
  title: `${aiAgenticSystemsContent.name} — ${aiAgenticSystemsContent.tagline}`,
  description: aiAgenticSystemsContent.positioning,
  path: `/services/${aiAgenticSystemsContent.slug}`,
});

export default function AiAgenticSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
