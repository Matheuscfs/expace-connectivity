import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Departamento</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <Checkbox
            checked={selectedCategories.length === 0}
            onCheckedChange={() => onCategoryChange("", true)}
            className="mr-2"
          />
          <span>Tudo</span>
        </label>
        {displayCategories.map((category) => (
          <label key={category} className="flex items-center">
            <Checkbox
              checked={selectedCategories.includes(category)}
              onCheckedChange={(checked) => 
                onCategoryChange(category, checked as boolean)
              }
              className="mr-2"
            />
            <span>{category}</span>
          </label>
        ))}
        {categories.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary text-sm hover:underline"
          >
            {showAll ? "Ver menos" : "Ver mais opções de filtro"}
          </button>
        )}
      </div>
    </div>
  );
};