import { problems } from "@/content/problems";
import { Reveal } from "@/components/Reveal";

export function Problems() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="max-w-[28ch] balance text-2xl font-medium tracking-tight text-ink md:text-3xl">
              None of this is a tooling problem. It&apos;s a systems problem.
            </h2>
            <span className="mono-tag hidden text-ink-faint md:inline">scroll for more &rarr;</span>
          </div>
        </Reveal>
      </div>

      <div className="scroll-strip scroll-fade mt-10 overflow-x-auto pl-6 md:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]">
        <div className="flex gap-4 pr-6">
          {problems.map((problem, i) => (
            <Reveal key={problem.code} delay={i * 0.05} className="shrink-0">
              <div className="flex h-full w-72 flex-col justify-between overflow-hidden rounded-card border border-border bg-surface">
                <div className="flex items-center gap-2 border-b border-border bg-canvas px-4 py-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span className="mono-tag text-ink-faint">{problem.code}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium leading-snug text-ink">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{problem.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}