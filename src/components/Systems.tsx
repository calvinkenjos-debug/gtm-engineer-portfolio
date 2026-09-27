import { stackLayers } from "@/content/stack";
import { Reveal } from "@/components/Reveal";
import { ToolLogo } from "@/components/ToolLogo";
import { WaterfallDiagram } from "@/components/diagrams/WaterfallDiagram";
import { StackOrb } from "@/components/diagrams/StackOrb";

export function Systems() {
  return (
    <section id="systems" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="max-w-[60ch]">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              I don&apos;t collect tools. I wire them into one operating system.
            </h2>
            <p className="mt-3 text-base text-ink-secondary">
              The connective tissue between data, workflows, and revenue execution, built layer by layer.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            {stackLayers.map((layer, i) => (
              <Reveal key={layer.layer} delay={i * 0.04}>
                <div className="border-b border-border pb-8 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-medium text-ink">{layer.layer}</h3>
                    <span className="text-xs text-ink-faint">{layer.role}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {layer.tools.map((tool) => (
                      <div
                        key={tool.slug}
                        className="flex items-center gap-2 rounded-tag border border-border bg-surface py-1.5 pl-1.5 pr-3"
                      >
                        <ToolLogo name={tool.name} slug={tool.slug} size={20} />
                        <span className="text-sm text-ink-secondary">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-card p-6">
                <span className="mono-tag text-ink-faint">One connected stack</span>
                <div className="mt-6">
                  <StackOrb />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Every layer on the left talks to the others. It isn&apos;t a pile of subscriptions, it&apos;s wired
                  into a single operating system.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="glass-panel rounded-card p-6">
                <span className="mono-tag text-ink-faint">Waterfall enrichment</span>
                <div className="diagram-grid mt-6 rounded-tag">
                  <WaterfallDiagram />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  Every provider gets queried in a fixed order. The first one to return a usable field wins that
                  field, so a contact record never depends on a single vendor&apos;s coverage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}