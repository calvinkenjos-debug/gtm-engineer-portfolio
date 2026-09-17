import Image from "next/image";
import { services } from "@/content/services";
import { Reveal } from "@/components/Reveal";

export function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="max-w-[24ch] balance text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Four ways to work together.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.15fr_1fr] md:grid-rows-3">
          <Reveal className="md:row-span-3">
            <div className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-card border border-border p-8 text-dark-text">
              <Image
                src="/images/audit-blueprint.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,21,26,0.55) 0%, rgba(20,21,26,0.35) 40%, rgba(20,21,26,0.92) 100%)",
                }}
              />

              <div className="relative">
                <span className="mono-tag text-accent">{featured.name}</span>
                <p className="mt-4 max-w-[30ch] text-sm text-dark-text-secondary">{featured.forWhom}</p>
              </div>
              <p className="relative mt-8 max-w-[36ch] text-lg leading-relaxed text-dark-text">{featured.body}</p>
            </div>
          </Reveal>

          {rest.map((service, i) => (
            <Reveal key={service.id} delay={(i + 1) * 0.05}>
              <div className="h-full rounded-card border border-border bg-surface p-6">
                <span className="mono-tag text-ink-faint">{service.name}</span>
                <p className="mt-2 text-sm text-ink-secondary">{service.forWhom}</p>
                <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-ink">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}