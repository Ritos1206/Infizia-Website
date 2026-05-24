import { buildMetadata } from "@/lib/seo";
import { eyeposContent } from "@/content/products/eyepos";

export const metadata = buildMetadata({
  title: `${eyeposContent.name} — ${eyeposContent.tagline}`,
  description: eyeposContent.positioning,
  path: `/products/${eyeposContent.slug}`,
});

export default function EyeposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
