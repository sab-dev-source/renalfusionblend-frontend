import { Heart, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Product, useCart } from "../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
              isInWishlist(product.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className="h-4 w-4" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </button>

          {/* Stock Status */}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 left-3">
              Out of Stock
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
          
          {product.flavor && (
            <p className="text-sm text-muted-foreground mb-2">
              Flavor: {product.flavor}
            </p>
          )}
          
          {product.weight && (
            <p className="text-sm text-muted-foreground mb-3">
              {product.weight} {product.servings && `• ${product.servings} servings`}
            </p>
          )}

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="p-4 pt-0 mt-auto">
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="ml-4"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};