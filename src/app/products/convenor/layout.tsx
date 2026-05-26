import { buildMetadata } from "@/lib/seo";
import { convenorContent } from "@/content/products/convenor";

export const metadata = buildMetadata({
  title: `${convenorContent.name} — ${convenorContent.tagline}`,
  description: convenorContent.positioning,
  path: `/products/${convenorContent.slug}`,
});

export default function ConvenorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
