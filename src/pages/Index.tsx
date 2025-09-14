import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TrustSection } from "@/components/TrustSection";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <TrustSection />
    </Layout>
  );
};

export default Index;
