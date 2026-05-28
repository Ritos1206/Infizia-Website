import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Red Hat Enterprise Linux — RHEL implementation, hardening, lifecycle",
  description:
    "Infizia delivers RHEL standardisation end to end — assessment, migration from CentOS / Oracle / SLES / Ubuntu, CIS / STIG hardening, patch management, and RHEL on AWS / Azure / GCP.",
  path: "/red-hat/rhel",
});

export default function RhelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
