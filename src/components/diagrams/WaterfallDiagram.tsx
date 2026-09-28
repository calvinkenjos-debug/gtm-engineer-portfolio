import { DiagramNode } from "@/components/diagrams/DiagramNode";

const sources = [
  { name: "Clay", slug: "clay", top: "4%" },
  { name: "Apollo", slug: "apollo", top: "27%" },
  { name: "ZoomInfo", slug: "zoominfo", top: "50%" },
  { name: "Clearbit", slug: "clearbit", top: "73%" },
];

const sourceCenterY = [11.5, 34.5, 57.5, 80.5];

// Real system diagram, not decoration: illustrates waterfall enrichment,
// the pattern referenced throughout the Systems section copy. Each source
// is queried in order; the first one to return a usable field wins the field.
// Built as glass HTML nodes over an SVG connector layer (not pure SVG) so
// real tool logos can sit inside each node.
export function WaterfallDiagram() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "600 / 280" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Waterfall enrichment diagram: four data providers feed a merge step that outputs one enriched contact record."
      >
        {sourceCenterY.map((y) => (
          <path
            key={y}
            d={`M11 ${y} C 32 ${y}, 32 49, 62 49`}
            fill="none"
            stroke="var(--color-border-strong)"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      {sources.map((source) => (
        <DiagramNode
          key={source.slug}
          label={source.name}
          tool={{ name: source.name, slug: source.slug }}
          logoOnly
          style={{ left: "2%", top: source.top, width: "9%", height: "15%" }}
        />
      ))}

      <DiagramNode
        label="Enriched record"
        sublabel="first field wins"
        accent
        style={{ left: "62%", top: "36%", width: "34%", height: "26%" }}
      />
    </div>
  );
}