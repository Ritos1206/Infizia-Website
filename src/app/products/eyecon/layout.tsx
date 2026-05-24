import { buildMetadata } from "@/lib/seo";
import { eyeconContent } from "@/content/products/eyecon";

export const metadata = buildMetadata({
  title: `${eyeconContent.name} — ${eyeconContent.tagline}`,
  description: eyeconContent.positioning,
  path: `/products/${eyeconContent.slug}`,
});

export default function EyeconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
