export interface Problem {
  code: string;
  title: string;
  body: string;
}

export const problems: Problem[] = [
  {
    code: "GTM-01",
    title: "Leads come in. Nobody trusts the data.",
    body: "Fields are blank, duplicated, or filled with junk by the time an AE opens the record.",
  },
  {
    code: "GTM-02",
    title: "Routing runs on guesswork.",
    body: "Round robin assignment, no scoring, reps waiting on leads that should have been disqualified on arrival.",
  },
  {
    code: "GTM-03",
    title: "CRM fields are decoration.",
    body: "Nobody enforces them, so reporting becomes a translation exercise before it becomes an analysis.",
  },
  {
    code: "GTM-04",
    title: "Handoffs lose context.",
    body: "Marketing to SDR to AE, and the notes that actually mattered stay in someone's inbox.",
  },
  {
    code: "GTM-05",
    title: "Outbound runs by hand.",
    body: "Lists built in spreadsheets, sequences started manually, no signal for who to contact first.",
  },
  {
    code: "GTM-06",
    title: "Tools exist. An operating system does not.",
    body: "The stack has a CRM, an enrichment tool, and three automation platforms, but nothing connects them on a schedule anyone trusts.",
  },
];