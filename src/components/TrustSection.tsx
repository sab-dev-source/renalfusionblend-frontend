import { useCountUp } from "@/hooks/useCountUp";
import { TestimonialSlider } from "./ui/testimonial-slider";
import doctorWoman from "@/assets/community/doctor-woman.png";
import manDrinking from "@/assets/community/man-drinking.png";
import athleticWoman from "@/assets/community/athletic-woman.png";
import doctorMan from "@/assets/community/doctor-man.png";
import elderlyWoman from "@/assets/community/elderly-woman.png";

export const TrustSection = () => {
  const countRef1 = useCountUp(15000);
  const countRef2 = useCountUp(98);
  const countRef3 = useCountUp(250);

  const testimonials = [
    {
      img: doctorWoman,
      quote: "The ISOLATE whey protein has transformed my recovery time. As a nephrologist, I recommend Renal Fusion Blend to my patients seeking quality protein supplements.",
      name: "Dr. Sarah Mitchell",
      role: "Nephrologist"
    },
    {
      img: manDrinking,
      quote: "After years of kidney health concerns, finding a protein that's both effective and kidney-friendly has been life-changing. The BCAA+ formula is exceptional.",
      name: "Michael Rodriguez",
      role: "Personal Trainer & Patient"
    },
    {
      img: athleticWoman,
      quote: "The Greens formula has improved my energy levels significantly. As someone managing kidney health, I appreciate the careful ingredient selection.",
      name: "Jennifer Chen",
      role: "Nutritionist"
    },
    {
      img: doctorMan,
      quote: "Our medical equipment line complements the nutritional approach perfectly. Quality products that healthcare professionals can trust.",
      name: "Dr. Robert Thompson",
      role: "Chief Medical Officer"
    },
    {
      img: elderlyWoman,
      quote: "The Vegan protein blend is outstanding. Finally, a plant-based option that doesn't compromise on taste or kidney-friendly formulation.",
      name: "Lisa Park",
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