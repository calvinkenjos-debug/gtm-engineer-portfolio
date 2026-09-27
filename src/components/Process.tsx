import { processSteps } from "@/content/process";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="max-w-[60ch]">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              How an engagement actually runs.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 hidden md:block" aria-hidden>
          <div className="absolute left-0 right-0 top-1.5 h-px bg-border" />
          <div className="grid grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.name} className="relative">
                <span className="absolute left-6 top-0 block h-3 w-3 -translate-y-1/2 rounded-full border-2 border-canvas bg-accent" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-5 md:mt-2 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.name} delay={i * 0.06}>
              <div className="glass-panel flex h-full flex-col rounded-card p-6">
                <span className="font-mono text-4xl font-medium text-ink-faint md:text-5xl">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-medium text-ink">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
