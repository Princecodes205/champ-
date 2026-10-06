export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  span?: "full" | "half";
}

export interface Gallery {
  layout?: "grid" | "stacked";
  title?: string;
  items: GalleryItem[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  stack: string[];
  liveUrl: string;
  overview: string;
  problem: string;
  built: string[];
  testimonial?: string | null;
  cover: string;
  gallery?: Gallery;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "awk-group",
    title: "Awk Group",
    summary: "One site for five brands, with a CMS the client runs themselves.",
    tags: ["Web design", "Development", "CMS"],
    stack: ["React", "Sanity CMS", "Vercel"],
    liveUrl: "https://awkgroup.com.ng",
    overview: "Awk Group operates across interiors, immigration consultancy, agro-allied, real estate, and a foundation. Each business serves a different audience, and none of them had a credible online presence.",
    problem: "Five businesses meant five different customers. A single generic site would have confused all of them. Separate sites would have been expensive and hard to maintain. The team also needed to update content without calling a developer each time.",
    built: [
      "A multi-brand site where each business gets its own section, tone, and calls to action under one parent identity",
      "A brand system for the group: charcoal, off-white, and warm amber, set in Archivo Expanded and Space Grotesk",
      "A Sanity CMS integration so the Awk team can edit content themselves",
      "Deployment on Vercel with a custom .com.ng domain"
    ],
    testimonial: null,
    cover: "/awk-group-cover-16x10.png",
    // Example gallery entry for other projects:
    // gallery: {
    //   layout: "grid",
    //   title: "Visual Delivery",
    //   items: [
    //     { src: "/img1.jpg", alt: "Description", span: "full", caption: "Full width image" },
    //     { src: "/img2.jpg", alt: "Description", span: "half", caption: "Half width image" },
    //     { src: "/img3.jpg", alt: "Description", span: "half", caption: "Half width image" },
    //   ]
    // }
  },
];
