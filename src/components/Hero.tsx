import { ArrowRight, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const trustStats = [
    { icon: Users, label: "Healthcare Professionals", value: "10,000+" },
    { icon: Shield, label: "FDA Registered Products", value: "500+" },
    { icon: Award, label: "Medical Certifications", value: "50+" },
  ];

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Medical Solutions for 
                <span className="block text-accent-muted">Optimal Health</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
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
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
              
              {/* Content Cards */}
              <div className="relative p-8 space-y-6">
                {/* Medical Quality Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Medical Grade Quality</h3>
                      <p className="text-sm text-muted-foreground">FDA registered & healthcare approved</p>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-hover rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">AI Health Assistant</h3>
                      <p className="text-sm text-muted-foreground">24/7 symptom guidance & support</p>
                    </div>
                  </div>
                </div>

                {/* Certification Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Professional Courses</h3>
                      <p className="text-sm text-muted-foreground">Certified medical education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};