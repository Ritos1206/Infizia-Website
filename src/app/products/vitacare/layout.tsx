import { buildMetadata } from "@/lib/seo";
import { vitacareContent } from "@/content/products/vitacare";

export const metadata = buildMetadata({
  title: `${vitacareContent.name} — ${vitacareContent.tagline}`,
  description: vitacareContent.positioning,
  path: `/products/${vitacareContent.slug}`,
});

export default function VitaCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
