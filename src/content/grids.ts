export interface Grid {
  id: string;
  gridNumber: string;
  name: string;
  stageLabel: string;
  mainPurpose: string;
  description: string;
  columns: string[];
  /** Slug for a walkthrough video at /videos/<slug>.mp4 + /videos/<slug>.jpg (poster). */
  videoSlug?: string;
}

export const grids: Grid[] = [
  {
    id: "foundation",
    gridNumber: "Grid 00",
    name: "Shared Account and Contact Foundation",
    stageLabel: "Foundation — every other grid inherits this",
    mainPurpose:
      "One consistent account and contact schema before any segment-specific logic runs.",
    description:
      "Every later grid reads from the same standardized record instead of redefining what a \"verified email\" or a \"duplicate account\" means. This grid validates domains and emails, flags duplicate account and contact keys, and rolls everything into a single Data Quality Status (Ready, Missing Domain, Missing Company, Duplicate, Personal Email, Needs Review) before a single enrichment call runs. Inputs get checked before they get expensive: validation runs first, so records that would fail anyway never burn an API call. Without this layer, five segment grids eventually produce five definitions of a verified email and five incompatible CRM mappings — this is the layer that prevents that.",
    columns: [
      "Company Domain",
      "Valid Domain",
      "Duplicate Account Key",
      "Work Email",
      "Email Status",
      "Duplicate Contact Key",
      "Consent or Opt-Out Status",
      "Data Quality Status",
    ],
    videoSlug: "grid00",
  },
  {
    id: "early-stage-outbound",
    gridNumber: "Grid 01",
    name: "Early-Stage Outbound",
    stageLabel: "$0–$10M — top-of-funnel and list building",
    mainPurpose:
      "Turn a raw company list into qualified, personalized outbound without a human touching every row.",
    description:
      "Built for the stage where the only thing that matters is qualified top-of-funnel activity. Companies get imported from Apollo, Sales Navigator, a CSV, or a CRM, then run through an ICP-fit prompt that returns Qualified, Review, or Disqualified with a stated reason and a recommended persona — not just a score. Qualified accounts get one or two contacts found (decision-makers first), pushed through an email waterfall for verification, and personalized off real evidence before anything goes to human approval and out to Smartlead, Instantly, or another outreach tool. The grid is judged on verified contacts per 100 accounts, approved contacts per 100 researched, reply rate, and cost per qualified meeting — not on how many rows it touched.",
    columns: [
      "ICP Fit",
      "Target Persona",
      "Business Trigger",
      "Personalization Evidence",
      "Email Status",
      "Approval Status",
      "Outreach Campaign",
    ],
  },
  {
    id: "late-stage-icp",
    gridNumber: "Grid 02",
    name: "Late-Stage ICP and Inbound Enrichment",
    stageLabel: "$10M–$50M — real ICP, real scoring",
    mainPurpose:
      "Replace \"run one campaign at everyone\" with an ICP model built from actual closed-won and closed-lost accounts.",
    description:
      "This grid takes closed-won accounts, closed-lost accounts, inbound leads, and website form submissions, and scores every account against the traits of customers who actually closed — not a guessed profile. A closed-won similarity prompt compares a new account's industry, size, and tech stack against reference customer traits and returns a 0–100 similarity score, the matching traits, what evidence is missing, and a recommended tier (A, B, or C). Inbound leads run through a parallel flow: identify the company, enrich it, match it against the ICP, score it, assign an owner, and update the CRM automatically — with sales notified only when the lead clears a priority threshold. Success is measured on enrichment completion rate, time from inbound submission to CRM enrichment, percentage of leads routed correctly, and MQL-to-SQL conversion.",
    columns: [
      "Closed-Won Similarity",
      "ICP Score",
      "Account Tier",
      "Lead Intent",
      "Recommended Owner",
      "Routing Reason",
    ],
    videoSlug: "grid002",
  },
  {
    id: "growth-signals",
    gridNumber: "Grid 03",
    name: "Growth-Stage Signals and Routing",
    stageLabel: "$50M–$200M — systematized signals, territory carving",
    mainPurpose:
      "Turn hiring, funding, tech-stack, and intent data into a freshness-scored trigger that auto-routes to the right rep.",
    description:
      "Growth-stage teams stop relying on ad hoc signal-spotting and need it systematized. This grid pulls hiring data, funding data, technology changes, website activity, and intent data into dedicated signal columns, then a scoring prompt returns whether the signal is active, its type, its strength (High, Medium, Low), and a freshness read against an explicit decay rule — 0–30 days is Fresh, 31–90 is Aging, 91+ is Stale. Fresh, high-strength signals feed territory logic built from country, employee band, and named-account rules (for example: US accounts at 500–1000 employees route to US Mid-Market; Communications-industry accounts with a high-strength signal route to Strategic Communications). Accounts already owned in the CRM keep their existing owner — the grid never overwrites active ownership, and anything that doesn't match a rule goes to Manual Review instead of getting force-assigned.",
    columns: [
      "Signal Strength",
      "Signal Freshness",
      "Territory",
      "Rep Owner",
      "Routing Status",
    ],
  },
  {
    id: "midmarket-hygiene-copilot",
    gridNumber: "Grid 04",
    name: "Midmarket CRM Hygiene and GTM Copilot",
    stageLabel: "$200M–$1B — two linked workflows, one review gate",
    mainPurpose:
      "Clean up CRM rot at scale, then hand reps an account-specific brief instead of another generic outbound blast.",
    description:
      "At this size, manual CRM cleanup and one-off account research both get too expensive to do by hand, so this grid runs two linked workflows. CRM Hygiene normalizes company names, domains, and emails, classifies duplicate risk as No Duplicate, Possible Duplicate, Confirmed Duplicate, or Needs Manual Review, and flags job changes, inactive contacts, and lifecycle or owner conflicts — records are never auto-merged on name similarity alone, only on domain and CRM identifier match. GTM Copilot runs a separate flow per selected account: research the account, summarize its business context, identify a relevant trigger, find current contacts, spot whitespace, and draft a next action and message. Every AI-drafted brief or CRM write goes through a mandatory human-review queue before the rep sees it or anything touches the CRM — the copilot prepares the call, it doesn't make it. Measured on duplicate reduction, missing-field reduction, rep research time saved, and copilot recommendations actually accepted.",
    columns: [
      "Duplicate Group",
      "Data Quality Score",
      "Recommended Action",
      "Lifecycle Conflict",
      "CRM Update Status",
    ],
  },
  {
    id: "enterprise-governance",
    gridNumber: "Grid 05",
    name: "Enterprise Governance and Compliance",
    stageLabel: "$1B+ — advanced, has prerequisites, not a starting point",
    mainPurpose:
      "The full system at enterprise scale, gated by consent, approval, and audit controls at every step.",
    description:
      "This is not where you start. It assumes clear data ownership, approved vendors, CRM and warehouse access, defined legal and compliance requirements, permission design, auditability, change management, and a rollback process already exist. The grid tracks source system, source timestamp, data owner, consent status, opt-out status, processing purpose, vendor used, confidence score, and data retention date on every record, and runs the marketing-to-sales handshake through explicit stages: identity resolution, account match, enrichment, ICP and intent scoring, lifecycle stage, routing, sales acceptance or rejection with a reason, and feedback back to marketing. Nothing reaches the CRM or an outreach tool until it clears a compliance gate — consent or lawful basis confirmed, opt-out checked, required fields complete, vendor approved, source recorded, record not restricted, and human approval complete. More columns don't make a workflow enterprise-ready; controls, audit trails, and governed data movement do.",
    columns: [
      "Consent Status",
      "Data Owner",
      "Confidence Score",
      "CRM Sync Status",
      "Approval Required",
      "Audit Note",
    ],
  },
];
