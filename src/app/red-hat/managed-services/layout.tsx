import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Red Hat Managed Services — operations excellence, 24×7, SLA-backed",
  description:
    "Foundation to AI Platform tiers. Named engineers across RHEL, Ansible, OpenShift, OpenShift AI. SLA-backed monitoring, monthly service reviews, proactive maintenance.",
  path: "/red-hat/managed-services",
});

export default function ManagedServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
