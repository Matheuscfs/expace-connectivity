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
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Empresas em Destaque</h2>
        {Object.entries(companiesBySector).map(([sector, sectorCompanies]) => (
          <div key={sector} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">{sector}</h3>
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {sectorCompanies.slice(0, 6).map((company) => (
                  <CarouselItem key={company.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="backdrop-blur-sm bg-white/30 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                      />
                      <h3 className="text-lg font-semibold text-center mb-1">{company.name}</h3>
                      <p className="text-sm text-gray-600 text-center mb-1">{company.category}</p>
                      <p className="text-xs text-gray-500 text-center mb-2">{company.location}</p>
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{company.rating}</span>
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