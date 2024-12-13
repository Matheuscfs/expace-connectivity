import { useState } from "react";
import { Search, MapPin, Star, Award } from "lucide-react";
import { companies, categories } from "@/data/mockCompanies";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CompanyFilters from "@/components/companies/CompanyFilters";
import { CompaniesList } from "@/components/companies/CompaniesList";
import { FeaturedCompanies } from "@/components/companies/FeaturedCompanies";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Filter companies based on search term
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Descubra Empresas no Ecossistema Xplace
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Busque por nome, categoria ou localização"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-white/70" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Companies */}
        <FeaturedCompanies companies={companies} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Filters */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CompanyFilters
                categories={categories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </Card>
          </aside>

          {/* Companies List */}
          <main className="lg:col-span-3">
            <CompaniesList
              companies={filteredCompanies}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>

        {/* CTA for Companies */}
        <div className="mt-16 text-center p-8 bg-accent rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Tem uma empresa? Cadastre-se no Xplace!
          </h2>
          <p className="text-gray-600 mb-6">
            Alcance novos clientes e faça parte do futuro do comércio digital
          </p>
          <Button size="lg" variant="default">
            Cadastrar Minha Empresa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;