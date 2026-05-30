import { buildMetadata } from "@/lib/seo";
import { voiceAiContent } from "@/content/technology/voice-ai";

export const metadata = buildMetadata({
  title: `${voiceAiContent.name} — Technology Practice`,
  description: voiceAiContent.positioning,
  path: `/technology/${voiceAiContent.slug}`,
});

export default function VoiceAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
