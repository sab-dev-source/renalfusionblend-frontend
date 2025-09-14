import { Shield, Award, Users, CheckCircle, Star, Lock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export const TrustSection = () => {
  const CountUpStat = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useCountUp(value, 2500);
    return <span ref={ref}>0</span>;
  };
  const certifications = [
    {
      title: "FDA Registered",
      description: "All products meet FDA standards",
      icon: Shield,
      verified: true
    },
    {
      title: "Healthcare Professional Approved",
      description: "Reviewed by medical experts",
      icon: Award,
      verified: true
    },
    {
      title: "ISO 9001 Certified",
      description: "Quality management certified",
      icon: CheckCircle,
      verified: true
    },
    {
      title: "Secure Encryption",
      description: "Your data is protected",
      icon: Lock,
      verified: true
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen, MD",
      title: "Nephrologist",
      content: "The quality of products and educational resources from Renal Fusion Blend is exceptional. I regularly recommend them to my patients.",
      rating: 5
    },
    {
      name: "Michael Rodriguez, RN",
      title: "Critical Care Nurse",
      content: "Their certification courses have significantly enhanced my clinical knowledge. The AI assistant is also incredibly helpful for patient education.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-medical">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Trusted by Healthcare Professionals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="card-medical text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  {cert.verified && (
                    <div className="flex items-center justify-center gap-1 mt-3 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-medical rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUpStat value={10000} suffix="+" />+
              </div>
              <div className="text-white/90">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUpStat value={500} suffix="+" />+
              </div>
              <div className="text-white/90">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUpStat value={50} suffix="+" />+
              </div>
              <div className="text-white/90">Medical Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUpStat value={99.9} suffix="%" />%
              </div>
              <div className="text-white/90">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Healthcare Professionals Say</h2>
          <p className="text-muted-foreground">Trusted by medical professionals worldwide</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-medical">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};