import { Checkbox } from "@/components/ui/checkbox";

interface DiscountFilterProps {
  selectedDiscount: number;
  onDiscountChange: (discount: number) => void;
}

export const DiscountFilter = ({
  selectedDiscount,
  onDiscountChange,
}: DiscountFilterProps) => {
  const discounts = [
    { value: 0, label: "Tudo" },
    { value: 10, label: "10% de desconto ou mais" },
    { value: 25, label: "25% de desconto ou mais" },
  ];

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">Desconto</h3>
      <div className="space-y-2">
        {discounts.map((discount) => (
          <label key={discount.value} className="flex items-center">
            <Checkbox
              checked={selectedDiscount === discount.value}
              onCheckedChange={() => onDiscountChange(discount.value)}
              className="mr-2"
            />
            <span>{discount.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};