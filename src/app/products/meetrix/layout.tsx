import { buildMetadata } from "@/lib/seo";
import { meetrixContent } from "@/content/products/meetrix";

export const metadata = buildMetadata({
  title: `${meetrixContent.name} — ${meetrixContent.tagline}`,
  description: meetrixContent.positioning,
  path: `/products/${meetrixContent.slug}`,
});

export default function MeetrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
