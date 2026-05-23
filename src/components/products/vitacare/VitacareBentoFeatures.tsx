"use client";

import { motion } from "framer-motion";
import {
  Bell,
  CalendarClock,
  Headset,
  MessageCircle,
  MessageSquare,
  Pill,
  Sparkles,
  Syringe,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Bento-style features grid for VitaCare.
 *
 * Hero tile: digital prescription on patient phone (mini SMS / WhatsApp UI).
 * Wide tile: smart calendar showing buffer-time logic.
 * Five standard tiles for the rest.
 */
export function VitacareBentoFeatures() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

      <Container>
        <SectionHeader
          kicker="Features"
          title="Everything your clinic needs. Nothing you have to babysit."
          lede="Each capability is built around the same job: protect the doctor's time and keep the patient experience seamless from first call to long-term care."
          gradient
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Hero tile — Digital Rx on patient phone (col-span-2) */}
          <Reveal className="lg:col-span-2">
            <HeroPrescriptionTile />
          </Reveal>

          {/* Standard tile — AI receptionist */}
          <Reveal delay={0.05}>
            <StandardTile
              Icon={Headset}
              title="AI receptionist + WhatsApp chatbot"
              body="Never miss a patient call. Books appointments, answers FAQs, handles missed calls, escalates urgent cases — 24/7."
            />
          </Reveal>

          {/* Standard tile — Smart queue */}
          <Reveal delay={0.1}>
            <StandardTile
              Icon={Users}
              title="Smart queue management"
              body="Real-time clinic dashboard shows who's arrived, who's next, who's in consult, who's a no-show — across rooms and doctors."
            />
          </Reveal>

          {/* Standard tile — SMS intimations for every change */}
          <Reveal delay={0.12}>
            <StandardTile
              Icon={MessageSquare}
              title="SMS intimations for every change"
              body="Every patient-affecting event sends an instant SMS — booking confirmation, slot cancellation, clinic closure for the day. No missed updates, no patients showing up to a closed clinic."
            />
          </Reveal>

          {/* Standard tile — Medicine reminders */}
          <Reveal delay={0.15}>
            <StandardTile
              Icon={Pill}
              title="Medicine reminders"
              body="Automated adherence pings on SMS and WhatsApp. Patients confirm dose, you see compliance, refills happen on time."
            />
          </Reveal>

          {/* Wide tile — Smart Calendar (col-span-2) */}
          <Reveal delay={0.18} className="lg:col-span-2">
            <SmartCalendarTile />
          </Reveal>

          {/* Standard tile — Vaccine reminders */}
          <Reveal delay={0.2}>
            <StandardTile
              Icon={Syringe}
              title="Vaccine reminders"
              body="Scheduled vaccine alerts for children and adults, branded with your clinic. Never let a follow-up shot slip through the cracks."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tiles                                                                     */
/* -------------------------------------------------------------------------- */

