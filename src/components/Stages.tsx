import { stages } from "@/content/stages";
import { Reveal } from "@/components/Reveal";

export function Stages() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="max-w-[60ch]">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              The work looks different at every stage.
            </h2>
            <p className="mt-3 text-base text-ink-secondary">
              What actually needs building depends less on your industry than on how many people are touching the
              funnel and whether anyone agreed on what happens next.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-0 right-0 top-1.5 h-px bg-border" aria-hidden />
          <div className="grid grid-cols-4 gap-6">
            {stages.map((stage) => (
              <div key={stage.range} className="relative">
                <span className="absolute left-0 top-0 block h-3 w-3 -translate-y-1/2 rounded-full border-2 border-canvas bg-accent" aria-hidden />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-5 md:mt-2 md:grid-cols-4 md:gap-6">
          {stages.map((stage, i) => (
            <Reveal key={stage.range} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-border bg-surface p-5">
                <span className="mono-tag text-accent">{stage.range}</span>
                <h3 className="mt-2 text-base font-medium leading-snug text-ink">{stage.name}</h3>

                <div className="mt-4 flex-1 space-y-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">What&apos;s true</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{stage.reality}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">What gets built</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">{stage.build}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}