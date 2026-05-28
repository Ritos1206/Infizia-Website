import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "OpenShift Container Platform — enterprise Kubernetes, end to end",
  description:
    "Container strategy, cluster design (single-DC, multi-zone, air-gapped, hybrid, SNO edge), application containerisation via the 6 R's, DevSecOps with Tekton + ArgoCD + Quay + Vault + ACS, and Day-2 managed operations.",
  path: "/red-hat/openshift",
});

export default function OpenshiftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
