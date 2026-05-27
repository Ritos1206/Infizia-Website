import { buildMetadata } from "@/lib/seo";
import { documindContent } from "@/content/products/documind";

export const metadata = buildMetadata({
  title: `${documindContent.name} — ${documindContent.tagline}`,
  description: documindContent.positioning,
  path: `/products/${documindContent.slug}`,
});

export default function DocumindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
