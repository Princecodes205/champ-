import React from "react";
import { motion } from "framer-motion";

interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  stack: string[];
  liveUrl: string;
  overview: string;
  problem: string;
  built: string[];
  screenshots: any[];
  results: any[];
  testimonial: any;
  cover: string;
}

const CaseStudyContent: React.FC<{ project: CaseStudy }> = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto py-24 sm:py-32">
      <header className="mb-16 sm:mb-24">
        <motion.div
          layoutId={`img-${project.slug}`}
          className="w-full aspect-video rounded-sm overflow-hidden mb-8 border border-black/10 dark:border-brand-white/10"
        >
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="flex flex-col gap-4">
          <motion.h1
            layoutId={`title-${project.slug}`}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-violet/10 text-brand-violet dark:text-brand-violet-light border border-brand-violet/20 rounded-sm text-xs font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-24">
        <div className="md:col-span-5 space-y-12">
          <section>
            <h4 className="text-brand-violet font-bold uppercase tracking-widest text-xs mb-4">Overview</h4>
            <p className="text-lg md:text-xl text-brand-white/70 leading-relaxed font-light">
              {project.summary}
            </p>
          </section>
          <section>
            <h4 className="text-brand-violet font-bold uppercase tracking-widest text-xs mb-4">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(item => (
                <span key={item} className="px-3 py-1 bg-brand-white/5 rounded-sm text-sm font-medium border border-brand-white/10">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-7 space-y-16">
          <section>
            <h4 className="text-brand-violet font-bold uppercase tracking-widest text-xs mb-4">The Challenge</h4>
            <p className="text-xl md:text-2xl text-brand-white/90 leading-relaxed font-light">
              {project.problem}
            </p>
          </section>
          <section>
            <h4 className="text-brand-violet font-bold uppercase tracking-widest text-xs mb-4">The Solution</h4>
            <ul className="space-y-4">
              {project.built.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg text-brand-white/70 leading-relaxed font-light">
                  <span className="text-brand-violet font-bold">0{i+1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <footer className="mt-24 sm:mt-32 pt-12 border-t border-brand-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-brand-white/40 text-sm uppercase tracking-widest">Visit Project</p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-brand-violet text-brand-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform shadow-xl"
        >
          Launch Site
        </a>
      </footer>
    </div>
  );
};

export default CaseStudyContent;
