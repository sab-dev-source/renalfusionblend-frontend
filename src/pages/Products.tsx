import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Layout } from "../components/Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { CommunityCarousel } from "../components/CommunityCarousel";
import { FlipText } from "../components/ui/flip-text";
import { wheyProteinProducts } from "../data/products";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = wheyProteinProducts.filter(product =>
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
              word="Whey Proteins"
              className="text-5xl font-bold text-white mb-6"
            />
            <p className="text-xl text-white/90 mb-8">
              Premium quality whey protein supplements designed to support your fitness goals and kidney health with carefully selected ingredients.
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
              placeholder="Search whey proteins..."
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

        {/* Community Carousel */}
        <CommunityCarousel />

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

        {/* Product Information */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border/50">
          <h3 className="font-semibold mb-2">Quality Assurance</h3>
          <p className="text-sm text-muted-foreground">
            All our whey protein products are third-party tested for purity and potency. 
            Made in FDA-approved facilities with the highest quality standards. 
            Consult with healthcare professionals for personalized nutrition advice.
          </p>
        </div>
      </div>
    </Layout>
  );
}