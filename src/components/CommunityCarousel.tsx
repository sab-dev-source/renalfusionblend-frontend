import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import doctorWoman from '../assets/community/doctor-woman.png';
import doctorMan from '../assets/community/doctor-man.png';
import elderlyWoman from '../assets/community/elderly-woman.png';
import manDrinking from '../assets/community/man-drinking.png';
import athleticWoman from '../assets/community/athletic-woman.png';
import runningMan from '../assets/community/running-man.png';

const communityImages = [
  { src: doctorWoman, alt: "Healthcare Professional" },
  { src: doctorMan, alt: "Medical Expert" },
  { src: elderlyWoman, alt: "Satisfied Customer" },
  { src: manDrinking, alt: "Health Conscious User" },
  { src: athleticWoman, alt: "Fitness Enthusiast" },
  { src: runningMan, alt: "Active Lifestyle" },
];

export const CommunityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % communityImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-16 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Join the Community
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Healthcare Professionals & Athletes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Renal Fusion Blend for their health and fitness journey.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-primary/20">
          {/* Images */}
          {communityImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.05,
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {communityImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-110'
                    : 'bg-primary/50 hover:bg-primary/70'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>

        {/* Mobile Carousel for smaller screens */}
        <div className="block md:hidden mt-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 [-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {communityImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center"
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          >
            <span>Start Your Journey Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};