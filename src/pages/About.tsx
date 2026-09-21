import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionHeading = ({ title, subtitle, center = false, className = '' }: { title: React.ReactNode, subtitle: string, center?: boolean, className?: string }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
    <motion.span
      initial={false}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
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
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden min-h-screen max-sm:mt-28 lg:mt-0">
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
              Operated as a <span className="text-brand-violet">specialized</span> solo studio, Champ blends aesthetic rigor with technical precision to deliver results that larger agencies often dilute.
              {/* TODO: Position as solo operation rather than team - integrated above */}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 bg-brand-white text-brand-black z-10">
        <div className="max-w-4xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 text-center"
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight text-brand-black">
              Design is not a layer. It is the foundation.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 mt-12"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-center text-brand-black">
              We reject the notion that design is simply "how it looks." To us, design is how it works, how it scales, and how it feels.
              We believe the most successful products are those where the visual language and the technical architecture are conceived as a single, unified entity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-brand-black/10">
              <div className="space-y-4">
                <div className="text-brand-violet font-mono text-xs uppercase tracking-widest">Precision</div>
                <p className="text-lg leading-relaxed text-brand-black">
                  Pixel-perfect execution in every frame and every line of code. No compromises on the details.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-mono text-xs uppercase tracking-widest">Performance</div>
                <p className="text-lg leading-relaxed text-brand-black">
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
          <SectionHeading subtitle="The Duality" title={<>One Studio, <br /> two <span className="text-brand-violet">Specialized</span> <br/> Powerhouses.</>} center />
          
          <div className="space-y-24 md:space-y-40 mt-24">
            {/* Block 1: Studio */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-none mb-6 flex items-center justify-center text-brand-black font-bold mx-auto">CS</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Champ Studio</h3>
                <p className="text-brand-white/60 text-lg leading-relaxed mb-8 max-sm:text-left">
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
            </div>

            {/* Block 2: Build */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-none mb-6 flex items-center justify-center text-brand-black font-bold mx-auto">CB</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Champ Build</h3>
                <p className="text-brand-white/60 text-lg leading-relaxed mb-8 max-sm:text-left">
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-12 h-full w-full">
             {[...Array(80)].map((_, i) => (
               <div key={i} className="border border-brand-black" />
             ))}
           </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 max-sm:h-100 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
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
