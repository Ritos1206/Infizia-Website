/**
 * VitaCare — flagship Healthcare product content.
 * Source of truth: docs/DEVLOG.md → "Finalized Product Content" → VitaCare.
 *
 * VitaCare is a complete digital clinic platform: smart appointment scheduling
 * with buffer times, smart queue management, cancellation auto-SMS rebooking,
 * digital prescriptions delivered via SMS/WhatsApp, medicine + vaccine
 * reminders, automated follow-ups, plus an AI call receptionist.
 *
 * Mirror any edits here back into the DEVLOG so the PPT deck and the page
 * stay in sync.
 */

import {
  Bell,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  Headset,
  HeartPulse,
  MessageSquare,
  Pill,
  Send,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

import type { FlagshipProductContent } from "./types";

export const vitacareContent: FlagshipProductContent = {
  slug: "vitacare",
  name: "VitaCare",
  vertical: "Healthcare",
  accent: "green",

  tagline: "Run a digital clinic. Without running an IT department.",

  positioning:
    "VitaCare is the AI-powered digital clinic platform built for doctors who want their clinic running on autopilot. Smart calendar with configurable buffer times, automatic cancellation-to-waitlist SMS handoff, digital prescriptions delivered straight to patients on SMS and WhatsApp, plus medicine reminders, vaccine schedules, and automated follow-ups. An AI call receptionist captures every inbound enquiry — so your practice keeps growing even when you\u2019re with a patient.",

  problem: {
    kicker: "The problem",
    title: "Doctors are clinicians, not operators.",
    body: "They juggle a paper appointment book, WhatsApp messages, manual reminder calls, paper prescriptions, and phone-tag for every missed call. Slots get double-booked. Cancellations leave gaps. Prescriptions get lost. Patients forget medicine schedules. VitaCare consolidates the entire clinic operation onto one digital surface so doctors can do what they trained for: practice medicine.",
  },

  flow: {
    kicker: "How VitaCare works",
    title: "From the first booking to the last refill. Handled.",
    lede: "The full patient journey on one platform — booking through long-term care — automated where it should be, controlled by you where it matters.",
    steps: [
      {
        n: "01",
        title: "Patient books an appointment",
        body: "Online slot picker, AI receptionist call, or WhatsApp chatbot — every booking auto-confirmed and reminded.",
        icon: CalendarCheck,
      },
      {
        n: "02",
        title: "Smart queue at the clinic",
        body: "Configurable buffer times prevent double-booking. Real-time queue dashboard shows who\u2019s arrived, who\u2019s next, who\u2019s no-show.",
        icon: Users,
      },
      {
        n: "03",
        title: "Consult and write a digital prescription",
        body: "Patient history at your fingertips. One-tap digital prescription with medicine, dosage, duration — signed and sent.",
        icon: Stethoscope,
      },
      {
        n: "04",
        title: "Patient gets it on SMS + WhatsApp",
        body: "Prescription delivered to the patient\u2019s phone in seconds. No printing, no scanning, no lost slips.",
        icon: Send,
      },
      {
        n: "05",
        title: "VitaCare keeps in touch",
        body: "Medicine reminders, vaccine schedules, post-visit follow-ups, recall messages \u2014 all on autopilot, branded with your clinic.",
        icon: Bell,
      },
    ],
  },

  features: {
    kicker: "Features",
    title: "Everything your clinic needs. Nothing you have to babysit.",
    lede: "Each capability is built around the same job: protect the doctor\u2019s time and keep the patient experience seamless from first call to long-term care.",
    items: [
      {
        icon: CalendarClock,
        title: "Smart calendar with configurable buffer times",
        body: "Different buffer times per appointment type \u2014 short for consults, longer for procedures. No double-booking, no rushed visits.",
      },
      {
        icon: Users,
        title: "Smart queue management",
        body: "Real-time clinic dashboard shows who\u2019s arrived, who\u2019s next, who\u2019s in consult, who\u2019s a no-show \u2014 across rooms and doctors.",
      },
      {
        icon: MessageSquare,
        title: "SMS intimations for every change",
        body: "Every patient-affecting event sends an instant SMS \u2014 booking confirmation, slot cancellation, clinic closure for the day. No missed updates, no patients showing up to a closed clinic.",
      },
      {
        icon: Pill,
        title: "Digital prescriptions on SMS + WhatsApp",
        body: "Write once. Signed digital prescription with medicine, dosage, duration delivered to the patient\u2019s phone in seconds.",
      },
      {
        icon: Bell,
        title: "Medicine reminders",
        body: "Automated adherence pings on SMS and WhatsApp \u2014 patients confirm dose, you see compliance, refills happen on time.",
      },
      {
        icon: Syringe,
        title: "Vaccine reminders",
        body: "Scheduled vaccine alerts for children and adults, branded with your clinic. Never let a follow-up shot slip through the cracks.",
      },
      {
        icon: Headset,
        title: "AI receptionist + WhatsApp chatbot",
        body: "Never miss a patient call. Books appointments, answers FAQs, handles missed calls, escalates urgent cases \u2014 24/7.",
      },
    ],
  },

  useCases: {
    kicker: "Who it\u2019s for",
    title: "Built for the doctors who wear every hat.",
    lede: "Whether you run a solo OPD practice, a multi-doctor clinic, or a high-volume pediatric or specialty practice \u2014 VitaCare scales without forcing you to hire an admin team.",
    items: [
      {
        icon: Stethoscope,
        title: "Solo OPD practitioners",
        body: "Independent doctors running busy outpatient clinics \u2014 VitaCare replaces the paper book, the WhatsApp coordination, the manual reminders, the printed prescriptions.",
      },
      {
        icon: HeartPulse,
        title: "Multi-doctor clinics",
        body: "Small to mid-size practices needing centralized scheduling across rooms, doctors, and specialties \u2014 with smart buffers and a real-time queue.",
      },
      {
        icon: ClipboardList,
        title: "Pediatric and specialty practices",
        body: "Heavy vaccine schedules, chronic-medication adherence, and recurring follow-ups \u2014 VitaCare\u2019s reminder engine is built for exactly this.",
      },
    ],
  },

  caseStudy: {
    intro:
      "A 3-doctor OPD clinic adopted VitaCare and replaced manual appointment books, WhatsApp coordination, paper prescriptions, and phone-call reminders.",
    stats: [
      { value: "+40%", label: "Cancellation slots rebooked" },
      { value: "\u221260%", label: "Prescription writing time" },
      { value: "\u221225%", label: "No-show rate" },
      { value: "+72%", label: "Vaccine recall adherence" },
    ],
  },
};
