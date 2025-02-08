
import { Hero } from "@/components/Hero";
import PopularServices from "@/components/PopularServices";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PopularServices />
      <FeaturedCompanies />
      <Testimonials />
    </div>
  );
};

export default Index;
