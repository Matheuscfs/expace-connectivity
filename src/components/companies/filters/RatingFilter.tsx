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
    { value: 0, label: "" },
    { value: 5, label: "" },
    { value: 4, label: "" },
    { value: 3, label: "" },
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
              {rating.value === 0 ? (
                <span>Tudo</span>
              ) : (
                <span className="flex">
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