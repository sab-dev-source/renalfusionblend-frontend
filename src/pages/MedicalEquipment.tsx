import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { Layout } from "../components/Layout";
import { FlipText } from "../components/ui/flip-text";
import { medicalEquipmentProducts } from "../data/products";

export default function MedicalEquipment() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = medicalEquipmentProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <FlipText
              word="Professional Medical Equipment"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4"
              delayMultiple={0.05}
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 px-4">
              Professional-grade medical equipment for accurate health monitoring and diagnostics. 
              Trusted by healthcare providers worldwide for reliable results and superior quality.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search medical equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found matching your search.
            </p>
          </div>
        )}

        {/* Medical Disclaimer */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border/50">
          <h3 className="font-semibold mb-2">Medical Equipment Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            These medical devices are intended for general wellness monitoring. 
            Always consult with healthcare professionals for medical diagnosis and treatment. 
            FDA approved products are clearly marked.
          </p>
        </div>
      </div>
    </Layout>
  );
}