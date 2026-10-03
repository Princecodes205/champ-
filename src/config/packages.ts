export interface Package {
  id: string;
  name: string;
  description: string;
  inclusions: string[];
  timeline: string;
  price: {
    ngn: string;
    usd: string;
  };
}

export const PACKAGES: Package[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    description:
      "A high-converting single page designed to capture leads and sell a specific offer.",
    inclusions: [
      "Mobile-first responsive design",
      "Integration with email marketing tools",
      "Basic SEO optimization",
      "Fast loading performance",
    ],
    timeline: "1-2 weeks",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
  {
    id: "business-website",
    name: "Business Website",
    description:
      "A professional multi-page site to establish authority and showcase a full range of services.",
    inclusions: [
      "Custom multi-page architecture",
      "Service-specific landing pages",
      "About and Contact systems",
      "Advanced SEO strategy",
      "CMS integration for blog/news",
      "Custom Mail",
    ],
    timeline: "3-5 weeks",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
  {
    id: "custom-build",
    name: "Custom Build",
    description:
      "Complex web applications or CMS-managed platforms tailored to specific business logic.",
    inclusions: [
      "Full-stack custom development",
      "Custom CMS (headless or integrated)",
      "Third-party API integrations",
      "User authentication and dashboards",
      "Scalable infrastructure setup",
    ],
    timeline: "6-12 weeks",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    description:
      "A complete visual identity that makes your business look credible, consistent, and ready to sell, from logo to guidelines.",
    inclusions: [
      "Logo design (primary, secondary, and icon-only versions)",
      "Color palette and typography system",
      "Brand guidelines document (usage rules, spacing, do's and don'ts)",
      "Social media profile kit (avatars, covers, post templates)",
      "Business card and core stationery designs",
      "Final files in all formats (SVG, PNG, PDF) with light and dark variants",
    ],
    timeline: "2-4 weeks",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
  {
    id: "social-media-design",
    name: "Social Media Design",
    description:
      "Consistent, scroll-stopping visuals for your social channels, designed to look professional and keep your brand recognizable in every post.",
    inclusions: [
      "Profile setup kit (avatar, cover, highlight icons)",
      "Custom post templates (editable and reusable)",
      "Monthly batch of designed posts (feed, carousel, story)",
      "Content layout planned around your brand colors and typography",
      "Platform-specific sizing (Instagram, Facebook, LinkedIn, X)",
      "Final files delivered in PNG/JPG, with source files on request",
    ],
    timeline: "1-2 weeks setup",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
  {
    id: "marketing-materials",
    name: "Marketing Materials",
    description:
      "Print and digital promotional designs that get your offer noticed and move people to act, from event flyers to product posters.",
    inclusions: [
      "Posters and flyers (print-ready and digital versions)",
      "Carousels and single-image promo graphics",
      "Brochures, menus, and catalogues",
      "Banners, billboards, and signage artwork",
      "Presentation decks and pitch visuals",
      "Print-ready files with correct bleed, margins, and CMYK setup",
    ],
    timeline: "3-7 days per piece",
    price: {
      ngn: "TODO",
      usd: "TODO",
    },
  },
];
