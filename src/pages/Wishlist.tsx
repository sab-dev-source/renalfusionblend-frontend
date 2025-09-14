import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Layout } from "../components/Layout";
import { useCart } from "../contexts/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-6">
              Save products you love to your wishlist!
            </p>
            <Link to="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                {product.flavor && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.flavor}
                  </p>
                )}
                
                <p className="text-2xl font-bold text-primary mb-3">
                  ${product.price}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 space-y-2">
                <Button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="w-full"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => removeFromWishlist(product.id)}
                  className="w-full"
                >
                  <Heart className="h-4 w-4 mr-2 fill-current" />
                  Remove from Wishlist
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}