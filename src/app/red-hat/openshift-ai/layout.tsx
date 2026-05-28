import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Red Hat AI / OpenShift AI — sovereign AI on infrastructure you own",
  description:
    "Infizia delivers OpenShift AI end to end — readiness assessment, GPU platform deployment, LLM fine-tuning via InstructLab on Granite / Llama / Mistral, MLOps pipelines, and a responsible AI governance framework.",
  path: "/red-hat/openshift-ai",
});

export default function OpenshiftAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
