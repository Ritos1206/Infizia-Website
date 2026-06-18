import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms governing use of ${SITE.domain} — operated by Contezza Techno Solution Pvt. Ltd. under its Infizia sub-brand.`,
  path: "/terms",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
