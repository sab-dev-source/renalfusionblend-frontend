import { Link } from "react-router-dom";
import { Heart, Shield, Mail, Phone, MapPin } from "lucide-react";
import renalFusionLogo from "../assets/renal-fusion-logo.png";

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
      { name: "Contact Support", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-700">
      <div className="container-medical py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={renalFusionLogo} alt="Renal Fusion Blend" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Renal Fusion Blend</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Trusted medical-grade products and education for healthcare professionals and patients. 
              Evidence-based solutions for optimal health outcomes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Medical District, Healthcare Plaza</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-CARE</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" />
                <span>support@renalfusionblend.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-white mb-4">Education</h3>
            <ul className="space-y-2">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-700">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-600">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>FDA Registered</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-600">
            <Heart className="h-4 w-4 text-red-400" />
            <span>Healthcare Professional Approved</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-600">
            <Shield className="h-4 w-4 text-green-400" />
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-300 font-medium">
            © 2024 Renal Fusion Blend. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors font-medium"
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