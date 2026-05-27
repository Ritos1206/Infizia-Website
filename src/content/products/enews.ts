/**
 * E-News — Digital Publishing Platform.
 *
 * Single source of truth: `docs/brochures/enews-brochure.md` (drafted
 * from the Infizia website architecture doc + standard digital-
 * publishing capability set). Once the design team produces the
 * brochure PDF, drop it at `web/public/brochures/enews.pdf`.
 *
 * Brand accent: purple — between violet (Meetrix, paler/bluer) and
 * fuchsia (Learnova, more pink-magenta). Reads as "editorial gravitas
 * / premium publication" — fits the Media & Publishing vertical.
 *
 * Bespoke visual: EnewsNewsroomVisual — live newsroom composed scene
 * with publication chrome, composing article view, publishing queue,
 * distribution channels strip.
 * Mid-page: EnewsDistributionFunnel — top-down funnel showing one
 * article cascading from a single editorial moment out to every
 * distribution channel and finally to reader engagement metrics.
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here.
 */

import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Clock3,
  Edit3,
  Eye,
  Globe2,
  Mail,
  MessageCircle,
  Newspaper,
  Radio,
  Search,
  Send,
  Share2,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const enewsContent: StandardProductContent = {
  slug: "enews",
  name: "E-News",
  vertical: "Media & Publishing",
  accent: "purple",

  tagline: "The newsroom your editors deserve.",

  positioning:
    "E-News is a digital publishing platform purpose-built for blogs, news portals, and e-newspapers. Editors plan, write, and review stories in one workspace. Publishing schedules itself. Articles fan out across web, mobile, email newsletter, and social — automatically. And audience engagement (reads, shares, comments, subscribers) flows back into one editorial dashboard so the team always knows what's working. Built for the modern newsroom — independent journalists, regional papers, niche publications, and growing media organizations.",

  problem: {
    kicker: "The challenge",
    title: "Modern publishing teams run on a stack that was never built for them.",
    body: "Editorial workflow lives in spreadsheets and chat threads — drafts, assignments, deadlines, and review cycles tracked manually across Google Docs, Slack, and email. Scheduling is a manual chore, with cross-channel timing across web, newsletter, and social done by hand. Distribution requires copy-paste across four platforms. Reader engagement insights live scattered across vendor dashboards. SEO and structured data are afterthoughts. Subscriber and paywall management is fragmented across separate tools. E-News covers the full editorial lifecycle on one platform — from one writer's draft to a million readers, end to end.",
  },

  features: {
    kicker: "Capabilities",
    title: "From a single draft to every reader — on one platform.",
    lede: "Newsroom workspace, editorial workflows, cross-channel publishing, audience engagement, SEO, subscribers and monetisation — all on the same data, all built for editors.",
    items: [
      {
        icon: Newspaper,
        title: "One newsroom, one workspace",
        body: "Story planning, drafts, assignments, review queues, approvals — your entire editorial team in one place, on the same data. No more chasing across docs and chat threads.",
      },
      {
        icon: Workflow,
        title: "Editorial workflow on rails",
        body: "Every story moves through clear stages — Drafting → Review → Scheduled → Published — with role-based access for writers, editors, and managing editors.",
      },
      {
        icon: Send,
        title: "Schedule once, publish everywhere",
        body: "One click sends a story to web, mobile, email newsletter, and social — each formatted appropriately, on the timing you set. Stagger or instant-publish.",
      },
      {
        icon: BarChart3,
        title: "Audience engagement, unified",
        body: "Reads, shares, comments, subscriber growth, time-on-page — one editorial dashboard, not four vendor consoles. Editors and writers see what's working in real time.",
      },
      {
        icon: Search,
        title: "SEO + structured data, automatic",
        body: "Schema, sitemaps, Open Graph, AMP — generated for every story. No manual SEO setup per piece; discoverability ships with publication.",
      },
      {
        icon: Mail,
        title: "Subscribers, newsletters & paywalls — native",
        body: "Free + paid subscriber tiers, segmented newsletters, paywall rules per article or section, gift and group subscriptions, and full revenue reporting — one platform.",
      },
      {
        icon: Zap,
        title: "Breaking news, in seconds",
        body: "One-click instant publish with a Breaking pill, push notifications to mobile + browser, social cards ready to go — the moment the story is.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built for every team whose work IS their publication.",
    lede: "Wherever a publication needs to consolidate editorial workflow, multi-channel publishing, audience engagement, and subscriber revenue on one platform, E-News is the spine of the newsroom.",
    items: [
      {
        icon: Newspaper,
        title: "News portals & e-newspapers",
        body: "Regional and national news organizations consolidating editorial workflow, multi-channel publishing, subscriber management, and analytics on one platform — from breaking news to long-form features.",
      },
      {
        icon: Edit3,
        title: "Blogs & niche publications",
        body: "Independent journalists, topical publications, and creator-led newsletters that need editorial structure + distribution + monetisation without buying five separate tools.",
      },
      {
        icon: BookOpen,
        title: "Magazines & long-form publishers",
        body: "Feature-led publications running long-form journalism, with subscriber-first business models, segmented newsletters, and rich audience analytics built in.",
      },
    ],
  },
};

/**
 * Live publishing queue rendered in the EnewsNewsroomVisual hero —
 * 4 articles in different editorial states.
 */
export const ENEWS_PUBLISHING_QUEUE = [
  {
    id: "ART-2814",
    headline: "Bengal monsoon arrives early; agriculture braces for impact",
    author: "Riya Mehta",
    state: "live" as const,
    stateLabel: "Live edit",
    metric: "12,847 reads",
    metricIcon: Eye,
  },
  {
    id: "ART-2812",
    headline: "Editorial: Why public transit funding can't wait another year",
    author: "Karan Suri",
    state: "review" as const,
    stateLabel: "In review",
    metric: "Review · 14:30",
    metricIcon: Clock3,
  },
  {
    id: "ART-2811",
    headline: "Tech recap: 4 startups that closed Series A this week",
    author: "Ananya Bose",
    state: "scheduled" as const,
    stateLabel: "Scheduled",
    metric: "Pub 06:00 IST",
    metricIcon: CalendarDays,
  },
  {
    id: "ART-2807",
    headline: "Mumbai's first AI-powered traffic system goes live in BKC",
    author: "Vikram Iyer",
    state: "published" as const,
    stateLabel: "Published",
    metric: "8.2K · 124 sh",
    metricIcon: Share2,
  },
] as const;

/**
 * Distribution channels strip — bottom of hero.
 */
export const ENEWS_CHANNELS = [
  { icon: Globe2, label: "Web · AMP" },
  { icon: Smartphone, label: "Mobile · PWA" },
  { icon: Mail, label: "Newsletter" },
  { icon: Share2, label: "Social cards" },
  { icon: Radio, label: "Push" },
] as const;

/**
 * Distribution funnel data — drives the mid-page section.
 *
 * Top: 1 published article.
 * Middle: fans out into 4 channels.
 * Bottom: aggregates back into engagement metrics.
 */
export const ENEWS_FUNNEL_ARTICLE = {
  headline: "Bengal monsoon arrives early; agriculture braces for impact",
  byline: "by Riya Mehta · Senior Editor",
  section: "News · Climate",
  publishedAt: "Today · 09:42 IST",
};

export const ENEWS_FUNNEL_CHANNELS = [
  {
    icon: Globe2,
    label: "Web + AMP",
    body: "Responsive site, AMP edition, Open Graph cards.",
    stat: "9,124 reads",
  },
  {
    icon: Smartphone,
    label: "Mobile + PWA",
    body: "Native + PWA push notifications to subscribers.",
    stat: "2,847 push opens",
  },
  {
    icon: Mail,
    label: "Newsletter",
    body: "Auto-built from the story, segmented by topic interest.",
    stat: "12.4K opens · 38%",
  },
  {
    icon: Share2,
    label: "Social cards",
    body: "Auto-generated for Twitter, LinkedIn, Facebook previews.",
    stat: "1,612 shares",
  },
] as const;

export const ENEWS_FUNNEL_METRICS = [
  { icon: Eye, label: "Total reads", value: "23,547" },
  { icon: MessageCircle, label: "Comments", value: "284" },
  { icon: Share2, label: "Shares", value: "1,612" },
  { icon: Users, label: "New subscribers", value: "+128" },
] as const;

/**
 * Closing pills surfaced near the page CTA.
 */
export const ENEWS_OUTCOME_PILLS = [
  { icon: Newspaper, label: "One newsroom, every channel" },
  { icon: Workflow, label: "Editorial workflow on rails" },
  { icon: TrendingUp, label: "Engagement and revenue, unified" },
  { icon: Zap, label: "Breaking news, in seconds" },
] as const;
