import { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import medical images (book image removed per request)
import kidneyComparison from "@/assets/kidney-comparison.png";
import doctorConsultation from "@/assets/doctor-consultation.png";
import medicalEcosystem from "@/assets/medical-ecosystem.png";
import medicalTeam from "@/assets/medical-team.png";
import kidneyDna from "@/assets/kidney-dna.png";
import renalFusionAI from "@/assets/renal-fusion-ai-interface.png";

export const MedicalCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Autoplay timing
  const AUTO_DELAY = 5000; // ms
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(performance.now());

  const medicalImages = useMemo(
    () => [
      {
        src: renalFusionAI,
        alt: "Renal Fusion Blend AI interface with health analytics",
        title: "AI Health Analytics",
        description: "Advanced AI-powered renal health monitoring and statistics",
      },
      {
        src: kidneyComparison,
        alt: "Healthy vs diseased kidney comparison",
        title: "Renal Health Focus",
        description: "Specialized kidney health and dialysis support",
      },
      {
        src: doctorConsultation,
        alt: "Doctor consulting with patient",
        title: "Professional Care",
        description: "Healthcare professional consultation and guidance",
      },
      {
        src: medicalEcosystem,
        alt: "Medical ecosystem with kidneys and educational resources",
        title: "Comprehensive Solutions",
        description: "Complete medical education and product ecosystem",
      },
      {
        src: medicalTeam,
        alt: "Medical team collaboration",
        title: "Expert Team",
        description: "Collaborative healthcare professionals and specialists",
      },
      {
        src: kidneyDna,
        alt: "Kidney with DNA helix representing genetic research",
        title: "Cutting-Edge Science",
        description: "Genetic research and personalized medicine approaches",
      },
    ],
    []
  );

  // Sync current index with Embla selection
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
      // Restart progress when user manually navigates
      startRef.current = performance.now();
      setProgress(0);
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Autoplay + real progress bar
  useEffect(() => {
    if (!api) return;

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / AUTO_DELAY) * 100);
      setProgress(pct);

      if (elapsed >= AUTO_DELAY) {
        startRef.current = now;
        setProgress(0);
        if (api.canScrollNext()) api.scrollNext();
        else api.scrollTo(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [api, currentIndex]);

  return (
    <div className="relative px-4 md:px-8 py-16 md:py-20">
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto"
      >
        <CarouselContent className="-ml-4 md:-ml-8">
          {medicalImages.map((image, index) => (
            <CarouselItem key={index} className="pl-4 md:pl-8">
              <div className="relative group">
                {/* Image Container - Much larger, immersive visuals */}
                <div className="aspect-[5/3] lg:aspect-[5/3] xl:aspect-[5/3] w-full rounded-3xl overflow-hidden bg-card/50 border border-white/20 shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {/* Overlay Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">{image.title}</h3>
                    <p className="text-base md:text-lg text-white/90">{image.description}</p>
                  </div>
                </div>

                {/* Floating Medical Badges */}
                <div className="absolute top-4 right-4 bg-accent text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg z-30">
                  Medical Grade
                </div>
                <div
                  className="absolute bottom-4 left-4 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg z-30"
                  style={{ animationDelay: "1s" }}
                >
                  FDA Registered
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation (fully functional) */}
        <CarouselPrevious className="z-30 absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm w-12 h-12" />
        <CarouselNext className="z-30 absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm w-12 h-12" />
      </Carousel>

      {/* Carousel Indicators (fully functional) */}
      <div className="flex justify-center mt-8 gap-3">
        {medicalImages.map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive}
              className={`h-3 rounded-full transition-all duration-300 ${
                isActive ? "bg-white w-8" : "bg-white/50 hover:bg-white/70 w-3"
              }`}
            />
          );
        })}
      </div>

      {/* Real Progress Bar tied to autoplay */}
      <div className="mt-6 w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto bg-white/20 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-accent h-1.5 rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
};
