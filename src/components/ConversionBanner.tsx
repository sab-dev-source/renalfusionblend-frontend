import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Clock, Gift, Zap, Users, Star } from 'lucide-react';

const conversionMessages = [
  {
    icon: TrendingUp,
    text: "127 products sold in the last hour",
    subtext: "Join thousands of satisfied customers",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    iconColor: "text-green-100"
  },
  {
    icon: Clock,
    text: "Flash Sale ends in 23h 47m",
    subtext: "Save up to 40% on selected items",
    bgColor: "bg-gradient-to-r from-red-500 to-pink-600",
    iconColor: "text-red-100"
  },
  {
    icon: Gift,
    text: "Buy 2 Get 1 FREE on all proteins",
    subtext: "Limited time offer - Today only",
    bgColor: "bg-gradient-to-r from-purple-500 to-indigo-600",
    iconColor: "text-purple-100"
  },
  {
    icon: Users,
    text: "5,847 customers trust us daily",
    subtext: "Premium quality guaranteed",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    iconColor: "text-blue-100"
  },
  {
    icon: Zap,
    text: "Free shipping on orders $75+",
    subtext: "Fast delivery within 2-3 days",
    bgColor: "bg-gradient-to-r from-orange-500 to-yellow-600",
    iconColor: "text-orange-100"
  },
  {
    icon: Star,
    text: "4.9/5 rating from 12,000+ reviews",
    subtext: "Trusted by healthcare professionals",
    bgColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    iconColor: "text-amber-100"
  }
];

export const ConversionBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % conversionMessages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const currentMessage = conversionMessages[currentIndex];
  const IconComponent = currentMessage.icon;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className={`
            relative overflow-hidden rounded-2xl p-6 text-white shadow-2xl
            ${currentMessage.bgColor}
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
          `}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative flex items-center justify-center space-x-4">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="flex-shrink-0"
            >
              <div className={`p-3 rounded-full bg-white/20 backdrop-blur-sm ${currentMessage.iconColor}`}>
                <IconComponent className="w-6 h-6" />
              </div>
            </motion.div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-lg mb-1"
              >
                {currentMessage.text}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm opacity-90"
              >
                {currentMessage.subtext}
              </motion.div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {conversionMessages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-primary scale-125'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};