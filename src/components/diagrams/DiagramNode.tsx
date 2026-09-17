import { ToolLogo } from "@/components/ToolLogo";

interface DiagramNodeProps {
  label: string;
  sublabel?: string;
  tool?: { name: string; slug: string };
  accent?: boolean;
  style: React.CSSProperties;
}

// A single positioned node in a hand-built workflow diagram: a small glass
// card carrying a real tool logo when the step maps to a specific tool, or
// a plain label when it's a generic step (e.g. "Inbound lead").
export function DiagramNode({ label, sublabel, tool, accent, style }: DiagramNodeProps) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center gap-1 rounded-tag px-2 text-center ${
        accent ? "glass-panel border-accent/30" : "glass-panel"
      }`}
      style={style}
    >
      {tool && (
        <div className="rounded-[6px] bg-surface p-1 shadow-[0_1px_2px_rgba(20,21,26,0.06)]">
          <ToolLogo name={tool.name} slug={tool.slug} size={18} />
        </div>
      )}
      {sublabel && (
        <span className="font-mono text-[10px] uppercase leading-tight tracking-wide text-ink-faint">
          {sublabel}
        </span>
      )}
      <span className={`text-[12px] font-medium leading-tight ${accent ? "text-accent" : "text-ink"}`}>{label}</span>
    </div>
  );
}