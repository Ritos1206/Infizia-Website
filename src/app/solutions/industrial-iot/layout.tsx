import { buildMetadata } from "@/lib/seo";
import { industrialIotContent } from "@/content/solutions/industrial-iot";

export const metadata = buildMetadata({
  title: `${industrialIotContent.name} — ${industrialIotContent.tagline}`,
  description: industrialIotContent.positioning,
  path: `/solutions/${industrialIotContent.slug}`,
});

export default function IndustrialIotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
