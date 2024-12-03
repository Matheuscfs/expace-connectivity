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
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Empresas em Destaque</h2>
        {Object.entries(companiesBySector).map(([sector, sectorCompanies]) => (
          <div key={sector} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{sector}</h3>
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {sectorCompanies.slice(0, 6).map((company) => (
                  <CarouselItem key={company.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                      />
                      <h3 className="text-xl font-semibold text-center mb-2">{company.name}</h3>
                      <div className="flex items-center justify-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-600">{company.rating}</span>
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