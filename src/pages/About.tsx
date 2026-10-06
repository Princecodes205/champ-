import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SectionHeading = ({
  title,
  subtitle,
  center = false,
  className = "",
}: {
  title: React.ReactNode;
  subtitle: string;
  center?: boolean;
  className?: string;
}) => (
  <div className={`mb-12 md:mb-20 ${center ? "text-center" : ""} ${className}`}>
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

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white text-black dark:bg-brand-black dark:text-brand-white min-h-screen overflow-x-hidden transition-colors duration-500 selection:bg-brand-violet selection:text-brand-black">
      <Helmet>
        <title>About Champ | Strategic Branding & Design Studio</title>
        <meta
          name="description"
          content="Learn how Champ combines high-end brand identity with technical precision to help businesses win more clients through strategic design and development."
        />
        <link rel="canonical" href="https://hellochamp.vercel.app/about" />
        <meta
          property="og:title"
          content="About Champ | Strategic Branding & Design Studio"
        />
        <meta
          property="og:description"
          content="Learn how Champ combines high-end brand identity with technical precision to help businesses win more clients through strategic design and development."
        />
        <meta property="og:url" content="https://hellochamp.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hellochamp.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Champ | Strategic Branding & Design Studio"
        />
        <meta
          name="twitter:description"
          content="Learn how Champ combines high-end brand identity with technical precision to help businesses win more clients through strategic design and development."
        />
        <meta
          name="twitter:image"
          content="https://hellochamp.vercel.app/og-image.png"
        />
      </Helmet>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 md:pt-48 md:pb-24 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              The Agency
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 text-black dark:text-brand-white">
              We Build <span className="text-brand-violet italic">Brands</span>{" "}
              <br /> That Win Clients.
            </h1>
            <p className="text-lg md:text-2xl text-black/70 dark:text-brand-white/70 max-w-3xl leading-relaxed font-light">
              champ is a global brand and web studio for businesses serious
              about growth. Most businesses show up inconsistent: a logo here, a
              dated website there, nothing that earns trust or gets remembered.
              We fix that by shaping your whole brand, from{" "}
              <span className="text-brand-violet italic">brand identity</span>{" "}
              and visuals to the website that carries them,{" "}
              <span className="text-brand-violet italic">SEO integrated</span>{" "}
              to make your brand stand out from competitors, into one sharp,
              clear presence that makes the right clients choose you.
              <br /><br />
              Our approach blends the creativity of a high-end design boutique with the technical discipline of a product engineering team. Whether you are a startup looking for your first identity or an established business needing a digital transformation, we ensure your online presence is a high-converting asset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black text-black dark:text-brand-white z-10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-20 text-center"
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              champ Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-black dark:text-brand-white">
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
            <p className="text-xl md:text-2xl leading-relaxed font-light text-center text-black dark:text-brand-white">
              We reject the notion that design is simply "how it looks." To us,
              design is how it works, how it scales, and how it feels. We
              believe the most successful products are those where the visual
              language and the technical architecture are conceived as a single,
              unified entity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-black/10 dark:border-white/10">
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">
                  Precision
                </div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-brand-white/80">
                  Pixel-perfect execution in every frame and every line of code.
                  No compromises on the details.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">
                  Performance
                </div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-brand-white/80">
                  Speed is a feature. We build for the lowest latency and
                  highest impact across all devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BUILD PHILOSOPHY SECTION --- */}
      <section className="relative pt-0 pb-24 md:pt-0 md:pb-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black text-black dark:text-brand-white z-10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="border-t border-black/10 dark:border-white/10 mb-8 md:mb-12" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12 md:mb-20 text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-px h-8 md:h-10 bg-black/10 dark:bg-white/10" />
              <span className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mt-2">
                DESIGN → BUILD
              </span>
            </div>
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              BUILD PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-black dark:text-brand-white">
              A website is not a page. <br /> It is your business, open 24/7.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 mt-12"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-light text-center text-black dark:text-brand-white">
              We reject the notion that development is just making a design
              work. To us, code is what makes a brand dependable: how fast it
              loads, how safely it runs, and how easily it grows. We believe the
              best websites are built clean from the first line, so they stay
              fast, stable, and simple to maintain long after launch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-black/10 dark:border-white/10">
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">
                  SPEED
                </div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-brand-white/80">
                  Clean, structured code that executes efficiently. No fragile
                  shortcuts.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">
                  OWNERSHIP
                </div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-brand-white/80">
                  Built so you can update your own content, and any developer
                  can pick it up later.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-brand-violet font-bold text-xs uppercase tracking-widest">
                  SALES
                </div>
                <p className="text-lg leading-relaxed text-black/80 dark:text-brand-white/80">
                  Your website is your best salesperson. We build it to convert
                  visitors into leads, and leads into clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DUALITY SECTION --- */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Duality"
            title={
              <>
                One Brand, <br /> Two{" "}
                <span className="text-brand-violet">Focused</span> <br />{" "}
                Disciplines.
              </>
            }
            center
          />

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
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20 mx-auto">
                  CS
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-black dark:text-brand-white">
                  Champ Studio
                </h3>
                <p className="text-black/70 dark:text-brand-white/70 text-lg leading-relaxed mb-8 max-sm:text-left">
                  The creative heart of the agency. Specializing in brand
                  strategy, visual identity, social media, and high-fidelity
                  UX/UI design. We build the emotional connection between a
                  brand and its users, ensuring every touchpoint is a reflection
                  of quality.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Brand Architecture",
                    "Visual Identity",
                    "UX/UI Design",
                    "Design Systems",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-black/80 dark:text-brand-white/80"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" />{" "}
                      {item}
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
                <div className="w-14 h-14 bg-brand-violet rounded-2xl mb-8 flex items-center justify-center text-brand-white font-black text-xl shadow-lg shadow-brand-violet/20 mx-auto">
                  CB
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-black dark:text-brand-white">
                  Champ Build
                </h3>
                <p className="text-black/70 dark:text-brand-white/70 text-lg leading-relaxed mb-8 max-sm:text-left">
                  The technical side. Custom web applications with SEO
                  integration, clean infrastructure, mobile apps, and fast,
                  reliable builds. We turn ideas into software that actually
                  holds up as the business grows.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Custom Web Apps",
                    "API Integration",
                    "Scalable Architecture",
                    "Performance Opt.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-black/80 dark:text-brand-white/80"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-violet rounded-full" />{" "}
                      {item}
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
              <div
                key={i}
                className="border border-brand-black dark:border-brand-white"
              />
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
            Ready to evolve <br /> your{" "}
            <span className="italic">digital presence?</span>
          </motion.h2>
          <Link
            to="/contact"
            className="inline-block px-12 py-6 bg-brand-violet text-brand-white font-bold uppercase tracking-widest text-lg hover:scale-105 transition-all duration-300 rounded-full border-1 border-transparent hover:bg-white hover:text-brand-black hover:border-brand-black dark:bg-brand-black dark:text-brand-violet dark:hover:bg-brand-white dark:hover:text-brand-black dark:border-brand-white dark:hover:border-brand-black"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
