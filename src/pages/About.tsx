import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SectionHeading = ({ title, subtitle, center = false, className = '' }: { title: React.ReactNode, subtitle: string, center?: boolean, className?: string }) => (
  <div className={`mb-12 md:mb-20 ${center ? 'text-center' : ''} ${className}`}>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-brand-white"
    >
      {title}
    </motion.h2>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-slate-900 dark:bg-brand-black dark:text-brand-white min-h-screen overflow-x-hidden transition-colors duration-500 selection:bg-brand-violet selection:text-brand-black">
      <Helmet>
        <title>About — Where Design Meets Execution</title>
        <meta name="description" content="champ is a design-led studio building brands and products for growth-focused businesses. See how strategy, design, and development work as one." />
        <link rel="canonical" href="https://champ-jet.vercel.app/about" />
        <meta property="og:title" content="About — Where Design Meets Execution" />
        <meta property="og:description" content="champ is a design-led studio building brands and products for growth-focused businesses. See how strategy, design, and development work as one." />
        <meta property="og:url" content="https://champ-jet.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://champ-jet.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About — Where Design Meets Execution" />
        <meta name="twitter:description" content="champ is a design-led studio building brands and products for growth-focused businesses. See how strategy, design, and development work as one." />
        <meta name="twitter:image" content="https://champ-jet.vercel.app/og-image.png" />
      </Helmet>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 md:pt-48 md:pb-24 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">The Agency</span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 text-slate-900 dark:text-brand-white">
              Where <span className="text-brand-violet italic">Design</span> <br /> Meets Execution.
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 dark:text-brand-white/60 max-w-3xl leading-relaxed font-light">
              champ is a design-led studio for businesses serious about growth. Operated as a focused solo practice, champ pairs sharp creative thinking with clean, reliable development — the kind of result that gets diluted the moment more people get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-slate-50 dark:bg-brand-black text-slate-900 dark:text-brand-black z-10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20 text-center"
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-slate-900 dark:text-brand-black">
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
            <p className="text-xl md:text-2xl leading-relaxed font-light text-center text-slate-900 dark:text-brand-black">
              We reject the notion that design is simply "how it looks." To us, design is how it works, how it scales, and how it feels.
              We believe the most successful products are those where the visual language and the technical architecture are conceived as a single, unified entity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200 dark:border-brand-black/10">
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">Precision</div>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-brand-black">
                  Pixel-perfect execution in every frame and every line of code. No compromises on the details.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">Performance</div>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-brand-black">
                  Speed is a feature. We build for the lowest latency and highest impact across all devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DUALITY SECTION --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The Duality" title={<>One Studio, <br /> Two <span className="text-brand-violet">Focused</span> <br/> Disciplines.</>} center />

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
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20 mx-auto">CS</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900 dark:text-brand-white">Champ Studio</h3>
                <p className="text-slate-600 dark:text-brand-white/60 text-lg leading-relaxed mb-8 max-sm:text-left">
                  The creative heart of the agency. Specializing in brand strategy, visual identity, and high-fidelity UX/UI design.
                  We build the emotional connection between a brand and its users, ensuring every touchpoint is a reflection of quality.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Brand Architecture', 'Visual Identity', 'UX/UI Design', 'Design Systems'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-brand-white/80">
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
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20 mx-auto">CB</div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900 dark:text-brand-white">Champ Build</h3>
                <p className="text-slate-600 dark:text-brand-white/60 text-lg leading-relaxed mb-8 max-sm:text-left">
                  The technical side. Custom web applications, clean infrastructure, and fast, reliable builds.
                  We turn ideas into software that actually holds up as the business grows.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Custom Web Apps', 'Scalable Architecture', 'Performance Opt.', 'API Integration'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-brand-white/80">
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
      <section className="relative py-24 md:py-40 px-6 text-center bg-white text-brand-violet dark:bg-brand-violet dark:text-brand-white overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="grid grid-cols-12 h-full w-full">
             {[...Array(80)].map((_, i) => (
               <div key={i} className="border border-white" />
             ))}
           </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-12"
          >
            Ready to evolve <br /> your <span className="italic">digital presence?</span>
          </motion.h2>
          <Link to="/contact" className="inline-block px-12 py-6 bg-white text-brand-violet font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform duration-300 rounded-full">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
