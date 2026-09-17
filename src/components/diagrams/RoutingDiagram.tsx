import { DiagramNode } from "@/components/diagrams/DiagramNode";

// Real system diagram for the first proof slot: a scored routing path
// replacing a single shared queue. Swap the SLA label once real case data
// is added.
export function RoutingDiagram() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "620 / 220" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Lead routing diagram: an inbound lead is scored, then routed to an AE within an SLA window or sent to a nurture sequence."
      >
        <path d="M20 50 H28" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.4" />
        <path d="M50 45 C 62 45, 62 15, 74 15" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" />
        <path d="M50 55 C 62 55, 62 85, 74 85" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.4" />
      </svg>

      <DiagramNode label="Inbound lead" style={{ left: "0%", top: "40%", width: "20%", height: "20%" }} />

      <DiagramNode
        label="ICP scoring"
        tool={{ name: "Clay", slug: "clay" }}
        style={{ left: "28%", top: "40%", width: "22%", height: "20%" }}
      />

      <DiagramNode
        label="AE, 5 min SLA"
        sublabel="score above bar"
        tool={{ name: "HubSpot", slug: "hubspot" }}
        accent
        style={{ left: "74%", top: "4%", width: "26%", height: "24%" }}
      />

      <DiagramNode
        label="Nurture sequence"
        sublabel="score below bar"
        style={{ left: "74%", top: "72%", width: "26%", height: "24%" }}
      />
    </div>
  );
}