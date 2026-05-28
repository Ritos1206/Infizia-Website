import { buildMetadata } from "@/lib/seo";
import { ecommerceContent } from "@/content/solutions/ecommerce";

export const metadata = buildMetadata({
  title: `${ecommerceContent.name} — ${ecommerceContent.tagline}`,
  description: ecommerceContent.positioning,
  path: `/solutions/${ecommerceContent.slug}`,
});

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
