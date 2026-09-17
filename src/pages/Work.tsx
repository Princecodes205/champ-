import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const isFullWidth = index % 3 === 0; // Vary layout: every first project in a set of 3 spans full width on md
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className={`group relative aspect-[16/10] md:aspect-[4/3] bg-brand-white/5 border border-brand-white/10 overflow-hidden rounded-none cursor-pointer ${isFullWidth ? 'md:col-span-2' : 'col-span-1'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/20 transition-colors" />
      <div className="absolute top-4 right-4 z-30">
        <span className="bg-brand-violet text-brand-black text-[10px] font-bold uppercase px-2 py-1">Placeholder</span>
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 w-full">
        <span className="text-brand-violet font-mono text-[10px] md:text-xs uppercase mb-2 block">{project.category}</span>
        <h3 className="text-2xl md:text-5xl font-black text-brand-white tracking-tighter mb-4">{project.title}</h3>
        <div className="flex items-center gap-2 text-brand-white/50 font-medium text-xs md:text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
          Coming soon <span className="text-brand-violet">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Work: React.FC = () => {
  const projects = [
    { title: "Digital Product Design", category: "Visual Identity / UX", id: 1 },
    { title: "Technical Implementation", category: "Product Design / Dev", id: 2 },
    { title: "Custom Web Platform", category: "Web Development", id: 3 },
    { title: "Strategic User Experience", category: "UX Strategy / UI", id: 4 },
    { title: "Enterprise Interface", category: "Product Design", id: 5 },
    { title: "Complex Engineering", category: "Custom Engineering", id: 6 },
  ];

  return (
    <div className="flex flex-col bg-brand-black text-brand-white min-h-screen selection:bg-brand-violet selection:text-brand-black">
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">Portfolio</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
              Selected <br /> <span className="text-brand-violet italic">Works.</span>
            </h1>
          </motion.div>
          <div className="hidden lg:block relative h-[400px] opacity-40">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-brand-violet/30 rotate-45" />
                <div className="absolute w-64 h-64 border border-brand-white/10 -rotate-45" />
             </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="px-4 py-12 md:px-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-brand-white text-brand-black overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-center"
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">Our Approach</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              Engineering <br /> <span className="italic text-brand-violet">with Intent.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed font-light">
              We don't believe in "standard" workflows. Every project is a unique technical challenge that requires a bespoke strategy. Our process is a rigorous loop of discovery and execution, where design and code evolve in tandem.
            </p>
            <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed font-light">
              By merging the creativity of a studio with the precision of an engineering firm, we ensure that the final product isn't just visually stunning—it's architecturally sound and built to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Steps of Operation.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your vision, market landscape, and technical requirements." },
              { step: "02", title: "Strategy", desc: "Defining the architectural blueprint and visual language of the product." },
              { step: "03", title: "Execution", desc: "High-fidelity design and agile engineering working in a synchronized loop." },
              { step: "04", title: "Delivery", desc: "Rigorous testing, optimization, and a seamless launch into the wild." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 border border-brand-white/10 bg-brand-white/[0.02] rounded-none hover:border-brand-violet transition-colors"
              >
                <div className="text-brand-violet font-black text-5xl md:text-6xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-4">{item.title}</h3>
                <p className="text-brand-white/60 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-24 md:py-32 bg-brand-violet text-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-12 h-full w-full">
             {[...Array(144)].map((_, i) => (
               <div key={i} className="border border-brand-black" />
             ))}
           </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 md:mb-12 leading-none"
          >
            Have a vision? <br />
            <span className="italic">Let's make it tangible.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="inline-block px-10 py-5 md:px-16 md:py-6 bg-brand-black text-brand-white font-bold uppercase tracking-tighter text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;
