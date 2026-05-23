"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bell,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  Pill,
  Send,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";
import type { ShowcaseMoment } from "@/components/products/ProductShowcase";

/**
 * Four scenario visuals for VitaCare's ProductShowcase slider.
 * Each is a desktop-style UI fragment showing VitaCare in a real
 * clinic situation — different format from the calendar dashboard
 * that lives in the hero.
 */

export const VITACARE_SHOWCASE_MOMENTS: ShowcaseMoment[] = [
  {
    id: "morning",
    kicker: "Monday · 9:00 AM",
    title: "Open the day. Clinic already running.",
    body: "VitaCare loads today's calendar with every appointment confirmed, every reminder sent overnight. The smart queue is live the moment your first patient walks in.",
    visual: <ScenarioMorning />,
  },
  {
    id: "intimations",
    kicker: "Tuesday · SMS intimations",
    title: "Every change. SMSed instantly.",
    body: "Booking confirmed, slot cancelled, clinic closed for the day — VitaCare sends an SMS the moment something changes. Patients always know where they stand. No-shows, walk-ins to a closed door, and confused calls disappear.",
    visual: <ScenarioIntimations />,
  },
  {
    id: "prescription",
    kicker: "Wednesday · in consult",
    title: "Write a prescription. Patient gets it on WhatsApp.",
    body: "Mid-consult, you tap once on a digital Rx with medicine, dosage, and duration. It's signed and delivered to the patient's phone before they leave the chair.",
    visual: <ScenarioPrescription />,
  },
  {
    id: "reminders",
    kicker: "Thursday · automation",
    title: "Reminders firing. Adherence rising.",
    body: "Morning medicine pings, vaccine schedules for next week's children, and post-visit follow-ups — VitaCare runs them all in the background, branded with your clinic, while you see patients.",
    visual: <ScenarioReminders />,
  },
];

/* -------------------------------------------------------------------------- */
/*  Scenario 1: Morning calendar overview                                     */
/* -------------------------------------------------------------------------- */

