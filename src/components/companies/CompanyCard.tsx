
import { Star, MessageCircle } from "lucide-react";
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
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
        featured ? 'border-2 border-primary' : ''
      }`}
    >
      <img
        src={company.logo}
        alt={company.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
          {company.category}
        </span>
        <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{company.rating}</span>
            <span className="ml-1 text-gray-600">
              ({company.reviews} avaliações)
            </span>
          </div>
          <div className="flex items-center gap-2">
            {onMessageClick && (
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-primary/10"
                onClick={() => onMessageClick(company.id)}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            )}
            <Link to={`/company/${company.id}`}>
              <Button>
                Ver Perfil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
