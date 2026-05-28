/**
 * /red-hat/openshift-ai — Red Hat AI / OpenShift AI page content.
 *
 * Source: `Infizia_Services.docx` Section 4 (Red Hat AI & OpenShift AI).
 * Hero idiom: Model Foundry — data inlet → training crucible → inference
 * outlet, with GPU rack utilization slats and foundation-model chips.
 */

import {
  AlertTriangle,
  Boxes,
  BrainCircuit,
  Building2,
  Compass,
  Cpu,
  FileSearch,
  Flag,
  GanttChartSquare,
  Gauge,
  GraduationCap,
  HeadphonesIcon,
  RadioTower,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  TimerReset,
  Workflow,
} from "lucide-react";

import type { RedHatServicePageContent } from "./types";

export const openshiftAiContent: RedHatServicePageContent = {
  slug: "openshift-ai",
  name: "Red Hat AI / OpenShift AI",
  shortLabel: "OpenShift AI",
  kicker: "Service · Red Hat AI · OpenShift AI",
  title: "Run AI at scale.\nOn infrastructure you own.",
  tagline:
    "AI doesn't have to mean surrendering your data to a hyperscaler. Red Hat's open AI platform lets you build, train, fine-tune, and serve AI/ML models on hybrid cloud — with the governance, security, and portability your enterprise demands.",
  positioning:
    "Most AI strategies stall at one of three places: GPU infrastructure that nobody knows how to size, foundation-model fine-tuning where the data can't leave the building, or governance frameworks that aren't ready for a regulator. OpenShift AI solves all three on infrastructure you own — and Infizia delivers it from readiness assessment to MLOps to responsible AI.",
  primaryCtaLabel: "Book an AI Platform Workshop",
  secondaryCtaLabel: "Corporate Brochure",

  pain: {
    kicker: "What's blocking your AI strategy",
    title: "AI ambition without AI infrastructure is a slide deck.",
    lede: "Every enterprise board has signed off on AI. Most enterprise data-science teams are still waiting for GPU access, a model-serving platform that meets compliance, and a governance framework that survives an audit.",
    items: [
      {
        icon: AlertTriangle,
        title: "Data residency vs. hyperscaler AI",
        body: "Regulated data can't go to a public LLM endpoint. The compliance team blocks the integration. The data-science team can't ship the use case. Both sides escalate.",
      },
      {
        icon: Cpu,
        title: "GPU infrastructure that nobody sized",
        body: "Procurement bought GPUs without knowing the workload. Three months later, half the cards are idle and the model that needs them is starved. Nobody owns the math.",
      },
      {
        icon: GanttChartSquare,
        title: "Models that can't get to production",
        body: "Notebook to production is a six-month journey nobody signed up for. Models live on data scientists' laptops because there's no serving platform, no MLOps, and no GitOps for ML.",
      },
      {
        icon: Scale,
        title: "Governance that fails the audit",
        body: "Bias evaluations done ad-hoc. Model cards written by hand. Inference logs not retained. The first regulator question takes the team weeks to answer — and the answer is incomplete.",
      },
    ],
  },

  services: {
    kicker: "What we deliver",
    title: "Five services that take OpenShift AI from board mandate to production.",
    lede: "Readiness assessment, full platform deployment with NVIDIA GPU operators, LLM fine-tuning via InstructLab on your data, MLOps pipelines, and a responsible AI framework that meets regulatory bar.",
    items: [
      {
        icon: FileSearch,
        title: "AI Readiness Assessment",
        body: "Evaluate readiness to adopt enterprise AI — infrastructure (GPU, storage, networking), data maturity, team skills — and define a phased AI adoption roadmap.",
        badge: "3–4 weeks",
        bullets: [
          "AI infrastructure gap analysis",
          "Data readiness assessment",
          "GPU workload sizing and ROI model",
          "AI use case prioritisation matrix",
          "OpenShift AI architecture blueprint",
        ],
      },
      {
        icon: Cpu,
        title: "OpenShift AI Platform Deployment",
        body: "Production-ready OpenShift AI environment — GPU node provisioning, NVIDIA operator setup, model serving infrastructure, and data science user environment.",
        bullets: [
          "OpenShift cluster with GPU worker nodes (NVIDIA / AMD)",
          "NVIDIA GPU Operator and CUDA toolkit installation",
          "OpenShift AI operator deployment and configuration",
          "MinIO / Ceph / S3 object storage integration",
          "User workbench environment provisioning",
          "Model serving infrastructure (KServe / ModelMesh)",
          "Monitoring (model metrics → Prometheus → Grafana)",
        ],
      },
      {
        icon: BrainCircuit,
        title: "LLM Fine-Tuning & Deployment",
        body: "Fine-tune open-source foundation models on proprietary data using InstructLab — and deploy them as production inference endpoints, keeping data entirely within your infrastructure.",
        bullets: [
          "IBM Granite (7B · 13B · 20B · 34B variants)",
          "Meta Llama 3 / 3.1",
          "Mistral / Mixtral",
          "Code Llama / StarCoder (developer tooling)",
          "Use cases: knowledge-base Q&A · document summarisation · code review · customer support · regulatory analysis",
        ],
      },
      {
        icon: Workflow,
        title: "MLOps Pipeline Build",
        body: "End-to-end MLOps so model development, training, evaluation, and deployment follow a repeatable, version-controlled, and auditable process.",
        bullets: [
          "Data ingestion and validation",
          "Feature engineering pipelines",
          "Model training with experiment tracking (MLflow)",
          "Model evaluation and approval gates",
          "Model packaging (containerisation)",
          "Staging and production deployment via GitOps",
          "Model performance monitoring and alerting",
        ],
      },
      {
        icon: Scale,
        title: "AI Governance & Responsible AI",
        body: "A responsible AI framework on your OpenShift AI platform — explainability, bias detection, audit logs, and access controls. Built for regulated industries.",
        bullets: [
          "Model cards and documentation standards",
          "Bias and fairness evaluation (AI Fairness 360 / Fairlearn)",
          "Explainability integration (SHAP · LIME)",
          "Inference audit logging",
          "RBAC for model access",
          "Data lineage tracking",
        ],
      },
    ],
  },

  engagement: {
    kicker: "How we engage",
    title: "Four entry points into OpenShift AI.",
    lede: "Workshop your readiness, fixed-scope deployment, fine-tune your first foundation model, or upskill the data-science team — pick the entry point that matches the stage of your AI programme.",
    items: [
      {
        icon: Compass,
        label: "AI Readiness Workshop",
        duration: "3–4 weeks",
        body: "Infrastructure gap analysis, data readiness, GPU sizing model, use case prioritisation, and architecture blueprint.",
      },
      {
        icon: Rocket,
        label: "Platform Deployment",
        duration: "Fixed scope",
        body: "Production-grade OpenShift AI cluster with GPU nodes, NVIDIA operator, model serving, and the first MLOps pipeline.",
      },
      {
        icon: HeadphonesIcon,
        label: "AI Platform Tier",
        duration: "Custom retainer",
        body: "Managed OpenShift AI operations — cluster, model serving, MLOps pipeline, governance, and ongoing fine-tuning support.",
      },
      {
        icon: GraduationCap,
        label: "OpenShift AI Training",
        duration: "2-day cohort",
        body: "Red Hat AI / OpenShift AI Fundamentals — virtual delivery, full lab environment, group discounts for 5+.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Sovereign AI. Auditable. Production-grade.",
    lede: "Models that fine-tune on your data without leaving your network. MLOps that promotes from notebook to production through GitOps. Governance that survives a regulator visit.",
    items: [
      {
        icon: ShieldCheck,
        metric: "Data never leaves",
        body: "Foundation models fine-tune in your cluster on your data. Inference endpoints sit behind your network policy. Compliance teams sign off.",
      },
      {
        icon: TimerReset,
        metric: "Notebook → prod in days",
        body: "MLOps pipeline with MLflow + KServe + GitOps — model promotion follows the same release cadence as application code.",
      },
      {
        icon: Gauge,
        metric: "GPUs at 70%+ utilisation",
        body: "Right-sized NVIDIA GPU operator deployment + ModelMesh — no idle cards, no starved workloads, sized to the actual model fleet.",
      },
      {
        icon: Scale,
        metric: "Audit-ready by default",
        body: "Model cards, bias reports, explainability, inference logs, and data lineage — generated as part of every deployment, not after the regulator asks.",
      },
    ],
  },

  extras: {
    foundationModels: [
      { name: "Granite 7B / 13B / 20B / 34B", family: "IBM" },
      { name: "Llama 3 / 3.1", family: "Meta" },
      { name: "Mistral / Mixtral", family: "Mistral AI" },
      { name: "Code Llama / StarCoder", family: "Developer tooling" },
    ],

    industryUseCases: [
      {
        icon: Building2,
        industry: "Banking & BFSI",
        useCase: "Fraud detection model serving at scale",
        platform: "OpenShift AI + KServe",
      },
      {
        icon: Stethoscope,
        industry: "Healthcare",
        useCase: "Medical document summarisation (on-prem LLM)",
        platform: "RHEL AI + Granite",
      },
      {
        icon: Flag,
        industry: "Government",
        useCase: "Regulatory compliance Q&A chatbot",
        platform: "OpenShift AI + InstructLab",
      },
      {
        icon: Boxes,
        industry: "Manufacturing",
        useCase: "Predictive maintenance with sensor data",
        platform: "OpenShift AI + Kubeflow",
      },
      {
        icon: RadioTower,
        industry: "Telecom",
        useCase: "Network anomaly detection",
        platform: "OpenShift AI + MLflow",
      },
      {
        icon: ShoppingBag,
        industry: "Retail",
        useCase: "Demand forecasting and inventory optimisation",
        platform: "OpenShift AI + Pipelines",
      },
    ],
  },
};
