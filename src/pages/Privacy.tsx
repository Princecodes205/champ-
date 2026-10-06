import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-black dark:bg-brand-black dark:text-brand-white transition-colors duration-500">
      <Helmet>
        <title>Privacy Policy — CHAMP</title>
        <meta
          name="description"
          content="Our commitment to your privacy. Learn how CHAMP handles data and ensures your information is secure."
        />
        <link rel="canonical" href="https://champ-jet.vercel.app/privacy" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none"
          >
            Privacy <span className="text-brand-violet italic">Policy.</span>
          </motion.h1>
          <p className="text-sm text-black/60 dark:text-brand-white/60 uppercase tracking-widest">
            Last updated: {today}
          </p>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Who we are</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              CHAMP is a design-led studio based in Nigeria, specializing in web design and technical development for growth-focused businesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">What we collect</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed mb-4">
              We only collect information that you voluntarily provide to us through our contact form. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black/70 dark:text-brand-white/70 leading-relaxed">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>WhatsApp Number</li>
              <li>Project Type and Budget Range</li>
              <li>Timeline and Project Message</li>
            </ul>
            <p className="mt-4 text-black/70 dark:text-brand-white/70 leading-relaxed">
              Additionally, like most websites, our hosting provider (Vercel) may collect basic server logs (such as IP addresses and browser types) to ensure site stability and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Why and how we use it</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              The data we collect is used exclusively to respond to your enquiries and scope potential projects. We do not sell, rent, or share your personal information with third parties for advertising or marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Who processes your data</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              Your data is processed via Formspree (our form handling service) and hosted on Vercel. Both services maintain their own security standards to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Cookies and Storage</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              We do not use advertising or cross-site tracking cookies. The only data we store in your browser is a single key in `localStorage` to remember your preferred theme (light or dark).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Third Parties</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed mb-4">
              We use self-hosted versions of open-source fonts to ensure a consistent typographic experience without sending requests to third-party font servers.
            </p>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              Our site contains links to WhatsApp. When you click these links, you are redirected to WhatsApp, which operates under its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Retention</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              We keep your enquiry data for up to 12 months to maintain a record of our communications, unless a formal project begins, in which case the data is kept for the duration of the business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Your Rights</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              You have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please email us at <a href="mailto:princeoguru205@gmail.com" className="text-brand-violet hover:underline">princeoguru205@gmail.com</a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Children</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              Our services are not directed at children under the age of 13, and we do not knowingly collect data from them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-tighter mb-4">Changes to this policy</h2>
            <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
              We may update this policy occasionally. Any changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>
        </div>
        <footer className="mt-24 pt-12 border-t border-black/10 dark:border-brand-white/10">
          <p className="text-sm text-black/60 dark:text-brand-white/60">
            See also: <Link to="/terms" className="text-brand-violet hover:underline">Terms of Use</Link>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Privacy;
