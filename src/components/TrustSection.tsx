import { useCountUp } from "@/hooks/useCountUp";
import { TestimonialSlider } from "./ui/testimonial-slider";
import drSarahMitchell from "@/assets/testimonials/dr-sarah-mitchell.png";
import michaelRodriguez from "@/assets/testimonials/michael-rodriguez.png";
import jennyferChen from "@/assets/testimonials/jennifer-chen.png";
import drRobertThompson from "@/assets/testimonials/dr-robert-thompson.png";
import lisaPark from "@/assets/testimonials/lisa-park.png";

export const TrustSection = () => {
  const countRef1 = useCountUp(15000);
  const countRef2 = useCountUp(98);
  const countRef3 = useCountUp(250);

  const testimonials = [
    {
      img: drSarahMitchell,
      quote: "I recommend Renal Fusion to my CKD patients. Their phosphorus-controlled formulas are clinically sound and help maintain muscle mass safely.",
      name: "Dr. Sarah Mitchell",
      role: "Nephrologist"
    },
    {
      img: michaelRodriguez,
      quote: "As a trainer with kidney issues, Renal Fusion changed everything. I can stay competitive while managing my condition. My labs improved dramatically.",
      name: "Michael Rodriguez",
      role: "Personal Trainer & Patient"
    },
    {
      img: jennyferChen,
      quote: "Finally, supplements that work with renal diets. The detailed nutrient breakdowns make meal planning for kidney patients so much easier.",
      name: "Jennifer Chen",
      role: "Nutritionist"
    },
    {
      img: drRobertThompson,
      quote: "After reviewing their quality protocols, I confidently recommend Renal Fusion to our hospital network. Medical-grade manufacturing at its finest.",
      name: "Dr. Robert Thompson",
      role: "Chief Medical Officer"
    },
    {
      img: lisaPark,
      quote: "My clients with kidney challenges love these plant-based proteins. Complete amino profiles that respect dietary restrictions and deliver results.",
      name: "Ryan Parker",
      role: "Wellness Coach"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            See what medical experts and satisfied customers say about Renal Fusion Blend products.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-12 sm:mb-16">
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              <span ref={countRef1}>0</span>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">Happy Customers</div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl sm:text-4xl font-bold text-success mb-2">
              <span ref={countRef2}>0</span>%
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">Satisfaction Rate</div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-2xl bg-card border border-card-border sm:col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
              <span ref={countRef3}>0</span>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">Healthcare Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};