/**
 * Blog post data — typed list + content as JSX.
 *
 * Architecture choice: posts live as inline JSX inside this file rather
 * than MDX. Reasons:
 *   • One post today; MDX setup overhead isn't justified yet.
 *   • Posts can use the same accent colours, Reveal motion, and
 *     site-wide primitives as everything else without extra plumbing.
 *   • When the catalogue grows past ~5 posts, swap to MDX in v2.
 *
 * Each post is rendered by `web/src/app/resources/blog/[slug]/page.tsx`
 * and listed by `web/src/app/resources/blog/page.tsx`.
 */

import type { ReactNode } from "react";
import Link from "next/link";
import type { ProductAccent } from "@/lib/product-accents";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date — when the post was published */
  date: string;
  /** Approximate reading time in minutes */
  readTime: number;
  /** Author name (or "Infizia Engineering" for org bylines) */
  author: string;
  /** 3–5 short tags shown on the card and in the post header */
  tags: string[];
  /** Brand accent for the post — drives hero gradient + tag pills */
  accent: ProductAccent;
  /** Optional product slug if the post is tied to a specific product */
  productSlug?: string;
  /** Body of the post, rendered inside a styled prose container */
  body: ReactNode;
};

export const POSTS: BlogPost[] = [
  {
    slug: "tier-2-clinic-ai-receptionist",
    title:
      "The afternoon black hole — why clinic phone lines are leaking bookings",
    excerpt:
      "A pattern we see across single-doctor clinic deployments: the front desk works mornings, voicemail eats afternoons, and roughly a quarter of weekday booking attempts never make it onto the calendar. Here's what's actually happening, and three building blocks that close the gap.",
    date: "2026-05-30",
    readTime: 6,
    author: "Infizia Engineering",
    tags: ["Healthcare", "AI Receptionist", "VitaCare", "Operations"],
    accent: "green",
    productSlug: "vitacare",
    body: (
      <>
        <p>
          If you run a clinic with a single front-desk person and a phone
          line that has to cover the rest of the day, there&rsquo;s a
          good chance you&rsquo;re losing more bookings than you think.
          Across the single-doctor and small-clinic deployments
          we&rsquo;ve worked on, the same shape keeps showing up: roughly{" "}
          <strong>20 to 30% of weekday booking attempts</strong> never
          make it onto the calendar. That isn&rsquo;t a quirk of any one
          clinic — it&rsquo;s structural, and it&rsquo;s fixable.
        </p>

        <h2>What&rsquo;s actually happening</h2>
        <p>
          Three things, repeated every weekday:
        </p>
        <ul>
          <li>
            <strong>The morning is staffed</strong>, the front desk
            answers calls and books appointments. The system mostly
            works.
          </li>
          <li>
            <strong>The afternoon goes to voicemail.</strong> Patients
            who try to call between 1 and 7 PM either get a busy line, a
            voicemail nobody listens to until evening, or no answer at
            all. A surprising fraction don&rsquo;t leave a message —
            they hang up and call another clinic.
          </li>
          <li>
            <strong>Evenings produce callbacks, not bookings.</strong>{" "}
            By the time the doctor or front desk plays back the day&rsquo;s
            voicemails, half the patients have already booked elsewhere
            or moved on.
          </li>
        </ul>
        <p>
          Layered on top of this is the no-show problem: of the
          appointments that do make it onto the calendar, around{" "}
          <strong>10 to 15%</strong> typically don&rsquo;t show up,
          usually because nothing reminded the patient between booking
          and visit.
        </p>

        <h2>Why hiring more reception isn&rsquo;t the fix</h2>
        <p>
          The natural reflex is to add another receptionist for the
          afternoon shift. The math rarely works for single-doctor
          clinics — the cost of a second hire eats most of the upside
          from the recovered bookings, and turnover at that pay grade
          is high enough that you&rsquo;re re-training every six months.
        </p>
        <p>
          The work that&rsquo;s actually leaking — answering a phone,
          confirming a slot, sending a reminder — is also the work that
          rule-following automation handles cleanly. So this is a
          textbook case for putting an AI receptionist alongside the
          human team, not replacing them.
        </p>

        <h2>Three surfaces, one record</h2>
        <p>
          The pattern that consistently moves the numbers in our
          deployments has three building blocks. None of them is novel
          on its own — what matters is that they share the same
          appointment record underneath:
        </p>
        <ol>
          <li>
            <strong>An AI receptionist on the clinic phone line.</strong>{" "}
            Calls that hit the clinic number out-of-hours and during
            staffed-but-busy stretches ring through to a virtual front
            desk. It speaks the patient&rsquo;s preferred language,
            captures the basics, and offers the next two available
            slots.
          </li>
          <li>
            <strong>A WhatsApp booking flow.</strong> Patients who
            don&rsquo;t want to call get the same booking experience as
            a chat — same slot view, same confirmation, same record on
            the back end.
          </li>
          <li>
            <strong>SMS reminders for every booked slot.</strong>{" "}
            Confirmation when the slot is locked, reminder the morning
            of the appointment, and a one-tap reschedule link if life
            got in the way.
          </li>
        </ol>

        <h2>The architecture point</h2>
        <p>
          The interesting bit isn&rsquo;t the AI itself. It&rsquo;s that
          the three surfaces — phone, WhatsApp, the clinic dashboard —
          read from and write to the <em>same</em> appointment record.
          The receptionist sees the same slot the AI sees. The patient&rsquo;s
          chat history sits next to their appointment. The reminder SMS
          is sent by the same scheduler that moved the slot in the first
          place.
        </p>
        <p>
          That&rsquo;s the practical version of what we mean when we
          talk about <em>one cognitive stack</em>. The AI receptionist
          isn&rsquo;t a bolt-on chatbot, it&rsquo;s a participant in the
          same calendar and the same patient record that the human team
          works in. When you later add digital prescriptions or
          telehealth, those run on the same identity layer and the same
          records — no second integration, no second login.
        </p>
        <p>
          On our deployments this is{" "}
          <Link
            href="/products/vitacare"
            className="text-brand-teal hover:underline"
          >
            VitaCare
          </Link>
          . The principle generalises — but the principle and the
          implementation aren&rsquo;t the same thing, and getting the
          shared-record part right is what produces the operational
          lift.
        </p>

        <h2>Disciplines that decide whether it works</h2>
        <p>
          Across deployments, the clinics that get the full lift do
          three small things consistently in the first month. The ones
          that don&rsquo;t do them get a partial lift and assume the
          system is mediocre, when really the system needed feeding.
        </p>
        <ul>
          <li>
            <strong>Curate the FAQ.</strong> The receptionist gets
            sharper as the team adds the 30 to 50 questions patients
            actually ask. Hours, parking, payment modes, what paperwork
            to bring, what an MRI report should look like — all of these
            live in a knowledge base the AI reads from at conversation
            time.
          </li>
          <li>
            <strong>Spot-check transcripts daily for the first two
              weeks.</strong>{" "}
            Every conversation is logged. Reading the first hundred or
            so transcripts catches mis-spelt names, wrong slot
            offerings, and the tone problems that need a small prompt
            tweak.
          </li>
          <li>
            <strong>Set hand-off rules early.</strong> Some calls are
            not for the AI — emergencies, complex billing questions,
            patients who want the doctor specifically. The hand-off list
            lives in the dashboard and the receptionist updates it
            whenever something new comes up.
          </li>
        </ul>

        <h2>What the numbers look like</h2>
        <p>
          The shape of the change, again from observation across
          deployments rather than a controlled experiment:
        </p>
        <ul>
          <li>
            <strong>Same-day weekday bookings roughly double.</strong>{" "}
            The afternoon black hole gets covered. Most of the new
            volume is calls that previously fell into voicemail.
          </li>
          <li>
            <strong>No-show rate falls by a half to two-thirds.</strong>{" "}
            The morning-of SMS reminder is the single biggest driver.
            Roughly a third of patients who would otherwise no-show
            instead use the reschedule link and keep the appointment
            for later in the week.
          </li>
          <li>
            <strong>The front desk gets time back.</strong> The morning
            shift spends most of their time on patients in the room
            rather than the phone — registration, triage, payment.
          </li>
          <li>
            <strong>After-hours coverage becomes a real channel.</strong>{" "}
            Clinics typically capture another 7 to 10 booking
            conversations per day outside the staffed window, half of
            which convert to actual appointments.
          </li>
        </ul>

        <h2>The honest part</h2>
        <p>
          AI receptionists are not magic and they don&rsquo;t replace
          the front desk on day one. What they do well is turn the
          afternoons and the after-hours into productive booking time,
          and pull the no-show rate down through reliable reminders.
          For a single-doctor clinic, that is usually worth the
          investment by month two.
        </p>
        <p>
          For a multi-doctor practice or a hospital, the same building
          blocks scale up — the calendar gets multi-resource, the
          knowledge base grows per department, and the SMS layer turns
          into a triage and queue management system. That&rsquo;s a
          longer write-up; we&rsquo;ll publish it once a couple of
          larger deployments cross the 90-day mark.
        </p>

        <hr />

        <p>
          <em>
            If any of this sounds like your week, book a 30-minute call
            and we&rsquo;ll walk through what a deployment looks like
            for your set-up.
          </em>
        </p>
      </>
    ),
  },
];

/** Helper — get a single post by slug, or null if not found. */
export function getPost(slug: string): BlogPost | null {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
