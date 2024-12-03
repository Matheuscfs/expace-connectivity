import { MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProfileInfo = ({ user }: { user: any }) => {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Sobre</h3>
          <p className="text-sm text-gray-600">
            {user.bio || "Entusiasta de tecnologia e inovação, sempre em busca dos melhores serviços para meus projetos."}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{user.location || "São Paulo, SP"}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Star className="h-4 w-4" />
          <span>{user.reviewCount || 0} avaliações realizadas</span>
        </div>
      </div>
    </Card>
  );
};