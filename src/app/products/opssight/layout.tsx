import { buildMetadata } from "@/lib/seo";
import { opssightContent } from "@/content/products/opssight";

export const metadata = buildMetadata({
  title: `${opssightContent.name} — ${opssightContent.tagline}`,
  description: opssightContent.positioning,
  path: `/products/${opssightContent.slug}`,
});

export default function OpsSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
