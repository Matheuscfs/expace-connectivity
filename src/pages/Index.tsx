import Hero from "@/components/Hero";
import PopularServices from "@/components/PopularServices";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <PopularServices />
        <FeaturedCompanies />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Cadastre sua empresa hoje e alcance milhares de clientes!
            </h2>
            <p className="text-gray-600 mb-8">
              Vagas limitadas para destaque premium!
            </p>
            <Button size="lg" className="animate-pulse">
              Cadastre-se Agora
            </Button>
          </div>
        </section>

        <Newsletter />
      </main>
    </div>
  );
};

export default Index;