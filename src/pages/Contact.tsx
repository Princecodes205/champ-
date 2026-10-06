import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { track } from "@vercel/analytics";
import { analytics } from "../lib/analytics";

const FORM_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) ||
  "https://formspree.io/f/xvkgaowb";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [searchParams] = useSearchParams();
  const selectedPackage = searchParams.get("package");

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!formData.get("name")) newErrors.name = "Full name is required";
    if (!formData.get("email")) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email") as string)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.get("message")) newErrors.message = "Message is required";
    if (!consent) newErrors.consent = "Please tick the box to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      const firstError = Object.keys(errors)[0] || "consent";
      const element = document.getElementsByName(firstError)[0];
      if (element) element.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      console.error("Form endpoint is missing. Please check your .env file.");
      setFormState("error");
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const projectType = formData.get("project_type") as string;
      const budgetRange = formData.get("budget") as string;

      track("Form Submission Success", {
        project_type: projectType,
        budget: budgetRange,
      });
      analytics.trackInquirySubmitted(projectType, budgetRange);

      setFormState("success");
    } catch (error) {
      console.error("Submission Error:", error);
      analytics.trackInquiryError(
        error instanceof Error ? error.message : "Unknown error",
      );
      setFormState("error");
    }
  };

  return (
    <div className="flex flex-col bg-white text-black dark:bg-brand-black dark:text-brand-white min-h-screen overflow-x-hidden transition-colors duration-500 selection:bg-brand-violet selection:text-brand-black">
      <Helmet>
        <title>Contact Champ | Start Your Design & Development Project</title>
        <meta
          name="description"
          content="Ready to scale your business? Contact Champ today for strategic design and technical builds that win more customers."
        />
        <link rel="canonical" href="https://hellochamp.vercel.app/contact" />
        <meta property="og:title" content="Contact Champ | Start Your Design & Development Project" />
        <meta
          property="og:description"
          content="Ready to scale your business? Contact Champ today for strategic design and technical builds that win more customers."
        />
        <meta
          property="og:url"
          content="https://hellochamp.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hellochamp.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Champ | Start Your Design & Development Project"
        />
        <meta
          name="twitter:description"
          content="Ready to scale your business? Contact Champ today for strategic design and technical builds that win more customers."
        />
        <meta
          name="twitter:image"
          content="https://hellochamp.vercel.app/og-image.png"
        />
      </Helmet>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 md:pt-48 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-violet font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
              Inquiry
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 text-black dark:text-brand-white">
              Let's Start <br />{" "}
              <span className="text-brand-violet italic">Something.</span>
            </h1>
            <p className="text-lg md:text-2xl text-black/70 dark:text-brand-white/70 max-w-3xl leading-relaxed font-light">
              Tell us about your business and what you want to achieve. We'll
              reply with a clear plan for a brand and website that brings you
              clients.
            </p>
          </motion.div>
        </div>
      </section>
      {/* --- CONTACT GRID --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-black/[0.02] dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24">
          {/* --- INFO SIDE --- */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-black dark:text-brand-white">
                Get in touch with <br /> the{" "}
                <span className="text-brand-violet italic">team.</span>
              </h2>
              <div className="space-y-16 mt-16 md:mt-24">
                <div className="group">
                  <span className="text-brand-violet font-bold text-xs uppercase tracking-widest block mb-3">
                    Email Us
                  </span>
                  <a
                    href="mailto:princeoguru205@gmail.com"
                    className="text-2xl md:text-4xl font-bold hover:text-brand-violet transition-colors text-black dark:text-brand-white"
                  >
                    princeoguru205@gmail.com
                  </a>
                </div>
                <div className="group">
                  <span className="text-brand-violet font-bold text-xs uppercase tracking-widest block mb-3">
                    Location
                  </span>
                  <p className="text-2xl md:text-4xl font-bold text-black dark:text-brand-white">
                    Remote / Global
                  </p>
                </div>
                <div className="group">
                  <span className="text-brand-violet font-bold text-xs uppercase tracking-widest block mb-3">
                    Socials
                  </span>
                  <div className="flex gap-8 mt-6">
                    <a
                      href="https://www.instagram.com/hellochamp7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 dark:text-brand-white/50 hover:text-brand-violet transition-colors uppercase text-xs font-bold tracking-widest"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://wa.me/Champ_Oguru?text=Hi%20champ%2C%20I%27d%20like%20to%20start%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 dark:text-brand-white/50 hover:text-brand-violet transition-colors uppercase text-xs font-bold tracking-widest"
                    >
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mt-24 p-10 border border-black/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/[0.02] rounded-3xl"
            >
              <p className="text-black/60 dark:text-brand-white/60 text-sm leading-relaxed">
                Typically responds immediately during business hours. For urgent
                project inquiries, please include "PRIORITY" in your subject
                line.
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
              className="p-8 md:p-12 bg-white dark:bg-brand-white/[0.03] border border-black/10 dark:border-brand-white/10 rounded-3xl shadow-sm dark:shadow-none"
            >
              {formState === "success" ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-brand-violet rounded-full flex items-center justify-center mx-auto mb-6 text-brand-white text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4 text-black dark:text-brand-white">
                    Message Received.
                  </h3>
                  <p className="text-black/60 dark:text-brand-white/50 mb-8">
                    We'll be in touch shortly to discuss your vision.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-brand-violet font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : formState === "error" ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-white text-2xl font-bold">
                    !
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4 text-black dark:text-brand-white">
                    Submission Failed.
                  </h3>
                  <p className="text-black/60 dark:text-brand-white/50 mb-8">
                    Something went wrong. Please try again later or email us
                    directly.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-brand-violet font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className="w-full bg-transparent border-b border-black/10 dark:border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-black dark:text-brand-white placeholder:text-black/30 dark:placeholder:text-brand-white/20"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-500 text-[10px] mt-1"
                          aria-live="polite"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className="w-full bg-transparent border-b border-black/10 dark:border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-black dark:text-brand-white placeholder:text-black/30 dark:placeholder:text-brand-white/20"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-500 text-[10px] mt-1"
                          aria-live="polite"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">
                      Project Type
                    </label>
                    <select
                      name="project_type"
                      defaultValue={selectedPackage || "studio"}
                      className="w-full bg-white dark:bg-brand-black border-b border-black/10 dark:border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-black dark:text-brand-white"
                    >
                      <option value="landing-page">Landing Page</option>
                      <option value="business-website">Business Website</option>
                      <option value="custom-build">Custom Build</option>
                      <option value="studio">Champ Studio (Design)</option>
                      <option value="build">Champ Build (Development)</option>
                      <option value="both">The Full Duo (Both)</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-white dark:bg-brand-black border-b border-black/10 dark:border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-black dark:text-brand-white"
                    >
                      <option value="">Select range...</option>
                      <option value="low">Entry Level</option>
                      <option value="mid">Professional / Mid-range</option>
                      <option value="high">Premium / Enterprise</option>
                      <option value="undecided">Undecided</option>
                    </select>
                  </div>
                  <div className="hidden">
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-black/40 dark:text-brand-white/40 font-mono text-[10px] uppercase tracking-widest block">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className="w-full bg-transparent border-b border-black/10 dark:border-brand-white/20 py-3 outline-none focus:border-brand-violet transition-colors text-black dark:text-brand-white placeholder:text-black/30 dark:placeholder:text-brand-white/20 resize-none"
                      placeholder="Tell us about your vision..."
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-500 text-[10px] mt-1"
                        aria-live="polite"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="peer appearance-none w-5 h-5 border border-black/20 dark:border-brand-white/20 rounded bg-transparent checked:bg-brand-violet checked:border-brand-violet transition-all cursor-pointer"
                        />
                        <svg
                          className="absolute w-3.5 h-3.5 text-brand-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-xs leading-tight text-black/70 dark:text-brand-white/70 group-hover:text-black dark:group-hover:text-brand-white transition-colors">
                        I agree to CHAMP using my details to reply to my
                        enquiry, as described in the{" "}
                        <Link
                          to="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-violet hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.consent && (
                      <p
                        className="text-red-500 text-[10px]"
                        aria-live="polite"
                      >
                        {errors.consent}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      disabled={formState === "submitting" || !consent}
                      className="w-full py-5 bg-brand-violet text-brand-white font-bold uppercase tracking-tighter hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 rounded-full shadow-lg shadow-brand-violet/20"
                    >
                      {formState === "submitting"
                        ? "Sending..."
                        : "Send Message"}
                    </button>
                    <p className="text-center text-[10px] uppercase tracking-widest text-black/40 dark:text-brand-white/30">
                      We only use your details to reply to you.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- FINAL SECTION --- */}
      <section className="relative py-24 md:py-40 px-6 text-center bg-black dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="text-brand-violet font-bold text-xs uppercase tracking-[0.2em] block mb-6">
              Let's Build
            </span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 leading-none text-white dark:text-brand-white">
              Your digital <span className="italic">legacy</span> <br /> starts
              here.
            </h2>
            <Link
              to="/"
              className="inline-block px-12 py-6 bg-brand-violet text-brand-white dark:bg-transparent dark:text-brand-white dark:border dark:border-brand-white/20 font-bold uppercase tracking-tighter hover:scale-105 transition-all rounded-full"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
