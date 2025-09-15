import { Layout } from "../components/Layout";
import { GraduationCap, Clock, Users, Award, CheckCircle, Star, Download, Play } from "lucide-react";
import { FlipText } from "../components/ui/flip-text";
import { CertificateCarousel } from "../components/CertificateCarousel";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced Dialysis Techniques",
      instructor: "Dr. Sarah Johnson, MD",
      price: 299.99,
      originalPrice: 399.99,
      duration: "8 hours",
      students: 1247,
      rating: 4.9,
      reviews: 189,
      level: "Advanced",
      certificate: true,
      description: "Master advanced dialysis techniques with evidence-based protocols and hands-on case studies.",
      thumbnail: "/api/placeholder/400/250",
      modules: [
        "Advanced Hemodialysis Protocols",
        "Peritoneal Dialysis Management", 
        "Vascular Access Optimization",
        "Quality Metrics & Patient Outcomes"
      ],
      outcomes: [
        "Master advanced dialysis procedures",
        "Implement quality improvement protocols",
        "Optimize patient care strategies",
        "Earn continuing education credits"
      ],
      accreditation: "ACCME Accredited - 8 CME Credits",
      preview: "https://example.com/preview1"
    },
    {
      id: 2,
      title: "Renal Nutrition Certification",
      instructor: "Dr. Michael Chen, PhD",
      price: 249.99,
      originalPrice: 299.99,
      duration: "6 hours",
      students: 892,
      rating: 4.8,
      reviews: 156,
      level: "Intermediate",
      certificate: true,
      description: "Comprehensive certification program in renal nutrition for healthcare professionals.",
      thumbnail: "/api/placeholder/400/250",
      modules: [
        "Renal Diet Fundamentals",
        "Phosphorus & Potassium Management",
        "Fluid Balance Strategies", 
        "Patient Education Techniques"
      ],
      outcomes: [
        "Design evidence-based renal diets",
        "Educate patients on dietary compliance",
        "Monitor nutritional status effectively", 
        "Receive specialty certification"
      ],
      accreditation: "CDR Approved - 6 CPEU Credits",
      preview: "https://example.com/preview2"
    },
    {
      id: 3,
      title: "Chronic Kidney Disease Management",
      instructor: "Dr. Emily Rodriguez, PharmD",
      price: 349.99,
      originalPrice: 449.99,
      duration: "12 hours",
      students: 2156,
      rating: 4.9,
      reviews: 298,
      level: "Comprehensive",
      certificate: true,
      description: "Complete program covering all aspects of chronic kidney disease prevention and management.",
      thumbnail: "/api/placeholder/400/250", 
      modules: [
        "CKD Pathophysiology & Staging",
        "Pharmacological Management",
        "Complication Prevention",
        "Patient Care Coordination",
        "Transplant Preparation"
      ],
      outcomes: [
        "Diagnose and stage CKD accurately",
        "Develop comprehensive treatment plans", 
        "Prevent disease progression",
        "Coordinate multidisciplinary care"
      ],
      accreditation: "AAPA Approved - 12 Category I Credits",
      preview: "https://example.com/preview3"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <FlipText
              word="Professional Medical Education"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4"
              delayMultiple={0.05}
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 px-4">
              Advance your career with accredited medical courses designed by leading healthcare experts. 
              Earn certificates and continuing education credits recognized by major medical organizations.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Accredited Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>CME Credits</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Carousel */}
      <CertificateCarousel />

      {/* Courses Catalog */}
      <section className="py-20">
        <div className="container-medical">
          <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">Accredited Medical Courses</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive training programs for healthcare professionals seeking to enhance their expertise
          </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div key={course.id} className="card-medical">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Course Thumbnail */}
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative group cursor-pointer">
                      <Play className="h-12 w-12 text-primary/60 group-hover:text-primary transition-colors" />
                      <div className="absolute top-3 left-3 bg-success text-white text-xs px-2 py-1 rounded">
                        {course.level}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {course.duration}
                      </div>
                    </div>
                    
                    <Link to="/ai-assistant" className="w-full btn-outline text-sm inline-flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      Preview Course
                    </Link>

                    {/* Course Stats */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration} total content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()} students enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span>{course.rating} ({course.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-primary font-medium mb-2">Instructor: {course.instructor}</p>
                      <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm">
                        <Award className="h-4 w-4" />
                        {course.accreditation}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>

                    {/* Course Modules */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Course Modules</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {course.modules.map((module, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Learning Outcomes</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {course.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <GraduationCap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enrollment */}
                    <div className="border-t border-card-border pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-primary">${course.price}</span>
                            {course.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Includes certificate & continuing education credits
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <Link to="/checkout" className="btn-medical text-lg px-8 py-4 mb-2 inline-flex items-center justify-center">
                            Enroll Now
                          </Link>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4" />
                            <span>Certificate included</span>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Preview */}
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-foreground">Professional Certificate</h5>
                            <p className="text-sm text-muted-foreground">Downloadable PDF with QR verification</p>
                          </div>
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="container-medical text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Our Medical Courses?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Accredited Certificates</h3>
              <p className="text-muted-foreground">Recognized by major medical organizations for continuing education</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from board-certified physicians and healthcare specialists</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Career Advancement</h3>
              <p className="text-muted-foreground">Earn credits and certifications that advance your medical career</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;