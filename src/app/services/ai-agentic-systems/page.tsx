"use client";

import { aiAgenticSystemsContent } from "@/content/services/ai-agentic-systems";
import {
  ServiceHero,
  ServicePainPoints,
  ServiceCapabilities,
  ServiceEngagement,
  ServiceUseCases,
  ServiceOutcomes,
  ServiceCTA,
} from "@/components/services";
import { AgentTrioLoop } from "@/components/services/ai-agentic-systems/AgentTrioLoop";

/**
 * Enterprise Agentic AI Solutions service page (Phase 6 · 2 of 4).
 *
 * Bespoke hero idiom: Agent Trio Loop — three agent cards arranged in
 * a triangle (Perceive · Reason · Act) with a centre task tile and a
 * pulse traveling around the loop.
 *
 * Brand accent: violet.
 */
export default function AiAgenticSystemsServicePage() {
  return (
    <>
      <ServiceHero
        shortLabel={aiAgenticSystemsContent.shortLabel}
        name={aiAgenticSystemsContent.name}
        tagline={aiAgenticSystemsContent.tagline}
        positioning={aiAgenticSystemsContent.positioning}
        accent={aiAgenticSystemsContent.accent}
        visual={<AgentTrioLoop />}
      />

      <ServicePainPoints
        kicker={aiAgenticSystemsContent.pain.kicker}
        title={aiAgenticSystemsContent.pain.title}
        lede={aiAgenticSystemsContent.pain.lede}
        items={aiAgenticSystemsContent.pain.items}
        accent={aiAgenticSystemsContent.accent}
      />

      <ServiceCapabilities
        kicker={aiAgenticSystemsContent.capabilities.kicker}
        title={aiAgenticSystemsContent.capabilities.title}
        lede={aiAgenticSystemsContent.capabilities.lede}
        items={aiAgenticSystemsContent.capabilities.items}
        accent={aiAgenticSystemsContent.accent}
      />

      <ServiceEngagement
        kicker={aiAgenticSystemsContent.engagement.kicker}
        title={aiAgenticSystemsContent.engagement.title}
        lede={aiAgenticSystemsContent.engagement.lede}
        items={aiAgenticSystemsContent.engagement.items}
        accent={aiAgenticSystemsContent.accent}
      />

      <ServiceUseCases
        kicker={aiAgenticSystemsContent.useCases.kicker}
        title={aiAgenticSystemsContent.useCases.title}
        lede={aiAgenticSystemsContent.useCases.lede}
        items={aiAgenticSystemsContent.useCases.items}
        accent={aiAgenticSystemsContent.accent}
      />

      <ServiceOutcomes
        kicker={aiAgenticSystemsContent.outcomes.kicker}
        title={aiAgenticSystemsContent.outcomes.title}
        lede={aiAgenticSystemsContent.outcomes.lede}
        items={aiAgenticSystemsContent.outcomes.items}
        accent={aiAgenticSystemsContent.accent}
      />

      <ServiceCTA
        serviceName={aiAgenticSystemsContent.name}
        accent={aiAgenticSystemsContent.accent}
      />
    </>
  );
}
