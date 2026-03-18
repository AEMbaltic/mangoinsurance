import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteCalculator from "@/components/QuoteCalculator";
import TrustSection from "@/components/TrustSection";
import AboutFortegra from "@/components/AboutFortegra";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuoteCalculator />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
