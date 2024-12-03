import Header from "@/components/Header";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import PopularServices from "@/components/PopularServices";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="space-y-16">
          <PopularServices />
          <FeaturedCompanies />
          <Location />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;