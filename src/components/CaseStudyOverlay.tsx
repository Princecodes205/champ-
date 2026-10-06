import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import CaseStudyContent from "./CaseStudyContent";
import { createFocusTrap } from "focus-trap";

type OverlayPhase = "EXPANDING" | "INTRO" | "CONTENT";

const CaseStudyOverlay: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<OverlayPhase>("EXPANDING");
  const [focusTrap, setFocusTrap] = useState<any>(null);

  const project = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Setup focus trap for the overlay
    const trap = createFocusTrap('#overlay-title');
    setFocusTrap(trap);

    return () => {
      document.body.style.overflow = "unset";
      trap.deactivate();
    };
  }, []);

  useEffect(() => {
    // Handle Escape key to close overlay
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/work");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    // Transition from EXPANDING -> INTRO -> CONTENT
    const isDirectLink = window.performance.navigation.type === 1 ||
                       (window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming)?.type === 'reload';

    if (isDirectLink) {
      setPhase("CONTENT");
    } else {
      const expansionTimer = setTimeout(() => setPhase("INTRO"), 400);
      return () => clearTimeout(expansionTimer);
    }
  }, [slug]);

  useEffect(() => {
    if (phase === "INTRO") {
      const introTimer = setTimeout(() => setPhase("CONTENT"), 700);
      return () => clearTimeout(introTimer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "CONTENT" && focusTrap) {
      focusTrap.activate();
    }
  }, [phase, focusTrap]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="overlay-title"
      className="fixed inset-0 z-[400] flex items-center justify-center overflow-hidden bg-white dark:bg-brand-black text-black dark:text-brand-white"
    >
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[410] grid grid-cols-[1fr_auto_1fr] items-center px-6 py-6 bg-white dark:bg-brand-black border-b hairline-border">
        <div className="text-xs font-bold uppercase tracking-widest opacity-60 text-left">
          Case Study {caseStudies.findIndex(cs => cs.slug === slug) + 1} / {caseStudies.length}
        </div>
        <div id="overlay-title" className="text-xs font-bold uppercase tracking-widest text-center">
          {project.title}
        </div>
        <div className="text-right">
          <button
            onClick={() => navigate("/work")}
            className="p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-none transition-colors border hairline-border"
            aria-label="Close case study"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Phase 1: Shared Elements (Image & Title) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {phase !== "CONTENT" && (
          <>
            <motion.div
              layoutId={`img-${project.slug}`}
              className="absolute w-full h-full"
              style={{
                zIndex: phase === "INTRO" ? 0 : 50,
                opacity: phase === "INTRO" ? 0 : 1
              }}
            >
              {/* This will be populated by the shared element from Work.tsx */}
            </motion.div>
            <motion.h2
              layoutId={`title-${project.slug}`}
              className="absolute text-6xl font-black tracking-tighter"
              style={{
                zIndex: phase === "INTRO" ? 0 : 50,
                opacity: phase === "INTRO" ? 0 : 1
              }}
            >
              {project.title}
            </motion.h2>
          </>
        )}
      </div>

      {/* Phase 2: Branded Intro */}
      <AnimatePresence>
        {phase === "INTRO" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="absolute inset-0 z-[60] bg-brand-violet flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-black font-black text-4xl uppercase tracking-tighter"
            >
              Champ Studios
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 3: Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: phase === "CONTENT" ? 1 : 0,
          y: phase === "CONTENT" ? 0 : 40
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full h-full overflow-y-auto p-6 md:p-12"
      >
        <CaseStudyContent project={project} />
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyOverlay;
