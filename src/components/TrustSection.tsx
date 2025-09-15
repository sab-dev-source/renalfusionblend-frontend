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
      quote: "As a nephrologist with 15 years of experience, I've seen firsthand how proper protein intake affects kidney function. Renal Fusion's phosphorus-controlled formulas allow my CKD patients to maintain muscle mass safely. The clinical research behind their products is impressive.",
      name: "Dr. Sarah Mitchell",
      role: "Nephrologist"
    },
    {
      img: michaelRodriguez,
      quote: "Being diagnosed with Stage 3 CKD changed everything about my training. Renal Fusion's ISOLATE helped me stay competitive while managing my condition. My labs improved, and I can still push my limits in the gym. Game-changer for athlete-patients like me.",
      name: "Michael Rodriguez",
      role: "Personal Trainer & Patient"
    },
    {
      img: jennyferChen,
      quote: "I recommend Renal Fusion to clients with kidney concerns because their nutritional transparency is unmatched. The detailed phosphorus, potassium, and sodium breakdowns make meal planning so much easier. Finally, supplements that work with renal diets, not against them.",
      name: "Jennifer Chen",
      role: "Nutritionist"
    },
    {
      img: drRobertThompson,
      quote: "After reviewing their quality control processes and third-party testing protocols, I'm confident recommending Renal Fusion to our hospital network. Their medical-grade approach to supplement manufacturing sets the gold standard in our field.",
      name: "Dr. Robert Thompson",
      role: "Chief Medical Officer"
    },
    {
      img: lisaPark,
      quote: "My clients with kidney health challenges finally have options that don't sacrifice results. The plant-based proteins deliver complete amino profiles while respecting their dietary restrictions. I've seen remarkable improvements in energy and overall wellness.",
      name: "Ryan Parker",
      role: "Wellness Coach"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what medical experts and satisfied customers say about Renal Fusion Blend products.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-16">
          <TestimonialSlider testimonials={testimonials} />
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-4xl font-bold text-primary mb-2">
              <span ref={countRef1}>0</span>
            </div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          
          <div className="p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-4xl font-bold text-success mb-2">
              <span ref={countRef2}>0</span>%
            </div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          
          <div className="p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-4xl font-bold text-accent mb-2">
              <span ref={countRef3}>0</span>
            </div>
            <div className="text-muted-foreground">Healthcare Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};