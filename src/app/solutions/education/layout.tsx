import { buildMetadata } from "@/lib/seo";
import { educationContent } from "@/content/solutions/education";

export const metadata = buildMetadata({
  title: `${educationContent.name} — ${educationContent.tagline}`,
  description: educationContent.positioning,
  path: `/solutions/${educationContent.slug}`,
});

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
