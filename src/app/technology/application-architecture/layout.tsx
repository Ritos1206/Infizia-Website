import { buildMetadata } from "@/lib/seo";
import { applicationArchitectureContent } from "@/content/technology/application-architecture";

export const metadata = buildMetadata({
  title: `${applicationArchitectureContent.name} — Technology Practice`,
  description: applicationArchitectureContent.positioning,
  path: `/technology/${applicationArchitectureContent.slug}`,
});

export default function ApplicationArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
