import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import medical images
import kidneyComparison from "@/assets/kidney-comparison.png";
import doctorConsultation from "@/assets/doctor-consultation.png";
import medicalEcosystem from "@/assets/medical-ecosystem.png";
import medicalTeam from "@/assets/medical-team.png";
import kidneyDna from "@/assets/kidney-dna.png";

export const MedicalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const medicalImages = [
    {
      src: kidneyComparison,
      alt: "Healthy vs diseased kidney comparison",
      title: "Renal Health Focus",
      description: "Specialized kidney health and dialysis support"
    },
    {
      src: doctorConsultation,
      alt: "Doctor consulting with patient",
      title: "Professional Care",
      description: "Healthcare professional consultation and guidance"
    },
    {
      src: medicalEcosystem,
      alt: "Medical ecosystem with kidneys and educational resources",
      title: "Comprehensive Solutions",
      description: "Complete medical education and product ecosystem"
    },
    {
      src: medicalTeam,
      alt: "Medical team collaboration",
      title: "Expert Team",
      description: "Collaborative healthcare professionals and specialists"
    },
    {
      src: kidneyDna,
      alt: "Kidney with DNA helix representing genetic research",
      title: "Cutting-Edge Science",
      description: "Genetic research and personalized medicine approaches"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % medicalImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [medicalImages.length]);

  return (
    <div className="relative px-0 py-12 md:py-16">
      <Carousel className="w-full max-w-6xl lg:max-w-7xl mx-auto">
        <CarouselContent className="-ml-3 md:-ml-6">
          {medicalImages.map((image, index) => (
            <CarouselItem key={index} className="pl-3 md:pl-6">
              <div className="relative group">
                {/* Image Container - Increased size and better aspect ratio */}
                <div className="aspect-[3/2] sm:aspect-[4/3] lg:aspect-[3/2] w-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base md:text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-xs md:text-sm text-white/90">{image.description}</p>
                  </div>
                </div>

                {/* Floating Medical Badges - Better positioning */}
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg animate-pulse z-20">
                  Medical Grade
                </div>
                <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg animate-pulse z-20" style={{animationDelay: '1s'}}>
                  FDA Registered
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" />
      </Carousel>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {medicalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-white/20 rounded-full h-1">
        <div 
          className="bg-accent h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / medicalImages.length) * 100}%` }}
        />
      </div>
    </div>
  );
};