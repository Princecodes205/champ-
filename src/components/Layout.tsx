import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Works", path: "/work" },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-inter flex flex-col">
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${
          scrolled
            ? "bg-brand-black/80 border-b border-brand-violet/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="relative z-[110] group flex items-center gap-3"
          >
            <motion.img
              src="/logo-white.png"
              alt="Champ Logo"
              className="w-20 h-20 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none ${
                  location.pathname === link.path
                    ? "text-brand-violet bg-brand-violet/10"
                    : "text-brand-white/70 hover:text-brand-white hover:bg-brand-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mx-4 w-px h-4 bg-brand-white/10" />
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-brand-violet text-brand-black text-xs font-bold uppercase tracking-widest rounded-none hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(85,0,255,0.3)]"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden relative z-[110] p-2 text-brand-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-brand-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-brand-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-brand-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-black/95 z-[100] flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center gap-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.path}
                  >
                    <Link
                      to={link.path}
                      className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-brand-violet transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-brand-violet border-2 border-brand-violet px-8 py-3 rounded-none hover:bg-brand-violet hover:text-brand-black transition-all"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      <footer className="border-t border-brand-violet/30 px-4 md:px-8 py-12 text-xs text-brand-white/40 uppercase  tracking-widest flex flex-col md:flex-row justify-between items-center gap-8 bg-brand-black">
        <div className="text-center md:text-left">
          <div className="text-brand-white font-bold mb-2">Champ Agency</div>
          <div>
            © {new Date().getFullYear()} Creative solutions for real problems.
            <p className="normal-case pt-2">
              Socials still under review, will be updated soon
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-violet transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-brand-violet transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-brand-violet transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
