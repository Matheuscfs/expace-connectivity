
import { Star, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface FiltersProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
}

const Filters = ({ priceRange, onPriceRangeChange }: FiltersProps) => {
  return (
    <aside className="w-full md:w-64 space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-medium flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4" />
          Filtros
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Localização
            </label>
            <Input
              type="text"
              placeholder="Digite sua cidade"
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Faixa de Preço
            </label>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={10}
              className="my-4"
              onValueChange={onPriceRangeChange}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>R$ {priceRange[0]}</span>
              <span>R$ {priceRange[1]}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Avaliação Mínima
            </label>
            <div className="space-y-2">
              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="radio" name="rating" className="hidden" />
                  <div className="flex items-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2">{rating}+ estrelas</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
