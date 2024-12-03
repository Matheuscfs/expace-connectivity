import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const FavoritesSection = ({ user }: { user: any }) => {
  const favorites = user.favorites || [];

  return (
    <Card className="p-4">
      <h3 className="font-medium mb-4">Favoritos</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {favorites.map((favorite: any, index: number) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{favorite.name}</h4>
              <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <Heart className="h-4 w-4 fill-current" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">{favorite.description}</p>
          </div>
        ))}
        {favorites.length === 0 && (
          <p className="text-sm text-gray-500">Nenhum item favoritado</p>
        )}
      </div>
    </Card>
  );
};