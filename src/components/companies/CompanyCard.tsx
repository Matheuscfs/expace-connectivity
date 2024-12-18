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
    <div className="flex flex-col space-y-4 p-4 rounded-lg bg-white hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <Link to={`/company/${company.id}`} className="flex items-start space-x-4 group">
          <img
            src={company.logo}
            alt={company.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold group-hover:text-primary group-hover:underline">
              {company.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{company.description}</p>
            <span className="text-sm text-gray-500 block mt-1">{company.category}</span>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{company.rating}</span>
              <span className="text-sm text-gray-500 ml-2">{company.location}</span>
            </div>
          </div>
        </Link>
        {featured && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Award className="w-5 h-5 text-secondary" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Empresa Patrocinada</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex justify-end space-x-2">
        <Button size="sm" variant="ghost" className="px-2">
          <Heart className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="ghost" className="px-2">
          <BookmarkPlus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;