
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchHeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

const SearchHero = ({
  searchTerm,
  onSearchChange,
  onSearch,
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchHeroProps) => {
  return (
    <div className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Encontre as Melhores Empresas para Seus Projetos
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onSearch} className="relative">
            <Input
              type="text"
              placeholder="Busque por empresas ou serviços..."
              className="w-full pl-12 pr-4 py-3 rounded-lg"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
            <Button 
              type="submit"
              variant="default"
              className="absolute right-2 top-2"
            >
              Buscar
            </Button>
          </form>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="outline"
              className={`gap-2 ${
                selectedCategory === "" ? "bg-primary text-white" : ""
              }`}
              onClick={() => onCategoryChange("")}
            >
              <MapPin className="w-4 h-4" />
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`gap-2 ${
                  selectedCategory === category ? "bg-primary text-white" : ""
                }`}
                onClick={() => onCategoryChange(category)}
              >
                <MapPin className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