function ScenarioMorning() {
  const slots = [
    { time: "09:00", patient: "Anita R.", reason: "Follow-up · BP", state: "done" },
    { time: "09:30", patient: "Rohit S.", reason: "New · Cough", state: "done" },
    { time: "10:00", patient: "Meera K.", reason: "Pediatric", state: "in-consult" },
    { time: "10:30", patient: "Vikas P.", reason: "Vaccine · Tdap", state: "waiting" },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
          </div>
          <p className="ml-3 flex items-center gap-2 text-[11px] font-mono text-text-faint">
            <Sparkles className="h-3 w-3 text-brand-green" />
            VitaCare · Today
          </p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-green">
          Live
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-base font-semibold text-white">
            Mon · 23 May · 12 booked
          </p>
          <span className="flex items-center gap-1 rounded-full bg-brand-green/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-green">
            <CheckCircle2 className="h-2.5 w-2.5" />
            All confirmed
          </span>
        </div>

        {slots.map((slot, i) => (
          <motion.div
            key={slot.time}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
          >
            <span className="font-mono text-xs text-text-faint">{slot.time}</span>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {slot.patient}
              </p>
              <p className="truncate text-xs text-text-muted">{slot.reason}</p>
            </div>
            {slot.state === "in-consult" ? (
              <span className="flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-green">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-brand-green"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                In consult
              </span>
            ) : slot.state === "waiting" ? (
              <span className="rounded-full bg-brand-teal/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-teal">
                Waiting
              </span>
            ) : (
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-text-faint">
                Done
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scenario 2: SMS intimations — three event types (booking / cancellation / closure) */
/* -------------------------------------------------------------------------- */

function ScenarioIntimations() {
  const messages = [
    {
      type: "Booking confirmed",
      typeIcon: CheckCircle2,
      typeColor: "text-brand-green",
      typeBg: "bg-brand-green/15 border-brand-green/30",
      time: "11:04 AM",
      patient: "Anita R.",
      message:
        "Hi Anita, your appointment with Dr. Sharma on Wed, 28 May at 10:30 AM is confirmed. Reply HELP for assistance.",
      delay: 0,
    },
    {
      type: "Slot cancelled",
      typeIcon: X,
      typeColor: "text-red-400",
      typeBg: "bg-red-500/15 border-red-500/30",
      time: "11:18 AM",
      patient: "Rohit S.",
      message:
        "Hi Rohit, your 4:00 PM slot on Thu, 29 May has been cancelled. Tap to rebook: vitacare.in/r/2j8 — sorry for the inconvenience.",
      delay: 0.15,
    },
    {
      type: "Clinic closed",
      typeIcon: AlertTriangle,
      typeColor: "text-amber-400",
      typeBg: "bg-amber-500/15 border-amber-500/30",
      time: "8:42 AM",
      patient: "All patients · 14 Jun",
      message:
        "Dr. Sharma's clinic will remain closed on Sat, 14 Jun (Doctor unavailable). All appointments are auto-rescheduled — check SMS.",
      delay: 0.3,
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4 text-brand-green" />
          SMS intimations · today
        </p>
        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-green">
          3 sent · auto
        </span>
      </div>

      {/* SMS messages */}
      <div className="space-y-3 p-5">
        {messages.map((m) => {
          const Icon = m.typeIcon;
          return (
            <motion.div
              key={m.type}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: m.delay }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
            >
              {/* Top row: type pill + time */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${m.typeBg} ${m.typeColor}`}
                >
                  <Icon className="h-2.5 w-2.5" strokeWidth={2.5} />
                  {m.type}
                </span>
                <span className="font-mono text-[9px] text-text-faint">
                  {m.time}
                </span>
              </div>

              {/* To */}
              <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-text-faint">
                To · {m.patient}
              </p>

              {/* Message bubble */}
              <div className="mt-1.5 rounded-lg rounded-bl-sm bg-bg-base/60 px-3 py-2">
                <p className="text-[11px] leading-snug text-text-secondary">
                  {m.message}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer summary */}
      <div className="border-t border-white/5 px-5 py-3">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-faint">
          <Sparkles className="h-3 w-3 text-brand-green" />
          Every patient-affecting event → instant SMS, every time
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scenario 3: Digital prescription written and sent                          */
/* -------------------------------------------------------------------------- */

function ScenarioPrescription() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
      {/* Doctor's prescription panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface md:col-span-3">
        <div className="border-b border-white/5 bg-bg-base px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <Stethoscope className="h-4 w-4 text-brand-green" />
            Write Prescription
          </p>
        </div>
        <div className="space-y-2.5 p-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-text-faint">Patient:</span>
            <span className="font-semibold text-white">Meera K. · 6 yrs</span>
          </div>

          {[
            { name: "Amoxicillin 250mg", dose: "1 tablet · 3× daily · 5 days" },
            { name: "Paracetamol syrup", dose: "5ml · 3× daily · as needed" },
            { name: "Probiotic", dose: "1 sachet · once daily · 7 days" },
          ].map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5"
            >
              <Pill className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
              <div>
                <p className="text-xs font-semibold text-white">{m.name}</p>
                <p className="text-[10px] text-text-muted">{m.dose}</p>
              </div>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green py-2.5 text-bg-base shadow-[0_8px_20px_-4px_rgba(0,210,106,0.5)]"
          >
            <Send className="h-3.5 w-3.5" />
            <span className="text-xs font-semibold">Sign + Send to Patient</span>
          </motion.button>
        </div>
      </div>

      {/* Patient's phone */}
      <div className="md:col-span-2 flex items-center justify-center">
        <div className="relative w-full max-w-[200px]">
          <div className="rounded-3xl border border-white/10 bg-bg-elevated p-2 shadow-2xl">
            <div className="overflow-hidden rounded-2xl bg-bg-base p-3">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                <MessageCircle className="h-3 w-3 text-brand-green" />
                <p className="text-[9px] font-semibold text-white">WhatsApp · Dr. Sharma</p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-3 rounded-xl rounded-bl-sm bg-white/[0.04] px-2.5 py-2"
              >
                <p className="font-mono text-[8px] uppercase tracking-wider text-brand-green">
                  Prescription · Meera K.
                </p>
                <div className="mt-1.5 space-y-1">
                  <p className="text-[8.5px] text-text-secondary">• Amoxicillin 250mg</p>
                  <p className="text-[8.5px] text-text-secondary">• Paracetamol syrup</p>
                  <p className="text-[8.5px] text-text-secondary">• Probiotic</p>
                </div>
                <p className="mt-2 flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-brand-green">
                  <CheckCircle2 className="h-2.5 w-2.5" />
                  Signed by Dr. Sharma
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scenario 4: Reminders firing                                              */
/* -------------------------------------------------------------------------- */

function ScenarioReminders() {
  const reminders = [
    {
      icon: Pill,
      type: "Medicine",
      to: "Anita R.",
      message: "Take your 9 AM dose · BP",
      colorClass: "bg-brand-green/10 text-brand-green",
      typeColor: "text-brand-green",
      time: "8:55 AM",
    },
    {
      icon: Syringe,
      type: "Vaccine",
      to: "Aarav (parent)",
      message: "Tdap booster due in 7 days",
      colorClass: "bg-brand-blue/10 text-brand-blue",
      typeColor: "text-brand-blue",
      time: "10:00 AM",
    },
    {
      icon: CalendarCheck,
      type: "Follow-up",
      to: "Rohit S.",
      message: "Cough check — book a 5-day review",
      colorClass: "bg-brand-teal/10 text-brand-teal",
      typeColor: "text-brand-teal",
      time: "11:30 AM",
    },
    {
      icon: Bell,
      type: "Recall",
      to: "Sunita J.",
      message: "Annual diabetes check-up due",
      colorClass: "bg-brand-green/10 text-brand-green",
      typeColor: "text-brand-green",
      time: "2:00 PM",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/5 bg-bg-base px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <Bell className="h-4 w-4 text-brand-green" />
          Today&rsquo;s reminders · auto-sent
        </p>
        <span className="font-mono text-[10px] uppercase tracking-wider text-brand-green">
          24 sent · 18 confirmed
        </span>
      </div>

      <div className="space-y-2 p-5">
        {reminders.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.to}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${r.colorClass}`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider ${r.typeColor}`}
                  >
                    {r.type}
                  </span>
                  <span className="text-[10px] text-text-faint">→ {r.to}</span>
                </div>
                <p className="mt-0.5 text-xs text-text-secondary">{r.message}</p>
              </div>
              <span className="font-mono text-[9px] text-text-faint shrink-0">
                {r.time}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="border-t border-white/5 px-5 py-3">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-faint">
          <Users className="h-3 w-3 text-brand-green" />
          Adherence rate this week:{" "}
          <span className="text-brand-green">87%</span>
        </p>
      </div>
    </div>
  );
}
