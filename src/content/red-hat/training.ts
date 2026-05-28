/**
 * /red-hat/training — Red Hat Training & Enablement page content.
 *
 * Source: `Infizia_Services.docx` Section 6 (Training & Enablement).
 * Hero idiom: Course Stadium — 6 ticket-stub course cards in a curved
 * arena formation with a cohort avatar trail and live ticker.
 *
 * Course catalogue (verbatim from docx):
 *   RHEL Administration Fundamentals          · 3 days · On-site / virtual · Rs 45,000/person
 *   Ansible for Enterprise Automation         · 3 days · On-site / virtual · Rs 50,000/person
 *   OpenShift for Administrators              · 4 days · On-site / virtual · Rs 60,000/person
 *   OpenShift for Developers                  · 3 days · On-site / virtual · Rs 55,000/person
 *   Red Hat AI / OpenShift AI Fundamentals    · 2 days · Virtual           · Rs 40,000/person
 *   Custom Bootcamp (team of 10+)             · Custom · On-site           · Rs 4.5L flat
 */

import {
  Award,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  Code2,
  Layers,
  LineChart,
  Network,
  Rocket,
  Server,
  Sparkles,
  Target,
  Trophy,
  Users,
  Video,
} from "lucide-react";

import type { RedHatTrainingContent } from "./types";

export const trainingContent: RedHatTrainingContent = {
  kicker: "Service · Training & Enablement",
  title: "Build internal Red Hat capability.\nWith hands on the keyboards.",
  tagline:
    "Six structured courses across RHEL, Ansible, OpenShift, and OpenShift AI. All with full lab environments. Group discounts for 5+ attendees.",
  positioning:
    "Buying a Red Hat platform is half the journey. Building internal capability to run it is the other half. Infizia's training catalogue covers every Red Hat product family — from RHEL administration fundamentals through OpenShift developer mastery to OpenShift AI deep-dives — delivered on-site or virtually, with full lab environments, structured exam preparation, and a Custom Bootcamp option for teams of 10 or more.",

  catalogue: {
    kicker: "Course catalogue · 6 courses",
    title: "Pick the path that matches the role.",
    lede: "Each course runs in cohort format with a structured curriculum and hands-on lab environment. Group discounts available for 5 or more attendees from the same organisation.",
    items: [
      {
        icon: Server,
        course: "RHEL Administration Fundamentals",
        duration: "3 days",
        format: "On-site / virtual",
        price: "Rs 45,000 / person",
        audience: "Linux admins · infrastructure engineers",
      },
      {
        icon: Network,
        course: "Ansible for Enterprise Automation",
        duration: "3 days",
        format: "On-site / virtual",
        price: "Rs 50,000 / person",
        audience: "Ops engineers · SREs · automation specialists",
      },
      {
        icon: Layers,
        course: "OpenShift for Administrators",
        duration: "4 days",
        format: "On-site / virtual",
        price: "Rs 60,000 / person",
        audience: "Platform engineers · cluster admins",
      },
      {
        icon: Code2,
        course: "OpenShift for Developers",
        duration: "3 days",
        format: "On-site / virtual",
        price: "Rs 55,000 / person",
        audience: "Application developers · DevOps engineers",
      },
      {
        icon: BrainCircuit,
        course: "Red Hat AI / OpenShift AI Fundamentals",
        duration: "2 days",
        format: "Virtual",
        price: "Rs 40,000 / person",
        audience: "Data scientists · ML engineers · platform teams",
      },
      {
        icon: Trophy,
        course: "Custom Bootcamp (team of 10+)",
        duration: "Custom",
        format: "On-site",
        price: "Rs 4.5L flat",
        audience: "Cross-functional teams · enterprise enablement",
      },
    ],
  },

  formats: {
    kicker: "How we deliver",
    title: "Lab-driven. Cohort-based. Outcome-measured.",
    lede: "Every course is designed around hands-on labs, structured assessments, and a take-home project — not slide decks.",
    items: [
      {
        icon: Building2,
        title: "On-site delivery",
        body: "Full instructor + lab kit deployed to your office. Best for cross-functional cohorts and Custom Bootcamps where business context matters.",
      },
      {
        icon: Video,
        title: "Virtual delivery",
        body: "Live instructor-led classes with the same lab environment delivered remotely. Recordings available for cohort review and onboarding new joiners.",
      },
      {
        icon: Users,
        title: "Group discounts",
        body: "Available for 5 or more attendees from the same organisation. Custom Bootcamp pricing kicks in at teams of 10+.",
      },
      {
        icon: ClipboardCheck,
        title: "Lab environments included",
        body: "Every course includes a dedicated lab environment per attendee — so the learning is hands-on, not theoretical.",
      },
      {
        icon: Award,
        title: "Exam preparation",
        body: "Tracks aligned to Red Hat certification exams (RHCSA, RHCE, OpenShift Specialist, Ansible Specialist) with structured preparation materials.",
      },
      {
        icon: Target,
        title: "Custom curriculum",
        body: "Bootcamp curriculum tailored to your specific stack, internal processes, and use cases — built collaboratively with your training team.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Capability internalised. Dependence reduced.",
    lede: "Teams that complete the catalogue run their own Red Hat operations — with Infizia available as escalation, not as the daily owner.",
    items: [
      {
        icon: Trophy,
        metric: "Certified engineers",
        body: "Cohort completion rates aligned to Red Hat certification exams — so the investment results in credentials, not just attendance.",
      },
      {
        icon: Sparkles,
        metric: "Hands on the keyboards",
        body: "Lab-driven curriculum means every attendee has run the commands, broken the cluster, and recovered it — before they touch production.",
      },
      {
        icon: LineChart,
        metric: "Faster time-to-productive",
        body: "New hires onboarded in 2 weeks instead of 2 quarters. Internal teams skill-up to take over from external implementation partners.",
      },
      {
        icon: Rocket,
        metric: "Custom Bootcamp ROI",
        body: "Custom Bootcamps for teams of 10+ pay back in months — by reducing per-attendee external course spend AND cutting onboarding time across the cohort.",
      },
    ],
  },
};
