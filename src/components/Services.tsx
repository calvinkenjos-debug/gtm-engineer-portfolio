import { MagnifyingGlass, Compass, Wrench, ArrowsClockwise, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services, type ServiceIcon } from "@/content/services";
import { Reveal } from "@/components/Reveal";

const SERVICE_ICONS: Record<ServiceIcon, typeof MagnifyingGlass> = {
  MagnifyingGlass,
  Compass,
  Wrench,
  ArrowsClockwise,
};

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="max-w-[24ch] balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl">
            Four ways to work together.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_32px_-16px_rgba(20,21,26,0.18)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-tag bg-accent-soft">
                      <Icon size={18} className="text-accent" weight="bold" />
                    </div>
                    <span className="font-mono text-2xl font-medium text-ink-faint">0{i + 1}</span>
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
