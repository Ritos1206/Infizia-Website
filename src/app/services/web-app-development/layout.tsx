import { buildMetadata } from "@/lib/seo";
import { webAppDevelopmentContent } from "@/content/services/web-app-development";

export const metadata = buildMetadata({
  title: `${webAppDevelopmentContent.name} — ${webAppDevelopmentContent.tagline}`,
  description: webAppDevelopmentContent.positioning,
  path: `/services/${webAppDevelopmentContent.slug}`,
});

export default function WebAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
