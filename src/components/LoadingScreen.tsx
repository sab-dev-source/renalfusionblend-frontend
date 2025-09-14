import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import renalFusionLogo from "../assets/renal-fusion-logo-full.png";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLogo(true);
      // Auto complete after animation duration
      const timer = setTimeout(() => {
        setShowLogo(false);
        setTimeout(() => {
          onComplete?.();
        }, 600); // Wait for shutter animation to complete
      }, 1200); // Show logo for 1.2 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          animate={showLogo ? { y: 0 } : { y: "-100vh" }}
          exit={{ y: "-100vh" }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1],
            delay: showLogo ? 0 : 0
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary/95 via-primary to-primary-dark flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1
            }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Logo Image */}
            <div className="relative">
              <motion.img
                src={renalFusionLogo}
                alt="Renal Fusion Blend"
                className="w-32 h-32 md:w-40 md:h-40"
                initial={{ rotateY: -30 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Loading Indicator */}
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-white/80 rounded-full"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};