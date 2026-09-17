import { testimonials } from "@/content/testimonials";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">Testimonials</h2>
            <span className="mono-tag text-ink-faint">Awaiting real quotes</span>
          </div>
        </Reveal>
      </div>

      <div className="scroll-strip scroll-fade mt-10 overflow-x-auto pl-6 md:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]">
        <div className="flex gap-4 pr-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05} className="shrink-0">
              <div className="flex h-full w-80 flex-col justify-between rounded-card border border-dashed border-border-strong bg-surface p-6">
                <p className="text-base leading-relaxed text-ink-secondary">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-ink-faint">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}