import { buildMetadata } from "@/lib/seo";
import { lmsContent } from "@/content/products/lms";

export const metadata = buildMetadata({
  title: `${lmsContent.name} — ${lmsContent.tagline}`,
  description: lmsContent.positioning,
  path: `/products/${lmsContent.slug}`,
});

export default function LMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
