export interface ProcessStep {
  name: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    name: "Diagnose",
    body: "A full audit of the funnel, the CRM, and every handoff between them. I map what actually happens, not what the org chart says happens.",
  },
  {
    name: "Design",
    body: "A system architecture, not a list of automations. Routing logic, enrichment waterfall, and SLAs get specified before anything gets built.",
  },
  {
    name: "Implement",
    body: "I build the workflows, wire the tools, and instrument the reporting myself. No handoff to a second team halfway through.",
  },
  {
    name: "Hand off",
    body: "Documentation and training so your team can run the system without me, or a fractional arrangement if you want me to keep running it.",
  },
];