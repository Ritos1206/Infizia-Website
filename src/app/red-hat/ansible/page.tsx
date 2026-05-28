"use client";

import {
  RedHatHero,
  RedHatPainPoints,
  RedHatServices,
  RedHatPlaybookCategories,
  RedHatEngagement,
  RedHatOutcomes,
  RedHatCTA,
} from "@/components/red-hat";
import { AutomationOrchestra } from "@/components/red-hat/ansible/AutomationOrchestra";
import { ansibleContent } from "@/content/red-hat/ansible";

/**
 * /red-hat/ansible — Ansible Automation Platform page.
 *
 * Hero idiom: Automation Orchestra — 3-row composition (playbook
 * editor → execution wave → results matrix) + EDA trigger panel on
 * the right.
 *
 * Page composition:
 *   1. RedHatHero + AutomationOrchestra
 *   2. RedHatPainPoints
 *   3. RedHatServices         — 5 services
 *   4. RedHatPlaybookCategories — 5 buckets (Infra · SecOps · Apps · Cloud · Network)
 *   5. RedHatEngagement
 *   6. RedHatOutcomes
 *   7. RedHatCTA
 */
export default function AnsiblePage() {
  return (
    <>
      <RedHatHero
        kicker={ansibleContent.kicker}
        title={ansibleContent.title}
        tagline={ansibleContent.tagline}
        positioning={ansibleContent.positioning}
        primaryCtaLabel={ansibleContent.primaryCtaLabel}
        secondaryCtaLabel={ansibleContent.secondaryCtaLabel}
        visual={<AutomationOrchestra />}
      />

      <RedHatPainPoints
        kicker={ansibleContent.pain.kicker}
        title={ansibleContent.pain.title}
        lede={ansibleContent.pain.lede}
        items={ansibleContent.pain.items}
      />

      <RedHatServices
        kicker={ansibleContent.services.kicker}
        title={ansibleContent.services.title}
        lede={ansibleContent.services.lede}
        items={ansibleContent.services.items}
      />

      {ansibleContent.extras?.playbookCategories && (
        <RedHatPlaybookCategories
          items={ansibleContent.extras.playbookCategories}
        />
      )}

      <RedHatEngagement
        kicker={ansibleContent.engagement.kicker}
        title={ansibleContent.engagement.title}
        lede={ansibleContent.engagement.lede}
        items={ansibleContent.engagement.items}
      />

      <RedHatOutcomes
        kicker={ansibleContent.outcomes.kicker}
        title={ansibleContent.outcomes.title}
        lede={ansibleContent.outcomes.lede}
        items={ansibleContent.outcomes.items}
      />

      <RedHatCTA
        scopeLabel="Ansible · with Infizia"
        pageName="Ansible automation"
      />
    </>
  );
}
