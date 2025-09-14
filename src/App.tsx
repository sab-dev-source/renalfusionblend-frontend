import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnMount } from "./components/ScrollToTopOnMount";
import Index from "./pages/Index";
import Products from "./pages/Products";
import MedicalEquipment from "./pages/MedicalEquipment";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import Books from "./pages/Books";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import { ProductDetail } from "./components/ProductDetail";

const queryClient = new QueryClient();

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Let LoadingScreen control when it completes via onComplete
  // No auto-dismiss timer here to ensure the shutter is visible

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LoadingScreen 
            isLoading={isInitialLoading} 
            onComplete={() => setIsInitialLoading(false)} 
          />
          <BrowserRouter>
            <ScrollToTopOnMount />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/medical" element={<MedicalEquipment />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/books" element={<Books />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
            <ScrollToTop />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
