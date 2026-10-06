import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";
import ServicesSection from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { FAQSection } from "../components/FAQSection";
import { analytics } from "../lib/analytics";

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
      className={`font-black tracking-tighter leading-[1.1] text-black dark:text-brand-white ${
        subtitle === "// WHY CHAMP"
          ? "text-2xl sm:text-2xl md:text-2xl"
          : "text-4xl sm:text-5xl md:text-7xl"
      }`}
    >
      {title}
    </motion.h2>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-black dark:bg-brand-black dark:text-brand-white selection:bg-brand-violet selection:text-brand-black overflow-x-hidden transition-colors duration-500">
      <Helmet>
        <title>Creative Design & Web Development Studio | Champ</title>
        <meta
          name="description"
          content="Champ is a design-led studio building high-performance digital products. We specialize in strategic branding and SEO-optimized web development for growth-focused businesses."
        />
        <link rel="canonical" href="https://hellochamp.vercel.app/" />
        <meta
          property="og:title"
          content="Creative Design & Web Development Studio | Champ"
        />
        <meta
          property="og:description"
          content="Champ is a design-led studio building high-performance digital products. We specialize in strategic branding and SEO-optimized web development for growth-focused businesses."
        />
        <meta property="og:url" content="https://hellochamp.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hellochamp.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Creative Design & Web Development Studio | Champ"
        />
        <meta
          name="twitter:description"
          content="Champ is a design-led studio building high-performance digital products. We specialize in strategic branding and SEO-optimized web development for growth-focused businesses."
        />
        <meta
          name="twitter:image"
          content="https://hellochamp.vercel.app/og-image.png"
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
            <span className="block text-brand-violet italic">
              Design Studio
            </span>
            <span className="block">for real problems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-black/70 dark:text-brand-white/70 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light px-4"
          >
            We help{" "}
            <span className="text-black dark:text-brand-white font-medium">
              small
            </span>{" "}
            and{" "}
            <span className="text-black dark:text-brand-white font-medium">
              medium-sized businesses{" "}
            </span>{" "}
            win more customers with fast,{" "}
            <span className="text-brand-violet">SEO optimized</span> websites,
            web platforms and brand identities built to perform from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
          >
            <Link
              to="/contact"
              onClick={() => analytics.trackCtaClick("hero")}
              className="w-full sm:w-auto group relative px-10 py-5 bg-brand-violet text-brand-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-brand-black hover:scale-105 text-center rounded-full shadow-xl shadow-brand-violet/20"
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
      <ServicesSection />

      {/* --- WORK TEASER --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black text-black dark:text-brand-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeading
            subtitle="Selected Work"
            title="Case studies"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <OptimizedImage
                src="/awk-group-cover-16x10.png"
                alt="AwkGroup corporate website redesign showcasing strategic brand identity and clean code execution"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                aspectRatio="16/10"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent dark:from-brand-black dark:via-brand-black/80 z-10" />
              <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
                <span className="text-brand-violet font-bold text-xs uppercase tracking-widest mb-3 block">
                  Project 01
                </span>
                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                  AwkGroup Website Redesign
                </h4>
                <p className="text-white/70 text-base md:text-lg mb-8 max-w-md hidden sm:block">
                  A representative project showcasing the approach to digital
                  excellence.
                </p>
                <span className="text-white font-bold uppercase text-xs tracking-widest border-b-2 border-brand-violet pb-1">
                  Completed project
                </span>
              </div>
              <div className="absolute inset-0 bg-brand-violet/20 group-hover:bg-brand-violet/40 transition-colors duration-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <OptimizedImage
                src="/coming-soon-poster-square.png"
                alt="Upcoming design and development project for a growth-focused business"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                aspectRatio="1/1"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent dark:from-brand-black dark:via-brand-black/40 z-10" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
                <span className="text-brand-violet font-bold text-xs uppercase tracking-widest mb-3 block">
                  Project 02
                </span>
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-4">
                  G-Tech Project
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
      <ProcessSection />

      {/* --- VISION TEASER --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative order-2 md:order-1 flex items-start">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: false }}
              className="relative z-10 w-full max-w-sm bg-white dark:bg-brand-white/[0.02] border border-black/10 dark:border-brand-white/10 p-4 md:p-6 rounded-sm backdrop-blur-sm"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                color: "rgba(150, 150, 150, 0.15)",
              }}
            >
              <div className="flex flex-col items-start text-left">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-violet mb-6 opacity-70">
                  // PRINCIPLES
                </span>
                <div className="flex flex-col w-full">
                  {[
                    {
                      id: "01",
                      head: "Clarity",
                      text: "Design and digital experiences should communicate value instantly.",
                    },
                    {
                      id: "02",
                      head: "Honesty",
                      text: "Clear scope, clear timelines, and straight advice on what will and won't work, before we build anything.",
                    },
                    {
                      id: "03",
                      head: "Creativity",
                      text: "Original design shaped around your brand. Never a recycled template.",
                    },
                  ].map((item, i, arr) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className={`grid grid-cols-[auto_1fr] gap-4 py-4 ${
                        i !== arr.length - 1
                          ? "border-b border-black/10 dark:border-brand-white/10"
                          : ""
                      }`}
                    >
                      <span className="text-brand-violet font-mono text-xs font-black tabular-nums">
                        {item.id}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-bold text-black dark:text-brand-white text-sm md:text-base mb-1">
                          {item.head}
                        </span>
                        <span className="text-black/70 dark:text-brand-white/70 text-xs md:text-sm leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <SectionHeading
              subtitle="// WHY CHAMP"
              title="Your website is your first impression. We design it to win clients."
              center={false}
            />
            <p className="text-lg md:text-xl text-black/70 dark:text-brand-white/70 leading-relaxed mb-10 md:mb-16 px-4 md:px-0">
              People judge your business in seconds. If your site is slow,
              outdated, or confusing, you're leaving money on the table. Champ
              combines high-end design with technical precision to ensure your
              first impression is unforgettable and your site is built to
              convert.
            </p>
            <div className="flex flex-col gap-6 mb-10 md:mb-16 px-4 md:px-0">
              {[
                {
                  label: "Fast",
                  text: "SEO integrated and Optimized to load quickly, even on weak connections.",
                },
                {
                  label: "Easy",
                  text: "Update your own content without calling a developer.",
                },
                {
                  label: "Yours",
                  text: "Clean handover, with support after launch.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex gap-4 border-t border-black/10 dark:border-brand-white/10 pt-4"
                >
                  <span className="text-brand-violet font-mono text-xs tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-bold text-black dark:text-brand-white text-sm md:text-base mr-2">
                      {item.label}.
                    </span>
                    <span className="text-black/70 dark:text-brand-white/70 text-sm md:text-base">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-4 md:px-0">
              <Link
                to="/contact"
                onClick={() => analytics.trackCtaClick("vision")}
                className="inline-block px-10 py-5 bg-brand-violet text-brand-white dark:bg-brand-black dark:text-brand-white font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-transform duration-300 shadow-xl shadow-brand-violet/20 rounded-full"
              >
                Start your project →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />

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
            animate={{ opacity: 1, y: 0 }}
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
