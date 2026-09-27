import { MagnifyingGlass, Compass, Wrench, ArrowsClockwise, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services, type ServiceIcon } from "@/content/services";
import { Reveal } from "@/components/Reveal";

const SERVICE_ICONS: Record<ServiceIcon, typeof MagnifyingGlass> = {
  MagnifyingGlass,
  Compass,
  Wrench,
  ArrowsClockwise,
};

// Audit scope tags pulled straight from the existing copy ("stack, funnel,
// and ops layer") — no new claims, just surfaced as a visual scan strip.
const AUDIT_SCOPE = ["Stack", "Funnel", "Ops layer"];

export function Services() {
  const [featured, ...rest] = services;
  const FeaturedIcon = SERVICE_ICONS[featured.icon];

  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="max-w-[24ch] balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Four ways to work together.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.15fr_1fr] md:grid-rows-3">
          <Reveal className="md:row-span-3">
            <div className="glass-panel relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-card border border-border-strong p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-medium text-ink-faint md:text-5xl">01</span>
                <span className="rounded-pill border border-border-strong bg-canvas px-3 py-1.5 mono-tag text-accent">
                  Start here
                </span>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-tag bg-accent-soft">
                    <FeaturedIcon size={22} className="text-accent" weight="bold" />
                  </div>
                  <span className="mono-tag text-ink-faint">{featured.name}</span>
                </div>
                <p className="mt-4 max-w-[32ch] text-sm text-ink-secondary">{featured.forWhom}</p>
                <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-ink">{featured.body}</p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <div className="flex flex-wrap gap-2.5">
                  {AUDIT_SCOPE.map((scope) => (
                    <span
                      key={scope}
                      className="rounded-tag border border-border bg-canvas px-3 py-1.5 mono-tag text-ink-secondary"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
                <a
                  href={featured.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex items-center gap-1.5 rounded-button bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-accent"
                >
                  Book 30 min
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {rest.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal key={service.id} delay={(i + 1) * 0.05}>
                <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_32px_-16px_rgba(20,21,26,0.18)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-tag bg-accent-soft">
                      <Icon size={18} className="text-accent" weight="bold" />
                    </div>
                    <span className="font-mono text-2xl font-medium text-ink-faint">0{i + 2}</span>
                  </div>
                  <span className="mt-4 mono-tag text-ink-faint">{service.name}</span>
                  <p className="mt-2 text-sm text-ink-secondary">{service.forWhom}</p>
                  <p className="mt-3 max-w-[48ch] flex-1 text-sm leading-relaxed text-ink">{service.body}</p>
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-5 inline-flex w-fit items-center gap-1.5 rounded-button bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-accent"
                  >
                    Book 30 min
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
