import { DiagramNode } from "@/components/diagrams/DiagramNode";

const sources = [
  { label: "Marketing", top: "6%" },
  { label: "Sales", top: "40%" },
  { label: "Customer success", top: "74%" },
];

const sourceCenterY = [16, 50, 84];

// Real system diagram for the CRM & reporting cleanup proof slot: three
// teams reporting three different numbers get funneled through a single
// field-governance step into one BigQuery source of truth.
export function CrmDiagram() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "600 / 280" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="CRM cleanup diagram: Marketing, Sales, and Customer Success data converge through a field-governance step into a single BigQuery source of truth."
      >
        {sourceCenterY.map((y) => (
          <path
            key={y}
            d={`M22 ${y} C 34 ${y}, 34 50, 46 50`}
            fill="none"
            stroke="var(--color-border-strong)"
            strokeWidth="0.4"
          />
        ))}
        <path d="M68 50 H76" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" />
      </svg>

      {sources.map((source) => (
        <DiagramNode
          key={source.label}
          label={source.label}
          style={{ left: "0%", top: source.top, width: "22%", height: "18%" }}
        />
      ))}

      <DiagramNode
        label="Field governance"
        sublabel="one definition"
        style={{ left: "46%", top: "38%", width: "22%", height: "24%" }}
      />

      <DiagramNode
        label="Source of truth"
        sublabel="single model"
        tool={{ name: "BigQuery", slug: "bigquery" }}
        accent
        style={{ left: "76%", top: "34%", width: "24%", height: "32%" }}
      />
    </div>
  );
}
