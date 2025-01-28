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

// Mock coordinates for different cities
const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
  "São Paulo-SP": { lat: -23.550520, lng: -46.633308 },
  "Rio de Janeiro-RJ": { lat: -22.906847, lng: -43.172897 },
  "Curitiba-PR": { lat: -25.428954, lng: -49.267137 },
  "Florianópolis-SC": { lat: -27.594870, lng: -48.548219 },
  "Cascavel-PR": { lat: -24.955781, lng: -53.455109 },
  // Add more cities as needed
};

const transformCompanyLocation = (company: typeof companies[0]) => {
  const coordinates = cityCoordinates[company.location] || cityCoordinates["São Paulo-SP"];
  return {
    ...company,
    location: coordinates,
    address: company.address || `${company.name} - ${company.location}` // Ensure address is always present
  };
};

const SearchCompanies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Transform companies data to include proper location coordinates
  const companiesWithLocations = companies.map(transformCompanyLocation);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Search Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
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
                <Button variant="outline" className="gap-2 whitespace-nowrap">
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
      <div className="flex-1 flex">
        {/* Map Container */}
        <div className="flex-1 relative">
          <Map companies={companiesWithLocations} />
        </div>

        {/* Results Sidebar */}
        <div className="w-96 bg-white border-l overflow-y-auto h-[calc(100vh-80px)]">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Empresas Encontradas</h2>
            <div className="space-y-4">
              {companies.slice(0, 5).map((company) => (
                <div
                  key={company.id}
                  className="bg-accent p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
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
                        <span className="text-sm text-gray-500 ml-1">
                          ({company.reviews} avaliações)
                        </span>
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