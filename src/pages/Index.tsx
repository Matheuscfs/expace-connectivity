import Hero from "@/components/Hero";
import PopularServices from "@/components/PopularServices";
import { FeaturedCompanies } from "@/components/companies/FeaturedCompanies";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { companies } from "@/data/mockCompanies";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <PopularServices />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Empresas em Destaque
            </h2>
            <FeaturedCompanies companies={companies.filter(c => c.featured).slice(0, 6)} />
          </div>
        </div>
        <Testimonials />
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Cadastre sua empresa hoje e alcance milhares de clientes!
            </h2>
            <p className="text-gray-600 mb-8">
              Vagas limitadas para destaque premium!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/company-register"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                Cadastre sua Empresa
              </a>
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                Cadastre-se como Profissional
              </a>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;