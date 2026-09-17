"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/content/faq";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="border-t border-border py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[720px] px-6">
        <Reveal>
          <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Questions worth answering directly.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-ink">{item.question}</span>
                  <CaretDown
                    size={16}
                    weight="bold"
                    className={`shrink-0 text-ink-faint transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="max-w-[68ch] pb-5 text-sm leading-relaxed text-ink-secondary">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}