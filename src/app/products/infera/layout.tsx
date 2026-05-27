import { buildMetadata } from "@/lib/seo";
import { inferaContent } from "@/content/products/infera";

export const metadata = buildMetadata({
  title: `${inferaContent.name} — ${inferaContent.tagline}`,
  description: inferaContent.positioning,
  path: `/products/${inferaContent.slug}`,
});

export default function InferaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
