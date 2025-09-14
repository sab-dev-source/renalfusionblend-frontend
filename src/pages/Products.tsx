import { Layout } from "@/components/Layout";
import { Search, Filter, Star, ShoppingCart, Heart, Truck } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const products = [
    {
      id: 1,
      name: "Renal Support Formula",
      category: "Kidney Health",
      price: "$89.99",
      originalPrice: "$109.99",
      rating: 4.9,
      reviews: 234,
      image: "🧪",
      inStock: true,
      fastShipping: true,
      description: "Advanced kidney support with clinically proven ingredients",
      benefits: ["Supports kidney function", "Reduces inflammation", "Antioxidant protection"]
    },
    {
      id: 2,
      name: "Complete Amino Blend",
      category: "Protein",
      price: "$64.99",
      rating: 4.8,
      reviews: 189,
      image: "💊",
      inStock: true,
      fastShipping: true,
      description: "Essential amino acids for muscle recovery and health",
      benefits: ["Muscle recovery", "Energy support", "Immune function"]
    },
    {
      id: 3,
      name: "Electrolyte Balance Pro",
      category: "Hydration",
      price: "$39.99",
      rating: 4.7,
      reviews: 156,
      image: "⚡",
      inStock: false,
      fastShipping: false,
      description: "Medical-grade electrolyte replacement formula",
      benefits: ["Hydration support", "Mineral balance", "Performance enhancement"]
    },
  ];

  const categories = ["All Products", "Kidney Health", "Protein", "Hydration", "Vitamins"];

  return (
    <Layout>
      <div className="py-8">
        <div className="container-medical">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Protein Products</h1>
            <p className="text-muted-foreground">Medical-grade protein supplements and nutritional products</p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-medical pl-10"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm rounded-lg border border-card-border hover:bg-muted transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="btn-outline flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card-product">
                {/* Product Image */}
                <div className="bg-gradient-subtle p-8 text-center">
                  <span className="text-6xl">{product.image}</span>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium rounded">
                      SAVE {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>

                  {/* Benefits */}
                  <div className="space-y-1 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-success rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex items-center gap-1 text-xs ${product.inStock ? 'text-success' : 'text-destructive'}`}>
                      <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`}></div>
                      <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    {product.fastShipping && (
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <Truck className="h-3 w-3" />
                        <span>Fast Shipping</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button 
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
                        product.inStock 
                          ? 'btn-medical' 
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {product.inStock ? 'Add to Cart' : 'Notify Me'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Medical Disclaimer */}
          <div className="medical-disclaimer mt-12">
            <p className="font-medium mb-2">Medical Disclaimer</p>
            <p className="text-sm">
              These statements have not been evaluated by the FDA. These products are not intended to 
              diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;