import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import PopularServices from "@/components/PopularServices";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PopularServices />
        <Hero />
        <FeaturedCompanies />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;