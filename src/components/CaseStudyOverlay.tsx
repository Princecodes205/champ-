import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import CaseStudyContent from "./CaseStudyContent";

type OverlayPhase = "EXPANDING" | "INTRO" | "CONTENT";

const CaseStudyOverlay: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<OverlayPhase>("EXPANDING");

  const project = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    // Transition from EXPANDING -> INTRO -> CONTENT
    // We'll trigger INTRO after a short delay to allow layout animation to start
    const expansionTimer = setTimeout(() => setPhase("INTRO"), 400);

    return () => clearTimeout(expansionTimer);
  }, [slug]);

  useEffect(() => {
    if (phase === "INTRO") {
      const introTimer = setTimeout(() => setPhase("CONTENT"), 700);
      return () => clearTimeout(introTimer);
    }
  }, [phase]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-black text-brand-white"
    >
      {/* Phase 1: Shared Elements (Image & Title) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          layoutId={`img-${project.slug}`}
          className="absolute w-full h-full"
          style={{
            zIndex: phase === "CONTENT" ? 0 : 50,
            opacity: phase === "INTRO" ? 0 : 1
          }}
        >
          {/* This will be populated by the shared element from Work.tsx */}
        </motion.div>
        <motion.h2
          layoutId={`title-${project.slug}`}
          className="absolute text-6xl font-black tracking-tighter"
          style={{
            zIndex: phase === "CONTENT" ? 0 : 50,
            opacity: phase === "INTRO" ? 0 : 1
          }}
        >
          {project.title}
        </motion.h2>
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
        <button
          onClick={() => navigate("/work")}
          className="fixed top-8 right-8 z-[110] p-4 bg-brand-white/10 hover:bg-brand-white/20 rounded-sm transition-colors backdrop-blur-md"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <CaseStudyContent project={project} />
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyOverlay;
