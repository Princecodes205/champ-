import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-brand-black text-brand-white selection:bg-brand-violet selection:text-brand-black overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:px-6 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-violet/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 border border-brand-white/10 bg-brand-white/5 backdrop-blur-md rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase mb-8 md:mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
            Digital Excellence Redefined
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 md:mb-12"
          >
            <span className="block">Crafting</span>
            <span className="block text-brand-violet italic">Digital</span>
            <span className="block">Legacies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-brand-white/50 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-light px-4"
          >
            Champ is a high-performance creative agency specializing in the intersection of <span className="text-brand-white">strategic design</span> and <span className="text-brand-white">technical engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
          >
            <Link to="/contact" className="w-full sm:w-auto group relative px-8 py-4 md:px-10 md:py-5 bg-brand-violet text-brand-black font-bold uppercase tracking-tighter overflow-hidden transition-all hover:scale-105 text-center">
              <span className="relative z-10">Begin the Journey</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link to="/work" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border border-brand-white/20 font-bold uppercase tracking-tighter hover:border-brand-violet hover:text-brand-violet transition-all text-center">
              Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES HUB: FULL SCREEN --- */}
      <section className="relative min-h-screen flex items-center px-4 py-16 md:px-6 md:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            subtitle="Capabilities"
            title="A dual-pronged approach to digital growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 border border-brand-white/10 bg-brand-white/[0.02] backdrop-blur-sm overflow-hidden rounded-2xl"
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 text-brand-violet/10 font-black text-6xl md:text-9xl select-none pointer-events-none group-hover:text-brand-violet/20 transition-colors">
                S
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-violet rounded-xl mb-6 md:mb-8 flex items-center justify-center text-brand-black font-bold">
                  CD
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Champ Studio</h3>
                <p className="text-brand-white/60 text-base md:text-lg mb-8 max-w-md">
                  Visual identity, UX/UI, and comprehensive design systems that transform businesses into industry leaders.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 font-bold uppercase text-[10px] md:text-xs tracking-widest text-brand-violet group-hover:text-brand-white transition-colors">
                  Explore Studio <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 border border-brand-white/10 bg-brand-white/[0.02] backdrop-blur-sm overflow-hidden rounded-2xl"
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 text-brand-violet/10 font-black text-6xl md:text-9xl select-none pointer-events-none group-hover:text-brand-violet/20 transition-colors">
                B
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-violet rounded-xl mb-6 md:mb-8 flex items-center justify-center text-brand-black font-bold">
                  DE
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Champ Build</h3>
                <p className="text-brand-white/60 text-base md:text-lg mb-8 max-w-md">
                  Custom web applications and scalable digital infrastructure engineered for performance and reliability.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 font-bold uppercase text-[10px] md:text-xs tracking-widest text-brand-violet group-hover:text-brand-white transition-colors">
                  Explore Build <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WORK TEASER: FULL SCREEN --- */}
      <section className="relative min-h-screen flex items-center px-4 py-16 md:px-6 md:py-32 bg-brand-white text-brand-black">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            subtitle="Selected Work"
            title="Proof of execution."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 relative h-[350px] md:h-[500px] bg-brand-black rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20">
                <span className="text-brand-violet font-mono text-[10px] md:text-xs uppercase mb-2 block">Case Study — 01</span>
                <h4 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">Enterprise SaaS Rebrand</h4>
                <p className="text-white/60 text-sm md:text-base mb-4 md:mb-6 max-w-md hidden sm:block">A complete overhaul of visual identity and user experience for a global logistics provider.</p>
                <Link to="/work" className="text-white font-bold uppercase text-xs tracking-widest border-b-2 border-brand-violet pb-1">View Details</Link>
              </div>
              <div className="absolute inset-0 bg-brand-violet/20 group-hover:bg-brand-violet/40 transition-colors" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative h-[350px] md:h-[500px] bg-brand-black rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
                <span className="text-brand-violet font-mono text-[10px] md:text-xs uppercase mb-2 block">Case Study — 02</span>
                <h4 className="text-xl md:text-2xl font-black text-white tracking-tighter mb-2">Fintech App</h4>
                <Link to="/work" className="text-white font-bold uppercase text-xs tracking-widest border-b-2 border-brand-violet pb-1">View Details</Link>
              </div>
              <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/30 transition-colors" />
            </motion.div>
          </div>

          <div className="mt-12 md:mt-20 text-center">
            <Link to="/work" className="inline-block px-8 py-4 md:px-12 md:py-5 border-2 border-brand-black font-bold uppercase tracking-tighter hover:bg-brand-black hover:text-brand-white transition-all text-sm md:text-base">
              Explore All Work
            </Link>
          </div>
        </div>
      </section>

      {/* --- VISION TEASER: FULL SCREEN --- */}
      <section className="relative min-h-screen flex items-center px-4 py-16 md:px-6 md:py-32 bg-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-square max-w-sm mx-auto bg-brand-white/5 border border-brand-white/10 p-12 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex flex-col h-full justify-center items-center text-center">
                <div className="text-brand-violet font-black text-8xl mb-4 opacity-20">C</div>
                <div className="text-xl md:text-2xl font-bold tracking-tight">The Vision</div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-violet/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-violet/20 blur-3xl rounded-full" />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <SectionHeading subtitle="Our Story" title="More than an agency. A technical partner." center={false} />
            <p className="text-lg md:text-xl text-brand-white/60 leading-relaxed mb-8 md:mb-12 px-4 md:px-0">
              We believe the most successful products are those where design doesn't just "skin" the technology, but evolves with it. Champ was founded to bring this rigorous harmony to the digital landscape.
            </p>
            <div className="px-4 md:px-0">
              <Link to="/about" className="inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest text-brand-violet group">
                Read Our Full Story <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
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
            Let's Build <br />
            <span className="italic">Together.</span>
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

export default Home;
