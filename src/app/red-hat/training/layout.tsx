import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Red Hat Training & Enablement — RHEL · Ansible · OpenShift · OpenShift AI",
  description:
    "Six structured Red Hat courses with full lab environments. RHEL Admin, Ansible, OpenShift for Admins / Developers, OpenShift AI fundamentals, and Custom Bootcamps. Group discounts for 5+ attendees.",
  path: "/red-hat/training",
});

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
