import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield, Heart, Award, BookOpen, Bot, ChevronDown, Dumbbell, User } from "lucide-react";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import renalFusionLogo from "../assets/renal-fusion-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { title: "Courses", icon: Award },
    { title: "Books", icon: BookOpen },
    { title: "AI Assistant", icon: Bot },
  ];

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
          <nav className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                <span>Products</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/products" className="flex items-center space-x-2">
                    <Dumbbell className="h-4 w-4" />
                    <span>Whey Proteins</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/medical" className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Medical Equipment</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Expandable Tabs */}
            <ExpandableTabs 
              tabs={tabs} 
              onChange={(index) => {
                if (index !== null) {
                  const routes = ['/courses', '/books', '/ai-assistant'];
                  window.location.href = routes[index];
                }
              }}
            />
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center space-x-2 btn-outline text-sm px-4 py-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
              {tabs.map((item) => {
                const Icon = item.icon;
                const routes = { 'Courses': '/courses', 'Books': '/books', 'AI Assistant': '/ai-assistant' };
                return (
                  <Link
                    key={item.title}
                    to={routes[item.title as keyof typeof routes]}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-card-border">
                <button className="flex items-center space-x-2 btn-outline text-sm justify-center">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};