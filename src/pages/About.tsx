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
    <div className="flex flex-col bg-brand-black text-brand-white min-h-screen overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">The Agency</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 md:mb-12">
              Where <span className="text-brand-violet italic">Design</span> <br /> Meets Engineering. 
            </h1>
            <p className="text-lg md:text-2xl text-brand-white/50 max-w-3xl leading-relaxed font-light">
              Champ is not just a creative agency; we are a high-performance engine dedicated to building digital products that redefine industries. We operate at the intersection of aesthetic rigor and technical precision.
            </p>
          </motion.div>
          {/* <div className="hidden lg:block relative h-[500px]">
            <motion.svg
              viewBox="0 0 500 500"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <motion.circle
                cx="200" cy="250" r="150"
                stroke="rgba(138,44,255,0.4)" strokeWidth="2" fill="none"
                animate={{ r: [140, 160, 140] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.circle
                cx="300" cy="250" r="150"
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"
                animate={{ r: [160, 140, 160] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <circle cx="250" cy="250" r="50" fill="rgba(138,44,255,0.2)" stroke="rgba(138,44,255,0.6)" strokeWidth="2" />
              <path d="M250 150 L250 350 M150 250 L350 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </motion.svg>
          </div> */}
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-violet/10 blur-[120px] rounded-full -z-0" />
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <SectionHeading subtitle="Our Philosophy" title="Design is not a layer. It is the foundation." />
            <p className="text-lg md:text-xl text-brand-black/70 leading-relaxed mb-8">
              We reject the notion that design is simply "how it looks." To us, design is how it works, how it scales, and how it feels. We believe the most successful products are those where the visual language and the technical architecture are conceived as a single, unified entity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-brand-black/10 rounded-2xl">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-brand-violet">01. Precision</h4>
                <p className="text-sm text-brand-black/60">Pixel-perfect execution in every frame and every line of code.</p>
              </div>
              <div className="p-6 border border-brand-black/10 rounded-2xl">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-2 text-brand-violet">02. Performance</h4>
                <p className="text-sm text-brand-black/60">Speed is a feature. We build for the lowest latency and highest impact.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-brand-black rounded-3xl overflow-hidden relative p-12 flex items-center justify-center"
            >
              <div className="text-brand-violet font-black text-[15rem] opacity-20 select-none">C</div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-brand-white text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4">Rigorous <br /> Harmony</h3>
                <p className="text-brand-white/60 text-sm md:text-base uppercase tracking-widest font-mono">The Champ Standard</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DUALITY SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The Duality" title="One agency, two specialized powerhouses." center />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20 items-center">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 md:p-12 border border-brand-white/10 bg-brand-white/[0.02] backdrop-blur-sm rounded-3xl"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-xl mb-8 flex items-center justify-center text-brand-black font-bold">CS</div>
                <h3 className="text-3xl font-black tracking-tighter mb-6">Champ Studio</h3>
                <p className="text-brand-white/60 text-lg mb-8 leading-relaxed">
                  The creative heart of the agency. Specializing in brand strategy, visual identity, and high-fidelity UX/UI design. We build the emotional connection between a brand and its users.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Brand Architecture', 'Visual Identity', 'UX/UI Design', 'Design Systems'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-white/80">
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 md:p-12 border border-brand-white/10 bg-brand-white/[0.02] backdrop-blur-sm rounded-3xl"
              >
                <div className="w-12 h-12 bg-brand-violet rounded-xl mb-8 flex items-center justify-center text-brand-black font-bold">CB</div>
                <h3 className="text-3xl font-black tracking-tighter mb-6">Champ Build</h3>
                <p className="text-brand-white/60 text-lg mb-8 leading-relaxed">
                  The technical engine. Specializing in custom web applications, scalable infrastructure, and high-performance engineering. We turn visions into robust, living software.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Custom Web Apps', 'Scalable Architecture', 'Performance Opt.', 'API Engineering'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-white/80">
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <path d="M50 100 Q100 50 150 100 T250 100" stroke="rgba(138,44,255,0.4)" strokeWidth="2" fill="none" />
                <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="150" cy="100" r="30" stroke="rgba(138,44,255,0.6)" strokeWidth="1" fill="none" />
                <motion.path
                  d="M100 100 L150 100"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="relative py-24 md:py-40 px-4 text-center bg-brand-violet text-brand-black overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12">
            Ready to evolve <br /> your <span className="italic">digital presence?</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-6 bg-brand-black text-brand-white font-bold uppercase tracking-tighter text-lg hover:scale-105 transition-transform duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
