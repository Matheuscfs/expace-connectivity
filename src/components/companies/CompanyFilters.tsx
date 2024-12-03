import { Search } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CategoryFilter } from "./filters/CategoryFilter";
import { RatingFilter } from "./filters/RatingFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { DiscountFilter } from "./filters/DiscountFilter";

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
  const [selectedDiscount, setSelectedDiscount] = useState<number>(0);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const cityParam = searchParams.get("city");
    const ratingParam = searchParams.get("rating");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const discountParam = searchParams.get("discount");

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
    if (discountParam) {
      setSelectedDiscount(Number(discountParam));
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === "") {
      setSelectedCategories([]);
      return;
    }
    
    let newCategories: string[];
    if (checked) {
      newCategories = [category];
    } else {
      newCategories = selectedCategories.filter(c => c !== category);
    }
    setSelectedCategories(newCategories);
  };

  const filteredCities = brazilianCities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories[0]);
    }
    if (citySearch) {
      params.set("city", citySearch);
    }
    if (selectedRating > 0) {
      params.set("rating", selectedRating.toString());
    }
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    if (selectedDiscount > 0) {
      params.set("discount", selectedDiscount.toString());
    }

    setSearchParams(params);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>
      
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

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

      <RatingFilter
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />

      <PriceFilter
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
      />

      <DiscountFilter
        selectedDiscount={selectedDiscount}
        onDiscountChange={setSelectedDiscount}
      />

      <button
        onClick={handleApplyFilters}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
      >
        Aplicar filtros
      </button>
    </div>
  );
};

export default CompanyFilters;
