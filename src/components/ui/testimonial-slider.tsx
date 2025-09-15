import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useImagePreload } from "@/hooks/useImagePreload";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  // Preload all avatar images for smooth transitions
  const imageUrls = useMemo(() => testimonials.map((t) => t.img), [testimonials]);
  const { loadedMap } = useImagePreload(imageUrls);
  const currentUrl = imageUrls[active];
  const currentLoaded = loadedMap.get(currentUrl) ?? false;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1 === testimonials.length ? 0 : prevActive + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [autorotate, testimonials.length]);

  // Stabilize quote container height
  useEffect(() => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  }, [active]);

  return (
    <div className="mx-auto w-full max-w-4xl text-center px-4">
      {/* Avatar Section - Mobile First */}
      <div className="relative mb-8 sm:mb-12 h-48 sm:h-64 md:h-72 flex items-center justify-center">
        <div className="absolute -z-10 h-80 w-80 sm:h-[520px] sm:w-[520px] md:h-[640px] md:w-[640px] rounded-full bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-2xl sm:blur-3xl" />

        <AnimatePresence mode="wait">
          {testimonials.map((t, index) =>
            active === index ? (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.68, -0.3, 0.32, 1] }}
              >
                <div className="relative group">
                  {/* subtle glow ring - mobile responsive */}
                  <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-sm sm:blur-md transition duration-500 group-hover:opacity-100" />

                  {/* avatar or skeleton - mobile first sizing */}
                  {currentLoaded ? (
                    <img
                      className="relative h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full object-cover border-2 sm:border-4 border-background shadow-xl sm:shadow-2xl shadow-primary/40 ring-2 sm:ring-4 ring-primary/30 transition-transform duration-300 group-hover:scale-105"
                      src={t.img}
                      alt={`${t.name} — ${t.role}`}
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23374151' font-family='Arial, sans-serif' font-size='16'%3E" +
                          t.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('') +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="relative h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border-2 sm:border-4 border-background ring-2 sm:ring-4 ring-primary/20 bg-muted animate-pulse" />
                  )}

                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
                </div>

                {/* 5 Star Rating - mobile responsive positioning */}
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Quote Section - Mobile First */}
      <div className="mb-6 sm:mb-9 px-2 sm:px-4 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) =>
              active === index ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                >
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons - Mobile First */}
      <div className="flex flex-wrap justify-center gap-2 px-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex items-center justify-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30 ${
              active === index
                ? "bg-primary text-primary-foreground shadow-primary/10"
                : "bg-card text-foreground hover:bg-muted border border-border"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
            aria-pressed={active === index}
            aria-label={`Show testimonial from ${testimonial.name}`}
          >
            <span className="hidden sm:inline">{testimonial.name}</span>
            <span className="sm:hidden">{testimonial.name.split(' ')[0]}</span>
            <span className={`${active === index ? "text-primary-foreground/70" : "text-muted-foreground"} mx-1 sm:mx-2 hidden sm:inline`}>-</span>
            <span className={`${active === index ? "text-primary-foreground/90" : "text-muted-foreground"} hidden sm:inline text-xs`}>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  );
};