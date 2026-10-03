import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:border-brand-violet/30 break-words w-full mb-8 break-inside-avoid shadow-md hover:shadow-2xl dark:shadow-black/40"
    >
      <div className="relative w-full overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-10 opacity-60 group-hover:opacity-50 transition-opacity" />
        <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/20 transition-colors duration-500" />
        <div className="absolute top-4 right-4 z-30 sm:top-6 sm:right-6">
          <span className="bg-brand-violet text-brand-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
            {project.tag || "Project"}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-12 z-20 w-full flex flex-col flex-grow">
        <span className="text-brand-violet font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3 block">
          {project.category}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-black dark:text-brand-white tracking-tighter mb-4 sm:mb-6 break-words">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-black/50 dark:text-brand-black/50 font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300 mt-auto">
          Coming soon <span className="text-brand-violet">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const projects = [
    {
      title: "AwkGroup Website Redesign",
      category: "Web Design / Dev",
      id: 1,
      image: "/awk-group-cover-16x10.png",
      tag: "WEB DESIGN",
    },
    {
      title: "Technical Implementation",
      category: "Product Design / Dev",
      id: 2,
      image: "/coming-soon-poster-4x5.png",
      tag: "Development",
    },
    {
      title: "Custom Web Platform",
      category: "Web Development",
      id: 3,
      image: "/coming-soon-poster-4x5.png",
      tag: "Web",
    },
    {
      title: "Strategic User Experience",
      category: "UX Strategy / UI",
      id: 4,
      image: "/coming-soon-poster-16x10.png",
      tag: "Strategy",
    },
  ];

  return (
    <div className="flex flex-col bg-white text-black dark:bg-brand-black dark:text-brand-white min-h-screen selection:bg-brand-violet selection:text-brand-black transition-colors duration-500">
      <Helmet>
        <title>Work — Selected Projects & Methodology</title>
        <meta
          name="description"
          content="Explore the intersection of high-fidelity design and clean development through champ's selected case studies and process."
        />
        <link rel="canonical" href="https://champ-jet.vercel.app/work" />
        <meta
          property="og:title"
          content="Work — Selected Projects & Methodology"
        />
        <meta
          property="og:description"
          content="Explore the intersection of high-fidelity design and clean development through champ's selected case studies and process."
        />
        <meta property="og:url" content="https://champ-jet.vercel.app/work" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://champ-jet.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Work — Selected Projects & Methodology"
        />
        <meta
          name="twitter:description"
          content="Explore the intersection of high-fidelity design and clean development through champ's selected case studies and process."
        />
        <meta
          name="twitter:image"
          content="https://champ-jet.vercel.app/og-image.png"
        />
      </Helmet>
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Portfolio
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9]">
              Selected <br />{" "}
              <span className="text-brand-violet italic">Works.</span>
            </h1>
          </motion.div>
          <div className="hidden lg:block relative h-[400px] opacity-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 border border-brand-violet/30 rotate-45" />
              <div className="absolute w-72 h-72 border border-white/10 -rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="px-6 py-12 md:px-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black text-black dark:text-brand-white overflow-hidden transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-12"
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Our Approach
            </span>
            <h2 className="text-5xl md:text-7xl text-black dark:text-brand-white tracking-tighter leading-none mb-8 font-black">
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 -skew-x-12 bg-brand-violet"></span>
                <span className="relative">Execution</span>
              </span>
              <br />
              <span className="italic text-brand-violet">with Intent.</span>
            </h2>
            <p className="text-lg md:text-2xl text-black/70 dark:text-brand-white/70 leading-relaxed font-light">
              We don't believe in "standard" workflows. Every project is a
              unique technical challenge that requires a bespoke strategy. Our
              process is a rigorous loop of discovery and execution, where
              design and code evolve in tandem.
            </p>
            <p className="text-lg md:text-2xl text-black/70 dark:text-brand-white/70 leading-relaxed font-light">
              By merging the creativity of a studio with the discipline of a
              product team, we ensure that the final product isn't just visually
              stunning—it's structurally sound and built to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              The Workflow
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Steps of Operation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep dive into your vision, market landscape, and technical requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Defining the architectural blueprint and visual language of the product.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "High-fidelity design and agile development working in a synchronized loop.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Rigorous testing, optimization, and a seamless launch into the wild.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative p-8 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] rounded-3xl hover:border-brand-violet/30 transition-all duration-500"
              >
                <div className="text-brand-violet font-black text-5xl md:text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-black/60 dark:text-brand-white/60 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 bg-white text-brand-violet dark:bg-brand-violet dark:text-brand-black overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-brand-black dark:border-brand-white"
              />
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-12 leading-none"
          >
            Have a vision? <br />
            <span className="italic">Let's make it tangible.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-brand-violet text-brand-white dark:bg-brand-black dark:text-brand-white font-bold uppercase tracking-widest text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl rounded-full"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;
