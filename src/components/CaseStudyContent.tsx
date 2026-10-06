import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import type { CaseStudy } from "../data/caseStudies";
import OptimizedImage from "./OptimizedImage";
import GalleryBlock from "./GalleryBlock";

const CaseStudyContent: React.FC<{ project: CaseStudy }> = ({ project }) => {
  const navigate = useNavigate();
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === project.slug);
  const prevProject = caseStudies[currentIndex - 1];
  const nextProject = caseStudies[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto pt-16 md:pt-24 pb-16 md:pb-24 text-center">
      {/* --- HERO --- */}
      <header className="mb-24 sm:mb-32">
        <div className="flex flex-col gap-4 mb-8">
          <motion.h1
            layoutId={`title-${project.slug}`}
            className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter leading-[0.9] text-black dark:text-brand-white"
          >
            {project.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-brand-violet italic">
              {project.title.split(" ").pop()}
            </span>
          </motion.h1>
          <p className="text-xl text-black/70 dark:text-brand-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-start mb-8">
          <div className="flex flex-col gap-1 px-4 sm:px-8 border-r hairline-border">
            <span className="text-black/50 dark:text-brand-white/50 uppercase text-[10px] tracking-widest font-bold">
              Category
            </span>
            <span className="text-sm font-medium">{project.tags.join(" / ")}</span>
          </div>
          <div className="flex flex-col gap-1 px-4 sm:px-8 border-r hairline-border">
            <span className="text-black/50 dark:text-brand-white/50 uppercase text-[10px] tracking-widest font-bold">
              Stack
            </span>
            <span className="text-sm font-medium">
              {project.stack.join(", ")}
            </span>
          </div>
          <div className="flex flex-col gap-1 px-4 sm:px-8">
            <span className="text-black/50 dark:text-brand-white/50 uppercase text-[10px] tracking-widest font-bold">
              Visit Site
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-brand-violet transition-colors inline-flex items-center gap-1"
            >
              {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-12">
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="px-8 py-3 bg-brand-violet text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-none"
          >
            Visit Live Site
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          layoutId={`img-${project.slug}`}
          className="max-w-5xl mx-auto w-full border hairline-border rounded-3xl overflow-hidden shadow-sm dark:shadow-none"
        >
          <OptimizedImage
            src={project.cover}
            alt={project.title}
            className="w-full h-auto block"
          />
        </motion.div>
      </header>

      {/* --- BODY --- */}
      <div className="space-y-12 md:space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center py-12 md:py-16"
        >
          <span className="text-black/50 dark:text-brand-white/50 uppercase text-xs font-bold tracking-widest mb-6">
            Overview
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            The <span className="text-brand-violet italic">Overview.</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto text-center text-black/70 dark:text-brand-white/70">
            {project.overview}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center py-12 md:py-16"
        >
          <span className="text-black/50 dark:text-brand-white/50 uppercase text-xs font-bold tracking-widest mb-6">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            The <span className="text-brand-violet italic">Challenge.</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto text-center text-black/70 dark:text-brand-white/70">
            {project.problem}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center py-12 md:py-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
            The <span className="text-brand-violet italic">Solution.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {project.built.map((item, i) => (
              <div
                key={i}
                className="group p-8 border hairline-border rounded-3xl transition-all duration-500 hover:border-brand-violet/50 text-center flex flex-col items-center gap-4"
              >
                <span className="text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-black dark:text-brand-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed font-light">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="flex flex-col items-center py-12 md:py-16">
          <GalleryBlock gallery={project.gallery} />
        </div>

        {project.testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center py-12 md:py-16"
          >
            <div className="max-w-3xl p-12 border hairline-border bg-surface rounded-3xl italic relative">
              <p className="text-2xl leading-relaxed mb-8">
                "{project.testimonial}"
              </p>
            </div>
          </motion.section>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-32 pt-24 pb-16 md:pb-24 border-t hairline-border flex flex-col items-center text-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
            Need something <br /> <span className="text-brand-violet italic">like this?</span>
          </h3>
          <button
            onClick={() => navigate("/contact")}
            className="px-12 py-5 bg-brand-violet text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-none"
          >
            Start a Project
          </button>
        </div>

        {caseStudies.length > 1 && (
          <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pt-12 border-t hairline-border">
            {prevProject && (
              <button
                onClick={() => navigate(`/work/${prevProject.slug}`)}
                className="group flex flex-col items-start text-left hover:text-brand-violet transition-colors"
              >
                <span className="text-muted uppercase text-[10px] tracking-widest font-bold">
                  Previous Project
                </span>
                <span className="text-lg font-black tracking-tighter">
                  {prevProject.title}
                </span>
              </button>
            )}
            {!prevProject && <div />}
            {nextProject && (
              <button
                onClick={() => navigate(`/work/${nextProject.slug}`)}
                className="group flex flex-col items-end text-right hover:text-brand-violet transition-colors"
              >
                <span className="text-muted uppercase text-[10px] tracking-widest font-bold">
                  Next Project
                </span>
                <span className="text-lg font-black tracking-tighter">
                  {nextProject.title}
                </span>
              </button>
            )}
          </div>
        )}
      </footer>
    </div>
  );
};

export default CaseStudyContent;
