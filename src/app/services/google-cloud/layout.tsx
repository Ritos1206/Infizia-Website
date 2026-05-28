import { buildMetadata } from "@/lib/seo";
import { googleCloudContent } from "@/content/services/google-cloud";

export const metadata = buildMetadata({
  title: `${googleCloudContent.name} — ${googleCloudContent.tagline}`,
  description: googleCloudContent.positioning,
  path: `/services/${googleCloudContent.slug}`,
});

export default function GoogleCloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
