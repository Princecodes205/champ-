import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ""; // Fallback to empty string if env is not set

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      console.error('Form endpoint is missing. Please check your .env file.');
      setFormState('error');
      return;
    }

    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      setFormState('success');
    } catch (error) {
      console.error('Submission Error:', error);
      setFormState('error');
    }
  };

  return (
    <div className="flex flex-col bg-brand-black text-brand-white min-h-screen overflow-x-hidden selection:bg-brand-violet selection:text-brand-black">
      <Helmet>
        <title>Contact — Let's Build Something</title>
        <meta name="description" content="Get in touch with Champ to engineer your digital vision into reality. Now accepting new projects for strategic design and technical build." />
      </Helmet>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-mono text-xs md:text-sm uppercase tracking-[0.3em] block mb-4">Inquiry</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12">
              Let's Start <br /> <span className="text-brand-violet italic">Something.</span>
            </h1>
            <p className="text-lg md:text-2xl text-brand-white/50 max-w-3xl leading-relaxed font-light">
              Whether you have a fully realized brief or just a spark of an idea, we're here to engineer it into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24">

          {/* --- INFO SIDE --- */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">
                Get in touch with <br /> the <span className="text-brand-violet italic">engineers.</span>
              </h2>
              <div className="space-y-12 mt-16 md:mt-24">
                <div className="group">
                  <span className="text-brand-violet font-mono text-xs uppercase tracking-widest block mb-2">Email Us</span>
                  <a href="mailto:princeoguru205@gmail.com" className="text-xl md:text-3xl font-bold hover:text-brand-violet transition-colors">princeoguru205@gmail.com</a>
                </div>
                <div className="group">
                  <span className="text-brand-violet font-mono text-xs uppercase tracking-widest block mb-2">Location</span>
                  <p className="text-xl md:text-3xl font-bold">Remote / Global</p>
                </div>
                <div className="group">
                  <span className="text-brand-violet font-mono text-xs uppercase tracking-widest block mb-2">Socials</span>
                  <div className="flex gap-6 mt-4">
                    <a href="https://instagram.com/champ" className="text-brand-white/50 hover:text-brand-violet transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
                    <a href="https://twitter.com/champ" className="text-brand-white/50 hover:text-brand-violet transition-colors uppercase text-xs font-bold tracking-widest">Twitter / X</a>
                    <a href="https://linkedin.com/company/champ" className="text-brand-white/50 hover:text-brand-violet transition-colors uppercase text-xs font-bold tracking-widest">LinkedIn</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mt-24 p-8 border border-brand-white/10 bg-brand-white/[0.02] rounded-none"
            >
              <p className="text-brand-white/60 text-sm leading-relaxed">
                Typically responds within 24-48 business hours. For urgent project inquiries, please include "PRIORITY" in your subject line.
              </p>
            </motion.div>
          </div>

          {/* --- FORM SIDE --- */}
          <div className="relative lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 bg-brand-white/[0.03] border border-brand-white/10 rounded-none"
            >
              {formState === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-brand-violet rounded-full flex items-center justify-center mx-auto mb-6 text-brand-black text-2xl font-bold">✓</div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">Message Received.</h3>
                  <p className="text-brand-white/50 mb-8">We'll be in touch shortly to discuss your vision.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-brand-violet font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : formState === 'error' ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-black text-2xl font-bold">!</div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">Submission Failed.</h3>
                  <p className="text-brand-white/50 mb-8">Something went wrong. Please try again later or email us directly.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-brand-violet font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">Full Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full bg-transparent border-b border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-brand-white placeholder:text-brand-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">Email Address</label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full bg-transparent border-b border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-brand-white placeholder:text-brand-white/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">Project Type</label>
                    <select
                      name="project_type"
                      className="w-full bg-brand-black border-b border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-brand-white"
                    >
                      <option value="studio">Champ Studio (Design)</option>
                      <option value="build">Champ Build (Development)</option>
                      <option value="both">The Full Duo (Both)</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-transparent border-b border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-brand-white placeholder:text-brand-white/20 resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                  <button
                    disabled={formState === 'submitting'}
                    className="w-full py-5 bg-brand-violet text-brand-black font-bold uppercase tracking-tighter hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FINAL SECTION --- */}
      <section className="relative py-24 md:py-40 px-4 text-center min-h-140 bg-brand-black">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-brand-violet font-mono text-xs uppercase tracking-[0.3em] block mb-6">Let's Build</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 leading-none">
              Your digital <span className="italic">legacy</span> <br /> starts here.
            </h2>
            <Link to="/" className="inline-block px-12 py-6 border border-brand-white/20 font-bold uppercase tracking-tighter hover:bg-brand-white hover:text-brand-black transition-all">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
