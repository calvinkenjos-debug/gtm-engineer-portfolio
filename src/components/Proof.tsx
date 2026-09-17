import { caseStudies } from "@/content/proof";
import { Reveal } from "@/components/Reveal";
import { RoutingDiagram } from "@/components/diagrams/RoutingDiagram";

export function Proof() {
  return (
    <section id="proof" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="max-w-[60ch]">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Proof, not a pile of claims.
            </h2>
            <p className="mt-3 text-base text-ink-secondary">
              These slots are templates awaiting real engagements. Every bracket below gets replaced with an actual
              problem, fix, and verifiable result before this goes live.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05}>
              <div className="rounded-card border border-dashed border-border-strong bg-surface p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="mono-tag text-ink-faint">{study.category}</span>
                  <span className="mono-tag rounded-pill border border-border-strong px-3 py-1 text-ink-faint">
                    Template slot
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium text-ink">{study.clientLabel}</h3>

                <div className={`mt-6 grid gap-8 ${study.hasDiagram ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}>
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <p className="mono-tag text-ink-faint">Problem</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{study.problem}</p>
                    </div>
                    <div>
                      <p className="mono-tag text-ink-faint">Fix</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{study.fix}</p>
                    </div>
                    <div>
                      <p className="mono-tag text-ink-faint">Result</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{study.result}</p>
                    </div>
                  </div>

                  {study.hasDiagram && (
                    <div className="glass-panel diagram-grid rounded-card p-5">
                      <RoutingDiagram />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}