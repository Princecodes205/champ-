import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative aspect-[4/5] bg-brand-white/5 border border-brand-white/10 overflow-hidden rounded-none cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
    <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/20 transition-colors" />
    <div className="absolute top-4 right-4 z-30">
      <span className="bg-brand-violet text-brand-black text-[10px] font-bold uppercase px-2 py-1">Placeholder</span>
    </div>

    <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
      <span className="text-brand-violet font-mono text-[10px] md:text-xs uppercase mb-2 block">{project.category}</span>
      <h3 className="text-2xl md:text-4xl font-black text-brand-white tracking-tighter mb-4">{project.title}</h3>
      <div className="flex items-center gap-2 text-brand-white/50 font-medium text-xs md:text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-300">
        Coming soon <span className="text-brand-violet">→</span>
      </div>
    </div>
  </motion.div>
);

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
    <div className="flex flex-col bg-brand-black text-brand-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20"
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">Portfolio</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none">
              Selected <br /> <span className="text-brand-violet italic">Works.</span>
            </h1>
          </motion.div>

          <div className="hidden lg:block relative w-full h-[400px]">
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewBox="0 0 500 500"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(138, 44, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(138, 44, 255, 0)" />
                </linearGradient>
              </defs>
              <rect x="50" y="50" width="300" height="300" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />
              <rect x="150" y="150" width="300" height="300" stroke="rgba(138,44,255,0.4)" fill="url(#grad1)" strokeWidth="2" />
              <circle cx="250" cy="250" r="100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10 10" />
              <motion.line
                animate={{ x1: [100, 400], x2: [400, 100] }}
                transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
                x1="100" y1="100" x2="400" y2="400" stroke="rgba(138,44,255,0.6)" strokeWidth="2"
              />
            </motion.svg>
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="px-4 py-12 md:px-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-brand-white text-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">Our Approach</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                Engineering <br /> <span className="italic text-brand-violet">with Intent.</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-brand-black/70 leading-relaxed"
              >
                <p className="mb-6">
                  We don't believe in "standard" workflows. Every project is a unique technical challenge that requires a bespoke strategy. Our process is a rigorous loop of discovery and execution, where design and code evolve in tandem.
                </p>
                <p>
                  By merging the creativity of a studio with the precision of an engineering firm, we ensure that the final product isn't just visually stunning—it's architecturally sound and built to scale.
                </p>
              </motion.div>
              <div className="hidden md:block">
                <motion.svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="100" cy="100" r="80" stroke="rgba(138,44,255,0.2)" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                  <circle cx="100" cy="100" r="50" stroke="rgba(138,44,255,0.5)" strokeWidth="4" fill="none" />
                  <circle cx="100" cy="20" r="8" fill="rgba(138,44,255,1)" />
                  <path d="M100 100 L100 20" stroke="rgba(138,44,255,0.4)" strokeWidth="2" />
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">The Workflow</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Steps of Operation.</h2>
              <p className="text-brand-white/60 text-lg leading-relaxed mb-12">
                A systematic approach to digital excellence, ensuring every detail is vetted and every line of code is purposeful.
              </p>
              <div className="hidden lg:block">
                <svg viewBox="0 0 200 400" className="w-full max-w-[200px]">
                  <path d="M100 50 L100 350" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  {[50, 130, 210, 290].map((y, i) => (
                    <motion.circle
                      key={i}
                      cx="100" cy={y} r="6" fill="rgba(138,44,255,1)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="relative py-24 md:py-40 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-violet/10 blur-[100px] rounded-full scale-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-12"
          >
            Have a vision? <br /> Let's make it <span className="text-brand-violet italic">tangible.</span>
          </motion.h2>
          <Link to="/contact" className="inline-block px-10 py-5 bg-brand-violet text-brand-black font-bold uppercase tracking-tighter hover:scale-105 transition-transform duration-300">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
