import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Digital Products",
  description: "Productized GTM offers, coming soon.",
  robots: { index: false, follow: true },
};

export default function DigitalProductsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="flex min-h-[60vh] items-center border-b border-border py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-6">
            <Reveal>
              <div className="glass-panel max-w-[60ch] rounded-card p-8 md:p-10">
                <span className="mono-tag text-accent">Digital Products</span>
                <h1 className="mt-3 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  Digital products — in the works.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  This space is reserved for upcoming productized GTM offers — templates,
                  tools, and packaged systems. Nothing&apos;s live here yet; check back soon.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
