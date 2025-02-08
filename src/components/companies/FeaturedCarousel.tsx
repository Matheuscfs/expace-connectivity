
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CompanyCard from "./CompanyCard";
import type { Company } from "@/data/mockCompanies";

interface FeaturedCarouselProps {
  companies: Company[];
  onMessageClick: (id: number) => void;
}

const FeaturedCarousel = ({ companies, onMessageClick }: FeaturedCarouselProps) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Empresas em Destaque
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {companies.map((company) => (
              <CarouselItem key={company.id} className="basis-1/3 pl-4">
                <CompanyCard 
                  company={company}
                  featured
                  onMessageClick={onMessageClick}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
