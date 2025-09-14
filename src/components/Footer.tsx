import { Link } from "react-router-dom";
import { Heart, Shield, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Protein Products", href: "/products" },
      { name: "Medical Supplements", href: "/medical" },
      { name: "Specialty Formulas", href: "/products/specialty" },
    ],
    education: [
      { name: "Medical Courses", href: "/courses" },
      { name: "Certification Programs", href: "/courses/certification" },
      { name: "Resource Library", href: "/books" },
    ],
    support: [
      { name: "AI Health Assistant", href: "/ai-assistant" },
      { name: "Book Consultation", href: "/consultation" },
      { name: "Contact Support", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Medical Disclaimer", href: "/disclaimer" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  };

  return (
    <footer className="bg-muted border-t border-card-border">
      <div className="container-medical py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-medical flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Renal Fusion Blend</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Trusted medical-grade products and education for healthcare professionals and patients. 
              Evidence-based solutions for optimal health outcomes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Medical District, Healthcare Plaza</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-CARE</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@renalfusionblend.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Education</h3>
            <ul className="space-y-2">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="medical-disclaimer mt-8">
          <div className="flex items-start space-x-2">
            <Shield className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-warning-foreground mb-1">Medical Disclaimer</p>
              <p className="text-sm text-warning-foreground/90">
                The information provided on this website is for educational purposes only and is not intended 
                to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare 
                professional before making any changes to your treatment regimen.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-card-border">
          <div className="trust-badge">
            <Shield className="h-4 w-4" />
            <span>FDA Registered</span>
          </div>
          <div className="trust-badge">
            <Heart className="h-4 w-4" />
            <span>Healthcare Professional Approved</span>
          </div>
          <div className="trust-badge">
            <Shield className="h-4 w-4" />
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-card-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Renal Fusion Blend. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};