// Direct-answer FAQ content, written for extraction by both readers and
// AI search/answer engines: each answer is self-contained (40-60 words),
// leads with the answer, and avoids relying on surrounding page context.

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What does a GTM engineer actually do?",
    answer:
      "A GTM engineer designs and builds the operational layer connecting marketing, sales, and the CRM: lead routing, data enrichment, outbound automation, and reporting. The role sits between RevOps strategy and hands-on implementation, building systems rather than one-off automations or point fixes.",
  },
  {
    question: "How is a GTM engineer different from a RevOps hire?",
    answer:
      "A full-time RevOps hire is a headcount commitment, usually justified once a team has enough process complexity to need one person full-time. A GTM engineer delivers the same system design and build work on a project, audit, or fractional basis, before that headcount is justified.",
  },
  {
    question: "What is fractional GTM engineering?",
    answer:
      "Fractional GTM engineering is ongoing, embedded execution on a part-time basis: routing, enrichment, and automation work gets built and maintained by someone accountable for the system week over week, without the cost or hiring timeline of a full-time employee.",
  },
  {
    question: "What tools does a GTM engineer typically work in?",
    answer:
      "Common tools span the CRM (HubSpot, Salesforce, Attio), enrichment (Clay, Apollo, ZoomInfo, Clearbit), outreach execution (Smartlead, Instantly, Outreach, Salesloft), automation and orchestration (n8n, Make, Zapier, Workato), and analytics (BigQuery, Snowflake, Segment). The tools vary by stack; the systems logic connecting them does not.",
  },
  {
    question: "What's the difference between a GTM audit and a fractional engagement?",
    answer:
      "An audit is a fixed-scope teardown of the current stack, funnel, and CRM, delivered as a prioritized fix list ranked by revenue impact. A fractional engagement is ongoing execution of that fix list and the system's continued maintenance, billed on a recurring basis.",
  },
  {
    question: "What size company should hire a GTM engineer?",
    answer:
      "GTM engineering work fits early-stage B2B companies best: typically seed to Series B, with a founder or small GTM team that has outgrown manual processes but has not yet built or hired a dedicated RevOps function. Larger orgs with existing RevOps teams usually need augmentation, not a full rebuild.",
  },
];