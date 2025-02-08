
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { companies } from "@/data/mockCompanies";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import CompanyCard from "@/components/companies/CompanyCard";
import SearchHero from "@/components/companies/SearchHero";
import FeaturedCarousel from "@/components/companies/FeaturedCarousel";
import Filters from "@/components/companies/Filters";

const Companies = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories
  const uniqueCategories = Array.from(
    new Set(companies?.map((company) => company.category) || [])
  );

  // Get featured companies (limit to 9)
  const featuredCompanies = companies
    ?.filter(company => company.featured)
    .slice(0, 9);

  // Filter companies based on category
  const filteredCompanies = companies?.filter(company => {
    return selectedCategory === "" || company.category === selectedCategory;
  }) || [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Busca realizada",
      description: `Buscando por: ${searchTerm}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <SearchHero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={handleSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={uniqueCategories}
      />

      <FeaturedCarousel
        companies={featuredCompanies}
        onMessageClick={(id) => {
          console.log("Message clicked for company:", id);
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <Filters
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />

          <main className="flex-1">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  onMessageClick={(id) => {
                    console.log("Message clicked for company:", id);
                  }}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Companies;
