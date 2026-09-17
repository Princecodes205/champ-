import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionHeading = ({ title, subtitle, center = false }: { title: string, subtitle: string, center?: boolean }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-brand-black text-brand-white min-h-screen overflow-x-hidden selection:bg-brand-violet selection:text-brand-black">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">The Agency</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12">
              Where <span className="text-brand-violet italic">Design</span> <br /> Meets Engineering.
            </h1>
            <p className="text-lg md:text-2xl text-brand-white/50 max-w-3xl leading-relaxed font-light">
              Champ is a high-performance creative engine dedicated to building digital products that redefine industries.
              Operated as a specialized solo studio, Champ blends aesthetic rigor with technical precision to deliver results that larger agencies often dilute.
              {/* TODO: Position as solo operation rather than team - integrated above */}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 bg-brand-white text-brand-black">
        <div className="max-w-4xl mx-auto text-brand-black">
          <SectionHeading subtitle="Our Philosophy" title="Design is not a layer. It is the foundation." center />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 mt-12"
          >
            <p className="text-xl md:text-2xl text-brand-black/80 leading-relaxed font-light text-center">
              We reject the notion that design is simply "how it looks." To us, design is how it works, how it scales, and how it feels.
              We believe the most successful products are those where the visual language and the technical architecture are conceived as a single, unified entity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-brand-black/10">
              <div className="space-y-4">
                <div className="text-brand-violet font-mono text-xs uppercase tracking-widest">Precision</div>
                <p className="text-brand-black/60 leading-relaxed">
                  Pixel-perfect execution in every frame and every line of code. No compromises on the details.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-mono text-xs uppercase tracking-widest">Performance</div>
                <p className="text-brand-black/60 leading-relaxed">
                  Speed is a feature. We build for the lowest latency and highest impact across all devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DUALITY SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The Duality" title="One studio, two specialized powerhouses." center />

          <div className="space-y-24 md:space-y-40 mt-24">
            {/* Block 1: Studio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-none mb-6 flex items-center justify-center text-brand-black font-bold">CS</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Champ Studio</h3>
                <p className="text-brand-white/60 text-lg leading-relaxed mb-8">
                  The creative heart of the agency. Specializing in brand strategy, visual identity, and high-fidelity UX/UI design.
                  We build the emotional connection between a brand and its users, ensuring every touchpoint is a reflection of quality.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Brand Architecture', 'Visual Identity', 'UX/UI Design', 'Design Systems'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-white/80">
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 relative aspect-square max-w-md mx-auto bg-brand-white/[0.02] border border-brand-white/10 p-8 rounded-none"
              >
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-brand-violet/20 border border-brand-violet/30 p-4 flex items-end">
                      <div className="h-1/2 w-full bg-brand-violet/40" />
                    </div>
                    <div className="bg-brand-white/5 border border-brand-white/10 p-4 flex items-start">
                      <div className="h-1/3 w-full bg-brand-white/20" />
                    </div>
                    <div className="bg-brand-white/5 border border-brand-white/10 p-4 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full border-2 border-brand-violet/40" />
                    </div>
                    <div className="bg-brand-violet/10 border border-brand-violet/20 p-4 flex items-end justify-center">
                      <div className="h-2/3 w-1/3 bg-brand-violet/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Block 2: Build */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square max-w-md mx-auto bg-brand-white/[0.02] border border-brand-white/10 p-8 rounded-none"
              >
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full border border-brand-white/10 p-4 font-mono text-[10px] text-brand-white/40 overflow-hidden">
                    <div className="flex gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-brand-violet">const</div> <div>ChampBuild = () =&gt; &#123;</div>
                      <div className="pl-4">return &lt;Infrastructure /&gt;;</div>
                      <div className="pl-4 text-brand-white/20">// Scalable, performant, reliable</div>
                      <div>&#123;</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-right lg:text-left"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-none mb-6 flex items-center justify-center text-brand-black font-bold">CB</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Champ Build</h3>
                <p className="text-brand-white/60 text-lg leading-relaxed mb-8">
                  The technical engine. Specializing in custom web applications, scalable infrastructure, and high-performance engineering.
                  We turn visions into robust, living software that scales effortlessly as your business grows.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Custom Web Apps', 'Scalable Architecture', 'Performance Opt.', 'API Engineering'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-white/80">
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative py-24 md:py-40 px-4 text-center bg-brand-violet text-brand-black overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12"
          >
            Ready to evolve <br /> your <span className="italic">digital presence?</span>
          </motion.h2>
          <Link to="/contact" className="inline-block px-12 py-6 bg-brand-black text-brand-white font-bold uppercase tracking-tighter text-lg hover:scale-105 transition-transform duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
