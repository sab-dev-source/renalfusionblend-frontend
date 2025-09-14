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
    }, 700); // match duration below
    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center"
        >
          <img
            src={renalFusionLogo}
            alt="Renal Fusion Blend"
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};