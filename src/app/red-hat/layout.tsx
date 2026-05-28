import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Red Hat — The full stack, one trusted partner",
  description:
    "Infizia delivers the full Red Hat stack — RHEL, OpenShift, Ansible, OpenShift AI — across assessment, implementation, managed services, and training.",
  path: "/red-hat",
});

export default function RedHatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
