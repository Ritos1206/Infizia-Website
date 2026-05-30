import { buildMetadata } from "@/lib/seo";
import { llmGenaiContent } from "@/content/technology/llm-genai";

export const metadata = buildMetadata({
  title: `${llmGenaiContent.name} — Technology Practice`,
  description: llmGenaiContent.positioning,
  path: `/technology/${llmGenaiContent.slug}`,
});

export default function LlmGenaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
