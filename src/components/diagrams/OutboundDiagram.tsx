import { DiagramNode } from "@/components/diagrams/DiagramNode";

// Real system diagram for the outbound automation proof slot: an intent
// signal triggers an n8n pipeline that hands off to Smartlead sequencing,
// then logs every touch back to the CRM automatically.
export function OutboundDiagram() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "620 / 220" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Outbound automation diagram: an intent signal triggers an n8n pipeline, which hands off to Smartlead sequencing and logs the touch to the CRM."
      >
        <path d="M20 50 H27" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.4" />
        <path d="M47 50 H54" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.4" />
        <path d="M74 50 H80" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" />
      </svg>

      <DiagramNode
        label="Intent signal"
        tool={{ name: "Bombora", slug: "bombora" }}
        style={{ left: "0%", top: "40%", width: "20%", height: "20%" }}
      />

      <DiagramNode
        label="n8n pipeline"
        tool={{ name: "n8n", slug: "n8n" }}
        style={{ left: "27%", top: "40%", width: "20%", height: "20%" }}
      />

      <DiagramNode
        label="Sequenced"
        tool={{ name: "Smartlead", slug: "smartlead" }}
        style={{ left: "54%", top: "40%", width: "20%", height: "20%" }}
      />

      <DiagramNode
        label="Logged"
        sublabel="every touch"
        tool={{ name: "HubSpot", slug: "hubspot" }}
        accent
        style={{ left: "80%", top: "36%", width: "20%", height: "28%" }}
      />
    </div>
  );
}
