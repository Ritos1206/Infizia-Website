import { buildMetadata } from "@/lib/seo";
import { learnovaContent } from "@/content/products/learnova";

export const metadata = buildMetadata({
  title: `${learnovaContent.name} — ${learnovaContent.tagline}`,
  description: learnovaContent.positioning,
  path: `/products/${learnovaContent.slug}`,
});

export default function LearnovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
