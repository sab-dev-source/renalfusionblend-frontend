import { Layout } from "@/components/Layout";
import { Shield, Award, Users, CheckCircle, Heart, Star } from "lucide-react";

const About = () => {
  const credentials = [
    { icon: Shield, title: "FDA Registered", description: "All medical products meet FDA standards" },
    { icon: Award, title: "Medical Certifications", description: "50+ professional healthcare certifications" },
    { icon: Users, title: "Healthcare Network", description: "10,000+ trusted healthcare professionals" },
    { icon: Heart, title: "Patient-Focused", description: "Evidence-based solutions for optimal health" }
  ];

  const partners = [
    "Mayo Clinic Research Network",
    "American Medical Association",
    "FDA Regulatory Compliance",
    "Joint Commission Accredited",
    "ISO 13485 Certified Manufacturing",
    "GMP Quality Assurance"
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      credentials: "MD, PhD Nephrology",
      description: "20+ years in renal medicine and dialysis care"
    },
    {
      name: "Dr. Michael Chen",
      role: "Director of Research",
      credentials: "PhD Biochemistry, MSN",
      description: "Leading expert in evidence-based supplement formulations"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Clinical Education Director",
      credentials: "PharmD, CDE",
      description: "Specialized in medical education and patient safety"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Trusted Medical Excellence
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Leading the industry in evidence-based medical solutions, professional education, 
              and comprehensive healthcare support with unwavering commitment to quality and safety.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-accent-muted" />
              <span className="text-white font-medium">Certified & Accredited Since 2010</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="container-medical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Credentials & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Backed by rigorous standards and continuous compliance with healthcare regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div key={index} className="card-medical text-center">
                  <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{credential.title}</h3>
                  <p className="text-muted-foreground">{credential.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container-medical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trusted Partners & Accreditations</h2>
            <p className="text-xl text-muted-foreground">
              Verified partnerships ensuring the highest quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span className="font-medium text-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-medical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Medical Advisory Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading healthcare professionals dedicated to advancing medical education and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-medical">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-accent mb-3">{member.credentials}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Guarantees */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container-medical text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Commitment to You</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Guarantee</h3>
              <p className="text-muted-foreground">100% medical-grade products with full quality assurance</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Patient Safety</h3>
              <p className="text-muted-foreground">Rigorous safety protocols and continuous monitoring</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Excellence Standard</h3>
              <p className="text-muted-foreground">Exceeding industry standards in every aspect of care</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;