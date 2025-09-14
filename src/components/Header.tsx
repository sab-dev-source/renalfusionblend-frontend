import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Shield, Heart, Award, BookOpen, Bot, Dumbbell, User, ShoppingCart } from "lucide-react";
import { HoverExpandableTabs } from "./ui/expandable-tabs";
import { useCart } from "../contexts/CartContext";
import { Badge } from "./ui/badge";
import renalFusionLogo from "../assets/renal-fusion-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems, wishlist } = useCart();

  const navigationTabs = [
    {
      title: "Products",
      icon: Heart,
      type: "dropdown",
      dropdownItems: [
        { title: "Whey Proteins", icon: Dumbbell, href: "/products" },
        { title: "Medical Equipment", icon: Shield, href: "/medical" },
      ],
    },
    { type: "separator" },
    { title: "Courses", icon: Award, href: "/courses" },
    { title: "Books", icon: BookOpen, href: "/books" },
    { title: "AI Assistant", icon: Bot, href: "/ai-assistant" },
    { type: "separator" },
    { title: "Login", icon: User, href: "/login" },
  ] as any;

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-medical">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={renalFusionLogo} alt="Renal Fusion Blend" className="h-10 w-10" />
            <span className="text-xl font-bold text-gradient">Renal Fusion Blend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <HoverExpandableTabs 
              tabs={navigationTabs}
              onNavigate={handleNavigation}
              className="bg-muted/30 rounded-2xl p-2 border border-border/50"
            />
          </nav>

          {/* Cart and Wishlist Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0">
                  {wishlist.length}
                </Badge>
              )}
            </Link>
            
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0">
                  {getTotalItems()}
                </Badge>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-border">
            <nav className="flex flex-col space-y-4">
              {/* Products Section */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-foreground">Products</span>
                <Link
                  to="/products"
                  className="flex items-center space-x-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Dumbbell className="h-4 w-4" />
                  <span>Whey Proteins</span>
                </Link>
                <Link
                  to="/medical"
                  className="flex items-center space-x-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="h-4 w-4" />
                  <span>Medical Equipment</span>
                </Link>
              </div>
              
              {/* Other Navigation */}
              <Link
                to="/courses"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="h-4 w-4" />
                <span>Courses</span>
              </Link>
              <Link
                to="/books"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Books</span>
              </Link>
              <Link
                to="/ai-assistant"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bot className="h-4 w-4" />
                <span>AI Assistant</span>
              </Link>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-card-border">
                <Link
                  to="/login"
                  className="flex items-center space-x-2 btn-outline text-sm justify-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};