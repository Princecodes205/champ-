import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen font-inter flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-brand-black text-brand-white' : 'bg-white text-slate-900'}`}>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled
            ? (theme === 'dark' ? "bg-brand-black/90 dark:bg-brand-black/90 backdrop-blur-md border-b border-brand-violet/10 py-3" : "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3")
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="relative z-[110] group flex items-center"
          >
            <motion.img
              src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
              alt="Champ Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-brand-violet/10 text-brand-violet hover:bg-brand-violet hover:text-white transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-brand-violet"
                    : (theme === 'dark' ? "text-brand-white/60 hover:text-brand-white" : "text-slate-500 hover:text-slate-900")
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-violet text-brand-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-black transition-all duration-300 shadow-lg shadow-brand-violet/20"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-brand-violet/10 text-brand-violet"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              className={`relative z-[110] p-2 ${theme === 'dark' ? 'text-brand-white' : 'text-slate-900'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed inset-0 z-[100] flex flex-col justify-center items-center transition-colors duration-500 ${theme === 'dark' ? 'bg-brand-black' : 'bg-white'}`}
            >
              <div className="flex flex-col items-center gap-10 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.path}
                  >
                    <Link
                      to={link.path}
                      className={`text-5xl font-black uppercase tracking-tighter hover:text-brand-violet transition-colors ${theme === 'dark' ? 'text-brand-white' : 'text-slate-900'}`}
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
                  className="mt-6"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuPOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-brand-white bg-brand-violet px-10 py-4 rounded-full hover:bg-white hover:text-brand-black transition-all"
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

      <footer className={`border-t border-brand-violet/10 px-6 md:px-12 py-16 transition-colors duration-500 ${theme === 'dark' ? 'bg-brand-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <img
              src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
              alt="Champ Logo"
              className="w-16 h-16 object-contain"
            />
            <p className={`text-sm leading-relaxed max-w-xs ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
              Creative solutions for real problems. Crafting high-impact digital experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className={`font-bold uppercase tracking-widest text-xs mb-2 ${theme === 'dark' ? 'text-brand-white' : 'text-slate-900'}`}>Quick Links</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path} className={`text-sm transition-colors hover:text-brand-violet ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className={`text-sm transition-colors hover:text-brand-violet ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className={`font-bold uppercase tracking-widest text-xs mb-2 ${theme === 'dark' ? 'text-brand-white' : 'text-slate-900'}`}>Connect</h4>
            <div className="flex gap-6">
              <a href="#" className={`transition-colors hover:text-brand-violet ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
                Twitter
              </a>
              <a href="#" className={`transition-colors hover:text-brand-violet ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
                LinkedIn
              </a>
              <a href="#" className={`transition-colors hover:text-brand-violet ${theme === 'dark' ? 'text-brand-white/50' : 'text-slate-500'}`}>
                GitHub
              </a>
            </div>
            <div className={`text-[10px] uppercase tracking-widest pt-6 border-t border-brand-white/5 ${theme === 'dark' ? 'text-brand-white/30' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} Champ Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
