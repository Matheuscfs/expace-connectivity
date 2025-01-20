import { useState } from "react";
import { MapPin, Search, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CompanyFilters from "@/components/companies/CompanyFilters";
import { companies, categories } from "@/data/mockCompanies";
import Map from "@/components/Map";

const SearchCompanies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="O que você procura?"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Digite sua cidade ou use sua localização atual"
                className="pl-10"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Sliders className="h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  <CompanyFilters
                    categories={categories}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Map and Results */}
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 h-[600px] rounded-lg overflow-hidden">
            <Map />
          </div>

          {/* Results List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Empresas Encontradas</h2>
            <div className="space-y-4">
              {companies.slice(0, 5).map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{company.name}</h3>
                      <p className="text-sm text-gray-600">{company.category}</p>
                      <p className="text-sm text-gray-500">{company.location}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm font-medium">
                          {company.rating}
                        </span>
                        <span className="text-yellow-400 ml-1">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCompanies;