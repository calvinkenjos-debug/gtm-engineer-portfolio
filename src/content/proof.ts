// Placeholder case studies. Replace every bracketed field with a real
// engagement before launch: nothing here should ship as a live claim.

export interface CaseStudy {
  id: string;
  clientLabel: string;
  category: string;
  problem: string;
  fix: string;
  result: string;
  hasDiagram?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    clientLabel: "[Client - Series A vertical SaaS]",
    category: "Lead routing rebuild",
    problem:
      "[Describe the routing problem: e.g. inbound demo requests sat in a shared queue for 6+ hours before an AE claimed them.]",
    fix:
      "[Describe what was built: e.g. ICP scoring in Clay, waterfall enrichment, routing logic rebuilt in HubSpot with SLA-based reassignment.]",
    result: "[Add a real, verifiable metric, e.g. response time from X hours to Y minutes.]",
    hasDiagram: true,
  },
  {
    id: "case-2",
    clientLabel: "[Client - early-stage B2B, founder-led sales]",
    category: "Outbound automation",
    problem:
      "[Describe the problem: e.g. founder building lists manually in spreadsheets, sequences started by hand with no signal-based prioritization.]",
    fix:
      "[Describe the fix: e.g. n8n pipeline connecting intent signals to Smartlead sequencing with automatic CRM logging.]",
    result: "[Add a real, verifiable metric, e.g. hours saved per week, reply rate change.]",
  },
  {
    id: "case-3",
    clientLabel: "[Client - Seed to Series A, small GTM team]",
    category: "CRM & reporting cleanup",
    problem:
      "[Describe the problem: e.g. three people trusted three different pipeline numbers going into the board deck.]",
    fix:
      "[Describe the fix: e.g. field governance, lifecycle stage rebuild, attribution model tied to a single BigQuery source of truth.]",
    result: "[Add a real, verifiable metric, e.g. time to close the books on monthly reporting.]",
  },
];