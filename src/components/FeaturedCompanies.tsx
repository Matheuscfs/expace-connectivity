import { Star } from "lucide-react";
import { companies } from "@/data/mockCompanies";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const FeaturedCompanies = () => {
  const featuredCompanies = companies.filter(company => company.featured).slice(0, 12);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Empresas em Destaque
          </h2>
          <p className="text-gray-600">
            Conheça as empresas mais bem avaliadas da plataforma
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredCompanies.map((company) => (
              <CarouselItem key={company.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Link to={`/company/${company.id}`}>
                  <Card className="backdrop-blur-sm bg-white/30 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold truncate">{company.name}</h3>
                        <p className="text-sm text-gray-600 truncate">{company.category}</p>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{company.rating}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500 truncate">{company.location}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCompanies;