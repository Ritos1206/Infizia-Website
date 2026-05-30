import { buildMetadata } from "@/lib/seo";
import { agenticArchitectureContent } from "@/content/technology/agentic-architecture";

export const metadata = buildMetadata({
  title: `${agenticArchitectureContent.name} — Technology Practice`,
  description: agenticArchitectureContent.positioning,
  path: `/technology/${agenticArchitectureContent.slug}`,
});

export default function AgenticArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
