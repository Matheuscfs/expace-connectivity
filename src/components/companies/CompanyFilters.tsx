import { Search, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface CompanyFiltersProps {
  categories: string[];
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

const CompanyFilters = ({ categories, priceRange, setPriceRange }: CompanyFiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Initialize selected categories from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories: string[];
    
    if (checked) {
      newCategories = [...selectedCategories, category];
    } else {
      newCategories = selectedCategories.filter(c => c !== category);
    }
    
    setSelectedCategories(newCategories);
    
    // Update URL params
    if (newCategories.length > 0) {
      searchParams.set("category", newCategories[0]);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Filtros</h2>
        
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Categorias</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => handleCategoryChange(category, e.target.checked)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Localização</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite sua cidade"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Avaliação mínima</h3>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Faixa de preço</h3>
          <Slider
            defaultValue={[0, 1000]}
            max={1000}
            step={50}
            className="my-4"
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}</span>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90">
          Aplicar filtros
        </button>
      </CardContent>
    </Card>
  );
};

export default CompanyFilters;