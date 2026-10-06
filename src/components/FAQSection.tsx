import React from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How does the pricing work?",
    answer: "We provide tailored quotes based on the complexity of your project. Our starting prices give you a baseline, but we refine the cost after the Discovery phase to ensure you only pay for what you actually need.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer: "A landing page typically takes 1-2 weeks, while full business sites take 3-5 weeks. Custom builds vary based on logic but generally range from 6-12 weeks. We provide a strict roadmap during the Strategy phase.",
  },
  {
    question: "How many revisions are included?",
    answer: "Our process is iterative. We include two major rounds of revisions during the Design phase. Once the build begins, we focus on refinements and polish to ensure the final product is flawless.",
  },
  {
    question: "What are the payment terms?",
    answer: "We operate on a deposit-based structure: typically 50% upfront to initiate the project and 50% upon final approval before the site goes live.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer: "We provide full technical guidance on choosing the right provider. While we don't sell hosting, we handle the entire deployment and can manage your infrastructure for a monthly retainer.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "The more clarity we have, the faster we build. We'll need your brand assets (logo, colors), basic content for the pages, and a clear understanding of your primary business goal.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. Every project comes with a handover period. We also offer maintenance packages to keep your site secure, optimized, and updated as your business grows.",
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-black/10 dark:border-brand-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-bold tracking-tighter transition-colors ${isOpen ? "text-brand-violet" : "text-black dark:text-brand-white"}`}>
          {item.question}
        </span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-brand-violet`} aria-hidden="true">
          ↓
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}
        role="region"
        aria-label={item.question}
      >
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed text-sm md:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4"
          >
            Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
          >
            FAQ.
          </motion.h2>
        </div>
        <div className="flex flex-col">
          {FAQ_DATA.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
