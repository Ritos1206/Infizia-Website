import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ansible Automation Platform — automation discovery, AAP, EDA, training",
  description:
    "Infizia delivers Ansible at enterprise scale — discovery and ROI roadmap, AAP deployment with HA + RBAC + ServiceNow + Splunk + Vault + AD integration, playbook development, Event-Driven Ansible, and full content hand-off.",
  path: "/red-hat/ansible",
});

export default function AnsibleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
