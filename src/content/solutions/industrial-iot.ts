/**
 * Industrial Intelligence & IoT solution — content brief.
 *
 * Brand accent: emerald (matches OpsSight). The hero idiom is a factory
 * digital-twin floor plan — top-down isometric blueprint with sensor
 * dots, asset tags, and one anomaly hotspot that pulses red. Argues
 * "every asset on the floor is on the screen, in real time".
 *
 * Mapped products:
 *   • OpsSight (anchor — sensor visibility, anomaly detection,
 *     predictive maintenance, decision support)
 *   • DocuMind (work-order forms, safety reports, inspection logs read
 *     and posted automatically)
 *   • Meetrix (every shift handover + safety briefing captured as
 *     transcript + action items)
 */

import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  Factory,
  FileSearch,
  Gauge,
  HardHat,
  Layers,
  LineChart,
  Mountain,
  Radar,
  Settings,
  Shield,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

import type { SolutionContent } from "./types";

export const industrialIotContent: SolutionContent = {
  slug: "industrial-iot",
  name: "Industrial Intelligence & IoT",
  verticalLabel: "Industrial Intelligence & IoT",
  accent: "emerald",

  tagline: "Every sensor. Every asset. Every anomaly — before it costs.",

  positioning:
    "Industrial operations live or die on what's happening at the asset level — vibration, temperature, flow, pressure, current. The signal is everywhere; the visibility usually isn't. Most plants and mines run on a SCADA dashboard nobody opens, alarms nobody answers, and shift handovers happening on WhatsApp. Infizia wires the entire facility into one digital twin: every sensor live, every anomaly flagged, every recommended action routed to the right person, every paper inspection log digitised the moment it lands.",

  pulse: {
    kicker: "Industry pulse",
    title: "Where industrial value gets quietly destroyed.",
    lede: "Most facilities don't lose money to dramatic failures — they lose it to slow degradation that no human happened to notice in time.",
    items: [
      {
        value: "82%",
        label: "of industrial maintenance is still reactive, not predictive",
        caption: "Industry baseline · 2024",
      },
      {
        value: "₹1.2 Cr",
        label: "average cost of one unplanned downtime event in mid-size plants",
        caption: "Aggregate impact · industry estimate",
      },
      {
        value: "60%",
        label: "of sensor data is collected but never reviewed",
        caption: "Stored, not analysed",
      },
      {
        value: "0",
        label: "of work orders, safety reports, and shift logs reach the system in real time",
        caption: "When done on paper",
      },
    ],
  },

  pain: {
    kicker: "What's slowing you down",
    title: "Four blind spots every operations leader knows.",
    lede: "Sensor data without intelligence, anomalies without alerts, paperwork without digitisation, shift changes without continuity — the universal industrial four-pack.",
    items: [
      {
        icon: Radar,
        title: "Sensors stream into the void",
        body: "Vibration, temp, flow, pressure — the data is there, often at high frequency. Without anomaly detection, it just sits in storage waiting for someone to ask the right question.",
      },
      {
        icon: AlertTriangle,
        title: "Alerts arrive after the failure",
        body: "Alarms fire when a threshold is crossed — but by then, the bearing has already started failing. The earlier signal in the trend was visible for hours, and missed.",
      },
      {
        icon: FileSearch,
        title: "Inspection logs live on paper",
        body: "Shift inspections, safety walks, work orders — all written on clipboards, photographed, and uploaded weekly. By the time the data is searchable, the issue is old.",
      },
      {
        icon: HardHat,
        title: "Maintenance backlog grows blind",
        body: "Work orders pile up on clipboards and weekly Excel exports. Without real-time linkage between the asset's actual signal trend and the open work order, the backlog grows — and the wrong tickets get prioritised.",
      },
    ],
  },

  stack: {
    kicker: "The Infizia stack for industrial",
    title: "Two products. One operations record.",
    lede: "OpsSight watches the assets in real time. DocuMind digitises the paperwork the floor still runs on. The same record runs from the sensor to the boardroom.",
    entries: [
      {
        productSlug: "opssight",
        role: "Anchor — real-time sensor visibility, AI anomaly detection, predictive maintenance, and contextual decision support. Mining-first, extends to manufacturing and utilities.",
      },
      {
        productSlug: "documind",
        role: "Reads work orders, safety reports, and shift inspection logs the moment they land — and posts the structured fields against the right asset.",
      },
    ],
  },

  useCases: {
    kicker: "Who it's for",
    title: "From the open pit to the production line.",
    lede: "Wherever assets, sensors, and shift workers come together — the same stack scales to the geography and asset mix of the facility.",
    items: [
      {
        icon: Mountain,
        title: "Mining & extractive industries",
        body: "Pumps, conveyors, vents, draglines — every critical asset on the digital twin. OpsSight surfaces vibration and thermal anomalies before they cause downtime. Inspection logs become real-time records, not weekly catch-ups.",
      },
      {
        icon: Factory,
        title: "Discrete & process manufacturing",
        body: "Production lines monitored end to end. Quality drift, yield loss, and predictive maintenance cues surface before the shift supervisor would have noticed. Work orders flow straight from anomaly to assignment.",
      },
      {
        icon: Zap,
        title: "Utilities & energy infrastructure",
        body: "Substations, transformers, transmission assets — sensor-grade visibility plus AI anomaly detection. Inspection paperwork digitised on the spot. Asset state and anomaly history traceable end to end.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "From reactive to predictive — measured at the asset.",
    lede: "Every prevented downtime, every digitised inspection, every captured handover compounds into a facility that runs cooler, smoother, and cheaper.",
    items: [
      {
        icon: TrendingDown,
        metric: "−45% unplanned downtime",
        body: "Predictive flags surface bearing wear, thermal drift, and flow anomalies hours to days before failure — moving the work from reactive to scheduled.",
      },
      {
        icon: Activity,
        metric: "Real-time anomaly feed",
        body: "Every sensor, every asset, every active anomaly visible on one dashboard with confidence scores — and routed to the right operator in real time.",
      },
      {
        icon: FileSearch,
        metric: "Same-day digitisation",
        body: "Shift logs, work orders, and safety reports digitised the moment they're written — searchable, queryable, and tied to the exact asset they describe.",
      },
      {
        icon: Shield,
        metric: "Audit-ready operations",
        body: "Every anomaly, every incident, every inspection traceable end to end. Compliance reviews collapse from weeks of evidence-gathering to a query.",
      },
    ],
  },
};

/**
 * Top-down digital-twin layout. Coordinates and types of asset markers
 * for the bespoke FactoryDigitalTwin hero. Each marker is a sensor or
 * asset; one is flagged as a live anomaly hotspot.
 *
 * Coordinates tuned for a 480x300 viewBox.
 */
export const FACTORY_TWIN_ASSETS = [
  // Zone 01 — left
  { id: "z1-a1", zone: "Zone 01", label: "Pump A1", x: 60, y: 80, status: "ok" as const, icon: Settings },
  { id: "z1-a2", zone: "Zone 01", label: "Conveyor C2", x: 130, y: 100, status: "ok" as const, icon: Truck },
  { id: "z1-a3", zone: "Zone 01", label: "Vent V1", x: 80, y: 200, status: "watch" as const, icon: Wrench },
  // Zone 02 — middle
  { id: "z2-a1", zone: "Zone 02", label: "Mill M1", x: 220, y: 70, status: "ok" as const, icon: Settings },
  { id: "z2-a2", zone: "Zone 02", label: "Bearing B2", x: 240, y: 160, status: "alert" as const, icon: AlertTriangle },
  { id: "z2-a3", zone: "Zone 02", label: "Pump A3", x: 260, y: 240, status: "ok" as const, icon: Settings },
  // Zone 03 — right
  { id: "z3-a1", zone: "Zone 03", label: "Substation S1", x: 380, y: 90, status: "ok" as const, icon: Zap },
  { id: "z3-a2", zone: "Zone 03", label: "Conveyor C5", x: 410, y: 200, status: "ok" as const, icon: Truck },
  { id: "z3-a3", zone: "Zone 03", label: "Tank T2", x: 350, y: 250, status: "watch" as const, icon: Gauge },
] as const;

export const INDUSTRIAL_BADGES = [
  { icon: Radar, label: "Real-time sensor visibility" },
  { icon: Sparkles, label: "AI anomaly detection" },
  { icon: TrendingUp, label: "Predictive maintenance" },
  { icon: Layers, label: "Mining → manufacturing → utilities" },
  { icon: BarChart3, label: "Per-asset health dashboards" },
  { icon: HardHat, label: "Shift continuity captured" },
  { icon: LineChart, label: "Trend-based decision support" },
  { icon: Building2, label: "Multi-facility · single record" },
] as const;
