import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const OffersSection = ({ user, className }: { user: any; className?: string }) => {
  const offers = user.offers || [];

  if (offers.length === 0) return null;

  return (
    <Card className={`p-4 ${className}`}>
      <h3 className="font-medium mb-4">Ofertas para você</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {offers.map((offer: any, index: number) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <Badge className="mb-2">Oferta Exclusiva</Badge>
            <h4 className="font-medium">{offer.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="text-sm line-through text-gray-500">R$ {offer.originalPrice}</span>
                <span className="text-lg font-bold text-primary ml-2">R$ {offer.discountPrice}</span>
              </div>
              <Button size="sm">Ver oferta</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};