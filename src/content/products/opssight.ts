/**
 * OpsSight — AI-Driven Industrial Intelligence.
 *
 * Single source of truth: `docs/brochures/opssight-brochure.md` (drafted
 * from the Infizia website architecture document positioning + standard
 * industrial-IoT capability set). Once the design team produces the
 * brochure PDF, drop it at `web/public/brochures/opssight.pdf`.
 *
 * Brand accent: emerald — strong "live signal · safety green · in
 * control" tone fits an industrial monitoring platform. Distinct from
 * brand-green's saturated emerald (which is more "go / OK") and brand-
 * teal's mint. Emerald reads as "operations green — everything is
 * monitored and you're in control."
 *
 * Bespoke visual: OpsSightOperationsDashboard — industrial control-room
 * mockup with site map (zones + status dots), 4 sensor panels with
 * sparklines, and an active anomaly card.
 * Mid-page: OpsSightSignalToAction — follow ONE anomaly through 4
 * stages from sensor reading to resolution.
 *
 * Voice rule: business-first. No technology / vendor names exposed in
 * any user-facing string here.
 */

import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  Eye,
  Factory,
  Gauge,
  HardHat,
  Layers,
  Mountain,
  Shield,
  Siren,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

import type { StandardProductContent } from "./types";

export const opssightContent: StandardProductContent = {
  slug: "opssight",
  name: "OpsSight",
  vertical: "Industrial Intelligence & IoT",
  accent: "emerald",

  tagline: "Real-time visibility. Anomalies before failures.",

  positioning:
    "OpsSight is an AI-driven industrial intelligence platform that turns the wall of sensors across an industrial operation into a single, real-time view of how the site is actually running. Vibration on a conveyor, gas in a shaft, temperature on a pump, ground stability under a working face — every signal flows into OpsSight, where AI continuously watches for the patterns humans miss. Anomalies are surfaced before they become failures, decision support is contextual to the site, and the operations team finally has one screen that tells them what's happening, what's about to happen, and what to do about it. Built mining-first, extends naturally to manufacturing, utilities, and infrastructure.",

  problem: {
    kicker: "The challenge",
    title: "Industrial operations run on a fragmented signal.",
    body: "Hundreds of sensors, no unified view — SCADA panels, vendor dashboards, manual logbooks, WhatsApp updates from the shift supervisor. Nothing talks. Failures are caught too late: pumps fail, conveyors jam, ventilation drops, and the response starts AFTER production stops. Anomalies hide in the noise — yesterday's weird sensor reading goes uninvestigated; the failure two days later traces back to that ignored signal. Safety + compliance reporting is manual, decision support is reactive, and in mining, every missed signal has lives attached to it. OpsSight ingests every industrial signal, applies AI to surface the anomalies that matter, and gives operators contextual decision support — not just dashboards.",
  },

  features: {
    kicker: "Capabilities",
    title: "Every sensor, one platform — with AI watching every signal.",
    lede: "Unified ingestion across SCADA, IoT, and vendor systems. AI anomaly detection, predictive maintenance, contextual decision support, mining-grade safety, automatic compliance — all on the same platform.",
    items: [
      {
        icon: Eye,
        title: "Every sensor on one screen",
        body: "SCADA, IoT gateways, vendor systems, even paper logbooks captured on a tablet — all flowing into one real-time view of how your site is actually running.",
      },
      {
        icon: AlertTriangle,
        title: "AI catches the anomaly humans miss",
        body: "Continuous pattern watch on every sensor stream. Cross-sensor correlation surfaces critical anomalies in seconds, not shifts.",
      },
      {
        icon: Wrench,
        title: "Predictive maintenance, not fixed-interval",
        body: "Failure-pattern recognition gives you time-to-failure estimates for high-risk assets — fix it before it stops production.",
      },
      {
        icon: ClipboardList,
        title: "Contextual decision support on every alert",
        body: "The system surfaces what to check, who to call, and what worked last time. New shift supervisors get the experienced operator's playbook, built in.",
      },
      {
        icon: HardHat,
        title: "Mining-grade safety and ground monitoring",
        body: "Shaft, ventilation, methane, ground stability, underground equipment — all first-class features with regulatory-grade audit trails.",
      },
      {
        icon: Shield,
        title: "Compliance reports, automatic",
        body: "Safety, environmental, and operational reports generated from the live data — no spreadsheets, no late submissions, no audit panic.",
      },
      {
        icon: Layers,
        title: "Drill from site to single signal",
        body: "Site → zone → asset → sensor → raw stream, with high-resolution historical playback for any window. Operations clarity at every level.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "Built mining-first. Extends to every asset-heavy operation.",
    lede: "Wherever an industrial operation runs on hundreds of sensors and can't afford to learn about a failure after production stops, OpsSight unifies the signal and surfaces the anomalies that matter.",
    items: [
      {
        icon: Mountain,
        title: "Mining operations",
        body: "Underground and open-pit mines that need shaft and ground monitoring, equipment health, ventilation, and regulatory compliance — all in one platform that operations and safety teams share.",
      },
      {
        icon: Factory,
        title: "Manufacturing & process plants",
        body: "Asset-heavy plants where uptime and predictive maintenance directly drive cost — vibration, temperature, pressure, flow, and current-draw signals unified across every line.",
      },
      {
        icon: Building2,
        title: "Utilities, infrastructure & critical operations",
        body: "Power, water, transit, and infrastructure operators that need real-time operational visibility, anomaly detection, and audit-ready compliance reporting at scale.",
      },
    ],
  },
};

/**
 * Site zones rendered in the operations-dashboard hero. Each zone has
 * a status (ok / watch / alert) reflecting AI's read on its current
 * sensor cluster.
 */
export const OPSSIGHT_SITE_ZONES = [
  { id: "Z-1", label: "Shaft North", status: "ok" as const },
  { id: "Z-2", label: "Conveyor B", status: "watch" as const },
  { id: "Z-3", label: "Pump Hall", status: "ok" as const },
  { id: "Z-4", label: "Asset C-04", status: "alert" as const },
  { id: "Z-5", label: "Vent Drift 7", status: "ok" as const },
  { id: "Z-6", label: "Loader Bay", status: "ok" as const },
] as const;

/**
 * Sensor panels rendered in the operations dashboard — 4 micro-charts
 * showing live signals.
 */
export const OPSSIGHT_SENSOR_PANELS = [
  {
    label: "Vibration · C-04",
    unit: "mm/s",
    value: "8.4",
    trend: "rising" as const,
    icon: Activity,
    sparkline: [12, 14, 13, 16, 18, 22, 28, 32, 38, 42, 48, 54],
  },
  {
    label: "Methane · Drift 7",
    unit: "ppm",
    value: "12.3",
    trend: "steady" as const,
    icon: Wifi,
    sparkline: [42, 40, 41, 39, 40, 42, 41, 39, 40, 42, 41, 40],
  },
  {
    label: "Vent Flow · Shaft N",
    unit: "m³/s",
    value: "247",
    trend: "steady" as const,
    icon: Compass,
    sparkline: [62, 65, 64, 66, 65, 64, 66, 65, 64, 66, 65, 64],
  },
  {
    label: "Pump Temp · PH-02",
    unit: "°C",
    value: "68",
    trend: "rising" as const,
    icon: Gauge,
    sparkline: [40, 42, 44, 45, 47, 49, 52, 55, 58, 60, 63, 66],
  },
] as const;

/**
 * Active anomaly card rendered in the dashboard.
 */
export const OPSSIGHT_ACTIVE_ANOMALY = {
  asset: "Asset C-04",
  pattern: "Bearing failure pattern",
  signals: ["Vibration ↑", "Temperature ↑", "Current draw ↑"],
  recommendation: "Inspect within 4 hrs · mechanical team",
  confidence: 0.92,
} as const;

/**
 * The 4 stages of the OpsSightSignalToAction mid-page section. Follows
 * one anomaly from sensor reading to resolution.
 */
export const OPSSIGHT_RESOLUTION_STAGES = [
  {
    n: "01",
    label: "Signal",
    title: "Vibration drifts upward.",
    body: "Vibration sensor on Asset C-04 starts trending above its learned baseline. The reading is small — easy to miss in a wall of dashboards.",
    icon: Activity,
    actor: "Sensor C-04 · auto",
    state: "done" as const,
    metric: "08:42",
  },
  {
    n: "02",
    label: "Pattern",
    title: "AI cross-correlates the signals.",
    body: "Vibration up + temperature up + current draw up — across three sensors on the same asset. AI flags a bearing failure pattern with 92% confidence.",
    icon: Zap,
    actor: "OpsSight · AI",
    state: "done" as const,
    metric: "08:43",
  },
  {
    n: "03",
    label: "Decision support",
    title: "Alert routed with the playbook.",
    body: "Mechanical team receives the alert with: prior incident data on this exact pattern, the SOP for inspection, and a recommended action window — inspect within 4 hrs.",
    icon: Bell,
    actor: "Mechanical · routed",
    state: "live" as const,
    metric: "08:44",
  },
  {
    n: "04",
    label: "Action",
    title: "Bearing replaced. System learns.",
    body: "Team inspects, confirms bearing degradation, replaces it before failure. Action and outcome captured — the system gets smarter for the next time this pattern appears.",
    icon: CheckCircle2,
    actor: "Mechanical · resolved",
    state: "upcoming" as const,
    metric: "12:30 ETA",
  },
] as const;

/**
 * Closing pills surfaced near the page CTA.
 */
export const OPSSIGHT_OUTCOME_PILLS = [
  { icon: Eye, label: "Every sensor, one screen" },
  { icon: Siren, label: "Anomalies before failures" },
  { icon: ClipboardList, label: "Decision support, contextual" },
  { icon: BarChart3, label: "Compliance, automatic" },
] as const;
