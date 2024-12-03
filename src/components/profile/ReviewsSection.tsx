import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const ReviewsSection = ({ user }: { user: any }) => {
  const reviews = user.reviews || [];

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Minhas Avaliações</h3>
        <Button variant="outline" size="sm">Escrever avaliação</Button>
      </div>
      <div className="space-y-4">
        {reviews.map((review: any, index: number) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{review.company}</h4>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm">{review.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{review.comment}</p>
            <span className="text-xs text-gray-500 mt-2 block">{review.date}</span>
          </div>
        ))}
        {reviews.length === 0 && (
          <p className="text-sm text-gray-500">Nenhuma avaliação realizada</p>
        )}
      </div>
    </Card>
  );
};