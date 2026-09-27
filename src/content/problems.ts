// `icon` names key into the PROBLEM_ICONS map in Problems.tsx (phosphor-icons/react).
export type ProblemIcon = "CopySimple" | "Shuffle" | "ClipboardText" | "LinkBreak" | "HandTap" | "Plugs";

export interface Problem {
  code: string;
  title: string;
  body: string;
  icon: ProblemIcon;
  /** Optional hover-preview image (src path). Falls back to the icon tile when unset. */
  image?: string;
}

export const problems: Problem[] = [
  {
    code: "GTM-01",
    title: "Leads come in. Nobody trusts the data.",
    body: "Fields are blank, duplicated, or filled with junk by the time an AE opens the record.",
    icon: "CopySimple",
  },
  {
    code: "GTM-02",
    title: "Routing runs on guesswork.",
    body: "Round robin assignment, no scoring, reps waiting on leads that should have been disqualified on arrival.",
    icon: "Shuffle",
  },
  {
    code: "GTM-03",
    title: "CRM fields are decoration.",
    body: "Nobody enforces them, so reporting becomes a translation exercise before it becomes an analysis.",
    icon: "ClipboardText",
  },
  {
    code: "GTM-04",
    title: "Handoffs lose context.",
    body: "Marketing to SDR to AE, and the notes that actually mattered stay in someone's inbox.",
    icon: "LinkBreak",
  },
  {
    code: "GTM-05",
    title: "Outbound runs by hand.",
    body: "Lists built in spreadsheets, sequences started manually, no signal for who to contact first.",
    icon: "HandTap",
  },
  {
    code: "GTM-06",
    title: "Tools exist. An operating system does not.",
    body: "The stack has a CRM, an enrichment tool, and three automation platforms, but nothing connects them on a schedule anyone trusts.",
    icon: "Plugs",
  },
];