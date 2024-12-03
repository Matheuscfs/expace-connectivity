import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface RatingFilterProps {
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

export const RatingFilter = ({
  selectedRating,
  onRatingChange,
}: RatingFilterProps) => {
  const ratings = [
    { value: 0, label: "Tudo" },
    { value: 5, label: "5 estrelas" },
    { value: 4, label: "4 estrelas ou mais" },
    { value: 3, label: "3 estrelas ou mais" },
  ];

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Avaliações dos Clientes</h3>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label key={rating.value} className="flex items-center">
            <Checkbox
              checked={selectedRating === rating.value}
              onCheckedChange={() => onRatingChange(rating.value)}
              className="mr-2"
            />
            <span className="flex items-center">
              {rating.label}
              {rating.value > 0 && (
                <span className="ml-1 flex">
                  {Array.from({ length: rating.value }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};