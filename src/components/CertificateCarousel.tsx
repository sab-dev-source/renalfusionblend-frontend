import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Award, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import nephologyNutritionCert from '../assets/certificates/nephrology-nutrition-specialist.png';
import kidneyHealthWellnessCert from '../assets/certificates/kidney-health-wellness.png';
import advancedHealthNutritionCert from '../assets/certificates/advanced-health-nutrition.png';
import digitalCertificate from '../assets/certificates/digital-certificate.png';

const certificateData = [
  {
    id: 1,
    image: nephologyNutritionCert,
    title: "Nephrology Nutrition Specialist",
    description: "Master specialized nutrition protocols for kidney disease management and patient care optimization.",
    features: ["8 CME Credits", "ACCME Accredited", "Digital Certificate"],
    cta: "Enroll in Nephrology Course",
    price: "$299",
    duration: "8 hours"
  },
  {
    id: 2,
    image: kidneyHealthWellnessCert,
    title: "Kidney Health & Wellness Certification",
    description: "Comprehensive certification program covering kidney health prevention and wellness strategies.",
    features: ["6 CPEU Credits", "CDR Approved", "Instant Download"],
    cta: "Get Wellness Certification",
    price: "$249",
    duration: "6 hours"
  },
  {
    id: 3,
    image: advancedHealthNutritionCert,
    title: "Advanced Health & Nutrition Specialist",
    description: "Advanced training in clinical nutrition and health optimization for healthcare professionals.",
    features: ["12 Category I Credits", "AAPA Approved", "Professional Certificate"],
    cta: "Start Advanced Course",
    price: "$349",
    duration: "12 hours"
  },
  {
    id: 4,
    image: digitalCertificate,
    title: "Digital Certificate Program",
    description: "Complete digital certification pathway with modern learning technologies and assessments.",
    features: ["Blockchain Verified", "QR Code Validation", "Lifetime Access"],
    cta: "Explore Digital Learning",
    price: "$199",
    duration: "Flexible"
  }
];

export const CertificateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificateData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certificateData.length) % certificateData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificateData.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Professional Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Earn Accredited Medical Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete our accredited courses and receive professional certificates recognized by leading healthcare organizations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-card border border-card-border shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Certificate Image */}
              <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={certificateData[currentIndex].image}
                    alt={certificateData[currentIndex].title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                  />
                </motion.div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {certificateData[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {certificateData[currentIndex].description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Certificate Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {certificateData[currentIndex].features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <span className="text-3xl font-bold text-primary">
                        {certificateData[currentIndex].price}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>Duration: {certificateData[currentIndex].duration}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <Download className="w-3 h-3" />
                        <span>Downloadable Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/courses" className="btn-medical text-lg w-full lg:w-auto px-8 py-4 inline-flex items-center justify-center">
                    {certificateData[currentIndex].cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {certificateData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-110'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-primary/20 rounded-full mt-4 mx-auto max-w-md">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Advance Your Medical Career?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join thousands of healthcare professionals who have earned accredited certifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses" className="btn-medical px-6 py-3">
                View All Courses
              </Link>
              <Link to="/contact" className="btn-outline px-6 py-3">
                Download Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};