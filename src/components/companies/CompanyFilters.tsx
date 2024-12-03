import { Search, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CompanyFiltersProps {
  categories: string[];
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

const brazilianCities = [
  "São Paulo-SP",
  "Rio de Janeiro-RJ",
  "Belo Horizonte-MG",
  "Brasília-DF",
  "Salvador-BA",
  "Curitiba-PR",
  "Fortaleza-CE",
  "Recife-PE",
  "Porto Alegre-RS",
  "Manaus-AM",
  "Belém-PA",
  "Goiânia-GO",
  "Guarulhos-SP",
  "Campinas-SP",
  "São Luís-MA",
  "São Gonçalo-RJ",
  "Maceió-AL",
  "Duque de Caxias-RJ",
  "Campo Grande-MS",
  "Natal-RN",
];

const CompanyFilters = ({ categories, priceRange, setPriceRange }: CompanyFiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [citySearch, setCitySearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  // Initialize selected categories from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const cityParam = searchParams.get("city");
    const ratingParam = searchParams.get("rating");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");

    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    if (cityParam) {
      setCitySearch(cityParam);
    }
    if (ratingParam) {
      setSelectedRating(Number(ratingParam));
    }
    if (minPriceParam && maxPriceParam) {
      setPriceRange([Number(minPriceParam), Number(maxPriceParam)]);
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
  };

  const filteredCities = brazilianCities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleApplyFilters = () => {
    // Clear existing params
    searchParams.delete("category");
    searchParams.delete("city");
    searchParams.delete("rating");
    searchParams.delete("minPrice");
    searchParams.delete("maxPrice");

    // Add new params if they have values
    if (selectedCategories.length > 0) {
      searchParams.set("category", selectedCategories[0]);
    }
    if (citySearch) {
      searchParams.set("city", citySearch);
    }
    if (selectedRating > 0) {
      searchParams.set("rating", selectedRating.toString());
    }
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      searchParams.set("minPrice", priceRange[0].toString());
      searchParams.set("maxPrice", priceRange[1].toString());
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
          <Popover open={showSuggestions && filteredCities.length > 0} onOpenChange={setShowSuggestions}>
            <PopoverTrigger asChild>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite sua cidade"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={citySearch}
                  onChange={(e) => {
                    setCitySearch(e.target.value);
                    setShowSuggestions(true);
                  }}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start" sideOffset={5}>
              <div className="max-h-[200px] overflow-y-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setCitySearch(city);
                      setShowSuggestions(false);
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Avaliação mínima</h3>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${
                  star <= selectedRating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                onClick={() => setSelectedRating(star)}
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

        <button
          onClick={handleApplyFilters}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
        >
          Aplicar filtros
        </button>
      </CardContent>
    </Card>
  );
};

export default CompanyFilters;