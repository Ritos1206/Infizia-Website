import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Vision & Mission",
  description:
    "Infizia's mission and vision — to empower businesses with cutting-edge digital solutions and to be a globally recognised technology company built on AI-native applications.",
  path: "/company/vision-mission",
});

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
