import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Terms: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const sections = [
    {
      id: "about",
      title: "About these terms",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          By using this website, you agree to these Terms of Use. This site is operated by CHAMP, a web design and development studio based in Nigeria. If you have any questions regarding these terms, please reach out to us via email at <a href="mailto:princeoguru205@gmail.com" className="text-brand-violet hover:underline">princeoguru205@gmail.com</a>.
        </p>
      ),
    },
    {
      id: "nature",
      title: "What this site is",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          This website serves as a portfolio and informational resource. Nothing contained on this site constitutes a binding offer. All services, pricing, and timelines are illustrative and are formally agreed upon in a written proposal or client agreement, which shall take priority over any information presented on this site.
        </p>
      ),
    },
    {
      id: "ip",
      title: "Intellectual property",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          The design, code, text, and CHAMP branding featured on this site are the exclusive property of CHAMP. Client work showcased in our case studies belongs to the respective clients and is displayed here with their explicit permission. You may not copy, reuse, or distribute any content from this site without prior written permission.
        </p>
      ),
    },
    {
      id: "usage",
      title: "Acceptable use",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          You agree not to misuse this website, attempt to breach or probe its security, scrape content at a rate that disrupts service, or submit false or abusive messages through our contact forms.
        </p>
      ),
    },
    {
      id: "enquiries",
      title: "Contact form and enquiries",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          Submitting a message through our contact form does not establish a client relationship or a commitment to perform work. Details regarding how your personal information is handled can be found in our <Link to="/privacy" className="text-brand-violet hover:underline">Privacy Policy</Link>.
        </p>
      ),
    },
    {
      id: "external",
      title: "External links",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          Our site contains links to external websites, including client portfolios and WhatsApp. CHAMP is not responsible for the content, privacy practices, or reliability of these third-party services.
        </p>
      ),
    },
    {
      id: "liability",
      title: "No warranty and limited liability",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          This website is provided "as is" for general information. To the maximum extent permitted by applicable law, CHAMP is not liable for any losses or damages arising from the use of this site or reliance on its content.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Availability and changes",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          We reserve the right to modify this site or make it unavailable at any time. These terms may be updated periodically; changes will be posted here with a revised "Last updated" date. Your continued use of the site constitutes acceptance of the current terms.
        </p>
      ),
    },
    {
      id: "law",
      title: "Governing law",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <p className="text-black/70 dark:text-brand-white/70 leading-relaxed">
          If you have any questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:princeoguru205@gmail.com" className="text-brand-violet hover:underline">princeoguru205@gmail.com</a>.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-brand-black dark:text-brand-white transition-colors duration-500">
      <Helmet>
        <title>Terms of Use — CHAMP</title>
        <meta
          name="description"
          content="The terms and conditions governing the use of the CHAMP website."
        />
        <link rel="canonical" href="https://champ-jet.vercel.app/terms" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none"
          >
            Terms of <span className="text-brand-violet italic">Use.</span>
          </motion.h1>
          <p className="text-sm text-black/60 dark:text-brand-white/60 uppercase tracking-widest">
            Last updated: {today}
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-black tracking-tighter mb-4">
                {index + 1}. {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-black/10 dark:border-brand-white/10">
          <p className="text-sm text-black/60 dark:text-brand-white/60">
            See also: <Link to="/privacy" className="text-brand-violet hover:underline">Privacy Policy</Link>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Terms;
