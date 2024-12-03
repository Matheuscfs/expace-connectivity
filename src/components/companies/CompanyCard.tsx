import { Star } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="flex space-x-4">
      <img
        src={company.logo}
        alt={company.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <Link 
              to={`/companies/${company.id}`}
              className="font-semibold text-lg hover:text-primary"
            >
              {company.name}
            </Link>
            <p className="text-gray-600 text-sm line-clamp-2">{company.description}</p>
          </div>
          {featured && (
            <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
              Destaque
            </span>
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
      </div>
    </div>
  );
};

export default CompanyCard;