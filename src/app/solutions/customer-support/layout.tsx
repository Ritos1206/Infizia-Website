import { buildMetadata } from "@/lib/seo";
import { customerSupportContent } from "@/content/solutions/customer-support";

export const metadata = buildMetadata({
  title: `${customerSupportContent.name} — ${customerSupportContent.tagline}`,
  description: customerSupportContent.positioning,
  path: `/solutions/${customerSupportContent.slug}`,
});

export default function CustomerSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
