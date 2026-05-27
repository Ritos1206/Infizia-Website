import { buildMetadata } from "@/lib/seo";
import { enewsContent } from "@/content/products/enews";

export const metadata = buildMetadata({
  title: `${enewsContent.name} — ${enewsContent.tagline}`,
  description: enewsContent.positioning,
  path: `/products/${enewsContent.slug}`,
});

export default function EnewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
