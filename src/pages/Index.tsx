import Hero from "@/components/Hero";
import PopularServices from "@/components/PopularServices";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import EcosystemHighlights from "@/components/EcosystemHighlights";
import SuccessStories from "@/components/SuccessStories";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <EcosystemHighlights />
        <PopularServices />
        <FeaturedCompanies />
        <SuccessStories />
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Faça parte do ecossistema do futuro
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já estão revolucionando seus negócios através da nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Solicite sua Primeira Cotação
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;