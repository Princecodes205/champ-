import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SectionHeading = ({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle: string;
  center?: boolean;
}) => (
  <div className={`mb-12 md:mb-20 ${center ? "text-center" : ""}`}>
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
      className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-black dark:text-brand-white"
    >
      {title}
    </motion.h2>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-black dark:bg-brand-black dark:text-brand-white selection:bg-brand-violet selection:text-brand-black overflow-x-hidden transition-colors duration-500">
      <Helmet>
        <title>champ — Creative solutions for real problems</title>
        <meta
          name="description"
          content="champ is a design-led studio building digital products at the intersection of strategy, design, and clean code."
        />
        <link rel="canonical" href="https://champ-jet.vercel.app/" />
        <meta
          property="og:title"
          content="champ — Creative solutions for real problems"
        />
        <meta
          property="og:description"
          content="champ is a design-led studio building digital products at the intersection of strategy, design, and clean code."
        />
        <meta property="og:url" content="https://champ-jet.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://champ-jet.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="champ — Creative solutions for real problems"
        />
        <meta
          name="twitter:description"
          content="champ is a design-led studio building digital products at the intersection of strategy, design, and clean code."
        />
        <meta
          name="twitter:image"
          content="https://champ-jet.vercel.app/og-image.png"
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 border border-brand-violet/30 bg-brand-violet/5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 md:mb-12 text-brand-violet"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
            </span>
            Now accepting new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 text-black dark:text-brand-white"
          >
            <span className="block">Creative</span>
            <span className="block text-brand-violet italic">solutions</span>
            <span className="block">for real problems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-black/60 dark:text-brand-white/60 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light px-4"
          >
            Web design and development studio building fast, sharp sites for{" "}
            <span className="text-black dark:text-brand-white font-medium">
              small
            </span>{" "}
            and{" "}
            <span className="text-black dark:text-brand-white font-medium">
              medium sized
            </span>{" "}
            enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto group relative px-10 py-5 bg-brand-violet text-brand-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-brand-black hover:scale-105 text-center rounded-full shadow-xl shadow-brand-violet/20 text-brand-white"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-brand-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto px-10 py-5 border border-black/10 dark:border-brand-white/20 font-bold uppercase tracking-widest hover:border-brand-violet hover:text-brand-violet transition-all text-center rounded-full text-black dark:text-brand-white"
            >
              Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES HUB --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            subtitle="Capabilities"
            title="A dual-pronged approach to digital growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-10 md:p-16 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] transition-all duration-500 hover:border-brand-violet/30 rounded-3xl shadow-sm dark:shadow-none"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20">
                  CD
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 text-black dark:text-brand-white">
                  Champ Studio
                </h3>
                <p className="text-black/60 dark:text-brand-white/60 text-lg leading-relaxed mb-10 max-w-md">
                  Visual identity, UX/UI, and comprehensive design systems that
                  scale your brand's presence.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 font-bold uppercase text-xs tracking-widest text-brand-violet group-hover:text-black dark:group-hover:text-brand-white transition-colors"
                >
                  Explore Studio{" "}
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative p-10 md:p-16 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] transition-all duration-500 hover:border-brand-violet/30 rounded-3xl shadow-sm dark:shadow-none"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20">
                  DE
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 text-black dark:text-brand-white">
                  Champ Build
                </h3>
                <p className="text-black/60 dark:text-brand-white/60 text-lg leading-relaxed mb-10 max-w-md">
                  Custom web applications and scalable digital infrastructure,
                  built for extreme performance.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 font-bold uppercase text-xs tracking-widest text-brand-violet group-hover:text-black dark:group-hover:text-brand-white transition-colors"
                >
                  Explore Build{" "}
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WORK TEASER --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black text-black dark:text-brand-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            subtitle="Selected Work"
            title="Case studies — coming soon"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 relative h-[400px] md:h-[600px] bg-black dark:bg-brand-black rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent dark:from-brand-black dark:via-brand-black/40 z-10" />
              <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
                <span className="text-brand-violet font-bold text-xs uppercase tracking-widest mb-3 block">
                  Project 01
                </span>
                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                  Design & Dev Placeholder
                </h4>
                <p className="text-white/60 text-base md:text-lg mb-8 max-w-md hidden sm:block">
                  A representative project showcasing the approach to digital
                  excellence.
                </p>
                <span className="text-white font-bold uppercase text-xs tracking-widest border-b-2 border-brand-violet pb-1">
                  Coming soon
                </span>
              </div>
              <div className="absolute inset-0 bg-brand-violet/20 group-hover:bg-brand-violet/40 transition-colors duration-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative h-[400px] md:h-[600px] bg-black dark:bg-brand-black rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent dark:from-brand-black dark:via-brand-black/40 z-10" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
                <span className="text-brand-violet font-bold text-xs uppercase tracking-widest mb-3 block">
                  Project 02
                </span>
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-4">
                  Design & Dev Placeholder
                </h4>
                <span className="text-white font-bold uppercase text-xs tracking-widest border-b-2 border-brand-violet pb-1">
                  Coming soon
                </span>
              </div>
              <div className="absolute inset-0 bg-brand-violet/10 group-hover:bg-brand-violet/30 transition-colors duration-500" />
            </motion.div>
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <Link
              to="/work"
              className="inline-block px-12 py-5 border-2 border-black dark:border-brand-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-brand-white dark:hover:text-brand-black transition-all text-sm rounded-full text-black dark:text-brand-white"
            >
              Explore All Work
            </Link>
          </div>
        </div>
      </section>

      {/* --- VISION TEASER --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: false }}
              className="relative z-10 aspect-square max-w-sm mx-auto bg-black/5 dark:bg-brand-white/5 border border-black/10 dark:border-brand-white/10 p-12 rounded-3xl backdrop-blur-sm"
            >
              <div className="flex flex-col h-full justify-center items-center text-center">
                <div className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-brand-white">
                  The Vision
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-violet/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-violet/20 blur-3xl rounded-full" />
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <SectionHeading
              subtitle="Our Story"
              title="More than an agency. A technical partner."
              center={false}
            />
            <p className="text-lg md:text-xl text-black/60 dark:text-brand-white/60 leading-relaxed mb-10 md:mb-16 px-4 md:px-0">
              We believe the most successful products are those where design
              doesn't just "skin" the technology, but evolves with it. Champ was
              founded to bring this rigorous harmony to the digital landscape.
            </p>
            <div className="px-4 md:px-0">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-bold uppercase text-xs tracking-widest text-brand-violet group"
              >
                Read Our Full Story{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 bg-white text-brand-violet dark:bg-brand-violet dark:text-brand-white overflow-hidden transition-colors duration-500">
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
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter mb-12 leading-[0.9] text-brand-violet dark:text-white"
          >
            Let's Build <br />
            <span className="italic">Together.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-brand-violet text-brand-white dark:bg-white dark:text-brand-violet font-bold uppercase tracking-widest text-lg md:text-xl hover:scale-105 transition-transform duration-300 shadow-2xl rounded-full"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
