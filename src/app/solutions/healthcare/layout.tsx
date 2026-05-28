import { buildMetadata } from "@/lib/seo";
import { healthcareContent } from "@/content/solutions/healthcare";

export const metadata = buildMetadata({
  title: `${healthcareContent.name} — ${healthcareContent.tagline}`,
  description: healthcareContent.positioning,
  path: `/solutions/${healthcareContent.slug}`,
});

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
