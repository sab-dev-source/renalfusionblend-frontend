import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Layout } from "../components/Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { CommunityCarousel } from "../components/CommunityCarousel";
import { wheyProteinProducts } from "../data/products";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = wheyProteinProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Whey Proteins</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Premium quality whey protein supplements designed to support your fitness goals and kidney health with carefully selected ingredients.
          </p>
        </div>

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