function StandardTile({
  Icon,
  title,
  body,
}: {
  Icon: typeof Bell;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-green/40 md:p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-green/60 via-brand-green/0 to-brand-green/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-green/[0.08] blur-3xl opacity-0 transition-opacity group-hover:opacity-60" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

function HeroPrescriptionTile() {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-brand-green/20 bg-gradient-to-br from-bg-surface via-bg-surface to-brand-green/[0.04] p-6 transition-all hover:border-brand-green/40 md:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/60 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/[0.12] blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
              <Pill className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-green">
              Most-loved
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            Digital prescriptions on SMS + WhatsApp
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            Write once. Signed digital prescription with medicine, dosage, and
            duration delivered to the patient&rsquo;s phone in seconds. No printing,
            no scanning, no lost slips.
          </p>
        </div>

        {/* Mini phone showing patient-side Rx */}
        <div className="relative">
          <div className="rounded-2xl border border-white/5 bg-bg-base/80 p-3 backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
              <MessageCircle className="h-3 w-3 text-brand-green" />
              <p className="text-[10px] font-semibold text-white">
                WhatsApp · Dr. Sharma
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mt-2.5 rounded-xl rounded-bl-sm bg-white/[0.04] p-2.5"
            >
              <p className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-brand-green">
                <Sparkles className="h-2.5 w-2.5" />
                Prescription
              </p>
              <p className="mt-1.5 text-[10px] font-semibold text-white">
                Meera K. · 6 yrs · OPD
              </p>
              <div className="mt-1.5 space-y-0.5">
                <p className="text-[9px] text-text-secondary">
                  • Amoxicillin 250mg · 3× / 5d
                </p>
                <p className="text-[9px] text-text-secondary">
                  • Paracetamol syrup · prn
                </p>
                <p className="text-[9px] text-text-secondary">
                  • Probiotic · 1× / 7d
                </p>
              </div>
              <p className="mt-2 font-mono text-[8.5px] uppercase tracking-wider text-brand-green">
                Signed · Dr. Sharma
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 rounded-xl rounded-br-sm bg-brand-green/15 px-2.5 py-1.5 ml-auto max-w-[80%]"
            >
              <p className="text-[10px] text-white">Got it, thank you doctor 🙏</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartCalendarTile() {
  const slots = [
    { time: "9:00", label: "Anita R.", state: "done" },
    { time: "9:25", label: "buffer", state: "buffer" },
    { time: "9:30", label: "Rohit S.", state: "done" },
    { time: "10:00", label: "Meera K.", state: "in-consult" },
    { time: "10:20", label: "buffer", state: "buffer" },
    { time: "10:30", label: "Vikas P.", state: "waiting" },
  ];

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-bg-surface p-6 transition-all hover:border-brand-green/40 md:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-green/60 via-brand-green/0 to-brand-green/0 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 md:items-center">
        <div className="md:col-span-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/10 text-brand-green">
            <CalendarClock className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            Smart calendar with configurable buffer times
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
            Different buffer times per appointment type — short for consults,
            longer for procedures. No double-booking, no rushed visits, every
            slot is honored.
          </p>
        </div>

        {/* Mini calendar visual */}
        <div className="md:col-span-2">
          <div className="space-y-1.5 rounded-xl border border-white/5 bg-bg-base/60 p-3">
            <p className="font-mono text-[9px] uppercase tracking-wider text-text-faint">
              Today · Smart Calendar
            </p>
            {slots.map((s) => {
              if (s.state === "buffer") {
                return (
                  <div key={s.time} className="flex items-center gap-2 px-1">
                    <span className="font-mono text-[8.5px] text-text-faint w-9">
                      {s.time}
                    </span>
                    <span className="flex-1 rounded-full bg-white/[0.02] py-0.5 text-center text-[7.5px] font-mono uppercase tracking-wider text-text-faint">
                      buffer
                    </span>
                  </div>
                );
              }

              const stateStyle = {
                done: { dot: "bg-text-faint", border: "border-white/5" },
                "in-consult": { dot: "bg-brand-green", border: "border-brand-green/40 bg-brand-green/[0.06]" },
                waiting: { dot: "bg-brand-teal", border: "border-white/10" },
              }[s.state as "done" | "in-consult" | "waiting"];

              return (
                <div
                  key={s.time}
                  className={`flex items-center gap-2 rounded-md border px-2 py-1.5 ${stateStyle.border}`}
                >
                  <span className="font-mono text-[8.5px] text-text-faint w-9">
                    {s.time}
                  </span>
                  <span className="flex-1 truncate text-[10px] font-semibold text-white">
                    {s.label}
                  </span>
                  {s.state === "in-consult" ? (
                    <motion.span
                      className={`h-1.5 w-1.5 rounded-full ${stateStyle.dot}`}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                  ) : (
                    <span className={`h-1.5 w-1.5 rounded-full ${stateStyle.dot}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
          + Configurable per
        </span>
        {["Doctor", "Specialty", "Appointment type", "Day of week"].map(
          (chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] text-text-secondary"
            >
              {chip}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
