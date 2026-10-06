import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  time: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Brief",
    desc: "A deep dive into your vision, market landscape, and technical requirements. We map out the problem before proposing the solution.",
    time: "3-5 Days",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architectural blueprinting and high-fidelity UI/UX design. We establish the visual language and user flow to ensure clarity.",
    time: "1-3 Weeks",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, performant development. Design and code evolve in a synchronized loop, with weekly updates and rigorous testing.",
    time: "2-6 Weeks",
  },
  {
    step: "04",
    title: "Launch & Handover",
    desc: "Final optimization, deployment, and a seamless handover. You get a product that is ready to perform and easy to manage.",
    time: "1 Week",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black text-black dark:text-brand-white overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Steps of Operation.
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] rounded-3xl hover:border-brand-violet/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-brand-violet font-black text-5xl md:text-6xl opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 dark:text-brand-white/30 bg-black/5 dark:bg-brand-white/5 px-2 py-1 rounded">
                  {item.time}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-4">
                {item.title}
              </h3>
              <p className="text-black/70 dark:text-brand-white/70 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
