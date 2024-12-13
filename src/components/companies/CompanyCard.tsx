import { Star, Award, Heart, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CompanyCardProps {
  company: {
    id: number;
    name: string;
    logo: string;
    description: string;
    category: string;
    rating: number;
    reviews: number;
    featured?: boolean;
    location: string;
  };
  featured?: boolean;
}

const CompanyCard = ({ company, featured = false }: CompanyCardProps) => {
  return (
    <div className="group">
      <div className="flex space-x-4 p-4 rounded-lg border bg-card transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <img
          src={company.logo}
          alt={company.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <Link 
                to={`/company/${company.id}`}
                className="font-semibold text-lg hover:text-primary group-hover:underline"
              >
                {company.name}
              </Link>
              <p className="text-gray-600 text-sm line-clamp-2">{company.description}</p>
            </div>
            {featured && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Award className="w-5 h-5 text-secondary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Empresa em Destaque</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">{company.category}</span>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{company.rating}</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({company.reviews} avaliações)
              </span>
              <span className="text-sm text-gray-500 ml-4">
                {company.location}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Button size="sm" variant="outline" className="flex-1">
              Ver perfil completo
            </Button>
            <Button size="sm" variant="ghost" className="px-2">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="px-2">
              <BookmarkPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;