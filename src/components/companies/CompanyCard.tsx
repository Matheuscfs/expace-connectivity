
import { Star, MessageCircle, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  onMessageClick?: (companyId: number) => void;
}

const CompanyCard = ({ company, featured, onMessageClick }: CompanyCardProps) => {
  return (
    <Link
      to={`/company/${company.id}`}
      className={`block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 ${
        featured ? 'ring-2 ring-primary' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={company.logo}
          alt={company.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{company.name}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600">
              {company.rating} • {company.reviews} avaliações
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {company.description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{company.location}</span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-primary/10"
          onClick={(e) => {
            e.preventDefault();
            onMessageClick?.(company.id);
          }}
        >
          <MessageCircle className="w-4 h-4" />
        </Button>
      </div>
    </Link>
  );
};

export default CompanyCard;
