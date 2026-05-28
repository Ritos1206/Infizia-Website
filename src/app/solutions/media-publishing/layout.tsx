import { buildMetadata } from "@/lib/seo";
import { mediaPublishingContent } from "@/content/solutions/media-publishing";

export const metadata = buildMetadata({
  title: `${mediaPublishingContent.name} — ${mediaPublishingContent.tagline}`,
  description: mediaPublishingContent.positioning,
  path: `/solutions/${mediaPublishingContent.slug}`,
});

export default function MediaPublishingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
