"use client";

import { financeOperationsContent } from "@/content/solutions/finance-operations";
import {
  SolutionHero,
  SolutionPulse,
  SolutionPainPoints,
  SolutionStack,
  SolutionUseCases,
  SolutionOutcomes,
  SolutionCTA,
} from "@/components/solutions";
import { LedgerTicker } from "@/components/solutions/finance-operations/LedgerTicker";

/**
 * Finance & Operations solution page (Phase 5 · 6 of 9).
 *
 * Bespoke hero idiom: ledger ticker. A vertical scrolling tape of journal
 * entries (sourced from DocuMind + EyePOS) with a running balance tile
 * on the right. The narrative: every document becomes a journal entry,
 * automatically, in real time.
 *
 * Stack: DocuMind (anchor) + EyePOS (POS + GST accounting) + Intellix
 * (vendor + customer queries) + Performix (ops team SLA tracking).
 *
 * Brand accent: sky (matches DocuMind).
 */
export default function FinanceOperationsSolutionPage() {
  return (
    <>
      <SolutionHero
        verticalLabel={financeOperationsContent.verticalLabel}
        name={financeOperationsContent.name}
        tagline={financeOperationsContent.tagline}
        positioning={financeOperationsContent.positioning}
        accent={financeOperationsContent.accent}
        visual={<LedgerTicker />}
      />

      <SolutionPulse
        kicker={financeOperationsContent.pulse.kicker}
        title={financeOperationsContent.pulse.title}
        lede={financeOperationsContent.pulse.lede}
        items={financeOperationsContent.pulse.items}
        accent={financeOperationsContent.accent}
      />

      <SolutionPainPoints
        kicker={financeOperationsContent.pain.kicker}
        title={financeOperationsContent.pain.title}
        lede={financeOperationsContent.pain.lede}
        items={financeOperationsContent.pain.items}
        accent={financeOperationsContent.accent}
      />

      <SolutionStack
        kicker={financeOperationsContent.stack.kicker}
        title={financeOperationsContent.stack.title}
        lede={financeOperationsContent.stack.lede}
        entries={financeOperationsContent.stack.entries}
        accent={financeOperationsContent.accent}
      />

      <SolutionUseCases
        kicker={financeOperationsContent.useCases.kicker}
        title={financeOperationsContent.useCases.title}
        lede={financeOperationsContent.useCases.lede}
        items={financeOperationsContent.useCases.items}
        accent={financeOperationsContent.accent}
      />

      <SolutionOutcomes
        kicker={financeOperationsContent.outcomes.kicker}
        title={financeOperationsContent.outcomes.title}
        lede={financeOperationsContent.outcomes.lede}
        items={financeOperationsContent.outcomes.items}
        accent={financeOperationsContent.accent}
      />

      <SolutionCTA
        solutionName={financeOperationsContent.name}
        accent={financeOperationsContent.accent}
      />
    </>
  );
}
