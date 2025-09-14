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
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* Shutter overlay per route change */}
      <motion.div
        key={`${location.pathname}-shutter`}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
        className="fixed inset-0 z-[60] bg-white flex items-center justify-center pointer-events-none"
      >
        <img src={renalFusionLogo} alt="Renal Fusion Blend" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg" />
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