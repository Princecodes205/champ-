import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-brand-black dark:text-brand-white flex flex-col items-center justify-center px-6 text-center overflow-hidden transition-colors duration-500 selection:bg-brand-violet selection:text-brand-black">
      <Helmet>
        <title>Page Not Found — champ</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-[20vw] md:text-[15rem] font-black tracking-tighter leading-none text-black/10 dark:text-brand-white/[0.05] absolute -top-32 left-1/2 -translate-x-1/2 pointer-events-none select-none">
          404
        </h1>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-black dark:text-brand-white">
            Lost in the <br />
            <span className="text-brand-violet italic">void.</span>
          </h2>
          <p className="text-lg md:text-2xl text-black/60 dark:text-brand-white/60 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
          <Link
            to="/"
            className="inline-block px-12 py-5 bg-brand-violet text-brand-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-all duration-300 rounded-full shadow-xl shadow-brand-violet/20"
          >
            Return to Base
          </Link>
        </div>
      </motion.div>

      {/* Background elements to match site aesthetic */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="border border-black/10 dark:border-brand-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
