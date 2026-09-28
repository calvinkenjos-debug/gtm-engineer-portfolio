// Placeholder slots. Replace with real testimonials before launch — the
// component renders these visibly marked as unpublished, never as real quotes.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "[PLACEHOLDER — replace with real quote] Our reps were fighting over the same stale leads for days. Joseph rebuilt the routing logic so a new lead hits the right AE in under two minutes, no more manual reassignment.",
    name: "[Name — replace]",
    role: "[VP of Sales / Sales Ops, B2B SaaS]",
  },
  {
    id: "t2",
    quote:
      "[PLACEHOLDER — replace with real quote] We were paying for three enrichment vendors and still had garbage contact data. The waterfall he set up cut our bounce rate in half without adding another tool to the stack.",
    name: "[Name — replace]",
    role: "[Head of RevOps / Marketing Ops, B2B SaaS]",
  },
  {
    id: "t3",
    quote:
      "[PLACEHOLDER — replace with real quote] I didn't need another full-time hire, I needed someone to own the system. He came in fractional and now our lifecycle automation actually reflects how we sell.",
    name: "[Name — replace]",
    role: "[Founder / CRO, Series A-B SaaS]",
  },
];