import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import renalFusionLogo from "../assets/renal-fusion-logo-full.png";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1400); // Show logo for 1.4s then animate out
    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <img
            src={renalFusionLogo}
            alt="Renal Fusion Blend"
            className="w-48 h-48 md:w-56 md:h-56 drop-shadow-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};