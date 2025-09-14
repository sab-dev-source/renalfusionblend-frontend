import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import renalFusionLogo from "../assets/renal-fusion-logo-full.png";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 16, scale: 0.99 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const }
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* Shutter overlay per route change */}
      <motion.div
        key={`${location.pathname}-shutter`}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const }}
        className="fixed inset-0 z-[60] bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center pointer-events-none"
      >
        <img src={renalFusionLogo} alt="Renal Fusion Blend" className="w-20 h-20 md:w-24 md:h-24 drop-shadow" />
      </motion.div>

      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};