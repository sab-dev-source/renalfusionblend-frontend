import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare, Shield, Award, Users } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4">
              Expert Medical Consultation
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 px-4">
              Connect with our board-certified medical professionals for personalized guidance, 
              product recommendations, and healthcare education support.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-accent-muted" />
              <span className="text-white font-medium">HIPAA Compliant & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container-medical">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to connect with our medical team for expert guidance and support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Consultation</h3>
                    <p className="text-muted-foreground text-sm mb-2">Direct line to medical professionals</p>
                    <p className="text-primary font-medium">1-800-RENAL-HELP</p>
                    <p className="text-muted-foreground text-sm">(1-800-736-2543)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">Written consultation and support</p>
                    <p className="text-primary font-medium">consult@renalfusionblend.com</p>
                    <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                    <p className="text-muted-foreground text-sm mb-2">Instant support and guidance</p>
                    <p className="text-primary font-medium">Available 24/7</p>
                    <button className="text-accent text-sm font-medium hover:underline mt-1">
                      Start Chat Now →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Location</h3>
                    <p className="text-muted-foreground text-sm mb-2">Medical center headquarters</p>
                    <p className="text-foreground">123 Medical Plaza Drive</p>
                    <p className="text-foreground">Healthcare City, HC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Booking Form */}
            <div className="lg:col-span-2">
              <div className="card-medical">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Book Medical Consultation</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        className="input-medical"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        className="input-medical"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="input-medical"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        className="input-medical"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Consultation Type *
                    </label>
                    <select className="input-medical" required>
                      <option value="">Select consultation type</option>
                      <option value="general">General Medical Guidance</option>
                      <option value="product">Product Recommendation</option>
                      <option value="education">Medical Education Support</option>
                      <option value="nutrition">Renal Nutrition Counseling</option>
                      <option value="dialysis">Dialysis Care Consultation</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date
                      </label>
                      <input 
                        type="date" 
                        className="input-medical"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time
                      </label>
                      <select className="input-medical">
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message / Medical History
                    </label>
                    <textarea 
                      className="input-medical min-h-32 resize-vertical"
                      placeholder="Please describe your medical question, current conditions, or specific areas where you need guidance..."
                    ></textarea>
                  </div>

                  {/* Medical Disclaimer */}
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-orange-800 dark:text-orange-200 mb-1">Medical Disclaimer</p>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          This consultation is for educational purposes and general guidance only. 
                          It does not constitute medical advice, diagnosis, or treatment. 
                          Please consult your physician for specific medical concerns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="privacy" className="rounded border-input" required />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the <button type="button" className="text-primary hover:underline">Privacy Policy</button> and 
                      consent to HIPAA-compliant processing of my health information. *
                    </label>
                  </div>

                  <button type="submit" className="w-full btn-medical text-lg py-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Emergency Info */}
      <section className="py-20 bg-muted">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="card-medical">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-card-border">
                  <span className="text-foreground">Monday - Friday</span>
                  <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-card-border">
                  <span className="text-foreground">Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-success/10 rounded-lg">
                <p className="text-success font-medium mb-1">24/7 Emergency Support</p>
                <p className="text-sm text-success/80">
                  For urgent medical concerns, please call our emergency line or visit your nearest emergency room.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="card-medical">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Our Credentials</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">HIPAA Compliant Medical Practice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Board-Certified Medical Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">Licensed Healthcare Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;