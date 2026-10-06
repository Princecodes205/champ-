import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PACKAGES } from "../config/packages";
import { analytics } from "../lib/analytics";

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4"
          >
            Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="font-black tracking-tighter leading-[1.1] text-4xl sm:text-5xl md:text-7xl text-black dark:text-brand-white"
          >
            Tailored solutions for <br />
            <span className="text-brand-violet italic">digital growth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] transition-all duration-500 hover:border-brand-violet/30 rounded-3xl shadow-sm dark:shadow-none flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-brand-white">
                    {pkg.name}
                  </h3>
                  <span className="text-brand-violet font-mono text-xs font-bold">
                    {pkg.timeline}
                  </span>
                </div>
                <p className="text-black/70 dark:text-brand-white/70 text-base leading-relaxed mb-10">
                  {pkg.description}
                </p>
                <div className="space-y-4 mb-12">
                  <span className="text-black/40 dark:text-brand-white/30 font-mono text-[10px] uppercase tracking-widest block">
                    Included
                  </span>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-black/70 dark:text-brand-white/70">
                        <span className="text-brand-violet font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-black/10 dark:border-brand-white/10">
                <div className="mb-6">
                  <span className="text-black/40 dark:text-brand-white/30 font-mono text-[10px] uppercase tracking-widest block mb-1">
                    Starting from
                  </span>
                  <div className="flex gap-4 items-baseline font-black tracking-tighter text-2xl md:text-3xl text-black dark:text-brand-white">
                    <span>{pkg.price.ngn} <span className="text-xs font-medium text-black/40 dark:text-brand-white/30">NGN</span></span>
                    <span className="text-black/20 dark:text-brand-white/10">|</span>
                    <span>{pkg.price.usd} <span className="text-xs font-medium text-black/40 dark:text-brand-white/30">USD</span></span>
                  </div>
                </div>
                <Link
                  to={`/contact?package=${pkg.id}`}
                  onClick={() => analytics.trackOfferingClick(pkg.name)}
                  className="block text-center w-full py-4 bg-brand-violet text-brand-white font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform rounded-full shadow-lg shadow-brand-violet/20"
                  aria-label={`Start project with ${pkg.name}`}
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
