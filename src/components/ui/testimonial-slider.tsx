import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) => 
        prevActive + 1 === testimonials.length ? 0 : prevActive + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      {/* Avatar Section */}
      <div className="relative h-48 mb-4">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-primary/30 before:via-primary/10 before:via-25% before:to-primary/0 before:to-75%">
          <div className="h-48 [mask-image:_linear-gradient(0deg,transparent,white_15%,white)]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                active === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 -z-10 h-full flex items-center justify-center"
                    initial={{ opacity: 0, rotate: -60, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 60, scale: 0.8 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.68, -0.3, 0.32, 1]
                    }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                      <img
                        className="relative rounded-full w-40 h-40 object-cover border-4 border-background shadow-2xl shadow-primary/30 ring-2 ring-primary/20 transform transition-all duration-300 group-hover:scale-105"
                        src={testimonial.img}
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        loading="eager"
                        onError={(e) => {
                          console.warn(`Failed to load image for ${testimonial.name}`);
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23374151' font-family='Arial, sans-serif' font-size='16'%3E${testimonial.name.split(' ').map(n => n[0]).join('')}%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              active === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-xl md:text-2xl font-bold text-foreground before:content-['\201C'] after:content-['\201D']">
                    {testimonial.quote}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="-m-1.5 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30 ${
              active === index
                ? "bg-primary text-primary-foreground shadow-primary/10"
                : "bg-card text-foreground hover:bg-muted border border-border"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>
            <span className={`mx-2 ${active === index ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              -
            </span>
            <span className={active === index ? "text-primary-foreground/90" : "text-muted-foreground"}>
              {testimonial.role}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};