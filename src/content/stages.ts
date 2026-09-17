export interface Stage {
  range: string;
  name: string;
  reality: string;
  build: string;
}

export const stages: Stage[] = [
  {
    range: "Pre-seed / Seed",
    name: "The founder is still selling",
    reality:
      "No GTM hire yet. A founder or a single generalist runs outbound personally, and every deal gets worked by hand.",
    build:
      "List building and a first outbound motion. Not a CRM overhaul, not lead scoring, not a system nobody has time to maintain yet.",
  },
  {
    range: "Seed / Series A",
    name: "The first GTM hire breaks the old process",
    reality:
      "A first AE or SDR joins, and the founder's personal process doesn't transfer. Nobody agreed on what a qualified lead actually is.",
    build:
      "Lifecycle stages, basic ICP scoring, and a CRM that means the same thing to everyone touching it.",
  },
  {
    range: "Series A / Series B",
    name: "Volume outgrows manual handoffs",
    reality:
      "Enough reps and enough lead volume that a shared inbox or a spreadsheet starts losing deals silently, without anyone noticing for weeks.",
    build:
      "Waterfall enrichment, SLA-based routing, and a reporting layer built to survive a board meeting, not just a Slack update.",
  },
  {
    range: "Series B+, no RevOps hire yet",
    name: "The team outgrew \"one person owns everything\"",
    reality:
      "Big enough that no single person can hold the whole GTM motion in their head, but not big enough to justify a full-time RevOps headcount.",
    build:
      "Fractional territory. Someone accountable for the system every week, without the cost or hiring timeline of a full-time hire.",
  },
];