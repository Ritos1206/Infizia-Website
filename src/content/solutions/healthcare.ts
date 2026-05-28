/**
 * Healthcare solution — content brief.
 *
 * Brand accent: green (matches the flagship VitaCare product, which
 * anchors the stack on this vertical). Patient-first framing —
 * appointments, telehealth, AI receptionists, digital records.
 *
 * Mapped products: VitaCare (anchor — clinic platform), Intellix (AI call
 * receptionist + multilingual chat), DocuMind (lab reports / claim forms /
 * insurance docs), Meetrix (case-conference recordings + multi-doctor
 * meeting intelligence).
 *
 * Voice rule (D-40): no technology / vendor names exposed. The numbers in
 * `pulse` are framed conservatively as "industry baseline" — they're not
 * tied to specific reports.
 */

import {
  Activity,
  AlarmClock,
  BrainCircuit,
  CalendarDays,
  ClipboardList,
  FileText,
  HeartPulse,
  Hospital,
  Languages,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
  Timer,
  TrendingDown,
  UserRound,
  Users,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const healthcareContent: SolutionContent = {
  slug: "healthcare",
  name: "Healthcare",
  verticalLabel: "Healthcare",
  accent: "green",

  tagline: "From the first call to the last follow-up.",

  positioning:
    "Healthcare doesn't fail at the operating table — it fails at the front desk. Missed calls, manual scheduling, paper prescriptions, and disconnected follow-ups quietly drain hours and revenue every single day. Infizia maps a complete patient journey — call to booking to visit to prescription to follow-up — onto one connected platform that doctors, receptionists, and pharmacists can run together.",

  pulse: {
    kicker: "Industry pulse",
    title: "The numbers behind a clinic's quiet drain.",
    lede: "Five patient-affecting moments — call, book, visit, prescribe, follow-up — and each one leaks time and money when it's run on paper or chat.",
    items: [
      {
        value: "37%",
        label: "of calls miss the front desk during peak hours",
        caption: "Average across multi-doctor clinics",
      },
      {
        value: "1 in 5",
        label: "appointment slots end up empty due to no-shows",
        caption: "When reminders are manual",
      },
      {
        value: "9 min",
        label: "average doctor time spent on writing each prescription",
        caption: "Hand-written + repeat-typing",
      },
      {
        value: "60%",
        label: "of patients never receive a structured follow-up",
        caption: "Across small + mid clinics",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Five patient-affecting moments. All of them, manual.",
    lede: "Every step of a patient's journey today happens on a different surface — and most of those surfaces are paper, WhatsApp, or someone's memory.",
    items: [
      {
        icon: PhoneCall,
        title: "Calls go unanswered",
        body: "Inbound appointment calls flood the front desk during peak hours. Anything missed becomes a lost patient — and there's no record of who called or why.",
      },
      {
        icon: CalendarDays,
        title: "Bookings live in a notebook",
        body: "Slot management runs on memory and a register. Reminders, rescheduling, and waitlists are all manual — every cancellation is a guess at how to fill the slot.",
      },
      {
        icon: ClipboardList,
        title: "Prescriptions are still hand-written",
        body: "Doctors lose minutes per patient writing the same medications, dosages, and instructions. Pharmacies struggle to read them. Patients lose them on the way home.",
      },
      {
        icon: AlarmClock,
        title: "Follow-ups never happen",
        body: "Once the patient leaves, the loop ends. No automated SMS for booking confirmation, slot changes, or post-visit care — so adherence and re-engagement stay low.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for healthcare",
    title: "Three connected products. One patient record.",
    lede: "Each product handles a stage of the patient journey, and they all write into the same patient record — so the front desk, the doctor, and the pharmacy see the same truth at the same time.",
    entries: [
      {
        productSlug: "vitacare",
        role: "Anchor platform — appointments, telehealth, EHR, digital prescriptions, and an AI call receptionist on one screen.",
      },
      {
        productSlug: "intellix",
        role: "Multilingual voice + chat assistants that handle inbound enquiries, bookings, and FAQs around the clock.",
      },
      {
        productSlug: "meetrix",
        role: "Captures case-conference and multi-doctor meeting transcripts so the right notes land in the right patient file.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "From the solo doctor to the multi-location hospital group.",
    lede: "The same stack scales — what changes is which products lead and how the patient record is shared across roles.",
    items: [
      {
        icon: UserRound,
        title: "Solo doctors & specialists",
        body: "VitaCare runs the entire practice from one tablet — appointments, prescriptions, follow-up SMS — without hiring a receptionist or buying three separate tools.",
      },
      {
        icon: Hospital,
        title: "Mid-size clinics & polyclinics",
        body: "Front desk, doctors, and pharmacy work off one connected record. VitaCare runs the appointments, EHR, and prescriptions; Intellix handles the call overflow during peak hours; nothing slips between visits.",
      },
      {
        icon: Users,
        title: "Hospital groups & clinic chains",
        body: "Standardise patient experience across locations. Meetrix captures cross-doctor case discussions; AI receptionists handle every branch's inbound calls in any local language.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Measurable from day one.",
    lede: "These outcomes show up on dashboards in the first quarter — not after a year of change-management.",
    items: [
      {
        icon: PhoneCall,
        metric: "100% of calls answered",
        body: "An AI receptionist handles every inbound — books, reschedules, and answers FAQs in the local language. Zero missed first-impressions.",
      },
      {
        icon: TrendingDown,
        metric: "−40% no-shows",
        body: "Automatic SMS reminders for booking, the day before, and the day of — closing the gap that manual call-rounds always miss.",
      },
      {
        icon: Timer,
        metric: "9 → 2 min per prescription",
        body: "Digital prescription templates with structured drug + dosage selection cut prescription time by ~75% per patient.",
      },
      {
        icon: HeartPulse,
        metric: "3× follow-up engagement",
        body: "Structured post-visit messaging and review nudges turn a one-time visit into a long-term patient relationship.",
      },
    ],
  },
};

/**
 * Five patient-flow stations rendered by the bespoke HealthcareFlowRibbon
 * hero. Each station maps to a moment in the patient journey + the
 * Infizia product that handles it.
 */
export const HEALTHCARE_FLOW_STATIONS = [
  {
    n: "01",
    label: "Call",
    icon: PhoneCall,
    handler: "Intellix",
    detail: "Multilingual AI receptionist · 24×7",
  },
  {
    n: "02",
    label: "Book",
    icon: CalendarDays,
    handler: "VitaCare",
    detail: "Slots · waitlist · auto-reminders",
  },
  {
    n: "03",
    label: "Visit",
    icon: Stethoscope,
    handler: "VitaCare",
    detail: "EHR · vitals · history at hand",
  },
  {
    n: "04",
    label: "Prescribe",
    icon: FileText,
    handler: "VitaCare",
    detail: "Digital prescription · pharmacy-ready",
  },
  {
    n: "05",
    label: "Follow-up",
    icon: Activity,
    handler: "VitaCare",
    detail: "SMS · review · re-engagement",
  },
] as const;

export const HEALTHCARE_BADGES = [
  { icon: ShieldCheck, label: "Patient-data first" },
  { icon: Languages, label: "Multilingual receptionist" },
  { icon: BrainCircuit, label: "AI clinical assistant" },
] as const;
