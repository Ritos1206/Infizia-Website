/**
 * Media & Publishing solution — content brief.
 *
 * Brand accent: purple (matches E-News). The hero idiom is a story
 * lifecycle clock — a 12-hour clockface with 6 spokes representing the
 * editorial day (Morning brief → Draft → Review → Publish → Distribute
 * → Engage). A clockwise sweep arm rotates around the dial slowly,
 * highlighting the active stage. Argues "the newsroom isn't a list of
 * tasks; it's a daily rhythm".
 *
 * Mapped products:
 *   • E-News (anchor — newsroom workspace, editorial workflow,
 *     publishing, audience engagement, monetisation)
 *   • Meetrix (every editorial meeting + interview captured as
 *     transcript + summary, ready to drop into stories)
 *   • Intellix (audience-side support — newsletter + subscription
 *     queries, multilingual reader chat)
 */

import {
  AlarmClock,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  Edit3,
  Eye,
  FileText,
  Globe,
  Headphones,
  Layers,
  LineChart,
  Mail,
  Megaphone,
  MessageCircle,
  Newspaper,
  PenLine,
  Radio,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const mediaPublishingContent: SolutionContent = {
  slug: "media-publishing",
  name: "Media & Publishing",
  verticalLabel: "Media & Publishing",
  accent: "purple",

  tagline: "Brief to byline to push notification — on one clock.",

  positioning:
    "Modern publishing is not a CMS — it's a daily clock that has to land on time, every time, across web, app, newsletter, social, and push. Most newsrooms run that clock on a CMS for content, a chat group for coordination, a dashboard for analytics, an email tool for newsletters, and a separate stack for subscribers. The seams are where stories are missed and audiences are lost. Infizia replaces that with one workspace that follows a story from morning brief to engaged reader — every editorial moment captured, every channel served, every subscriber retained.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where editorial energy gets lost.",
    lede: "Every minute spent reconciling tools is a minute the newsroom isn't writing — and a minute the audience is reading someone else.",
    items: [
      {
        value: "5+",
        label: "tools the typical newsroom uses for one story cycle",
        caption: "CMS · chat · email · social · analytics",
      },
      {
        value: "<3 hrs",
        label: "is the half-life of a digital news story today",
        caption: "Reader attention drops fast",
      },
      {
        value: "47%",
        label: "of editorial meetings are never captured or actioned",
        caption: "When run on video calls without transcripts",
      },
      {
        value: "1 in 3",
        label: "subscribers churn within their first 90 days",
        caption: "Without active engagement",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four frictions every newsroom is paying for.",
    lede: "Tooling sprawl, slow workflows, missed editorial context, and audiences that walk — the universal news-floor four-pack.",
    items: [
      {
        icon: Layers,
        title: "Five tools, one story",
        body: "Brief in chat, draft in CMS, review in another doc, publish in a third tool, distribute in a fourth. Every handover is a chance to drop the ball.",
      },
      {
        icon: AlarmClock,
        title: "Workflow stalls between roles",
        body: "Draft sits in review for hours waiting for an editor. Final approvals get bottlenecked on a senior who's at lunch. The clock keeps ticking; the story gets stale.",
      },
      {
        icon: MessageCircle,
        title: "Editorial meetings vanish",
        body: "Morning briefs, interview recordings, off-the-record sources — all captured nowhere. Reporters retype the same notes. The institutional memory leaks daily.",
      },
      {
        icon: Bell,
        title: "Subscribers walk silently",
        body: "Three months in, half the new subscribers stop opening the newsletter. The platform doesn't surface it until the renewal lapses — and by then they're gone.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for media",
    title: "Three products. One newsroom rhythm.",
    lede: "E-News runs the clock. Meetrix catches every editorial moment. Intellix keeps subscribers engaged in their own language.",
    entries: [
      {
        productSlug: "enews",
        role: "Anchor — newsroom workspace, editorial workflow, multi-channel publishing, audience engagement, and subscriber monetisation on one platform.",
      },
      {
        productSlug: "meetrix",
        role: "Captures every editorial meeting, interview, and recording — transcripts and summaries dropped straight into the right story or beat.",
      },
      {
        productSlug: "intellix",
        role: "Audience-side multilingual chat — handles newsletter signups, subscription queries, content recommendations, and reader feedback at scale.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "From the regional bureau to the national newsroom.",
    lede: "Whether the newsroom is 5 reporters or 500, the clock is the same — and the same stack scales to whatever surface, language, and audience is in front of it.",
    items: [
      {
        icon: Newspaper,
        title: "Digital newsrooms & news portals",
        body: "Edit-to-publish in one workspace, every distribution channel served from the same story record, and every editorial moment captured by Meetrix as it happens.",
      },
      {
        icon: BookOpen,
        title: "Regional & language publishers",
        body: "Multi-language editorial workflows, AI-assisted translations and summaries, and Intellix handling reader queries in any local language.",
      },
      {
        icon: Building2,
        title: "Specialist publishers & subscription media",
        body: "Tight subscriber lifecycles, paywall-aware delivery, and engagement nudges that catch fade-out before churn — running on the same E-News record as editorial.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Faster stories. Stickier audiences. Lower churn.",
    lede: "Every minute saved on coordination is a minute spent reporting; every subscriber re-engaged is a renewal saved.",
    items: [
      {
        icon: Workflow,
        metric: "Brief → publish in 90 min",
        body: "Editorial workflow consolidates onto one workspace — drafting, review, sub-edit, approve, publish — collapsing the cycle from hours to minutes.",
      },
      {
        icon: Sparkles,
        metric: "100% meetings captured",
        body: "Every morning brief, every interview, every editorial review produces a transcript + summary attached to the right beat or story.",
      },
      {
        icon: Megaphone,
        metric: "5 channels · one push",
        body: "One story published once, distributed across web, mobile, newsletter, social, and push — automatically formatted for each channel.",
      },
      {
        icon: Users,
        metric: "−40% subscriber churn",
        body: "Engagement signals surface fading subscribers early. Personalised re-engagement and Intellix-powered conversations win them back before renewal.",
      },
    ],
  },
};

/**
 * Six editorial-day spokes for the StoryLifecycleClock hero.
 * Each spoke = a stage of the daily newsroom rhythm. The hero positions
 * them at the 6 even slots around a clock face (12 / 2 / 4 / 6 / 8 / 10
 * o'clock).
 */
export const MEDIA_CLOCK_SPOKES = [
  {
    label: "Morning brief",
    icon: Calendar,
    detail: "Standup · agenda · beats",
    timeLabel: "07:30",
  },
  {
    label: "Draft",
    icon: PenLine,
    detail: "Story takes shape",
    timeLabel: "09:00",
  },
  {
    label: "Review",
    icon: Edit3,
    detail: "Sub-edit · approvals",
    timeLabel: "11:00",
  },
  {
    label: "Publish",
    icon: Send,
    detail: "Live across channels",
    timeLabel: "13:00",
  },
  {
    label: "Distribute",
    icon: Megaphone,
    detail: "Newsletter · social · push",
    timeLabel: "16:00",
  },
  {
    label: "Engage",
    icon: Eye,
    detail: "Comments · subscribers · loop",
    timeLabel: "19:00",
  },
] as const;

export const MEDIA_BADGES = [
  { icon: Newspaper, label: "Newsroom workspace" },
  { icon: Workflow, label: "Editorial workflow · audited" },
  { icon: Globe, label: "Web · mobile · newsletter · social · push" },
  { icon: Bell, label: "Subscriber lifecycle · churn-aware" },
  { icon: BarChart3, label: "Real-time engagement metrics" },
  { icon: Mail, label: "Newsletter · personalised" },
  { icon: Headphones, label: "Multilingual reader chat" },
  { icon: TrendingUp, label: "Subscription growth · measurable" },
  { icon: LineChart, label: "Story half-life · tracked" },
  { icon: ChevronRight, label: "End-to-end on one platform" },
  { icon: Radio, label: "Live blogs · breaking news" },
  { icon: FileText, label: "Story record · single source" },
] as const;
