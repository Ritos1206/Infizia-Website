import { buildMetadata } from "@/lib/seo";
import { iconContent } from "@/content/products/icon";

export const metadata = buildMetadata({
  title: `${iconContent.name} — ${iconContent.tagline}`,
  description: iconContent.positioning,
  path: `/products/${iconContent.slug}`,
});

export default function IconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
