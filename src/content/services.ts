// `icon` names key into the SERVICE_ICONS map in Services.tsx (phosphor-icons/react).
export type ServiceIcon = "MagnifyingGlass" | "Compass" | "Wrench" | "ArrowsClockwise";

export interface ServiceOffer {
  id: string;
  name: string;
  forWhom: string;
  body: string;
  icon: ServiceIcon;
  /** Cal.com event-type link for this specific service's 30-min slot. */
  bookingUrl: string;
  featured?: boolean;
}

export const services: ServiceOffer[] = [
  {
    id: "audit",
    name: "Audit",
    forWhom: "For teams who suspect something is broken and want proof.",
    body: "A direct teardown of your current stack, funnel, and ops layer, with a prioritized fix list ranked by revenue impact, not by what's easiest to fix.",
    icon: "MagnifyingGlass",
    bookingUrl: "https://cal.com/joseph-calvin-pzdzk2/audit",
    featured: true,
  },
  {
    id: "consulting",
    name: "Consulting",
    forWhom: "For teams who need a second set of eyes before committing budget or headcount.",
    body: "Strategy, CRM architecture, process design, and GTM system reviews. I tell you what to build and why before you build it.",
    icon: "Compass",
    bookingUrl: "https://cal.com/joseph-calvin-pzdzk2/consulting",
  },
  {
    id: "freelance",
    name: "Freelance execution",
    forWhom: "For teams who know what they need and want it shipped.",
    body: "Hands-on implementation: routing logic, enrichment waterfalls, lifecycle automation, and the reporting layer that proves it's working.",
    icon: "Wrench",
    bookingUrl: "https://cal.com/joseph-calvin-pzdzk2/freelancing",
  },
  {
    id: "fractional",
    name: "Fractional GTM engineering",
    forWhom: "For teams past the audit stage who need someone accountable for the system, every week.",
    body: "Embedded, ongoing execution without a full-time hire. I own the system the way an in-house RevOps engineer would.",
    icon: "ArrowsClockwise",
    bookingUrl: "https://cal.com/joseph-calvin-pzdzk2/fractional-gtm-engineering",
  },
];