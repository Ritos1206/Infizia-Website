import { buildMetadata } from "@/lib/seo";
import { hrWorkforceContent } from "@/content/solutions/hr-workforce";

export const metadata = buildMetadata({
  title: `${hrWorkforceContent.name} — ${hrWorkforceContent.tagline}`,
  description: hrWorkforceContent.positioning,
  path: `/solutions/${hrWorkforceContent.slug}`,
});

export default function HRWorkforceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
