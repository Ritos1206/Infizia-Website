import { buildMetadata } from "@/lib/seo";
import { ragContent } from "@/content/technology/rag";

export const metadata = buildMetadata({
  title: `${ragContent.name} — Technology Practice`,
  description: ragContent.positioning,
  path: `/technology/${ragContent.slug}`,
});

export default function RagLayout({ children }: { children: React.ReactNode }) {
  return children;
}
