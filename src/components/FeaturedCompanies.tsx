import { Star } from "lucide-react";
import { companies } from "@/data/mockCompanies";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card } from "./ui/card";

const FeaturedCompanies = () => {
  // Group companies by sector
  const companiesBySector = companies.reduce((acc, company) => {
    const sector = company.category;
    if (!acc[sector]) {
      acc[sector] = [];
    }
    acc[sector].push(company);
    return acc;
  }, {} as Record<string, typeof companies>);

  return (
    <section className="py-8 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Empresas em Destaque</h2>
        {Object.entries(companiesBySector).map(([sector, sectorCompanies]) => (
          <div key={sector} className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-primary">{sector}</h3>
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {sectorCompanies.slice(0, 6).map((company) => (
                  <CarouselItem key={company.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="backdrop-blur-sm bg-white/30 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold truncate">{company.name}</h3>
                          <p className="text-xs text-gray-600 truncate">{company.category}</p>
                          <div className="flex items-center mt-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="ml-1 text-xs text-gray-600">{company.rating}</span>
                            <span className="mx-1 text-gray-300">•</span>
                            <span className="text-xs text-gray-500 truncate">{company.location}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;