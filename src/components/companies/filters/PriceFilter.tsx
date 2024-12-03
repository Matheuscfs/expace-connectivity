import { Checkbox } from "@/components/ui/checkbox";

interface PriceFilterProps {
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
}

export const PriceFilter = ({
  priceRange,
  onPriceRangeChange,
}: PriceFilterProps) => {
  const priceRanges = [
    { min: 0, max: Infinity, label: "Tudo" },
    { min: 0, max: 250, label: "Até R$ 250" },
    { min: 0, max: 500, label: "Até R$ 500" },
    { min: 0, max: 1000, label: "Até R$ 1000" },
    { min: 1000, max: Infinity, label: "A partir de R$ 1000" },
  ];

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Preço</h3>
      <div className="space-y-2">
        {priceRanges.map((range) => (
          <label key={range.label} className="flex items-center">
            <Checkbox
              checked={priceRange[0] === range.min && priceRange[1] === range.max}
              onCheckedChange={() => onPriceRangeChange([range.min, range.max])}
              className="mr-2"
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};