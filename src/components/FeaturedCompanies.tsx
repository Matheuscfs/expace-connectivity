import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { companies } from "@/data/mockCompanies";

const FeaturedCompanies = () => {
  // Get top rated company from each category, limited to 4 total
  const topCompaniesByCategory = Array.from(
    new Set(companies.map((company) => company.category))
  )
    .map((category) => {
      return companies
        .filter((company) => company.category === category)
        .sort((a, b) => b.rating - a.rating)[0];
    })
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Empresas em Destaque</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {topCompaniesByCategory.map((company) => (
              <CarouselItem key={company.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start space-x-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{company.category}</p>
                      <p className="text-sm text-gray-500 mb-2">{company.location}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{company.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCompanies;