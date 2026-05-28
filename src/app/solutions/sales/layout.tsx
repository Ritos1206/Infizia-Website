import { buildMetadata } from "@/lib/seo";
import { salesContent } from "@/content/solutions/sales";

export const metadata = buildMetadata({
  title: `${salesContent.name} — ${salesContent.tagline}`,
  description: salesContent.positioning,
  path: `/solutions/${salesContent.slug}`,
});

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
