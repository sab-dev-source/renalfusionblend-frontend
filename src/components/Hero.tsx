import { ArrowRight, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { MedicalCarousel } from "./MedicalCarousel";
import { useCountUp } from "@/hooks/useCountUp";

export const Hero = () => {
  const trustStats = [
    { icon: Users, label: "Healthcare Professionals", value: 10000, suffix: "+" },
    { icon: Shield, label: "FDA Registered Products", value: 500, suffix: "+" },
    { icon: Award, label: "Medical Certifications", value: 50, suffix: "+" },
  ];

  const CountUpStat = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useCountUp(value, 2000);
    return <span ref={ref}>0</span>;
  };

  const trustFeatures = [
    "Evidence-based formulations",
    "Medical-grade quality standards",
    "Healthcare professional approved",
    "Secure & encrypted ordering",
  ];

  return (
    <section className="hero-medical py-16 lg:py-24">
      <div className="container-medical">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium text-white">
                <Shield className="h-4 w-4" />
                <span>Trusted by Healthcare Professionals</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Premium Medical Solutions for 
                <span className="block text-accent-muted">Optimal Health</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg">
                Evidence-based supplements, medical products, and professional education 
                trusted by healthcare providers worldwide.
              </p>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-2 gap-3">
              {trustFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent-muted flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-accent text-lg px-8 py-4">
                Shop Products
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/ai-assistant" className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                Get AI Health Guidance
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            {trustStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-6 w-6 text-accent-muted mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      <CountUpStat value={stat.value} suffix={stat.suffix} />{stat.suffix}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Visual - Medical Carousel */}
          <div className="relative lg:pl-8 z-10">
            <div className="relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
              
              {/* Medical Image Carousel */}
              <MedicalCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};