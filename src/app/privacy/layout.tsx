import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Infizia (Contezza Techno Solution Pvt. Ltd.) handles personal data — what we collect, how we use it, third-party processors, and your rights under DPDP, GDPR, and India IT Rules.",
  path: "/privacy",
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
