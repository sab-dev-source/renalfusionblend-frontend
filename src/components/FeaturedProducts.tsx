import { ArrowRight, Star, Shield, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const categories = [
    {
      title: "Protein Products",
      description: "Medical-grade protein supplements for optimal recovery and health",
      href: "/products",
      icon: "💪",
      gradient: "from-primary to-primary-hover",
      products: [
        { name: "Renal Support Formula", price: "$89.99", rating: 4.9, reviews: 234 },
        { name: "Complete Amino Blend", price: "$64.99", rating: 4.8, reviews: 189 },
      ]
    },
    {
      title: "Medical Products",
      description: "FDA-registered medical supplies and therapeutic products",
      href: "/medical",
      icon: "🩺",
      gradient: "from-accent to-accent-hover",
      products: [
        { name: "Blood Pressure Monitor", price: "$129.99", rating: 4.9, reviews: 156 },
        { name: "Digital Thermometer Set", price: "$39.99", rating: 4.7, reviews: 98 },
      ]
    },
    {
      title: "Professional Courses",
      description: "Certified medical education and continuing education credits",
      href: "/courses",
      icon: "🎓",
      gradient: "from-primary via-accent to-primary",
      products: [
        { name: "Renal Care Certification", price: "$299.99", rating: 4.9, reviews: 87 },
        { name: "Advanced Nutrition Course", price: "$199.99", rating: 4.8, reviews: 124 },
      ]
    },
    {
      title: "Medical Books",
      description: "Comprehensive medical references and educational materials",
      href: "/books",
      icon: "📚",
      gradient: "from-accent to-primary",
      products: [
        { name: "Nephrology Handbook 2024", price: "$159.99", rating: 4.9, reviews: 67 },
        { name: "Clinical Nutrition Guide", price: "$89.99", rating: 4.8, reviews: 93 },
      ]
    }
  ];

  const trustFeatures = [
    { icon: Shield, text: "Medical Grade Certified" },
    { icon: Truck, text: "Fast, Secure Shipping" },
    { icon: Clock, text: "24/7 Support Available" },
  ];

  return (
    <section id="medical-solutions" className="py-16 bg-gradient-subtle">
      <div className="container-medical">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4">
            Trusted Medical Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Browse our comprehensive catalog of medical-grade products, educational courses, 
            and resources trusted by healthcare professionals worldwide.
          </p>
        </div>

        {/* Trust Features */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-sm border border-card-border">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Icon className="h-4 w-4 text-success" />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="card-product group">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Featured Products */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center justify-between py-3 border-b border-card-border last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{product.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{product.price}</div>
                        <div className="text-xs text-success">In Stock</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  to={category.href}
                  className="block w-full mt-6 btn-outline text-center text-sm py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View All {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/ai-consultant" className="btn-medical text-lg px-8 py-4">
              Get AI Health Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Need help choosing? Our AI consultant provides personalized recommendations 24/7
          </p>
        </div>
      </div>
    </section>
  );
};