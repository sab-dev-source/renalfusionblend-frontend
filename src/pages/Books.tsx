import { Layout } from "@/components/Layout";
import { Book, Download, ShoppingCart, Star, Clock, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";

const Books = () => {
  const CountUpStat = ({ value, decimal = false }: { value: number; decimal?: boolean }) => {
    const ref = useCountUp(value, 1500);
    return <span ref={ref}>0</span>;
  };
  const books = [
    {
      id: 1,
      title: "Comprehensive Guide to Renal Nutrition",
      author: "Dr. Sarah Johnson, MD",
      price: { physical: 49.99, digital: 29.99 },
      rating: 4.9,
      reviews: 234,
      pages: 380,
      isbn: "978-0-12345-678-9",
      description: "Essential guide for healthcare professionals managing patients with kidney disease, covering evidence-based nutritional strategies.",
      coverImage: "/api/placeholder/300/400",
      preview: "Chapter 1: Fundamentals of Renal Physiology...",
      features: [
        "Evidence-based nutritional protocols",
        "Case studies and real-world applications", 
        "Updated dietary guidelines",
        "Comprehensive nutrient tables"
      ],
      shipping: "2-3 business days",
      format: "Hardcover, 380 pages"
    },
    {
      id: 2,
      title: "Dialysis Patient Care Manual",
      author: "Dr. Michael Chen, PhD",
      price: { physical: 59.99, digital: 39.99 },
      rating: 4.8,
      reviews: 189,
      pages: 425,
      isbn: "978-0-12345-679-6",
      description: "Complete manual for dialysis care teams, covering procedures, patient management, and quality assurance protocols.",
      coverImage: "/api/placeholder/300/400",
      preview: "Chapter 1: Hemodialysis Fundamentals...",
      features: [
        "Step-by-step procedures",
        "Safety protocols and guidelines",
        "Patient communication strategies",
        "Quality metrics and monitoring"
      ],
      shipping: "2-3 business days", 
      format: "Hardcover, 425 pages"
    },
    {
      id: 3,
      title: "Advanced Nephrology Practice",
      author: "Dr. Emily Rodriguez, PharmD",
      price: { physical: 79.99, digital: 49.99 },
      rating: 4.9,
      reviews: 156,
      pages: 520,
      isbn: "978-0-12345-680-2",
      description: "Advanced clinical practices in nephrology, including cutting-edge treatments and emerging research findings.",
      coverImage: "/api/placeholder/300/400",
      preview: "Chapter 1: Modern Nephrology Landscape...",
      features: [
        "Latest research and clinical trials",
        "Advanced treatment protocols",
        "Pharmacological considerations",
        "Patient outcome optimization"
      ],
      shipping: "2-3 business days",
      format: "Hardcover, 520 pages"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Medical Education Library
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive medical textbooks and resources written by leading healthcare professionals. 
              Available in both physical and digital formats for immediate access.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span>Instant Digital Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Catalog */}
      <section className="py-20">
        <div className="container-medical">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Medical Textbooks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authoritative resources for healthcare professionals, students, and medical educators
            </p>
          </div>

          <div className="space-y-12">
            {books.map((book, index) => (
              <div key={book.id} className="card-medical">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Book Cover */}
                  <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <Book className="h-24 w-24 text-primary/40" />
                    </div>
                    
                    {/* Book Stats */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{book.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Ships in {book.shipping}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span><CountUpStat value={book.rating} decimal={true} /> (<CountUpStat value={book.reviews} /> reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{book.title}</h3>
                      <p className="text-primary font-medium mb-1">by {book.author}</p>
                      <p className="text-sm text-muted-foreground">ISBN: {book.isbn}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{book.description}</p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {book.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Preview</h4>
                      <p className="text-sm text-muted-foreground italic">{book.preview}</p>
                      <button className="text-primary text-sm font-medium mt-2 hover:underline">
                        Read full preview →
                      </button>
                    </div>

                    {/* Purchase Options */}
                    <div className="border-t border-card-border pt-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Physical Copy */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">Physical Copy</span>
                            <span className="text-2xl font-bold text-primary">${book.price.physical}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{book.format}</p>
                          <button className="w-full btn-medical">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart - Physical
                          </button>
                        </div>

                        {/* Digital Copy */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">Digital Copy</span>
                            <span className="text-2xl font-bold text-accent">${book.price.digital}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Instant PDF download</p>
                          <button className="w-full btn-accent">
                            <Download className="h-4 w-4 mr-2" />
                            Buy Digital - Instant Access
                          </button>
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
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose Our Medical Textbooks?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Authors</h3>
              <p className="text-muted-foreground">Written by board-certified physicians and healthcare specialists</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Evidence-Based</h3>
              <p className="text-muted-foreground">All content backed by latest research and clinical evidence</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Flexible Formats</h3>
              <p className="text-muted-foreground">Choose between physical books or instant digital downloads</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Books;