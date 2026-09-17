import { processSteps } from "@/content/process";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="max-w-[24ch] balance text-2xl font-medium tracking-tight text-ink md:text-3xl">
            How an engagement actually runs.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.name} delay={i * 0.06}>
              <div className="relative pl-6 md:pl-0">
                <div
                  className="absolute left-0 top-1 h-full w-px bg-border md:left-0 md:top-0 md:h-px md:w-full"
                  aria-hidden
                />
                <div className="absolute left-[-3px] top-0 h-2 w-2 rounded-full bg-accent md:left-0" aria-hidden />
                <div className="md:pt-6">
                  <h3 className="text-base font-medium text-ink">{step.name}</h3>
                  <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-secondary">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}